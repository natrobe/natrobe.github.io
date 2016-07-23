'use strict';

var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
var express = require('express');

/* express app */
var app = express();

app.use('/assets', express.static(path.resolve(__dirname, './public/assets')));
app.use(express.static(path.resolve(__dirname, './public/dist')));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

/* webpack-dev-server */
var server = new WebpackDevServer(webpack(config), {
  hot: true,
  historyApiFallback: true,
  proxy: {
    '*': 'http://localhost:4000',
  },
  stats: { colors: true },
});

/* listen */
app.listen(4000);
server.listen(3000, 'localhost', function () {});

console.log('Server listening on port 4000.');
console.log('App listening on port 3000.');
