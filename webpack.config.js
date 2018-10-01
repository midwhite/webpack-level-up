var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(gif|png|jpe?g|)$/, use: 'url-loader' },
      { test: /\.html?$/, use: 'html-loader' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
};
