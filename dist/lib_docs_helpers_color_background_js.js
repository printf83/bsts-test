"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_helpers_color_background_js"],{

/***/ "./lib/docs/helpers/color_background.js":
/*!**********************************************!*\
  !*** ./lib/docs/helpers/color_background.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   color_background: () => (/* binding */ color_background)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"./node_modules/@printf83/bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst color_background = {\n    title: \"Color and background\",\n    description: \"Set a background color with contrasting foreground color.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Overview\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Color and background helpers combine the power of Bootstrap {{nav:docs/utilities/colors::.text-* utilities}} and {{nav:docs/utilities/background::.bg-* utilities}} in one class. Using Bootstrap Sass {{color-contrast()}} function, Bootstrap automatically determine a contrasting {{color}} for a particular {{background-color}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"warning\", callout: true }, \"{{b::Heads up! }}There’s currently no support for a CSS-native {{color-contrast}} function, so Bootstrap use Bootstrap own via Sass. This means that customizing Bootstrap theme colors via CSS variables may cause color contrast issues with these utilities.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\"primary\", \"secondary\", \"success\", \"danger\", \"warning\", \"info\", \"light\", \"dark\"].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ textBgColor: i, padding: 3 }, `${_printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.uppercaseFirst(i)} with contrasting color`));\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"info\", callout: true }, \"{{b::Accessibility tip: }}Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies like screen readers. Please ensure the meaning is obvious from the content itself (e.g., the visible text) or is included through alternative means, such as additional text hidden with the {{.visually-hidden}} class.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"With components\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use them in place of combined {{.text-*}} and {{.bg-*}} classes, like on {{nav:docs/components/badge#background-colors::badges}}:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { display: \"flex\", gap: 2 },\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.badge({ textBgColor: \"primary\" }, \"Primary\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.badge({ textBgColor: \"info\" }, \"Info\"),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Or on {{nav:docs/components/card#background_and_color::cards}}:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { display: \"flex\", gap: 4 },\n            output: () => {\n                const item = (textBgColor) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.container({ textBgColor: textBgColor, style: { width: \"18rem\" } }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.header(\"Header\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.body(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.text(\"Some quick example text to build on the card title and make up the bulk of the card's content.\")),\n                ]);\n                return [item(\"primary\"), item(\"info\")];\n            },\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/helpers/color_background.js?");

/***/ })

}]);