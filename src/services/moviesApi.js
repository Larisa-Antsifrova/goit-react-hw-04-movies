import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

async function fetchTrendingMovies() {
  try {
    const trendingMovies = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
    );
    return trendingMovies.data.results;
  } catch (error) {
    console.error(error);
  }
}

async function fetchSearchedMovies(query) {
  try {
    const searchedMovies = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`,
    );

    return searchedMovies.data.results;
  } catch (error) {
    console.error(error);
  }
}

export { fetchTrendingMovies, fetchSearchedMovies };
