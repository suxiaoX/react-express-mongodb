/**
 * Created by '苏萧' on 2017/7/13.
 */
import * as types from '../constants';
import { post } from '../utils/request';

const fetchRequset = () => ({
  type: types.FETCH_REQUEST
})

const fetchSuccess = (data) => ({
  type: types.FETCH_SUCCESS,
  data
})

const fetchFailure = (error) => ({
  type: types.FETCH_FAILURE,
  error
})

export const receiveUsers = (url) => {
  console.log(url)
  return (dispath) => {
    // let users = await get(url).then( res => res.json)
     dispath( fetchRequset() )
     post(url)
        .then( res => res.json)
        .then( data => {
          console.log(data)
          dispath( fetchSuccess(data) )
        })
        .cache(err => {
          dispath( fetchFailure(err) )
        })
  }
};