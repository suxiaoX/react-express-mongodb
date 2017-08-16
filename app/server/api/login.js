/**
 * Created by suxiao on 2017/7/17.
 */
const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// const crypto = require('crypto');
// const bcrypt = require('bcrypt');

const Users = require('../model/users');
// 统一返回格式
let responseData;
router.use( (req, res, next) => {
  responseData = {
    status: '01',
    message: ''
  }
  next();
})

passport.use(new LocalStrategy({
  _usernameFiled: 'username',
  _passwordFiled: 'password',
  passReqToCallback: true
}, (req, username, password, done) => {
  Users.findOne({username: username, password: password}, (err, user) => {
    if (err) {
      console.log(err);
      return done(err);
    } else {
      if (!user) {
        responseData = {
          status: '03',
          message: '用户名或密码错误'
        }
        return done(null, false, responseData);
      } else {
        responseData = {
          status: '01',
          message: '登录成功',
          userInfo: user.username
        }
        // const userObj = user.toObject();
        // bcrypt.compare(password, userObj.passport, (err, res) => {

        // })
        return done(null, user);
        // res.json(responseData);
      }
    }
  })
}))

passport.serializeUser((user, done) => {
  done(null, user._id)
})

passport.deserializeUser((_id, done) => {
  done(null, _id)
})

const options = {
  successRedirect: '/home',
  failureRedirect: '/sign'
}

router.post('/', passport.authenticate('local', options), async (req, res, next) => {
  res.json(responseData);
})

// 登录
/*
router.post('/', (req, res, next) => {
  console.log(req.body);
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
*/
module.exports = router;