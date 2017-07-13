/**
 * Created by '苏萧' on 2017/7/13.
 */
import React from 'react'
import NavLink from '../components/NavLink'

export default class App extends React.Component {
  render() {
    return (
      <div className="wraper">
        <div className="main">
          <NavLink/>
          <div className="right-content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}