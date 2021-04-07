import React from 'react';
import PropTypes from 'prop-types';


const FilmDetails = ({film}) => {

  const {genre, director, starring, runtime, released} = film;
  const convertTime = (time) => {
    return `${Math.floor(time / 60) ? Math.floor(time / 60) + `h` : ``} ${time % 60 + `m`}`;
  };
  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {starring.map((item) => <React.Fragment key={`${item}`}>{item + `,`}{<br />}</ React.Fragment>)}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{convertTime(runtime)}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
};

FilmDetails.propTypes = {
  film: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    runtime: PropTypes.number.isRequired,
  }),

};
export default FilmDetails;
