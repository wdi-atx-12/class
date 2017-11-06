import React, { Component } from 'react';
import { firebase, auth } from '../../utils/firebase';

class LoginButton extends Component {
  handleClick(evt) {
    evt.preventDefault();

    console.log('logging into GitHub with popup');
    const provider = new firebase.auth.GithubAuthProvider();
    // here is where I could ask for additional user info if needed
    // (e.g. 'repo'; see 'scope' in docs)
    provider.addScope('read:user');
    auth.signInWithPopup(provider);
  }

  render() {
    return (
      <button onClick={ this.handleClick } className="btn-login btn btn-primary">
        { this.props.children || 'Log in' }
      </button>
    )
  }
}

export default LoginButton;
