"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_utilities_sizing_js"],{

/***/ "./lib/docs/utilities/sizing.js":
/*!**************************************!*\
  !*** ./lib/docs/utilities/sizing.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sizing: () => (/* binding */ sizing)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"./node_modules/@printf83/bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst sizing = {\n    title: \"Sizing\",\n    description: \"Easily make an element as wide or as tall with Bootstrap width and height utilities.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Relative to the parent\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Width and height utilities are generated from the utility API in {{_utilities.scss}}. Includes support for {{25%}}, {{50%}}, {{75%}}, {{100%}}, and auto by default. Modify those values as you need to generate different utilities here.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"flex-box\" },\n            output: () => {\n                return [25, 50, 75, 100, \"auto\"].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ width: i, padding: 3 }, `Width ${i}${i !== \"auto\" ? \"%\" : \"\"}`));\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"flex-box\" },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ style: { height: \"100px\" } }, [25, 50, 75, 100, \"auto\"].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                    height: i,\n                    display: \"inline-block\",\n                    marginEnd: 1,\n                    style: { width: \"120px\" },\n                }, `Height ${i}${i !== \"auto\" ? \"%\" : \"\"}`)));\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"You can also use {{max-width: 100%;}} and {{max-height: 100%;}} utilities as needed.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"flex-box\" },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ style: { width: \"50%\", height: \"100px\" } }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ maxWidth: 100, style: { width: \"200%\" } }, \"Max-width 100%\"));\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"flex-box\" },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ style: { height: \"100px\" } }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ maxHeight: 100, style: { width: \"100px\", height: \"200px\" } }, \"Max-height 100%\"));\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Relative to the viewport\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"You can also use utilities to set the width and height relative to the viewport.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"flex-box\", overflow: \"auto\", style: { maxHeight: \"200px\" } },\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ minViewWidth: 100 }, \"Min-width 100vw\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ minViewHeight: 100 }, \"Min-height 100vh\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ viewWidth: 100 }, \"Width 100vw\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ viewHeight: 100 }, \"Height 100vh\"),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Sass\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Utilities API\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Sizing utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_utilities.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss\",\n            code: `\r\n\t\t\t\t\"width\": (\r\n\t\t\t\tproperty: width,\r\n\t\t\t\tclass: w,\r\n\t\t\t\tvalues: (\r\n\t\t\t\t\t25: 25%,\r\n\t\t\t\t\t50: 50%,\r\n\t\t\t\t\t75: 75%,\r\n\t\t\t\t\t100: 100%,\r\n\t\t\t\t\tauto: auto\r\n\t\t\t\t)\r\n\t\t\t\t),\r\n\t\t\t\t\"max-width\": (\r\n\t\t\t\tproperty: max-width,\r\n\t\t\t\tclass: mw,\r\n\t\t\t\tvalues: (100: 100%)\r\n\t\t\t\t),\r\n\t\t\t\t\"viewport-width\": (\r\n\t\t\t\tproperty: width,\r\n\t\t\t\tclass: vw,\r\n\t\t\t\tvalues: (100: 100vw)\r\n\t\t\t\t),\r\n\t\t\t\t\"min-viewport-width\": (\r\n\t\t\t\tproperty: min-width,\r\n\t\t\t\tclass: min-vw,\r\n\t\t\t\tvalues: (100: 100vw)\r\n\t\t\t\t),\r\n\t\t\t\t\"height\": (\r\n\t\t\t\tproperty: height,\r\n\t\t\t\tclass: h,\r\n\t\t\t\tvalues: (\r\n\t\t\t\t\t25: 25%,\r\n\t\t\t\t\t50: 50%,\r\n\t\t\t\t\t75: 75%,\r\n\t\t\t\t\t100: 100%,\r\n\t\t\t\t\tauto: auto\r\n\t\t\t\t)\r\n\t\t\t\t),\r\n\t\t\t\t\"max-height\": (\r\n\t\t\t\tproperty: max-height,\r\n\t\t\t\tclass: mh,\r\n\t\t\t\tvalues: (100: 100%)\r\n\t\t\t\t),\r\n\t\t\t\t\"viewport-height\": (\r\n\t\t\t\tproperty: height,\r\n\t\t\t\tclass: vh,\r\n\t\t\t\tvalues: (100: 100vh)\r\n\t\t\t\t),\r\n\t\t\t\t\"min-viewport-height\": (\r\n\t\t\t\tproperty: min-height,\r\n\t\t\t\tclass: min-vh,\r\n\t\t\t\tvalues: (100: 100vh)\r\n\t\t\t\t),\r\n\t\t\t`,\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/utilities/sizing.js?");

/***/ })

}]);