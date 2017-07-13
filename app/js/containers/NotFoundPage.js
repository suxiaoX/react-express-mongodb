/*
   NotFoundPage 访问出错的重定向页面 容器组件
*/
import React, {Component} from 'react';
import {connect} from 'react-redux';

import NotFoundPageCom from '../components/NotFoundPageCom';

class NotFoundPage extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <NotFoundPageCom />
      );
   }
}

export default connect()(NotFoundPage);
