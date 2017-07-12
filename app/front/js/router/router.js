/**
 * Created by "苏萧" on 2017/7/12.
 */
/**
 * 前端路由配置
 * */

import React from "react"
import {IndexRoute, Route} from "react-router";

export default (
  <Route name="app" path="/" >
    <IndexRoute />
    <Route path="about"/>
    <Route path="singin"/>
    <Route path="/404"/>
    {/* 如果都不匹配，重定向到 404 */}
    <Redirect from="*" to="/404"/>
  </Route>
)