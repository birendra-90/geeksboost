/**
 * Webpack configuration for development environment
 */
var webpack = require("webpack");
module.exports = {
  devtool: "#eval-source-map",
  debug: true,
  entry: [
    "webpack-dev-server/client?http://localhost:3001",
    "webpack/hot/only-dev-server",
    "./client/app.js",
  ],
  output: {
    path: __dirname + "/public/assets/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  node: {
    dns: "empty",
    net: "empty"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ["babel"],
      exclude: /node_modules/
    }]
  }
};
