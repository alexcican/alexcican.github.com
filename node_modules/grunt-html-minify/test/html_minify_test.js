'use strict';

var grunt = require('grunt');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports.html_minify = {
    setUp: function (done) {
        // setup here if necessary
        done();
    },
    normal: function (test) {
        test.expect(1);

        var actual = grunt.file.read('test/fixtures/index.html');
        var expected = grunt.file.read('test/expected/index.html');
        test.equal(actual, expected, 'should describe what the default behavior is.');

        test.done();
    },

    web:function(test){
        test.expect(1);

        var actual = grunt.file.read('test/fixtures/tags.html');
        var expected = grunt.file.read('test/expected/tags.html');
        test.equal(actual, expected, 'should describe what the default behavior is.');

        test.done();
    },

    gbk: function (test) {
        test.expect(1);

        var actual = grunt.file.read('test/fixtures/index-gbk.html');
        var expected = grunt.file.read('test/expected/index-gbk.html');
        test.equal(actual, expected, 'should describe what the default behavior is.');

        test.done();
    }
};
