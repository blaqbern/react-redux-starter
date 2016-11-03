const port = process.env.PORT || 8080

const webpack = require('webpack')
const config = require('./webpack.config')
const compiler = webpack(config)
const WebpackDevServer = require('webpack-dev-server')

let bundleStart
compiler.plugin('compile', () => {
  bundleStart = Date.now()
  console.log('Bundling...')
})
compiler.plugin('done', () =>
  console.log(`webpack bundle created in ${Date.now() - bundleStart}ms`)
)

new WebpackDevServer(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  // hot: true,
  stats: {
    colors: true,
  },
}).listen(port, 'localhost', err => err
  ? console.error('DevServer Error', err)
  : console.log(`Webpack dev server running on port ${port}`)
)
