/**
 * Created by suxiao on 2017/7/12.
 */
import React from 'react'
import { Link } from 'react-router'

export default class Partial extends React.Component {
  render() {
    return (
      <Link {...this.props} activeClassName="active" />
    );
  }
}