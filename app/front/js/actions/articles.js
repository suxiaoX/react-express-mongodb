/*
 * @Author: leo 
 * @Date: 2017-08-14 16:53:31 
 * @Last Modified by: leo
 * @Last Modified time: 2017-08-16 14:32:54
 */
import { browserHistory } from 'react-router';
import { Modal } from 'antd';
import * as types from '../constants';
import { get, post } from '../utils/request';

const fetchRequset = () => ({
  type: types.FETCH_REQUEST
})

const fetchSuccess = (article) => ({
  type: types.FETCH_ARTICLES,
  article
})

const fetchAddArticle = (article) => ({
    type: types.FETCH_ADD_ARTICLE,
    article
})

const fetchFailure = (error) => ({
  type: types.FETCH_FAILURE,
  error
})

const success = () => {
    const modal = Modal.success({
        title: '添加文章提示',
        content: '添加文章成功'
    });
    setTimeout( () => {
        modal.destroy();
        browserHistory.push('/admin/article');
    },2500);
}
// 获取文章列表
export const getArticles = (url) => async (dispatch) => {
    try {
        await dispatch(fetchRequset())
        const data = await get(url);
        await dispatch(fetchSuccess(data.message));
        // await get(url)
        //     .then( response => {
        //         dispatch(fetchSuccess(response.message));
        //     }).cache(err => dispatch(fetchFailure(err)))
    } catch (err) {
        dispatch(fetchFailure(err));
    }
}
// 新增文章
export const addArticle = (url, params) => async (dispatch) => {
  try {
    await dispatch(fetchRequset())
    const response = await post(url, params);
    if (response.status === '01') {
       success();
    }
    dispatch(fetchAddArticle(response.message));
    // await post(url, params)
    //   .then( response => {
    //       console.log(response);
    //       dispatch(fetchAddArticle(response.message));
    //       if (response.status === '01') {
    //         browserHistory.push('/admin/article');
    //       }
    //     }
    //   ).cache(err => dispatch(fetchFailure(err)))
  } catch (err) {
    dispatch( fetchFailure(err) )
  }
};