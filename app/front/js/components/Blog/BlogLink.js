/**
 * Created by '苏萧' on 2017/7/13.
 */
import React from 'react';
import Partial from '../partial';
import '../../../scss/nav.scss';

export default class BlogLink extends React.Component {
  render() {
    return (
      <div className="left-menu fl">
        <h3>文章分类</h3>
        <nav >
          <ul className="nav">
            <li><Partial to="/blog" onlyActiveOnIndex={true}>全部分类</Partial></li>
            <li><Partial to="/blog/node">NodeJS</Partial></li>
            <li><Partial to="/blog/auto">自动化</Partial></li>
            <li><Partial to="/blog/mongo">mongodb</Partial></li>
          </ul>
        </nav>
      </div>
    );
  }
}