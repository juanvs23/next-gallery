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
    setTitle("The best gallery image");
    Object(_helpers_fetch__WEBPACK_IMPORTED_MODULE_5__["fetchImage"])("https://api.unsplash.com/photos?per_page=20&").then(function (res) {
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
      lineNumber: 31,
      columnNumber: 7
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container-fluid",
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "p-0 col-12",
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_mansoryList__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, _this);
};

_s(Home, "uQBkTA5PLh/WpIV8S2l2CLhCgUQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsIlJlYWN0IiwidXNlQ29udGV4dCIsIkZ1bmN0aW9uYWxzQ29udGVudCIsInBhZ2UiLCJzZXRQYWdlIiwidGl0bGUiLCJzZXRUaXRsZSIsInNldGltYWdlTGlzdCIsInNldFNlbGVjdCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJtb3JlUGFnZSIsImZldGNoSW1hZ2UiLCJ0aGVuIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFBQSwwQkFRYkMsNENBQUssQ0FBQ0MsVUFBTixDQUFpQkMsc0VBQWpCLENBUmE7QUFBQSxNQUVmQyxJQUZlLHFCQUVmQSxJQUZlO0FBQUEsTUFHZkMsT0FIZSxxQkFHZkEsT0FIZTtBQUFBLE1BSWZDLEtBSmUscUJBSWZBLEtBSmU7QUFBQSxNQUtmQyxRQUxlLHFCQUtmQSxRQUxlO0FBQUEsTUFNZkMsWUFOZSxxQkFNZkEsWUFOZTtBQUFBLE1BT2ZDLFNBUGUscUJBT2ZBLFNBUGU7O0FBVWpCUiw4Q0FBSyxDQUFDUyxTQUFOLENBQWdCLFlBQU07QUFDcEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUixJQUFaO0FBRUFDLFdBQU8sQ0FBQ1EsK0RBQVEsQ0FBQ1QsSUFBRCxDQUFULENBQVA7QUFFQUcsWUFBUSxDQUFDLHdCQUFELENBQVI7QUFDQU8scUVBQVUsQ0FBQyw4Q0FBRCxDQUFWLENBQTJEQyxJQUEzRCxDQUFnRSxVQUFDQyxHQUFEO0FBQUEsYUFDOURSLFlBQVksQ0FBQ1EsR0FBRCxDQURrRDtBQUFBLEtBQWhFO0FBR0FQLGFBQVM7QUFDVixHQVZELEVBVUcsRUFWSDtBQVlBLFNBQ0UsOEVBQUMsZ0VBQUQ7QUFBQSxlQUNFO0FBQUksZUFBUyxFQUFDLDRCQUFkO0FBQUEsZ0JBQTRDSDtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFRTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBLGdCQUNFO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsa0JBQ0UsOEVBQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFVRCxDQWhDRDs7R0FBTU4sSTs7S0FBQUEsSTtBQWtDU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGEzYTY1OGQ3OGJlNjViNzljZTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZ1bmN0aW9uYWxzQ29udGVudCB9IGZyb20gXCIuLi9jb250ZXh0L2NvbnRleHRBcGlcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4XCI7XG5pbXBvcnQgTWFuc29yeUxpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L21hbnNvcnlMaXN0XCI7XG5pbXBvcnQgeyBmZXRjaEltYWdlLCBtb3JlUGFnZSB9IGZyb20gXCIuLi9oZWxwZXJzL2ZldGNoXCI7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBwYWdlLFxuICAgIHNldFBhZ2UsXG4gICAgdGl0bGUsXG4gICAgc2V0VGl0bGUsXG4gICAgc2V0aW1hZ2VMaXN0LFxuICAgIHNldFNlbGVjdCxcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoRnVuY3Rpb25hbHNDb250ZW50KTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHBhZ2UpO1xuXG4gICAgc2V0UGFnZShtb3JlUGFnZShwYWdlKSk7XG5cbiAgICBzZXRUaXRsZShcIlRoZSBiZXN0IGdhbGxlcnkgaW1hZ2VcIik7XG4gICAgZmV0Y2hJbWFnZShcImh0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS9waG90b3M/cGVyX3BhZ2U9MjAmXCIpLnRoZW4oKHJlcykgPT5cbiAgICAgIHNldGltYWdlTGlzdChyZXMpXG4gICAgKTtcbiAgICBzZXRTZWxlY3QoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi01IHRleHQtY2VudGVyIGRpc3BsYXktNFwiPnt0aXRsZX08L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTAgY29sLTEyXCI+XG4gICAgICAgICAgPE1hbnNvcnlMaXN0IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==