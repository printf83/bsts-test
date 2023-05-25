"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_layout_zindex_js"],{

/***/ "./lib/docs/layout/zindex.js":
/*!***********************************!*\
  !*** ./lib/docs/layout/zindex.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   zindex: () => (/* binding */ zindex)\n/* harmony export */ });\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\nconst zindex = {\n    title: \"Z-index\",\n    description: \"While not a part of Bootstrap’s grid system, z-indexes play an important part in how Bootstrap components overlay and interact with one another.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"Several Bootstrap components utilize {{z-index}}, the CSS property that helps control layout by providing a third axis to arrange content. Bootstrap utilize a default z-index scale in Bootstrap that’s been designed to properly layer navigation, tooltips and popovers, modals, and more.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"These higher values start at an arbitrary number, high and specific enough to ideally avoid conflicts. Bootstrap need a standard set of these across Bootstrap layered components—tooltips, popovers, navbars, dropdowns, modals—so Bootstrap can be reasonably consistent in the behaviors. There’s no reason Bootstrap couldn’t have used {{100+}} or {{500+}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"Bootstrap don’t encourage customization of these individual values; should you change one, you likely need to change them all.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss\",\n            code: `\r\n\t\t\t\t$zindex-dropdown:                   1000;\r\n\t\t\t\t$zindex-sticky:                     1020;\r\n\t\t\t\t$zindex-fixed:                      1030;\r\n\t\t\t\t$zindex-offcanvas-backdrop:         1040;\r\n\t\t\t\t$zindex-offcanvas:                  1045;\r\n\t\t\t\t$zindex-modal-backdrop:             1050;\r\n\t\t\t\t$zindex-modal:                      1055;\r\n\t\t\t\t$zindex-popover:                    1070;\r\n\t\t\t\t$zindex-tooltip:                    1080;\r\n\t\t\t\t$zindex-toast:                      1090;\r\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"To handle overlapping borders within components (e.g., buttons and inputs in input groups), Bootstrap use low single digit {{z-index}} values of {{1}}, {{2}}, and {{3}} for default, hover, and active states. On hover/focus/active, Bootstrap bring a particular element to the forefront with a higher {{z-index}} value to show their border over the sibling elements.\"),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/layout/zindex.js?");

/***/ })

}]);