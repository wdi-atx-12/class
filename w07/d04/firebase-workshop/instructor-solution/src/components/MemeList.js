import React, { Component } from 'react';
import Meme from './Meme.js';

import { database, firebaseListToArray } from '../utils/firebase.js';

class MemeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      memes: []
    };
  }

  componentWillMount() {
    database.ref('/memes')
      .on('value', data => {
        const results = firebaseListToArray(data.val());
        this.setState({
          memes: results
        });
      });
  }

  render() {
    var memeComponents = this.state.memes.map(memeData=>(
      <Meme key={memeData.id} url={memeData.imageUrl} />
    ));

    return (
      <section>
        <div className="row memes">
          {memeComponents}
        </div>
      </section>
    );
  }

  componentWillUnmount() {
    database.off();
  }
}

export default MemeList;
