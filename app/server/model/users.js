/**
 * Created by suxiao on 2017/7/16.
 */
const mongoose = require('mongoose');
const userSchema = require('../schemas/users');
// console.log(userSchema);
module.exports = mongoose.model('Users', userSchema);