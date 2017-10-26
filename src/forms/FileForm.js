import React, { Component } from 'react';
import {
  Form,
  Field,
  reduxForm
} from 'redux-form';
import { TextField } from '../components/inputs.js';


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
        <label>
          { (file? file.name : null) || caption }
          <input type="file"
                onChange={this.handleChange.bind(this)} />
          { (file)
            ? <img src={URL.createObjectURL(file)} className="preview"/>
            : <span>preview</span>
          }
        </label>
        <div className="progress">
          <span>{ this.state.progress }</span>
        </div>
      </div>
    );
  }
}

class FileForm extends Component {
  constructor() {
    super();
    this.state = {files: []}
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h1> Files </h1>
        <Form onSubmit={ handleSubmit }>
          <Field name="file1"
                 field={this}
                 caption="inputfile"
                 component={ FileField } />

          <Field name="file2"
                 field={this}
                 caption="inputfile"
                 component={ FileField } />

          <Field name="comment"
                caption="Комментарий"
                component={ TextField } />
        </Form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'TuFileForm'
})( FileForm );
