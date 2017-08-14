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
// 请求register, login
export const userFetch = (url, params, redirectUrl) => async (dispath) => {
  try {
    await dispath(loginRequset())
    await post(url, params)
      .then( response => {
        console.log(response);
        dispath(loginSuccess(response));
        if (response.status ==='01') {
          browserHistory.push(redirectUrl);
        }
      })
      .cache(err => dispath(loginFailure(err)))
  } catch (err) {
    dispath( loginFailure(err) )
  }
};


