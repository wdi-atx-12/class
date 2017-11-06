import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Navbar from './components/common/Navbar';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Footer from './components/common/Footer';

import { auth } from './utils/firebase';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  componentWillMount() {
    auth.onAuthStateChanged(newUser => {
      if (newUser) {
        console.log('logged in!', newUser);
        this.setState({ currentUser: newUser });
      } else {
        console.log('logged out.');
        this.setState({ currentUser: null });
      }
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar currentUser={ this.state.currentUser } />

          <div className="container main">
            <Route exact path="/" component={ () => <Home currentUser={ this.state.currentUser } /> } />
            <Route path="/profile" component={ () => <Profile currentUser={ this.state.currentUser } /> }/>
          </div>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
