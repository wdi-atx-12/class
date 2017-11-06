import React, { Component } from 'react';

import './Quote.css';

class Quote extends Component {
  render() {
    let profilePic;
    if ( this.props.data.user ) {
      profilePic = <img className="quote-profile-pic" src={ this.props.data.user.photo } alt="" />;
    }

    return (
      <div className="row quote">
        <div className="col-md-1 col-sm-1 quote-profile">
          { profilePic }
        </div>
        <div className="col-md-11 col-sm-11 quote-text">
          <blockquote>
            <p className="quote-text">{ this.props.data.text }</p>
            <footer className="quote-author"><cite title="Author">{ this.props.data.author }</cite></footer>
          </blockquote>
        </div>
      </div>
    );
  }
}

export default Quote;
