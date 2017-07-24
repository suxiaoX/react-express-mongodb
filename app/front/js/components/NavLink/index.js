/**
 * Created by '苏萧' on 2017/7/13.
 */
import React from 'react';
// import { Icon } from 'antd';
import Partial from '../partial';
import '../../../scss/nav.scss';

export default class NavLink extends React.Component {
  render() {
    return (
      <nav className="tabs-nav">
        <ul className="clearfix">
          <li className="fl"><Partial to="/home" type="home" onlyActiveOnIndex={true}>首页</Partial></li>
          <li className="fl"><Partial to="/blog" type="laptop">我的博客</Partial></li>
          <li className="fl"><Partial to="/about" type="bulb">关于</Partial></li>
          <li className="fl"><Partial to="/guestbook" type="tag-o">留言</Partial></li>
          <li className="fl"><Partial to="/sign" type="user">登录</Partial></li>
        </ul>
      </nav>
    );
  }
}