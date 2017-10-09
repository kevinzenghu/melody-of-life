var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'app': './src/js/main.js',
    'styles': './src/scss/main.scss'
  },
  output: {
    path: path.dirname(__dirname) + '/dist',
    filename: '[name].js'
  },
  devtool: '#cheap-module-source-map',
  devServer: {
    port: 3000,
    contentBase: './src',
    historyApiFallback: true
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel-loader',        
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      { test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader', 
          use: 'css-loader!sass-loader'
        }) 
      },
      { test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        }) 
      },
      { test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g\|\.gif$/,
        loader: 'file-loader' },
      // {
      //  	test: /\.(jpe?g|png|gif|svg)$/,
  	   //  use: [
  	   //    'url-loader?limit=10000',
  	   //    'img-loader'
  	   //  ] 
      // }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
};