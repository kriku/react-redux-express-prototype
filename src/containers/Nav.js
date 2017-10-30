import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { NavLink, Link } from 'react-router-dom';
import { logout } from 'actions/user';

import './Nav.css';

class Nav extends Component {
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
              <button className="button" onClick={this.props.logout}>
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
const mdtp = ({ logout });
export default withRouter(connect(mstp, mdtp)( Nav ));
