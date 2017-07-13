/**
 * Created by '苏萧' on 2017/7/13.
 */
import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers'

const logger = createLogger({ collapsed: true });
let createStoreWithMiddleware = compose(
  applyMiddleware(
    thunkMiddleware,
    logger
  )
);

const configureStore = (initialState) => {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  return store;
}

export default configureStore