/*
 * @Author: leo 
 * @Date: 2017-08-14 16:02:13 
 * @Last Modified by: leo
 * @Last Modified time: 2017-08-14 18:42:11
 */
const mongoose = require('mongoose');
const articleSchema = require('../schemas/articles');
module.exports = mongoose.model('Articles', articleSchema);