module.exports = function (grunt) {
  "use strict";

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    clean: {
      options: {force: true},
      tmp: '.tmp',
      scripts: 'build/*.js',
      styles: 'build/*.css'
    },

    less: {
      all: {
        src: 'src/styles/*',
        dest: '.tmp/main.css'
      }
    },

    csslint: {
      all: {
        src: '.tmp/main.css'
      }
    },

    cssmin: {
      all: {
        src: '.tmp/main.css',
        dest: 'build/main.min.css'
      }
    },

    jshint: {
      all: [
        'Gruntfile.js'
      ]
    },

    uglify: {
      all: {
        src: '.tmp/main.js',
        dest: 'build/main.min.js'
      }
    },

    concat: {
      all: {
        src: 'src/scripts/*',
        dest: '.tmp/main.js'
      }
    },

    copy: {
      all: {
        files: [
          {
            src: '.tmp/main.css',
            dest: 'build/main.min.css'
          },
          {
            src: '.tmp/main.js',
            dest: 'build/main.min.js'
          }
        ]
      }
    }
  });

  grunt.registerTask('build', function (target) {
    var build = [];
    if (target === 'production') {
      build = [
        'clean',
        'less',
        'csslint',
        'cssmin',
        'jshint',
        'concat',
        'uglify'
      ];
    }
    // Development Build
    else {
      build = [
        'clean',
        'less',
        'csslint',
        'jshint',
        'concat',
        'copy'
      ];
    }

    grunt.task.run(build);
  });

  grunt.registerTask('default', [
    'build'
  ]);
};