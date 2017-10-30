import { applyMiddleware, createStore } from 'redux';
import { save, load } from 'redux-localstorage-simple';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from 'reducers';

const middleware = applyMiddleware(thunk, logger, save());

const createStoreWithMiddleware = middleware(createStore);

export default createStoreWithMiddleware(reducers, load());

