const port = process.env.PORT || 8080

const webpack = require('webpack')
const config = require('./webpack.config')
const WebpackDevServer = require('webpack-dev-server')

new WebpackDevServer(webpack(config), {
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
