"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_utilities_vertical_align_js"],{

/***/ "./lib/docs/utilities/vertical_align.js":
/*!**********************************************!*\
  !*** ./lib/docs/utilities/vertical_align.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"vertical_align\": () => (/* binding */ vertical_align)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst vertical_align = {\n    title: \"Vertical alignment\",\n    description: \"Easily change the vertical alignment of inline, inline-block, inline-table, and table cell elements.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Change the alignment of elements with the {{https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align::vertical-alignment}} utilities. Please note that vertical-align only affects inline, inline-block, inline-table, and table cell elements.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Choose from {{.align-baseline}}, {{.align-top}}, {{.align-middle}}, {{.align-bottom}}, {{.align-text-bottom}}, and {{.align-text-top}} as needed.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"To vertically center non-inline content (like {{<div>}}s and more), use Bootstrap {{nav:docs/utilities/flex#align_items::flex box utilities}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"With inline elements:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({ verticalAlign: \"baseline\" }, \"baseline\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({ verticalAlign: \"top\" }, \"top\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({ verticalAlign: \"middle\" }, \"middle\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({ verticalAlign: \"bottom\" }, \"bottom\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({ verticalAlign: \"text-top\" }, \"text-top\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({ verticalAlign: \"text-bottom\" }, \"text-bottom\"),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"With table cells:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.table({ style: { height: \"100px\" } }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.tbody(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.tr([\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.td({ verticalAlign: \"baseline\" }, \"baseline\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.td({ verticalAlign: \"top\" }, \"top\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.td({ verticalAlign: \"middle\" }, \"middle\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.td({ verticalAlign: \"bottom\" }, \"bottom\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.td({ verticalAlign: \"text-top\" }, \"text-top\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.td({ verticalAlign: \"text-bottom\" }, \"text-bottom\"),\n                ])));\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Sass\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Utilities API\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Vertical align utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_utilities.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_utilities.scss\",\n            code: `\n\t\t\t\t\"align\": (\n\t\t\t\tproperty: vertical-align,\n\t\t\t\tclass: align,\n\t\t\t\tvalues: baseline top middle bottom text-bottom text-top\n\t\t\t\t),\n\t\t\t`,\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/utilities/vertical_align.js?");

/***/ })

}]);