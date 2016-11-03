const { root } = require('./utils')
const {
  DefinePlugin,
  optimize: {
    UglifyJsPlugin,
    CommonsChunkPlugin,
  }
} = require('webpack')

function getPlugins(environment) {
  const base = [
    new DefinePlugin({
      __DEV__: environment === 'development',
      __PROD__: environment === 'production',
    }),
  ]
  const dev = [
    // HotModuleReplacementPlugin(),
  ]
  const prod = [
    UglifyJsPlugin(),
  ]

  if (environment === 'development' && dev.length) return [...base, ...dev]
  if (environment === 'production' && prod.length) return [...base, ...prod]
  console.log('!!! returning base webpack plugins only !!!')
  return base
}

module.exports = getPlugins(process.env.NODE_ENV)
