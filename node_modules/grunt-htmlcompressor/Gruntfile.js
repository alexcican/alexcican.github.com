module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({

    nodeunit: {
      tests: ["test/*_test.js"]
    },
    clean: {
      output: ['test/fixtures/output']
    },
    htmlcompressor: {
      compress: {
        src: [
          'test/fixtures/html/*.html'
        ],
        options: {
          type: 'html',
          processName: function (path) {
            path = path.split('/').pop();
            return 'test/fixtures/output/' + path;
          },
          preserveServerScript: true
        }
      }
    },
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true
      },
      globals: {}
    }
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.registerTask('test', ['clean', 'htmlcompressor', 'nodeunit']);
  grunt.registerTask('default', ['jshint', 'test']);
};
