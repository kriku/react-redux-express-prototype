import React, { Component } from 'react';
import {
  Form,
  Field,
  FormSection,
  reduxForm
} from 'redux-form';
import { TextField } from '../components/inputs.js';
import Address from './sections/Address';
import Construction from './sections/Construction';


class BuildForm extends Component {

  componentDidMount() {
    this.props.initialize(this.props.initialValues);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Form onSubmit={ handleSubmit }>
        <h3>Application Form:</h3>


        <FormSection name="construction">
          <Construction />
        </FormSection>

        <h3> Местонахождение объекта недвижимости </h3>
        <FormSection name="construction.address">
          <Address />
        </FormSection>

        <Field name="comment"
               caption="Комментарий"
               component={ TextField } />

        <hr/>
        <button className="primary" type="submit">
          Save and go to files
        </button>
      </Form>
    );
  }
}

export default reduxForm({
  form: 'TuBuildForm'
})( BuildForm );
