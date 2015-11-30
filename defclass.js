(function (global, factory) {
    if (typeof define === "function" && define.amd) define(factory);
    else if (typeof module === "object") module.exports = factory();
    else global.augment = factory();
}(this, function () {
    "use strict";

    var defclass = function (prototype) {
      var constructor = prototype.constructor;
      constructor.prototype = prototype;
      return constructor;
    };

    defclass.extend = function (constructor, keys) {
      var prototype = Object.create(constructor.prototype);
      for (var key in keys) prototype[key] = keys[key];
      return defclass(prototype);
    };

    return defclass;
}));