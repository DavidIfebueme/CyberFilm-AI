/*! For license information please see main.js.LICENSE.txt */
(()=>{var __webpack_modules__={"./src/components/App.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error("Cannot find module \'components/App.css\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }());\n/* harmony import */ var _TwoColumnForm_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TwoColumnForm.jsx */ "./src/components/TwoColumnForm.jsx");\n/* harmony import */ var _TwoColumnForm_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TwoColumnForm_jsx__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction App() {\n  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement((_TwoColumnForm_jsx__WEBPACK_IMPORTED_MODULE_1___default().jsx), null));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://frontend/./src/components/App.js?')},"./src/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");\n\nroot.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(_components_App__WEBPACK_IMPORTED_MODULE_0__["default"], null)));\n\n// If you want to start measuring performance in your app, pass a function\n// to log results (for example: reportWebVitals(console.log))\n// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals\nreportWebVitals();\n\n//# sourceURL=webpack://frontend/./src/index.js?')},"./src/components/TwoColumnForm.jsx":()=>{eval('throw new Error("Module parse failed: Unexpected token (11:4)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| function Tab(props) {\\n|   return (\\n>     <li className=\\"nav-item\\">\\n|       <button\\n|         className={`nav-link ${props.isActive ? \\"active bg-primary text-dark\\" : \\"\\"}`}");\n\n//# sourceURL=webpack://frontend/./src/components/TwoColumnForm.jsx?')}},__webpack_module_cache__={};function __webpack_require__(_){var e=__webpack_module_cache__[_];if(void 0!==e)return e.exports;var r=__webpack_module_cache__[_]={exports:{}};return __webpack_modules__[_](r,r.exports,__webpack_require__),r.exports}__webpack_require__.n=_=>{var e=_&&_.__esModule?()=>_.default:()=>_;return __webpack_require__.d(e,{a:e}),e},__webpack_require__.d=(_,e)=>{for(var r in e)__webpack_require__.o(e,r)&&!__webpack_require__.o(_,r)&&Object.defineProperty(_,r,{enumerable:!0,get:e[r]})},__webpack_require__.o=(_,e)=>Object.prototype.hasOwnProperty.call(_,e),__webpack_require__.r=_=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(_,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/index.js")})();