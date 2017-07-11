/*
   NotFoundPage 容器组件的子组件，教室详情
*/
import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import pureRender from 'pure-render-decorator';

import '../../../scss/notFoundPage.scss';

class NotFoundPageCom extends Component {
   constructor(props) {
      super(props);
   }
   handleClick = () => {
      browserHistory.push('/home');
   }
   render() {
      return (
         <div id="not-found-page">
            <div className="not-found-content">
               <p>页面没有找到...</p>
            </div>
            <div className="not-found-btn">
               <button onTouchTap={this.handleClick}>
                  返回首页
               </button>
            </div>
         </div>
      )
   }
}

export default pureRender(NotFoundPageCom);
