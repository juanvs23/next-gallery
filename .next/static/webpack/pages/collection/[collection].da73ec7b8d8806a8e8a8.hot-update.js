webpackHotUpdate_N_E("pages/collection/[collection]",{

/***/ "./helpers/fetch.js":
/*!**************************!*\
  !*** ./helpers/fetch.js ***!
  \**************************/
/*! exports provided: fetchImage, getRandomInt, morePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchImage", function() { return fetchImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInt", function() { return getRandomInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "morePage", function() { return morePage; });
/* harmony import */ var C_wamp64_www_js_next_gallery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_wamp64_www_js_next_gallery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_wamp64_www_js_next_gallery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_wamp64_www_js_next_gallery_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");


var fetchImage = /*#__PURE__*/function () {
  var _ref = Object(C_wamp64_www_js_next_gallery_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_wamp64_www_js_next_gallery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url) {
    var key, data, result;
    return C_wamp64_www_js_next_gallery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            key = "p2VDcLcYCgQfeUwJNQNAnKddjrl1XnEr2tvCtExrsA8";
            _context.next = 3;
            return fetch("".concat(url, "client_id=").concat(key));

          case 3:
            data = _context.sent;
            _context.next = 6;
            return data.json();

          case 6:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchImage(_x) {
    return _ref.apply(this, arguments);
  };
}();
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
var morePage = function morePage(page) {
  return page + 1;
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9mZXRjaC5qcyJdLCJuYW1lcyI6WyJmZXRjaEltYWdlIiwidXJsIiwia2V5IiwicHJvY2VzcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJyZXN1bHQiLCJnZXRSYW5kb21JbnQiLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJtb3JlUGFnZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxVQUFVO0FBQUEsb1RBQUcsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2xCQyxlQURrQixHQUNaQyw2Q0FEWTtBQUFBO0FBQUEsbUJBR0xDLEtBQUssV0FBSUgsR0FBSix1QkFBb0JDLEdBQXBCLEVBSEE7O0FBQUE7QUFHbEJHLGdCQUhrQjtBQUFBO0FBQUEsbUJBSUhBLElBQUksQ0FBQ0MsSUFBTCxFQUpHOztBQUFBO0FBSWxCQyxrQkFKa0I7QUFBQSw2Q0FLakJBLE1BTGlCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVZQLFVBQVU7QUFBQTtBQUFBO0FBQUEsR0FBaEI7QUFRQSxTQUFTUSxZQUFULENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDdEMsU0FBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQkgsR0FBRyxHQUFHRCxHQUF2QixDQUFYLElBQTBDQSxHQUFqRDtBQUNEO0FBQ00sSUFBTUssUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRCxFQUFVO0FBQ2hDLFNBQU9BLElBQUksR0FBRyxDQUFkO0FBQ0QsQ0FGTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb2xsZWN0aW9uL1tjb2xsZWN0aW9uXS5kYTczZWM3YjhkODgwNmE4ZThhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGZldGNoSW1hZ2UgPSBhc3luYyAodXJsKSA9PiB7XHJcbiAgY29uc3Qga2V5ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQUNDRVNTX0tFWVxyXG5cclxuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goYCR7dXJsfWNsaWVudF9pZD0ke2tleX1gKVxyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRhdGEuanNvbigpXHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tSW50IChtaW4sIG1heCkge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW5cclxufVxyXG5leHBvcnQgY29uc3QgbW9yZVBhZ2UgPSAocGFnZSkgPT4ge1xyXG4gIHJldHVybiBwYWdlICsgMVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=