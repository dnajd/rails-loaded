module.exports = function(grunt) {

  // Config
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    connect: {
      docs: {
        options: {
          port: 3001,
          base: 'doc/js'
        }
      }
    },

    watch: {
      test: {
        files: ['<%= jshint.files %>'],
        tasks: ['test']
      },
      doc: {
        files: ['<%= jshint.files %>'],
        tasks: ['test', 'doc']
      },

      livereload: {
        options: {
          livereload: false
        },
        files: ['<%= jshint.files %>']
      }
    },

    clean: {
      docs: ['doc/**/*'],
    },

    jshint: {
      options: {
        laxbreak: true,
        "-W041": false, // supress '===' warnings
        "-W002": false // supress "Value of 'error' may be overwritten in IE 8 and earlier"
      },
      files: [
        'Gruntfile.js',
        'app/assets/javascripts/**/*.js',
        'test/javascripts/**/*.js'
      ],
      // options: {
      //   jshintrc: '.jshintrc'
      // }
      //
      // options: {
      //   globals: {
      //     jQuery: true
      //     console: true,
      //     module: true,
      //     document: true
      //   }
      // }
    },

    jsdoc : {
      dist : {
        src: ['<%= jshint.files %>'],
        options: {
          destination: 'doc/js'
        }
      }
    }

  });

  // tasks
  grunt.registerTask('default', ['watch:test']);          // watch
  grunt.registerTask('test',    ['jshint']);              // run
  grunt.registerTask('docs', ['connect', 'watch:doc']);   // watch
  grunt.registerTask('doc',     ['clean:docs', 'jsdoc']); // run

  // load-grunt-tasks
  require('load-grunt-tasks')(grunt);
};
