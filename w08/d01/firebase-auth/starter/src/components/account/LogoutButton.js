import React, { Component } from 'react';

class LogoutButton extends Component {
  render() {
    return (
      <a href="#">{ this.props.children }</a>
    )
  }
}

export default LogoutButton;
