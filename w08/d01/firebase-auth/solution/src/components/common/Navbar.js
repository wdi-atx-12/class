import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

import LoginButton from '../account/LoginButton';
import LogoutButton from '../account/LogoutButton';

class Navbar extends Component {
  getProfileInfo() {
    if (this.props.currentUser) {
      // user is logged in
      let displayName;
      if (this.props.currentUser.displayName && this.props.currentUser.displayName.length > 0) {
        displayName = this.props.currentUser.displayName;
      } else {
        displayName = this.props.currentUser.email;
      }
      return (
        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
          <img className="navbar-profile-pic"
            src={this.props.currentUser.photoURL} alt="" />
            { displayName } <span className="caret"></span>
        </a>
      );
    } else {
      // user is not logged in
      return <LoginButton>Log in with GitHub</LoginButton>;
    }
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">Quote Machine</Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                { this.getProfileInfo() }
                <ul className="dropdown-menu">
                  <li><Link to="/profile">View profile</Link></li>
                  <li role="separator" className="divider"></li>
                  <li><LogoutButton>Log out</LogoutButton></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
