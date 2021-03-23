import React, { Component } from 'react';
import routes from '../../routes';

import styles from './BtnBack.module.css';

class BtnBack extends Component {
  handleGoBack = () => {
    const { location, history } = this.props;

    console.log('path', location?.state?.from?.pathname);

    history.push(location?.state?.from?.pathname || routes.home);
  };

  render() {
    return (
      <button onClick={this.handleGoBack} className={styles.Button}>
        Return
      </button>
    );
  }
}

export default BtnBack;
