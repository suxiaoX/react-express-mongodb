/**
 * Created by '苏萧' on 2017/7/13.
 */
import React from 'react'
import BlogLink from './BlogLink'
export class Node extends React.Component {
  render() {
    return (
      <div className="clearfix">
        <BlogLink />
        <div className="right-content fl">NodeJS</div>
      </div>
    );
  }
}