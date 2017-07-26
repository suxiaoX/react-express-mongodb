/**
 * Created by '苏萧' on 2017/7/13.
 */
import React from 'react';
import '../../../scss/login.scss';
// import Partial from '../partial';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

class LoginModel extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    // this.props.form.validateFields();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div >
        <Form onSubmit={this.handleSubmit} className="login-form" style={{width: '300px', margin: '80px auto'}}>
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }]
            })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }]
            })(
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true
            })(
              <Checkbox>记住密码</Checkbox>
            )}
            <a className="login-form-forgot" href="">忘记密码？</a>

            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
            <a href="register">马上注册</a>
          </FormItem>
          {/*
          <Partial to="register">注册</Partial>
          */}
        {/*
         <div className="login">
         <form action="/api/admin/login" method="post">
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
         */}
        </Form>
      </div>
    );
  }
}
const Login = Form.create()(LoginModel);
export default Login