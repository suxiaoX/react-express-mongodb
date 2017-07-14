/**
 * Created by '苏萧' on 2017/7/13.
 */
if (process.env.NODE_ENV === 'production') {
  console.log(222222222222);
  module.exports = require('./store.prod');
} else {
  console.log('111111');
  module.exports = require('./store.dev');
}