import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_GENRE: `data/changeGenre`,
  LOAD_FILMS: `data/loadFilms`,
  LOAD_FILM: `data/loadFilm`,
  LOAD_PROMO_FILM: `data/loadPromoFilm`,
  LOAD_REVIEWS: `data/loadReviews`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  REDIRECT_TO_ROUTE: `user/redirectToRoute`
};


export const changeGenre = createAction(ActionType.LOAD_FILMS, (genre) => {
  return {
    payload: genre,
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
export const loadPromoFilm = createAction(ActionType.LOAD_PROMO_FILM, (promoFilm) => {
  return {
    payload: promoFilm,
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
