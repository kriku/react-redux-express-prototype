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
  handleChange() {
    const field = this.props.input.name;
    this.props.field.props.change(field, this.domInput.files[0].name);
    /* field.value = this.domInput.files[0].name;*/
  }
  render() {
    return (
      <div>
        <input type="file"
               ref={(input) => this.domInput = input}
               onChange={ this.handleChange.bind(this) } />
      </div>
    );
  }
}

