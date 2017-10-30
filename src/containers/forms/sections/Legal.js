import React from 'react';
import { Field } from 'redux-form';
import { required } from 'utils';
import { TextField } from '../inputs';

export const Legal = (props) => (
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
