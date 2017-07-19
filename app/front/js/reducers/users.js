/**
 * Created by suxiao on 2017/7/20.
 */
import * as types from '../constants';
const initialState = {
  users: []
}

const usersState = (state=initialState, action) => {
  switch (action.type) {
    case types.FETCH_USERS:
      let info = {};
      if (action.users !== undefined) {
        info = action.users
      }
      return Object.assign({}, state, { ...info });
    default:
      return state
  }
}

export default usersState