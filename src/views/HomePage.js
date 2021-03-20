import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { fetchTrendingMovies } from '../services/moviesApi';

class HomePage extends Component {
  state = {
    trendingMovies: [],
  };

  async componentDidMount() {
    const trendingMovies = await fetchTrendingMovies();
    this.setState({ trendingMovies });
  }

  render() {
    const { trendingMovies } = this.state;

    return (
      <div>
        <h1>Home Page</h1>
        <ul>
          {trendingMovies.map(trendingMovie => (
            <li key={trendingMovie.id}>
              <Link to="/movies/:movieId">
                {trendingMovie.title ? trendingMovie.title : trendingMovie.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HomePage;
