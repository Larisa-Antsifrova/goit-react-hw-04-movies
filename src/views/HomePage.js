// React imports
import React, { Component } from 'react';

// Components imports
import Section from '../components/Section';
import MoviesList from '../components/MoviesList';
import MoviesListItem from '../components/MoviesListItem';

//  Functions imports
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
    const { popularMovies: movies } = this.state;

    return (
      <Section>
        <MoviesList>
          {movies.map(movie => (
            <MoviesListItem key={movie.id} movie={movie} />
          ))}
        </MoviesList>
      </Section>
    );
  }
}

export default HomePage;
