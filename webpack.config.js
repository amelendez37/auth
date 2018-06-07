var path = require('path');
const webpack = require('webpack');
const env = require('dotenv');
env.config();
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
        {
          test: /\.jsx?/, 
          include: SRC_DIR,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015'],
            // plugins: ["transform-object-rest-spread"]
          }
        },
        {
          test: /\.css$/,
          use: [{
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }]
        }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};