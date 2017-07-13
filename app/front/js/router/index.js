/**
 * Created by '苏萧' on 2017/7/13.
 */
import React from 'react';
import { Router, Route, hashHistory, browserHistory, Link, IndexLink, IndexRoute, Redirect } from 'react-router';

import About from '../components/About';
import Home from '../components/Home';
import Login from '../components/Login';
import Blog from '../components/Blog';
import App from '../containers/App';
import NotFound from '../components/NotFound'
import { All, Auto, Mongo, Node } from '../components/Blog';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="home" component={Home}/>
        <Route path="blog">
            <IndexRoute component={All} />
            <Route path="node" component={Node} />
            <Route path="auto" component={Auto} />
            <Route path="mongo" component={Mongo} />
        </Route>
        <Route path="about" component={About}/>
        <Route path="guestbook" component={NotFound} />
        <Route path="sign" component={Login} />
        <Route path="404" component={NotFound} />
        <Redirect from="*" to="/404"/>
        {/*<Route path="/repos/:name/:paramName" component={ParamName}/>*/}
    </Route>
)