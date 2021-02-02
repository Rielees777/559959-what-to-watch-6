import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const filmInfo = {
  genre: `Horror`,
  releaseDate: 2020
};

ReactDOM.render(
  <App genre={filmInfo.genre} releaseDate={filmInfo.releaseDate} />,
  document.querySelector(`#root`)
);
