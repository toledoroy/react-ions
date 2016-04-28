const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

const config = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, 'src/app/index.js')
  ],
  resolve: {
    extensions: ['', '.js', '.md', '.txt', '.scss', '.css'],
    alias: {
      'react-conventions/lib': path.resolve(__dirname, '../src/components'),
      'global/fonts': path.resolve(__dirname, '../src/assets/fonts'),
      'global/icons': path.resolve(__dirname, '../src/assets/icons'),
      'private/css': path.resolve(__dirname, 'src/www/css'),
      'private/base': path.resolve(__dirname, 'src/www/css/base'),
      'private/images': path.resolve(__dirname, 'src/www/images'),
      'private/modules': path.resolve(__dirname, 'src/app/modules'),
      'private/config': path.resolve(__dirname, 'src/app/_config')
    },
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/app/index.html'),
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        'presets': ['react', 'es2015', 'react-hmre'],
        'plugins': ['transform-class-properties', 'transform-export-extensions']
      }
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
      test: /\.(css|scss)$/,
      loaders: [
        'style?sourceMap',
        'css?modules&localIdentName=[local]-[hash:base64:5]!postcss-loader',
        'sass?sourceMap'
      ]
      // TODO: figure out how to fix this
      // include: [
      //   path.resolve(__dirname, '../app'),
      //   path.resolve(__dirname, '../src/components'),
      //   path.resolve(__dirname, '../src/styles'),
      // ]
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&minetype=application/font-woff'
    }, {
      test: /\.(jpe?g|gif|png|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader'
    }
  ]},
  // sassLoader: {
  //   includePaths: [path.resolve(__dirname, "./some-folder")]
  // }
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
};

module.exports = config;
