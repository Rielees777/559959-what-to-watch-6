import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import AddReview from '../add-review/add-review';
import Film from '../films-description/film-description';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import PageNotFound from '../page-not-found/page-not-found';


const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <PrivateRoute exact path="/films/:filmId/addreview">
          <AddReview />
        </PrivateRoute>
        <Route exact path="/films/:filmId">
          <Film onInput={() => {}}/>
        </Route>
        <PrivateRoute exact path="/mylist">
          <MyList />
        </PrivateRoute>
        <Route exact path="/player/:id">
          <Player />
        </Route>
        <Route >
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {};

export default App;
