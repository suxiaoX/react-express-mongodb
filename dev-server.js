/*
 * @Author: leo 
 * @Date: 2017-10-20 17:24:33 
 * @Last Modified by: leo
 * @Last Modified time: 2017-10-20 18:01:35
 */
const express = require('express');
const open = require('open');
const path = require('path')
const webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require('webpack-hot-middleware');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo/es5')(session);
// const passport = require('passport');

const config = require('./webpack.dev.config');
const api = require('./app/server/api');
// const Users = require('./model/users');

const compiler = webpack(config);
const port = 3333;
const app = express();
// 结合webpack
// 将这个添加到webpack配置文件的入口里面 ?reload=true 设置浏览器是否自动刷新；
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=10000&reload=true';
const entries = Object.keys(config.entry);
//  添加热加载信息
entries.forEach((key) => {
  config.entry[key].push(hotMiddlewareScript);
})
//  添加插件信息
if(config.plugins === undefined) {
  config.plugins = []
}

//  添加热加载插件
config.plugins.push(
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
)
app.use(WebpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  quiet: true,
  stats: { colors: true }
}));
app.use(WebpackHotMiddleware(compiler, {
  log: () => {}
}));

// 文件位置
app.use(express.static('static'));
app.use(express.static('dist'));
app.use(bodyParser.json());

// 登录验证
app.use(cookieParser()); // 使用cookie-parser插件，后续代码直接使用req.cookies
app.use(session({
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  }),
  secret: 'leo-blog',
  resave: true,
  saveUninitialized: true,
  cookie: { 
    path: '/'
  }
}));

 // 设置跨域访问 
app.use(cors());

app.use('/api', api);
// 解决子路由刷新无法访问的问题
app.get('/*', (req, res, next) => {
//   console.log(req.session);
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
});
// 连接mongodb
mongoose.Promise = global.Promise;
// 使用connect 不要使用createConnection
mongoose.connect('mongodb://localhost:27017/leoBlog', {useMongoClient: true}, (err) => {
   if (err) {
     console.log(err)
   } else {
     console.log('==> 数据连接成功');
     app.listen(port, (err) => {
       if (err) {
         console.log(err)
       } else {
         console.log(`正在打开==>http://localhost:${port}...`);
         open(`http://localhost:${port}`);
       }
     })
   }
});


