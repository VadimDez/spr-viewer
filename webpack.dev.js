/**
 * Created by Vadym Yatsyuk on 22.04.19
 */
const common = require('./webpack.config.js');
module.exports = merge(common, {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:9000',
    'webpack/hot/only-dev-server',
    './src/main.ts'
  ],
  mode: 'development',
});