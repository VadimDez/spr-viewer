/**
 * Created by Vadym Yatsyuk on 21.04.19
 */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

var config = {
  entry: ["./src/main.ts"],
  mode: "production",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [{ test: /\.tsx?$/, use: "ts-loader" }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

module.exports = config;
