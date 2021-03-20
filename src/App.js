import React, { Component } from 'react';

import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import NotFound from './views/NotFound';

import { Route, NavLink, Switch } from 'react-router-dom';

class App extends Component {
  state = {};
  render() {
    return (
      <>
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
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route path="/movies/:movieId/cast" component={MovieDetailsPage} />
          <Route path="/movies/:movieId/reviews" component={MovieDetailsPage} />
          <Route exact path="/" component={HomePage} />
          <Route component={NotFound} />
        </Switch>
      </>
    );
  }
}

export default App;
