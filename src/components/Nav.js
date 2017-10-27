import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
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

  test(token) {
    const headers = new Headers({
      'authorization': `Bearer ${token}`
    });
    fetch('/api/protected/random-quote', { headers })
      .then(res => res.text())
      .then(res => console.log(res))
      .catch(err => console.log(err));

    /* const instance = axios.create({
     *   headers: {'authorization': `Bearer ${token}`}
     * });
     * instance.get('/api/protected/random-quote').then(res => (
     *   console.log(res)
     * )).catch(err => (
     *   console.log(err)
     * ));*/
  }

  logout(history) {
    store.dispatch(logout());
    history.replace('/');
  }

  render() {
    const { history } = this.props;
    const count = this.props.applications.length;
    const { signin, username, token } = this.props.user;
    const access_token = (token) ? token.access_token : null;
    return (
      <div className="navbar">
        <div className="logo">Логотип</div>
          {/*<button onClick={ this.loadFrom.bind(this) }>load</button>*/}
          {/*<button onClick={ this.saveTo.bind(this) }>save</button>*/}
          {/*<button onClick={ this.test.bind(this, access_token) }>test</button>*/}
      <div className="right">
        {(signin) && <span>
            <NavLink className="button" exact to="/services">
              Сервисы
            </NavLink>
            <NavLink className="button" to="/applications">
              Ваши запросы <span>({ count })</span>
            </NavLink>
            <NavLink className="button" to="/notifications">
              Уведомления <span>({ count })</span>
            </NavLink>
        </span>}

        {(signin)
         ? <span>
           <NavLink className="button" to="/profile">
             { username }
           </NavLink>
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
