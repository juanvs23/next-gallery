webpackHotUpdate_N_E("pages/index",{

/***/ "./context/contextApi.js":
/*!*******************************!*\
  !*** ./context/contextApi.js ***!
  \*******************************/
/*! exports provided: FunctionalsContent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionalsContent", function() { return FunctionalsContent; });
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var C_wamp64_www_js_next_gallery_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "C:\\wamp64\\www\\js\\next-gallery\\context\\contextApi.js",
    _this = undefined,
    _s = $RefreshSig$();

 //import firebase from '../config/firebase'

var FunctionalsContent = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();

var FunctionalsProvider = function FunctionalsProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('home'),
      title = _useState[0],
      setTitle = _useState[1];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(),
      _React$useState2 = Object(C_wamp64_www_js_next_gallery_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      list = _React$useState2[0],
      setList = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(),
      _React$useState4 = Object(C_wamp64_www_js_next_gallery_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      select = _React$useState4[0],
      setSelect = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(),
      _React$useState6 = Object(C_wamp64_www_js_next_gallery_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      imageList = _React$useState6[0],
      setimageList = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(),
      _React$useState8 = Object(C_wamp64_www_js_next_gallery_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState7, 2),
      keyword = _React$useState8[0],
      setKeyword = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(1),
      _React$useState10 = Object(C_wamp64_www_js_next_gallery_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState9, 2),
      page = _React$useState10[0],
      setPage = _React$useState10[1];

  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FunctionalsContent.Provider, {
    value: {
      title: title,
      setTitle: setTitle,
      list: list,
      setList: setList,
      select: select,
      setSelect: setSelect,
      imageList: imageList,
      setimageList: setimageList,
      keyword: keyword,
      setKeyword: setKeyword,
      page: page,
      setPage: setPage
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, _this);
};

_s(FunctionalsProvider, "WZ9kX2NgqSrH9IL4R2h8Ht7Y4hQ=");

_c = FunctionalsProvider;
/* harmony default export */ __webpack_exports__["default"] = (FunctionalsProvider);

var _c;

$RefreshReg$(_c, "FunctionalsProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9jb250ZXh0QXBpLmpzIl0sIm5hbWVzIjpbIkZ1bmN0aW9uYWxzQ29udGVudCIsImNyZWF0ZUNvbnRleHQiLCJGdW5jdGlvbmFsc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsInRpdGxlIiwic2V0VGl0bGUiLCJSZWFjdCIsImxpc3QiLCJzZXRMaXN0Iiwic2VsZWN0Iiwic2V0U2VsZWN0IiwiaW1hZ2VMaXN0Iiwic2V0aW1hZ2VMaXN0Iiwia2V5d29yZCIsInNldEtleXdvcmQiLCJwYWdlIiwic2V0UGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFFTyxJQUFNQSxrQkFBa0IsZ0JBQUVDLDJEQUFhLEVBQXZDOztBQUVQLElBQU1DLG1CQUFtQixHQUFDLFNBQXBCQSxtQkFBb0IsT0FBYztBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFBQSxrQkFDZEMsc0RBQVEsQ0FBQyxNQUFELENBRE07QUFBQSxNQUM5QkMsS0FEOEI7QUFBQSxNQUN4QkMsUUFEd0I7O0FBQUEsd0JBRWhCQyw0Q0FBSyxDQUFDSCxRQUFOLEVBRmdCO0FBQUE7QUFBQSxNQUU5QkksSUFGOEI7QUFBQSxNQUV6QkMsT0FGeUI7O0FBQUEseUJBR1pGLDRDQUFLLENBQUNILFFBQU4sRUFIWTtBQUFBO0FBQUEsTUFHOUJNLE1BSDhCO0FBQUEsTUFHdkJDLFNBSHVCOztBQUFBLHlCQUlOSiw0Q0FBSyxDQUFDSCxRQUFOLEVBSk07QUFBQTtBQUFBLE1BSTlCUSxTQUo4QjtBQUFBLE1BSXBCQyxZQUpvQjs7QUFBQSx5QkFLVk4sNENBQUssQ0FBQ0gsUUFBTixFQUxVO0FBQUE7QUFBQSxNQUs5QlUsT0FMOEI7QUFBQSxNQUt0QkMsVUFMc0I7O0FBQUEseUJBTWhCUiw0Q0FBSyxDQUFDSCxRQUFOLENBQWUsQ0FBZixDQU5nQjtBQUFBO0FBQUEsTUFNOUJZLElBTjhCO0FBQUEsTUFNekJDLE9BTnlCOztBQU9oQyxTQUNBLDhFQUFDLGtCQUFELENBQW9CLFFBQXBCO0FBQ0ksU0FBSyxFQUFFO0FBQ0haLFdBQUssRUFBTEEsS0FERztBQUNHQyxjQUFRLEVBQVJBLFFBREg7QUFFSEUsVUFBSSxFQUFKQSxJQUZHO0FBRUVDLGFBQU8sRUFBUEEsT0FGRjtBQUdIQyxZQUFNLEVBQU5BLE1BSEc7QUFHSUMsZUFBUyxFQUFUQSxTQUhKO0FBSUhDLGVBQVMsRUFBVEEsU0FKRztBQUlPQyxrQkFBWSxFQUFaQSxZQUpQO0FBS0hDLGFBQU8sRUFBUEEsT0FMRztBQUtLQyxnQkFBVSxFQUFWQSxVQUxMO0FBTUhDLFVBQUksRUFBSkEsSUFORztBQU1FQyxhQUFPLEVBQVBBO0FBTkYsS0FEWDtBQUFBLGNBVUtkO0FBVkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURBO0FBYVAsQ0FwQkQ7O0dBQU1ELG1COztLQUFBQSxtQjtBQXFCU0Esa0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjcyODFjNWI2Nzk5YTVmMzFiZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG4vL2ltcG9ydCBmaXJlYmFzZSBmcm9tICcuLi9jb25maWcvZmlyZWJhc2UnXHJcblxyXG5leHBvcnQgY29uc3QgRnVuY3Rpb25hbHNDb250ZW50ID1jcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBGdW5jdGlvbmFsc1Byb3ZpZGVyPSh7Y2hpbGRyZW59KT0+e1xyXG4gICBjb25zdCBbdGl0bGUsc2V0VGl0bGVdPXVzZVN0YXRlKCdob21lJyk7XHJcbiAgIGNvbnN0IFtsaXN0LHNldExpc3RdPVJlYWN0LnVzZVN0YXRlKClcclxuICAgY29uc3QgW3NlbGVjdCxzZXRTZWxlY3RdPVJlYWN0LnVzZVN0YXRlKClcclxuICAgY29uc3QgW2ltYWdlTGlzdCxzZXRpbWFnZUxpc3RdPVJlYWN0LnVzZVN0YXRlKClcclxuICAgY29uc3QgW2tleXdvcmQsc2V0S2V5d29yZF09UmVhY3QudXNlU3RhdGUoKVxyXG4gICBjb25zdCBbcGFnZSxzZXRQYWdlXT1SZWFjdC51c2VTdGF0ZSgxKVxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICA8RnVuY3Rpb25hbHNDb250ZW50LlByb3ZpZGVyXHJcbiAgICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgICAgICB0aXRsZSxzZXRUaXRsZSxcclxuICAgICAgICAgICAgICAgIGxpc3Qsc2V0TGlzdCxcclxuICAgICAgICAgICAgICAgIHNlbGVjdCxzZXRTZWxlY3QsXHJcbiAgICAgICAgICAgICAgICBpbWFnZUxpc3Qsc2V0aW1hZ2VMaXN0LFxyXG4gICAgICAgICAgICAgICAga2V5d29yZCxzZXRLZXl3b3JkLFxyXG4gICAgICAgICAgICAgICAgcGFnZSxzZXRQYWdlXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9GdW5jdGlvbmFsc0NvbnRlbnQuUHJvdmlkZXI+KVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZ1bmN0aW9uYWxzUHJvdmlkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==