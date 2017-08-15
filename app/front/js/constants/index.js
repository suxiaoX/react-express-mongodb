/**
 * Created by '苏萧' on 2017/7/13.
 */

// import { createAction } from 'redux-actions'; 本来想用的，但是感觉更麻烦;
// 同意的发起请求和请求失败
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_FAILURE = 'FETCH_FAILURE';
// 登录后用户信息
export const FETCH_USER_INFO = 'FETCH_USER_INFO';
// 请求文章列表
export const FETCH_ARTICLES = 'FETCH_ARTICLES';
// 请求用户
export const FETCH_USERS = 'FETCH_USERS';
export const HOME_INFO = 'HOME_INFO';

// 请求文章
// export const fetchArticles = createAction(FETCH_ARTICLES, articles => articles);
// 请求用户
// export const fetchUsers = createAction(FETCH_USERS, users => users);