import React from 'react';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-payer/video-player';

const FilmCard = (films) => {
  const history = useHistory();
  const adaptToClient = (film) =>{
    const adaptedFilm = Object.assign(
        {},
        films,
        {
          previewImage: film.preview_image,
          previewVideoLink: film.preview_video_link
        }
    );
    delete adaptedFilm.background_image;
    delete adaptedFilm.poster_image;

    return adaptedFilm;
  };
  const {id, name, previewImage, previewVideoLink} = adaptToClient(films);
  return (
    <article
      onClick={() => history.push(`/films/${id}`)}
      className="small-movie-card catalog__movies-card">

      <VideoPlayer
        poster={previewImage}
        src={previewVideoLink} />

      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
        >{name}</a>
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
