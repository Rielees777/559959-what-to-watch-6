import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import AddReview from '../add-review/add-review';
import Film from '../films-description/film-description';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import PageNotFound from '../page-not-found/page-not-found';


const App = (props) => {
  const {films, reviews} = props;
  const [firstFilm] = films;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage firstFilm={firstFilm} films={films}/>
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/films/:filmId/addreview">
          <AddReview films={films} reviews={reviews} />
        </Route>
        <Route exact path="/films/:filmId">
          <Film films={films} onInput={() => {}}/>
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
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

App.propTypes = {
  films: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
};

export default App;
