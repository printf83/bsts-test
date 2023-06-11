"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_utilities_zindex_js"],{

/***/ "./lib/docs/utilities/zindex.js":
/*!**************************************!*\
  !*** ./lib/docs/utilities/zindex.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   zindex: () => (/* binding */ zindex)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst zindex = {\n    title: \"Z-index\",\n    description: \"Use Bootstrap low-level {{z-index}} utilities to quickly change the stack level of an element or component.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Example\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use {{z-index}} utilities to stack elements on top of one another. Requires a {{position}} value other than {{static}}, which can be set with custom styles or using Bootstrap {{nav:docs/utilities/position::position utilities}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"info\", callout: true }, \"Bootstrap call these “low-level” {{z-index}} utilities because of their default values of {{-1}} through {{3}}, which Bootstrap use for the layout of overlapping components. High-level {{z-index}} values are used for overlay components like modals and tooltips.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"zindex-box\", style: { height: \"200px\" } },\n            output: () => {\n                return [3, 2, 1, 0, \"n1\"].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ zIndex: i, position: \"absolute\", rounded: 3, padding: 5 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span(`z-${i}`)));\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Overlays\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Bootstrap overlay components—dropdown, modal, offcanvas, popover, toast, and tooltip—all have their own {{z-index}} values to ensure a usable experience with competing “layers” of an interface.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Read about them in the {{nav:docs/layout/zindex::z-index layout page}}.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Component approach\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"On some components, Bootstrap use Bootstrap low-level {{z-index}} values to manage repeating elements that overlap one another (like buttons in a button group or items in a list group).\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Learn about Bootstrap {{https://getbootstrap.com/docs/5.3/extend/approach/#z-index-scales::z-index approach}}.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"CSS\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass map \"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Customize this Sass map to change the available values and generated utilities.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n            code: `\n\t\t\t\t$zindex-levels: (\n\t\t\t\tn1: -1,\n\t\t\t\t0: 0,\n\t\t\t\t1: 1,\n\t\t\t\t2: 2,\n\t\t\t\t3: 3\n\t\t\t\t);\n\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Utilities API\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Position utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_utilities.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss\",\n            code: `\n\t\t\t\t\"z-index\": (\n\t\t\t\tproperty: z-index,\n\t\t\t\tclass: z,\n\t\t\t\tvalues: $zindex-levels,\n\t\t\t\t)\n\t\t\t`,\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/utilities/zindex.js?");

/***/ })

}]);