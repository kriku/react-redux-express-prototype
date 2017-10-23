import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import App from './App';
import Login from './pages/Login';
import Services from './pages/Services';
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
