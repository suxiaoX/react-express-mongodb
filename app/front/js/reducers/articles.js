/*
 * @Author: leo 
 * @Date: 2017-08-14 17:04:42 
 * @Last Modified by: leo
 * @Last Modified time: 2017-08-15 11:57:50
 */
// import { handleActions } from 'redux-actions';
import * as types from '../constants';
const initialState = {
  articles: [],
  isFetching: true
}

const articlesState = (state=initialState, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return Object({}, state, {isFetching: true})
    case types.FETCH_ARTICLES:
      let info = {};
      if (action.article !== undefined) {
        info = action.article
      }
      return Object.assign({}, state, { articles: info, isFetching: false });
    case types.FETCH_ADD_ARTICLE:
      return state;
    default:
      return state
  }
}

export default articlesState