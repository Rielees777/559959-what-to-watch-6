import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchReviews} from '../../store/api-actions';
import Review from '../review/review';
import LoadingScreen from '../loading/loading';
import PropTypes from 'prop-types';

const FilmReviews = ({film}) => {
  const {reviews, isReviewsLoaded} = useSelector((state) => state.DATA);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReviews(film.id));
  }, [isReviewsLoaded]);

  if (!isReviewsLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <React.Fragment>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">

          {reviews.slice(0, Math.ceil(reviews.length / 2)).map((item) =>
            <Review
              key={item.id}
              rating={item.rating}
              comment={item.comment}
              author={item.user.name}
              date={item.date}
            />)}

        </div>
        <div className="movie-card__reviews-col">

          {reviews.slice(Math.ceil(reviews.length / 2)).map((item) =>
            <Review
              key={item.id}
              rating={item.rating}
              comment={item.comment}
              author={item.user.name}
              date={item.date}
            />)}

        </div>
      </div>
    </React.Fragment>
  );
};
FilmReviews.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
};

export default FilmReviews;
