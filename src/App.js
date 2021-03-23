// React imports
import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components imports
import AppBar from './components/AppBar';
// import Footer from './components/Footer';

// Routes imports
import routes from './routes';

// Views imports
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

const App = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback="...Loading">
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.movieSearch} component={MoviesPage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Route component={HomePage} />
        </Switch>
      </Suspense>
      {/* <Footer /> */}
    </>
  );
};

export default App;
