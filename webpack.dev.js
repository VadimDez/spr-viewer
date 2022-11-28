/**
 * Created by Vadym Yatsyuk on 22.04.19
 */
const common = require("./webpack.config.js");
module.exports = merge(common, {
  entry: "./src/main.ts",
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: "only",
    open: true,
    client: {
      logging: "info",
      overlay: true,
      progress: true,
    },
  },
});
