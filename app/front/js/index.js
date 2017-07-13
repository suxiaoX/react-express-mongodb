/**
 * Created by '苏萧' on 2017/7/13.
 */
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from "react-hot-loader";
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, browserHistory, Link, IndexLink, IndexRoute } from 'react-router';
import injectTapEventPlugin from "react-tap-event-plugin";

import routes from './router';
import configureStore from './store'

import '../scss/reset.scss'
// import 'antd/lib/date-picker/style/css';
// import { DatePicker } from 'antd';
// react 的插件，提供onTouchTap()
injectTapEventPlugin();
// 创建一个增强版的history来结合store同步导航事件
// const store = configureStore(browserHistory);
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

// history.listen(location => analyticsService.track(location.pathname))

console.log(process.env.NODE_ENV);
render(
  <AppContainer>
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);