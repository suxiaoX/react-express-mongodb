/**
 * Created by '苏萧' on 2017/7/13.
 */
const express = require('express');
const open = require('open');
const webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require('webpack-hot-middleware');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('../../webpack.dev.config');


const compiler = webpack(config);
const port = 3333;
const app = express();
const Router = express.Router();
app.use(WebpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: { colors: true }
}));
app.use(WebpackHotMiddleware(compiler));
mongoose.Promise = global.Promise;
mongoose.connect('localhost:27017/leoBlog');
app.use(express.static('static'));
app.use(express.static('dist'));
app.use(bodyParser.urlencoded( {extended: true}));
app.use(bodyParser.json());




Router.get('/',(req, res) => {
  res.send('hello world')
});
app.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    open(`http://localhost:${port}`);
  }
})