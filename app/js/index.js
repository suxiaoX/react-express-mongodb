/**
 * Created by suxiao on 2017/7/12.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { AppContainer } from "react-hot-loader";
// import { BrowserRouter, Router, HashRouter, Math, Route, Link, hasHistory, IndexLink } from 'react-router-dom';
// import { Link } from 'react-router';
import { Router, Route, hashHistory, browserHistory, Link, IndexLink, IndexRoute } from 'react-router'
import injectTapEventPlugin from "react-tap-event-plugin";

import Partial from './components/partial'
import ParamName from './components/params/ParamName'

import '../scss/reset.scss'

// react 的插件，提供onTouchTap()
injectTapEventPlugin();
class Home extends Component {
  render() {
    return (
      <div>首页</div>
    )
  }
}
class About extends Component {
  render() {
    return (
      <div>关于我</div>
    )
  }
}
class Singin extends Component {
  render() {
    return (
      <div>登录</div>
    )
  }
}
class App extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className="wraper">
        <div className="main">
          <div className="left-menu">
            <h1 className="title">苏萧的BLOG</h1>
            <ul className="nav">
              {/*<li><IndexLink to="/" activeStyle={{ color: 'red' }}>BLOG</IndexLink></li>*/}
              <li><Partial to="/" onlyActiveOnIndex={true}>BLOG</Partial></li>
              <li><Partial to="/home">首页</Partial></li>
              <li><Partial to="/about">关于我</Partial></li>
              <li><Partial to="/singin">登录</Partial></li>
              <li><Partial to="/repos/leo/suxiao">苏萧</Partial></li>
            </ul>
          </div>
          <div className="right-content">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
console.log(process.env.NODE_ENV);
render(
  <AppContainer>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/singin" component={Singin} />
        <Route path="/repos/:name/:paramName" component={ParamName}/>
      </Route>
    </Router>
  </AppContainer>,
  document.getElementById('app')
);