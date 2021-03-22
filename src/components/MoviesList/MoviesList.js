import React from 'react';
import PropTypes from 'prop-types';

import styles from './MoviesList.module.css';

const MoviesList = ({ children }) => {
  return <ul className={styles.MoviesList}>{children}</ul>;
};

MoviesList.propTypes = {
  children: PropTypes.node,
};

export default MoviesList;
