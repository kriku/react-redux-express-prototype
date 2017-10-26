import React, { Component } from 'react';
import {
  Form, Field, reduxForm, getFormSyncErrors, formValues
} from 'redux-form';
import { connect } from 'react-redux';
import { RadioField } from './inputs';
import {
  quizErrorMessages, quizMessages
} from '../validation/quiz';

const validate = values => {
  const errors = {};
  const required = (field) => {
    if (!values[field])
      errors[field] = quizErrorMessages[field];
  }
  required('applicant');
  required('representative');
  required('consumption');
  required('owner');
  required('transfer');
  required('nko_use');
  if ('idk' === values['consumption'])
    errors['consumption'] = quizMessages['idk'];
  return errors;
};

const ConnectedButton = connect(
  state => ({
    disabled: !getFormSyncErrors('tuQuestions')(state)
  })
)(props => (
  <button className="primary" type="submit" disabled={!props.disabled}>
    Перейти к подаче заявления
  </button>
));

const ConsumptionMessage = formValues('consumption')(props => (
  (props.consumption)
  ? <div> {quizMessages[props.consumption]} </div>
  : null
));


class Quiz extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={ handleSubmit }>
        <p>
          Заявитель (юридический статус):
        </p>
        <div>
          <Field name="applicant"
                 caption="Юридическое лицо"
                 type="radio"
                 value="legal"
                 component={RadioField} />
          <Field name="applicant"
                 caption="Физическое лицо"
                 type="radio"
                 value="ordinary"
                 component={RadioField} />
        </div>
        <p>
          Заявка подается представителем заявителя?
        </p>
        <div>
          <Field name="representative"
                 caption="Да"
                 type="radio"
                 value="true"
                 component={RadioField} />
          <Field name="representative"
                 caption="Нет"
                 type="radio"
                 value="false"
                 component={RadioField} />
        </div>
        <p>
          Какова величина максимального часового расхода газа?
        </p>
        <div>
          <Field name="consumption"
                 caption="Менее 5 м3"
                 type="radio"
                 value="less5"
                 component={RadioField} />
          <Field name="consumption"
                 caption="От 5 до 300 м3"
                 type="radio"
                 value="5to300"
                 component={RadioField} />
          <Field name="consumption"
                 caption="Более 300 м3"
                 type="radio"
                 value="greater300"
                 component={RadioField} />
          <Field name="consumption"
                 caption="Не знаю, требуется расчёт"
                 type="radio"
                 value="idk"
                 component={RadioField} />
          <ConsumptionMessage />
        </div>
        <p>
          Владелец сетей газораспределения АО “Газпром ТрансГаз Казань”?
        </p>
        <div>
          <Field name="owner"
                 caption="Да"
                 type="radio"
                 value="true"
                 component={RadioField} />
          <Field name="owner"
                 caption="Нет"
                 type="radio"
                 value="false"
                 component={RadioField} />
          <Field name="owner"
                 caption="Не знаю"
                 type="radio"
                 value="idk"
                 component={RadioField} />
        </div>
        <p>
          Предполагается уступка права на использование мощности?
        </p>
        <div>
          <Field name="transfer"
                 caption="Да"
                 type="radio"
                 value="true"
                 component={RadioField} />
          <Field name="transfer"
                 caption="Нет"
                 type="radio"
                 value="false"
                 component={RadioField} />
        </div>
        <p>
          Предполагается ли использование объектов инфраструктуры и другого имущества общего пользования НКО?
        </p>
        <div>
          <Field name="nko_use"
                 caption="Да"
                 type="radio"
                 value="true"
                 component={RadioField} />
          <Field name="nko_use"
                 caption="Нет"
                 type="radio"
                 value="false"
                 component={RadioField} />
        </div>

        <p>
          Подключение осуществляется на земельном участке, правообладателем которого является другой абонент (основной абонент)?
        </p>
        <div>
          <Field name="not_legal_owner"
                 caption="Да"
                 type="radio"
                 value="true"
                 component={RadioField} />
          <Field name="not_legal_owner"
                 caption="Нет"
                 type="radio"
                 value="false"
                 component={RadioField} />
        </div>
        <hr/>

        <ConnectedButton />
      </Form>
    );
  }
}

export default reduxForm({
  form: 'tuQuestions',
  validate
})( Quiz );
