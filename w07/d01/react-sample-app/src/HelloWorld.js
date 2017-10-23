import React, { Component } from 'react';

class HelloWorld extends Component {
  constructor(props){
    super(props);
    this.state = {
      greeting: "Hello",
      counter: 0
    };
    this._frenchify = this._frenchify.bind(this);
    this._countify = this._countify.bind(this);
  };
  _frenchify() {
    this.setState({
      greeting: "Bonjour"
    })
  }
  _countify(){
    this.setState({
      counter: this.state.counter + 1
    })
  }
  render() {
    return (
      <div className="hello">
        <h1>{this.state.greeting}, {this.props.fname}!</h1>
        <p>You are {this.props.age} years old.</p>
        <p>{this.state.counter}</p>
        <button onClick={this._frenchify}>Frenchify!</button>
        <button onClick={this._countify}>Click me!</button>
      </div>
    );
  }
}

export default HelloWorld;
