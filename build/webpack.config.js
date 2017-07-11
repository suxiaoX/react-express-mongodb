'use strict';

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const precss = require('precss');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_PATH = path.resolve(__dirname, 'src');
const BUILD_PATH = path.resolve(__dirname, 'dist');

//判断当前运行环境是开发模式还是生产模式
const nodeEnv = process.env.NODE_EVN || 'development';
const isPro = nodeEnv === 'production';

console.log("当前运行环境：", isPro ? 'production' : 'development');

module.exports = {
  entry: {
    app: path.resolve(APP_PATH, 'front/index.js')
  },
  output: {
    filename: 'bundle.js',
    path: BUILD_PATH
  },
  //webpack主目录
  context: __dirname,
  devServer: {
    //静态文件位置
    contentBase: path.join(__dirname, 'static')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader?cacheDirectory',
        options: {
          // 添加 ES6， react 语法支持
          presets: ['es2015', 'react'],
          // 在开发环境才启用 HMR 和 Catch Error
          env: {
            development: {
              presets: ['react-hmre']
            }
          }
        },
        // use: [
        //   {loader: 'babel-loader'}
        // ],
        include: APP_PATH,
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        // 发现以下配置的 options 未作用
        options: {
          extends: 'airbnb',
          rules: {
            indent: ['off'],
            'comma-dangle': 2
          }
        },
        include: APP_PATH
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'use react app' })
  ],
  // devServer: {
  //   port: 8081
  // },
};
// module.exports = config;
/*
let plugins = [
  new ExtractTextPlugin('style.css'),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vender',
    minChunks: function (module) {
      // 该配置假定你引入的 vendor 存在于 node_modules 目录中
      return module.context && module.context.indexOf('node_modules') !== -1;
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'mainfest'
  })
];

let app = [
  'babel-polyfill',
  './src/index'
];

if (isPro) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warning: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(nodeEnv)
      }
    })
  )
} else {
  app.push('webpack-hot-middleware/client?path=http://localhost:3011/__webpack_hmr&reload=true&noInfo=false&quiet=false');
  plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(nodeEnv)
      },
      BASE_URL: JSON.stringify('http://localhost:9009')
    }),
    new webpack.HotModuleReplacementPlugin()
  )
}

module.exports = {
  devtool: false,
  entry: {
    app: app
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    chunkFilename: '[name].js'
  },
  // BASE_URL是全局的api接口访问地址
  plugins,
  // alias是配置全局的路径入口名称，只要涉及到下面配置的文件路径，可以直接用定义的单个字母表示整个路径
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.join(__dirname, './src')
    ]
  },
  modules: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(less|s?css)$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'less-loader', 'postcss-loader']
        })
      },
      //处理图片
      {
        test: /.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 7186,//inline base64 if <= 7K
          name: '/static/images/[name].[ext]'
        }
        // use: ['file-loader?limit=10000&name=[md5:hash:base64:10].[ext]']
      },
      //处理字体
      {
        // 处理字体文件
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 7186, // inline base64 if <= 7K
          name: 'static/fonts/[name].[ext]'
        }
      },
      // {
      //   test: /\.svg(\?v=\d+\.\d+)?$/,
      //   use: ['url-loader?limit=10000&mimetype=image/svg+xml']
      // }
    ]
  }
};
*/