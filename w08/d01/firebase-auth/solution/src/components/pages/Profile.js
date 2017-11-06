import React, { Component } from 'react';

class Profile extends Component {
  render() {
    if (this.props.currentUser) {
    return (
      <div>
        <h2>{this.props.currentUser.displayName}</h2>
        <p>{this.props.currentUser.email}</p>
        <img src={this.props.currentUser.photoURL} alt="" />
      </div>
    );
    } else {
      return <div></div>;
    }
  }
}

export default Profile;
