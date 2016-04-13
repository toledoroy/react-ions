var path = require('path');
// var precss = require('precss');
// var autoprefixer = require('autoprefixer');

module.exports = function(config) {
  config.set({
    basePath: '../../',
    frameworks: ['jasmine'],
    files: [
      './test/*.js'
    ],

    preprocessors: {
      './src/components/**/*.js': ['webpack', 'sourcemap'],
      './test/*.js': ['webpack', 'sourcemap']
    },

    webpack: { //kind of a copy of your webpack config
      //devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
              presets: ['airbnb']
            }
          },
          {
            test: /\.json$/,
            loader: 'json',
          },
          {
            test: /\.(css|scss)$/,
            loaders: [
              'style?sourceMap',
              'css?modules&localIdentName=ga-[name]--[local]---[hash:base64:5]!postcss-loader',
              'sass?sourceMap'
            ]
          }
        ]
      },
      externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
        'react/addons': true
      }
    },

    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-phantomjs-launcher'
    ],

    babelPreprocessor: {
      options: {
        presets: ['airbnb']
      }
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
  })
};