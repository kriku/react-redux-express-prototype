import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

import ApplicationForm from './ApplicationForm';

const mstp = ({ applications }) => ({ applications });
const FormOrRedirect = connect(mstp)((props) => {
  const { applications, id } = props;
  return (applications[id])
    ? <ApplicationForm id={parseInt(id, 10)} application={applications[id]} />
    : <Redirect to='/applications' />
});

export default (props) => (
  <FormOrRedirect id={props.match.params.id}/>
);
