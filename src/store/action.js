export const ActionType = {
  CHANGE_GENRE: `changeGenre`,
  GET_FILTERED_FILMS: `getFilteredFilms`,
};


export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
};
