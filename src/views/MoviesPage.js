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
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class MoviesPage extends Component {
  state = {
    isLoading: false,
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
      this.setState({ isLoading: true });
      const searchedMovies = await fetchSearchedMovies(query);
      this.setState({ searchedMovies, isLoading: false });
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
    const { searchedMovies: movies, isLoading } = this.state;

    return (
      <Section>
        <Search onSubmit={this.handleSubmit} />

        <MoviesList>
          {movies.map(movie => (
            <MoviesListItem key={movie.id} movie={movie} />
          ))}
        </MoviesList>

        {isLoading && (
          <Loader
            type="TailSpin"
            color="#009688"
            height={80}
            width={80}
            className="loader"
          />
        )}
      </Section>
    );
  }
}

export default MoviesPage;
