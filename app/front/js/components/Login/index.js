/**
 * Created by '苏萧' on 2017/7/13.
 */
import React from 'react'

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="username">姓名</label>
            <input type="text" id="username" name="username" placeholder="请输入用户名"/>
          </div>
          <div>
            <label htmlFor="password">姓名</label>
            <input type="password" id="password" name="password" placeholder="请输入密码"/>
          </div>
        </form>
      </div>
    );
  }
}