/**
 * Created by suxiao on 2017/7/12.
 */
import React from 'react'
import { Link } from 'react-router'
import { Icon } from 'antd'

export default class Partial extends React.Component {
  render() {
    return (
      <div>
        <Icon type={this.props.type} />
        <Link {...this.props} activeClassName="active" />
      </div>
    );
  }
}