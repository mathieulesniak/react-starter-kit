var webpack           = require('webpack');
var WebpackDevServer  = require('webpack-dev-server');
var config            = require('./webpack.development.config');

var host = 'localhost';

new WebpackDevServer(webpack(config), {
  hot: true,
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: {
    colors: true
  },
  historyApiFallback: false,
}).listen(config.devServer.port, host, function (err, result) {
  if (err) {
    return console.log(err);
  }
  console.log('Listening at http://' + host + ':' + config.devServer.port  + '/');
});
