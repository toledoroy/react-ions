var path = require('path');

module.exports = function(config) {

  var rewirePlugin = require('rewire-webpack')

  config.set({
    basePath: '../',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      'config/index.js'
    ],

    preprocessors: {
      'config/index.js': ['webpack']
    },

    coverageReporter: {
      type : 'text',
      includeAllSources: true
    },

    thresholdReporter: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90
    },

    webpack: { // kind of a copy of your webpack config
      resolve: {
        alias: {
          'react-ions/utilities': path.resolve(__dirname, '../../src/utilities'),
          'react-ions/lib': path.resolve(__dirname, '../../lib/')
        }
      },
      module: {
        preLoaders: [
          {
            test: /\.js$/,
            exclude: [/node_modules/, /test/, /\index\.js/],
            loader: 'isparta-instrumenter-loader',
            query: {
              babel: {
                presets: ['airbnb', 'es2015'],
                plugins: ['transform-object-rest-spread', 'transform-class-properties', 'transform-export-extensions']
              }
            }
          }
        ],
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
          },
          {
            test: /\.json$/,
            loader: 'json'
          },
          {
            test: /\.(css|scss)$/,
            loaders: [
              'style?sourceMap',
              'css?modules&localIdentName=[local]!postcss-loader',
              'sass?sourceMap'
            ],
            exclude: [
              /src\/styles\/global/
            ]
          },
          {
            test: /\.(css|scss)$/,
            loaders: [
              'style?sourceMap',
              'css',
              'postcss',
              'sass?sourceMap'
            ],
            include: [
              /src\/styles\/global/
            ]
          },
          {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000&minetype=application/font-woff'
          }, {
            test: /\.(jpe?g|gif|png|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader'
          }
        ]
      },
      externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
        'react/addons': true
      },
      plugins: [
        new rewirePlugin()
      ]
    },

    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },

    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-sinon',
      'karma-chai',
      'karma-chrome-launcher',
      'karma-coverage',
      'karma-threshold-reporter'
    ],

    babelPreprocessor: {
      options: {
        presets: ['airbnb']
      }
    },

    reporters: ['mocha', 'coverage', 'threshold'],

    port: 8080,

    browserNoActivityTimeout: 100000,

    colors: true,

    logLevel: config.LOG_INFO,

    browsers: ['Chrome'],

    singleRun: true
  })
};
