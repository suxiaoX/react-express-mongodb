/**
 * Created by '苏萧' on 2017/7/13.
 */
import React from 'react'
import NavLink from '../components/NavLink'
import Header from '../components/Header'
import '../../scss/app.scss';
import '../../scss/pubilc.scss'

export default class App extends React.Component {
  render() {
    return (
      <div className="wraper">
        <Header />
        <div className="main clearfix">
          <NavLink />
          <div className="right-content fl">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}