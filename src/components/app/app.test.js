import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './app';

const mockStore = configureStore({});
const testFilm = {
  id: `1`,
  title: `Macbeth`,
  image: ``,
  poster: ``,
  backgroundImage: ``,
  backgroundColor: `blue`,
  genre: `Drama`,
  year: 2015,
  video: ``,
  promoVideo: ``,
  description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland`,
  director: `Justin Kurzel`,
  starring: [`Michael Fassbende`, `Marion Cotillard`],
  duration: 113,
  rating: 3.53,
  reviewsCount: 3,
  isFavorite: false,
};
const store = {
  DATA: {
    films: [testFilm],
    currentFilter: `All genres`,
    isFilmsLoaded: true
  }
};

describe(`Test routing`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  it(`Render 'MainPage' when user navigate to '/' url`, () => {
    const history = createMemoryHistory();
    render(
        <redux.Provider store={mockStore({store})}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });

  it(`Render 'SignIn' when user navigate to '/login' url`, () => {
    const history = createMemoryHistory();
    history.push(`/login`);

    render(
        <redux.Provider store={mockStore({})}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it(`Render 'Film' when user navigate to '/film/:id' url`, () => {
    const history = createMemoryHistory();
    history.push(`/films/1`);

    render(
        <redux.Provider store={mockStore({})}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getAllByText(/Macbeth/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Drama/i)).toBeInTheDocument();
  });

});
