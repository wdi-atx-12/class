import React, { Component } from 'react';
import './App.css';

class Search extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmitQuery}>
          <input type="text" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Search;
