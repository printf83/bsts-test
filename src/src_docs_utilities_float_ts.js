"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbsts_test"] = self["webpackChunkbsts_test"] || []).push([["src_docs_utilities_float_ts"],{

/***/ "./src/docs/utilities/float.ts":
/*!*************************************!*\
  !*** ./src/docs/utilities/float.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   float: () => (/* binding */ float)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"./node_modules/@printf83/bsts/build/esm/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./src/ctl/example/_index.ts\");\n/* harmony import */ var _ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ctl/main/content.js */ \"./src/ctl/main/content.ts\");\n\n\n\nconst float = {\n    title: \"Float\",\n    description: \"Toggle floats on any element, across any breakpoint, using Bootstrap responsive float utilities.\",\n    item: (db) => {\n        (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.resetContentIndex)();\n        return [\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Overview\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"These utility classes float an element to the left or right, or disable floating, based on the current viewport size using the {{https://developer.mozilla.org/en-US/docs/Web/CSS/float::CSS float property}}. {{!important}} is included to avoid specificity issues. These use the same viewport breakpoints as Bootstrap grid system. Please be aware float utilities have no effect on flex items.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    output: () => {\n                        return [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ float: \"start\" }, \"Float start on all viewport sizes\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.br(),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ float: \"end\" }, \"Float end on all viewport sizes\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.br(),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ float: \"none\" }, \"Don't float on all viewport sizes\"),\n                        ];\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Responsive\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Responsive variations also exist for each {{float}} value.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    showViewport: true,\n                    output: () => {\n                        return [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ float: \"sm-end\" }, \"Float end on viewports sized SM (small) or wider\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.br(),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ float: \"md-end\" }, \"Float end on viewports sized MD (medium) or wider\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.br(),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ float: \"lg-end\" }, \"Float end on viewports sized LG (large) or wider\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.br(),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ float: \"xl-end\" }, \"Float end on viewports sized XL (extra-large) or wider\"),\n                        ];\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Here are all the support classes:\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n                    item: [\n                        ...[\"\", \"-sm\", \"-md\", \"-lg\", \"-xl\", \"-xxl\"]\n                            .map((i) => {\n                            return [\"start\", \"end\", \"none\"].map((j) => `{{.float${i}-${j}}}`);\n                        })\n                            .flat(),\n                    ],\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Sass\")]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Utilities API\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Float utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"css\",\n                    title: \"scss/_utilities.scss\",\n                    source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss\",\n                    code: `\n\t\t\t\t\t\t\"float\": (\n\t\t\t\t\t\tresponsive: true,\n\t\t\t\t\t\tproperty: float,\n\t\t\t\t\t\tvalues: (\n\t\t\t\t\t\t\tstart: left,\n\t\t\t\t\t\t\tend: right,\n\t\t\t\t\t\t\tnone: none,\n\t\t\t\t\t\t)\n\t\t\t\t\t\t),\n\t\t\t\t\t`,\n                }),\n            ]),\n        ];\n    },\n};\n\n\n//# sourceURL=webpack://bsts-test/./src/docs/utilities/float.ts?");

/***/ })

}]);