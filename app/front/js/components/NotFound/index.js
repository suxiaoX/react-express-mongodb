/**
 * Created by '苏萧' on 2017/7/13.
 */
import React from 'react'
import {browserHistory} from 'react-router';

export default class NotFound extends React.Component {
  handleClick = () => {
    browserHistory.push('/home');
  }
  render() {
    return (
      <div id="not-found-page">
        <div className="not-found-content">
          <p>页面没有找到...</p>
        </div>
        <div className="not-found-btn">
          <button onTouchTap={this.handleClick}>
            返回首页
          </button>
        </div>
      </div>
    )
  }
}