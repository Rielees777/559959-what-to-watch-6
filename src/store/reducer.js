import {ActionType} from './action';
import {AuthorizationStatus} from '../const';

const initialState = {
  currentFilter: `All genres`,
  films: [],
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isFilmsLoaded: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        currentFilter: action.payload
      };
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
        isFilmsLoaded: true
      };
    case ActionType.LOAD_PROMO_FILM:
      return {
        ...state,
        promoFilm: action.payload,
        isPromoFilmLoaded: true
      };
    case ActionType.LOAD_AUTH_INFO:
      return {
        ...state,
        authInfo: action.payload,
        isAuthInfoLoaded: true
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };
  }
  return state;
};

export {reducer};
