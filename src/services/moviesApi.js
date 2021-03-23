// Importing axios library
import axios from 'axios';

// Declaring API key and base url for fetches (not getting images though)
const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

//Funciton to fetch trending movies
async function fetchTrendingMovies() {
  try {
    const trendingMovies = await axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
    );
    return trendingMovies.data.results;
  } catch (error) {
    console.error(error.message);
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
    console.error(error.message);
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
    console.error(error.message);
  }
}

// Function to fetch movie Cast details
async function fetchCast(movieId) {
  try {
    const cast = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`,
    );
    return cast.data.cast;
  } catch (error) {
    console.error(error.message);
  }
}

// Function to fetch movie Reviews
async function fetchReviews(movieId) {
  try {
    const reviews = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`,
    );
    return reviews.data.results;
  } catch (error) {
    console.error(error.message);
  }
}

export {
  fetchTrendingMovies,
  fetchSearchedMovies,
  fetchMovie,
  fetchCast,
  fetchReviews,
};
