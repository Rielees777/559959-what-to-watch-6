import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchFavoriteFilms} from '../../store/api-actions';
import FilmCard from '../film-card/film-card';
import LoadingScreen from '../loading/loading';
import Logotype from '../logotype/logotype';
import {adaptToClientFilm} from "../../services/adapted-films";

const MyList = () => {
  const {favoriteFilms, isFavoriteFilmsLoaded} = useSelector((state) => state.DATA);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteFilms());
  }, [isFavoriteFilmsLoaded]);

  if (!isFavoriteFilmsLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logotype />

        <h1 className="page-title user-page__title">My list</h1>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__movies-list">
          {favoriteFilms.map((film) => <FilmCard key={film.id} {...adaptToClientFilm(film)}/>)}
        </div>
      </section>

      <footer className="page-footer">
        <Logotype />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

export default MyList;
