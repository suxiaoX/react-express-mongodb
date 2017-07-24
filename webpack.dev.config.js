/**
 * Created by "苏萧" on 2017/7/11.
 */

const webpackMerge = require("webpack-merge");
const webpack = require("webpack");
const ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin"); // 拷贝文件插件
const ip = require("ip").address();

const baseConfig = require("./webpack/base");
const config = require("./webpack/config");
const defPath = config.defPath;
const APP_PATH = defPath.APP_PATH;

// 使用 `webpack-merge` 将基础配置和新配置合并
module.exports = webpackMerge(baseConfig(), {
  devtool: "cheap-module-source-map",// 增强浏览器调试
  entry: {
    app: [// 热加载配置
      "react-hot-loader/patch",
      "webpack-dev-server/client?http://" + ip + ":8099/",
      "webpack/hot/only-dev-server",
      "./app/front/js/index.js"
    ],
    verdor: config.vendor // 公共文件单独打包
  },
  output: {
    path: defPath.DEV_PATH,// 所有输出文件的目标路径
    filename: "js/[name].js",
    publicPath: "/",  // 必须写，且与 devServer 的 publicPath 保持一致
    chunkFilename: "[name].chunk.js" // 分块文件命名
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
        include: APP_PATH, //  必须匹配选项
        use: [ // 2.x 版本改为 use 代替 loaders，必须加 -loader
          "style-loader", "css-loader", "postcss-loader", "sass-loader" + config.sassLoaderSuffix
        ]
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif|mp4|webm)(\?\S*)?$/,
        include: APP_PATH,
        loader: "url-loader?limit=8192&name=imgs/[name].[ext]"
      }
    ]
  },
  plugins: [
    // 热模块替换相关插件
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    // 定义环境变量
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    }),

    /*
     公用模块单独打包，对应 入口文件 vendor,
     持久化缓存配置
     */

    new webpack.optimize.CommonsChunkPlugin({
      names: [// 提取公共模块名称
        "vendor", "manifest" // manifest 用于分离 webpack runtime
      ],
      filename: "js/[name].js", // 公共模块文件名
      minChunks: Infinity // Infinity 表示仅仅创建公共组件块，不会把任何modules打包进去。
    }),
    new ChunkManifestPlugin({ // 将 manifest 提取到一个单独的 JSON 文件中
      filename: "chunk-manifest.json",
      manifestVariable: "webpackManifest" // 全局变量的名称，webpack 将利用它查找 manifest JSON 对象
    })
  ],

  devServer: { // 开启服务器
    contentBase: defPath.DEV_PATH,// 开启服务的路径
    publicPath: "/",
    historyApiFallback: true,// 设置可以从任意URL 访问
    clientLogLevel: "none",
    host: ip,
    // host: 'localhost',
    port: 8099,
    open: true,// 服务开启的时候打开页面
    hot: true,// 开启热替换
    inline: true,// 开启热加载
    compress: true,
    stats: {
      colors: true,
      errors: true,
      warnings: true,
      modules: false,
      chunks: false
    },
    //解决跨域
    proxy: {
      "/api/*": {
        target: `http://${ip}:3333`,
        secure: false, //接受运行在 https 上的服务
        changeOrigin: true
      }
    }

    //使用的url 必须以 / 开始 否则不会代理到指定地址
    /**
     * --实例使用方法--
     *  fetch("/device/space").then(res => {
        // 被代理到 http://debug.xxx.com/device/space
        return res.json();
    }).then(res => {
        console.log(res);
    })

     fetch("device/space").then(res => {
        // http://localhost:8080/device/space 访问本地服务
        return res.json();
    }).then(res => {
        console.log(res);
    })
    * */
  }

});
