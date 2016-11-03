const { root } = require('../utils')

module.exports = {
  test: /\.js$/,
  loaders: ['babel'],
  include: [root('src')],
}
