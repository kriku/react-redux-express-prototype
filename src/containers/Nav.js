import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { NavLink, Link } from 'react-router-dom';
import store from 'store';
import { logout } from 'actions/user.js';

import './Nav.css';

class Nav extends Component {
  logout() {
    store.dispatch(logout());
    this.props.history.push('/');
  }

  render() {
    const count = this.props.applications.length;
    const { signin } = this.props.user;
    return (
      <div class="navbar">
        <Link className="logo" to="/"> Логотип </Link>

        <div className="right">
          {(signin)
           ? <span>
             <NavLink className="button" to="/profile">
               Профиль
              </NavLink>
              <button className="button" onClick={this.logout.bind(this)}>
                Выйти
              </button>
           </span>
            : <NavLink className="button" to="/login">
                Войти
              </NavLink>
          }
        </div>

        {(signin) && <div className="right">
            <NavLink className="button" to="/services">
              Сервисы
            </NavLink>
            <NavLink className="button" to="/applications">
              Ваши запросы <span>({ count })</span>
            </NavLink>
            <NavLink className="button" to="/notifications">
              Уведомления <span>(0)</span>
            </NavLink>
        </div>}
      </div>
    );
  }
}

const mstp = ({ user, applications }) => ({ user, applications });
export default withRouter(connect(mstp)( Nav ));
