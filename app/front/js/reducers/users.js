/**
 * Created by suxiao on 2017/7/20.
 */
import * as types from '../constants';
const initialState = {
  users: [],
  isFetching: true
}

const usersState = (state=initialState, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return Object({}, state, {isFetching: true})
    case types.FETCH_SUCCESS:
      let info = {};
      if (action.users !== undefined) {
        info = action.users
      }
      return Object.assign({}, state, { users: info, isFetching: false });
    default:
      return state
  }
}

export default usersState