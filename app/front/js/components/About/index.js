/**
 * Created by '苏萧' on 2017/7/13.
 */
import React from 'react'
import { connect } from 'react-redux'

import { receiveUserInfo } from '../../actions/about'
@connect(
  state => ({about: state.about}),
  dispath => ({receiveUserInfo })
)

export default class About extends React.Component {
  render() {
    console.log(this.props.about.info)
    return (
      <div>{this.props.about.info}</div>
    );
  }
}