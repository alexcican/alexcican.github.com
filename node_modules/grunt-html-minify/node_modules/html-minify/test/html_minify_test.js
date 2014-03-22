var fs = require('fs');

module.exports = {
    setUp: function (done) {
        // setup here if necessary
        done();
    },
    normal: function (test) {
        test.expect(1);

        var actual = fs.readFileSync('test/fixtures/index.html','utf8').toString();
        var expected = fs.readFileSync('test/expected/index.html','utf8').toString();
        test.equal(actual, expected, 'should describe what the default behavior is.');

        test.done();
    },

    web: function (test) {
        test.expect(1);

        var actual = fs.readFileSync('test/fixtures/tags.html','utf8').toString();
        var expected = fs.readFileSync('test/expected/tags.html','utf8').toString();
        test.equal(actual, expected, 'should describe what the default behavior is.');

        test.done();
    },

    gbk: function (test) {
        test.expect(1);

        var actual = fs.readFileSync('test/fixtures/index-gbk.html','utf8').toString();
        var expected = fs.readFileSync('test/expected/index-gbk.html','utf8').toString();
        test.equal(actual, expected, 'should describe what the default behavior is.');

        test.done();
    }
};