/**
 * Created by suxiao on 2017/7/19.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions'
@connect(
  state => ({home: state.users}),
  dispatch => ({...actions})
)

export class Users extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props.receiveUsers)
    console.log(location.pathname)
    this.props.receiveUsers(location.pathname)
  }

  render() {
    return (
      <div>
        用户列表
      </div>
    )
  }
}