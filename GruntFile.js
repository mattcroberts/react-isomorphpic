module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                sourceMap: true,
                sourceMapIncludeSources: true
            },
            build: {
                src: 'public/js/bundle.js',
                dest: 'public/js/bundle.min.js'
            }
        },
        browserify: {
            options: {
                browserifyOptions: {
                    debug: true
                },
                transform: [ require('grunt-react').browserify ]
            },
            client: {
                src: ['bootstrap.js'],
                dest: 'public/js/bundle.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('build', ['browserify']);
    grunt.registerTask('default', ['build', 'uglify']);

};