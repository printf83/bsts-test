"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_utilities_opacity_js"],{

/***/ "./lib/docs/utilities/opacity.js":
/*!***************************************!*\
  !*** ./lib/docs/utilities/opacity.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"opacity\": () => (/* binding */ opacity)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst opacity = {\n    title: \"Opacity\",\n    description: \"Control the opacity of elements.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"The {{opacity}} property sets the opacity level for an element. The opacity level describes the transparency level, where {{1}} is not transparent at all, {{.5}} is 50% visible, and {{0}} is completely transparent.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Set the {{opacity}} of an element using {{.opacity-{value} }}utilities.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { gap: 1 },\n            output: () => {\n                return [100, 75, 50, 25].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                    opacity: i,\n                    padding: 3,\n                    textBgColor: \"primary\",\n                    rounded: true,\n                    fontWeight: \"bold\",\n                    display: \"inline-block\",\n                }, `${i}%`));\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Utilities API\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Opacity utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_utilities.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_utilities.scss\",\n            code: `\n\t\t\t\t\"opacity\": (\n\t\t\t\tproperty: opacity,\n\t\t\t\tvalues: (\n\t\t\t\t\t0: 0,\n\t\t\t\t\t25: .25,\n\t\t\t\t\t50: .5,\n\t\t\t\t\t75: .75,\n\t\t\t\t\t100: 1,\n\t\t\t\t)\n\t\t\t\t),\n\t\t\t`,\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/utilities/opacity.js?");

/***/ })

}]);