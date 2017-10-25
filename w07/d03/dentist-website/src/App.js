import React, { Component } from 'react';
import './App.css';
import Home from './components/Home.js'
import Contact from './components/Contact.js'
import Procedures from './components/Procedures.js'
import NotFound from './components/NotFound.js'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <Link to="/">Home</Link>{' '}
              <Link to="/contact">Contact Us</Link>{' '}
              <Link to="/procedures">List All Procedures</Link>{' '}
            </nav>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/contact" component={Contact} />
              <Route path="/procedures" component={Procedures} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
