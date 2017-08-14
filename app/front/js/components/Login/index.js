/**
 * Created by '苏萧' on 2017/7/13.
 */
import React from 'react';
import '../../../scss/login.scss';
// import Partial from '../partial';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userFetch } from '../../actions/users';
const FormItem = Form.Item;

@connect(
  state => ({userInfo: state.userInfo}),
  dispatch => bindActionCreators({userFetch}, dispatch)
)
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
        this.props.userFetch('/api/login', values, '/home');
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
        </Form>
      </div>
    );
  }
}
const Login = Form.create()(LoginModel);
export default Login