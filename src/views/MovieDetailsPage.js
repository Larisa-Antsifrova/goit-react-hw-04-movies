import React, { Component } from 'react';
import BtnBack from '../components/BtnBack';

class MovieDetailsPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Movies Details Page for {this.props.match.params.movieId}</h1>
        <BtnBack history={this.props.history} />
      </div>
    );
  }
}

export default MovieDetailsPage;
