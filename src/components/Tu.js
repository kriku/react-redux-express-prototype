import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

import Quiz from './Quiz.js';
import store from '../store';
import { addDraftToApplications } from '../actions/applications';

class Tu extends Component {
  constructor() {
    super();
    this.state = { redirect: false };
  }

  submit(data) {
    const quiz = {...data, date: new Date() };
    store.dispatch(addDraftToApplications(quiz));
    this.setState({ redirect: true });
  }

  render() {
    const { applications } = this.props;
    const id = applications.length - 1;

    const ApplicationRedirect = (props) => {
      if (this.state.redirect)
        return <Redirect to={ '/application/' + id } />
      return null;
    };

    return (
      <div>
        <h3>Запрос о предоставлении технических условий</h3>
        <Quiz onSubmit={this.submit.bind(this)}/>
        <ApplicationRedirect />
      </div>
    );
  }
}

const mstp = ({ applications }) => ({ applications });
export default connect(mstp)( Tu );
