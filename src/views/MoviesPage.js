import React, { Component } from 'react';

import Section from '../components/Section';
import MoviesList from '../components/MoviesList';
import MoviesListItem from '../components/MoviesListItem';

import Search from '../components/Search';

import { fetchSearchedMovies } from '../services/moviesApi';
import queryString from 'query-string';

class MoviesPage extends Component {
  state = {
    searchedMovies: [],
    query: '',
    page: 1,
  };

  componentDidMount() {
    const { search, pathname } = this.props.location;

    if (pathname && search) {
      this.setState({ query: queryString.parse(search).query });
    }
  }

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

    this.props.history.push({
      ...this.props.location,
      search: `?query=${newQuery}`,
    });
  };

  render() {
    const { searchedMovies: movies } = this.state;

    return (
      <Section>
        <Search onSubmit={this.handleSubmit} />
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
