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
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/layout */ "./pages/components/layout/index.js");
/* harmony import */ var _components_layout_mansoryList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout/mansoryList */ "./pages/components/layout/mansoryList.jsx");
/* harmony import */ var _helpers_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/fetch */ "./pages/helpers/fetch.js");


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
    console.log(Object(_helpers_fetch__WEBPACK_IMPORTED_MODULE_5__["getRandomInt"])(1, 10));
    setTitle('The best gallery image');
    Object(_helpers_fetch__WEBPACK_IMPORTED_MODULE_5__["fetchImage"])("https://api.unsplash.com/photos?per_page=20").then(function (res) {
      return setimageList(res);
    });
    setSelect();
  }, []);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "mb-5 text-center display-4",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 12
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container-fluid",
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "p-0 col-12",
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_mansoryList__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 20
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 16
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 12
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, _this);
};

_s(Home, "AJtS/6K2A9LxJfRR/4IUFFikt8I=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsIlJlYWN0IiwidXNlQ29udGV4dCIsIkZ1bmN0aW9uYWxzQ29udGVudCIsInBhZ2UiLCJzZXRQYWdlIiwidGl0bGUiLCJzZXRUaXRsZSIsInNldGltYWdlTGlzdCIsInNldFNlbGVjdCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJnZXRSYW5kb21JbnQiLCJmZXRjaEltYWdlIiwidGhlbiIsInJlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsMEJBQzRDQyw0Q0FBSyxDQUFDQyxVQUFOLENBQWlCQyxzRUFBakIsQ0FENUM7QUFBQSxNQUNSQyxJQURRLHFCQUNSQSxJQURRO0FBQUEsTUFDSEMsT0FERyxxQkFDSEEsT0FERztBQUFBLE1BQ0tDLEtBREwscUJBQ0tBLEtBREw7QUFBQSxNQUNXQyxRQURYLHFCQUNXQSxRQURYO0FBQUEsTUFDb0JDLFlBRHBCLHFCQUNvQkEsWUFEcEI7QUFBQSxNQUNpQ0MsU0FEakMscUJBQ2lDQSxTQURqQzs7QUFPZlIsOENBQUssQ0FBQ1MsU0FBTixDQUFnQixZQUFJO0FBQ2pCQyxXQUFPLENBQUNDLEdBQVIsQ0FBYUMsbUVBQVksQ0FBQyxDQUFELEVBQUksRUFBSixDQUF6QjtBQUdDTixZQUFRLENBQUMsd0JBQUQsQ0FBUjtBQUNBTyxxRUFBVSwrQ0FBVixDQUNDQyxJQURELENBQ00sVUFBQUMsR0FBRztBQUFBLGFBQUVSLFlBQVksQ0FBQ1EsR0FBRCxDQUFkO0FBQUEsS0FEVDtBQUVBUCxhQUFTO0FBQ1osR0FSRCxFQVFFLEVBUkY7QUFXQSxTQUNJLDhFQUFDLDBEQUFEO0FBQUEsZUFDRztBQUFJLGVBQVMsRUFBQyw0QkFBZDtBQUFBLGdCQUNLSDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESCxFQUlHO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUEsZ0JBQ0k7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSxrQkFDSSw4RUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWFILENBL0JEOztHQUFNTixJOztLQUFBQSxJO0FBaUNTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wYzgzY2EyZWFjNGJlMmZiOGM5My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGdW5jdGlvbmFsc0NvbnRlbnQgfSBmcm9tICcuLi9jb250ZXh0L2NvbnRleHRBcGknXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dCdcclxuaW1wb3J0IE1hbnNvcnlMaXN0IGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvbWFuc29yeUxpc3QnXHJcbmltcG9ydCB7ZmV0Y2hJbWFnZSwgZ2V0UmFuZG9tSW50fSBmcm9tICcuL2hlbHBlcnMvZmV0Y2gnXHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gICAgY29uc3Qge3BhZ2Usc2V0UGFnZSx0aXRsZSxzZXRUaXRsZSxzZXRpbWFnZUxpc3Qsc2V0U2VsZWN0fT1SZWFjdC51c2VDb250ZXh0KEZ1bmN0aW9uYWxzQ29udGVudClcclxuICAgIFxyXG4gICAgXHJcblxyXG4gICAgXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICBjb25zb2xlLmxvZyggZ2V0UmFuZG9tSW50KDEsIDEwKSlcclxuXHJcblxyXG4gICAgICAgIHNldFRpdGxlKCdUaGUgYmVzdCBnYWxsZXJ5IGltYWdlJylcclxuICAgICAgICBmZXRjaEltYWdlKGBodHRwczovL2FwaS51bnNwbGFzaC5jb20vcGhvdG9zP3Blcl9wYWdlPTIwYClcclxuICAgICAgICAudGhlbihyZXM9PnNldGltYWdlTGlzdChyZXMpKVxyXG4gICAgICAgIHNldFNlbGVjdCgpXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi01IHRleHQtY2VudGVyIGRpc3BsYXktNFwiPlxyXG4gICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMCBjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgIDxNYW5zb3J5TGlzdC8+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=