const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const dotenv = require('dotenv')
const webpack = require('webpack')


dotenv.config({ path: path.resolve(__dirname, '../.env') });

module.exports = {
  entry: {
    popup: path.resolve(__dirname, '../src/popup/index.js'),
    options: path.resolve(__dirname, '../src/options/index.js'),
    background: path.resolve(__dirname, '../src/background/index.js'),
    contentScript: path.resolve(__dirname, '../src/contentScript/index.js'),
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            type: 'asset/resource',
            test: /\.(png|jpg|jpeg|woff|woff2|eot|ttf|otf)$/i,
          },
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            type: 'asset/resource',
            generator: {
              filename: 'static/media/[name].[hash:8].[ext]'
            }
          },
          {
            test: /\.s[ac]ss$/i,
            issuer: (issuer) => (/contentScript\/index\.js$/.test(issuer)),
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
          {
            test: /\.s[ac]ss$/i,
            issuer: (issuer) => !(/contentScript\/index\.js$/.test(issuer)),
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
          },
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            include: path.resolve(__dirname, '../src'),
            loader: require.resolve('babel-loader'),
            options: {
              customize: require.resolve(
                'babel-preset-react-app/webpack-overrides',
              ),
              // This is a feature of `babel-loader` for webpack (not Babel itself).
              // It enables caching results in ./node_modules/.cache/babel-loader/
              // directory for faster rebuilds.
              cacheDirectory: true,
              // See #6846 for context on why cacheCompression is disabled
              cacheCompression: false,
              // compact: isEnvProduction,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
   }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: true, }),
    new CopyPlugin({
      patterns: [
        { from: 'src/static', to: path.resolve(__dirname, '../dist') }
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
    }),
    ...getHtmlPlugins(['popup', 'options']),
  ],
  optimization: {
    splitChunks: {
      chunks(chunk) {
        return chunk.name !== 'contentScript'
      }
    },
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
};

function getHtmlPlugins(chunks) {
  return chunks.map(chunk => {
    return new HtmlWebpackPlugin({
      title: 'Analytic Wing',
      filename: `${chunk}.html`,
      chunks: [chunk],
    });
  });
}
