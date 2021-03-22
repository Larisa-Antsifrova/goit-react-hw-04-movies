import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container';

import styles from './Section.module.css';

const Section = ({ children }) => (
  <section className={styles.section}>
    <Container>{children}</Container>
  </section>
);

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
