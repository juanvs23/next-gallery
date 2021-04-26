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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29sbGVjdGlvbi9bY29sbGVjdGlvbl0uanN4Il0sIm5hbWVzIjpbIkNvbGxlY3Rpb24iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb2xsZWN0aW9uIiwicXVlcnkiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJGdW5jdGlvbmFsc0NvbnRlbnQiLCJ0aXRsZSIsInNldFNlbGVjdCIsInNldFRpdGxlIiwiaW1hZ2VMaXN0Iiwic2V0aW1hZ2VMaXN0IiwidXNlRWZmZWN0IiwiZmV0Y2hJbWFnZSIsInRoZW4iLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFDckIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQURxQixNQUVQQyxVQUZPLEdBRU1GLE1BRk4sQ0FFZEcsS0FGYyxDQUVQRCxVQUZPOztBQUFBLDBCQUlxQ0UsNENBQUssQ0FBQ0MsVUFBTixDQUFpQkMsc0VBQWpCLENBSnJDO0FBQUEsTUFJZEMsS0FKYyxxQkFJZEEsS0FKYztBQUFBLE1BSVJDLFNBSlEscUJBSVJBLFNBSlE7QUFBQSxNQUlFQyxRQUpGLHFCQUlFQSxRQUpGO0FBQUEsTUFJV0MsU0FKWCxxQkFJV0EsU0FKWDtBQUFBLE1BSXFCQyxZQUpyQixxQkFJcUJBLFlBSnJCOztBQU1yQlAsOENBQUssQ0FBQ1EsU0FBTixDQUFnQixZQUFJO0FBQ2pCLFFBQUdWLFVBQUgsRUFBYztBQUNiTSxlQUFTLENBQUNOLFVBQUQsQ0FBVDtBQUNBVyx1RUFBVSxnREFBeUNYLFVBQXpDLE9BQVYsQ0FDQ1ksSUFERCxDQUNNLFVBQUFDLEdBQUcsRUFBRTtBQUNQTixnQkFBUSxDQUFDTSxHQUFHLENBQUNSLEtBQUwsQ0FBUjtBQUNILE9BSEQ7QUFJQU0sdUVBQVUsZ0RBQXlDWCxVQUF6QyxjQUFWLENBQ0NZLElBREQsQ0FDTSxVQUFBQyxHQUFHLEVBQUU7QUFDUEosb0JBQVksQ0FBQ0ksR0FBRCxDQUFaO0FBQ0gsT0FIRDtBQUlBO0FBRUgsR0FiRCxFQWFFLENBQUNiLFVBQUQsQ0FiRjtBQWNBLFNBQ0ksOEVBQUMsZ0VBQUQ7QUFBQSxlQUNJO0FBQUksZUFBUyxFQUFDLDRCQUFkO0FBQUEsZ0JBQ0dLO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBSUc7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBQSxnQkFDQztBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLGtCQUNHLDhFQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBWUgsQ0FoQ0Q7O0dBQU1SLFU7VUFDYUUscUQ7OztLQURiRixVO0FBa0NTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb2xsZWN0aW9uL1tjb2xsZWN0aW9uXS4yOTI3YTI5YjRhN2FjNTkwYjhiMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4J1xyXG5pbXBvcnQgeyBGdW5jdGlvbmFsc0NvbnRlbnQgfSBmcm9tICcuLi8uLi9jb250ZXh0L2NvbnRleHRBcGknXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTWFuc29yeUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvbWFuc29yeUxpc3QnXHJcbmltcG9ydCB7ZmV0Y2hJbWFnZX0gZnJvbSAnLi4vaGVscGVycy9mZXRjaCdcclxuXHJcbmNvbnN0IENvbGxlY3Rpb24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3Qge3F1ZXJ5Ontjb2xsZWN0aW9ufX09cm91dGVyXHJcbiAgIFxyXG4gICAgY29uc3Qge3RpdGxlLHNldFNlbGVjdCxzZXRUaXRsZSxpbWFnZUxpc3Qsc2V0aW1hZ2VMaXN0fSA9IFJlYWN0LnVzZUNvbnRleHQoRnVuY3Rpb25hbHNDb250ZW50KVxyXG4gICAgXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgIGlmKGNvbGxlY3Rpb24pe1xyXG4gICAgICAgIHNldFNlbGVjdChjb2xsZWN0aW9uKSBcclxuICAgICAgICBmZXRjaEltYWdlKGBodHRwczovL2FwaS51bnNwbGFzaC5jb20vY29sbGVjdGlvbnMvJHtjb2xsZWN0aW9ufT9gKVxyXG4gICAgICAgIC50aGVuKHJlcz0+eyAgXHJcbiAgICAgICAgICAgIHNldFRpdGxlKHJlcy50aXRsZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIGZldGNoSW1hZ2UoYGh0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS9jb2xsZWN0aW9ucy8ke2NvbGxlY3Rpb259L3Bob3Rvcz9gKVxyXG4gICAgICAgIC50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICBzZXRpbWFnZUxpc3QocmVzKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICB9XHJcblxyXG4gICAgfSxbY29sbGVjdGlvbl0pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi01IHRleHQtY2VudGVyIGRpc3BsYXktNFwiPlxyXG4gICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0wIGNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICA8TWFuc29yeUxpc3QvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29sbGVjdGlvblxyXG4iXSwic291cmNlUm9vdCI6IiJ9