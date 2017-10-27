import React, { Component } from 'react';
import {
  Field,
  FieldArray,
  formValues
} from 'redux-form';
import { TextField, RadioField } from '../inputs';

const Points = ({ fields }) => (
  <div>
    { fields.map((member, index) =>
      <div key={index}>
        <Field
          name={member}
          type="text"
          caption={`Точка ${index + 2}`}
          component={ TextField } />
        <button type="button" onClick={() => fields.remove(index)}>
          Удалить точку
        </button>
      </div>
    )}
    <div>
      <button type="button" onClick={() => fields.push()}>Добавить точку</button>
    </div>
  </div>
);

const PointsJustification = formValues('points')((props) => {
  if (props.points && props.points.length)
    return (
      <Field name="points_justification"
              caption="Обоснование нескольких точек"
              component={ TextField } />
    );
  return null;
});

const ExploitationDate = formValues('exploitation')((props) => {
  if (props.exploitation === 'pending')
    return (
      <Field name="exploitation_date"
              caption="Срок ввода в эксплуатацию"
              component={ TextField } />
    );
  return null;
});


export default class Construction extends Component {
  render() {
    console.log('construction', this.props);
    const { consumption } = this.props.quiz;
    return (
      <div>
        <p>
          Состояние объекта
        </p>
        <p>
          <Field name="exploitation"
                 caption="Построен (введен в эксплуатацию)"
                 type="radio"
                 value="ready"
                 component={RadioField} />
          <Field name="exploitation"
                 caption="На стадии строительства либо проектирования"
                 type="radio"
                 value="pending"
                 component={RadioField} />
        </p>
        {/* TODO: change to datepicker */}
        <ExploitationDate />

        {
          (consumption !== 'idk') && <div>
            <p>
              Максимальный часовой расход газа (по точкам)
            </p>
            <Field name="point" caption="Точка 1" component={ TextField } />
            <FieldArray name="points" component={ Points }/>

            <PointsJustification />
          </div>
        }

        <Field name="type"
               caption="Наименование объекта (тип)"
               component={ TextField } />

      </div>
    );
  }
}
