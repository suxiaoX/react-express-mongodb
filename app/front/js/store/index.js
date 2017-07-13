/**
 * Created by '苏萧' on 2017/7/13.
 */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./store.prod');
} else {
  module.exports = require('./store.dev');
}