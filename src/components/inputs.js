import React, { Component } from 'react';

export class RadioField extends Component {
  render() {
    const { input, caption } = this.props;
    return (
      <div>
        <label>
          <input {...input} type="radio"/>
          { caption }
        </label>
      </div>
    );
  }
}

export class CheckField extends Component {
  render() {
    const { input, caption } = this.props;
    return (
      <div>
        <label>
          <input {...input} type="checkbox"/>
          { caption }
        </label>
      </div>
    );
  }
}

export class TextField extends Component {
  render() {
    const { input, caption } = this.props;
    return (
      <div>
        <label>
          <div>
            { caption }
          </div>
          <input {...input} type="text"/>
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
    console.log(this);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <input type="file"
               ref={(input) => this.domInput = input}
               onChange={ this.handleChange.bind(this) } />
      </div>
    );
  }
}

