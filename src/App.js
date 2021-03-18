import React, { Component, Fragment } from 'react';

import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import NotFound from './views/NotFound';

import { Route, NavLink, Switch } from 'react-router-dom';

import './services/moviesApi';

class App extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <nav>
          <ul>
            <li>
              <NavLink
                exact
                to="/"
                className="NavLink"
                activeClassName="NavLink-active"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies"
                className="NavLink"
                activeClassName="NavLink-active"
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies" component={MoviesPage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route path="/movies/:movieId/cast" component={MovieDetailsPage} />
          <Route path="/movies/:movieId/reviews" component={MovieDetailsPage} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
