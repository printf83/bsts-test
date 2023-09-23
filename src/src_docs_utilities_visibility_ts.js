"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbsts_test"] = self["webpackChunkbsts_test"] || []).push([["src_docs_utilities_visibility_ts"],{

/***/ "./src/docs/utilities/visibility.ts":
/*!******************************************!*\
  !*** ./src/docs/utilities/visibility.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   visibility: () => (/* binding */ visibility)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"./node_modules/@printf83/bsts/build/esm/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./src/ctl/example/_index.ts\");\n/* harmony import */ var _ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ctl/main/content.js */ \"./src/ctl/main/content.ts\");\n\n\n\nconst visibility = {\n    title: \"Visibility\",\n    description: \"Control the visibility of elements, without modifying their display, with visibility utilities.\",\n    item: (db) => {\n        (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.resetContentIndex)();\n        return [\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Set the {{visibility}} of elements with Bootstrap visibility utilities. These utility classes do not modify the {{display}} value at all and do not affect layout – {{.invisible}} elements still take up space in the page.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"warning\", callout: true }, \"Elements with the {{.invisible}} class will be hidden {{i::both}} visually and for assistive technology/screen reader users.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Apply {{.visible}} or {{.invisible}} as needed.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    output: () => {\n                        return [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ visible: true }, \"Visible\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ visible: false }, \"Invisible\"),\n                        ];\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"css\",\n                    code: `\n\t\t\t\t\t\t// Class\n\t\t\t\t\t\t.visible {\n\t\t\t\t\t\tvisibility: visible !important;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.invisible {\n\t\t\t\t\t\tvisibility: hidden !important;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t`,\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Sass\")]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Utilities API\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Visibility utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"css\",\n                    title: \"scss/_utilities.scss\",\n                    source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss\",\n                    code: `\n\t\t\t\t\t\t\"visibility\": (\n\t\t\t\t\t\tproperty: visibility,\n\t\t\t\t\t\tclass: null,\n\t\t\t\t\t\tvalues: (\n\t\t\t\t\t\t\tvisible: visible,\n\t\t\t\t\t\t\tinvisible: hidden,\n\t\t\t\t\t\t)\n\t\t\t\t\t\t),\n\t\t\t\t\t`,\n                }),\n            ]),\n        ];\n    },\n};\n\n\n//# sourceURL=webpack://bsts-test/./src/docs/utilities/visibility.ts?");

/***/ })

}]);