import React, { Component } from 'react';
import './AddMemeForm.css';

import { database } from '../utils/firebase.js';

class AddMemeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: ''
    };

    // bind event handlers
    this.updateText = this.updateText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateText(evt) {
    this.setState({
      imageUrl: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    // push new imageUrl to database
    database.ref('/memes')
      .push({
        imageUrl: this.state.imageUrl
      })
      .then(() => {
        // clear out the form
        console.log(`successfully saved ${this.state.imageUrl} to firebase!`);
        this.setState({
          imageUrl: ''
        });
      });
  }

  render() {
    return (
      <form name="form-add-meme" onSubmit={this.handleSubmit}>
        <div className="input-group">
          <input value={this.state.imageUrl} onChange={this.updateText} type="text" className="form-control" placeholder="Add Meme URL" />
          <span className="input-group-btn">
            <button className="btn btn-primary">Save</button>
          </span>
        </div>
      </form>
    );
  }
}

export default AddMemeForm;
