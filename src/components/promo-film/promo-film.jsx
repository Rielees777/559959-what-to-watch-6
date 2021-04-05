import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPromoFilm, changeFavoriteFilmStatus} from '../../store/api-actions';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import LoadingScreen from '../loading/loading';
import GuestUser from '../guest-user/guest-user';
import AuthorizedUser from '../authorized-user/authorized-user';
import {AuthorizationStatus} from '../../const';
import {adaptToClientFilm} from '../../services/adapted-films';
import Logotype from '../logotype/logotype';

const PromoFilm = () => {
  const {promoFilm, isPromoFilmLoaded, onLoadPromoFilm} = useSelector((state) => state.DATA);
  const {authorizationStatus} = useSelector((state) => state.USER);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPromoFilm());
  }, [onLoadPromoFilm]
  );
  if (!isPromoFilmLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const {id, name, genre, released, backgroundImage, posterImage, isFavorite} = adaptToClientFilm(promoFilm);

  return (
    <React.Fragment>
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <Logotype />

        {authorizationStatus === AuthorizationStatus.NO_AUTH
          ? <GuestUser /> : <AuthorizedUser />}
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
              <Link to={`/player/${id}`} className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </Link>
              <button
                onClick = {() => dispatch(changeFavoriteFilmStatus(id, Number(!isFavorite)))}
                className="btn btn--list movie-card__button"
                type="button">
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
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired
  }),
  onLoadPromoFilm: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

export default PromoFilm;
