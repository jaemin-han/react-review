module.exports = {
  entry: './app/index.js',
  output: {
    filename: "./build/bundle.js",
    sourceMapFilename: "./build/bundle.map"
  },
  // This tells you what original line has a problem.
  devtool: '#source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
}
