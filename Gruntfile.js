module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    htmlcompressor: {
      compile: {
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: '_site/',      // Src matches are relative to this path.
            src: ['**/*.html'], // Actual pattern(s) to match.
            dest: '_site/',   // Destination path prefix.
          },
        ],
        options: {
          // type: 'html',
          // preserveServerScript: true
        }
      }
    },
    watch: {
      files: ['_site/**/*.html'],
      tasks: ['htmlcompressor']
      // scripts: {
      //   files: ['**/*.js'],
      //   tasks: ['jshint'],
      //   options: {
      //     spawn: false,
      //   },
      // },
    },
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-htmlcompressor');

  // Default tasks
  grunt.registerTask('default', ['htmlcompressor']);
};