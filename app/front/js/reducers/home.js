/**
 * Created by suxiao on 2017/7/15.
 */
import * as types from '../constants';
const initialState = {
  title: 'Home',
  description: '这是一个个人博客'
}

const homeState = (state=initialState, action) => {
  switch (action.type) {
    case types.HOME_INFO:
      let info = {};
      if (action.info !== undefined) {
        info = action.homeInfo
      }
      return Object.assign({}, state, { ...info });
    default:
      return state
  }
}

export default homeState