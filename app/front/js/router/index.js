/**
 * Created by '苏萧' on 2017/7/13.
 */
import React from 'react';
import { Router, Route, hashHistory, browserHistory, Link, IndexLink, IndexRoute } from 'react-router';

import About from '../components/About';
import Home from '../components/Home';
import Login from '../components/Login';
import App from '../containers/App';

export default (
    <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/singin" component={Login} />
    {/*<Route path="/repos/:name/:paramName" component={ParamName}/>*/}
  </Route>
)