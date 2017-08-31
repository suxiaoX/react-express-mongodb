/**
 * Created by '苏萧' on 2017/7/14.
 */
const express = require('express');
const router = express.Router();
// import { Router } from 'express';

// const router = new Router();

router.use('/login', require('./login'));
router.use('/register', require('./register'));
router.use('/admin', require('./admin'));
router.use('/logout', require('./logout'));

module.exports = router;