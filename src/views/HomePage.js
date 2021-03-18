import React, { Component } from 'react';

import { fetchTrendingMovies } from '../services/moviesApi';

console.log(fetchTrendingMovies());

class HomePage extends Component {
  state = {
    trendingMovies: [],
  };

  async componentDidMount() {
    const trendingMovies = await fetchTrendingMovies();
    console.log('trendingMovies', trendingMovies);
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
              {trendingMovie.title ? trendingMovie.title : trendingMovie.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HomePage;
