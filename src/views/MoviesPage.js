import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Search from '../components/Search';

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
    const { searchedMovies } = this.state;

    return (
      <div>
        <h1>Search Moives Page</h1>
        <Search onSubmit={this.handleSubmit} />
        <ul>
          {searchedMovies.map(searchedMovie => (
            <li key={searchedMovie.id}>
              <Link to={`${this.props.match.url}/${searchedMovie.id}`}>
                {searchedMovie.title ? searchedMovie.title : searchedMovie.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MoviesPage;
