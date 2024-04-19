'use strict';
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// Builds bundle usable inside <script>.
module.exports = {
  context: __dirname,
  mode: 'production',
  entry: {
    'app': './app.js'
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name][contenthash].js",
    libraryTarget: "umd",
    library: "app",
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: false,
      template: 'index.html',
      inject: 'head',
      scriptLoading: 'blocking'
    })
  ],
  resolve: {
    fallback: {
      util: require.resolve('util/')
    }
  },
  devServer: {
    contentBase: __dirname,
    compress: true,
    port: 4003,
  },
  optimization: {
    minimize: true
  },
};
