import React, { Component } from 'react';

import AddQuote from '../quotes/AddQuote';
import Quotes from '../quotes/Quotes';

class Home extends Component {
  render() {
    return (
      <div className="row">
        <AddQuote />
        <Quotes />
      </div>
    );
  }
}

export default Home;
