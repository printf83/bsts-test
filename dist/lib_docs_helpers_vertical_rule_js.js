"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_helpers_vertical_rule_js"],{

/***/ "./lib/docs/helpers/vertical_rule.js":
/*!*******************************************!*\
  !*** ./lib/docs/helpers/vertical_rule.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"vertical_rule\": () => (/* binding */ vertical_rule)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"./node_modules/@printf83/bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst vertical_rule = {\n    title: \"Vertical rule\",\n    description: \"Use the custom vertical rule helper to create vertical dividers like the {{<hr>}} element.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"How it works\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Vertical rules are inspired by the {{<hr>}} element, allowing you to create vertical dividers in common layouts. They’re styled just like {{<hr>}} elements:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\n                \"They’re {{1px}} wide\",\n                \"They have {{min-height}} of {{1em}}\",\n                \"Their color is set via {{currentColor}} and {{opacity}}\",\n            ],\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Customize them with additional styles as needed.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Example\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.verticalrule();\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Vertical rules scale their height in flex layouts:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\", style: { height: \"200px\" } }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.verticalrule());\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"With stack\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"They can also be used in {{nav:docs/helpers/stacks::stacks}}:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"flex-box\" },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ hstack: true, gap: 3 }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, \"First item\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2, marginStart: \"auto\" }, \"Second item\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.verticalrule(),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, \"Third item\"),\n                ]);\n            },\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/helpers/vertical_rule.js?");

/***/ })

}]);