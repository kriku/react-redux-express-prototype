import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div>
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
        {' '}
        <NavLink activeClassName="active" to="/services">Services</NavLink>
        {' '}
        <NavLink activeClassName="active" to="/applications">Applications</NavLink>
        {' '}
        <NavLink activeClassName="active" to="/login">Login</NavLink>
      </div>
    );
  }
}

export default Nav;
