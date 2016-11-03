const { root } = require('../utils')

module.exports = {
  test: /\.css$/,
  use: [
    'style',
    {
      loader: 'css',
      options: {
        modules: true,
        importLoaders: 1,
        localIndentName: '[local]__[name]__[base64:5]',
      },
    },
  ],
  include: [
    root('src', 'components', 'styles'),
    root('src', 'containers', 'styles'),
    root('src', 'assets', 'shared-styles'),
  ],
}
