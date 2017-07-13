/**
 * Created by '苏萧' on 2017/7/13.
 */
import React from 'react'
import BlogLink from './BlogLink'
export class All extends React.Component {
  render() {
    return (
      <div className="clearfix h100">
        <BlogLink />
        <div className="right-content fl">All</div>
      </div>
    );
  }
}