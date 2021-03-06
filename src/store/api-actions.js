import {loadFilms, loadFilm, loadPromoFilm, requireAuthorization, loadFavoriteFilms, redirectToRoute, loadReviews} from "./action";
import {AuthorizationStatus} from "../const";
import {adaptToClientFilm} from "../services/adapted-films";
import browserHistory from "../browser-history";

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(loadFilms(data.map(adaptToClientFilm))))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => dispatch(loadPromoFilm(adaptToClientFilm(data))))
);


export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(({response}) => {
      if (response.status === 404) {
        browserHistory.push(`/404`);
      }
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(`/`)))
);
export const fetchFavoriteFilms = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => dispatch(loadFavoriteFilms(data)))
);
export const changeFavoriteFilmStatus = (filmId, favoriteFilmStatus) => (dispatch, _getState, api) => {
  api.post(`/favorite/${filmId}/${favoriteFilmStatus}`, {filmId, favoriteFilmStatus})
    .then(() => dispatch(fetchFavoriteFilms()));
};
export const fetchFilm = (filmId) => (dispatch, _getState, api) => (
  api.get(`/films/${filmId}`)
    .then(({data}) => dispatch(loadFilm(adaptToClientFilm(data))))
    .catch(() => {})
);
export const addReview = (filmId, rating, comment) => (dispatch, _getState, api) => {
  api.post(`/comments/${filmId}`, {rating, comment})
    .then(() => dispatch(redirectToRoute(`/films/${filmId}`)));
};
export const fetchReviews = (filmId) => (dispatch, _getState, api) => {
  api.get(`/comments/${filmId}`)
    .then(({data}) => dispatch(loadReviews(data)))
    .catch(() => {});
};
export const logout = () => (dispatch, _getState, api) => {
  api.get(`/logout`)
  .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)));
};
