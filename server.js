const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.development.config');

const host = 'localhost';

new WebpackDevServer(webpack(config), {
  hot: true,
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: {
    colors: true,
  },
  historyApiFallback: false,
}).listen(config.devServer.port, host, function(err, result) {
  if (err) {
    return console.log(err);
  }
  console.log(`Listening at http://${host}:${config.devServer.port}/`);
});
