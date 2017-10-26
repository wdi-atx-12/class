import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PageHeader from './components/PageHeader';
import MemeList from './components/MemeList';
import PageFooter from './components/PageFooter';

class App extends Component {
  render() {
    return (
      <div className="container">
        <PageHeader />
        <MemeList />
        <PageFooter />
      </div>
    );
  }
}

export default App;
