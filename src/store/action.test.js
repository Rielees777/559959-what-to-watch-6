import {
  changeGenre,
  loadFilms,
  loadFilm,
  ActionType
} from './action';

describe(`Action creators work correctly`, () => {
  it(`Action creator for genre change returns correct action`, () => {
    const expectAction = {
      type: ActionType.CHANGE_GENRE,
      payload: `All genres`,
    };

    expect(changeGenre(`All genres`)).toEqual(expectAction);
  });

  it(`Action creator for films load returns correct action`, () => {
    const expectAction = {
      type: ActionType.LOAD_FILMS,
      payload: []
    };
    const films = [];

    expect(loadFilms(films)).toEqual(expectAction);
  });

  it(`Action creator fo film load returns correct action`, () => {
    const expectAction = {
      type: ActionType.LOAD_FILM,
      payload: {}
    };
    const film = {};

    expect(loadFilm(film)).toEqual(expectAction);
  });
});
