var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var UglyfyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');
var WebpackS3Plugin = require('webpack-s3-plugin');

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
    new HtmlWebpackPlugin({ template: './src/page.html' }),
    new WebpackCleanupPlugin(),
    new CompressionPlugin({ test: /\.js$/, filename: '[path]' }),
    new WebpackS3Plugin({
      s3Options: {
        accessKeyId: '<YOUR AWS ACCESS KEY ID>',
        secretAccessKey: '<YOUR AWS SECRET ACCESS KEY>',
        region: '<YOUR BUCKET REGION NAME>',
      },
      s3UploadOptions: {
        Bucket: '<YOUR BUCKET NAME>',
        ContentEncoding: 'gzip',
      },
      cloudfrontInvalidateOptions: {
        DistributionId: '<YOUR CLOUDFRONT DISTRIBUTION ID>',
        Items: ['/*'],
      },
    }),
  ],
  optimization: {
    minimizer: [ new UglyfyjsWebpackPlugin() ],
  },
};
