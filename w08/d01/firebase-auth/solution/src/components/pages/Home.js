import React, { Component } from 'react';

import AddQuote from '../quotes/AddQuote';
import Quotes from '../quotes/Quotes';

class Home extends Component {
  render() {
    return (
      <div className="row">
        {
          (this.props.currentUser) ?
          <AddQuote currentUser={ this.props.currentUser } /> :
          <section className="col-md-4 col-sm-12 add-quote">Log in to add a quote</section>
        }
        <Quotes />
      </div>
    );
  }
}

export default Home;
