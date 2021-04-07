import React, {useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {fetchFilm, fetchFilms, changeFavoriteFilmStatus} from '../../store/api-actions';
import LoadingScreen from '../loading/loading';
import {AuthorizationStatus, SIMILAR_FILMS_COUNTER} from '../../const';
import GuestUser from '../guest-user/guest-user';
import AuthorizedUser from '../authorized-user/authorized-user';
import FilmList from '../films-list/films-list';
import FilmTabs from './film-tabs';
import Logotype from '../logotype/logotype';

const Film = () => {

  const {film, films, isFilmLoaded, onLoadFilms} = useSelector((state) => state.DATA);
  const {authorizationStatus} = useSelector((state) => state.USER);

  const dispatch = useDispatch();
  let {filmId} = useParams();

  useEffect(() => {
    dispatch(fetchFilm(filmId));
    dispatch(fetchFilms());
  }, [filmId, onLoadFilms]);

  if (!isFilmLoaded) {
    return (
      <LoadingScreen />
    );
  }
  const {name, posterImage, backgroundImage, genre, released, backgroundColor, isFavorite} = film;
  return (
    <React.Fragment>
      <section className="movie-card movie-card--full" style={{backgroundColor: `${backgroundColor}`}}>
        <div className="movie-card__hero">
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
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">
                <Link to={`/player/${filmId}`} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <button
                  onClick = {() => dispatch(changeFavoriteFilmStatus(filmId, Number(!isFavorite)))}
                  className="btn btn--list movie-card__button"
                  type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                {authorizationStatus === AuthorizationStatus.AUTH ? <Link to={`/films/${filmId}/addreview`} className="btn movie-card__button">Add review</Link> : ``}
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <FilmTabs film={film} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__movies-list">
            <FilmList films={films.filter((item) => item.genre === film.genre).slice(0, SIMILAR_FILMS_COUNTER)}/>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Film;
