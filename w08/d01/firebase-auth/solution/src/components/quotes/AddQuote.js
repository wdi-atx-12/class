import React, { Component } from 'react';
import { database } from '../../utils/firebase';

import './AddQuote.css';

class AddQuote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: '',
      author: '',
    };

    // bind event handlers
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.ref = database.ref('/quotes');
  }

  componentWillUnmount() {
    this.ref.off();
  }

  handleSubmit(evt) {
    evt.preventDefault();

    this.ref.push({
        user: {
          uid: this.props.currentUser.uid,
          photo: this.props.currentUser.photoURL,
          name: this.props.currentUser.displayName,
        },
        text: this.state.quote,
        author: this.state.author,
        '.priority': 0 - Date.now(),
      })
      .then(() => {
        console.log('added new quote', this.state.quote, this.state.author);
      })
      .catch(() => {
        console.log('error adding new quote');
      });
  }

  render() {
    return (
      <section className="col-md-4 col-sm-12 add-quote">
        <form onSubmit={ this.handleSubmit } className="form-add-quote">
          <div className="row">
            <textarea
              onChange={ (evt) => { this.setState({quote:evt.target.value}); } }
              value={ this.state.quote }
              className="form-control"
              rows="3"
              placeholder="Life changing quote"></textarea>
          </div>
          <div className="row">
            <input
              onChange={ (evt) => { this.setState({author:evt.target.value}); } }
              value={ this.state.author }
              className="form-control"
              type="text"
              placeholder="Author" />
          </div>
          <div className="row">
            <button className="btn btn-primary">Add Quote</button>
          </div>
        </form>
      </section>
    );
  }
}

export default AddQuote;
