/**
 * Created by '苏萧' on 2017/7/13.
 */
import { compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers'

const createStoreWithMiddleware = compose(
  applyMiddleware(
    thunkMiddleware
  )
);

const configureStore = (initialState) => {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  return store;
}

export default configureStore