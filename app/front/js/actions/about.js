/**
 * Created by '苏萧' on 2017/7/13.
 */
import * as types from '../constants';

export const receiveUserInfo = data => ({
  type: types.FETCH_USER_INFO,
  info: data
});
