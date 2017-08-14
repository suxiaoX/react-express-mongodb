/*
 * @Author: leo 
 * @Date: 2017-08-14 16:03:01 
 * @Last Modified by: leo
 * @Last Modified time: 2017-08-14 21:42:11
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
module.exports = new Schema({
  sort: String,
  title: String,
  content: String,
  author: {
    type: String,
    default: ''
  },
  createDate: {
    type: Date, 
    default: Date.now
  },
  updateDate: {
    type: Date,
    default: Date.now
  }
})