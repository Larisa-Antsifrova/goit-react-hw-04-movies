import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

import Container from '../Container';

import styles from './AppBar.module.css';

const AppBar = () => {
  return (
    <header className={styles.AppHeader}>
      <Container>
        <nav>
          <ul>
            <li>
              <NavLink
                exact
                to={routes.home}
                className="NavLink"
                activeClassName="NavLink-active"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={routes.movieSearch}
                className="NavLink"
                activeClassName="NavLink-active"
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default AppBar;
