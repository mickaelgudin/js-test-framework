module.exports = function(config) {
    config.set({
        basePath: '',
        files: [
            {pattern: 'spec/scriptTest.js', included: true,nocache:false}
        ],

        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-coverage'
        ],
        frameworks: ['jasmine'],

        // coverage reporter generates the coverage
        reporters: ['progress', 'coverage'],

        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'spec/scriptTest.js': ['coverage']
        },

        // optionally, configure the reporter
        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        }

    });
};