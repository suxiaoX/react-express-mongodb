/**
 * Created by '苏萧' on 2017/7/13.
 */
import React from 'react';
import Partial from '../partial';
import '../../../scss/nav.scss';

export default class NavLink extends React.Component {
  render() {
    return (
      <div className="left-menu fl">
        <ul className="nav">
          {/*<li><IndexLink to="/" activeStyle={{ color: 'red' }}>BLOG</IndexLink></li>*/}
          <li><Partial to="/" onlyActiveOnIndex={true}>BLOG</Partial></li>
          <li><Partial to="/home">首页</Partial></li>
          <li><Partial to="/about">关于我</Partial></li>
          <li><Partial to="/sign">登录</Partial></li>
          {/*<li><Partial to="/repos/leo/suxiao">苏萧</Partial></li>*/}
        </ul>
      </div>
    );
  }
}