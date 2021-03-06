var webpack = require("webpack");
var provider = new webpack.ProvidePlugin({
  React: "react",
  ReactDOM: "react-dom"
});

module.exports = {
  context: __dirname + "/app",
  entry: "./entry",
  output: {
    path: __dirname + "/public/assets",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel",
        query: {
          presets: ["react", "es2015"]
        }
      }
    ]
  },
  plugins: [
    provider
  ]
};
