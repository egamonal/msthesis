module.exports = function(config) {
config.set({
    basePath: '../',
    frameworks: ["jasmine"],
    files: [
      'app/lib/jquery/jquery-1.9.1.js',
      'app/lib/video-js/video.dev.js',
      'test/lib/jasmine-jquery.js',
      'app/lib/angular/angular.js',
      'app/lib/angular/angular-*.js',
      'test/lib/angular/angular-mocks.js',
      'test/lib/reemi/*.js',
      'app/js/**/*.js',
      'test/unit/**/*.js'
    ],
    autoWatch: true,
    browsers: ['Chrome'],
    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
});
};

