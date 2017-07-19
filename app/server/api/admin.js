/**
 * Created by suxiao on 2017/7/19.
 */
const express = require('express');
const router = express.Router();

const Users = require('../model/users');

router.post('/', (req, res, next) => {
  console.log(req.body);
  Users.find({}, (err, users) => {
    if (err) {
      console.log(err)
    } else {
      res.send('users')
      console.log(users);
    }
  })
  // res.json({
  //   status: '0',
  //   message: 'admin'
  // })
})

router.post('/users', (req, res, next) => {
  Users.find({}, (err, users) => {
    if (err) {
      console.log(err)
    } else {
      res.send('users')
      console.log(users);
    }
  })
})

module.exports = router;