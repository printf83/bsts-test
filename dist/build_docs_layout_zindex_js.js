"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["build_docs_layout_zindex_js"],{

/***/ "./build/docs/layout/zindex.js":
/*!*************************************!*\
  !*** ./build/docs/layout/zindex.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   zindex: () => (/* binding */ zindex)\n/* harmony export */ });\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./build/ctl/example/_index.js\");\n\r\nconst zindex = {\r\n    title: \"Z-index\",\r\n    description: \"While not a part of Bootstrap’s grid system, z-indexes play an important part in how Bootstrap components overlay and interact with one another.\",\r\n    item: () => {\r\n        return [\r\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.section([\r\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"Several Bootstrap components utilize {{z-index}}, the CSS property that helps control layout by providing a third axis to arrange content. Bootstrap utilize a default z-index scale in Bootstrap that’s been designed to properly layer navigation, tooltips and popovers, modals, and more.\"),\r\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"These higher values start at an arbitrary number, high and specific enough to ideally avoid conflicts. Bootstrap need a standard set of these across Bootstrap layered components—tooltips, popovers, navbars, dropdowns, modals—so Bootstrap can be reasonably consistent in the behaviors. There’s no reason Bootstrap couldn’t have used {{100+}} or {{500+}}.\"),\r\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"Bootstrap don’t encourage customization of these individual values; should you change one, you likely need to change them all.\"),\r\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.codepreview({\r\n                    type: \"css\",\r\n                    title: \"scss/_variables.scss\",\r\n                    source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\r\n                    code: `\r\n\t\t\t\t$zindex-dropdown:                   1000;\r\n\t\t\t\t$zindex-sticky:                     1020;\r\n\t\t\t\t$zindex-fixed:                      1030;\r\n\t\t\t\t$zindex-offcanvas-backdrop:         1040;\r\n\t\t\t\t$zindex-offcanvas:                  1045;\r\n\t\t\t\t$zindex-modal-backdrop:             1050;\r\n\t\t\t\t$zindex-modal:                      1055;\r\n\t\t\t\t$zindex-popover:                    1070;\r\n\t\t\t\t$zindex-tooltip:                    1080;\r\n\t\t\t\t$zindex-toast:                      1090;\r\n\t\t\t`,\r\n                }),\r\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"To handle overlapping borders within components (e.g., buttons and inputs in input groups), Bootstrap use low single digit {{z-index}} values of {{1}}, {{2}}, and {{3}} for default, hover, and active states. On hover/focus/active, Bootstrap bring a particular element to the forefront with a higher {{z-index}} value to show their border over the sibling elements.\"),\r\n            ]),\r\n        ];\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./build/docs/layout/zindex.js?");

/***/ })

}]);