import React, { Component } from 'react';
import HelloWorld from './HelloWorld.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld fname={"Britney Jo"} age={400}/>
        <HelloWorld fname={"Chris"} age={100}/>
      </div>
    );
  }
}

export default App;
