/**
 * Created by suxiao on 2017/7/16.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
module.exports = new Schema({
  username: String,
  password: String,
  isAdmin: {
    type: Boolean,
    default: false
  }
})