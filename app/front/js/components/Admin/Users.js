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
    /*
    fetch('/api/admin/users',{
      method: 'GET'
      headers: {
        'Content-Type': 'application/json',
        'Accpet': 'application/json'
      }
    }).then( (res) => {
      console.log(res)
       return res.json()
    }).then( (data) => {
      console.log(data)
    }).catch(e => {
      console.log(e)
    })
    */
  }

  render() {
    return (
      <div>
        用户列表
      </div>
    )
  }
}