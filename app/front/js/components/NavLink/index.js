/**
 * Created by '苏萧' on 2017/7/13.
 */
import React from 'react';
import Partial from '../partial';
import '../../../scss/nav.scss';

export default class NavLink extends React.Component {
  render() {
    return (
      <nav className="tabs-nav">
        <ul className="clearfix">
          <li className="fl"><Partial to="/home" onlyActiveOnIndex={true}>首页</Partial></li>
          <li className="fl"><Partial to="/blog">我的博客</Partial></li>
          <li className="fl"><Partial to="/about">关于</Partial></li>
          <li className="fl"><Partial to="/guestbook">留言</Partial></li>
          <li className="fl"><Partial to="/sign">登录</Partial></li>
        </ul>
      </nav>
    );
  }
}