// React imports
import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

// Views imports
// import HomePage from './views/HomePage';
// import MoviesPage from './views/MoviesPage';
// import MovieDetailsPage from './views/MovieDetailsPage';
import NotFound from './views/NotFound';

// Components imports
import AppBar from './components/AppBar';
// import Footer from './components/Footer';

// Routes imports
import routes from './routes';

// Lazy loading for views
const HomePage = lazy(() =>
  import('./views/HomePage.js' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage.js' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage.js' /* webpackChunkName: "details-page" */),
);

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <AppBar />
        <Suspense fallback="...Loading">
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route exact path={routes.movieSearch} component={MoviesPage} />
            <Route path={routes.movieDetails} component={MovieDetailsPage} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
        {/* <Footer /> */}
      </>
    );
  }
}

export default App;
