/**
 * Created by '苏萧' on 2017/7/13.
 */
import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as reduceForm} from 'redux-form';

import aboutState from './about';
import homeState from './home';
import usersState from './users';
import userInfo from './userInfo';
import articlesState from './articles';

const rootReducer = combineReducers({
  about: aboutState,
  home: homeState,
  users: usersState,
  userInfo: userInfo,
  articles: articlesState,
  form: reduceForm,
  // 挂载redux-form 如果不挂载会报一堆的错误
  routing: routerReducer
});

export default rootReducer;