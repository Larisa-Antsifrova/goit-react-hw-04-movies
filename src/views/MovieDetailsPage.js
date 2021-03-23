// React imports
import React, { Component, Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

// Components imports
import Section from '../components/Section';
import MovieCard from '../components/MovieCard';
import BtnBack from '../components/BtnBack';
import ExtraInfoBar from '../components/ExtraInfoBar';

//  Functions and external libraries imports
import { fetchMovie, fetchCast, fetchReviews } from '../services/moviesApi';
import _ from 'lodash';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// Lazy imports
const Cast = lazy(() =>
  import('../components/Cast' /* webpackChunkName: "cast-section" */),
);

const Reviews = lazy(() =>
  import('../components/Reviews' /* webpackChunkName: "reviews-section" */),
);
class MovieDetailsPage extends Component {
  state = {
    movie: null,
    cast: null,
    reviews: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const movie = await fetchMovie(movieId);
    const cast = await fetchCast(movieId);
    const reviews = await fetchReviews(movieId);

    this.setState({ movie, cast, reviews });
  }

  render() {
    const { movie, reviews, cast } = this.state;
    const { url, path } = this.props.match;
    const { location, history } = this.props;

    if (movie) {
      return (
        <Section>
          <MovieCard movie={movie} />
          <BtnBack location={location} history={history} />
          <ExtraInfoBar url={url} location={location} />

          <Suspense
            fallback={
              <Loader
                type="TailSpin"
                color="#00BFFF"
                height={80}
                width={80}
                className="loader"
              />
            }
          >
            <Route
              path={`${path}/cast`}
              render={props => <Cast {...props} cast={cast} />}
            />
            <Route
              path={`${path}/reviews`}
              render={props =>
                !_.isEmpty(reviews) ? (
                  <Reviews {...props} reviews={reviews} />
                ) : (
                  <p className="no-reviews">No reviews.</p>
                )
              }
            />
          </Suspense>
        </Section>
      );
    } else {
      return null;
    }
  }
}

export default MovieDetailsPage;
