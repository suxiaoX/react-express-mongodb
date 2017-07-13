/**
 * Created by '苏萧' on 2017/7/13.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { AppContainer } from "react-hot-loader";
import { Router, Route, hashHistory, browserHistory, Link, IndexLink, IndexRoute } from 'react-router';
import injectTapEventPlugin from "react-tap-event-plugin";

import routes from './router';


import '../scss/reset.scss'
// import 'antd/lib/date-picker/style/css';
// import { DatePicker } from 'antd';
// react 的插件，提供onTouchTap()
injectTapEventPlugin();

console.log(process.env.NODE_ENV);
render(
  <AppContainer>
    <Router history={browserHistory} routes={routes}>
    </Router>
  </AppContainer>,
  document.getElementById('app')
);