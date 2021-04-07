import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FilmOverview from './film-overview';
import FilmDetails from './film-details';
import FilmReviews from './film-reviews';

const FilmTabs = ({film}) => {
  const [activeTab, setActiveTab] = useState(`Overview`);


  const getActiveTab = () => {
    switch (activeTab) {
      case `Details`:
        return (
          <FilmDetails film={film} />
        );
      case `Reviews`:
        return (
          <FilmReviews film={film} />
        );
      case `Overview`:
      default:
        return (
          <FilmOverview film={film} />
        );
    }
  };
  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className={`movie-nav__item ${activeTab === `Overview` ? `movie-nav__item--active` : ``}`}>
            <a
              className="movie-nav__link"
              onClick = {(evt) => {
                evt.preventDefault();
                setActiveTab(`Overview`);
              }}>Overview</a>
          </li>
          <li className={`movie-nav__item ${activeTab === `Details` ? `movie-nav__item--active` : ``}`}>
            <a
              className="movie-nav__link"
              onClick = {(evt) => {
                evt.preventDefault();
                setActiveTab(`Details`);
              }}>Details</a>
          </li>
          <li className={`movie-nav__item ${activeTab === `Reviews` ? `movie-nav__item--active` : ``}`}>
            <a
              className="movie-nav__link"
              onClick = {(evt) => {
                evt.preventDefault();
                setActiveTab(`Reviews`);
              }}>Reviews</a>
          </li>
        </ul>
      </nav>
      {getActiveTab(activeTab)}
    </div>
  );
};

FilmTabs.propTypes = {
  film: PropTypes.object.isRequired,
};

export default FilmTabs;
