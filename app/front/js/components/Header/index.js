/**
 * Created by '苏萧' on 2017/7/13.
 */
import React from 'react'
import { Row, Col } from 'antd';
import NavLink from '../NavLink'
import '../../../scss/header.scss'

export default class Header extends React.Component {
  render() {
    return (
        <Row gutter={24} type="flex" justify="space-around" className="header">
          <Col span={8}>
            <h1 className="title">小黑哥的BLOG</h1>
          </Col>
          <Col span={10}>
            <NavLink />
          </Col>
        </Row>
    );
  }
}