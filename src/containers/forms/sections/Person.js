import React from 'react';
import { Field } from 'redux-form';
import { required } from "utils";
import { TextField } from '../inputs.js';

export const Person = (props) => (
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
