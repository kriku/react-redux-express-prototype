import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {
  Field,
  reduxForm
} from 'redux-form';
import { Redirect } from 'react-router';
import { signin } from '../actions/user';
import * as loginApi from "../actions/user";

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
    this.props.actions.createSession(data)
  }

  render() {
    const { signin } = this.props.user,
          { from } = this.props.location.state || { from: { pathname: '/' }};

      return (
      <div>
        {(!signin)
          ? <div className="App center">
            <LoginForm onSubmit={ this.submit.bind(this) }/>
          </div>
          : <Redirect to={from} />
        }
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

function mapDispatchToProps(dispatch) {
    const actions = loginApi;
    return {
        actions: bindActionCreators(actions, dispatch),
    }
}

export default connect(mapStateToProps ,mapDispatchToProps)( Login );
