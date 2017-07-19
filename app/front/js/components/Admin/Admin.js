/**
 * Created by suxiao on 2017/7/19.
 */
import React, { Component } from 'react';
import AdminLink from './AdminLink'

export class Admin extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div>
        <AdminLink />
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}