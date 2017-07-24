/**
 * Created by "苏萧" on 2017/7/11.
 */
/**
 * 定义不同环境变量下的 应用请求配置---服务器 API 配置文件
 * */

const ip = require("ip").address();

module.exports = {
  test: "http://www.baidu.com",// 测试环境的服务器地址
  development: `http://${ip}:3333`,// 开发环境的本地服务器地址
  production: "http://www.google.com"// 生产环境的服务器地址
};