const { root } = require('./webpack/utils')

module.exports = {
  devtool: process.env.NODE_ENV === 'production' ? 'cheap-module-source-map' : 'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    root('src', 'index.js'),
  ],
  output: {
    path: root('dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  resolve: {
    extensions: ['.js', '.css'],
  },
  module: {
    rules : require('./webpack/loaders'),
  },
  plugins: require('./webpack/plugins'),
}
