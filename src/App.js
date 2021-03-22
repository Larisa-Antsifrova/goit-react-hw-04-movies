// React imports
import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

// Views imports
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import NotFound from './views/NotFound';

// Routes imports
import routes from './routes';

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
                to={routes.home}
                className="NavLink"
                activeClassName="NavLink-active"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={routes.movieSearch}
                className="NavLink"
                activeClassName="NavLink-active"
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.movieSearch} component={MoviesPage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Route component={NotFound} />
        </Switch>
      </>
    );
  }
}

export default App;
