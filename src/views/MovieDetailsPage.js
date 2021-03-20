import React, { Component } from 'react';

class MovieDetailsPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Movies Details Page for {this.props.match.params.movieId}</h1>
      </div>
    );
  }
}

export default MovieDetailsPage;
