/**
 * Created by suxiao on 2017/7/19.
 */
import React from 'react';
import Partial from '../partial';

export default class BlogLink extends React.Component {
  render() {
    return (
      <div className="">
        <h3>后台管理</h3>
        <nav >
          <ul>
            <li><Partial to="/admin">后台首页</Partial></li>
            <li><Partial to="/admin/users">用户管理</Partial></li>
          </ul>
        </nav>
      </div>
    );
  }
}