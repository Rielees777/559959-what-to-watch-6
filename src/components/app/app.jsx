import React from 'react';
import MainPage from "../main-page/main-page";

const App = (props) => {
  const {genre, releaseDate} = props
  return (
    <MainPage genre={genre} releaseDate={releaseDate} />
  );
};

export default App;
