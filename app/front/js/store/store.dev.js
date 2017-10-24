/**
 * Created by '苏萧' on 2017/7/13.
 */
import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
// import { syncHistoryWithStore } from 'react-router-redux';
// import { browserHistory } from 'react-router';
// import { syncHistoryWithStore, routerMiddleware, push } from 'react-router-redux'

import rootReducer from '../reducers'

const logger = createLogger({ collapsed: true });
// const reduxRouterMiddleware = routerMiddleware(browserHistory);

const createStoreWithMiddleware = compose(
  applyMiddleware(
    thunkMiddleware,
    // reduxRouterMiddleware,
    logger
  ),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f)(createStore);

const configureStore = (initialState) => {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }
  return store;
};

export default configureStore