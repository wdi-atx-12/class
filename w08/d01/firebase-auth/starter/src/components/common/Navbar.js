import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

import LoginButton from '../account/LoginButton';
import LogoutButton from '../account/LogoutButton';

class Navbar extends Component {
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
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  <img className="navbar-profile-pic" src="https://cloud.githubusercontent.com/assets/204420/25317997/0acd2d94-284b-11e7-863e-79681639157a.jpg" alt="" /> Cool Guy <span className="caret"></span>
                </a>
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
