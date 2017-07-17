/**
 * Created by suxiao on 2017/7/16.
 */
const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  username: String,
  password: String,
  isAdmin: {
    type: Boolean,
    default: false
  }
})