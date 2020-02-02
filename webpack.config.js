const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/entry.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 'libs/index.min.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['src', 'node_modules'],
  },
  externals: {
    'avg-core': 'AVG',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      comments: false,
    }),
    new CopyWebpackPlugin([
      { from: 'node_modules/pixi.js/dist/pixi.min.js', to: 'libs/pixi.min.js' },
      { from: 'node_modules/avg-core/dist/avg.min.js', to: 'libs/avg.min.js' },
      { from: 'index.html', to: 'index.html' },
      { from: 'manifest.json', to: 'manifest.json' },
      { from: 'copyright.txt', to: 'copyright.txt' },
      { from: 'apple-touch-icon.png', to: 'apple-touch-icon.png' },
      { from: 'android-chrome-256x256.png', to: 'android-chrome-256x256.png' },
      { from: 'android-chrome-192x192.png', to: 'android-chrome-192x192.png' },
      { from: 'favicon-32x32.png', to: 'favicon-32x32.png' },
      { from: 'favicon-16x16.png', to: 'favicon-16x16.png' },
      { from: 'favicon.ico', to: 'favicon.ico' },
      { from: 'assets', to: 'assets' },
    ])
  ]
};
