'use strict';

var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');

var JSONWriter = function (config, outputText, ext) {
  if (typeof outputText !== "object") {
    throw new Error("The outputText provided is not a 'object' value but is a typeof " + (typeof outputText));
  }
  this.config = config;
  this.ext = ext || "json";
  this.outputText = outputText;
};

JSONWriter.prototype.getFileExtension = function () {
  return this.ext;
};

JSONWriter.prototype.write = function (filePath) {
  var dir = path.dirname(path.normalize(filePath));
  if (!fs.existsSync(dir)) {
    mkdirp.sync(dir);
  }
  fs.writeFileSync(filePath, JSON.stringify(this.outputText, null, 4));
};

module.exports = JSONWriter;
