import React, { Component } from 'react';
import {
  Form,
  Field,
  FormSection,
  reduxForm
} from 'redux-form';

import { TextField, CheckField } from './inputs.js';

import { required } from 'utils';

import { Legal } from './sections/Legal';
import { Person } from './sections/Person';
import { Address, OtherAddress } from './sections/Address';

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

        <h3> Адрес </h3>
        <FormSection name="address.legal">
          <Address />
        </FormSection>

        <h3> Почтовый адрес </h3>
        <p>
          <Field name="address.same"
                caption="Совпадает с юридическим"
                component={ CheckField } />
        </p>
        <OtherAddress />

        <hr/>
        <button className="primary" type="submit">
          Сохранить и перейти к объекту газофикации
        </button>
      </Form>
    );
  }
}

export default reduxForm({
  form: 'TuBaseForm'
})( Application );
