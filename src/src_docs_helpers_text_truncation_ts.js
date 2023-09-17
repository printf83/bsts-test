"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbsts_test"] = self["webpackChunkbsts_test"] || []).push([["src_docs_helpers_text_truncation_ts"],{

/***/ "./src/docs/helpers/text_truncation.ts":
/*!*********************************************!*\
  !*** ./src/docs/helpers/text_truncation.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   text_truncation: () => (/* binding */ text_truncation)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"./node_modules/@printf83/bsts/build/esm/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./src/ctl/example/_index.ts\");\n/* harmony import */ var _ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ctl/main/content.js */ \"./src/ctl/main/content.ts\");\n\n\n\nconst text_truncation = {\n    title: \"Text truncation\",\n    description: \"Truncate long strings of text with an ellipsis.\",\n    item: (db) => {\n        (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.resetContentIndex)();\n        return [\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"For longer content, you can add a {{.text-truncate}} class to truncate the text with an ellipsis. {{b::Requires }}{{cb::display: inline-block}}{{b:: or }}{{cb::display: block}}{{b::.}}\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    output: () => {\n                        return [\n                            //Block level\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 2, textTruncate: true }, \"This text is quite long, and will be truncated once displayed.\")),\n                            //Inline level\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({\n                                display: \"inline-block\",\n                                textTruncate: true,\n                                style: { maxWidth: \"150px\" },\n                            }, \"This text is quite long, and will be truncated once displayed.\"),\n                        ];\n                    },\n                }),\n            ]),\n        ];\n    },\n};\n\n\n//# sourceURL=webpack://bsts-test/./src/docs/helpers/text_truncation.ts?");

/***/ })

}]);