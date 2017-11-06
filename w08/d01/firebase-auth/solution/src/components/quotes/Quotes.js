import React, { Component } from 'react';

import Quote from './Quote';
import { database, firebaseListToArray } from '../../utils/firebase';

class Quotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
    };
  }

  componentDidMount() {
    this.ref = database.ref('/quotes');
    this.ref.on('value', data => {
      const quotes = firebaseListToArray(data.val());
      console.log('received new data from firebase', quotes);
      console.log(data.val());

      this.setState({
        quotes: quotes,
      });
    });
  }

  componentWillUnmount() {
    console.log('unmounting quotes');
    this.ref.off(); // TODO: why isn't this working?
  }

  render() {
    return (
      <section className="col-md-8 col-sm-12 quotes">
        { this.state.quotes.map(quoteData => (
          <Quote key={ quoteData.id } data={ quoteData } />
        )) }
      </section>
    );
  }
}

export default Quotes;
