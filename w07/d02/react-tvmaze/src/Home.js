import React, { Component } from 'react';
import './App.css';
import SearchContainer from './SearchContainer';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>TV Maze</h1>
        <SearchContainer />
      </div>
    );
  }
}

export default Home;
