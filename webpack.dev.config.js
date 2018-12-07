const path = require('path');
const webpack = require('webpack');

module.exports = {
  watch: true,
  watchOptions: {
    ignored: ['node_modules']
  },
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /.js?$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'babel-loader'
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    publicPath: path.join('/dist/'),
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};