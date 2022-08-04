const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module:{
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  output: {
    // publicPath: 'public',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    assetModuleFilename: 'assets/[name][ext]'
  }, 
  resolve: {
    extensions: ['.ts', '.js'],
  }
}