/**
 * Created by '苏萧' on 2017/7/11.
 */
/**
 * 此文件主要定义一些配置常量
 * */
// 引入 node.js path 模块
const path = require('path');
// sass-loader 的 配置
exports.sassLoaderSuffix = '?outputStyle=expanded&sourceMap=true&sourceMapContents=true&includePaths[]=./node_modules';
exports.sassLoaderProd = '?outputStyle=expanded';
// 公共文件
exports.vendor = [
  'react',
  'react-dom',
  'react-redux',
  'react-router',
  'react-router-redux',
  'react-tap-event-plugin',
  'redux',
  'redux-thunk',
  'isomorphic-fetch',
  'es6-promise',
  'pure-render-decorator',
  'react-addons-css-transition-group'
];
// css 代码自动补全配置
exports.autoConfig = {
  browsers: [
    'ie >= 9',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ],
  cascade: true,
  remove: true
};

// js 压缩 配置
exports.uglifyJsConfig = {
  beautify: false,    // 不美化输出
  compress: {
    warnings: false, // 不保留警告
    drop_debugger: true, // 不保留调试语句
    drop_console: true // 不保留控制台输出信息
  },
  mangle: {           // 跳过这些，不改变命名
    except: ['$super', '$', 'exports', 'require']
  },
  space_colon: false,
  comments: false     // 不保留注释
};

// 定义 文件路径 注：文件在 根目录下的 webpack 文件夹下
const ROOT_PATH = path.resolve(__dirname, '../');

exports.defPath = {
  ROOT_PATH: ROOT_PATH,
  APP_PATH: path.resolve(ROOT_PATH, 'app'),
  DEV_PATH: path.resolve(ROOT_PATH, 'dev'),
  BUILD_PATH: path.resolve(ROOT_PATH, 'dist'),
  TPL_PATH: path.resolve(ROOT_PATH, 'static/tpl.html'),
  ENTRY_PATH: path.resolve(ROOT_PATH, 'app/front/js/index.js'),
  ESLINT_PATH: path.resolve(ROOT_PATH, './.eslintrc'),
  REQUEST_PATH: path.resolve(ROOT_PATH, 'app/front/js/utils/request')
}