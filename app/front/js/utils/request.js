/*
 * @Author: leo 
 * @Date: 2017-08-13 14:07:50 
 * @Last Modified by: leo
 * @Last Modified time: 2017-08-15 10:52:20
 */
/*
	封装请求
*/
// import fetch from 'isomorphic-fetch';
// import 'babel-polyfill';
require('es6-promise').polyfill();
require('isomorphic-fetch');

// baseUrl 由 webpack 根据 环境变量 更换
// export const host = baseUrl; // 当前服务器地址
const host = ''; // 当前服务器地址
console.log(baseUrl);

// 封装fetch 代替 ajax 请求数据
const request = (method, url, body) => {
	method = method.toUpperCase();
	if (method === 'GET') {
		body = undefined;
	} else {
		body = body && JSON.stringify(body);
	}

	return fetch(host + url, {
		method,
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		body
	}).then((res) => {
		return res.json();
	}).then(data => {
		// console.log(data)
		return data
	});
}

export const get = url => request('GET', url);
export const post = (url, body) => request('POST', url, body);
export const put = (url, body) => request('PUT', url, body);
export const del = (url, body) => request('DELETE', url, body);
