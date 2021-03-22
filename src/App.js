// React imports
import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

// Views imports
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import NotFound from './views/NotFound';

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
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route component={NotFound} />
        </Switch>
      </>
    );
  }
}

export default App;
