import React, { Component } from 'react';

import './Quote.css';

class Quote extends Component {
  render() {
    return (
      <div className="row quote">
        <div className="col-md-1 col-sm-1 quote-profile">
          <img className="quote-profile-pic" src="https://cloud.githubusercontent.com/assets/204420/25317997/0acd2d94-284b-11e7-863e-79681639157a.jpg" alt="" />
        </div>
        <div className="col-md-11 col-sm-11 quote-text">
          <blockquote>
            <p className="quote-text">Something insightful will go here</p>
            <footer className="quote-author"><cite title="Author">Wise Guy</cite></footer>
          </blockquote>
        </div>
      </div>
    );
  }
}

export default Quote;
