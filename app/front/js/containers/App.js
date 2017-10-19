/**
 * Created by '苏萧' on 2017/7/13.
 */
import React from 'react'
import { connect } from 'react-redux'
import { receiveUserInfo } from '../actions/about'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Header from '../components/Header'
import 'antd/dist/antd.less';
import '../../scss/app.scss';
import '../../scss/pubilc.scss'

// import { Button } from 'antd';

@connect(
  state => ({about: state.about}),
  dispatch => ({ receiveUserInfo })
)

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    // console.log(this.props.about);
    // console.log(this.props.receiveUserInfo);
    return (
      <div className="wraper">
        <Header />
        <div className="main clearfix">
          {this.props.children}
        </div>
      </div>
    );

  }
}
export default App
// //将state.counter绑定到props的counter
// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter
//   }
// };
// //将action的所有方法绑定到props上
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     increment: (...args) => dispatch(actions.increment(...args)),
//     decrement: (...args) => dispatch(actions.decrement(...args))
//   }
// };
//
// //通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
// export default connect(mapStateToProps, mapDispatchToProps)(App)
