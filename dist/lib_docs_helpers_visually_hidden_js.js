"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_helpers_visually_hidden_js"],{

/***/ "./lib/docs/helpers/visually_hidden.js":
/*!*********************************************!*\
  !*** ./lib/docs/helpers/visually_hidden.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   visually_hidden: () => (/* binding */ visually_hidden)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"./node_modules/@printf83/bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst visually_hidden = {\n    title: \"Visually hidden\",\n    description: \"Use these helpers to visually hide elements but keep them accessible to assistive technologies.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Visually hide an element while still allowing it to be exposed to assistive technologies (such as screen readers) with {{.visually-hidden}}. Use {{.visually-hidden-focusable}} to visually hide an element by default, but to display it when it’s focused (e.g. by a keyboard-only user). {{.visually-hidden-focusable}} can also be applied to a container–thanks to {{:focus-within}}, the container will be displayed when any child element of the container receives focus.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(2, { visually: \"hidden\" }, \"Title for screen readers\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({ visually: \"hidden-focusable\", href: \"#content\" }, \"Skip to main content\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ visually: \"hidden-focusable\" }, [\n                        \"A container wiht a \",\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({ href: \"#\" }, \"focusable element\"),\n                        \".\",\n                    ]),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Both {{visually-hidden}} and {{visually-hidden-focusable}} can also be used as mixins.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            code: `\n\t\t\t\t// Usage as a mixin\n\n\t\t\t\t.visually-hidden-title {\n\t\t\t\t@include visually-hidden;\n\t\t\t\t}\n\n\t\t\t\t.skip-navigation {\n\t\t\t\t@include visually-hidden-focusable;\n\t\t\t\t}\n\t\t\t\t`,\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/helpers/visually_hidden.js?");

/***/ })

}]);