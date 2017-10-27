import { FormSection, formValues } from 'redux-form';
import Address from './Address';
import React from 'react';

export const RealAddress = formValues({same: 'address.same'})((props) => {
  if (!props.same)
    return (
      <FormSection name="address.real">
        <Address />
      </FormSection>
    );
  return null;
});