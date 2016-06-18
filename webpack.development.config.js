var path = require('path');
var webpack = require('webpack');


var HMR_PORT = process.env.HMR_PORT || 7081

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

var productionMode = (process.argv.indexOf('-p') != -1);
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    'webpack-dev-server/client?https://0.0.0.0:' + HMR_PORT, // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    APP_DIR + "/index.js",
  ],
  output: {
    path: BUILD_DIR,
    filename: "app.js",
    publicPath: "http://localhost:" + HMR_PORT +"/",
  },
  "scripts": {
    "start": "node server.js"
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('development'),
        'VERSION': JSON.stringify(require("./package.json").version)
      },
    }),
    new ExtractTextPlugin('stylesheet.css', {
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
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
        include: APP_DIR,
        loaders: ['react-hot', 'babel?compact=false']
      },
      {
        test: /\.(scss|css)$/,
        loader: 'style!css!sass?sourceMap'
      },
      {
        test: /\.(eot|ttf|wav|mp3)$/,
        loader: 'url-loader',
        query: {
          name: '[hash].[ext]',
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 150000,
          'name': 'img/img-[hash:6].[ext]'
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    port: HMR_PORT,
    inline: true,
  },
}