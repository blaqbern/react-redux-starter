const { root } = require('../utils')

module.exports = {
  test: /\.(png|jpe?g|gif)$/,
  loaders: ['file'],
  include: [root('src', 'assets', 'images')],
}
