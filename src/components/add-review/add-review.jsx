import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {fetchFilm, addReview} from '../../store/api-actions';
import LoadingScreen from '../loading/loading';
import {useParams} from 'react-router-dom';
import {ratingStarsCount} from '../../const';
import Logotype from '../logotype/logotype';

const MessageLength = {
  MAX: 400,
  MIN: 50
};


const runTextAriaValidation = (evt) => {
  let textArea = evt.target;
  let textValue = textArea.value.length;
  if (textValue < MessageLength.MIN) {
    textArea.setCustomValidity(`Min text length is: ${MessageLength.MIN}`);
  } else if (textValue > MessageLength.MAX) {
    textArea.setCustomValidity(`Max text length is: ${MessageLength.MAX}`);
  } else {
    textArea.setCustomValidity(``);
  }
};

const AddReview = () => {
  let {filmId} = useParams();
  const [comment, setComment] = useState(``);
  const handleTextareaChange = (evt) => {
    evt.preventDefault();
    runTextAriaValidation(evt);
    setComment(evt.target.value);
  };

  const [rating, setRating] = useState(1);
  const handleRatingChange = (evt) => {

    setRating(parseInt(evt.target.value, 10));
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addReview(filmId, rating, comment));

  };

  const {film, isFilmLoaded} = useSelector((state) => state.DATA);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFilm(filmId));
  }, [isFilmLoaded]);

  if (!isFilmLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const {backgroundImage, name, posterImage, backgroundColor} = film;

  return (
    <section className="movie-card movie-card--full" style={{backgroundColor: `${backgroundColor}`}}>
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logotype />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="movie-page.html" className="breadcrumbs__link">{name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form
          onSubmit={handleFormSubmit}
          action="#"
          className="add-review__form"
        >
          <div className="rating">
            <div className="rating__stars">
              {ratingStarsCount.map((item, index) =>
                <React.Fragment key={`star-${index}`}>
                  <input
                    onChange={handleRatingChange}
                    className="rating__input"
                    id={`star-${index}`}
                    type="radio"
                    name="rating"
                    value={index + 1}
                    checked={rating === item}
                  />
                  <label className="rating__label" htmlFor={`star-${index}`}>Rating {index + 1}</label>
                </ React.Fragment>
              )}
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              onChange={handleTextareaChange}
              value={comment}
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              minLength="50"
              maxLength="400"
            />
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>
          </div>
        </form>
      </div>

    </section>
  );
};

AddReview.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        posterImage: PropTypes.string.isRequired,
        backgroundImage: PropTypes.string.isRequired,
      })
  ),
};
export default AddReview;
