// React imports
import React, { Component } from 'react';

// Components imports
import Section from '../components/Section';
import MoviesList from '../components/MoviesList';
import MoviesListItem from '../components/MoviesListItem';
import Search from '../components/Search';

//  Functions and external libraries imports
import { fetchSearchedMovies } from '../services/moviesApi';
import queryString from 'query-string';

class MoviesPage extends Component {
  state = {
    searchedMovies: [],
    query: '',
  };

  componentDidMount() {
    const { search, pathname } = this.props.location;

    if (pathname && search) {
      this.setState({ query: queryString.parse(search).query });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;

    if (prevState.query !== query) {
      const searchedMovies = await fetchSearchedMovies(query);
      this.setState({ searchedMovies });
    }
  }

  handleSubmit = newQuery => {
    const { history, location } = this.props;

    this.setState({
      searchedMovies: [],
      query: newQuery,
    });

    history.push({
      ...location,
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
