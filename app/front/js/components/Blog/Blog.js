/**
 * Created by '苏萧' on 2017/7/14.
 */
import React from 'react';
import BlogLink from './BlogLink';

export class Blog extends React.Component {
  render() {
    return (
      <div className="clearfix h100">
        <BlogLink />
        <div className="right-content fl">
          {this.props.children}
        </div>
      </div>
    );
  }
}