/*
 * @Author: leo 
 * @Date: 2017-08-14 11:38:37 
 * @Last Modified by: leo
 * @Last Modified time: 2017-08-15 11:19:25
 */

import React, { Component, PropTypes } from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// const { ColumnGroup } = Table;

import * as actions from '../../actions/articles'
@connect(
  state => ({articles: state.articles}),
  dispatch => bindActionCreators({...actions}, dispatch)
)

export class Article extends Component {
  constructor (props) {
    super(props)
  }

  static propTypes = {
    getArticles: PropTypes.func,
    articles: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.getArticles('/api/admin/article');
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
            <a href="#">查看</a>
            <span className="ant-divider" />
            <a href="#">删除</a>
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