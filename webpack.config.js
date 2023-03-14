const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: path.resolve(__dirname, 'src/fgbui.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    clean: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  externals: {
    react: 'react'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ]
          }
        }
      }
    ]
  }
};