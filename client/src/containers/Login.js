import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Field,
  reduxForm
} from 'redux-form';
import { Redirect } from 'react-router';
import { login } from 'actions/user';
import { Preprops } from 'utils';

const validate = values => {
  const errors = {};
  errors.username = (!values.username)
  ? 'Введите почту'
  : null;
  errors.password = (!values.password)
  ? 'Введите пароль'
  : null;
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
  return (
  <div style={{marginTop: "6em"}}>
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
  )
});

class Login extends Component {
  submit(data) {
    this.props.login(data);
  }

  render() {
    const { signin } = this.props.user;
    const { from } = this.props.location.state || { from: { pathname: '/' }};
    console.log(this.props);

      // TODO: change divs to components
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

const mstp = ({ user }) => ({ user });
const mdtp = ({ login });
export default connect(mstp, mdtp)( Login );
