import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { loadFromStorage } from '../actions/applications.js';
import { logout } from '../actions/user.js';
import store from '../store';
import './Nav.css';


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

  logout(history) {
    store.dispatch(logout());
    history.replace('/');
  }

  render() {
    const { history } = this.props;
    const count = this.props.applications.length;
    const { signin } = this.props.user;
    const { username } = this.props.user;
    return (
      <div className="navbar">
        <NavLink className="button" exact to="/">
          Справка
        </NavLink>
        {(signin) && <span>
            <NavLink className="button" to="/services">
              Услуги
            </NavLink>
            <NavLink className="button" to="/applications">
              Заявления <span>({ count })</span>
            </NavLink>
        </span>}

        <div className="right">
        {(signin)
         ? <span>
          { username }
           <a className="button"
              onClick={ this.logout.bind(this, history) }>
             Выход
           </a>
         </span>
         : <NavLink className="button" to="/login">
           Войти
         </NavLink>
        }
        </div>

      </div>
    );
  }
}

const mstp = ({ user, applications }) => ({ user, applications });
export default withRouter(connect(mstp)( Nav ));
