const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  reactScriptsVersion: 'react-scripts',
  babel: {
    plugins: ['@vanilla-extract/babel-plugin']
  },
  webpack: {
    plugins: [new VanillaExtractPlugin()],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        }
      ]
    }
  }
};
