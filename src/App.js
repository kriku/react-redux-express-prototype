import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './App.css';

class App extends Component {
  render() {
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

export default App;
