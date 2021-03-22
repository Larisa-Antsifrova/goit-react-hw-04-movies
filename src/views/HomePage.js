import React, { Component } from 'react';

import MoviesList from '../components/MoviesList';
import MoviesListItem from '../components/MoviesListItem';

import { fetchTrendingMovies } from '../services/moviesApi';

class HomePage extends Component {
  state = {
    popularMovies: [],
  };

  async componentDidMount() {
    const popularMovies = await fetchTrendingMovies();
    this.setState({ popularMovies });
  }

  render() {
    const { popularMovies } = this.state;

    return (
      <div>
        <h1>Home Page</h1>
        <MoviesList>
          {popularMovies.map(popularMovie => (
            <MoviesListItem key={popularMovie.id} popularMovie={popularMovie} />
          ))}
        </MoviesList>
      </div>
    );
  }
}

export default HomePage;
