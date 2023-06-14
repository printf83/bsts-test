"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_helpers_clearfix_js"],{

/***/ "./lib/docs/helpers/clearfix.js":
/*!**************************************!*\
  !*** ./lib/docs/helpers/clearfix.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearfix: () => (/* binding */ clearfix)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst clearfix = {\n    title: \"Clearfix\",\n    description: \"Quickly and easily clear floated content within a container by adding a clearfix utility.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Easily clear {{floats}} by adding {{.clearfix}}{{b:: to the parent element}}. Can also be used as a mixin.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use in HTML:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"html\",\n            code: `<div class=\"clearfix\">...</div>`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"The mixin source code:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/mixins/clearfix.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/mixins/clearfix.scss\",\n            code: `\n\t\t\t\t@mixin clearfix() {\n\t\t\t\t&::after {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tclear: both;\n\t\t\t\t\tcontent: \"\";\n\t\t\t\t}\n\t\t\t\t}\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use the mixin in SCSS:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            code: `\n\t\t\t\t.element {\n\t\t\t\t@include clearfix;\n\t\t\t\t}\n\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"The following example shows how the clearfix can be used. Without the clearfix the wrapping div would not span around the buttons which would cause a broken layout.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ bgColor: \"info\", clearfix: true }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ float: \"start\", color: \"secondary\" }, \"Example button floated left\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ float: \"end\", color: \"secondary\" }, \"Example button floated right\"),\n                ]);\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Without clearfix, it will look like this:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ bgColor: \"info\" }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ float: \"start\", color: \"secondary\" }, \"Example button floated left\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ float: \"end\", color: \"secondary\" }, \"Example button floated right\"),\n                ]);\n            },\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/helpers/clearfix.js?");

/***/ })

}]);