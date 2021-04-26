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
      Object(_helpers_fetch__WEBPACK_IMPORTED_MODULE_6__["fetchImage"])("https://api.unsplash.com/collections/".concat(collection, "?")).then(function (res) {
        setTitle(res.title);
      });
      Object(_helpers_fetch__WEBPACK_IMPORTED_MODULE_6__["fetchImage"])("https://api.unsplash.com/collections/".concat(collection, "/photos?")).then(function (res) {
        setimageList(res);
      });
    }
  }, [collection]);
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "mb-5 text-center display-4",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container-fluid",
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "p-0 col-12",
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_mansoryList__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 16
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 12
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29sbGVjdGlvbi9bY29sbGVjdGlvbl0uanN4Il0sIm5hbWVzIjpbIkNvbGxlY3Rpb24iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb2xsZWN0aW9uIiwicXVlcnkiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJGdW5jdGlvbmFsc0NvbnRlbnQiLCJ0aXRsZSIsInNldFNlbGVjdCIsInNldFRpdGxlIiwiaW1hZ2VMaXN0Iiwic2V0aW1hZ2VMaXN0Iiwia2V5IiwicHJvY2VzcyIsInVzZUVmZmVjdCIsImZldGNoSW1hZ2UiLCJ0aGVuIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQ3JCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEcUIsTUFFUEMsVUFGTyxHQUVNRixNQUZOLENBRWRHLEtBRmMsQ0FFUEQsVUFGTzs7QUFBQSwwQkFJcUNFLDRDQUFLLENBQUNDLFVBQU4sQ0FBaUJDLHNFQUFqQixDQUpyQztBQUFBLE1BSWRDLEtBSmMscUJBSWRBLEtBSmM7QUFBQSxNQUlSQyxTQUpRLHFCQUlSQSxTQUpRO0FBQUEsTUFJRUMsUUFKRixxQkFJRUEsUUFKRjtBQUFBLE1BSVdDLFNBSlgscUJBSVdBLFNBSlg7QUFBQSxNQUlxQkMsWUFKckIscUJBSXFCQSxZQUpyQjs7QUFLckIsTUFBTUMsR0FBRyxHQUFDQyw2Q0FBVjtBQUNBVCw4Q0FBSyxDQUFDVSxTQUFOLENBQWdCLFlBQUk7QUFDakIsUUFBR1osVUFBSCxFQUFjO0FBQ2JNLGVBQVMsQ0FBQ04sVUFBRCxDQUFUO0FBQ0FhLHVFQUFVLGdEQUF5Q2IsVUFBekMsT0FBVixDQUNDYyxJQURELENBQ00sVUFBQUMsR0FBRyxFQUFFO0FBQ1BSLGdCQUFRLENBQUNRLEdBQUcsQ0FBQ1YsS0FBTCxDQUFSO0FBQ0gsT0FIRDtBQUlBUSx1RUFBVSxnREFBeUNiLFVBQXpDLGNBQVYsQ0FDQ2MsSUFERCxDQUNNLFVBQUFDLEdBQUcsRUFBRTtBQUNQTixvQkFBWSxDQUFDTSxHQUFELENBQVo7QUFDSCxPQUhEO0FBSUE7QUFFSCxHQWJELEVBYUUsQ0FBQ2YsVUFBRCxDQWJGO0FBY0EsU0FDSSw4RUFBQyxnRUFBRDtBQUFBLGVBQ0k7QUFBSSxlQUFTLEVBQUMsNEJBQWQ7QUFBQSxnQkFDR0s7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosRUFJRztBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBLGdCQUNDO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsa0JBQ0csOEVBQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFZSCxDQWhDRDs7R0FBTVIsVTtVQUNhRSxxRDs7O0tBRGJGLFU7QUFrQ1NBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbGxlY3Rpb24vW2NvbGxlY3Rpb25dLmY0ODZiNTMwNjU3ZjZmZjczOGUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvaW5kZXgnXHJcbmltcG9ydCB7IEZ1bmN0aW9uYWxzQ29udGVudCB9IGZyb20gJy4uLy4uL2NvbnRleHQvY29udGV4dEFwaSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBNYW5zb3J5TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9tYW5zb3J5TGlzdCdcclxuaW1wb3J0IHtmZXRjaEltYWdlfSBmcm9tICcuLi9oZWxwZXJzL2ZldGNoJ1xyXG5cclxuY29uc3QgQ29sbGVjdGlvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB7cXVlcnk6e2NvbGxlY3Rpb259fT1yb3V0ZXJcclxuICAgXHJcbiAgICBjb25zdCB7dGl0bGUsc2V0U2VsZWN0LHNldFRpdGxlLGltYWdlTGlzdCxzZXRpbWFnZUxpc3R9ID0gUmVhY3QudXNlQ29udGV4dChGdW5jdGlvbmFsc0NvbnRlbnQpXHJcbiAgICBjb25zdCBrZXk9cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQUNDRVNTX0tFWVxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICBpZihjb2xsZWN0aW9uKXtcclxuICAgICAgICBzZXRTZWxlY3QoY29sbGVjdGlvbikgXHJcbiAgICAgICAgZmV0Y2hJbWFnZShgaHR0cHM6Ly9hcGkudW5zcGxhc2guY29tL2NvbGxlY3Rpb25zLyR7Y29sbGVjdGlvbn0/YClcclxuICAgICAgICAudGhlbihyZXM9PnsgIFxyXG4gICAgICAgICAgICBzZXRUaXRsZShyZXMudGl0bGUpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBmZXRjaEltYWdlKGBodHRwczovL2FwaS51bnNwbGFzaC5jb20vY29sbGVjdGlvbnMvJHtjb2xsZWN0aW9ufS9waG90b3M/YClcclxuICAgICAgICAudGhlbihyZXM9PntcclxuICAgICAgICAgICAgc2V0aW1hZ2VMaXN0KHJlcylcclxuICAgICAgICB9KVxyXG4gICAgICAgfVxyXG5cclxuICAgIH0sW2NvbGxlY3Rpb25dKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItNSB0ZXh0LWNlbnRlciBkaXNwbGF5LTRcIj5cclxuICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMCBjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgPE1hbnNvcnlMaXN0Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbGxlY3Rpb25cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==