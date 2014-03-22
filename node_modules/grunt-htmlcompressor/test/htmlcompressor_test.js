'use strict';

var grunt = require('grunt');

exports.htmlcompressor = {
  main: function(test) {
    test.expect(2);

    var expectA = '<!DOCTYPE HTML> <html lang="en"> <head> <meta charset="UTF-8"> <title></title> </head> <body> </body> </html>';
    var resultA = grunt.file.read('test/fixtures/output/index.html');
    test.equal(expectA, resultA, 'should compress html');

    var expectB = '<html> </html>';
    var resultB = grunt.file.read('test/fixtures/output/index2.html');
    test.equal(expectB, resultB, 'should compress html');

    test.done();
  }
};
