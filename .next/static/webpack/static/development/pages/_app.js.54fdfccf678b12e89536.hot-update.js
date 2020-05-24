webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/navbar/Navbar.js":
/*!*************************************!*\
  !*** ./components/navbar/Navbar.js ***!
  \*************************************/
/*! exports provided: Nav, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Nav\", function() { return Nav; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _navbar_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar.scss */ \"./components/navbar/navbar.scss\");\n/* harmony import */ var _navbar_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_navbar_scss__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\nirva\\\\Downloads\\\\WORK\\\\Project\\\\newwebsite\\\\projectos\\\\components\\\\navbar\\\\Navbar.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar Nav = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Nav, _Component);\n\n  var _super = _createSuper(Nav);\n\n  function Nav(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Nav);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"dropDown\", function () {\n      var x = document.getElementById(\"myNav\");\n\n      if (x.className === \"nav-lg\") {\n        x.className += \" block\";\n      } else {\n        x.className = \"nav-lg\";\n      }\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"handleScroll\", function () {\n      window.pageYOffset >= 1 ? _this.setState({\n        nav: \"nav-scroll\"\n      }) : _this.setState({\n        nav: \"\"\n      });\n    });\n\n    _this.state = {\n      \"class\": \"\",\n      fixed: \"\",\n      page: \"Solutions\",\n      nav: \"\"\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Nav, [{\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      window.removeEventListener('scroll', this.handleScroll);\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      window.addEventListener('scroll', this.handleScroll);\n      window.scrollY > 50 ? this.handleScroll : null;\n      console.log(window.scrollY);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return __jsx(\"div\", {\n        className: \"nav-div \".concat(this.state.nav),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 7\n        }\n      }, __jsx(\"div\", {\n        className: \"nav\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 9\n        }\n      }, __jsx(\"ul\", {\n        className: \"nav-sm\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }\n      }, __jsx(\"li\", {\n        className: \"padding dp\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 13\n        }\n      }, \" \", __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        href: \"/\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 42\n        }\n      }, __jsx(\"img\", {\n        src: \"/static/logo.svg\",\n        alt: \"Logo\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 57\n        }\n      })), __jsx(\"div\", {\n        id: \"myDropdown\",\n        \"class\": \"dropdown-content\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 15\n        }\n      }, __jsx(\"ul\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 17\n        }\n      }, __jsx(\"li\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 19\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        href: \"/\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 23\n        }\n      }, \"Academy\")), __jsx(\"li\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 19\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        href: \"#about\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 23\n        }\n      }, \"Store\")), __jsx(\"li\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 19\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        href: \"#contact\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 24\n        }\n      }, \"ProjectOS\")), __jsx(\"li\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 19\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        href: \"#contact\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 24\n        }\n      }, \"MealStock\")), __jsx(\"li\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 19\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        href: \"#contact\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 24\n        }\n      }, \"Liveizy\")), __jsx(\"li\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 19\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        href: \"#contact\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 24\n        }\n      }, \"Solutions\")))), __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__[\"FaBars\"], {\n        onClick: this.dropDown,\n        className: \"dropdown-button\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 15\n        }\n      })), __jsx(\"div\", {\n        className: \"divide\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 13\n        }\n      }), __jsx(\"li\", {\n        className: \"padding page\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 13\n        }\n      }, this.state.page)), __jsx(\"ul\", {\n        className: \"nav-lg\",\n        id: \"myNav\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }\n      }, __jsx(\"li\", {\n        className: \"option padding \",\n        onClick: function onClick() {\n          return _this2.setState({\n            \"class\": \"active\"\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 13\n        }\n      }, \" \", __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        href: \"commsworth/services\",\n        className: this.state[\"class\"],\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 97\n        }\n      }, __jsx(\"a\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 15\n        }\n      }, \"Services\"))), __jsx(\"li\", {\n        className: \"option1 padding\",\n        onClick: function onClick() {\n          return _this2.setState({\n            \"class\": \"active1\"\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 13\n        }\n      }, \" \", __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        href: \"commsworth/portfolio\",\n        className: this.state[\"class\"],\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 98\n        }\n      }, __jsx(\"a\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 15\n        }\n      }, \"Portfolio\"))), __jsx(\"li\", {\n        className: \"option2 padding\",\n        onClick: function onClick() {\n          return _this2.setState({\n            \"class\": \"active2\"\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 13\n        }\n      }, \" \", __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        href: \"commsworth#\",\n        className: this.state[\"class\"],\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 98\n        }\n      }, __jsx(\"a\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 15\n        }\n      }, \" Blog\"))), __jsx(\"div\", {\n        className: \"divide\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 13\n        }\n      }), __jsx(\"li\", {\n        className: \"butt padding\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 13\n        }\n      }, \" \", __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        href: \"#\",\n        className: \"option\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 43\n        }\n      }, __jsx(\"a\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 15\n        }\n      }, \" Contact\"))))));\n    }\n  }]);\n\n  return Nav;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmJhci9OYXZiYXIuanM/ZjUzNiJdLCJuYW1lcyI6WyJOYXYiLCJwcm9wcyIsIngiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NOYW1lIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJzZXRTdGF0ZSIsIm5hdiIsInN0YXRlIiwiZml4ZWQiLCJwYWdlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZVNjcm9sbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxZIiwiY29uc29sZSIsImxvZyIsImRyb3BEb3duIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdPLElBQU1BLEdBQWI7QUFBQTs7QUFBQTs7QUFDRSxlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQixtTkFTUixZQUFNO0FBQ2YsVUFBSUMsQ0FBQyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBUjs7QUFDQSxVQUFJRixDQUFDLENBQUNHLFNBQUYsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDNUJILFNBQUMsQ0FBQ0csU0FBRixJQUFlLFFBQWY7QUFDRCxPQUZELE1BRU87QUFDTEgsU0FBQyxDQUFDRyxTQUFGLEdBQWMsUUFBZDtBQUNEO0FBQ0YsS0FoQmtCOztBQUFBLHVOQWlCSixZQUFNO0FBQ25CQyxZQUFNLENBQUNDLFdBQVAsSUFBc0IsQ0FBdEIsR0FBMEIsTUFBS0MsUUFBTCxDQUFjO0FBQUVDLFdBQUcsRUFBRTtBQUFQLE9BQWQsQ0FBMUIsR0FBaUUsTUFBS0QsUUFBTCxDQUFjO0FBQUVDLFdBQUcsRUFBRTtBQUFQLE9BQWQsQ0FBakU7QUFDRCxLQW5Ca0I7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYLGVBQU8sRUFESTtBQUVYQyxXQUFLLEVBQUUsRUFGSTtB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TSxNQUFJLENBQUNGLFFBQUwsQ0FBYztBQUFFLHFCQUFPO0FBQVQsV0FBZCxDQUFOO0FBQUEsU0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFxRixNQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsaUJBQVMsRUFBRSxLQUFLRSxLQUFMLFNBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDbkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEbUYsQ0FBckYsQ0FURixFQWFFO0FBQUssaUJBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFiRixFQWNFO0FBQUksaUJBQVMsRUFBQyxjQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBOEIsTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQWUsaUJBQVMsRUFBQyxRQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQzVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRDRCLENBQTlCLENBZEYsQ0FwQkYsQ0FGRixDQURGO0FBOENEO0FBL0VIOztBQUFBO0FBQUEsRUFBeUJVLCtDQUF6QjtBQWtGZXBCLGtFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9uYXZiYXIvTmF2YmFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZhQmFycyB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG5pbXBvcnQgJy4vbmF2YmFyLnNjc3MnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBOYXYgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGNsYXNzOiBcIlwiLFxyXG4gICAgICBmaXhlZDogXCJcIixcclxuICAgICAgcGFnZTogXCJTb2x1dGlvbnNcIixcclxuICAgICAgbmF2OiBcIlwiLFxyXG4gICAgfVxyXG4gIH1cclxuICBkcm9wRG93biA9ICgpID0+IHtcclxuICAgIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU5hdlwiKTtcclxuICAgIGlmICh4LmNsYXNzTmFtZSA9PT0gXCJuYXYtbGdcIikge1xyXG4gICAgICB4LmNsYXNzTmFtZSArPSBcIiBibG9ja1wiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeC5jbGFzc05hbWUgPSBcIm5hdi1sZ1wiO1xyXG4gICAgfVxyXG4gIH1cclxuICBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cucGFnZVlPZmZzZXQgPj0gMSA/IHRoaXMuc2V0U3RhdGUoeyBuYXY6IFwibmF2LXNjcm9sbFwiIH0pIDogdGhpcy5zZXRTdGF0ZSh7IG5hdjogXCJcIiB9KVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpO1xyXG4gICAgd2luZG93LnNjcm9sbFk+NTA/IHRoaXMuaGFuZGxlU2Nyb2xsOiBudWxsO1xyXG4gICAgY29uc29sZS5sb2cod2luZG93LnNjcm9sbFkpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YG5hdi1kaXYgJHt0aGlzLnN0YXRlLm5hdn1gfT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYtc21cIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZGRpbmcgZHBcIiA+IDxMaW5rIGhyZWY9XCIvXCI+PGltZyBzcmM9XCIvc3RhdGljL2xvZ28uc3ZnXCIgYWx0PVwiTG9nb1wiIC8+PC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJteURyb3Bkb3duXCIgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL1wiPkFjYWRlbXk8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIjYWJvdXRcIj5TdG9yZTwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgPjxMaW5rIGhyZWY9XCIjY29udGFjdFwiPlByb2plY3RPUzwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgPjxMaW5rIGhyZWY9XCIjY29udGFjdFwiPk1lYWxTdG9jazwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgPjxMaW5rIGhyZWY9XCIjY29udGFjdFwiPkxpdmVpenk8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpID48TGluayBocmVmPVwiI2NvbnRhY3RcIj5Tb2x1dGlvbnM8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPEZhQmFycyBvbkNsaWNrPXt0aGlzLmRyb3BEb3dufSBjbGFzc05hbWU9XCJkcm9wZG93bi1idXR0b25cIiAvPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGFkZGluZyBwYWdlXCI+e3RoaXMuc3RhdGUucGFnZX08L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuXHJcblxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdi1sZ1wiIGlkPVwibXlOYXZcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm9wdGlvbiBwYWRkaW5nIFwiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBjbGFzczogXCJhY3RpdmVcIiB9KX0+IDxMaW5rIGhyZWY9XCJjb21tc3dvcnRoL3NlcnZpY2VzXCIgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzfT5cclxuICAgICAgICAgICAgICA8YT5TZXJ2aWNlczwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwib3B0aW9uMSBwYWRkaW5nXCIgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGNsYXNzOiBcImFjdGl2ZTFcIiB9KX0+IDxMaW5rIGhyZWY9XCJjb21tc3dvcnRoL3BvcnRmb2xpb1wiIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc30+XHJcbiAgICAgICAgICAgICAgPGE+UG9ydGZvbGlvPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJvcHRpb24yIHBhZGRpbmdcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgY2xhc3M6IFwiYWN0aXZlMlwiIH0pfT4gPExpbmsgaHJlZj1cImNvbW1zd29ydGgjXCIgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzfT5cclxuICAgICAgICAgICAgICA8YT4gQmxvZzwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnV0dCBwYWRkaW5nXCI+IDxMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGE+IENvbnRhY3Q8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navbar/Navbar.js\n");

/***/ })

})