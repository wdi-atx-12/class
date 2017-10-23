import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <li>{this.props.commentText}</li>
    );
  }
}

export default Comment;
