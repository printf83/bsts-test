"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_utilities_interactions_js"],{

/***/ "./lib/docs/utilities/interactions.js":
/*!********************************************!*\
  !*** ./lib/docs/utilities/interactions.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   interactions: () => (/* binding */ interactions)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"./node_modules/@printf83/bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst interactions = {\n    title: \"Interactions\",\n    description: \"Utility classes that change how users interact with contents of a website.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Text selection\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Change the way in which the content is selected when the user interacts with it.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ userSelect: \"all\" }, \"This paragraph will be entirely selected when clicked by the user.\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ userSelect: \"auto\" }, \"This paragraph has default select behavior.\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ userSelect: \"none\" }, \"This paragraph will not be selectable when clicked by the user.\"),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Pointer events\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Bootstrap provides {{.pe-none}} and {{.pe-auto}} classes to prevent or add element interactions.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p([\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({ href: \"#\", pointerEvent: \"none\", tabindex: \"-1\", aria: { disabled: \"true\" } }, \"This link\"),\n                        \" can not be clicked\",\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p([\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({ href: \"#\", pointerEvent: \"auto\" }, \"This link\"),\n                        \" can be clicked (this is default behavior).\",\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ pointerEvent: \"none\" }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({ href: \"#\" }, \"This link\"),\n                        \"  can not be clicked because the {{pointer-events}} property is inherited from its parent. However, \",\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({ href: \"#\", pointerEvent: \"auto\" }, \"this link\"),\n                        \" has a {{pe-auto}} class and can be clicked.\",\n                    ]),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"The {{.pe-none}} class (and the {{pointer-events}} CSS property it sets) only prevents interactions with a pointer (mouse, stylus, touch). Links and controls with {{.pe-none}} are, by default, still focusable and actionable for keyboard users. To ensure that they are completely neutralized even for keyboard users, you may need to add further attributes such as {{tabindex='-1'}} (to prevent them from receiving keyboard focus) and {{aria-disabled='true'}} (to convey the fact they are effectively disabled to assistive technologies), and possibly use JavaScript to completely prevent them from being actionable.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"If possible, the simpler solution is:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\n                \"For form controls, add the {{disabled}} HTML attribute.\",\n                \"For links, remove the {{href}} attribute, making it a non-interactive anchor or placeholder link.\",\n            ],\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Sass\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Utilities API\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Interaction utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_utilities.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss\",\n            code: `\r\n\t\t\t\t\"user-select\": (\r\n\t\t\t\tproperty: user-select,\r\n\t\t\t\tvalues: all auto none\r\n\t\t\t\t),\r\n\t\t\t\t\"pointer-events\": (\r\n\t\t\t\tproperty: pointer-events,\r\n\t\t\t\tclass: pe,\r\n\t\t\t\tvalues: none auto,\r\n\t\t\t\t),\r\n\t\t\t`,\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/utilities/interactions.js?");

/***/ })

}]);