const { root } = require('../utils')

module.exports = {
  test: /\.(woff|woff2|eot|[ot]tf|svg)([?&]v=\d(\.\d){2}|[?&]#iefix){0,2}$/,
  loaders: ['file'],
  include: [root('src', 'assets', 'fonts')],
}
