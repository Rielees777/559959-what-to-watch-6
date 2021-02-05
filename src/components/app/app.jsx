import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import AddReview from '../add-review/add-review';
import Film from '../films/films';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import PageNotFound from '../page-not-found/page-not-found';

const App = (props) => {
  const {genre, releaseDate} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage genre={genre} releaseDate={releaseDate} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/films/1/review">
          <AddReview />
        </Route>
        <Route exact path="/films/1">
          <Film />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route exact path="/player/1">
          <Player />
        </Route>
        <Route >
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired
};

export default App;
