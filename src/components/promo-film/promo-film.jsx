import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchPromoFilm} from '../../store/api-actions';
import PropTypes from 'prop-types';
import LoadingScreen from '../loading/loading';

const PromoFilm = ({promoFilm, isPromoFilmLoaded, onLoadPromoFilm}) => {
  useEffect(() => {
    onLoadPromoFilm();
  }, [onLoadPromoFilm]
  );
  if (!isPromoFilmLoaded) {
    return (
      <LoadingScreen />
    );
  }
  const adaptToClient = (film) =>{
    const adaptedFilm = Object.assign(
        {},
        promoFilm,
        {
          backgroundImage: film.background_image,
          posterImage: film.poster_image
        }
    );
    delete adaptedFilm.background_image;
    delete adaptedFilm.poster_image;

    return adaptedFilm;
  };

  const {name, genre, released, backgroundImage, posterImage} = adaptToClient(promoFilm);

  return (
    <React.Fragment>
      <div className="movie-card__bg">
        <img src={backgroundImage} alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>
      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={posterImage} alt={name + ` poster`} width="218"
              height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

PromoFilm.propTypes = {
  promoFilm: PropTypes.shape({
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired
  }),
  isPromoFilmLoaded: PropTypes.bool.isRequired,
  onLoadPromoFilm: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  promoFilm: state.promoFilm,
  isPromoFilmLoaded: state.isPromoFilmLoaded,
});
const mapDispatchToProps = (dispatch) => ({
  onLoadPromoFilm() {
    dispatch(fetchPromoFilm());
  }
});

export {PromoFilm};
export default connect(mapStateToProps, mapDispatchToProps)(PromoFilm);