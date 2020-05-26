webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/landing/carouselDiv/carouselDiv.component.jsx":
/*!******************************************************************!*\
  !*** ./components/landing/carouselDiv/carouselDiv.component.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CarouselDiv; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _extra_card_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../extra/card/card.component */ \"./components/extra/card/card.component.jsx\");\n/* harmony import */ var _extra_arrow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../extra/arrow */ \"./components/extra/arrow.jsx\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\nirva\\\\Downloads\\\\WORK\\\\Project\\\\worknext\\\\projectos\\\\components\\\\landing\\\\carouselDiv\\\\carouselDiv.component.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n // import './carouselDiv.styles.scss';\n\n\nvar options = [{\n  img: \"/pngs/featuredImage.png\",\n  title: \"NextGen App Performance Monitoring (APM) delivered through Dynatrace\",\n  content: \"Commsworth Partners with Dynatrace to provide an AI-Powered, All-in-one platform to monitor, optimize and scale your applications autonomously with Zero-touch configuration across all stacks on any cloud.\",\n  index: 0\n}, {\n  img: \"/pngs/featuredImage2.png\",\n  title: \"Yes\",\n  content: \"Commsworth Partners with Dynatrace to provide an AI-Powered, All-in-one platform to monitor, optimize and scale your applications autonomously with Zero-touch configuration across all stacks on any cloud.\",\n  index: 1\n}];\n\nvar CarouselDiv = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(CarouselDiv, _Component);\n\n  var _super = _createSuper(CarouselDiv);\n\n  function CarouselDiv(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, CarouselDiv);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"setOptionRight\", function () {\n      if (options[_this.state.index + 1]) {\n        _this.setState(options[_this.state.index + 1]);\n      } else {\n        _this.setState(options[0]);\n      }\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"setOptionLeft\", function () {\n      if (options[_this.state.index - 1]) {\n        _this.setState(options[_this.state.index - 1]);\n      } else {\n        _this.setState(options[options.length - 1]);\n      }\n    });\n\n    _this.state = {\n      img: \"\",\n      title: \"\",\n      content: \"\",\n      index: 0\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(CarouselDiv, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.setState(options[0]);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 13\n        }\n      }, __jsx(\"div\", {\n        className: \"jsx-334680228\" + \" \" + \"carousel-div\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 17\n        }\n      }, __jsx(\"button\", {\n        id: \"left-button\",\n        onClick: this.setOptionLeft,\n        className: \"jsx-334680228\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 21\n        }\n      }, this.props.leftArrow), __jsx(\"div\", {\n        className: \"jsx-334680228\" + \" \" + \"carousel-grid\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 21\n        }\n      }, __jsx(_extra_card_card_component__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 25\n        }\n      }), __jsx(_extra_card_card_component__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        title: this.state.title,\n        subTitle: this.props.blueSemiCircle,\n        content: this.state.content,\n        link: __jsx(_extra_arrow__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n          text: \"Read More\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 128\n          }\n        }),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 25\n        }\n      })), __jsx(\"button\", {\n        id: \"right-button\",\n        onClick: this.setOptionRight,\n        className: \"jsx-334680228\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 21\n        }\n      }, this.props.rightArrow)), __jsx(\"div\", {\n        className: \"jsx-334680228\" + \" \" + 'carousel-opt',\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 17\n        }\n      }, __jsx(\"svg\", {\n        width: \"12\",\n        height: \"12\",\n        viewBox: \"0 0 12 12\",\n        fill: \"none\",\n        xmlns: \"http://www.w3.org/2000/svg\",\n        className: \"jsx-334680228\" + \" \" + ((this.state.index ? ' ' : 'svg') || \"\"),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 21\n        }\n      }, __jsx(\"circle\", {\n        cx: \"6\",\n        cy: \"6\",\n        r: \"5.5\",\n        stroke: \"#208FFF\",\n        className: \"jsx-334680228\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 25\n        }\n      })), __jsx(\"svg\", {\n        width: \"12\",\n        height: \"12\",\n        viewBox: \"0 0 12 12\",\n        fill: \"none\",\n        xmlns: \"http://www.w3.org/2000/svg\",\n        className: \"jsx-334680228\" + \" \" + ((this.state.index ? 'svg' : ' ') || \"\"),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 21\n        }\n      }, __jsx(\"circle\", {\n        cx: \"6\",\n        cy: \"6\",\n        r: \"5.5\",\n        stroke: \"#208FFF\",\n        className: \"jsx-334680228\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 25\n        }\n      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        id: \"334680228\",\n        __self: this\n      }, \".carousel-opt.jsx-334680228{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:10px 0px 10px 0px;}.svg.jsx-334680228{fill:#208FFF;margin:5px;}.carousel-div.jsx-334680228{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0vh 2.5vw;width:95vw;}.carousel-grid.jsx-334680228{display:grid;grid-template-columns:1fr 1fr;gap:9px;width:80vw;margin:auto;}.carousel-grid.jsx-334680228 .card{min-height:500px;min-width:400px;max-width:500px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.carousel-grid.jsx-334680228 .card p{font-size:16px;line-height:197.5%;-webkit-letter-spacing:0.01em;-moz-letter-spacing:0.01em;-ms-letter-spacing:0.01em;letter-spacing:0.01em;margin:0;}.carousel-grid.jsx-334680228 .card .link{font-weight:bold;font-size:24px;line-height:109%;margin:0;margin-top:34px !important;}#left-button.jsx-334680228{background:transparent;outline:none;border:none;cursor:pointer;height:31px;width:18px;padding:0;}#right-button.jsx-334680228{background:transparent;outline:none;border:none;cursor:pointer;height:31px;width:18px;padding:0;}@media screen and (max-width:990px){.carousel-grid.jsx-334680228{grid-template-columns:repeat(auto-fill,minmax(400px,1fr));}}@media screen and (max-width:570px){.carousel-grid.jsx-334680228{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbmlydmFcXERvd25sb2Fkc1xcV09SS1xcUHJvamVjdFxcd29ya25leHRcXHByb2plY3Rvc1xcY29tcG9uZW50c1xcbGFuZGluZ1xcY2Fyb3VzZWxEaXZcXGNhcm91c2VsRGl2LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0U0QixBQUcwQixBQU1JLEFBSUosQUFTQSxBQU9JLEFBT0UsQUFNRSxBQU9FLEFBVUEsQUFXbUMsQUFNN0MsYUFsRUUsQUFhZSxFQWNQLEVBUFAsQUFhRyxNQU9OLEFBVUEsQ0FqRGIsUUFpQ3FCLENBYkwsQ0FPVSxFQWFkLEFBVUEsT0FyQ0osS0E0Qk8sQUFVQSxDQTdCUSxBQVlWLEVBcEJGLE9BcUJvQixBQXlCbkMsSUE3Q2dCLENBMkJBLEFBVUEsV0EzRFcsQUFVQSxBQWF2QixBQWtEc0IsQ0F2QlgsQUFVQSxVQWpCWCxDQVFVLEFBVUEsVUFUVixBQVVKLDJDQTNCaUIsU0FMYixBQU1BLElBc0NKLHFCQXpFdUIsQUFXQSw2RkFWTSxBQVdSLGlCQUNOLFFBWFgsR0FZQSIsImZpbGUiOiJDOlxcVXNlcnNcXG5pcnZhXFxEb3dubG9hZHNcXFdPUktcXFByb2plY3RcXHdvcmtuZXh0XFxwcm9qZWN0b3NcXGNvbXBvbmVudHNcXGxhbmRpbmdcXGNhcm91c2VsRGl2XFxjYXJvdXNlbERpdi5jb21wb25lbnQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vLi4vZXh0cmEvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG4vLyBpbXBvcnQgJy4vY2Fyb3VzZWxEaXYuc3R5bGVzLnNjc3MnO1xuaW1wb3J0IEFycm93TGluayBmcm9tICcuLi8uLi9leHRyYS9hcnJvdyc7XG5cbmNvbnN0IG9wdGlvbnMgPSBbXG4gICAge1xuICAgICAgICBpbWc6IFwiL3BuZ3MvZmVhdHVyZWRJbWFnZS5wbmdcIixcbiAgICAgICAgdGl0bGU6IFwiTmV4dEdlbiBBcHAgUGVyZm9ybWFuY2UgTW9uaXRvcmluZyAoQVBNKSBkZWxpdmVyZWQgdGhyb3VnaCBEeW5hdHJhY2VcIixcbiAgICAgICAgY29udGVudDogXCJDb21tc3dvcnRoIFBhcnRuZXJzIHdpdGggRHluYXRyYWNlIHRvIHByb3ZpZGUgYW4gQUktUG93ZXJlZCwgQWxsLWluLW9uZSBwbGF0Zm9ybSB0byBtb25pdG9yLCBvcHRpbWl6ZSBhbmQgc2NhbGUgeW91ciBhcHBsaWNhdGlvbnMgYXV0b25vbW91c2x5IHdpdGggWmVyby10b3VjaCBjb25maWd1cmF0aW9uIGFjcm9zcyBhbGwgc3RhY2tzIG9uIGFueSBjbG91ZC5cIixcbiAgICAgICAgaW5kZXg6IDAsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGltZzogXCIvcG5ncy9mZWF0dXJlZEltYWdlMi5wbmdcIixcbiAgICAgICAgdGl0bGU6IFwiWWVzXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiQ29tbXN3b3J0aCBQYXJ0bmVycyB3aXRoIER5bmF0cmFjZSB0byBwcm92aWRlIGFuIEFJLVBvd2VyZWQsIEFsbC1pbi1vbmUgcGxhdGZvcm0gdG8gbW9uaXRvciwgb3B0aW1pemUgYW5kIHNjYWxlIHlvdXIgYXBwbGljYXRpb25zIGF1dG9ub21vdXNseSB3aXRoIFplcm8tdG91Y2ggY29uZmlndXJhdGlvbiBhY3Jvc3MgYWxsIHN0YWNrcyBvbiBhbnkgY2xvdWQuXCIsXG4gICAgICAgIGluZGV4OiAxLFxuICAgIH1cbl1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2Fyb3VzZWxEaXYgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpbWc6IFwiXCIsXG4gICAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCIsXG4gICAgICAgICAgICBpbmRleDogMCxcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUob3B0aW9uc1swXSlcbiAgICB9XG5cbiAgICBzZXRPcHRpb25SaWdodCA9ICgpID0+IHtcbiAgICAgICAgaWYgKG9wdGlvbnNbdGhpcy5zdGF0ZS5pbmRleCArIDFdKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKG9wdGlvbnNbdGhpcy5zdGF0ZS5pbmRleCArIDFdKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShvcHRpb25zWzBdKVxuICAgICAgICB9XG4gICAgfVxuICAgIHNldE9wdGlvbkxlZnQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zW3RoaXMuc3RhdGUuaW5kZXggLSAxXSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShvcHRpb25zW3RoaXMuc3RhdGUuaW5kZXggLSAxXSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUob3B0aW9uc1tvcHRpb25zLmxlbmd0aCAtIDFdKVxuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJsZWZ0LWJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuc2V0T3B0aW9uTGVmdH0+e3RoaXMucHJvcHMubGVmdEFycm93fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWdyaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHRpdGxlPXt0aGlzLnN0YXRlLnRpdGxlfSBzdWJUaXRsZT17dGhpcy5wcm9wcy5ibHVlU2VtaUNpcmNsZX0gY29udGVudD17dGhpcy5zdGF0ZS5jb250ZW50fSBsaW5rPXs8QXJyb3dMaW5rIHRleHQ9XCJSZWFkIE1vcmVcIiAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJyaWdodC1idXR0b25cIiBvbkNsaWNrPXt0aGlzLnNldE9wdGlvblJpZ2h0fT57dGhpcy5wcm9wcy5yaWdodEFycm93fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJvdXNlbC1vcHQnPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9e3RoaXMuc3RhdGUuaW5kZXggPyAnICcgOiAnc3ZnJ30gd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgdmlld0JveD1cIjAgMCAxMiAxMlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjZcIiBjeT1cIjZcIiByPVwiNS41XCIgc3Ryb2tlPVwiIzIwOEZGRlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5pbmRleCA/ICdzdmcnIDogJyAnfSB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTJcIiB2aWV3Qm94PVwiMCAwIDEyIDEyXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiNlwiIGN5PVwiNlwiIHI9XCI1LjVcIiBzdHJva2U9XCIjMjA4RkZGXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmNhcm91c2VsLW9wdHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4IDEwcHggMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN2Z3tcbiAgICAgICAgICAgICAgICBmaWxsOiAjMjA4RkZGO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcm91c2VsLWRpdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAvLyBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luOiAwdmggMi41dnc7XG4gICAgICAgICAgICB3aWR0aDogOTV2dztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNhcm91c2VsLWdyaWQge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgICAgIGdhcDogOXB4O1xuICAgICAgICAgICAgd2lkdGg6IDgwdnc7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2Fyb3VzZWwtZ3JpZCA6Z2xvYmFsKC5jYXJkKSB7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgLy9wYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2Fyb3VzZWwtZ3JpZCA6Z2xvYmFsKC5jYXJkIHApIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE5Ny41JTtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJvdXNlbC1ncmlkIDpnbG9iYWwoLmNhcmQgLmxpbmspIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEwOSU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDM0cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNsZWZ0LWJ1dHRvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDMxcHg7XG4gICAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICNyaWdodC1idXR0b24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiAzMXB4O1xuICAgICAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTBweCkge1xuXG4gICAgICAgIC5jYXJvdXNlbC1ncmlke1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcbiAgICAgICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTcwcHgpIHtcblxuICAgICAgICAuY2Fyb3VzZWwtZ3JpZHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG59XG5cbiAgICAgICAgICAgICAgICBgfVxuXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG5cbiAgICAgICAgKTtcbiAgICB9XG59Il19 */\\n/*@ sourceURL=C:\\\\\\\\Users\\\\\\\\nirva\\\\\\\\Downloads\\\\\\\\WORK\\\\\\\\Project\\\\\\\\worknext\\\\\\\\projectos\\\\\\\\components\\\\\\\\landing\\\\\\\\carouselDiv\\\\\\\\carouselDiv.component.jsx */\"));\n    }\n  }]);\n\n  return CarouselDiv;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xhbmRpbmcvY2Fyb3VzZWxEaXYvY2Fyb3VzZWxEaXYuY29tcG9uZW50LmpzeD9kYTVhIl0sIm5hbWVzIjpbIm9wdGlvbnMiLCJpbWciLCJ0aXRsZSIsImNvbnRlbnQiLCJpbmRleCIsIkNhcm91c2VsRGl2IiwicHJvcHMiLCJzdGF0ZSIsInNldFN0YXRlIiwibGVuZ3RoIiwic2V0T3B0aW9uTGVmdCIsImxlZnRBcnJvdyIsImJsdWVTZW1pQ2lyY2xlIiwic2V0T3B0aW9uUmlnaHQiLCJyaWdodEFycm93IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHLENBQ1o7QUFDSUMsS0FBRyxFQUFFLHlCQURUO0FBRUlDLE9BQUssRUFBRSxzRUFGWDtBQUdJQyxTQUFPLEVBQUUsOE1BSGI7QUFJSUMsT0FBSyxFQUFFO0FBSlgsQ0FEWSxFQU9aO0FBQ0lILEtBQUcsRUFBRSwwQkFEVDtBQUVJQyxPQUFLLEVBQUUsS0FGWDtBQUdJQyxTQUFPLEVBQUUsOE1BSGI7QUFJSUMsT0FBSyxFQUFFO0FBSlgsQ0FQWSxDQUFoQjs7SUFlcUJDLFc7Ozs7O0FBRWpCLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUseU5BZ0JGLFlBQU07QUFDbkIsVUFBSU4sT0FBTyxDQUFDLE1BQUtPLEtBQUwsQ0FBV0gsS0FBWCxHQUFtQixDQUFwQixDQUFYLEVBQW1DO0FBQy9CLGNBQUtJLFFBQUwsQ0FBY1IsT0FBTyxDQUFDLE1BQUtPLEtBQUwsQ0FBV0gsS0FBWCxHQUFtQixDQUFwQixDQUFyQjtBQUNILE9BRkQsTUFHSztBQUNELGNBQUtJLFFBQUwsQ0FBY1IsT0FBTyxDQUFDLENBQUQsQ0FBckI7QUFDSDtBQUNKLEtBdkJrQjs7QUFBQSx3TkF3QkgsWUFBTTtBQUNsQixVQUFJQSxP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VUFBRSxFQUFDLEdBQVg7QUFBZSxVQUFFLEVBQUMsR0FBbEI7QUFBc0IsU0FBQyxFQUFDLEtBQXhCO0FBQThCLGNBQU0sRUFBQyxTQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixDQU5KLENBVEo7QUFBQTtBQUFBO0FBQUEsZzFUQURKO0FBMEdIOzs7O0VBakpvQ1csK0MiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xhbmRpbmcvY2Fyb3VzZWxEaXYvY2Fyb3VzZWxEaXYuY29tcG9uZW50LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDYXJkIGZyb20gJy4uLy4uL2V4dHJhL2NhcmQvY2FyZC5jb21wb25lbnQnO1xuLy8gaW1wb3J0ICcuL2Nhcm91c2VsRGl2LnN0eWxlcy5zY3NzJztcbmltcG9ydCBBcnJvd0xpbmsgZnJvbSAnLi4vLi4vZXh0cmEvYXJyb3cnO1xuXG5jb25zdCBvcHRpb25zID0gW1xuICAgIHtcbiAgICAgICAgaW1nOiBcIi9wbmdzL2ZlYXR1cmVkSW1hZ2UucG5nXCIsXG4gICAgICAgIHRpdGxlOiBcIk5leHRHZW4gQXBwIFBlcmZvcm1hbmNlIE1vbml0b3JpbmcgKEFQTSkgZGVsaXZlcmVkIHRocm91Z2ggRHluYXRyYWNlXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiQ29tbXN3b3J0aCBQYXJ0bmVycyB3aXRoIER5bmF0cmFjZSB0byBwcm92aWRlIGFuIEFJLVBvd2VyZWQsIEFsbC1pbi1vbmUgcGxhdGZvcm0gdG8gbW9uaXRvciwgb3B0aW1pemUgYW5kIHNjYWxlIHlvdXIgYXBwbGljYXRpb25zIGF1dG9ub21vdXNseSB3aXRoIFplcm8tdG91Y2ggY29uZmlndXJhdGlvbiBhY3Jvc3MgYWxsIHN0YWNrcyBvbiBhbnkgY2xvdWQuXCIsXG4gICAgICAgIGluZGV4OiAwLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbWc6IFwiL3BuZ3MvZmVhdHVyZWRJbWFnZTIucG5nXCIsXG4gICAgICAgIHRpdGxlOiBcIlllc1wiLFxuICAgICAgICBjb250ZW50OiBcIkNvbW1zd29ydGggUGFydG5lcnMgd2l0aCBEeW5hdHJhY2UgdG8gcHJvdmlkZSBhbiBBSS1Qb3dlcmVkLCBBbGwtaW4tb25lIHBsYXRmb3JtIHRvIG1vbml0b3IsIG9wdGltaXplIGFuZCBzY2FsZSB5b3VyIGFwcGxpY2F0aW9ucyBhdXRvbm9tb3VzbHkgd2l0aCBaZXJvLXRvdWNoIGNvbmZpZ3VyYXRpb24gYWNyb3NzIGFsbCBzdGFja3Mgb24gYW55IGNsb3VkLlwiLFxuICAgICAgICBpbmRleDogMSxcbiAgICB9XG5dXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcm91c2VsRGl2IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaW1nOiBcIlwiLFxuICAgICAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiLFxuICAgICAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKG9wdGlvbnNbMF0pXG4gICAgfVxuXG4gICAgc2V0T3B0aW9uUmlnaHQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zW3RoaXMuc3RhdGUuaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShvcHRpb25zW3RoaXMuc3RhdGUuaW5kZXggKyAxXSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUob3B0aW9uc1swXSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRPcHRpb25MZWZ0ID0gKCkgPT4ge1xuICAgICAgICBpZiAob3B0aW9uc1t0aGlzLnN0YXRlLmluZGV4IC0gMV0pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUob3B0aW9uc1t0aGlzLnN0YXRlLmluZGV4IC0gMV0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKG9wdGlvbnNbb3B0aW9ucy5sZW5ndGggLSAxXSlcbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwibGVmdC1idXR0b25cIiBvbkNsaWNrPXt0aGlzLnNldE9wdGlvbkxlZnR9Pnt0aGlzLnByb3BzLmxlZnRBcnJvd308L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1ncmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCB0aXRsZT17dGhpcy5zdGF0ZS50aXRsZX0gc3ViVGl0bGU9e3RoaXMucHJvcHMuYmx1ZVNlbWlDaXJjbGV9IGNvbnRlbnQ9e3RoaXMuc3RhdGUuY29udGVudH0gbGluaz17PEFycm93TGluayB0ZXh0PVwiUmVhZCBNb3JlXCIgLz59IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicmlnaHQtYnV0dG9uXCIgb25DbGljaz17dGhpcy5zZXRPcHRpb25SaWdodH0+e3RoaXMucHJvcHMucmlnaHRBcnJvd308L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2Fyb3VzZWwtb3B0Jz5cblxuXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmluZGV4ID8gJyAnIDogJ3N2Zyd9IHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMlwiIHZpZXdCb3g9XCIwIDAgMTIgMTJcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCI2XCIgY3k9XCI2XCIgcj1cIjUuNVwiIHN0cm9rZT1cIiMyMDhGRkZcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9e3RoaXMuc3RhdGUuaW5kZXggPyAnc3ZnJyA6ICcgJ30gd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgdmlld0JveD1cIjAgMCAxMiAxMlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjZcIiBjeT1cIjZcIiByPVwiNS41XCIgc3Ryb2tlPVwiIzIwOEZGRlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5jYXJvdXNlbC1vcHR7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdmd7XG4gICAgICAgICAgICAgICAgZmlsbDogIzIwOEZGRjtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJvdXNlbC1kaXYge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgLy8gY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbjogMHZoIDIuNXZ3O1xuICAgICAgICAgICAgd2lkdGg6IDk1dnc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jYXJvdXNlbC1ncmlkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgICAgICBnYXA6IDlweDtcbiAgICAgICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcm91c2VsLWdyaWQgOmdsb2JhbCguY2FyZCkge1xuICAgICAgICAgICAgbWluLWhlaWdodDogNTAwcHg7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgICAgIC8vcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcm91c2VsLWdyaWQgOmdsb2JhbCguY2FyZCBwKSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOTcuNSU7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2Fyb3VzZWwtZ3JpZCA6Z2xvYmFsKC5jYXJkIC5saW5rKSB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMDklO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjbGVmdC1idXR0b24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiAzMXB4O1xuICAgICAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAjcmlnaHQtYnV0dG9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogMzFweDtcbiAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkwcHgpIHtcblxuICAgICAgICAuY2Fyb3VzZWwtZ3JpZHtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0MDBweCwgMWZyKSk7XG4gICAgICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3MHB4KSB7XG5cbiAgICAgICAgLmNhcm91c2VsLWdyaWR7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxufVxuXG4gICAgICAgICAgICAgICAgYH1cblxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuXG4gICAgICAgICk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/landing/carouselDiv/carouselDiv.component.jsx\n");

/***/ })

})