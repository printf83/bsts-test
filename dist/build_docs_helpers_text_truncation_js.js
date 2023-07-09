"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["build_docs_helpers_text_truncation_js"],{

/***/ "./build/docs/helpers/text_truncation.js":
/*!***********************************************!*\
  !*** ./build/docs/helpers/text_truncation.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   text_truncation: () => (/* binding */ text_truncation)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"./node_modules/@printf83/bsts/build/esm/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./build/ctl/example/_index.js\");\n\r\n\r\nconst text_truncation = {\r\n    title: \"Text truncation\",\r\n    description: \"Truncate long strings of text with an ellipsis.\",\r\n    item: () => {\r\n        return [\r\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\r\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"For longer content, you can add a {{.text-truncate}} class to truncate the text with an ellipsis. {{b::Requires }}{{cb::display: inline-block}}{{b:: or }}{{cb::display: block}}{{b::.}}\"),\r\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\r\n                    output: () => {\r\n                        return [\r\n                            //Block level\r\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 2, textTruncate: true }, \"This text is quite long, and will be truncated once displayed.\")),\r\n                            //Inline level\r\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({ display: \"inline-block\", textTruncate: true, style: { maxWidth: \"150px\" } }, \"This text is quite long, and will be truncated once displayed.\"),\r\n                        ];\r\n                    },\r\n                }),\r\n            ]),\r\n        ];\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./build/docs/helpers/text_truncation.js?");

/***/ })

}]);