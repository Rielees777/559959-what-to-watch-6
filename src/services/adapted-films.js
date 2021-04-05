
export const adaptToClientFilm = (film) => {
  const adaptedFilm = Object.assign(
      {},
      film,
      {
        id: film.id,
        name: film.name,
        genre: film.genre,
        released: film.released,
        rating: film.rating,
        runtime: film.run_time,
        scoresCount: film.scores_count,
        description: film.description,
        director: film.director,
        starring: film.starring,
        previewImage: film.preview_image,
        backgroundImage: film.background_image,
        backgroundColor: film.background_color,
        posterImage: film.poster_image,
        videoLink: film.video_link,
        previewVideoLink: film.preview_video_link,
        isFavorite: film.is_favorite
      }
  );
  delete adaptedFilm.preview_image;
  delete adaptedFilm.background_image;
  delete adaptedFilm.poster_image;
  delete adaptedFilm.video_link;
  delete adaptedFilm.preview_video_link;
  delete adaptedFilm.scores_count;
  delete adaptedFilm.is_favorite;
  delete adaptedFilm.run_time;

  return adaptedFilm;
};
