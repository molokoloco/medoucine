module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // nodemon: {
        //     dev: {
        //         script: 'server.js'    
        //     }
        // },
        // browserify: {
        //     myapp: {
        //     options: {
        //         transform: ['babelify'],
        //         browserifyOptions: {
        //             debug: true
        //         },
        //     },
        //     src: 'public/index.js',
        //     dest: 'build/myapp.js'
        //     }
        // },
        jshint: {
            files: ['Gruntfile.js', 'public/js/scripts.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        concat: {
            options: {
                sourceMap: true,
                separator: ';'
            },
            dist: {
                src: [
                    'public/js/jquery-3.6.1.min.js',
                    'public/js/moment-with-locales.min.js',
                    'public/js/bootstrap-datetimepicker2.min.js',
                    'public/js/selectpure.min.js',
                    'public/js/jquery-ui.min.js',
                    'public/js/scripts.js',

                ],
                dest: 'public/js/all-scripts.js'
            }
        },
        uglify: {
            options: {
                sourceMap: true,
                sourceMapIncludeSources: true,
                sourceMapIn: function (path) {
                    return path + ".map";
                }
            },
            my_target: {
                files: {
                    'public/js/all-scripts.min.js': [
                        'public/js/all-scripts.js'
                    ]
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'public/css/all-styles.css': [
                        'public/css/bootstrap-datetimepicker2.min.css',
                        'public/css/selectpure.css',
                        'public/css/jquery-ui.min.css',
                        'public/css/styles.css'
                    ]
                }
            }
        }
    });

    // Activate Plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-nodemon');
    // grunt.registerTask('default', ['nodemon'])

    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
    grunt.registerTask('test', ['jshint']);
};