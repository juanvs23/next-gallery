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
}, ";min-height:40vh;" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx3YW1wNjRcXHd3d1xcanNcXG5leHQtZ2FsbGVyeVxccGFnZXNcXHBob3RvXFxbcGhvdG9dLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRbUMiLCJmaWxlIjoiQzpcXHdhbXA2NFxcd3d3XFxqc1xcbmV4dC1nYWxsZXJ5XFxwYWdlc1xccGhvdG9cXFtwaG90b10uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5pbXBvcnQgeyBGdW5jdGlvbmFsc0NvbnRlbnQgfSBmcm9tICcuLi8uLi9jb250ZXh0L2NvbnRleHRBcGknXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge2ZldGNoSW1hZ2V9IGZyb20gJy4uL2hlbHBlcnMvZmV0Y2gnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmNvbnN0IFBob3RvQ29udGFpbmVyPXN0eWxlZC5zZWN0aW9uYFxyXG5iYWNrZ3JvdW5kOiR7cHJvcHM9PnByb3BzLmJnfTtcclxubWluLWhlaWdodDo0MHZoO1xyXG5cclxuYFxyXG5cclxuY29uc3QgUGhvdG9QYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHtxdWVyeTp7cGhvdG99fT1yb3V0ZXJcclxuICAgIGNvbnN0IHt0aXRsZSxzZXRTZWxlY3Qsc2V0VGl0bGUsaW1hZ2VMaXN0LHNldGltYWdlTGlzdH0gPSBSZWFjdC51c2VDb250ZXh0KEZ1bmN0aW9uYWxzQ29udGVudClcclxuICAgY29uc29sZS5sb2cocGhvdG8pO1xyXG4gICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgIGlmKHBob3RvKXtcclxuICAgICAgICAgICAgZmV0Y2hJbWFnZShgaHR0cHM6Ly9hcGkudW5zcGxhc2guY29tL3Bob3Rvcy8ke3Bob3RvfT9gKVxyXG4gICAgICAgICAgICAudGhlbihyZXM9PntcclxuICAgICAgICAgICAgICAgIHNldGltYWdlTGlzdChyZXMpXHJcbiAgICAgICAgICAgICAgICBzZXRUaXRsZShyZXMuYWx0X2Rlc2NyaXB0aW9uKVxyXG4gICAgICAgICAgICB9KSAgIFxyXG4gICAgICAgIH1cclxuICAgfSxbcGhvdG9dKVxyXG4gICBcclxuICAgaWYoaW1hZ2VMaXN0KXtcclxuICAgICAgIFxyXG5jb25zdCB7YWx0X2Rlc2NyaXB0aW9ufT1pbWFnZUxpc3RcclxuICAgICBjb25zb2xlLmxvZyhhbHRfZGVzY3JpcHRpb24pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8UGhvdG9Db250YWluZXIgYmc9e2ltYWdlTGlzdC5jb2xvcn0+XHJcbiAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTUgdGV4dC1jZW50ZXIgZGlzcGxheS00XCI+XHJcbiAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy03XCI+PEltYWdlIHNyYz17dXJscy5mdWxsfS8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1Bob3RvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG4gICB9ZWxzZXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPFBob3RvQ29udGFpbmVyIGJnPXsnI2ZmZid9PlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9QaG90b0NvbnRhaW5lcj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxuICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBob3RvUGFnZSJdfQ== */"));

var PhotoPage = function PhotoPage() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var photo = router.query.photo;

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(_context_contextApi__WEBPACK_IMPORTED_MODULE_4__["FunctionalsContent"]),
      title = _React$useContext.title,
      setSelect = _React$useContext.setSelect,
      setTitle = _React$useContext.setTitle,
      imageList = _React$useContext.imageList,
      setimageList = _React$useContext.setimageList;

  console.log(photo);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (photo) {
      Object(_helpers_fetch__WEBPACK_IMPORTED_MODULE_6__["fetchImage"])("https://api.unsplash.com/photos/".concat(photo, "?")).then(function (res) {
        setimageList(res);
        setTitle(res.alt_description);
      });
    }
  }, [photo]);

  if (imageList) {
    var alt_description = imageList.alt_description;
    console.log(alt_description);
    return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PhotoContainer, {
        bg: imageList.color,
        children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "mb-5 text-center display-4",
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 12
        }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "container",
          children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: [Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-lg-7",
              children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_7___default.a, {
                src: urls.full
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 51
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 25
            }, _this), Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-lg-5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, _this);
  } else {
    return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PhotoContainer, {
        bg: '#fff'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }, _this);
  }
};

_s(PhotoPage, "O8JI2nMUj0VTBTEVMQPOkul2JRA=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGhvdG8vW3Bob3RvXS5qc3giXSwibmFtZXMiOlsiUGhvdG9Db250YWluZXIiLCJwcm9wcyIsImJnIiwiUGhvdG9QYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwicGhvdG8iLCJxdWVyeSIsIlJlYWN0IiwidXNlQ29udGV4dCIsIkZ1bmN0aW9uYWxzQ29udGVudCIsInRpdGxlIiwic2V0U2VsZWN0Iiwic2V0VGl0bGUiLCJpbWFnZUxpc3QiLCJzZXRpbWFnZUxpc3QiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiZmV0Y2hJbWFnZSIsInRoZW4iLCJyZXMiLCJhbHRfZGVzY3JpcHRpb24iLCJjb2xvciIsInVybHMiLCJmdWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxjQUFjO0FBQUE7QUFBQTtBQUFBLGtCQUNQLFVBQUFDLEtBQUs7QUFBQSxTQUFFQSxLQUFLLENBQUNDLEVBQVI7QUFBQSxDQURFLHd2RkFBcEI7O0FBTUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUNwQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRG9CLE1BRU5DLEtBRk0sR0FFRUYsTUFGRixDQUViRyxLQUZhLENBRU5ELEtBRk07O0FBQUEsMEJBR3NDRSw0Q0FBSyxDQUFDQyxVQUFOLENBQWlCQyxzRUFBakIsQ0FIdEM7QUFBQSxNQUdiQyxLQUhhLHFCQUdiQSxLQUhhO0FBQUEsTUFHUEMsU0FITyxxQkFHUEEsU0FITztBQUFBLE1BR0dDLFFBSEgscUJBR0dBLFFBSEg7QUFBQSxNQUdZQyxTQUhaLHFCQUdZQSxTQUhaO0FBQUEsTUFHc0JDLFlBSHRCLHFCQUdzQkEsWUFIdEI7O0FBSXJCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVgsS0FBWjtBQUNBRSw4Q0FBSyxDQUFDVSxTQUFOLENBQWdCLFlBQUk7QUFDbkIsUUFBR1osS0FBSCxFQUFTO0FBQ0RhLHVFQUFVLDJDQUFvQ2IsS0FBcEMsT0FBVixDQUNDYyxJQURELENBQ00sVUFBQUMsR0FBRyxFQUFFO0FBQ1BOLG9CQUFZLENBQUNNLEdBQUQsQ0FBWjtBQUNBUixnQkFBUSxDQUFDUSxHQUFHLENBQUNDLGVBQUwsQ0FBUjtBQUNILE9BSkQ7QUFLSDtBQUNMLEdBUkQsRUFRRSxDQUFDaEIsS0FBRCxDQVJGOztBQVVBLE1BQUdRLFNBQUgsRUFBYTtBQUFBLFFBRVRRLGVBRlMsR0FFUVIsU0FGUixDQUVUUSxlQUZTO0FBR1hOLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSyxlQUFaO0FBQ0QsV0FDSSw4RUFBQywwREFBRDtBQUFBLGdCQUNJLDhFQUFDLGNBQUQ7QUFBZ0IsVUFBRSxFQUFFUixTQUFTLENBQUNTLEtBQTlCO0FBQUEsbUJBQ0Q7QUFBSSxtQkFBUyxFQUFDLDRCQUFkO0FBQUEsb0JBQ0taO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQyxFQUlJO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsb0JBQ0k7QUFBSyxxQkFBUyxFQUFDLEtBQWY7QUFBQSx1QkFDSTtBQUFLLHVCQUFTLEVBQUMsVUFBZjtBQUFBLHdCQUEwQiw4RUFBQyxpREFBRDtBQUFPLG1CQUFHLEVBQUVhLElBQUksQ0FBQ0M7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLEVBRUk7QUFBSyx1QkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQWVBLEdBbkJELE1BbUJLO0FBQ0osV0FDSSw4RUFBQywwREFBRDtBQUFBLGdCQUNJLDhFQUFDLGNBQUQ7QUFBZ0IsVUFBRSxFQUFFO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFPQTtBQUNILENBM0NEOztHQUFNdEIsUztVQUNhRSxxRDs7O0tBRGJGLFM7QUE0Q1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bob3RvL1twaG90b10uZWE1Y2IwNTQ0ZjBjMDJlYmVjZGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcclxuaW1wb3J0IHsgRnVuY3Rpb25hbHNDb250ZW50IH0gZnJvbSAnLi4vLi4vY29udGV4dC9jb250ZXh0QXBpJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHtmZXRjaEltYWdlfSBmcm9tICcuLi9oZWxwZXJzL2ZldGNoJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5jb25zdCBQaG90b0NvbnRhaW5lcj1zdHlsZWQuc2VjdGlvbmBcclxuYmFja2dyb3VuZDoke3Byb3BzPT5wcm9wcy5iZ307XHJcbm1pbi1oZWlnaHQ6NDB2aDtcclxuXHJcbmBcclxuXHJcbmNvbnN0IFBob3RvUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB7cXVlcnk6e3Bob3RvfX09cm91dGVyXHJcbiAgICBjb25zdCB7dGl0bGUsc2V0U2VsZWN0LHNldFRpdGxlLGltYWdlTGlzdCxzZXRpbWFnZUxpc3R9ID0gUmVhY3QudXNlQ29udGV4dChGdW5jdGlvbmFsc0NvbnRlbnQpXHJcbiAgIGNvbnNvbGUubG9nKHBob3RvKTtcclxuICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICBpZihwaG90byl7XHJcbiAgICAgICAgICAgIGZldGNoSW1hZ2UoYGh0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS9waG90b3MvJHtwaG90b30/YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICAgICAgICBzZXRpbWFnZUxpc3QocmVzKVxyXG4gICAgICAgICAgICAgICAgc2V0VGl0bGUocmVzLmFsdF9kZXNjcmlwdGlvbilcclxuICAgICAgICAgICAgfSkgICBcclxuICAgICAgICB9XHJcbiAgIH0sW3Bob3RvXSlcclxuICAgXHJcbiAgIGlmKGltYWdlTGlzdCl7XHJcbiAgICAgICBcclxuY29uc3Qge2FsdF9kZXNjcmlwdGlvbn09aW1hZ2VMaXN0XHJcbiAgICAgY29uc29sZS5sb2coYWx0X2Rlc2NyaXB0aW9uKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPFBob3RvQ29udGFpbmVyIGJnPXtpbWFnZUxpc3QuY29sb3J9PlxyXG4gICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi01IHRleHQtY2VudGVyIGRpc3BsYXktNFwiPlxyXG4gICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctN1wiPjxJbWFnZSBzcmM9e3VybHMuZnVsbH0vPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9QaG90b0NvbnRhaW5lcj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxuICAgfWVsc2V7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxQaG90b0NvbnRhaW5lciBiZz17JyNmZmYnfT5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvUGhvdG9Db250YWluZXI+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbiAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBQaG90b1BhZ2UiXSwic291cmNlUm9vdCI6IiJ9