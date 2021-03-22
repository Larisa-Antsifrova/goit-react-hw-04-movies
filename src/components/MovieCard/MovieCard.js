import React from 'react';

import styles from './MovieCard.module.css';

const MovieCard = ({ movie }) => {
  const { title, poster_path, overview } = movie;

  return (
    <div className={styles.MovieCard}>
      <h1 className={styles.MovieTitle}>{title}</h1>
      <div className={styles.MovieInfo}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
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

export default MovieCard;
