"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_example_modals_js"],{

/***/ "./lib/docs/example/modals.js":
/*!************************************!*\
  !*** ./lib/docs/example/modals.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modals: () => (/* binding */ modals)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst modals = {\n    title: \"Modals\",\n    description: \"Transform modals to serve any purpose, from feature tours to dialogs.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"IOS Style\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { bgColor: \"body-tertiary\" },\n            showCodepen: false,\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.container({ debug: true, contentAttr: { rounded: 4 } }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.header({ close: true, borderNone: \"bottom\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.title(\"Modal title\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.body({ paddingY: 0 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS.\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.footer({\n                        flex: \"column\",\n                        alignItem: \"stretch\",\n                        width: 100,\n                        gap: 2,\n                        paddingBottom: 3,\n                        borderNone: \"top\",\n                    }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"primary\", weight: \"lg\" }, \"Save changes\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                            dismiss: \"modal\",\n                            color: \"secondary\",\n                            weight: \"lg\",\n                        }, \"Close\"),\n                    ]),\n                ]);\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                    id: \"abcTestNode\",\n                    on: {\n                        build: (event) => {\n                            const target = event.target;\n                            setTimeout(() => {\n                                _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.replaceWith(target, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ id: \"defTestNode\" }, \"Element changed\"));\n                            }, 5000);\n                        },\n                    },\n                }, \"This element will change after 5 second\");\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Android Style\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { bgColor: \"body-tertiary\" },\n            showCodepen: false,\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.container({ debug: true }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.body({ padding: 4, textAlign: \"center\" }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.title({ marginBottom: 0 }, \"Enable this setting?\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ marginBottom: 0 }, \"You can always change your mind in your account settings.\"),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.footer({\n                        flex: [\"nowrap\", \"grow-1\"],\n                        padding: 0,\n                    }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                            fontWeight: \"bold\",\n                            border: \"end\",\n                            flex: \"grow-1\",\n                            textDecoration: \"none\",\n                            color: \"link\",\n                            rounded: 0,\n                            weight: \"lg\",\n                            fontSize: 6,\n                            paddingY: 3,\n                            margin: 0,\n                        }, \"Yes, enable\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                            dismiss: \"modal\",\n                            flex: \"grow-1\",\n                            textDecoration: \"none\",\n                            color: \"link\",\n                            rounded: 0,\n                            weight: \"lg\",\n                            fontSize: 6,\n                            paddingY: 3,\n                            margin: 0,\n                        }, \"No thanks\"),\n                    ]),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            code: `\r\n\t\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"CSS\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass variables\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n            code: `\r\n\t\t\t`,\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/example/modals.js?");

/***/ })

}]);