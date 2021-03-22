import React, { Component } from 'react';

import Section from '../components/Section';
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
      <Section>
        <MoviesList>
          {popularMovies.map(popularMovie => (
            <MoviesListItem key={popularMovie.id} popularMovie={popularMovie} />
          ))}
        </MoviesList>
      </Section>
    );
  }
}

export default HomePage;
