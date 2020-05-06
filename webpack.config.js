const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src/index"),
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
      test: /\.js$/,
      include: path.join(__dirname, "src"),
      exclude: /node_modules/,
      use: ["babel-loader"]
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }
  ]
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    port: 7000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/index.html")
    })
  ]
};