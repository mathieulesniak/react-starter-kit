var path = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    APP_DIR + '/index.js',
  ],
  output: {
    path: BUILD_DIR,
    filename: 'app.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production'),
        'VERSION': JSON.stringify(require('./package.json').version)
      },
    }),
    new ExtractTextPlugin('style.css', {
      allChunks: true
    }),
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx$|\.js$/,
        loader: 'eslint-loader',
        include: APP_DIR
      },
    ],
    loaders: [
      {
        test: /\.js?/,
        include : APP_DIR,
        loaders : ['react-hot', 'babel']
      },
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'url-loader?limit=100000&name=img/img-[hash:6].[ext]'
      },
    ]
  },
}