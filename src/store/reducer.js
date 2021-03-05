import films from '../mocks/films';
import {ActionType} from './action';

const initialState = {
  currentFilter: `All genres`,
  films: films,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        currentFilter: action.payload
      };
  }
  return state;
};

export {reducer};
