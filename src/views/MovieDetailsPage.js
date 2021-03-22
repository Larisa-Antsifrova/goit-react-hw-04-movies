import React, { Component } from 'react';
import BtnBack from '../components/BtnBack';
import { fetchMovie } from '../services/moviesApi';

class MovieDetailsPage extends Component {
  state = {};

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const movie = await fetchMovie(movieId);
    console.log(movie);
  }

  render() {
    return (
      <div>
        <h1>Movies Details Page for {this.props.match.params.movieId}</h1>
        <BtnBack history={this.props.history} />
      </div>
    );
  }
}

export default MovieDetailsPage;
