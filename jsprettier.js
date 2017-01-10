'use strict';
var getStdin = require('get-stdin');
var prettier = require('prettier');
var extend = require('extend');

getStdin().then(function(data) {
  var scope = process.argv[3];
  var opts;
  var js;
  // use the settings from .sublime-settings
  opts = extend({}, opts, JSON.parse(process.argv[2]));
  try {
    if (scope) {
      js = prettier.format(data, opts);
    }
    process.stdout.write(js);
  } catch (err) {
    throw err;
  }
});