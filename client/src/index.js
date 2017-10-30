import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Root from './containers/Root';

import './index.css';

import store from './store';
import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>, root);

registerServiceWorker();
window.store = store;
