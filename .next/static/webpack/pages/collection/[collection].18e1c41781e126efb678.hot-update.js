webpackHotUpdate_N_E("pages/collection/[collection]",{

/***/ "./pages/collection/[collection].jsx":
/*!*******************************************!*\
  !*** ./pages/collection/[collection].jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/index */ "./pages/components/layout/index.js");
/* harmony import */ var _context_contextApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/contextApi */ "./context/contextApi.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout_mansoryList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout/mansoryList */ "./pages/components/layout/mansoryList.jsx");
/* harmony import */ var _helpers_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/fetch */ "./pages/helpers/fetch.js");


var _jsxFileName = "C:\\wamp64\\www\\js\\next-gallery\\pages\\collection\\[collection].jsx",
    _this = undefined,
    _s = $RefreshSig$();








var Collection = function Collection() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var collection = router.query.collection;

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_context_contextApi__WEBPACK_IMPORTED_MODULE_3__["FunctionalsContent"]),
      title = _React$useContext.title,
      setSelect = _React$useContext.setSelect,
      setTitle = _React$useContext.setTitle,
      imageList = _React$useContext.imageList,
      setimageList = _React$useContext.setimageList;

  var key = "p2VDcLcYCgQfeUwJNQNAnKddjrl1XnEr2tvCtExrsA8";
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    if (collection) {
      setSelect(collection);
      Object(_helpers_fetch__WEBPACK_IMPORTED_MODULE_6__["fetchImage"])("https://api.unsplash.com/collections/".concat(collection)).then(function (res) {
        setTitle(res.title);
      });
      fetch("https://api.unsplash.com/collections/".concat(collection, "/photos?client_id=").concat(key)).then(function (res) {
        return res.json();
      }).then(function (res) {
        setimageList(res);
      });
    }
  }, [collection]);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "mb-5 text-center display-2",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container-fluid",
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "p-0 col-12",
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_mansoryList__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 16
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 12
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }, _this);
};

_s(Collection, "O8JI2nMUj0VTBTEVMQPOkul2JRA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = Collection;
/* harmony default export */ __webpack_exports__["default"] = (Collection);

var _c;

$RefreshReg$(_c, "Collection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29sbGVjdGlvbi9bY29sbGVjdGlvbl0uanN4Il0sIm5hbWVzIjpbIkNvbGxlY3Rpb24iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb2xsZWN0aW9uIiwicXVlcnkiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJGdW5jdGlvbmFsc0NvbnRlbnQiLCJ0aXRsZSIsInNldFNlbGVjdCIsInNldFRpdGxlIiwiaW1hZ2VMaXN0Iiwic2V0aW1hZ2VMaXN0Iiwia2V5IiwicHJvY2VzcyIsInVzZUVmZmVjdCIsImZldGNoSW1hZ2UiLCJ0aGVuIiwicmVzIiwiZmV0Y2giLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQ3JCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEcUIsTUFFUEMsVUFGTyxHQUVNRixNQUZOLENBRWRHLEtBRmMsQ0FFUEQsVUFGTzs7QUFBQSwwQkFJcUNFLDRDQUFLLENBQUNDLFVBQU4sQ0FBaUJDLHNFQUFqQixDQUpyQztBQUFBLE1BSWRDLEtBSmMscUJBSWRBLEtBSmM7QUFBQSxNQUlSQyxTQUpRLHFCQUlSQSxTQUpRO0FBQUEsTUFJRUMsUUFKRixxQkFJRUEsUUFKRjtBQUFBLE1BSVdDLFNBSlgscUJBSVdBLFNBSlg7QUFBQSxNQUlxQkMsWUFKckIscUJBSXFCQSxZQUpyQjs7QUFLckIsTUFBTUMsR0FBRyxHQUFDQyw2Q0FBVjtBQUNBVCw4Q0FBSyxDQUFDVSxTQUFOLENBQWdCLFlBQUk7QUFDakIsUUFBR1osVUFBSCxFQUFjO0FBQ2JNLGVBQVMsQ0FBQ04sVUFBRCxDQUFUO0FBQ0FhLHVFQUFVLGdEQUF5Q2IsVUFBekMsRUFBVixDQUNDYyxJQURELENBQ00sVUFBQUMsR0FBRyxFQUFFO0FBRVBSLGdCQUFRLENBQUNRLEdBQUcsQ0FBQ1YsS0FBTCxDQUFSO0FBQ0gsT0FKRDtBQUtBVyxXQUFLLGdEQUF5Q2hCLFVBQXpDLCtCQUF3RVUsR0FBeEUsRUFBTCxDQUNDSSxJQURELENBQ00sVUFBQUMsR0FBRyxFQUFFO0FBQ1AsZUFBT0EsR0FBRyxDQUFDRSxJQUFKLEVBQVA7QUFDSCxPQUhELEVBSUNILElBSkQsQ0FJTSxVQUFBQyxHQUFHLEVBQUU7QUFFUE4sb0JBQVksQ0FBQ00sR0FBRCxDQUFaO0FBQ0gsT0FQRDtBQVFBO0FBRUgsR0FsQkQsRUFrQkUsQ0FBQ2YsVUFBRCxDQWxCRjtBQW1CQSxTQUNJLDhFQUFDLGdFQUFEO0FBQUEsZUFDSTtBQUFJLGVBQVMsRUFBQyw0QkFBZDtBQUFBLGdCQUNHSztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQUlHO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUEsZ0JBQ0M7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSxrQkFDRyw4RUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVlILENBckNEOztHQUFNUixVO1VBQ2FFLHFEOzs7S0FEYkYsVTtBQXVDU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29sbGVjdGlvbi9bY29sbGVjdGlvbl0uMThlMWM0MTc4MWUxMjZlZmI2NzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9pbmRleCdcclxuaW1wb3J0IHsgRnVuY3Rpb25hbHNDb250ZW50IH0gZnJvbSAnLi4vLi4vY29udGV4dC9jb250ZXh0QXBpJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IE1hbnNvcnlMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L21hbnNvcnlMaXN0J1xyXG5pbXBvcnQge2ZldGNoSW1hZ2V9IGZyb20gJy4uL2hlbHBlcnMvZmV0Y2gnXHJcblxyXG5jb25zdCBDb2xsZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHtxdWVyeTp7Y29sbGVjdGlvbn19PXJvdXRlclxyXG4gICBcclxuICAgIGNvbnN0IHt0aXRsZSxzZXRTZWxlY3Qsc2V0VGl0bGUsaW1hZ2VMaXN0LHNldGltYWdlTGlzdH0gPSBSZWFjdC51c2VDb250ZXh0KEZ1bmN0aW9uYWxzQ29udGVudClcclxuICAgIGNvbnN0IGtleT1wcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BQ0NFU1NfS0VZXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgIGlmKGNvbGxlY3Rpb24pe1xyXG4gICAgICAgIHNldFNlbGVjdChjb2xsZWN0aW9uKSBcclxuICAgICAgICBmZXRjaEltYWdlKGBodHRwczovL2FwaS51bnNwbGFzaC5jb20vY29sbGVjdGlvbnMvJHtjb2xsZWN0aW9ufWApXHJcbiAgICAgICAgLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRUaXRsZShyZXMudGl0bGUpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkudW5zcGxhc2guY29tL2NvbGxlY3Rpb25zLyR7Y29sbGVjdGlvbn0vcGhvdG9zP2NsaWVudF9pZD0ke2tleX1gKVxyXG4gICAgICAgIC50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldGltYWdlTGlzdChyZXMpXHJcbiAgICAgICAgfSlcclxuICAgICAgIH1cclxuXHJcbiAgICB9LFtjb2xsZWN0aW9uXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTUgdGV4dC1jZW50ZXIgZGlzcGxheS0yXCI+XHJcbiAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTAgY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgIDxNYW5zb3J5TGlzdC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2xsZWN0aW9uXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=