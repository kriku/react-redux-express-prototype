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

const required = value => (value ? undefined : 'Required');

const Person = (props) => (
  <div>
    <Field name="surname"
           caption="Фамилия"
           validate={[required]}
           required={true}
           component={ TextField }/>
    <Field name="name"
           caption="Имя"
           validate={[required]}
           required={true}
           component={ TextField }/>
    <Field name="middle_name"
           caption="Отчество"
           validate={[required]}
           required={true}
           component={ TextField }/>
  </div>
);

const Legal = (props) => (
  <div>
    <Field name="name"
           caption="Название компании"
           validate={[required]}
           required={true}
           component={ TextField }/>
    <Field name="shortname"
           caption="Сокращенное наименование"
           validate={[required]}
           required={true}
           component={ TextField }/>
    <Field name="form"
           caption="Организационно-правовая форма"
           validate={[required]}
           required={true}
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
        <h3>Данные заявителя</h3>

        {applicant === 'legal' && <Legal />}
        {applicant === 'ordinary' && <Person />}

        <Field name="phone"
               caption="Номер телефона"
               validate={[required]}
               required={true}
               component={ TextField } />

        <Field name="email"
               caption="Электронная почта"
               validate={[required]}
               required={true}
               component={ TextField } />

        <h3> Юридический адрес </h3>
        <FormSection name="address.legal">
          <Address />
        </FormSection>

        <h3> Фактический адрес </h3>
        <p>
          <Field name="address.same"
                caption="Совпадает с юридическим"
                component={ CheckField } />
        </p>
        <RealAddress />



        <hr/>
        <button className="primary" type="submit">
          Save and go to gasification object
        </button>
      </Form>
    );
  }
}

export default reduxForm({
  form: 'TuBaseForm'
})( Application );
