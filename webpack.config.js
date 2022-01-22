/// Node Standard Dependencies

const path = require('path')

/// Module

const environment = 'development'

// Webpack Babel Configuration

const babelExtensions = ['.js', '.jsx']
    , babelRule = {
        exclude: /node_modules/,
        test:    /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheCompression: false,
            cacheDirectory:   true,
            envName:          environment,
          },
        }
      }

// Webpack Typescript Configuration

const typescriptExtensions = ['.ts', '.tsx']
    , typescriptRule = {
        exclude: /node_modules/,
        test:    /\.tsx?$/,
        use:     'ts-loader',
      }

// Common Webpack Configuration

const common = {
  mode: environment,
  module: {
    rules: [
      babelRule,
      typescriptRule,
    ],
  },
  resolve: {
    extensions: [
      ...babelExtensions,
      ...typescriptExtensions,
    ],
  },
}

// Thread Configurator

const createExport = thread => ({
  ...common,
  entry:  `./src/${thread}/index.ts${thread == 'renderer' ? 'x' : ''}`,
  target: `electron-${thread}`,
  output: {
    filename: 'index.js',
    path:     path.resolve(__dirname, 'dist', thread),
  },
})

// Exports

module.exports = [
  createExport('main'),
  createExport('renderer'),
]
