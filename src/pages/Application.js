import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

import store from '../store';
import TuApplication from './TuApplication';
import { updateApplication } from '../actions/applications';


class Application extends Component {
  submit(data) {
    const { applications } = this.props;
    const index = parseInt(this.props.match.params.id, 10);
    const application = { ...applications[index], data };
    store.dispatch(updateApplication(index, application))
  }

  render() {
    const {
      applications,
      match: { params : { id }}
    } = this.props;

    const ApplicationForm = (props) => {
      if (applications[id])
        return <TuApplication initialValues={ applications[id].data }
                              onSubmit={ props.onSubmit }/>;
      return <Redirect to='/applications' />;
    };

    return (
      <ApplicationForm onSubmit={ this.submit.bind(this) }/>
    );
  }
}

const mstp = ({ applications }) => ({ applications });
export default connect(mstp)( Application );
