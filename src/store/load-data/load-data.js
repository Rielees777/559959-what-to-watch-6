import {ActionType} from '../action';

const initialState = {
  currentFilter: `All genres`,
  films: [],
  isFilmsLoaded: false
};

const loadData = (state = initialState, action) => {
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
    case ActionType.LOAD_FILM:
      return {
        ...state,
        film: action.payload,
        isFilmLoaded: true
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        isReviewsLoaded: true
      };
    case ActionType.LOAD_PROMO_FILM:
      return {
        ...state,
        promoFilm: action.payload,
        isPromoFilmLoaded: true
      };
  }
  return state;
};

export {loadData};
