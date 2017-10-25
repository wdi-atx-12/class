import React, { Component } from 'react';
import './App.css';
import Home from './components/Home.js'
import Contact from './components/Contact.js'
import Procedures from './components/Procedures.js'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/procedures" component={Procedures} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
