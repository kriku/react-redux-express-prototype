import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './Home.css';

class Home extends Component {
  render() {
    // TODO: this route doesn't mention in specification
    // but without it fill kind of lonely
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Газпром Трансгаз Казань</h1>
        </header>
        <h3>Описание возможностей портала</h3>
        <Redirect to="/services" />
      </div>
    );
  }
}

export default Home;
