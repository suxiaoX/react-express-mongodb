/**
 * Created by suxiao on 2017/7/24.
 */
import React, { Component } from 'react';
import { Form, Input, Button, Select } from 'antd';
const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// const { ColumnGroup } = Table;

import * as actions from '../../actions/articles'
@connect(
  state => ({articles: state.articles}),
  dispatch => bindActionCreators({...actions}, dispatch)
)
class Home extends Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'horizontal'
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.addArticle('/api/admin/article/add', values);
      } else {
        console.log(err);
      }
    });
  }
  render() {
    const { formLayout } = this.state;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = formLayout === 'horizontal' ? {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 }
    } : null;
    const buttonItemLayout = formLayout === 'horizontal' ? {
      wrapperCol: { span: 14, offset: 4 }
    } : null;
    return (
      <div className="admin-home">

        <Form layout={formLayout} onSubmit={this.handleSubmit}>
          <FormItem
            label="文章分类"
            {...formItemLayout}
          >
            {getFieldDecorator('sort', {
              rules: [{ required: true, message: '请选择文章分类' }]
            })(
              <Select
                placeholder="选择文章分类"
              >
                <Option value="node">NodeJS</Option>
                <Option value="js">JavaScript</Option>
                <Option value="html">HTML</Option>
                <Option value="css">CSS</Option>
              </Select>
            )}
          </FormItem>
          <FormItem
            label="标题"
            {...formItemLayout}
          >
            {getFieldDecorator('title', {
              rules: [{ required: true, message: '请输入标题' }]
            })(
              <Input placeholder="博客标题" />
            )}
          </FormItem>
          <FormItem
            label="内容"
            {...formItemLayout}
          >
          {getFieldDecorator('content', {
            rules: [{ required: true, message: '请输入文章内容' }]
          })(
            <TextArea placeholder="编辑文章内容" autosize={{ minRows: 4, maxRows: 8 }} />
          )}
          </FormItem>
          <FormItem {...buttonItemLayout}>
            <Button type="primary" onClick={this.handleSubmit}>提交</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export const AdminHome = Form.create()(Home);