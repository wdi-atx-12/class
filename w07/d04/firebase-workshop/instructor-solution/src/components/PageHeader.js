import React, { Component } from 'react';
import AddMemeForm from './AddMemeForm';
import './PageHeader.css';

class PageHeader extends Component {
  render() {
    return (
      <header>
        <div className="row">
          <div className="col-md-4">
            <h1>Meme Machine</h1>
          </div>
          <div className="col-md-8 add-meme">
            <AddMemeForm />
          </div>
        </div>
      </header>
    );
  }
}

export default PageHeader;
