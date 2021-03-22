// React imports
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Views imports
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import NotFound from './views/NotFound';

// Components imports
import AppBar from './components/AppBar';

// Routes imports
import routes from './routes';

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <AppBar />
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
