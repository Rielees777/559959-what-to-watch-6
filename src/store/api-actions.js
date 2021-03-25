import {loadFilms, loadFilm, loadPromoFilm, requireAuthorization, redirectToRoute, loadReviews} from "./action";
import {AuthorizationStatus} from "../const";

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(loadFilms(data)))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => dispatch(loadPromoFilm(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => {
  api.get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {});
};

export const login = ({login: email, password}) => (dispatch, _getState, api) => {
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(`/mylist`)));
};
export const fetchFilm = (filmId) => (dispatch, _getState, api) => (
  api.get(`/films/${filmId}`)
    .then(({data}) => dispatch(loadFilm(data)))
);
export const fetchReviews = (filmId) => (dispatch, _getState, api) => {
  api.get(`/comments/${filmId}`)
    .then(({data}) => dispatch(loadReviews(data)))
    .catch(() => {});
};
export const logout = () => (dispatch, _getState, api) => {
  api.get(`/logout`)
  .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)));
};
