import React, { Component } from 'react';
import { Field } from 'redux-form';
import { TextField } from '../../components/inputs';

export default class Address extends Component {
  render() {
    return (
      <div>
        <Field name="city" caption="Город (населенный пункт)" component={ TextField } />
        <Field name="street" caption="Улица" component={ TextField } />
        <Field name="house" caption="Дом" component={ TextField } />
        <Field name="building" caption="Корпус" component={ TextField } />
        <Field name="appartment" caption="Квартира" component={ TextField } />
        <Field name="postcode" caption="Почтовый индекс" component={ TextField } />
      </div>
    );
  }
}
