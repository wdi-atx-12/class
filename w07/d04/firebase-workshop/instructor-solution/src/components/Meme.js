import React, { Component } from 'react';
import './Meme.css';

class Meme extends Component {
  render() {
    return (
      <div className="col-md-4 meme">
        <img alt={this.props.alt} src={this.props.url} />
      </div>
    );
  }
}

export default Meme;
