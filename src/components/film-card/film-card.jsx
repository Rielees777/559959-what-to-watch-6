import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-payer/video-player';

const FilmCard = ({name, preview_image, preview_video_link}) => {

  return (
    <article className="small-movie-card catalog__movies-card">

      <VideoPlayer
        poster={preview_image}
        src={preview_video_link} />

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
