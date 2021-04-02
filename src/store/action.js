import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_GENRE: `data/changeGenre`,
  GET_FILTRED_FILMS: `data/getFiltredFilms`,
  LOAD_FILMS: `data/loadFilms`,
  LOAD_FILM: `data/loadFilm`,
  LOAD_PROMO_FILM: `data/loadPromoFilm`,
  LOAD_FAVORITE_FILMS: `data/loadFavoriteFilms`,
  ADD_REVIEW: `data/addReview`,
  LOAD_REVIEWS: `data/loadReviews`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  REDIRECT_TO_ROUTE: `user/redirectToRoute`
};


export const changeGenre = createAction(ActionType.CHANGE_GENRE, (genre) => {
  return {
    payload: genre,
  };
});

export const getFiltredFilms = createAction(ActionType.GET_FILTRED_FILMS, (filtredFilms) => {
  return {
    payload: filtredFilms,
  };
});

export const loadFilms = createAction(ActionType.LOAD_FILMS, (films) => {
  return {
    payload: films,
  };
});

export const loadFilm = createAction(ActionType.LOAD_FILM, (film) => {
  return {
    payload: film,
  };
});
export const loadFavoriteFilms = createAction(ActionType.LOAD_FAVORITE_FILMS, (favoriteFilms) => {
  return {
    payload: favoriteFilms,
  };
});
export const loadPromoFilm = createAction(ActionType.LOAD_PROMO_FILM, (promoFilm) => {
  return {
    payload: promoFilm,
  };
});
export const addReviews = createAction(ActionType.ADD_REVIEW, (review) => {
  return {
    payload: review,
  };
});
export const loadReviews = createAction(ActionType.LOAD_REVIEWS, (reviews) => {
  return {
    payload: reviews,
  };
});
export const loadAuthInfo = createAction(ActionType.LOAD_AUTH_INFO, (authInfo) => {
  return {
    payload: authInfo,
  };
});
export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => {
  return {
    payload: status,
  };
});
export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => {
  return {
    payload: url,
  };
});
