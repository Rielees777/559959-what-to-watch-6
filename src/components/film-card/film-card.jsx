import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-payer/video-player';

const FilmCard = ({name, previewImage, previewVideoLink}) => {

  return (
    <article className="small-movie-card catalog__movies-card">

      <VideoPlayer
        poster={previewImage}
        src={previewVideoLink} />

      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html">{name}</a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  name: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired
};

export default FilmCard;
