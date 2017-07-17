/**
 * Created by suxiao on 2017/7/16.
 */
const mongoose = require('mongoose');
const userSchema = require('../schemas/users');

module.exports = mongoose.model('User', userSchema);