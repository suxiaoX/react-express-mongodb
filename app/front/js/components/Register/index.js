/**
 * Created by suxiao on 2017/7/18.
 */
import React from 'react';
import '../../../scss/login.scss';

export default class Register extends React.Component {
  render() {
    return (
      <div className="login">
        <form action="/api/register" method="post">
          <div className="input-wrapper">
            <label htmlFor="username">姓名：</label>
            <input type="text" id="username" name="username" placeholder="请输入用户名"/>
          </div>
          <div className="input-wrapper" >
            <label htmlFor="password">密码：</label>
            <input type="password" id="password" name="password" placeholder="请输入密码"/>
          </div>
          <div className="input-wrapper" >
            <label htmlFor="repassword">密码：</label>
            <input type="password" id="repassword" name="repassword" placeholder="请再次输入密码"/>
          </div>
          <div className="input-wrapper">
            <input type="submit" value="注册"/>
          </div>
        </form>
      </div>
    );
  }
}