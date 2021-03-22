import React from 'react';
import styles from './Cast.module.css';

const Cast = ({ cast }) => {
  console.log(cast);
  return (
    <div>
      <ul className={styles.castList}>
        {cast.map(actor => (
          <li key={actor.id} className={styles.item}>
            <img
              className={styles.avatar}
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt="User avatar"
            />
            <p className={styles.name}>{actor.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
