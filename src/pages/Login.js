import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router';
import { signin } from '../actions/user';
import axios from 'axios';
import store from '../store';

const LoginForm = reduxForm({
  form: 'LoginForm'
})(props => (
  <form onSubmit={ props.handleSubmit } style={{display: "inline-block"}}>
    <table style={{marginTop: "6em"}}>
      <tr>
        <td>Логин</td>
        <td>
          <Field name="username"
                component="input" />
        </td>
      </tr>
      <tr>
        <td>Пароль</td>
        <td>
          <Field name="password"
                component="input" />
        </td>
      </tr>
      <tr>
        <td colSpan="2">
          <button type="submit">Войти</button>
        </td>
      </tr>
    </table>
  </form>
));

class Login extends Component {
  submit(data) {
    console.log(data.username);
    console.log(data.password);
    const register = (data) => {
      axios({
        method: 'post',
        url: '/users',
        data: data
      }).then((res) => {
        store.dispatch(signin(data.username, data.password));
      }).catch((error) => {
        store.dispatch(signin(data.username, data.password));
      });
    }
    axios({
      method: 'post',
      url: '/sessions/create',
      data: data
    }).then((res) => {
      store.dispatch(signin(data.username, data.password, res));
    }).catch((error) => {
      register(data);
    });
    /* this.props.dispatch(signin(data));*/
  }
  render() {
    const { signin } = this.props.user;
    return (
      <div>
        {(!signin)
          ? <div className="App center">
            <LoginForm onSubmit={ this.submit.bind(this) }/>
          </div>
          : <Redirect to="/" />
        }
      </div>
    );
  }
}

const mstp = ({ user }) => ({ user });
export default connect(mstp)( Login );
