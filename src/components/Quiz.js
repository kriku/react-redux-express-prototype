import React, { Component } from 'react';
import {
  Form,
  Field,
  reduxForm,
  formValueSelector
} from 'redux-form';
import { connect } from 'react-redux';
import { RadioField } from './inputs';

const selector = formValueSelector('tuQuestions');

const subButton = (props) => {
  if (props.online === 'yes')
    return <button type="submit">Submit</button>
  return null;
}

const ConnectedButton = connect(
  state => ({
    online: selector(state, 'online')
  })
)(subButton);

class Questionnaire extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={ handleSubmit }>
        <Field name="field0"
                type="radio"
                caption="yes"
                value="yes"
                component={RadioField} />
        <Field name="field0"
                type="radio"
                caption="no"
                value="no"
                component={RadioField} />
        <br/>
        <Field name="online"
                type="radio"
                caption="offline"
                value="no"
                component={RadioField} />
        <Field name="online"
                type="radio"
                caption="online"
                value="yes"
                component={RadioField} />
        <ConnectedButton />
      </Form>
    );
  }
}

export default reduxForm({
  form: 'tuQuestions'
})( Questionnaire );
