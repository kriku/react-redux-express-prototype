import React, { Component } from 'react';
import {
  Field,
  formValues,
  FormSection
} from 'redux-form';
import { TextField } from '../inputs';

const required = value => (value ? undefined : 'Required');

export class Address extends Component {
  render() {
    return (
      <div>
        <Field name="city"
               caption="Город (населенный пункт)"
               validate={[required]}
               required={true}
               component={ TextField } />
        <Field name="street"
               caption="Улица"
               validate={[required]}
               required={true}
               component={ TextField } />
        <Field name="house"
               caption="Дом"
               validate={[required]}
               required={true}
               component={ TextField } />
        <Field name="building"
               caption="Корпус"
               component={ TextField } />
        <Field name="appartment"
               caption="Квартира"
               validate={[required]}
               required={true}
               component={ TextField } />
        <Field name="postcode"
               caption="Почтовый индекс"
               validate={[required]}
               required={true}
               component={ TextField } />
      </div>
    );
  }
}

export const OtherAddress = formValues({same: 'address.same'})((props) => {
  if (!props.same)
    return (
      <FormSection name="address.real">
        <Address />
      </FormSection>
    );
  return null;
});
