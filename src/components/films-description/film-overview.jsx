import React from 'react';
import PropTypes from 'prop-types';
import {RatingCount, RatingName} from '../../const';

const FilmOverview = ({film}) => {

  const {description, rating, scoresCount, director, starring} = film;
  const ratingValue = Object.keys(RatingCount).find((item) => RatingCount[item] >= rating);
  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{RatingName[ratingValue]}</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)}</strong></p>
      </div>
    </React.Fragment>
  );
};

FilmOverview.propTypes = {
  film: PropTypes.shape({
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),

};

export default FilmOverview;
