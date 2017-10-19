/**
 * Created by suxiao on 2017/7/19.
 */
import React from 'react';
import { Row, Col } from 'antd';
import Partial from '../partial';

export default class AdminLink extends React.Component {
  render() {
    return (
      <Row className="admin-nav">
        <Col span={2}>
          <h3>后台管理</h3>
        </Col>
        <Col span={22}>
          <nav >
            <ul>
              <li><Partial to="/admin" onlyActiveOnIndex={true}>后台首页</Partial></li>
              <li><Partial to="/admin/users">用户管理</Partial></li>
              <li><Partial to="/admin/article">文章管理</Partial></li>
              <li><Partial to="/admin/edit">编辑文章</Partial></li>
            </ul>
          </nav>
        </Col>
      </Row>
    );
  }
}