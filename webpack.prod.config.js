/**
 * Created by "苏萧" on 2017/7/11.
 */
const webpackMerge = require("webpack-merge");
const webpack = require("webpack");
const ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");// 抽取 css，生成单独文件
const WebpackChunkHash = require("webpack-chunk-hash");

const baseConfig = require("./webpack/base");
const config = require("./webpack/config");
const defPath = config.defPath;
const APP_PATH = defPath.APP_PATH;

module.exports = webpackMerge(baseConfig(), {
  entry: {
    app: defPath.ENTRY_PATH,
    vendor: config.vendor
  },
  output: {
    path: defPath.BUILD_PATH,
    filename: "js/bundle.js?[chunkhash:10]",
    publicPath: "http://xxx.xxx", //修改发布地址
    chunkFilename: "chunk.js?[chunkhash:10]"
  },
  modules: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
        include: APP_PATH,
        use: ExtractTextPlugin.extract({ // css 单独打包，（2.x 改变很大）
          fallback: "style-loader",
          use: "css-loader!post-loader!sass-loader" + config.sassLoaderProd
        })
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif|mp4|webm)(\?\S*)?$/,
        include: APP_PATH,
        loader: "url-loader?limit=8192&name=imgs/[name].[ext]?[hash:10]"
      }
    ]
  },
  plugins: [
    new webpack.HashedModeleIdPlugin(),
    new WebpackChunkHash(), // 标准webpack chunkhash
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new webpack.optimize.UglifyJsPlugin(config.uglifyJsConfig),
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor", "manifest"],
      filename: "js/[name].js?[chunkhash:10]",
      minChunks: Infinity
    }),
    new ChunkManifestPlugin({
      filename: "chunk-manifest.json",
      manifestVariable: "webpackManifest"
    }),
    //css抽取
    new ExtractTextPlugin({
      filename: "css/styles.css?[contnethash:10]",
      disable: false,
      allChunks: true
    })
  ]
});


