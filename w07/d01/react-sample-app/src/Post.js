import React, { Component } from 'react';
import Comment from './Comment';

class Post extends Component {
  render() {
    let commentArr = this.props.comments
    let commentsComponentsArr = commentArr.map( (comment, index) => (
      <Comment commentText={comment} key={index}/>
    ));
    return (
      <div className="blog-post">
        <h1>{this.props.title}</h1>
        <h3>{this.props.author}</h3>
        <p>{this.props.body}</p>
        <h4>Comments:</h4>
        <ul>{commentsComponentsArr}</ul>
      </div>
    );
  }
}

export default Post;
