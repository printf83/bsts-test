"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["build_docs_utilities_opacity_js"],{

/***/ "./build/docs/utilities/opacity.js":
/*!*****************************************!*\
  !*** ./build/docs/utilities/opacity.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   opacity: () => (/* binding */ opacity)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"./node_modules/@printf83/bsts/build/esm/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./build/ctl/example/_index.js\");\n\r\n\r\nconst opacity = {\r\n    title: \"Opacity\",\r\n    description: \"Control the opacity of elements.\",\r\n    item: () => {\r\n        return [\r\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\r\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"The {{opacity}} property sets the opacity level for an element. The opacity level describes the transparency level, where {{1}} is not transparent at all, {{.5}} is 50% visible, and {{0}} is completely transparent.\"),\r\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Set the {{opacity}} of an element using {{.opacity-{value} }}utilities.\"),\r\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\r\n                    outputAttr: { display: \"flex\", flex: \"wrap\", gap: 2 },\r\n                    output: () => {\r\n                        return [100, 75, 50, 25].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\r\n                            opacity: i,\r\n                            padding: 3,\r\n                            textBgColor: \"primary\",\r\n                            rounded: true,\r\n                            fontWeight: \"bold\",\r\n                            display: \"inline-block\",\r\n                        }, `${i}%`));\r\n                    },\r\n                }),\r\n            ]),\r\n            //----------------------\r\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\r\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Utilities API\"),\r\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Opacity utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}.\"),\r\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\r\n                    type: \"css\",\r\n                    title: \"scss/_utilities.scss\",\r\n                    source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss\",\r\n                    code: `\r\n\t\t\t\t\t\t\"opacity\": (\r\n\t\t\t\t\t\tproperty: opacity,\r\n\t\t\t\t\t\tvalues: (\r\n\t\t\t\t\t\t\t0: 0,\r\n\t\t\t\t\t\t\t25: .25,\r\n\t\t\t\t\t\t\t50: .5,\r\n\t\t\t\t\t\t\t75: .75,\r\n\t\t\t\t\t\t\t100: 1,\r\n\t\t\t\t\t\t)\r\n\t\t\t\t\t\t),\r\n\t\t\t\t\t`,\r\n                }),\r\n            ]),\r\n        ];\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./build/docs/utilities/opacity.js?");

/***/ })

}]);