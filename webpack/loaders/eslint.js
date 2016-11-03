const { root } = require('../utils')

module.exports = {
  test: /\.js$/,
  use: [
    {
      loader: 'eslint',
      options: {
        configFile: root('.eslintrc.yml'),
      },
    },
  ],
  include: [root('src')],
  enforce: 'pre',
}
