/**
 * Created by '苏萧' on 2017/7/13.
 */
import * as types from '../constants';
import { get } from '../utils/request';

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

export const receiveUsers = (url) => async (dispath) => {
  try {
    await dispath(fetchRequset())
    await get(url)
      .then( response => dispath(fetchSuccess(response)))
      .cache(err => dispath(fetchFailure(err)))
  } catch (err) {
    dispath( fetchFailure(err) )
  }
};