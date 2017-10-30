import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
  render() {
    const { user: { username } } = this.props;
    return (
      <div>
        <h1> Profile </h1>
        email: { username }
      </div>
    );
  }
}

const mstp = ({ user }) => ({ user });
export default connect(mstp)( Profile );
