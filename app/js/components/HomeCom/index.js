/*
   Home 容器组件的子组件，信息展示
*/
import React, { Component } from 'react';

import NewMember from './NewMember';
import MemberList from './MemberList';

import '../../../scss/home.scss';

export default class HomeCom extends Component {
   constructor(props) {
      super(props);
   }
   componentWillMount() {
      this.props.getMemberList();
   }
   render() {
      const {rootState, changeInputInfo, postNewInfo} = this.props;
      const {memberList, inputInfo} = rootState;

      return (
         <div id="home-container">
            <NewMember
               inputInfo={inputInfo}
               changeInputInfo={changeInputInfo}
               postNewInfo={postNewInfo}
            />
            <MemberList memberList={memberList}/>
         </div>
      );
   }
}
