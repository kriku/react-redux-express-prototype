import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Tu from './Tu';
import Tp from './Tp';

class Services extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="App">
        <Link to='/services/tu' className='h2'>
          Запрос о предоставлении технических условий
        </Link>
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
