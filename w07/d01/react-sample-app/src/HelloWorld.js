import React, { Component } from 'react';

class HelloWorld extends Component {
  render() {
    return (
      <div className="hello">
        <h1>Hello, {this.props.fname}!</h1>
        <p>You are {this.props.age} years old.</p>
      </div>
    );
  }
}

export default HelloWorld;
