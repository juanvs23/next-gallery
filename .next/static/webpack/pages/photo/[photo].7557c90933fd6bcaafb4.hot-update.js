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
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./pages/components/layout/index.js");
/* harmony import */ var _context_contextApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/contextApi */ "./context/contextApi.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/fetch */ "./pages/helpers/fetch.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "C:\\wamp64\\www\\js\\next-gallery\\pages\\photo\\[photo].jsx",
    _this = undefined,
    _s = $RefreshSig$();








var PhotoContainer = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__["default"])("section", false ? undefined : {
  target: "eo6czqm0",
  label: "PhotoContainer"
})("background:", function (props) {
  return props.bg;
}, ";min-height:40vh;" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx3YW1wNjRcXHd3d1xcanNcXG5leHQtZ2FsbGVyeVxccGFnZXNcXHBob3RvXFxbcGhvdG9dLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRbUMiLCJmaWxlIjoiQzpcXHdhbXA2NFxcd3d3XFxqc1xcbmV4dC1nYWxsZXJ5XFxwYWdlc1xccGhvdG9cXFtwaG90b10uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5pbXBvcnQgeyBGdW5jdGlvbmFsc0NvbnRlbnQgfSBmcm9tICcuLi8uLi9jb250ZXh0L2NvbnRleHRBcGknXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge2ZldGNoSW1hZ2V9IGZyb20gJy4uL2hlbHBlcnMvZmV0Y2gnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmNvbnN0IFBob3RvQ29udGFpbmVyPXN0eWxlZC5zZWN0aW9uYFxyXG5iYWNrZ3JvdW5kOiR7cHJvcHM9PnByb3BzLmJnfTtcclxubWluLWhlaWdodDo0MHZoO1xyXG5cclxuYFxyXG5cclxuY29uc3QgUGhvdG9QYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHtxdWVyeTp7cGhvdG99fT1yb3V0ZXJcclxuICAgY29uc29sZS5sb2cocGhvdG8pO1xyXG4gICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgIGZldGNoSW1hZ2UoYGh0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS9waG90b3MvJHtwaG90b30/YClcclxuICAgIC50aGVuKHJlcz0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgc2V0aW1hZ2VMaXN0KHJlcylcclxuICAgIH0pIFxyXG4gICB9LFtwaG90b10pXHJcbiAgIGNvbnN0IGxvYWRpbmdDb250ZW50PSgpPT57XHJcbiAgICAgaWYoaW1hZ2VMaXN0KXtcclxuICAgICAgIHJldHVybihcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8UGhvdG9Db250YWluZXIgYmc9e2ltYWdlTGlzdFswXS5jb2xvcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTdcIj48SW1hZ2Ugc3JjPXt1cmxzLmZ1bGx9Lz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvUGhvdG9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgKVxyXG4gICAgIH1lbHNle1xyXG4gICAgICAgIDxQaG90b0NvbnRhaW5lciBiZz17JyNmZmYnfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9QaG90b0NvbnRhaW5lcj5cclxuICAgICB9XHJcbiAgIH1cclxuICAgIGNvbnN0IHt0aXRsZSxzZXRTZWxlY3Qsc2V0VGl0bGUsaW1hZ2VMaXN0LHNldGltYWdlTGlzdH0gPSBSZWFjdC51c2VDb250ZXh0KEZ1bmN0aW9uYWxzQ29udGVudClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZ0NvbnRlbnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBob3RvUGFnZSJdfQ== */"));

var PhotoPage = function PhotoPage() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var photo = router.query.photo;
  console.log(photo);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    Object(_helpers_fetch__WEBPACK_IMPORTED_MODULE_6__["fetchImage"])("https://api.unsplash.com/photos/".concat(photo, "?")).then(function (res) {
      console.log(res);
      setimageList(res);
    });
  }, [photo]);

  var loadingContent = function loadingContent() {
    if (imageList) {
      return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PhotoContainer, {
        bg: imageList[0].color,
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "container",
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-lg-7",
              children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_7___default.a, {
                src: urls.full
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 51
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 25
            }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-lg-5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, _this);
    } else {
      Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PhotoContainer, {
        bg: '#fff',
        children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "container",
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this);
    }
  };

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(_context_contextApi__WEBPACK_IMPORTED_MODULE_4__["FunctionalsContent"]),
      title = _React$useContext.title,
      setSelect = _React$useContext.setSelect,
      setTitle = _React$useContext.setTitle,
      imageList = _React$useContext.imageList,
      setimageList = _React$useContext.setimageList;

  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: loadingContent
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 9
  }, _this);
};

_s(PhotoPage, "Nb8vtTdkfkMeW9EeIKqRhu2pDUk=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGhvdG8vW3Bob3RvXS5qc3giXSwibmFtZXMiOlsiUGhvdG9Db250YWluZXIiLCJwcm9wcyIsImJnIiwiUGhvdG9QYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwicGhvdG8iLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJSZWFjdCIsInVzZUVmZmVjdCIsImZldGNoSW1hZ2UiLCJ0aGVuIiwicmVzIiwic2V0aW1hZ2VMaXN0IiwibG9hZGluZ0NvbnRlbnQiLCJpbWFnZUxpc3QiLCJjb2xvciIsInVybHMiLCJmdWxsIiwidXNlQ29udGV4dCIsIkZ1bmN0aW9uYWxzQ29udGVudCIsInRpdGxlIiwic2V0U2VsZWN0Iiwic2V0VGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLGNBQWM7QUFBQTtBQUFBO0FBQUEsa0JBQ1AsVUFBQUMsS0FBSztBQUFBLFNBQUVBLEtBQUssQ0FBQ0MsRUFBUjtBQUFBLENBREUsZ3VGQUFwQjs7QUFNQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3BCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEb0IsTUFFTkMsS0FGTSxHQUVFRixNQUZGLENBRWJHLEtBRmEsQ0FFTkQsS0FGTTtBQUdyQkUsU0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7QUFDQUksOENBQUssQ0FBQ0MsU0FBTixDQUFnQixZQUFJO0FBQ25CQyxxRUFBVSwyQ0FBb0NOLEtBQXBDLE9BQVYsQ0FDQ08sSUFERCxDQUNNLFVBQUFDLEdBQUcsRUFBRTtBQUNQTixhQUFPLENBQUNDLEdBQVIsQ0FBWUssR0FBWjtBQUNBQyxrQkFBWSxDQUFDRCxHQUFELENBQVo7QUFDSCxLQUpEO0FBS0EsR0FORCxFQU1FLENBQUNSLEtBQUQsQ0FORjs7QUFPQSxNQUFNVSxjQUFjLEdBQUMsU0FBZkEsY0FBZSxHQUFJO0FBQ3ZCLFFBQUdDLFNBQUgsRUFBYTtBQUNYLGFBR1MsOEVBQUMsY0FBRDtBQUFnQixVQUFFLEVBQUVBLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYUMsS0FBakM7QUFBQSxrQkFDQTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLG9CQUNJO0FBQUsscUJBQVMsRUFBQyxLQUFmO0FBQUEsdUJBQ0k7QUFBSyx1QkFBUyxFQUFDLFVBQWY7QUFBQSx3QkFBMEIsOEVBQUMsaURBQUQ7QUFBTyxtQkFBRyxFQUFFQyxJQUFJLENBQUNDO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixFQUVJO0FBQUssdUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIVDtBQWNELEtBZkQsTUFlSztBQUNGLG9GQUFDLGNBQUQ7QUFBZ0IsVUFBRSxFQUFFLE1BQXBCO0FBQUEsa0JBQ0E7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxvQkFDSTtBQUFLLHFCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPRjtBQUNGLEdBekJEOztBQVhxQiwwQkFxQ3NDViw0Q0FBSyxDQUFDVyxVQUFOLENBQWlCQyxzRUFBakIsQ0FyQ3RDO0FBQUEsTUFxQ2JDLEtBckNhLHFCQXFDYkEsS0FyQ2E7QUFBQSxNQXFDUEMsU0FyQ08scUJBcUNQQSxTQXJDTztBQUFBLE1BcUNHQyxRQXJDSCxxQkFxQ0dBLFFBckNIO0FBQUEsTUFxQ1lSLFNBckNaLHFCQXFDWUEsU0FyQ1o7QUFBQSxNQXFDc0JGLFlBckN0QixxQkFxQ3NCQSxZQXJDdEI7O0FBc0NwQixTQUNJLDhFQUFDLDBEQUFEO0FBQUEsY0FFUUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFPSCxDQTdDRDs7R0FBTWIsUztVQUNhRSxxRDs7O0tBRGJGLFM7QUE4Q1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bob3RvL1twaG90b10uNzU1N2M5MDkzM2ZkNmJjYWFmYjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcclxuaW1wb3J0IHsgRnVuY3Rpb25hbHNDb250ZW50IH0gZnJvbSAnLi4vLi4vY29udGV4dC9jb250ZXh0QXBpJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHtmZXRjaEltYWdlfSBmcm9tICcuLi9oZWxwZXJzL2ZldGNoJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5jb25zdCBQaG90b0NvbnRhaW5lcj1zdHlsZWQuc2VjdGlvbmBcclxuYmFja2dyb3VuZDoke3Byb3BzPT5wcm9wcy5iZ307XHJcbm1pbi1oZWlnaHQ6NDB2aDtcclxuXHJcbmBcclxuXHJcbmNvbnN0IFBob3RvUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB7cXVlcnk6e3Bob3RvfX09cm91dGVyXHJcbiAgIGNvbnNvbGUubG9nKHBob3RvKTtcclxuICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICBmZXRjaEltYWdlKGBodHRwczovL2FwaS51bnNwbGFzaC5jb20vcGhvdG9zLyR7cGhvdG99P2ApXHJcbiAgICAudGhlbihyZXM9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIHNldGltYWdlTGlzdChyZXMpXHJcbiAgICB9KSBcclxuICAgfSxbcGhvdG9dKVxyXG4gICBjb25zdCBsb2FkaW5nQ29udGVudD0oKT0+e1xyXG4gICAgIGlmKGltYWdlTGlzdCl7XHJcbiAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFBob3RvQ29udGFpbmVyIGJnPXtpbWFnZUxpc3RbMF0uY29sb3J9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy03XCI+PEltYWdlIHNyYz17dXJscy5mdWxsfS8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1Bob3RvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIClcclxuICAgICB9ZWxzZXtcclxuICAgICAgICA8UGhvdG9Db250YWluZXIgYmc9eycjZmZmJ30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvUGhvdG9Db250YWluZXI+XHJcbiAgICAgfVxyXG4gICB9XHJcbiAgICBjb25zdCB7dGl0bGUsc2V0U2VsZWN0LHNldFRpdGxlLGltYWdlTGlzdCxzZXRpbWFnZUxpc3R9ID0gUmVhY3QudXNlQ29udGV4dChGdW5jdGlvbmFsc0NvbnRlbnQpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxvYWRpbmdDb250ZW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQaG90b1BhZ2UiXSwic291cmNlUm9vdCI6IiJ9