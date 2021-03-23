import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import styles from './MoviesListItem.module.css';
import defaultBackdropImg from './defaultBackdropImg.jpg';

const MoviesListItem = ({ movie }) => {
  const { title, id, backdrop_path } = movie;

  return (
    <li className={styles.MoviesListItem}>
      <Link to={`/movies/${id}`}>
        <img
          src={
            backdrop_path
              ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
              : defaultBackdropImg
          }
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
    backdrop_path: PropTypes.string,
  }).isRequired,
};

export default MoviesListItem;
