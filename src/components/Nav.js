import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { loadFromStorage } from '../actions/applications.js';
import store from '../store';
import './Nav.css';

const mstp = ({ applications }) => ({ applications });
const ApplicationsCount = connect(mstp)((props) => (
  <span>({ props.applications.length })</span>
));

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
      <div className="navbar">
        <NavLink exact activeClassName="active"
                 className="button" to="/">
          Справка
        </NavLink>
        <NavLink activeClassName="active"
                 className="button" to="/services">
          Услуги
        </NavLink>
        <NavLink activeClassName="active"
                 className="button" to="/applications">
          Заявления <ApplicationsCount />
        </NavLink>
        <NavLink activeClassName="active"
                 className="button right" to="/login">Вход</NavLink>

        <div className="right">
          applications:
          <button onClick={ this.loadFrom.bind(this) }>load</button>
          <button onClick={ this.saveTo.bind(this) }>save</button>
        </div>
      </div>
    );
  }
}

export default Nav;
