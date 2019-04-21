/**
 * Created by Vadym Yatsyuk on 21.04.19
 */
var config = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:9000',
    'webpack/hot/only-dev-server',
    './src/main.ts'
  ],
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [],
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};


module.exports = config;