import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Field,
  reduxForm
} from 'redux-form';
import { Redirect } from 'react-router';
import { signin } from '../actions/user';
import axios from 'axios';
import store from '../store';

const validate = values => {
  const errors = {};
  errors.username = (!values.username)
  ? 'Введите почту'
  : null;
  errors.password = (!values.password)
  ? 'Введите пароль'
  : null;
  console.log('validate', errors);
  return errors;
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <input {...input} placeholder={label} type={type} />
    <div>
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const LoginForm = reduxForm({
  form: 'LoginForm',
  validate: validate
})(props => {
  console.log(props);
  return <div style={{marginTop: "6em"}}>
    <form onSubmit={ props.handleSubmit } style={{display: "inline-block"}}>
      <Field name="username"
             label="Почта"
             component={renderField} />
      <Field name="password"
             label="Пароль"
             component={renderField} />
      <button type="submit">Войти</button>
    </form>
  </div>
});

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
        console.log('/users', res);
        store.dispatch(signin(data.username, data.password, res.data));
      }).catch((error) => {
        console.log('/users', error.response);
        /* store.dispatch(signin(data.username, data.password));*/
      });
    }
    axios({
      method: 'post',
      url: '/sessions/create',
      data: data
    }).then((res) => {
      console.log('/session/create', res);
      store.dispatch(signin(data.username, data.password, res.data));
    }).catch((error) => {
      const { response } = error;
      console.log(response);
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
