webpackHotUpdate_N_E("pages/collection/[collection]",{

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

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(),
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

_s(FunctionalsProvider, "j1p/JELO29oWIIIbc6S5qPXa69w=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9jb250ZXh0QXBpLmpzIl0sIm5hbWVzIjpbIkZ1bmN0aW9uYWxzQ29udGVudCIsImNyZWF0ZUNvbnRleHQiLCJGdW5jdGlvbmFsc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsInRpdGxlIiwic2V0VGl0bGUiLCJSZWFjdCIsImxpc3QiLCJzZXRMaXN0Iiwic2VsZWN0Iiwic2V0U2VsZWN0IiwiaW1hZ2VMaXN0Iiwic2V0aW1hZ2VMaXN0Iiwia2V5d29yZCIsInNldEtleXdvcmQiLCJwYWdlIiwic2V0UGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFFTyxJQUFNQSxrQkFBa0IsZ0JBQUVDLDJEQUFhLEVBQXZDOztBQUVQLElBQU1DLG1CQUFtQixHQUFDLFNBQXBCQSxtQkFBb0IsT0FBYztBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFBQSxrQkFDZEMsc0RBQVEsQ0FBQyxNQUFELENBRE07QUFBQSxNQUM5QkMsS0FEOEI7QUFBQSxNQUN4QkMsUUFEd0I7O0FBQUEsd0JBRWhCQyw0Q0FBSyxDQUFDSCxRQUFOLEVBRmdCO0FBQUE7QUFBQSxNQUU5QkksSUFGOEI7QUFBQSxNQUV6QkMsT0FGeUI7O0FBQUEseUJBR1pGLDRDQUFLLENBQUNILFFBQU4sRUFIWTtBQUFBO0FBQUEsTUFHOUJNLE1BSDhCO0FBQUEsTUFHdkJDLFNBSHVCOztBQUFBLHlCQUlOSiw0Q0FBSyxDQUFDSCxRQUFOLEVBSk07QUFBQTtBQUFBLE1BSTlCUSxTQUo4QjtBQUFBLE1BSXBCQyxZQUpvQjs7QUFBQSx5QkFLVk4sNENBQUssQ0FBQ0gsUUFBTixFQUxVO0FBQUE7QUFBQSxNQUs5QlUsT0FMOEI7QUFBQSxNQUt0QkMsVUFMc0I7O0FBQUEseUJBTWhCUiw0Q0FBSyxDQUFDSCxRQUFOLEVBTmdCO0FBQUE7QUFBQSxNQU05QlksSUFOOEI7QUFBQSxNQU16QkMsT0FOeUI7O0FBT2hDLFNBQ0EsOEVBQUMsa0JBQUQsQ0FBb0IsUUFBcEI7QUFDSSxTQUFLLEVBQUU7QUFDSFosV0FBSyxFQUFMQSxLQURHO0FBQ0dDLGNBQVEsRUFBUkEsUUFESDtBQUVIRSxVQUFJLEVBQUpBLElBRkc7QUFFRUMsYUFBTyxFQUFQQSxPQUZGO0FBR0hDLFlBQU0sRUFBTkEsTUFIRztBQUdJQyxlQUFTLEVBQVRBLFNBSEo7QUFJSEMsZUFBUyxFQUFUQSxTQUpHO0FBSU9DLGtCQUFZLEVBQVpBLFlBSlA7QUFLSEMsYUFBTyxFQUFQQSxPQUxHO0FBS0tDLGdCQUFVLEVBQVZBLFVBTEw7QUFNSEMsVUFBSSxFQUFKQSxJQU5HO0FBTUVDLGFBQU8sRUFBUEE7QUFORixLQURYO0FBQUEsY0FVS2Q7QUFWTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREE7QUFhUCxDQXBCRDs7R0FBTUQsbUI7O0tBQUFBLG1CO0FBcUJTQSxrRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb2xsZWN0aW9uL1tjb2xsZWN0aW9uXS42Y2MzNzc0ZTZkNmI4OTM4NTA1MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbi8vaW1wb3J0IGZpcmViYXNlIGZyb20gJy4uL2NvbmZpZy9maXJlYmFzZSdcclxuXHJcbmV4cG9ydCBjb25zdCBGdW5jdGlvbmFsc0NvbnRlbnQgPWNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IEZ1bmN0aW9uYWxzUHJvdmlkZXI9KHtjaGlsZHJlbn0pPT57XHJcbiAgIGNvbnN0IFt0aXRsZSxzZXRUaXRsZV09dXNlU3RhdGUoJ2hvbWUnKTtcclxuICAgY29uc3QgW2xpc3Qsc2V0TGlzdF09UmVhY3QudXNlU3RhdGUoKVxyXG4gICBjb25zdCBbc2VsZWN0LHNldFNlbGVjdF09UmVhY3QudXNlU3RhdGUoKVxyXG4gICBjb25zdCBbaW1hZ2VMaXN0LHNldGltYWdlTGlzdF09UmVhY3QudXNlU3RhdGUoKVxyXG4gICBjb25zdCBba2V5d29yZCxzZXRLZXl3b3JkXT1SZWFjdC51c2VTdGF0ZSgpXHJcbiAgIGNvbnN0IFtwYWdlLHNldFBhZ2VdPVJlYWN0LnVzZVN0YXRlKClcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgPEZ1bmN0aW9uYWxzQ29udGVudC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgdGl0bGUsc2V0VGl0bGUsXHJcbiAgICAgICAgICAgICAgICBsaXN0LHNldExpc3QsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Qsc2V0U2VsZWN0LFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VMaXN0LHNldGltYWdlTGlzdCxcclxuICAgICAgICAgICAgICAgIGtleXdvcmQsc2V0S2V5d29yZCxcclxuICAgICAgICAgICAgICAgIHBhZ2Usc2V0UGFnZVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvRnVuY3Rpb25hbHNDb250ZW50LlByb3ZpZGVyPilcclxufVxyXG5leHBvcnQgZGVmYXVsdCBGdW5jdGlvbmFsc1Byb3ZpZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=