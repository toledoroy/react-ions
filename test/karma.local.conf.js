var path = require('path');

module.exports = function(config) {
  config.set({
    basePath: '../',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      './test/Textarea.js'
    ],

    preprocessors: {
      './test/*.js': ['webpack'],
    },

    coverageReporter: {
      type : 'text',
      includeAllSources: true
    },

    thresholdReporter: {
      statements: 95,
      branches: 95,
      functions: 90,
      lines: 95
    },

    webpack: { //kind of a copy of your webpack config
      module: {
        preLoaders: [
            {
              test: /\.js$/,
              exclude: /(test|node_modules)\//,
              loader: 'isparta-instrumenter-loader',
              query: {
                babel: {
                  presets: ['airbnb', 'es2015'],
                  plugins: ['transform-object-rest-spread', 'transform-class-properties', 'transform-export-extensions']
                }
              }
            },
        ],
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
              presets: ['airbnb'],
              plugins: ['transform-class-properties', 'transform-export-extensions']
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
              'css?modules&localIdentName=[local]!postcss-loader',
              'sass?sourceMap'
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
      }
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
      'karma-phantomjs-launcher',
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

    browsers: ['PhantomJS'],

    singleRun: true
  })
};
