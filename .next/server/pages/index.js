"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/Hello.tsx":
/*!**********************************!*\
  !*** ./src/components/Hello.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Hello(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: props.title\n            }, void 0, false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\planitPoker\\\\src\\\\components\\\\Hello.tsx\",\n                lineNumber: 5,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: props.subTitle\n            }, void 0, false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\planitPoker\\\\src\\\\components\\\\Hello.tsx\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hello);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWxsby50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLFNBQVNBLE1BQU1DLEtBQXVDLEVBQUM7SUFDckQscUJBQ0k7OzBCQUNBLDhEQUFDQzswQkFBSUQsTUFBTUUsS0FBSzs7Ozs7OzBCQUNoQiw4REFBQ0M7MEJBQUdILE1BQU1JLFFBQVE7Ozs7Ozs7O0FBR3hCO0FBRUEsaUVBQWVMLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvY29tcG9uZW50cy9IZWxsby50c3g/YTcxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZnVuY3Rpb24gSGVsbG8ocHJvcHM6e3RpdGxlOiBzdHJpbmcsIHN1YlRpdGxlOiBzdHJpbmd9KXtcclxuICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICA8aDE+e3Byb3BzLnRpdGxlfTwvaDE+XHJcbiAgICAgIDxwPntwcm9wcy5zdWJUaXRsZX08L3A+XHJcbiAgICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlbGxvOyJdLCJuYW1lcyI6WyJIZWxsbyIsInByb3BzIiwiaDEiLCJ0aXRsZSIsInAiLCJzdWJUaXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Hello.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Hello__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Hello */ \"./src/components/Hello.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\"use client\";\n\n\nfunction Home() {\n    let [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"Hello World\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"title\",\n                defaultValue: title,\n                onChange: (e)=>{\n                    setTitle(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\planitPoker\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hello__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                title: title,\n                subTitle: \"Tout le monde\"\n            }, void 0, false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\planitPoker\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 15,\n                columnNumber: 8\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\wamp64\\\\www\\\\planitPoker\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLTUE7QUFMTjtBQUV1QztBQUNSO0FBSWhCLFNBQVNHLE9BQU87SUFDM0IsSUFBSSxDQUFDQyxPQUFNQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFDO0lBQ2xDLHFCQUNFLDhEQUFDSTs7MEJBQ0csOERBQUNDO2dCQUFNQyxNQUFLO2dCQUFPQyxhQUFZO2dCQUFRQyxjQUFjTjtnQkFBT08sVUFBVSxDQUFDQyxJQUFJO29CQUN2RVAsU0FBU08sRUFBRUMsTUFBTSxDQUFDQyxLQUFLO2dCQUMzQjs7Ozs7OzBCQUNELDhEQUFDYix5REFBS0E7Z0JBQUNHLE9BQU9BO2dCQUFPVyxVQUFVOzs7Ozs7Ozs7Ozs7QUFHdEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICduZXh0L2ZvbnQvZ29vZ2xlJ1xyXG5pbXBvcnQgSGVsbG8gZnJvbSBcIkAvY29tcG9uZW50cy9IZWxsb1wiO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbJ2xhdGluJ10gfSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICBsZXQgW3RpdGxlLHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiSGVsbG8gV29ybGRcIik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJ0aXRsZVwiIGRlZmF1bHRWYWx1ZT17dGl0bGV9IG9uQ2hhbmdlPXsoZSk9PntcclxuICAgICAgICAgICAgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH19Lz5cclxuICAgICAgIDxIZWxsbyB0aXRsZT17dGl0bGV9IHN1YlRpdGxlPXtcIlRvdXQgbGUgbW9uZGVcIn0vPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJpbnRlciIsIkhlbGxvIiwidXNlU3RhdGUiLCJIb21lIiwidGl0bGUiLCJzZXRUaXRsZSIsImRpdiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiZGVmYXVsdFZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzdWJUaXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();