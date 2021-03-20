import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchTrendingMovies() {
  try {
    const trendingMovies = await axios.get(
      `${BASE_URL}/trending/all/day?api_key=${API_KEY}`,
    );
    return trendingMovies.data.results;
  } catch (error) {
    console.error(error);
  }
}

async function fetchSearchedMovies(query) {
  try {
    const searchedMovies = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`,
    );

    return searchedMovies.data.results;
  } catch (error) {
    console.error(error);
  }
}

export { fetchTrendingMovies, fetchSearchedMovies };
