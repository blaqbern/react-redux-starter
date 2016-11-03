const port = process.env.PORT || 8080

const path = require('path')
const express = require('express')
const app = express()
const webpack = require('webpack')
const config = require('./webpack.config')
const compiler = webpack(config)
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')

app.use(devMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  hot: true,
  stats: {
    colors: true,
  },
}))

app.use(hotMiddleware(compiler))
app.use(express.static(path.resolve(__dirname)))

app.listen(port, 'localhost', err => err
  ? console.error('DevServer Error:', err)
  : console.log(`Development server running on port ${port}`)
)
