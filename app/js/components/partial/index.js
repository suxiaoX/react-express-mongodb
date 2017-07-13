/**
 * Created by '苏萧' on 2017/7/12.
 */
import React, { Component } from 'react';
import { BrowerRouter as Router, Route, Link } from 'react-router-dom';

class Partial extends Component {

  render() {
    const { type, conf } = this.props;
    const ChildComponent = type;
    return(
      <div>
        <Link to={conf}>编辑</Link>
        <ChildComponent conf={conf} />
      </div>
    )
  }
}

export default Partial