import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './ExtraInfoBar.module.css';

const ExtraInfoBar = ({ url }) => {
  return (
    <ul className={styles.NavLinksList}>
      <li>
        <NavLink
          to={`${url}/cast`}
          className={styles.NavLink}
          activeClassName={styles['NavLink-active']}
        >
          Cast
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`${url}/reviews`}
          className={styles.NavLink}
          activeClassName={styles['NavLink-active']}
        >
          Reviews
        </NavLink>
      </li>
    </ul>
  );
};

ExtraInfoBar.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ExtraInfoBar;
