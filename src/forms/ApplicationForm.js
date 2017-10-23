import React, { Component } from 'react';
import { connect } from 'react-redux';
import BaseForm from './BaseForm';
import BuildForm from './BuildForm';
import FileForm from './FileForm';
import './ApplicationForm.css';

import store from '../store';
import { updateApplication } from '../actions/applications';

class ApplicationForm extends Component {
  constructor() {
    super();
    this.state = {page: 'base'}
  }

  submitBase(data) {
    this.setState({page: 'build'});
    const { application, id } = this.props;
    const index = parseInt(id, 10);
    const base = {...data, done: true}
    const updated = { ...application, base };
    store.dispatch(updateApplication(index, updated));
  }

  submitBuild(data) {
    this.setState({page: 'file'});
    const { application, id } = this.props;
    const index = parseInt(id, 10);
    const build = {...data, done: true}
    const updated = { ...application, build };
    store.dispatch(updateApplication(index, updated));
  }

  submitFile(data) {
    const { application, id } = this.props;
    const index = parseInt(id, 10);
    const file = {...data, done: true}
    const updated = { ...application, file };
    store.dispatch(updateApplication(index, updated));
  }

  render() {
    const { page } = this.state;
    const { id } = this.props;
    const { applications } = this.props;
    const index = parseInt(id, 10);
    const application = applications[index];
    const done = (page) => ((application[page])? 'done':'');
    const active = (p) => ((page === p)? 'active':'');
    return (
      <div>
        <h1> Запрос о предоставлении технических условий </h1>
        <div className="pointers">
          <button className={active('base') + ' ' + done('base')}
                  onClick={() => this.setState({page: 'base'})}>
            Сведения о заявителе
          </button>
          <button className={active('build') + ' ' + done('build')}
                  onClick={() => this.setState({page: 'build'})}>
            Объект газофикации
          </button>
          <button className={active('file') + ' ' + done('file')}
                  onClick={() => this.setState({page: 'file'})}>
            Документы
          </button>
          <button className="right">
            Отправить
          </button>
        </div>
        { page === 'base' && <BaseForm
                                 onSubmit={ this.submitBase.bind(this) }
                                 quiz={ application.quiz }
                                 initialValues={ application.base } />
        }
        { page === 'build' && <BuildForm
                                 onSubmit={ this.submitBuild.bind(this) }
                                 quiz={ application.quiz }
                                 initialValues={ application.build } />
        }
        { page === 'file' && <FileForm
                                 quiz={ application.quiz }
                                 onSubmit={ this.submitFile.bind(this) } /> }
      </div>
    );
  }
}

const mstp = ({ applications }) => ({ applications });
export default connect(mstp)( ApplicationForm );
