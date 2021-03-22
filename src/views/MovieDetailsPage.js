import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Section from '../components/Section';
import MovieCard from '../components/MovieCard';
import BtnBack from '../components/BtnBack';
import ExtraInfoBar from '../components/ExtraInfoBar';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';

import { fetchMovie, fetchCast, fetchReviews } from '../services/moviesApi';
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
    const { movie } = this.state;
    const { url } = this.props.match;

    if (movie) {
      return (
        <Section>
          <MovieCard movie={movie} />
          <BtnBack history={this.props.history} />
          <ExtraInfoBar url={url} />

          <Route
            path={`${this.props.match.path}/cast`}
            render={props => <Cast {...props} cast={this.state.cast} />}
          />
          <Route
            path={`${this.props.match.path}/reviews`}
            render={props => (
              <Reviews {...props} reviews={this.state.reviews} />
            )}
          />
        </Section>
      );
    } else {
      return null;
    }
  }
}

export default MovieDetailsPage;
