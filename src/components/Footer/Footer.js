import React from 'react';

import Container from '../Container';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <Container>
        <p>
          2021 | Powered by{' '}
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            TMDB
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
