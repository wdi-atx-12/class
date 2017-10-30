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

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          <div className="container main">
            <Route exact path="/" component={ Home } />
            <Route path="/profile" component={ Profile }/>
          </div>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
