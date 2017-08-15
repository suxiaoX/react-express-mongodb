/**
 * Created by suxiao on 2017/7/20.
 */
import { browserHistory } from 'react-router';
import * as types from '../constants';
import { post } from '../utils/request';

const loginRequset = () => ({
  type: types.FETCH_REQUEST
})

const loginSuccess = (user) => ({
  type: types.FETCH_USER_INFO,
  user
})

const loginFailure = (error) => ({
  type: types.FETCH_FAILURE,
  error
})
// 请求register, login
export const userFetch = (url, params, redirectUrl) => async (dispatch) => {
  try {
    await dispatch(loginRequset())
    await post(url, params)
      .then( response => {
        dispatch(loginSuccess(response));
        if (response.status ==='01') {
          browserHistory.push(redirectUrl);
        }
      })
      .cache(err => dispatch(loginFailure(err)))
  } catch (err) {
    dispatch( loginFailure(err) )
  }
};


