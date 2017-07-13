/*
   app/js/routes.js
   路由配置文件
*/

import React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';
// 引入容器组件
import {
	App,
	Home,
	NotFoundPage
} from './containers';
import {enterHomePage} from './utils/enterOrLeaveRoute';

export default(
	<Route path="/" component={App}>
		<IndexRoute component={Home}/>
		<Route path="home" component={Home} onEnter={enterHomePage}/>
		<Route path="/404" component={NotFoundPage}/>
	 	{/* 如果都不匹配，重定向到 404 */}
		<Redirect from="*" to="/404"/>
	</Route>
);
