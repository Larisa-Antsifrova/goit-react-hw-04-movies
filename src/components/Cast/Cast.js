import React from 'react';
import PropTypes from 'prop-types';

import styles from './Cast.module.css';
import defaultAvatar from './defaultAvatar.jpg';

const Cast = ({ cast }) => {
  return (
    <ul className={styles.castList}>
      {cast.map(({ id, profile_path, name }) => (
        <li key={id} className={styles.item}>
          <img
            className={styles.avatar}
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                : defaultAvatar
            }
            alt={name}
          />
          <p className={styles.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default Cast;
