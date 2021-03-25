import React, {useState} from 'react';
import {Link} from 'react-router-dom';
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
            <Link
              className="movie-nav__link"
              onClick = {(evt) => {
                evt.preventDefault();
                setActiveTab(`Overview`);
              }}>Overview</Link>
          </li>
          <li className={`movie-nav__item ${activeTab === `Details` ? `movie-nav__item--active` : ``}`}>
            <Link
              className="movie-nav__link"
              onClick = {(evt) => {
                evt.preventDefault();
                setActiveTab(`Details`);
              }}>Details</Link>
          </li>
          <li className={`movie-nav__item ${activeTab === `Reviews` ? `movie-nav__item--active` : ``}`}>
            <Link
              className="movie-nav__link"
              onClick = {(evt) => {
                evt.preventDefault();
                setActiveTab(`Reviews`);
              }}>Reviews</Link>
          </li>
        </ul>
      </nav>
      {getActiveTab(activeTab)}
    </div>
  );
};

export default FilmTabs;
