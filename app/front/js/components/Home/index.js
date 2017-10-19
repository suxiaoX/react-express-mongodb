/**
 * Created by '苏萧' on 2017/7/13.
 */
import React from 'react'
import { connect } from 'react-redux'

import GetStorage from '../GetStorage/GetStorage';

@connect(
  state => ({home: state.home}),
  dispatch => ({})
)

class HomeComponent extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.home.title}</h3>
        <p>{this.props.home.description}</p>
        <p>{this.props.data}</p>
        <a href="admin">编辑后台</a>
      </div>
    );
  }
}

const Home = GetStorage('name')(HomeComponent);

export default Home;
