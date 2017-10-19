import React, { Component } from 'react';
import {
  Form,
  Field,
  FormSection,
  formValues,
  reduxForm
} from 'redux-form';
import { TextField, CheckField } from '../components/inputs.js';
import Address from './sections/Address';
import Construction from './sections/Construction';

const Person = (props) => (
  <div>
    <Field name="surname"
           caption="Фамилия"
           component={ TextField }/>
    <Field name="name"
           caption="Имя"
           component={ TextField }/>
    <Field name="middle_name"
           caption="Отчество"
           component={ TextField }/>
  </div>
);

const Legal = (props) => (
  <div>
    <Field name="name"
           caption="Название компании"
           component={ TextField }/>
    <Field name="shortname"
           caption="Сокращенное наименование (если имеется)"
           component={ TextField }/>
    <Field name="form"
           caption="Организационно-правовая форма"
           component={ TextField }/>
  </div>
);

const RealAddress = formValues({same: 'address.same'})((props) => {
  if (!props.same)
    return (
      <FormSection name="address.real">
        <Address />
      </FormSection>
    );
  return null;
});


class Application extends Component {

  componentDidMount() {
    this.props.initialize(this.props.initialValues);
  }

  render() {
    const { handleSubmit } = this.props;

    const { quiz: { applicant }} = this.props;

    return (
      <Form onSubmit={ handleSubmit }>
        <h3>Application Form:</h3>

        {applicant === 'legal' && <Legal />}
        {applicant === 'ordinary' && <Person />}

        <div> Юридический адрес </div>
        <FormSection name="address.legal">
          <Address />
        </FormSection>

        <div> Фактический адрес </div>
        <Field name="address.same"
               caption="Совпадает с юридическим"
               component={ CheckField } />
        <RealAddress />


        <Field name="phone"
               caption="Номер телефона"
               component={ TextField } />

        <Field name="email"
               caption="Электронная почта"
               component={ TextField } />

        <FormSection name="construction">
          <Construction />
        </FormSection>

        <div> Местонахождение объекта недвижимости </div>
        <FormSection name="construction.address">
          <Address />
        </FormSection>

        <Field name="comment"
               caption="Комментарий"
               component={ TextField } />

        <button type="submit">Submit</button>
        <hr/>
      </Form>
    );
  }
}

export default reduxForm({
  form: 'TuApplicationForm'
})( Application );
