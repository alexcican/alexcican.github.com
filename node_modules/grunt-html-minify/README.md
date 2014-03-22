# grunt-html-minify

[![Build Status](https://travis-ci.org/yize/grunt-html-minify.png?branch=master)](https://travis-ci.org/yize/grunt-html-minify)
[![Dependency Status](https://gemnasium.com/yize/grunt-html-minify.png)](https://gemnasium.com/yize/grunt-html-minify)

> html-minify for grunt

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-html-minify --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-html-minify');
```

## The "html_minify" task

### Overview
In your project's Gruntfile, add a section named `html_minify` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  html_minify: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.charset
Type: `String`
Default value: `'utf-8'`

A string value that is used to assign the input file encoding.

### Usage Examples

#### normal(UTF-8 files)

```js
grunt.initConfig({
  html_minify: {
    options: {},
    files: {
      'dest/whatever.html': ['src/whatever.html'],
    },
  },
})
```

#### assign file encoding

```js
grunt.initConfig({
  html_minify: {
    options: {
      charset:'gbk'
    },
    files: {
      'dest/whatever.html': ['src/whatever.html'],
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

2013-06-27 first official release
