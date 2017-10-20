import React, { Component } from 'react';
import BaseForm from './BaseForm';
import FileForm from './FileForm';

import store from '../store';
import { updateApplication } from '../actions/applications';

class ApplicationForm extends Component {
  constructor() {
    super();
    this.state = {page: 'base'}
  }

  submitBase(data) {
    this.setState({page: 'file'});
    const { application, id } = this.props;
    const index = parseInt(id, 10);
    const updated = { ...application, data };
    store.dispatch(updateApplication(index, updated));
  }

  submitFile(files) {
    const { application, id } = this.props;
    const index = parseInt(id, 10);
    const updated = { ...application, files };
    store.dispatch(updateApplication(index, updated));
  }

  render() {
    const { page } = this.state;
    const { application } = this.props;
    return (
      <div>
        <button onClick={() => this.setState({page: 'base'})}>BaseForm</button>
        <button onClick={() => this.setState({page: 'file'})}>FileForm</button>
        { page === 'base' && <BaseForm
                                 onSubmit={ this.submitBase.bind(this) }
                                 quiz={ application.quiz }
                                 initialValues={ application.data } />
        }
        { page === 'file' && <FileForm
                                 quiz={ application.quiz }
                                 onSubmit={ this.submitFile.bind(this) } /> }
      </div>
    );
  }
}

export default ApplicationForm;
