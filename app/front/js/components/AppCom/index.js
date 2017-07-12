/*
   App 容器组件的子组件，顶部状态栏
*/
import React, { Component } from 'react';

import '../../../scss/app.scss';

export default class AppCom extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <div id="app-container">
            <header className="app-header">成员列表</header>
            <div className="app-body">
               {this.props.children}
            </div>
         </div>
      );
   }
}
