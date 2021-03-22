import React from 'react';

import Container from '../Container';
import Navigation from '../Navigation';

import styles from './AppBar.module.css';

const AppBar = () => {
  return (
    <header className={styles.AppHeader}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};

export default AppBar;
