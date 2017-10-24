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
    this.state = { files: [] };
  }
  handleChange(e) {
    console.log(this.props);
    console.log(this);
		const files = e.target.files;
		this.setState({ files });
  }
  render() {
    window.debugInput = this;
    console.log('filefield props', this.props);
    const { handleChange } = this.props;
    console.log('handle', handleChange);
    return (
      <div>
        <input
          type="file"
          onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

class FileForm extends Component {
  constructor() {
    super();
    this.state = {files: []}
  }
  handleUpload(e) {
    console.log(e);
    console.log(this);
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h1> Files </h1>
        <Form onSubmit={ handleSubmit }>
          <Field name="file"
                 onChange={ this.handleUpload.bind(this) }
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
