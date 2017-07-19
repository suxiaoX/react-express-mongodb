/**
 * Created by suxiao on 2017/7/18.
 */
const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose')

let Users = require('../model/users');

//统一返回格式

let responseData;
router.use( (req, res, next) => {
  responseData = {
    status: '01',
    message: ''
  }
  next();
})

router.post('/', (req, res, next) => {

  try {
    const username = req.body.username;
    const password = req.body.password;
    const repassword = req.body.repassword;
    if (username === '') {
      responseData = {
        status: '02',
        message: '用户名不能为空'
      }
      res.json(responseData);
      return;
    };
    //密码不能为空
    if (password === '') {
      responseData.status = '03';
      responseData.message = '请设置密码';
      res.json(responseData);
      return;
    }
    //两次输入的密码必须一致
    if (password !== repassword) {
      responseData.status = '04';
      responseData.message = '两次输入的密码不一致';
      res.json(responseData);
      return;
    }
    const newUser = new Users({
      username: username,
      password: password
    });
    Users.findOne({username: username}, (err, user) => {
      console.log(req.body);
      if (err) {
        console.log(err)
      } else {
        if (user) {
          responseData.status = '05';
          responseData.message = '用户名已经被注册了';
          res.json(responseData);
        } else {
          responseData = {
            status: '01',
            message: '注册成功'
          }
          res.json(responseData);
          newUser.save();
        }
      }
    })
  } catch (err) {
    next(err)
  }

})

module.exports = router;