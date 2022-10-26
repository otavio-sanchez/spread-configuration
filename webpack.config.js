const { DefinePlugin }  =  require('webpack') 
const prod = process.env.NODE_ENV === 'prod'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionPlugin = require("compression-webpack-plugin")
require('dotenv').config({ path: './.env' }); 


module.exports = {
  mode: prod ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    // eslint-disable-next-line n/no-path-concat
    path: __dirname + '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json']
        },
        use: 'ts-loader'
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  devtool: prod ? undefined : 'source-map',
  plugins: [
    new DefinePlugin({
      "process.env": JSON.stringify(process.env)
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    }),
    new MiniCssExtractPlugin(),
    new CompressionPlugin(),
  ]
}
