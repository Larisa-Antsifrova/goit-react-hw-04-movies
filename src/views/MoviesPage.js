import React, { Component } from 'react';

import Section from '../components/Section';
import MoviesList from '../components/MoviesList';
import MoviesListItem from '../components/MoviesListItem';

import Search from '../components/Search';
import BtnBack from '../components/BtnBack';

import { fetchSearchedMovies } from '../services/moviesApi';

class MoviesPage extends Component {
  state = {
    searchedMovies: [],
    query: '',
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    if (prevState.query !== this.state.query) {
      const searchedMovies = await fetchSearchedMovies(query);
      this.setState({ searchedMovies });
    }
  }

  handleSubmit = newQuery => {
    this.setState({
      searchedMovies: [],
      query: newQuery,
      page: 1,
    });
  };

  render() {
    const { searchedMovies: movies } = this.state;
    const { location, history } = this.props;

    return (
      <Section>
        <Search onSubmit={this.handleSubmit} />
        <BtnBack location={location} history={history} />
        <MoviesList>
          {movies.map(movie => (
            <MoviesListItem key={movie.id} movie={movie} />
          ))}
        </MoviesList>
      </Section>
    );
  }
}

export default MoviesPage;
