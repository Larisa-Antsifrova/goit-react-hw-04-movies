import React from 'react';

import styles from './BtnBack.module.css';

const BtnBack = ({ callback }) => {
  return (
    <button onClick={callback} className={styles.Button}>
      Return
    </button>
  );
};

export default BtnBack;
// const BtnBack = ({ history }) => {
//   return (
//     <button onClick={history.goBack} className={styles.Button}>
//       Return
//     </button>
//   );
// };

// export default BtnBack;
