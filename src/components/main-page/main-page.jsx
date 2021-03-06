import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import FilmsList from '../films-list/films-list';
import PromoFilm from '../promo-film/promo-film';
import GenreFilter from '../genre-filter/genre-filter';
import {fetchFilms} from '../../store/api-actions';
import LoadingScreen from '../loading/loading';
import LoadMoreButton from '../load-more-button/load-more-button';
import Logotype from '../logotype/logotype';
import {FILMS_COUNT_PER_STEP} from '../../const';

const MainPage = () => {
  const [filmsCount, setFilmsCount] = useState(FILMS_COUNT_PER_STEP);
  const [loadMoreButtonVisible, setLoadMoreButtonVisible] = useState(true);
  const handleLoadMoreButton = () => {
    if (filmsCount + FILMS_COUNT_PER_STEP < films.length) {
      setFilmsCount(filmsCount + FILMS_COUNT_PER_STEP);
      return;
    }

    setFilmsCount(films.length);
    setLoadMoreButtonVisible(false);
  };
  const {films, currentFilter, isFilmsLoaded} = useSelector((state) => state.DATA);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFilms());
  }, [isFilmsLoaded]);

  if (!isFilmsLoaded) {
    return (
      <LoadingScreen />
    );
  }


  const getFiltredFilms = () => {
    if (currentFilter === `All genres`) {
      return films;
    } else {
      return films.filter((item) => currentFilter === item.genre);
    }
  };
  return (
    <React.Fragment>
      <section className="movie-card">
        <PromoFilm />
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreFilter />
          <FilmsList films={getFiltredFilms().slice(0, filmsCount)}/>
          {loadMoreButtonVisible && <LoadMoreButton onLoadMoreFilms={handleLoadMoreButton}/>}

        </section>

        <footer className="page-footer">
          <Logotype />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment >
  );
};

export default MainPage;
