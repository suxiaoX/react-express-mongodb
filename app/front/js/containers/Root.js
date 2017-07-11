/*
   Root, Router 配置
*/
import React from 'react';
import {Provider} from 'react-redux';
import {browserHistory, Router} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import store from '../store/index';
import routes from '../routes.js';

// 创建一个增强版的history来结合store同步导航事件
const browhistory = syncHistoryWithStore(browserHistory, store);

const Root = () => (
   <Provider store={store}>
      <div>
         <Router history={browhistory} routes={routes}/>
      </div>
   </Provider>
);


export default Root;
