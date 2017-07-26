/**
 * Created by suxiao on 2017/7/18.
 */
import React from 'react';
import '../../../scss/login.scss';
import { Form, Input, Icon, Checkbox, Button } from 'antd';
const FormItem = Form.Item;
class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 14,
          offset: 6
        }
      }
    };
    return (
      <Form onSubmit={this.handleSubmit} style={{width: '400px', margin: '80px auto'}}>
        <FormItem
          {...formItemLayout}
          label="用户名"
          hasFeedback
        >
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请正确输入用户名' }]
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="密码"
          hasFeedback
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: '请设置密码'
            }, {
              validator: this.checkConfirm
            }]
          })(
            <Input type="password" prefix={<Icon type="lock" style={{ fontSize: 13 }} />} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="确认密码"
          hasFeedback
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: '请确认密码'
            }, {
              validator: this.checkPassword
            }]
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} prefix={<Icon type="lock" style={{ fontSize: 13 }} />} />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked'
          })(
            <Checkbox>我已阅读并同意<a href="">&nbsp;条款</a></Checkbox>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" className="login-form-button">注册</Button>
          已有账号?<a href="/sign">&nbsp;去登录</a>
        </FormItem>
      </Form>
    );
  }
}

const Register = Form.create()(RegistrationForm);
export default Register;
/*
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
*/