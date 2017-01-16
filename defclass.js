(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['exports', 'defclass'], factory);
  } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
    // CommonJS
    factory(exports, require('defclass'));
  } else {
    // Browser globals
    factory((root.commonJsStrict = {}), root.defclass);
  }
}(this, function (exports, defclass) {
  "use strict";

  var defclass = function defclass(prototype) {
    var constructor = prototype.constructor;
    constructor.prototype = prototype;
    return constructor;
  };

  defclass.extend = function (constructor, keys) {
    var prototype = Object.create(constructor.prototype);
    for (var key in keys) prototype[key] = keys[key];
    return defclass(prototype);
  };

  /*
  Export
   */
  module.exports = defclass;
}));
