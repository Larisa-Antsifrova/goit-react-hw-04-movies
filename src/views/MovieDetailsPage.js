import React, { Component } from 'react';
import BtnBack from '../components/BtnBack';
import { fetchMovie } from '../services/moviesApi';

class MovieDetailsPage extends Component {
  state = {
    movie: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const movie = await fetchMovie(movieId);
    this.setState({ movie: movie });
  }

  render() {
    const { movie } = this.state;

    if (movie) {
      const { title, poster_path, overview } = movie;

      return (
        <>
          <h1>Details</h1>
          <h1>{title}</h1>
          <BtnBack history={this.props.history} />
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
            width="200"
          />
          <p>{overview}</p>
        </>
      );
    } else {
      return <h1>Details Page</h1>;
    }
  }
}

export default MovieDetailsPage;
