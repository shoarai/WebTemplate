module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      {pattern: 'app/**/*.png', watched: false, included: false, served: true},
      'app/**/jquery.js',
      'app/**/app.js',
      'app/*.html',
      'spec/**/*.js'
    ],
    proxies: {
      '/img': '/base/img'
    },
    exclude: [
    ],
    preprocessors: {
      'app/js/app.js': ['coverage'],
      'app/*.html': ['html2js']
    },
    reporters: ['progress', 'coverage'],
    port: 9876,
    colors: true,
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};