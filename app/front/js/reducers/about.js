/**
 * Created by '苏萧' on 2017/7/13.
 */
import * as types from '../constants';

const initialState = {
  info: "about",
  isFetching: true
};

const aboutState = (state=initialState, action) => {
  switch (action) {
    case types.FETCH_USER_INFO:
      let info = {};
      if (action.info !== undefined) {
        info = action.info
      }
      return Object.assign({}, state, {info:info, isFetching:false})
    default:
      return state
  }
};

export default  aboutState