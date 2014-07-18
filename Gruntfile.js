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
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'src/scripts/*.js'
      ]
    },

    copy: {
      all: {
        files: [
          {
            src: '.tmp/main.css',
            dest: 'build/main.min.css'
          }
        ]
      }
    },

    requirejs: {
      options: {
        baseUrl: 'src/scripts',
        mainConfigFile: 'src/scripts/config.js',
        include: ['main'],
        insertRequire: ['main'],
        out: 'build/main.min.js',
        findNestedDependencies: true,
        name: 'almond'
      },
      dev: {
        options: { optimize: 'none' }
      },
      prod: {
        options: {
          generateSourceMaps: true,
          preserveLicenseComments: false,
          optimize: 'uglify2'
        }
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
        'requirejs:prod'
      ];
    }
    // Development Build
    else {
      build = [
        'clean',
        'less',
        'csslint',
        'jshint',
        'requirejs:dev',
        'copy'
      ];
    }

    grunt.task.run(build);
  });

  grunt.registerTask('default', [
    'build'
  ]);
};