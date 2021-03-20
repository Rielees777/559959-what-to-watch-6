import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FilmsList from '../films-list/films-list';
import PromoFilm from '../promo-film/promo-film';
import GenreFilter from '../genre-filter/genre-filter';
import {fetchFilms} from '../../store/api-actions';
import LoadingScreen from '../loading/loading';

const MainPage = (props) => {
  const {currentFilter, films, isFilmsLoaded, onLoadFilms} = props;

  useEffect(() => {
    onLoadFilms();
  }, [onLoadFilms]);

  const filtredFilms = () => {
    if (currentFilter === `All genres`) {
      return films;
    } else {
      return films.filter((film) => film.genre === currentFilter);
    }
  };
  if (!isFilmsLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <React.Fragment>
      <section className="movie-card">
        <PromoFilm />
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreFilter />

          <FilmsList films={filtredFilms()}/>

        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
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
    </React.Fragment >
  );
};

MainPage.propTypes = {
  films: PropTypes.array.isRequired,
  isFilmsLoaded: PropTypes.bool.isRequired,
  onLoadFilms: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired,
};


const mapStateToProps = (state) => ({
  films: state.films,
  isFilmsLoaded: state.isFilmsLoaded,
  currentFilter: state.currentFilter,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFilms() {
    dispatch(fetchFilms());
  }
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
