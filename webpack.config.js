let config = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'dist/index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      }
    ]
  },
}

module.exports = config