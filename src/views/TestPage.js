import React, { Component } from 'react';
import BtnBack from '../components/BtnBack/BtnBack';

class TestPage extends Component {
  state = {};

  render() {
    return (
      <div>
        <h1>Test Page</h1>
        <BtnBack history={this.props.history} />
      </div>
    );
  }
}

export default TestPage;
