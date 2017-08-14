/*
 * @Author: leo 
 * @Date: 2017-08-13 14:11:33 
 * @Last Modified by: leo
 * @Last Modified time: 2017-08-13 14:24:26
 */
import * as types from '../constants';
const initialState = {
  user: {},
  isFetching: true
}

const userInfo = (state=initialState, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return Object({}, state, {isFetching: true})
    case types.FETCH_SUCCESS:
      let info = {};
      if (action.user !== undefined) {
        info = action.user;
      }
      return Object.assign({}, state, { user: info, isFetching: false });
    default:
      return state
  }
}

export default userInfo