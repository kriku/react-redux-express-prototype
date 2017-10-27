import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Home from "./containers/Home"

import './style/index.css';

import store from './store';
import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
   <Home />
  </Provider>, root);

// debug
registerServiceWorker();
window.store = store;
