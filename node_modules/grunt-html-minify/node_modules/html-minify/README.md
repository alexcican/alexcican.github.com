## Description 

[![Build Status](https://travis-ci.org/yize/html-minify.png?branch=master)](https://travis-ci.org/yize/html-minify)
[![Dependency Status](https://gemnasium.com/yize/html-minify.png)](https://gemnasium.com/yize/html-minify)

This is a node.js module that minimize HTML files with any CSS & JS.
the css minify use cssmin,the html minify use the html-minifier



## Installation

You can either download the plugin and unzip it into to your project folder or you can use npm to install the cssmin package.

```shell
npm -g i html-minify
```

```shell
    %> htmlminify one.html
    %> htmlminify -o one-min-utf8.html one-utf8.html //default charset is utf-8
    %> htmlminify -o one-min-gbk.html one-gbk.html -c gbk
```

how to use?see this:

[]()
## Usage

The module exports the html-minify function, so you can use it with :

```js
var htmlminify = require('html-minify');
```

The function htmlminify takes two arguments :

* input : the html content you want to minimize.
* linebreakpos : the number of characters before the end of the line. If empty, the output will have only one line.

Example :

```js
var puts = require('util').puts,
fs = require('fs'),
var htmlminify = require('./html-minify');
var text = fs.readFileSync("/Any/Random/HTML.html", encoding='utf8');
var min = htmlminify(text);
puts(min);
```

## history
- 2013-07-08 minify js and css
- 2013-07-03 change iconv to iconv-lite
- 2013-06-26 fix utf-8 charset bug
- 2013-05-31 cli support charset
- 2013-05-30 first update
