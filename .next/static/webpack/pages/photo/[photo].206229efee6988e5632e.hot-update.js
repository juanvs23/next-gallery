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
}, ";min-height:40vh;" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx3YW1wNjRcXHd3d1xcanNcXG5leHQtZ2FsbGVyeVxccGFnZXNcXHBob3RvXFxbcGhvdG9dLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRbUMiLCJmaWxlIjoiQzpcXHdhbXA2NFxcd3d3XFxqc1xcbmV4dC1nYWxsZXJ5XFxwYWdlc1xccGhvdG9cXFtwaG90b10uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5pbXBvcnQgeyBGdW5jdGlvbmFsc0NvbnRlbnQgfSBmcm9tICcuLi8uLi9jb250ZXh0L2NvbnRleHRBcGknXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge2ZldGNoSW1hZ2V9IGZyb20gJy4uL2hlbHBlcnMvZmV0Y2gnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmNvbnN0IFBob3RvQ29udGFpbmVyPXN0eWxlZC5zZWN0aW9uYFxyXG5iYWNrZ3JvdW5kOiR7cHJvcHM9PnByb3BzLmJnfTtcclxubWluLWhlaWdodDo0MHZoO1xyXG5cclxuYFxyXG5cclxuY29uc3QgUGhvdG9QYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHtxdWVyeTp7cGhvdG99fT1yb3V0ZXJcclxuICAgY29uc29sZS5sb2cocGhvdG8pO1xyXG4gICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgIGZldGNoSW1hZ2UoYGh0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS9waG90b3MvJHtwaG90b30/YClcclxuICAgIC50aGVuKHJlcz0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgc2V0aW1hZ2VMaXN0KHJlcylcclxuICAgIH0pIFxyXG4gICB9LFtwaG90b10pXHJcbiAgIGNvbnN0IGxvYWRpbmdDb250ZW50PSgpPT57XHJcbiAgICAgaWYoaW1hZ2VMaXN0KXtcclxuICAgICAgIHJldHVybihcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgaW1hZ2VMaXN0Lm1hcCgoaW1hZ2UsaSk9PihcclxuICAgICAgICAgICAgICAgIDxQaG90b0NvbnRhaW5lciBiZz17aW1hZ2VMaXN0LmNvbG9yfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctN1wiPjxJbWFnZSBzcmM9e3VybHMuZnVsbH0vPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9QaG90b0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICBcclxuICAgICAgICAgICApXHJcbiAgICAgfWVsc2V7XHJcbiAgICAgICAgPFBob3RvQ29udGFpbmVyIGJnPXsnI2ZmZid9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L1Bob3RvQ29udGFpbmVyPlxyXG4gICAgIH1cclxuICAgfVxyXG4gICAgY29uc3Qge3RpdGxlLHNldFNlbGVjdCxzZXRUaXRsZSxpbWFnZUxpc3Qsc2V0aW1hZ2VMaXN0fSA9IFJlYWN0LnVzZUNvbnRleHQoRnVuY3Rpb25hbHNDb250ZW50KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nQ29udGVudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUGhvdG9QYWdlIl19 */"));

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
      return imageList.map(function (image, i) {
        return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PhotoContainer, {
          bg: imageList.color,
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
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGhvdG8vW3Bob3RvXS5qc3giXSwibmFtZXMiOlsiUGhvdG9Db250YWluZXIiLCJwcm9wcyIsImJnIiwiUGhvdG9QYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwicGhvdG8iLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJSZWFjdCIsInVzZUVmZmVjdCIsImZldGNoSW1hZ2UiLCJ0aGVuIiwicmVzIiwic2V0aW1hZ2VMaXN0IiwibG9hZGluZ0NvbnRlbnQiLCJpbWFnZUxpc3QiLCJtYXAiLCJpbWFnZSIsImkiLCJjb2xvciIsInVybHMiLCJmdWxsIiwidXNlQ29udGV4dCIsIkZ1bmN0aW9uYWxzQ29udGVudCIsInRpdGxlIiwic2V0U2VsZWN0Iiwic2V0VGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLGNBQWM7QUFBQTtBQUFBO0FBQUEsa0JBQ1AsVUFBQUMsS0FBSztBQUFBLFNBQUVBLEtBQUssQ0FBQ0MsRUFBUjtBQUFBLENBREUsZ3dGQUFwQjs7QUFNQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3BCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEb0IsTUFFTkMsS0FGTSxHQUVFRixNQUZGLENBRWJHLEtBRmEsQ0FFTkQsS0FGTTtBQUdyQkUsU0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7QUFDQUksOENBQUssQ0FBQ0MsU0FBTixDQUFnQixZQUFJO0FBQ25CQyxxRUFBVSwyQ0FBb0NOLEtBQXBDLE9BQVYsQ0FDQ08sSUFERCxDQUNNLFVBQUFDLEdBQUcsRUFBRTtBQUNQTixhQUFPLENBQUNDLEdBQVIsQ0FBWUssR0FBWjtBQUNBQyxrQkFBWSxDQUFDRCxHQUFELENBQVo7QUFDSCxLQUpEO0FBS0EsR0FORCxFQU1FLENBQUNSLEtBQUQsQ0FORjs7QUFPQSxNQUFNVSxjQUFjLEdBQUMsU0FBZkEsY0FBZSxHQUFJO0FBQ3ZCLFFBQUdDLFNBQUgsRUFBYTtBQUNYLGFBRVFBLFNBQVMsQ0FBQ0MsR0FBVixDQUFjLFVBQUNDLEtBQUQsRUFBT0MsQ0FBUDtBQUFBLGVBQ2IsOEVBQUMsY0FBRDtBQUFnQixZQUFFLEVBQUVILFNBQVMsQ0FBQ0ksS0FBOUI7QUFBQSxvQkFDQTtBQUFLLHFCQUFTLEVBQUMsV0FBZjtBQUFBLHNCQUNJO0FBQUssdUJBQVMsRUFBQyxLQUFmO0FBQUEseUJBQ0k7QUFBSyx5QkFBUyxFQUFDLFVBQWY7QUFBQSwwQkFBMEIsOEVBQUMsaURBQUQ7QUFBTyxxQkFBRyxFQUFFQyxJQUFJLENBQUNDO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixFQUVJO0FBQUsseUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGE7QUFBQSxPQUFkLENBRlI7QUFjRCxLQWZELE1BZUs7QUFDRixvRkFBQyxjQUFEO0FBQWdCLFVBQUUsRUFBRSxNQUFwQjtBQUFBLGtCQUNBO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsb0JBQ0k7QUFBSyxxQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0Y7QUFDRixHQXpCRDs7QUFYcUIsMEJBcUNzQ2IsNENBQUssQ0FBQ2MsVUFBTixDQUFpQkMsc0VBQWpCLENBckN0QztBQUFBLE1BcUNiQyxLQXJDYSxxQkFxQ2JBLEtBckNhO0FBQUEsTUFxQ1BDLFNBckNPLHFCQXFDUEEsU0FyQ087QUFBQSxNQXFDR0MsUUFyQ0gscUJBcUNHQSxRQXJDSDtBQUFBLE1BcUNZWCxTQXJDWixxQkFxQ1lBLFNBckNaO0FBQUEsTUFxQ3NCRixZQXJDdEIscUJBcUNzQkEsWUFyQ3RCOztBQXNDcEIsU0FDSSw4RUFBQywwREFBRDtBQUFBLGNBRVFDO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBT0gsQ0E3Q0Q7O0dBQU1iLFM7VUFDYUUscUQ7OztLQURiRixTO0FBOENTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9waG90by9bcGhvdG9dLjIwNjIyOWVmZWU2OTg4ZTU2MzJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCB7IEZ1bmN0aW9uYWxzQ29udGVudCB9IGZyb20gJy4uLy4uL2NvbnRleHQvY29udGV4dEFwaSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7ZmV0Y2hJbWFnZX0gZnJvbSAnLi4vaGVscGVycy9mZXRjaCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuY29uc3QgUGhvdG9Db250YWluZXI9c3R5bGVkLnNlY3Rpb25gXHJcbmJhY2tncm91bmQ6JHtwcm9wcz0+cHJvcHMuYmd9O1xyXG5taW4taGVpZ2h0OjQwdmg7XHJcblxyXG5gXHJcblxyXG5jb25zdCBQaG90b1BhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3Qge3F1ZXJ5OntwaG90b319PXJvdXRlclxyXG4gICBjb25zb2xlLmxvZyhwaG90byk7XHJcbiAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgZmV0Y2hJbWFnZShgaHR0cHM6Ly9hcGkudW5zcGxhc2guY29tL3Bob3Rvcy8ke3Bob3RvfT9gKVxyXG4gICAgLnRoZW4ocmVzPT57XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICBzZXRpbWFnZUxpc3QocmVzKVxyXG4gICAgfSkgXHJcbiAgIH0sW3Bob3RvXSlcclxuICAgY29uc3QgbG9hZGluZ0NvbnRlbnQ9KCk9PntcclxuICAgICBpZihpbWFnZUxpc3Qpe1xyXG4gICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBpbWFnZUxpc3QubWFwKChpbWFnZSxpKT0+KFxyXG4gICAgICAgICAgICAgICAgPFBob3RvQ29udGFpbmVyIGJnPXtpbWFnZUxpc3QuY29sb3J9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy03XCI+PEltYWdlIHNyYz17dXJscy5mdWxsfS8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1Bob3RvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIClcclxuICAgICB9ZWxzZXtcclxuICAgICAgICA8UGhvdG9Db250YWluZXIgYmc9eycjZmZmJ30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvUGhvdG9Db250YWluZXI+XHJcbiAgICAgfVxyXG4gICB9XHJcbiAgICBjb25zdCB7dGl0bGUsc2V0U2VsZWN0LHNldFRpdGxlLGltYWdlTGlzdCxzZXRpbWFnZUxpc3R9ID0gUmVhY3QudXNlQ29udGV4dChGdW5jdGlvbmFsc0NvbnRlbnQpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxvYWRpbmdDb250ZW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQaG90b1BhZ2UiXSwic291cmNlUm9vdCI6IiJ9