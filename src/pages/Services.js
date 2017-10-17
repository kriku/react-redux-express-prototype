import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Tu from '../components/Tu';
import Tp from '../components/Tp';

class Services extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Services</h1>
        </header>
        <Link to='/services/tu'>Tu</Link>
        {' '}
        <Link to='/services/another'>Another service</Link>
        <Route
            path={match.url + '/tu'}
            component={Tu} />
        <Route
            path={match.url + '/another'}
            component={Tp} />
      </div>
    );
  }
}

export default Services;
