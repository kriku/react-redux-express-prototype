import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Applications extends Component {
  render() {
    const { applications } = this.props;

    const ApplicationsList = (props) => {
      return applications.map((application, index) => (
        <div>
          <Link key={ index } to={'/application/' + index}>
            { JSON.stringify(applications[index], null, 2) }
          </Link>
          <hr/>
        </div>
      ));
    };

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Applications</h1>
          count: {applications.length}
        </header>
        <ApplicationsList />
      </div>
    );
  }
}

const mstp = ({ applications }) => ({ applications });
export default connect(mstp)( Applications );
