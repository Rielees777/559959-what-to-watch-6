import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {ActionType} from '../action';
import {fetchFilms} from '../api-actions';
import {loadData} from './load-data';

const api = createAPI(() => {});

const films = [
  {
    id: 1,
    name: `The Grand Budapest Hotel`,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImage: `img/the-grand-budapest-hotel-poster.jpg`,
    backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    runTime: 99,
    genre: `Comedies`,
    released: 2014,
    isFavorite: false
  },
  {
    id: 2,
    name: `Aviator`,
    posterImage: `img/aviator.jpg`,
    previewImage: `img/aviator.jpg`,
    backgroundImage: `img/aviator.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: 7.9,
    scoresCount: 140,
    director: `Wes Andreson`,
    starring: [`Leonardo Di'Caprio`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    runTime: 109,
    genre: `Dramas`,
    released: 2018,
    isFavorite: false
  },
  {
    id: 3,
    name: `Bohemian rhapsody`,
    posterImage: `img/bohemian-rhapsody.jpg`,
    previewImage: `img/bohemian-rhapsody.jpg`,
    backgroundImage: `img/bohemian-rhapsody.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: 6.9,
    scoresCount: 200,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    runTime: 89,
    genre: `Romance`,
    released: 2015,
    isFavorite: false
  },
  {
    id: 4,
    name: `Johnny English`,
    posterImage: `img/johnny-english.jpg`,
    previewImage: `img/johnny-english.jpg`,
    backgroundImage: `img/johnny-english.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    runTime: 90,
    genre: `Comedies`,
    released: 2004,
    isFavorite: false
  },
  {
    id: 5,
    name: `War of the Worlads`,
    posterImage: `img/war-of-the-worlds.jpg`,
    previewImage: `img/war-of-the-worlds.jpg`,
    backgroundImage: `img/war-of-the-worlds.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: 6.1,
    scoresCount: 140,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    runTime: 121,
    genre: `Sci-Fi`,
    released: 2007,
    isFavorite: false
  }
];

describe(`Reduser 'loadFilms' work correctly`, () => {
  it(`Reducer without additional params should return initial state`, () => {
    expect(loadData(undefined, {}))
      .toEqual({currentFilter: `All genres`, films: [], filtredFilms: [], favoriteFilms: [], isFilmsLoaded: false});
  });

  it(`Reducer should update films by load films`, () => {
    const state = {films: [], isFilmsLoaded: false};
    const loadFilmsAction = {
      type: ActionType.LOAD_FILMS,
      payload: films
    };

    expect(loadData(state, loadFilmsAction))
      .toEqual({films, isFilmsLoaded: true});
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = fetchFilms();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: [{fake: true}],
        });
      });
  });
});
