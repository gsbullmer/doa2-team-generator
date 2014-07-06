define([], function () {
  'use strict';

  var evt = {
  	bind: function (element, type, handler) {
      if (element.addEventListener) {
        element.addEventListener(type, handler, false);
      }
      else {
        element.attachEvent('on' + type, handler);
      }
    },
    unbind: function (element, type, handler) {
      element.type = null;
    }
  };

  return evt;
});
