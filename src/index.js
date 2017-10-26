import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Redirect, withRouter } from 'react-router';

import App from './App';
import Login from './Containers/Login';
import Services from './pages/Services';
import Tu from './components/Tu';
import Application from './pages/Application';
import Applications from './pages/Applications';

import Nav from './components/Nav';
/* import Footer from './components/Footer';*/

import './index.css';

import store from './store';
import registerServiceWorker from './registerServiceWorker';


const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="content">
        <main className="wrapper">
          <Nav />
          <Route exact path="/" component={App} />
          <Route path="/login" component={Login} />
          <Route path="/services" component={Services} />
          <Route path="/applications" component={Applications} />
          <Route path="/application/:id" component={Application} />
        </main>
      </div>
    </Router>
  </Provider>, root);

// debug
registerServiceWorker();
window.store = store;
