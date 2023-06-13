"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_utilities_shadow_js"],{

/***/ "./lib/docs/utilities/shadow.js":
/*!**************************************!*\
  !*** ./lib/docs/utilities/shadow.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   shadow: () => (/* binding */ shadow)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst shadow = {\n    title: \"Shadows\",\n    description: \"Add or remove shadows to elements with box-shadow utilities.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Examples\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"While shadows on components are disabled by default in Bootstrap and can be enabled via {{$enable-shadows}}, you can also quickly add or remove a shadow with Bootstrap {{box-shadow}} utility classes. Includes support for {{.shadow-none}} and three default sizes (which have associated variables to match).\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ shadow: \"none\", padding: 3, marginBottom: 5, bgColor: \"body-tertiary\", rounded: true }, \"No shadow\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ shadow: \"sm\", padding: 3, marginBottom: 5, bgColor: \"body-tertiary\", rounded: true }, \"Small shadow\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ shadow: true, padding: 3, marginBottom: 5, bgColor: \"body-tertiary\", rounded: true }, \"Regular shadow\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ shadow: \"lg\", padding: 3, marginBottom: 5, bgColor: \"body-tertiary\", rounded: true }, \"Large shadow\"),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Sass\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Variables\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n            code: `\n\t\t\t\t$box-shadow:                  0 .5rem 1rem rgba($black, .15);\n\t\t\t\t$box-shadow-sm:               0 .125rem .25rem rgba($black, .075);\n\t\t\t\t$box-shadow-lg:               0 1rem 3rem rgba($black, .175);\n\t\t\t\t$box-shadow-inset:            inset 0 1px 2px rgba($black, .075);\n\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Utilities API\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Shadow utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_utilities.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss\",\n            code: `\n\t\t\t\t\"shadow\": (\n\t\t\t\tproperty: box-shadow,\n\t\t\t\tclass: shadow,\n\t\t\t\tvalues: (\n\t\t\t\t\tnull: $box-shadow,\n\t\t\t\t\tsm: $box-shadow-sm,\n\t\t\t\t\tlg: $box-shadow-lg,\n\t\t\t\t\tnone: none,\n\t\t\t\t)\n\t\t\t\t),\n\t\t\t`,\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/utilities/shadow.js?");

/***/ })

}]);