import React, { Component } from 'react';

export class RadioField extends Component {
  render() {
    const { input, caption } = this.props;
    return (
      <label>
        <input {...input} type="radio"/>
        { caption }
      </label>
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

/* export class FileField extends Component {
 *   render() {
 *     return (
 *       <div>
 *         <input
 *             {...props.input}
 *             type='file'
 *             onDrop={props.onDrop}
 *             onChange={props.onChange}
 *             onFocus={props.onFocus}
 *             onUpdate={props.onUpdate}
 *         />
 *       </div>
 *       );
 *   }
 * }
 * */
