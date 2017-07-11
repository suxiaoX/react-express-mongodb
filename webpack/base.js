/**
 * Created by '苏萧' on 2017/7/11.
 */
/**
 * 定义公共的配置
 * --常用插件--
 * html-webpack-plugin 按照模板生成 HTML，动态添加 js 和 css，（2.x没有变化）
 * webpack-merge 非插件，用于将两个 webpack 配置文件合并为一个，（2.x新增）
 * extract-text-webpack-plugin 抽取 CSS 模块 生成单独文件，（2.x写法有变化）
 * chunk-manifest-webpack-plugin 配合 webpack.optimize.CommonsChunkPlugin,将 manifest 提取到一个单独的json 文件中，解决长效缓存的问题
 * webpack-md5-hash 使生成的 hash 值 是基于文件内容的
 * webpack.optimize.CommonsChunkPlugin 用于提取公共模块，单独打包成一个文件，（2.x写法略有不同）
 * webpack.DefinePlugin 用于定义环境变量，（2.x没有变化）
 * webpack.LoaderOptionsPlugin 代替 1.x 版本中 loader 的扩展配置功能，（2.x新增）
 * webpack.optimize.UglifyJsPlugin js 代码压缩，（2.x更改了默认配置）
 * webpack.HotModuleReplacementPlugin 开启全局的模块热替换(HMR)
 * webpack.NamedModulesPlugin 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息
 * copy-webpack-plugin 文件拷贝
 * */

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');// css3 前缀自动补全
const HtmlWebpackPlugin = require('html-webpack-plugin');// 自动生成 HTML

const config = require('./config');//引入配置
const api = require('./api');
const defPath = config.defPath;
const APP_PATH = defPath.APP_PATH;//源码位置

module.exports = function () {
  return {
    context: defPath.ROOT_PATH, //设置根目录为执行环境
    resolve: { //解析模块请求的选项
      //用于查找的模块目录
      modules: [
        APP_PATH,
        'node_modules'
      ],
      // 使用的扩展名 自动解析确定的扩展，能够使用户在引入时不带扩展
      extensions: ['.js', '.jsx', '.json', '.css']
    },
    cache: true, //启用缓存
    module: {
      rules: [
        {
          enforce: 'pre',//前置执行 'pre'|'post' 表示 loader 的前置和后置
          test: /\.(js|jsx)$/,
          include: APP_PATH,
          loader: 'eslint-loader',
          options: {
            configFile: defPath.ESLINT_PATH //指定eslint的配置文件路径
          }
        },
        {
          test: /\.(js|jsx)$/,
          include: APP_PATH,
          loader: 'babel-loader'
        },
        { // 向应用特定文件中注入变量，应用中可以直接使用 baseUrl
          test: require.resolve(defPath.REQUEST_PATH),
          loader: 'imports-loader?baseUrl=>' + JSON.stringify( api[process.env.NODE_ENV || 'development'] )
        }
      ]
    },
    plugins: [
      // autoprefixer 是 postcss-loader 的 插件，需要在这里进行 autoprefixer 插件的配置
      new webpack.LoaderOptionsPlugin({
        options: {
          context: '/',
          minimize: true,
          postcss: [autoprefixer(config.autoConfig)]
        }
      }),
      // 依照模板生成 html
      new HtmlWebpackPlugin({
        template: defPath.TPL_PATH,
        title: 'LeoBlog',
        filename: 'index.html',
        inject: 'body',
        minify: {
          removeComments: true
        },
        cache: false
      })
    ]
  }
};