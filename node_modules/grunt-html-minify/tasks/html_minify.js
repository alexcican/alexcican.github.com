/*
 * grunt-html-minify
 * https://github.com/yize/grunt-html-minify
 *
 * Copyright (c) 2013 yize
 * Licensed under the MIT license.
 */

'use strict';

var minify = require('html-minify').minify;

module.exports = function (grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('html_minify', 'minify html with script and css.', function () {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            source: null,
            target: null,
            charset: 'utf-8',
            collapseWhitespace: true,
            removeComments: true
        });

        // Iterate over all specified file groups.
        this.files.forEach(function (f) {
            // Concat specified files.
            var src = f.src.filter(function (filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).map(function (filepath) {
                    // Read file source.
                    return grunt.file.read(filepath, {encoding: options.charset});
                }).join('');
            var content = minify(src,options);
            // Handle options.
            // Write the destination file.

            grunt.file.write(f.dest, content, {encoding: options.charset});

            // Print a success message.
            grunt.log.writeln('File "' + f.dest + '" created.');
        });
    });

};
