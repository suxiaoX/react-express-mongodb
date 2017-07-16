/**
 * Created by '苏萧' on 2017/7/13.
 */
import React from 'react'
import { connect } from 'react-redux'

@connect(
  state => ({home: state.home}),
  dispatch => ({})
)

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.home.title}</h3>
        <p>{this.props.home.description}</p>
      </div>
    );
  }
}