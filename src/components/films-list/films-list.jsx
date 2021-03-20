import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card';
import {FILMS_COUNT_PER_STEP} from '../../const';
import LoadMoreButton from '../load-more-button/load-more-button';


const FilmsList = ({films}) => {
  const [filmsCount, setFilmsCount] = useState(FILMS_COUNT_PER_STEP);
  const getFilms = (filmsArr) => {
    return filmsArr.slice(0, filmsCount);

  };

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {getFilms(films).map((film) => (
          <FilmCard key={film.id} {...film}/>
        ))}
      </div>
      {(filmsCount >= films.length)
        ? `` : <LoadMoreButton
          onClickLoadMoreButton={() => setFilmsCount(filmsCount + FILMS_COUNT_PER_STEP)}
        />}
    </React.Fragment>
  );
};

FilmsList.propTypes = {
  films: PropTypes.array.isRequired
};

export default FilmsList;
