"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_utilities_overflow_js"],{

/***/ "./lib/docs/utilities/overflow.js":
/*!****************************************!*\
  !*** ./lib/docs/utilities/overflow.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"overflow\": () => (/* binding */ overflow)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst overflow = {\n    title: \"Overflow\",\n    description: \"Use these shorthand utilities for quickly configuring how content overflows an element.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Overflow\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Adjust the {{overflow}} property on the fly with four default values and classes. These classes are not responsive by default.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { overflow: \"hidden\" },\n            outputAttr: { display: [\"md-flex\", \"grid\"], gap: 1 },\n            output: () => {\n                return [\"auto\", \"hidden\", \"visible\", \"scroll\"].map((i, ix) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                        overflow: i,\n                        padding: 3,\n                        bgColor: \"body-tertiary\",\n                        style: { maxHeight: \"100px\", maxWidth: \"260px\" },\n                    }, [\n                        `This is an example of using {{.overflow-${i} }}on an element with set width and height dimensions. `,\n                        i === \"auto\" ? \"By design, this content will vertically scroll.\" : \"\",\n                    ]);\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"{{overflow-x}}\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Adjust the {{overflow-x}} property to affect the overflow of content horizontally.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { overflow: \"hidden\" },\n            outputAttr: { display: [\"md-flex\", \"grid\"], gap: 1 },\n            output: () => {\n                return [\"auto\", \"hidden\", \"visible\", \"scroll\"].map((i, ix) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                        overflowX: i,\n                        padding: 3,\n                        bgColor: \"body-tertiary\",\n                        style: { maxHeight: \"100px\", maxWidth: \"200px\", whiteSpace: \"nowrap\" },\n                    }, [`{{.overflow-x-${i} }}example{{br}}on an element with set width and height dimensions.`]);\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"{{overflow-y}}\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Adjust the {{overflow-y}} property to affect the overflow of content vertically.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { overflow: \"hidden\" },\n            outputAttr: { display: [\"md-flex\", \"grid\"], gap: 1 },\n            output: () => {\n                return [\"auto\", \"hidden\", \"visible\", \"scroll\"].map((i, ix) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                        overflowY: i,\n                        padding: 3,\n                        bgColor: \"body-tertiary\",\n                        style: { maxHeight: \"100px\", maxWidth: \"200px\" },\n                    }, `This is an example of using {{.overflow-${i} }}on an element with set width and height dimensions.`);\n                });\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Using Sass variables, you may customize the overflow utilities by changing the {{$overflows}} variable in {{_variables.scss}}.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Sass\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Utilities API\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Overflow utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_utilities.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_utilities.scss\",\n            code: `\n\t\t\t\t\"overflow\": (\n\t\t\t\tproperty: overflow,\n\t\t\t\tvalues: auto hidden visible scroll,\n\t\t\t\t),\n\t\t\t\t\"overflow-x\": (\n\t\t\t\tproperty: overflow-x,\n\t\t\t\tvalues: auto hidden visible scroll,\n\t\t\t\t),\n\t\t\t\t\"overflow-y\": (\n\t\t\t\tproperty: overflow-y,\n\t\t\t\tvalues: auto hidden visible scroll,\n\t\t\t\t),\n\t\t\t`,\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/utilities/overflow.js?");

/***/ })

}]);