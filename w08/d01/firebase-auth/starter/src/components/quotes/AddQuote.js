import React, { Component } from 'react';

import './AddQuote.css';

class AddQuote extends Component {
  render() {
    return (
      <section className="col-md-4 col-sm-12 add-quote">
        <form className="form-add-quote">
          <div className="row">
            <textarea
              className="form-control"
              rows="3"
              placeholder="Life changing quote"></textarea>
          </div>
          <div className="row">
            <input
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
