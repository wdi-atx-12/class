import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null
    }
    this.calculate = this.calculate.bind(this);
  }

  calculate(e){
    e.preventDefault();
    let length = parseFloat(this.length.value);
    let width = parseFloat(this.width.value);
    let depth = parseFloat(this.depth.value);
    let result = length * width * depth / 27;
    this.setState({
      total: result
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Concrete Calculator</h1>
        </header>
        <form id="concrete-form" onSubmit={this.calculate}>
          <p>
            <label htmlFor="length">length: </label>
            <input type="text" id="length"
              ref={input => this.length = input}
              placeholder="length in feet"/>
          </p>
          <p>
            <label htmlFor="width">width: </label>
            <input type="text" id="width"
              ref={input => this.width = input}
              placeholder="width in feet"/>
          </p>
          <p>
            <label htmlFor="depth">depth: </label>
            <input type="text" id="depth"
              ref={input => this.depth = input}
              placeholder="depth in feet"/>
          </p>
          <button type="submit">Calculate</button>
        </form>
        <p id="result">{this.state.total}</p>
      </div>
    );
  }
}

export default App;
