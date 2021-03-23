import React from 'react';
import PropTypes from 'prop-types';

import styles from './MovieCard.module.css';
import defaultPosterImg from './defaultMovieImg.jpg';

const MovieCard = ({ movie }) => {
  const { title, poster_path, overview } = movie;

  return (
    <div className={styles.MovieCard}>
      <h1 className={styles.MovieTitle}>{title}</h1>
      <div className={styles.MovieInfo}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultPosterImg
          }
          alt={title}
          width="200"
        />
        <div className={styles.about}>
          <p className={styles.aboutTitle}>ABOUT</p>
          <p className={styles.overview}>{overview}</p>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }),
};

export default MovieCard;
