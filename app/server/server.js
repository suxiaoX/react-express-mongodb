/**
 * Created by '苏萧' on 2017/7/13.
 */
const express = require('express');
const open = require('open');
const path = require('path')
const webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require('webpack-hot-middleware');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('../../webpack.dev.config');
const api = require('./api');

const compiler = webpack(config);
const port = 3333;
const app = express();
// const Router = express.Router();
//结合webpack
app.use(WebpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  quiet: true,
  stats: { colors: true }
}));
app.use(WebpackHotMiddleware(compiler, {
  log: () => {}
}));
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' });
    cb()
  })
});
//文件位置
app.use(express.static('static'));
app.use(express.static('dist'));
app.use(bodyParser.urlencoded( {extended: true}));
app.use(bodyParser.json());

app.use('/api', api);
// Router.route('/',(req, res) => {
//   res.send('hello world')
// });
//解决子路由刷新无法访问的问题
app.get('/*', (req, res, next) => {
  const filename = path.join(config.output.path, 'index.html')
  console.log(filename);
  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) {
      return next(err)
    }
    res.set('content-type', 'text/html');
    res.send(result);
    res.end();
  })
  // res.sendFile(path.resolve(__dirname + '/../../' + filename));
});
//连接mongodb
mongoose.Promise = global.Promise;
//使用connect 不要使用createConnection
mongoose.connect('mongodb://localhost:27017/leoBlog', (err) => {
   if (err) {
     console.log(errr)
   } else {
     console.log('数据连接成功');
     app.listen(port, (err) => {
       if (err) {
         console.log(err)
       } else {
         console.log(`正在打开http://localhost:${port}...`);
         open(`http://localhost:${port}`);
       }
     })
   }
});


