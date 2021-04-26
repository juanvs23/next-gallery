webpackHotUpdate_N_E("pages/photo/[photo]",{

/***/ "./pages/photo/[photo].jsx":
/*!*********************************!*\
  !*** ./pages/photo/[photo].jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./pages/components/layout/index.js");
/* harmony import */ var _context_contextApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/contextApi */ "./context/contextApi.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/fetch */ "./pages/helpers/fetch.js");


var _jsxFileName = "C:\\wamp64\\www\\js\\next-gallery\\pages\\photo\\[photo].jsx",
    _this = undefined,
    _s = $RefreshSig$();







var PhotoPage = function PhotoPage() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var photo = router.query.photo;
  console.log(photo);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    Object(_helpers_fetch__WEBPACK_IMPORTED_MODULE_5__["fetchImage"])("https://api.unsplash.com/photos/:id?").then(function (res) {
      console.log(res);
    });
  }, [photo]);

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_context_contextApi__WEBPACK_IMPORTED_MODULE_3__["FunctionalsContent"]),
      title = _React$useContext.title,
      setSelect = _React$useContext.setSelect,
      setTitle = _React$useContext.setTitle,
      imageList = _React$useContext.imageList,
      setimageList = _React$useContext.setimageList;

  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, _this);
};

_s(PhotoPage, "Nb8vtTdkfkMeW9EeIKqRhu2pDUk=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = PhotoPage;
/* harmony default export */ __webpack_exports__["default"] = (PhotoPage);

var _c;

$RefreshReg$(_c, "PhotoPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGhvdG8vW3Bob3RvXS5qc3giXSwibmFtZXMiOlsiUGhvdG9QYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwicGhvdG8iLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJSZWFjdCIsInVzZUVmZmVjdCIsImZldGNoSW1hZ2UiLCJ0aGVuIiwicmVzIiwidXNlQ29udGV4dCIsIkZ1bmN0aW9uYWxzQ29udGVudCIsInRpdGxlIiwic2V0U2VsZWN0Iiwic2V0VGl0bGUiLCJpbWFnZUxpc3QiLCJzZXRpbWFnZUxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDcEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQURvQixNQUVOQyxLQUZNLEdBRUVGLE1BRkYsQ0FFYkcsS0FGYSxDQUVORCxLQUZNO0FBR3JCRSxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWjtBQUNBSSw4Q0FBSyxDQUFDQyxTQUFOLENBQWdCLFlBQUk7QUFDbkJDLHFFQUFVLHdDQUFWLENBQ0NDLElBREQsQ0FDTSxVQUFBQyxHQUFHLEVBQUU7QUFDUE4sYUFBTyxDQUFDQyxHQUFSLENBQVlLLEdBQVo7QUFDSCxLQUhEO0FBSUEsR0FMRCxFQUtFLENBQUNSLEtBQUQsQ0FMRjs7QUFKcUIsMEJBVXNDSSw0Q0FBSyxDQUFDSyxVQUFOLENBQWlCQyxzRUFBakIsQ0FWdEM7QUFBQSxNQVViQyxLQVZhLHFCQVViQSxLQVZhO0FBQUEsTUFVUEMsU0FWTyxxQkFVUEEsU0FWTztBQUFBLE1BVUdDLFFBVkgscUJBVUdBLFFBVkg7QUFBQSxNQVVZQyxTQVZaLHFCQVVZQSxTQVZaO0FBQUEsTUFVc0JDLFlBVnRCLHFCQVVzQkEsWUFWdEI7O0FBV3BCLFNBQ0ksOEVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBS0gsQ0FoQkQ7O0dBQU1sQixTO1VBQ2FFLHFEOzs7S0FEYkYsUztBQWlCU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGhvdG8vW3Bob3RvXS5iNjllNGIwZmU5NzZkNzhkNjQ5MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5pbXBvcnQgeyBGdW5jdGlvbmFsc0NvbnRlbnQgfSBmcm9tICcuLi8uLi9jb250ZXh0L2NvbnRleHRBcGknXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge2ZldGNoSW1hZ2V9IGZyb20gJy4uL2hlbHBlcnMvZmV0Y2gnXHJcbmNvbnN0IFBob3RvUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB7cXVlcnk6e3Bob3RvfX09cm91dGVyXHJcbiAgIGNvbnNvbGUubG9nKHBob3RvKTtcclxuICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICBmZXRjaEltYWdlKGBodHRwczovL2FwaS51bnNwbGFzaC5jb20vcGhvdG9zLzppZD9gKVxyXG4gICAgLnRoZW4ocmVzPT57XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIH0pIFxyXG4gICB9LFtwaG90b10pXHJcbiAgICBjb25zdCB7dGl0bGUsc2V0U2VsZWN0LHNldFRpdGxlLGltYWdlTGlzdCxzZXRpbWFnZUxpc3R9ID0gUmVhY3QudXNlQ29udGV4dChGdW5jdGlvbmFsc0NvbnRlbnQpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBob3RvUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=