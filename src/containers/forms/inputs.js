import React, { Component } from 'react';
import './inputs.css';

export class RadioField extends Component {
  render() {
    const { input, caption } = this.props;
    return (
      <div className="input-group-radio">
        <label>
          <input {...input} checked={input.checked} type="radio"/>
          <span>
            { caption }
          </span>
        </label>
      </div>
    );
  }
}

export class CheckField extends Component {
  render() {
    const { input, caption } = this.props;
    return (
      <div className="input-group-checkbox">
        <label>
          <input {...input} checked={input.value} type="checkbox"/>
          <span>
            { caption }
          </span>
        </label>
      </div>
    );
  }
}

export class TextField extends Component {
  render() {
    const { input, caption, required, meta } = this.props;
    return (
      <div className="input-group">
        <label>
          <span className={(required)?'required':''}>
            { caption }
          </span>
          <input {...input}
                 className={(meta.touched && meta.invalid)?'invalid':''}
                 type="text"/>
        </label>
      </div>
    );
  }
}

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
    const formData = new FormData();
    console.log(files);
    formData.append('file', files[0]);
    formData.append('filename', this.props.input.name);
    const xhr = new XMLHttpRequest();
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
    const { caption } = this.props;

    return (
      <div>
        <label className={'file-field'}>
          <div className={"file-caption"}>{ caption }</div>
          <input className={"file-input"} type="file" onChange={this.handleChange.bind(this)} />

          {/*{ !!file && <img src={URL.createObjectURL(file)} className="preview"/>*/}
          {/* : <span>preview</span>*/}
          {/*}*/}
        </label>
        {/*<div className="progress">*/}
        {/*<span>{ this.state.progress }</span>*/}
        {/*</div>*/}
      </div>
    );
  }
}
