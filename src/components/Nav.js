import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { loadFromStorage } from '../actions/applications.js';
import store from '../store';

class Nav extends Component {

  loadFrom() {
    const lastState = localStorage.getItem('lastState');
    if (lastState) {
      const state = JSON.parse(lastState);
      store.dispatch(loadFromStorage(state));
    }
  }

  saveTo() {
    const lastState = JSON.stringify(store.getState().applications);
    localStorage.setItem('lastState', lastState);
  }

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
        {' '}
        applications:
        <button onClick={ this.loadFrom.bind(this) }>load</button>
        <button onClick={ this.saveTo.bind(this) }>save</button>
      </div>
    );
  }
}

export default Nav;
