import React, { Component } from 'react';
import {
  Form,
  Field,
  reduxForm
} from 'redux-form';
import { documentsNames } from 'text/documents';
import { FileField } from './inputs';

class FileForm extends Component {
  constructor() {
    super();
    this.state = {
      files: [],
      requiredDocs: {}
    }
  }

  componentWillMount(){
    this.buildRequeridDocs(this.props.application);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.application !== this.props.application)
      this.buildRequeridDocs(nextProps.application);
  }

  render() {
    const { handleSubmit } = this.props;
    const { requiredDocs } = this.state;

    return (
      <div>
        <h1> Комплект Документов </h1>
        <Form onSubmit={ handleSubmit }>

          {!!Object.keys(requiredDocs).length && Object.keys(requiredDocs).map((doc, index) => {
            if (requiredDocs[doc])
              return (
                <Field name={`file${index}`}
                       field={this}
                       caption={documentsNames[doc]}
                       component={ FileField } />
              )
             return null;
          })}
        </Form>
      </div>
    );
  }

  buildRequeridDocs(application){
    const { quiz, build = {} } = application;

    let requiredDocs = {
      copiesOfTitleDeeds: true,
      powerOfAttorney: quiz.representative === 'true',
      documentOnOwnership: build.exploitation === 'ready',
      connectionCertificate: quiz.transfer === 'true',
      concessionAgreement: quiz.transfer === 'true',
      documentOfReductionInConsumption: quiz.transfer === 'true',
      contractOfUse: quiz.nko_use === 'true',
      gasFlowCalculation: quiz.consumption !== 'less5',
      situationalPlan: true,
      principalSubscriberAgreement: quiz.not_legal_owner === 'true'
    };

    this.setState({requiredDocs});
  }
}

export default reduxForm({
  form: 'TuFileForm'
})( FileForm );
