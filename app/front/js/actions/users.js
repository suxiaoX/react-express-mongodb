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
  type: types.FETCH_SUCCESS,
  user
})

const loginFailure = (error) => ({
  type: types.FETCH_FAILURE,
  error
})
// 请求登录
export const login = (url, params) => async (dispath) => {
  try {
    await dispath(loginRequset())
    await post(url, params)
      .then( response => {
        dispath(loginSuccess(response));
        if (response.status ==='01') {
          browserHistory.push('/home');
        }
      })
      .cache(err => dispath(loginFailure(err)))
  } catch (err) {
    dispath( loginFailure(err) )
  }
};