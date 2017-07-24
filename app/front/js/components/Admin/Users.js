/**
 * Created by suxiao on 2017/7/19.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

require('es6-promise').polyfill();
require('isomorphic-fetch');

import * as actions from '../../actions'
@connect(
  state => ({users: state.users}),
  dispatch => bindActionCreators({...actions}, dispatch)
)

export class Users extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    this.props.receiveUsers('/api/admin/users')
  }

  render() {
    return (
      <div>
        用户列表
      </div>
    )
  }
}