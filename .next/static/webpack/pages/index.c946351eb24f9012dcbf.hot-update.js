webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var C_wamp64_www_js_next_gallery_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_contextApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/contextApi */ "./context/contextApi.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout */ "./pages/components/layout/index.js");
/* harmony import */ var _components_layout_mansoryList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout/mansoryList */ "./pages/components/layout/mansoryList.jsx");
/* harmony import */ var _helpers_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/fetch */ "./pages/helpers/fetch.js");



var _jsxFileName = "C:\\wamp64\\www\\js\\next-gallery\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();







var Home = function Home() {
  _s();

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(_context_contextApi__WEBPACK_IMPORTED_MODULE_3__["FunctionalsContent"]),
      imageList = _React$useContext.imageList,
      title = _React$useContext.title,
      setTitle = _React$useContext.setTitle,
      setimageList = _React$useContext.setimageList,
      setSelect = _React$useContext.setSelect;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(),
      _React$useState2 = Object(C_wamp64_www_js_next_gallery_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      page = _React$useState2[0],
      setPage = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    setTitle('The best gallery image');
    Object(_helpers_fetch__WEBPACK_IMPORTED_MODULE_6__["fetchImage"])("https://api.unsplash.com/photos?per_page=20").then(function (res) {
      return setimageList(res);
    });
    setSelect();
  }, []);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "mb-5 text-center display-4",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 12
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container-fluid",
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "p-0 col-12",
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_mansoryList__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 20
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 16
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 12
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, _this);
};

_s(Home, "xiqOfWGo0ZocZ783t18dpFkmeSM=");

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsIlJlYWN0IiwidXNlQ29udGV4dCIsIkZ1bmN0aW9uYWxzQ29udGVudCIsImltYWdlTGlzdCIsInRpdGxlIiwic2V0VGl0bGUiLCJzZXRpbWFnZUxpc3QiLCJzZXRTZWxlY3QiLCJ1c2VTdGF0ZSIsInBhZ2UiLCJzZXRQYWdlIiwidXNlRWZmZWN0IiwiZmV0Y2hJbWFnZSIsInRoZW4iLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsMEJBQ3lDQyw0Q0FBSyxDQUFDQyxVQUFOLENBQWlCQyxzRUFBakIsQ0FEekM7QUFBQSxNQUNSQyxTQURRLHFCQUNSQSxTQURRO0FBQUEsTUFDRUMsS0FERixxQkFDRUEsS0FERjtBQUFBLE1BQ1FDLFFBRFIscUJBQ1FBLFFBRFI7QUFBQSxNQUNpQkMsWUFEakIscUJBQ2lCQSxZQURqQjtBQUFBLE1BQzhCQyxTQUQ5QixxQkFDOEJBLFNBRDlCOztBQUFBLHdCQUVNUCw0Q0FBSyxDQUFDUSxRQUFOLEVBRk47QUFBQTtBQUFBLE1BRVJDLElBRlE7QUFBQSxNQUVIQyxPQUZHOztBQUlmViw4Q0FBSyxDQUFDVyxTQUFOLENBQWdCLFlBQUk7QUFDaEJOLFlBQVEsQ0FBQyx3QkFBRCxDQUFSO0FBQ0FPLHFFQUFVLCtDQUFWLENBQ0NDLElBREQsQ0FDTSxVQUFBQyxHQUFHO0FBQUEsYUFBRVIsWUFBWSxDQUFDUSxHQUFELENBQWQ7QUFBQSxLQURUO0FBRUFQLGFBQVM7QUFDWixHQUxELEVBS0UsRUFMRjtBQU9BLFNBQ0ksOEVBQUMsMERBQUQ7QUFBQSxlQUNHO0FBQUksZUFBUyxFQUFDLDRCQUFkO0FBQUEsZ0JBQ0tIO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURILEVBSUc7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBQSxnQkFDSTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLGtCQUNJLDhFQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBYUgsQ0F4QkQ7O0dBQU1MLEk7O0tBQUFBLEk7QUEwQlNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM5NDYzNTFlYjI0ZjkwMTJkY2JmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZ1bmN0aW9uYWxzQ29udGVudCB9IGZyb20gJy4uL2NvbnRleHQvY29udGV4dEFwaSdcclxuaW1wb3J0IExheW91dCBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5pbXBvcnQgTWFuc29yeUxpc3QgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9tYW5zb3J5TGlzdCdcclxuaW1wb3J0IHtmZXRjaEltYWdlfSBmcm9tICcuL2hlbHBlcnMvZmV0Y2gnXHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gICAgY29uc3Qge2ltYWdlTGlzdCx0aXRsZSxzZXRUaXRsZSxzZXRpbWFnZUxpc3Qsc2V0U2VsZWN0fT1SZWFjdC51c2VDb250ZXh0KEZ1bmN0aW9uYWxzQ29udGVudClcclxuICAgIGNvbnN0IFtwYWdlLHNldFBhZ2VdPVJlYWN0LnVzZVN0YXRlKClcclxuICAgIFxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgc2V0VGl0bGUoJ1RoZSBiZXN0IGdhbGxlcnkgaW1hZ2UnKVxyXG4gICAgICAgIGZldGNoSW1hZ2UoYGh0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS9waG90b3M/cGVyX3BhZ2U9MjBgKVxyXG4gICAgICAgIC50aGVuKHJlcz0+c2V0aW1hZ2VMaXN0KHJlcykpXHJcbiAgICAgICAgc2V0U2VsZWN0KClcclxuICAgIH0sW10pXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItNSB0ZXh0LWNlbnRlciBkaXNwbGF5LTRcIj5cclxuICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTAgY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICA8TWFuc29yeUxpc3QvPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICBcclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9