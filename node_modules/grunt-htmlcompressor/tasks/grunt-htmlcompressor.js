/*
 * grunt-htmlcompressor
 * https://github.com/jney/grunt-htmlcompressor
 *
 * Copyright (c) 2012 Jean-Sébastien Ney
 * Licensed under the MIT license.
 */

/*global _:true, __dirname */

var _ = require('lodash');

module.exports = function(grunt) {
  'use strict';

  grunt.registerMultiTask('htmlcompressor', 'Compress html files', function() {
    var options = this.options();

    grunt.verbose.writeflags(options, 'Options');

    var done = this.async();
    var jar = __dirname + '/../ext/htmlcompressor-1.5.3.jar';
    var processName = options.processName;
    var concurrent = parseInt(options.concurrentProcess, 10) > 0 ? options.concurrentProcess : 50;
    var running = 0;
    var srcFiles = [];

    delete options.processName;
    delete options.concurrentProcess;

    var compress = function (done) {
      if (srcFiles.length > 0) {
        var file = srcFiles.pop();
        var args = _.flatten(['-jar', jar, _.map(options, toParameter), file.src]);
        running++;
        grunt.util.spawn({
          cmd: 'java',
          args: args
        }, function(err, output, code) {
          if (err) {
            grunt.log.error(err);
            grunt.fail.warn('htmlcompressor failed to compress html.');
            done(err);
          } else {
            var html = output.stdout;
            var dest = _.isFunction(processName) ?
              processName(file.src, html) : file.dest;
            grunt.file.write(dest, html);
            grunt.log.writeln('File "' + dest + '" created.');
            running--;
            compress(done);
          }
        });
      } else {
        if (running < 1) {
          done();
        }
      }
    };

    this.files.forEach(function(file) {
      var src;

      if (_.isFunction(file.src)) {
        src = file.src();
        src.forEach(function(inFile){
          srcFiles.push({src: inFile, dest: file.dest});
        });
      } else {
        file.src.forEach(function(inFile){
          srcFiles.push({src: inFile, dest: file.dest});
        });
      }
    });
    for (var p = 0; p <= concurrent; p++) {
      compress(done);
    }
  });

  // Convert a pair of key/value to an array
  // if the value is `true` only the key is kept
  //
  // Example:
  //
  //   toParameter('lineBreak', 2)
  //   // => ['--line-break', 2]
  //
  //   toParameter('preserveComments', true)
  //   // => ['--preserve-comments']
  function toParameter(val, key) {
    var str = '--' + key.replace(/([A-Z])/g, function(a) {
      return '-' +  a.toLowerCase();
    });

    return (val === true) ? [str] : [str, val];
  }
};
