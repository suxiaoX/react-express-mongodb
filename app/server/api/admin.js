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
  next();
})

router.get('/users', (req, res, next) => {
  try {
    Users.find({}, (err, users) => {
      if (err) {
        console.log(err)
      } else {
        res.json(users);
        // res.send('users')
        console.log('-------users----------');
        console.log(users);
      }
      //res.end();
      // next();
    })
  } catch (err) {
    console.log('-------users2222----------');
    next(err)
  }



})

module.exports = router;