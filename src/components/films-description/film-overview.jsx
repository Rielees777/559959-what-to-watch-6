import React from 'react';

const FilmOverview = ({film}) => {

  const {description, rating, scoresCount, director, starring} = film;

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Very good</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring + `,`}</strong></p>
      </div>
    </React.Fragment>
  );
};

export default FilmOverview;
