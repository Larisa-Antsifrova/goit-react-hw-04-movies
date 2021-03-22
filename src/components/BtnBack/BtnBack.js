import React from 'react';

import styles from './BtnBack.module.css';

const BtnBack = ({ history }) => {
  return (
    <button onClick={history.goBack} className={styles.Button}>
      Return
    </button>
  );
};

export default BtnBack;
