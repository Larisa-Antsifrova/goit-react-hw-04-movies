// React imports
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Components imports
import Section from '../components/Section';
import MovieCard from '../components/MovieCard';
import BtnBack from '../components/BtnBack';
import ExtraInfoBar from '../components/ExtraInfoBar';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';

//  Functions and external libraries imports
import { fetchMovie, fetchCast, fetchReviews } from '../services/moviesApi';
import _ from 'lodash';

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
        </Section>
      );
    } else {
      return null;
    }
  }
}

export default MovieDetailsPage;
