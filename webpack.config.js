var webpack = require('webpack');
var path = require('path');

const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
  entry: {
    './dist/app': path.resolve(__dirname, 'src/index.js'),
    './dist/spec': path.resolve(__dirname, 'spec/index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './')
  },

  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  },
  externals: {
    'react/addons': true, // important!!
    'react/lib/ReactContext': true,
    'react/lib/ExecutionEnvironment': true
  }
});
