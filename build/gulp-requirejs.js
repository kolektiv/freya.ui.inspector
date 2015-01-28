var es = require('event-stream');
var util = require('gulp-util');
var requirejs = require('requirejs');

var require = function (opts) {
  var stream = es.pause();
  var path = opts.out;

  opts.out = function (text) {
    stream.write(new util.File({
      path: path,
      contents: new Buffer(text)
    }));
  };

  requirejs.optimize(opts);

  return stream;
};

module.exports = require;
