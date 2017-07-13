/**
 * Created by '苏萧' on 2017/7/13.
 */
const express = require('express');
const open = require('open');
const webpack = require('webpack');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const port = 3333;
const app = express();

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    open(`http://localhost:${port}`);
  }
})