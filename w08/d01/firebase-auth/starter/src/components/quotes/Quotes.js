import React, { Component } from 'react';

import Quote from './Quote';

class Quotes extends Component {
  render() {
    return (
      <section className="col-md-8 col-sm-12 quotes">
        <Quote />
        <Quote />
        <Quote />
      </section>
    );
  }
}

export default Quotes;
