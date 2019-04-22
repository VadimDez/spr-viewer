/**
 * Created by Vadym Yatsyuk on 21.04.19
 */
var config = {
  entry: [
    './src/main.ts'
  ],
  mode: "production",
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