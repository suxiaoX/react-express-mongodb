/**
 * Created by '苏萧' on 2017/7/13.
 */
import React from 'react';
import '../../../scss/login.scss';
import Partial from '../partial';

export default class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <form action="/api/admin/users" method="post">
          <div className="input-wrapper">
            <label htmlFor="username">姓名：</label>
            <input type="text" id="username" name="username" placeholder="请输入用户名"/>
          </div>
          <div className="input-wrapper" >
            <label htmlFor="password">密码：</label>
            <input type="password" id="password" name="password" placeholder="请输入密码"/>
          </div>
          <div className="input-wrapper">
            <input type="submit" value="登录"/>
          </div>
        </form>
        <Partial to="register">注册</Partial>
      </div>
    );
  }
}