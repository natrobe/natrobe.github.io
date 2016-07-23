var webpack = require('webpack');
var path = require('path');
var precss = require('precss');
var cssnext = require('postcss-cssnext');
var autoprefixer = require('autoprefixer');

var SRC_DIR = 'public/src/';
var DIST_DIR = '/public/dist/';

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.resolve(SRC_DIR, 'index.js'),
  ],
  output: {
    path: path.resolve(DIST_DIR),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: [
          'react-hot',
          'babel',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: '!style-loader!css-loader!postcss-loader',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  postcss: function () {
    return [autoprefixer, precss];
  },
};
