webpackHotUpdate_N_E("pages/_app",{

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

 // import firebase from '../config/firebase'

var FunctionalsContent = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();

var FunctionalsProvider = function FunctionalsProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("Loading..."),
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

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),
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
    columnNumber: 5
  }, _this);
};

_s(FunctionalsProvider, "BQz7bB/3X37Bxdae2+TiH/PhvmE=");

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

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./style/global.css":
/*!**************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./style/global.css ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html,\nbody {\n  overflow-x: hidden;\n}\n.my-masonry-grid { /* Not needed if autoprefixing */ /* Not needed if autoprefixing */\n  display: flex;\n  margin-left: -30px; /* gutter size offset */\n  width: auto;\n}\n.my-masonry-grid_column {\n  padding-left: 30px; /* gutter size */\n  background-clip: padding-box;\n}\n\n/* Style your items */\n.my-masonry-grid_column > div {\n  /* change div to reference your elements you put in <Masonry> */\n  background: grey;\n  margin-bottom: 30px;\n}\n", "",{"version":3,"sources":["webpack://style/global.css"],"names":[],"mappings":"AAAA;;EAEE,kBAAkB;AACpB;AACA,mBACwB,gCAAgC,EAChC,gCAAgC;EACtD,aAAa;EACb,kBAAkB,EAAE,uBAAuB;EAC3C,WAAW;AACb;AACA;EACE,kBAAkB,EAAE,gBAAgB;EACpC,4BAA4B;AAC9B;;AAEA,qBAAqB;AACrB;EACE,+DAA+D;EAC/D,gBAAgB;EAChB,mBAAmB;AACrB","sourcesContent":["html,\nbody {\n  overflow-x: hidden;\n}\n.my-masonry-grid {\n  display: -webkit-box; /* Not needed if autoprefixing */\n  display: -ms-flexbox; /* Not needed if autoprefixing */\n  display: flex;\n  margin-left: -30px; /* gutter size offset */\n  width: auto;\n}\n.my-masonry-grid_column {\n  padding-left: 30px; /* gutter size */\n  background-clip: padding-box;\n}\n\n/* Style your items */\n.my-masonry-grid_column > div {\n  /* change div to reference your elements you put in <Masonry> */\n  background: grey;\n  margin-bottom: 30px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var C_wamp64_www_js_next_gallery_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/swiper.scss */ "./node_modules/swiper/swiper.scss");
/* harmony import */ var swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_components_navigation_navigation_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/components/navigation/navigation.scss */ "./node_modules/swiper/components/navigation/navigation.scss");
/* harmony import */ var swiper_components_navigation_navigation_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_components_navigation_navigation_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper_components_pagination_pagination_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/components/pagination/pagination.scss */ "./node_modules/swiper/components/pagination/pagination.scss");
/* harmony import */ var swiper_components_pagination_pagination_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_components_pagination_pagination_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper_components_scrollbar_scrollbar_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/components/scrollbar/scrollbar.scss */ "./node_modules/swiper/components/scrollbar/scrollbar.scss");
/* harmony import */ var swiper_components_scrollbar_scrollbar_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_components_scrollbar_scrollbar_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/scss/bootstrap.scss */ "./node_modules/bootstrap/scss/bootstrap.scss");
/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap-icons/font/bootstrap-icons.css */ "./node_modules/bootstrap-icons/font/bootstrap-icons.css");
/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _style_global_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../style/global.css */ "./style/global.css");
/* harmony import */ var _style_global_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_global_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _context_contextApi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../context/contextApi */ "./context/contextApi.js");


var _jsxFileName = "C:\\wamp64\\www\\js\\next-gallery\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_wamp64_www_js_next_gallery_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_context_contextApi__WEBPACK_IMPORTED_MODULE_10__["default"], {
    children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
_c = MyApp;

var _c;

$RefreshReg$(_c, "MyApp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9jb250ZXh0QXBpLmpzIiwid2VicGFjazovL19OX0UvLi9zdHlsZS9nbG9iYWwuY3NzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbIkZ1bmN0aW9uYWxzQ29udGVudCIsImNyZWF0ZUNvbnRleHQiLCJGdW5jdGlvbmFsc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsInRpdGxlIiwic2V0VGl0bGUiLCJSZWFjdCIsImxpc3QiLCJzZXRMaXN0Iiwic2VsZWN0Iiwic2V0U2VsZWN0IiwiaW1hZ2VMaXN0Iiwic2V0aW1hZ2VMaXN0Iiwia2V5d29yZCIsInNldEtleXdvcmQiLCJwYWdlIiwic2V0UGFnZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUVPLElBQU1BLGtCQUFrQixnQkFBR0MsMkRBQWEsRUFBeEM7O0FBRVAsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxrQkFDbEJDLHNEQUFRLENBQUMsWUFBRCxDQURVO0FBQUEsTUFDckNDLEtBRHFDO0FBQUEsTUFDOUJDLFFBRDhCOztBQUFBLHdCQUVwQkMsNENBQUssQ0FBQ0gsUUFBTixFQUZvQjtBQUFBO0FBQUEsTUFFckNJLElBRnFDO0FBQUEsTUFFL0JDLE9BRitCOztBQUFBLHlCQUdoQkYsNENBQUssQ0FBQ0gsUUFBTixFQUhnQjtBQUFBO0FBQUEsTUFHckNNLE1BSHFDO0FBQUEsTUFHN0JDLFNBSDZCOztBQUFBLHlCQUlWSiw0Q0FBSyxDQUFDSCxRQUFOLEVBSlU7QUFBQTtBQUFBLE1BSXJDUSxTQUpxQztBQUFBLE1BSTFCQyxZQUowQjs7QUFBQSx5QkFLZE4sNENBQUssQ0FBQ0gsUUFBTixFQUxjO0FBQUE7QUFBQSxNQUtyQ1UsT0FMcUM7QUFBQSxNQUs1QkMsVUFMNEI7O0FBQUEseUJBTXBCUiw0Q0FBSyxDQUFDSCxRQUFOLENBQWUsQ0FBZixDQU5vQjtBQUFBO0FBQUEsTUFNckNZLElBTnFDO0FBQUEsTUFNL0JDLE9BTitCOztBQU81QyxTQUNFLDhFQUFDLGtCQUFELENBQW9CLFFBQXBCO0FBQ0UsU0FBSyxFQUFFO0FBQ0xaLFdBQUssRUFBTEEsS0FESztBQUVMQyxjQUFRLEVBQVJBLFFBRks7QUFHTEUsVUFBSSxFQUFKQSxJQUhLO0FBSUxDLGFBQU8sRUFBUEEsT0FKSztBQUtMQyxZQUFNLEVBQU5BLE1BTEs7QUFNTEMsZUFBUyxFQUFUQSxTQU5LO0FBT0xDLGVBQVMsRUFBVEEsU0FQSztBQVFMQyxrQkFBWSxFQUFaQSxZQVJLO0FBU0xDLGFBQU8sRUFBUEEsT0FUSztBQVVMQyxnQkFBVSxFQUFWQSxVQVZLO0FBV0xDLFVBQUksRUFBSkEsSUFYSztBQVlMQyxhQUFPLEVBQVBBO0FBWkssS0FEVDtBQUFBLGNBZ0JHZDtBQWhCSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQkQsQ0EzQkQ7O0dBQU1ELG1COztLQUFBQSxtQjtBQTRCU0Esa0ZBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFBQTtBQUFBO0FBQUE7QUFDK0Y7QUFDL0YsOEJBQThCLHlGQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLGdCQUFnQix1QkFBdUIsR0FBRyxvQkFBb0Isc0ZBQXNGLHVCQUF1Qix5Q0FBeUMsR0FBRywyQkFBMkIsdUJBQXVCLG1EQUFtRCxHQUFHLDJEQUEyRCx5RkFBeUYsd0JBQXdCLEdBQUcsU0FBUyxrRkFBa0YsWUFBWSxNQUFNLGdDQUFnQyxXQUFXLHdCQUF3QixXQUFXLEtBQUssS0FBSyx3QkFBd0IsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSx1Q0FBdUMsdUJBQXVCLEdBQUcsb0JBQW9CLHlCQUF5QiwyREFBMkQsb0RBQW9ELHVCQUF1Qix5Q0FBeUMsR0FBRywyQkFBMkIsdUJBQXVCLG1EQUFtRCxHQUFHLDJEQUEyRCx5RkFBeUYsd0JBQXdCLEdBQUcscUJBQXFCO0FBQzE0QztBQUNlLHNGQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU2dCLEtBQVQsT0FBeUM7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBQ3RELFNBQ0UsOEVBQUMsNERBQUQ7QUFBQSxjQUNFLDhFQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEO0tBTnVCRixLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNzExZTVkNWIxNGZlOTJlNDE5MDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IGZpcmViYXNlIGZyb20gJy4uL2NvbmZpZy9maXJlYmFzZSdcblxuZXhwb3J0IGNvbnN0IEZ1bmN0aW9uYWxzQ29udGVudCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuY29uc3QgRnVuY3Rpb25hbHNQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIkxvYWRpbmcuLi5cIik7XG4gIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IFJlYWN0LnVzZVN0YXRlKCk7XG4gIGNvbnN0IFtzZWxlY3QsIHNldFNlbGVjdF0gPSBSZWFjdC51c2VTdGF0ZSgpO1xuICBjb25zdCBbaW1hZ2VMaXN0LCBzZXRpbWFnZUxpc3RdID0gUmVhY3QudXNlU3RhdGUoKTtcbiAgY29uc3QgW2tleXdvcmQsIHNldEtleXdvcmRdID0gUmVhY3QudXNlU3RhdGUoKTtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIHJldHVybiAoXG4gICAgPEZ1bmN0aW9uYWxzQ29udGVudC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIHNldFRpdGxlLFxuICAgICAgICBsaXN0LFxuICAgICAgICBzZXRMaXN0LFxuICAgICAgICBzZWxlY3QsXG4gICAgICAgIHNldFNlbGVjdCxcbiAgICAgICAgaW1hZ2VMaXN0LFxuICAgICAgICBzZXRpbWFnZUxpc3QsXG4gICAgICAgIGtleXdvcmQsXG4gICAgICAgIHNldEtleXdvcmQsXG4gICAgICAgIHBhZ2UsXG4gICAgICAgIHNldFBhZ2UsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0Z1bmN0aW9uYWxzQ29udGVudC5Qcm92aWRlcj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBGdW5jdGlvbmFsc1Byb3ZpZGVyO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxcXG5ib2R5IHtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuLm15LW1hc29ucnktZ3JpZCB7IC8qIE5vdCBuZWVkZWQgaWYgYXV0b3ByZWZpeGluZyAqLyAvKiBOb3QgbmVlZGVkIGlmIGF1dG9wcmVmaXhpbmcgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tbGVmdDogLTMwcHg7IC8qIGd1dHRlciBzaXplIG9mZnNldCAqL1xcbiAgd2lkdGg6IGF1dG87XFxufVxcbi5teS1tYXNvbnJ5LWdyaWRfY29sdW1uIHtcXG4gIHBhZGRpbmctbGVmdDogMzBweDsgLyogZ3V0dGVyIHNpemUgKi9cXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxufVxcblxcbi8qIFN0eWxlIHlvdXIgaXRlbXMgKi9cXG4ubXktbWFzb25yeS1ncmlkX2NvbHVtbiA+IGRpdiB7XFxuICAvKiBjaGFuZ2UgZGl2IHRvIHJlZmVyZW5jZSB5b3VyIGVsZW1lbnRzIHlvdSBwdXQgaW4gPE1hc29ucnk+ICovXFxuICBiYWNrZ3JvdW5kOiBncmV5O1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlL2dsb2JhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUsa0JBQWtCO0FBQ3BCO0FBQ0EsbUJBQ3dCLGdDQUFnQyxFQUNoQyxnQ0FBZ0M7RUFDdEQsYUFBYTtFQUNiLGtCQUFrQixFQUFFLHVCQUF1QjtFQUMzQyxXQUFXO0FBQ2I7QUFDQTtFQUNFLGtCQUFrQixFQUFFLGdCQUFnQjtFQUNwQyw0QkFBNEI7QUFDOUI7O0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0UsK0RBQStEO0VBQy9ELGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCxcXG5ib2R5IHtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuLm15LW1hc29ucnktZ3JpZCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDsgLyogTm90IG5lZWRlZCBpZiBhdXRvcHJlZml4aW5nICovXFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDsgLyogTm90IG5lZWRlZCBpZiBhdXRvcHJlZml4aW5nICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWxlZnQ6IC0zMHB4OyAvKiBndXR0ZXIgc2l6ZSBvZmZzZXQgKi9cXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG4ubXktbWFzb25yeS1ncmlkX2NvbHVtbiB7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7IC8qIGd1dHRlciBzaXplICovXFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbn1cXG5cXG4vKiBTdHlsZSB5b3VyIGl0ZW1zICovXFxuLm15LW1hc29ucnktZ3JpZF9jb2x1bW4gPiBkaXYge1xcbiAgLyogY2hhbmdlIGRpdiB0byByZWZlcmVuY2UgeW91ciBlbGVtZW50cyB5b3UgcHV0IGluIDxNYXNvbnJ5PiAqL1xcbiAgYmFja2dyb3VuZDogZ3JleTtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCJzd2lwZXIvc3dpcGVyLnNjc3NcIjtcbmltcG9ydCBcInN3aXBlci9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5zY3NzXCI7XG5pbXBvcnQgXCJzd2lwZXIvY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uc2Nzc1wiO1xuaW1wb3J0IFwic3dpcGVyL2NvbXBvbmVudHMvc2Nyb2xsYmFyL3Njcm9sbGJhci5zY3NzXCI7XG5pbXBvcnQgXCJib290c3RyYXAvc2Nzcy9ib290c3RyYXAuc2Nzc1wiO1xuaW1wb3J0IFwiYm9vdHN0cmFwLWljb25zL2ZvbnQvYm9vdHN0cmFwLWljb25zLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGUvZ2xvYmFsLmNzc1wiO1xuXG5pbXBvcnQgRnVuY3Rpb25hbHNQcm92aWRlciBmcm9tIFwiLi4vY29udGV4dC9jb250ZXh0QXBpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxGdW5jdGlvbmFsc1Byb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvRnVuY3Rpb25hbHNQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=