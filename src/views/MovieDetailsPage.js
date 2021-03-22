import React, { Component } from 'react';
import BtnBack from '../components/BtnBack';
import { fetchMovie, fetchCast, fetchReviews } from '../services/moviesApi';
import { NavLink } from 'react-router-dom';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import { Route } from 'react-router-dom';

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

    if (movie) {
      const { title, poster_path, overview } = movie;

      return (
        <>
          <h1>{title}</h1>
          <BtnBack history={this.props.history} />
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
            width="200"
          />
          <p>{overview}</p>
          <ul>
            <NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink>
            <NavLink to={`${this.props.match.url}/reviews`}>Reviews</NavLink>
          </ul>

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
        </>
      );
    } else {
      return null;
    }
  }
}

export default MovieDetailsPage;
