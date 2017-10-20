/**
 * Created by '苏萧' on 2017/7/13.
 */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin';

import GetStorage from '../../components/GetStorage';

@connect(
  state => ({home: state.home}),
  dispatch => ({})
)

class HomeComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  static defaultProps = {
    home: {},
    data: ''
  }

  static propTypes = {
    home: PropTypes.object,
    data: PropTypes.string
  }
  render() {
    return (
      <div>
        <h3>{this.props.home.title}</h3>
        <p onClick={this.props.testClick}>{this.props.home.description}</p>
        <p>{this.props.data}</p>
        <a href="admin">编辑后台</a>
      </div>
    );
  }
}

const Home = GetStorage('name')(HomeComponent);

export default Home;
