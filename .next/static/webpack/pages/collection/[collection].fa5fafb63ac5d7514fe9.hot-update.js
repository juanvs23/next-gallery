webpackHotUpdate_N_E("pages/collection/[collection]",{

/***/ "./pages/components/layout/mansoryList.jsx":
/*!*************************************************!*\
  !*** ./pages/components/layout/mansoryList.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_contextApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../context/contextApi */ "./context/contextApi.js");
/* harmony import */ var react_masonry_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-masonry-css */ "./node_modules/react-masonry-css/dist/react-masonry-css.module.js");
/* harmony import */ var _itemimage_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../itemimage/index */ "./pages/components/itemimage/index.jsx");


var _jsxFileName = "C:\\wamp64\\www\\js\\next-gallery\\pages\\components\\layout\\mansoryList.jsx",
    _this = undefined,
    _s = $RefreshSig$();






var MansoryList = function MansoryList() {
  _s();

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_context_contextApi__WEBPACK_IMPORTED_MODULE_2__["FunctionalsContent"]),
      imageList = _React$useContext.imageList,
      setimageList = _React$useContext.setimageList,
      keyword = _React$useContext.keyword,
      setKeyword = _React$useContext.setKeyword;

  var breakpointColumnsObj = {
    "default": 4,
    1300: 3,
    992: 2,
    767: 1
  };

  if (imageList) {
    return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_masonry_css__WEBPACK_IMPORTED_MODULE_3__["default"], {
      breakpointCols: breakpointColumnsObj,
      className: "my-masonry-grid",
      columnClassName: "my-masonry-grid_column",
      children: imageList.map(function (image, i) {
        return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_itemimage_index__WEBPACK_IMPORTED_MODULE_4__["default"], {
          image: image,
          url: 'collection'
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }, _this);
  } else {
    return null;
  }
};

_s(MansoryList, "igGYdXCWH8GJDH8DI3u9RoHQOYc=");

_c = MansoryList;
/* harmony default export */ __webpack_exports__["default"] = (MansoryList);

var _c;

$RefreshReg$(_c, "MansoryList");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9sYXlvdXQvbWFuc29yeUxpc3QuanN4Il0sIm5hbWVzIjpbIk1hbnNvcnlMaXN0IiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwiRnVuY3Rpb25hbHNDb250ZW50IiwiaW1hZ2VMaXN0Iiwic2V0aW1hZ2VMaXN0Iiwia2V5d29yZCIsInNldEtleXdvcmQiLCJicmVha3BvaW50Q29sdW1uc09iaiIsIm1hcCIsImltYWdlIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsMEJBQzhCQyw0Q0FBSyxDQUFDQyxVQUFOLENBQWlCQyxzRUFBakIsQ0FEOUI7QUFBQSxNQUNmQyxTQURlLHFCQUNmQSxTQURlO0FBQUEsTUFDTEMsWUFESyxxQkFDTEEsWUFESztBQUFBLE1BQ1FDLE9BRFIscUJBQ1FBLE9BRFI7QUFBQSxNQUNnQkMsVUFEaEIscUJBQ2dCQSxVQURoQjs7QUFFdEIsTUFBTUMsb0JBQW9CLEdBQUc7QUFDekIsZUFBUyxDQURnQjtBQUV6QixVQUFNLENBRm1CO0FBR3pCLFNBQUssQ0FIb0I7QUFJekIsU0FBSztBQUpvQixHQUE3Qjs7QUFNQSxNQUFHSixTQUFILEVBQWE7QUFFVCxXQUNKLDhFQUFDLHlEQUFEO0FBQ0Esb0JBQWMsRUFBRUksb0JBRGhCO0FBRUYsZUFBUyxFQUFDLGlCQUZSO0FBR0YscUJBQWUsRUFBQyx3QkFIZDtBQUFBLGdCQUtNSixTQUFTLENBQUNLLEdBQVYsQ0FBYyxVQUFDQyxLQUFELEVBQU9DLENBQVAsRUFBVztBQUN0QixlQUFPLDhFQUFDLHdEQUFEO0FBQW9CLGVBQUssRUFBRUQsS0FBM0I7QUFBa0MsYUFBRyxFQUFFO0FBQXZDLFdBQWlCQyxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBQ0YsT0FGRDtBQUxOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESTtBQWFILEdBZkQsTUFlSztBQUNELFdBQU8sSUFBUDtBQUNIO0FBRUosQ0EzQkQ7O0dBQU1YLFc7O0tBQUFBLFc7QUE2QlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbGxlY3Rpb24vW2NvbGxlY3Rpb25dLmZhNWZhZmI2M2FjNWQ3NTE0ZmU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZ1bmN0aW9uYWxzQ29udGVudCB9IGZyb20gJy4uLy4uLy4uL2NvbnRleHQvY29udGV4dEFwaSdcclxuaW1wb3J0IE1hc29ucnkgZnJvbSAncmVhY3QtbWFzb25yeS1jc3MnXHJcbmltcG9ydCBJdGVtSW1hZ2UgZnJvbSAnLi4vaXRlbWltYWdlL2luZGV4J1xyXG5cclxuY29uc3QgTWFuc29yeUxpc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7aW1hZ2VMaXN0LHNldGltYWdlTGlzdCxrZXl3b3JkLHNldEtleXdvcmR9ID0gUmVhY3QudXNlQ29udGV4dChGdW5jdGlvbmFsc0NvbnRlbnQpXHJcbiAgICBjb25zdCBicmVha3BvaW50Q29sdW1uc09iaiA9IHtcclxuICAgICAgICBkZWZhdWx0OiA0LFxyXG4gICAgICAgIDEzMDA6IDMsXHJcbiAgICAgICAgOTkyOiAyLFxyXG4gICAgICAgIDc2NzogMVxyXG4gICAgICB9O1xyXG4gICAgaWYoaW1hZ2VMaXN0KXtcclxuICAgIFxyXG4gICAgICAgIHJldHVybihcclxuICAgIDxNYXNvbnJ5XHJcbiAgICBicmVha3BvaW50Q29scz17YnJlYWtwb2ludENvbHVtbnNPYmp9XHJcbiAgY2xhc3NOYW1lPVwibXktbWFzb25yeS1ncmlkXCJcclxuICBjb2x1bW5DbGFzc05hbWU9XCJteS1tYXNvbnJ5LWdyaWRfY29sdW1uXCJcclxuICAgID5cclxuICAgICAgICB7IGltYWdlTGlzdC5tYXAoKGltYWdlLGkpPT57XHJcbiAgICAgICAgICAgICByZXR1cm4gPEl0ZW1JbWFnZSAga2V5PXtpfSBpbWFnZT17aW1hZ2V9IHVybD17J2NvbGxlY3Rpb24nfSAvPlxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgfVxyXG4gICAgPC9NYXNvbnJ5PlxyXG4gICAgICAgIClcclxuXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFuc29yeUxpc3RcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==