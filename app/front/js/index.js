/**
 * Created by suxiao on 2017/7/12.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { AppContainer } from "react-hot-loader";
// import { BrowserRouter, Router, HashRouter, Math, Route, Link, hasHistory, IndexLink } from 'react-router-dom';
// import { Link } from 'react-router';
import { Router, Route, hashHistory, browserHistory, Link, IndexLink, IndexRoute } from 'react-router';
import injectTapEventPlugin from "react-tap-event-plugin";

import routes from './router';

import Partial from './components/partial'
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login'
// import ParamName from './components/params/ParamName'

import '../scss/reset.scss'
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