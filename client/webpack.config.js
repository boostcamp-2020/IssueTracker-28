const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|ttf|woff2?|otf|svg|png)$/,
        loader: 'file-loader',
        options: { name: '[name].[ext]' },
      },
    ],
  },
  resolve: {
    alias: {
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@util': path.resolve(__dirname, 'src/utils'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@images': path.resolve(__dirname, 'public/images'),
    },
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'bundle.js',
  },
  devServer: {
    host: '127.0.0.1',
    contentBase: path.join(__dirname, '/public'),
    compress: true,
    hot: true,
    inline: true,
    port: 8080,
    proxy: {
      '/api/': 'http://localhost:3000',
    },
    open: true,
    historyApiFallback: true,
  },
  plugins: [new HtmlWebpackPlugin({ template: 'public/index.html' })],
};
