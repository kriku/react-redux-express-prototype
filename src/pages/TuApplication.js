import React, { Component } from 'react';
import {
  Form,
  Field,
  reduxForm,
  initialize
} from 'redux-form';
import store from '../store';
import { TextField } from '../components/inputs.js';

class TuApplication extends Component {

  componentDidMount() {
    this.props.initialize(this.props.initialValues);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={ handleSubmit }>
        <h3>Application Form:</h3>
        <Field name="firstName"
              caption="First Name"
              type="text"
              component={ TextField }/>
        <Field name="middleName"
              caption="Middle Name"
              type="text"
              component={ TextField }/>
        <Field name="lastName"
              caption="Last Name"
              type="text"
              component={ TextField }/>
        <button type="submit">Submit</button>
        <hr/>
      </form>
    );
  }
}

export default reduxForm({
  form: 'TuApplicationForm',
  enableReinitialize: true
})( TuApplication );
