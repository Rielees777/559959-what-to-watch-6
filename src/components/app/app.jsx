import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';

const App = (props) => {
  const {genre, releaseDate} = props
  return (
    <MainPage genre={genre} releaseDate={releaseDate} />
  );
};

App.propTypes = {
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired
};

export default App;
