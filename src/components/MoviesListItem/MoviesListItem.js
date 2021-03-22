import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import styles from './MoviesListItem.module.css';

const MoviesListItem = ({ movie }) => {
  const { title, id, backdrop_path } = movie;

  return (
    <li className={styles.MoviesListItem}>
      <Link to={`/movies/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
          alt={title}
          className={styles['MoviesListItem-image']}
        />
        <p className={styles.MovieTitle}>{title}</p>
      </Link>
    </li>
  );
};

MoviesListItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
  }).isRequired,
};

export default MoviesListItem;
