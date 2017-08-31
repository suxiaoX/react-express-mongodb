/**
 * Created by suxiao on 2017/7/17.
 */
const express = require('express');
const router = express.Router();
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const crypto = require('crypto');
// const bcrypt = require('bcrypt');
// passport 不适合做单页面的验证，多页面适合用passport。
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
/*
passport.use(new LocalStrategy({
  _usernameFiled: 'username',
  _passwordFiled: 'password',
  passReqToCallback: true
}, (req, username, password, done) => {
  Users.findOne({username: username, password: password}, (err, user) => {
    console.log(user);
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
        console.log(responseData);
        // const userObj = user.toObject();
        // bcrypt.compare(password, userObj.passport, (err, res) => {

        // })
        console.log(done);
        return done(null, user);
        // res.json(responseData);
      }
    }
  })
}))

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  done(user, user)
})

const options = {
  successRedirect: '/home',
  successFlash: true,
  failureRedirect: '/sign',
  failureFlash: true
}

router.post('/', passport.authenticate('local', options), (req, res, next) => {
  console.log(1111);
  res.json(responseData);
})
*/
// 登录

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
          return res.json(responseData);
        } 
        responseData = {
          status: '01',
          message: '登录成功',
          userInfo: user.username
        }
        req.session.user = {
          id: user._id,
          username: user.username
        };
        console.log(req.session);
        res.cookie('userInfo', {responseData}, {
          path: '/',
          maxAge: 1000 * 60 * 60 * 24 * 30,
          httpOnly: true
        });
        return res.json(responseData);
        // req.session.regenerate( (err) => {
        //   if (err) {
        //     console.log(err)
        //     responseData = {
        //       status: '05',
        //       message: '登录失败'
        //     }
        //     return res.json({responseData})
        //   }
        //   responseData = {
        //     status: '01',
        //     message: '登录成功',
        //     userInfo: user.username
        //   }
        //   req.cookies.set('userInfo', JSON.stringify({
        //     id: user._id,
        //     username: user.username
        //   }))
        //   req.session.user = {
        //     username: user.username,
        //     id: user._id
        //   };
        //   console.log(req.session.user);
        //   return res.json(responseData);
        
        // });
        // res.json(responseData);
        }
    })
  } catch (error) {
    next(error)
  }
})

module.exports = router;