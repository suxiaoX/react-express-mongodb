/*
 * @Author: leo 
 * @Date: 2017-08-14 16:53:31 
 * @Last Modified by: leo
 * @Last Modified time: 2017-08-14 17:13:14
 */

import * as types from '../constants';
import { post } from '../utils/request';

const fetchRequset = () => ({
  type: types.FETCH_REQUEST
})

const fetchSuccess = (users) => ({
  type: types.FETCH_SUCCESS,
  users
})

const fetchFailure = (error) => ({
  type: types.FETCH_FAILURE,
  error
})
// 新增文章
export const addArticle = (url, params) => async (dispatch) => {
  try {
    await dispatch(fetchRequset())
    await post(url, params)
      .then( response => dispatch(fetchSuccess(response)))
      .cache(err => dispatch(fetchFailure(err)))
  } catch (err) {
    dispatch( fetchFailure(err) )
  }
};