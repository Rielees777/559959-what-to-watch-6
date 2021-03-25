import React from 'react';
import MainPage from '../main-page/main-page';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import AddReview from '../add-review/add-review';
import Film from '../films-description/film-description';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import PageNotFound from '../page-not-found/page-not-found';
import browserHistory from '../../browser-history';


const App = () => {

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <PrivateRoute exact
          path="/films/:filmId/addreview"
          render={() => <AddReview />}
        />
        <Route exact path="/films/:filmId">
          <Film />
        </Route>
        <PrivateRoute exact
          path="/mylist"
          render={() => <MyList />}
        />
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

export default App;
