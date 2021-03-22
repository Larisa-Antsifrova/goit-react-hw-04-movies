import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

//Funciton to fetch trending movies
async function fetchTrendingMovies() {
  try {
    const trendingMovies = await axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
    );
    return trendingMovies.data.results;
  } catch (error) {
    console.error(error);
  }
}

//Funciton to fetch searched movies
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

//Funciton to fetch one movie
async function fetchMovie(movieId) {
  try {
    const movie = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`,
    );

    return movie.data;
  } catch (error) {
    console.error(error);
  }
}

export { fetchTrendingMovies, fetchSearchedMovies, fetchMovie };
