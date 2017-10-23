import React, { Component } from 'react';
import HelloWorld from './HelloWorld.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld />
        <HelloWorld />
      </div>
    );
  }
}

export default App;
