/**
 * Created by suxiao on 2017/7/17.
 */
const express = require('express');
const router = express.Router();

const Users = require('../model/users');
//统一返回格式
let responseData;
router.use( (req, res, next) => {
  responseData = {
    status: '01',
    message: ''
  }
  next();
})

//登录
router.post('/', (req, res, next) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    if ( username === '' || password === '' ) {
      responseData = {
        status: '02',
        message: '用户名或密码不能为空'
      }
      res.json(responseData);
      return;
    }
    Users.findOne({username: username, password: password}, (err, user) => {
      if (err) {
        console.log(err)
      } else {
        if (!user) {
          responseData = {
            status: '03',
            message: '用户名或密码错误',
            userInfo: user.username
          }
          res.json(responseData);
          return;
        } else {
          responseData = {
            status: '01',
            message: '登录成功',
            userInfo: user.username
          }
          req.cookies.set('userInfo', JSON.stringify({
            _id: user._id,
            username: user.username
          }))
          res.json(responseData);
          return;
        }
      }
    })
  } catch (error) {
    next(error)
  }
})

module.exports = router;