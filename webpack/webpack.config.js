const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: devMode ? 'development' : 'production',
  entry: './src/principal.js',
  output: {
    path: __dirname + '/build',
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    port: 9000,
    client: {
      progress: true,
      logging: 'verbose',
    }
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6,
        },
      }),
      new OptimizeCss({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  module: {
    rules: [{
      test: /\.s?[ac]ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        // 'style-loader', // adds css to dom injecting the g <style>
        'css-loader',   // interprets @import, url()...
        'sass-loader',
      ]
    }, {
      test: /\.(png|jpe?g|gif)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'images/[hash][ext][query]'
      },
    }]
  }
}
