import React, { Component } from 'react';
import {
  Form,
  Field,
  reduxForm
} from 'redux-form';
import { TextField } from '../components/inputs.js';
import { documentsNames } from "../Localization/Documents"


export class FileField extends Component {

  constructor() {
    super();
    this.state = {
      files: [],
      progress: 0
    };
  }

  handleChange(e) {
    console.log('fileField', this);
		const files = e.target.files;
		this.setState({ files });
    let formData = new FormData();
    console.log(files);
    formData.append('file', files[0]);
    formData.append('filename', this.props.input.name);
    let xhr = new XMLHttpRequest();
    const that = this;

    // your url upload
    xhr.open('post', '/upload', true);
    xhr.setRequestHeader('X-Requested-With','XMLHttpRequest');
    xhr.upload.onprogress = function(e) {
      if (e.lengthComputable) {
        var percentage = (e.loaded / e.total) * 100;
        that.setState({ progress: percentage });
      }
    };
    xhr.onerror = function(e) {
      console.log('Error');
      console.log(e);
    };
    xhr.onload = function() {
      that.props.field.props.change(files[0]);
      console.log(this.statusText);
    };

    xhr.send(formData);
  }

  render() {
    const { caption, handleChange } = this.props;
    const file = this.state.files[0];

    return (
      <div>
        <label className={'file-field'}>
          {/*{ (file? file.name : null) || caption }*/}
          <div className={"file-caption"}>{ caption }</div>
          <input className={"file-input"} type="file" onChange={this.handleChange.bind(this)} />

          {/*{ !!file && <img src={URL.createObjectURL(file)} className="preview"/>*/}
            {/*// : <span>preview</span>*/}
          {/*}*/}
        </label>
        {/*<div className="progress">*/}
          {/*<span>{ this.state.progress }</span>*/}
        {/*</div>*/}
      </div>
    );
  }
}

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
    const { handleSubmit } = this.props
      , { requiredDocs } = this.state;

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
          })}

          {/*<Field name="comment"*/}
                {/*caption="Комментарий"*/}
                {/*component={ TextField } />*/}
        </Form>
      </div>
    );
  }

  buildRequeridDocs(application){
    const { quiz, build } = application;

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