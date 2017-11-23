'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getSizes = function getSizes() {
  var canUseDOM = typeof window !== 'undefined';

  return {
    width: canUseDOM ? window.innerWidth : null,
    height: canUseDOM ? window.innerHeight : null,
    canUseDOM: canUseDOM
  };
};

exports.default = getSizes;
//# sourceMappingURL=getWindowSizes.js.map