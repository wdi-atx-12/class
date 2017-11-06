import React, { Component } from 'react';
import { auth } from '../../utils/firebase';

class LogoutButton extends Component {
  handleClick(evt) {
    evt.preventDefault();

    auth.signOut();
  }

  render() {
    return (
      <a onClick={ this.handleClick } href="#">{ this.props.children }</a>
    )
  }
}

export default LogoutButton;
