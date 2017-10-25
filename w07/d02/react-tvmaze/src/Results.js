import React, { Component } from 'react';
import './App.css';

class Results extends Component {
  render() {
    let results = this.props.shows.map((singleShow, index) => {
      return(
        <div key={index}>
          <img src={singleShow.image} alt=""/>
          <p>{singleShow.name}</p>
        </div>
      )
    });

    return (
      <div>
        {results}
      </div>
    );
  }
}

export default Results;
