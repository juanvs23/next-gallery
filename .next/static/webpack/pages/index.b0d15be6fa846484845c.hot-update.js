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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_contextApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/contextApi */ "./context/contextApi.js");
/* harmony import */ var _components_layout_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/index */ "./components/layout/index.js");
/* harmony import */ var _components_layout_mansoryList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/mansoryList */ "./components/layout/mansoryList.jsx");
/* harmony import */ var _helpers_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/fetch */ "./helpers/fetch.js");


var _jsxFileName = "C:\\wamp64\\www\\js\\next-gallery\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();







var Home = function Home() {
  _s();

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_context_contextApi__WEBPACK_IMPORTED_MODULE_2__["FunctionalsContent"]),
      page = _React$useContext.page,
      setPage = _React$useContext.setPage,
      title = _React$useContext.title,
      setTitle = _React$useContext.setTitle,
      setimageList = _React$useContext.setimageList,
      setSelect = _React$useContext.setSelect;

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    console.log(page);
    setPage(Object(_helpers_fetch__WEBPACK_IMPORTED_MODULE_5__["morePage"])(page));
    setTitle('The best gallery image');
    Object(_helpers_fetch__WEBPACK_IMPORTED_MODULE_5__["fetchImage"])('https://api.unsplash.com/photos?per_page=20&').then(function (res) {
      return setimageList(res);
    });
    setSelect();
  }, []);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "mb-5 text-center display-4",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 12
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container-fluid",
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "p-0 col-12",
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_mansoryList__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 20
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 16
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 12
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, _this);
};

_s(Home, "Yv59OJGdXphKSY2lhRVx9N99jO8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsIlJlYWN0IiwidXNlQ29udGV4dCIsIkZ1bmN0aW9uYWxzQ29udGVudCIsInBhZ2UiLCJzZXRQYWdlIiwidGl0bGUiLCJzZXRUaXRsZSIsInNldGltYWdlTGlzdCIsInNldFNlbGVjdCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJtb3JlUGFnZSIsImZldGNoSW1hZ2UiLCJ0aGVuIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFBQSwwQkFDbURDLDRDQUFLLENBQUNDLFVBQU4sQ0FBaUJDLHNFQUFqQixDQURuRDtBQUFBLE1BQ1RDLElBRFMscUJBQ1RBLElBRFM7QUFBQSxNQUNIQyxPQURHLHFCQUNIQSxPQURHO0FBQUEsTUFDTUMsS0FETixxQkFDTUEsS0FETjtBQUFBLE1BQ2FDLFFBRGIscUJBQ2FBLFFBRGI7QUFBQSxNQUN1QkMsWUFEdkIscUJBQ3VCQSxZQUR2QjtBQUFBLE1BQ3FDQyxTQURyQyxxQkFDcUNBLFNBRHJDOztBQUdqQlIsOENBQUssQ0FBQ1MsU0FBTixDQUFnQixZQUFNO0FBQ3BCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWVIsSUFBWjtBQUVBQyxXQUFPLENBQUNRLCtEQUFRLENBQUNULElBQUQsQ0FBVCxDQUFQO0FBRUFHLFlBQVEsQ0FBQyx3QkFBRCxDQUFSO0FBQ0FPLHFFQUFVLENBQUMsOENBQUQsQ0FBVixDQUNHQyxJQURILENBQ1EsVUFBQUMsR0FBRztBQUFBLGFBQUlSLFlBQVksQ0FBQ1EsR0FBRCxDQUFoQjtBQUFBLEtBRFg7QUFFQVAsYUFBUztBQUNWLEdBVEQsRUFTRyxFQVRIO0FBV0EsU0FDTSw4RUFBQyxnRUFBRDtBQUFBLGVBQ0c7QUFBSSxlQUFTLEVBQUMsNEJBQWQ7QUFBQSxnQkFDS0g7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREgsRUFJRztBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBLGdCQUNJO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsa0JBQ0ksOEVBQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRE47QUFhRCxDQTNCRDs7R0FBTU4sSTs7S0FBQUEsSTtBQTZCU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjBkMTViZTZmYTg0NjQ4NDg0NWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRnVuY3Rpb25hbHNDb250ZW50IH0gZnJvbSAnLi4vY29udGV4dC9jb250ZXh0QXBpJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4J1xyXG5pbXBvcnQgTWFuc29yeUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvbWFuc29yeUxpc3QnXHJcbmltcG9ydCB7IGZldGNoSW1hZ2UsIG1vcmVQYWdlIH0gZnJvbSAnLi4vaGVscGVycy9mZXRjaCdcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBwYWdlLCBzZXRQYWdlLCB0aXRsZSwgc2V0VGl0bGUsIHNldGltYWdlTGlzdCwgc2V0U2VsZWN0IH0gPSBSZWFjdC51c2VDb250ZXh0KEZ1bmN0aW9uYWxzQ29udGVudClcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHBhZ2UpXHJcblxyXG4gICAgc2V0UGFnZShtb3JlUGFnZShwYWdlKSlcclxuXHJcbiAgICBzZXRUaXRsZSgnVGhlIGJlc3QgZ2FsbGVyeSBpbWFnZScpXHJcbiAgICBmZXRjaEltYWdlKCdodHRwczovL2FwaS51bnNwbGFzaC5jb20vcGhvdG9zP3Blcl9wYWdlPTIwJicpXHJcbiAgICAgIC50aGVuKHJlcyA9PiBzZXRpbWFnZUxpc3QocmVzKSlcclxuICAgIHNldFNlbGVjdCgpXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItNSB0ZXh0LWNlbnRlciBkaXNwbGF5LTRcIj5cclxuICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTAgY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICA8TWFuc29yeUxpc3QvPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=