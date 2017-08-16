/*
 * @Author: leo 
 * @Date: 2017-08-14 11:38:37 
 * @Last Modified by: leo
 * @Last Modified time: 2017-08-16 14:35:18
 */

import React, { Component, PropTypes } from 'react';
import { Table, Modal } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const confirm = Modal.confirm;
// const { ColumnGroup } = Table;

import * as actions from '../../actions/articles'

const success = () => {
    const modal = Modal.success({
        title: '提示',
        content: '删除文章成功'
    });
    setTimeout( () => {
        modal.destroy();
        browserHistory.push('/admin/article');
    },1500);
}
@connect(
  state => ({articles: state.articles}),
  dispatch => bindActionCreators({...actions}, dispatch)
)

export class Article extends Component {
  constructor (props) {
    super(props);
    this.showConfirm = this.showConfirm.bind(this);
  }

  static propTypes = {
    getArticles: PropTypes.func,
    articles: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.getArticles('/api/admin/article');
  }

  showConfirm() {
    confirm({
        title: '确认删除此文章?',
        content: '删除后无法复原',
        onOk() {
            console.log('OK');
            success();
        },
        onCancel() {
            console.log('cancle');
        }
    })
  }

  render() {
    const { isFetching, articles } = this.props.articles;
    const columns = [
      { title: '文章ID', dataIndex: '_id', key: '_id' },
      { title: '文章分类', dataIndex: 'sort', key: 'sort' },
      { title: '文章名称', dataIndex: 'title', key: 'title' },
      { title: '文章内容', dataIndex: 'content', key: 'content' },
      { title: '作者', dataIndex: 'author', key: 'author' },
      { title: '创建时间', dataIndex: 'createDate', key: 'createDate' },
      { title: '修改时间', dataIndex: 'updateDate', key: 'updateDate' },
      
      { title: '操作',
        dataIndex: '',
        key: 'x',
        render: () =>
          <span>
            <a href="#">编辑</a>
            <span className="ant-divider" />
            <a onClick={this.showConfirm}>删除</a>
          </span>
      }
    ];
    return (
      <div>
        
        {
          !isFetching ? <Table columns={columns} dataSource={articles} rowKey={users => users._id} style={{textAlign: 'center'}} bordered /> : null
        }
      </div>
    )
  }
}