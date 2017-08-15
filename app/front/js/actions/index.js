/**
 * Created by '苏萧' on 2017/7/13.
 */
import * as types from '../constants';
import { get } from '../utils/request';

const fetchRequset = () => ({
  type: types.FETCH_REQUEST
})

const fetchSuccess = (users) => ({
  type: types.FETCH_USERS,
  users
})

const fetchFailure = (error) => ({
  type: types.FETCH_FAILURE,
  error
})
// 请求用户信息
export const receiveUsers = (url) => async (dispatch) => {
  try {
    await dispatch(fetchRequset())
    await get(url)
      .then( response => dispatch(fetchSuccess(response.message)))
      .cache(err => dispatch(fetchFailure(err)))
  } catch (err) {
    dispatch( fetchFailure(err) )
  }
};