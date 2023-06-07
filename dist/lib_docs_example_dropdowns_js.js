"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_example_dropdowns_js"],{

/***/ "./lib/docs/example/dropdowns.js":
/*!***************************************!*\
  !*** ./lib/docs/example/dropdowns.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dropdowns: () => (/* binding */ dropdowns)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"./node_modules/@printf83/bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst dropdowns = {\n    title: \"Dropdowns\",\n    description: \"Enhance your dropdowns with filters, icons, custom styles, and more.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Custom style\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            showCodepen: false,\n            outputAttr: {\n                gap: 3,\n            },\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.menu({ customStyle: 1, theme: \"light\", debug: true, shadow: true, style: { width: \"220px\" } }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\", active: true }, \"Action\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Another action\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Something else here\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.divider(),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Separated link\"),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.menu({ customStyle: 1, theme: \"dark\", debug: true, shadow: true, style: { width: \"220px\" } }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\", active: true }, \"Action\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Another action\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Something else here\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.divider(),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Separated link\"),\n                    ]),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Live preview\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: {\n                gap: 1,\n            },\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.container([\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.toggle(\"Light dropdown\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.menu({ customStyle: 1, theme: \"light\" }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\", active: true }, \"Action\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Another action\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Something else here\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.divider(),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Separated link\"),\n                        ]),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.container([\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.toggle(\"Dark dropdown\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.menu({ customStyle: 1, theme: \"dark\" }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\", active: true }, \"Action\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Another action\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Something else here\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.divider(),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Separated link\"),\n                        ]),\n                    ]),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Filter\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            showCodepen: false,\n            outputAttr: {\n                gap: 3,\n            },\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.menu({ theme: \"light\", paddingTop: 0, debug: true, shadow: true, style: { width: \"280px\" } }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.form({\n                            padding: 2,\n                            marginBottom: 2,\n                            bgColor: \"body-tertiary\",\n                            border: \"bottom\",\n                            rounded: \"top\",\n                        }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({ type: \"search\", autocomplete: \"off\", placeholder: \"Type to filter...\" })),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({ id: \"record-fill\", color: \"success\" }) }, \"Action\")),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({ id: \"record-fill\", color: \"primary\" }) }, \"Another action\")),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({ id: \"record-fill\", color: \"danger\" }) }, \"Something else here\")),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({ id: \"record-fill\", color: \"info\" }) }, \"Separated link\")),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.menu({ theme: \"dark\", paddingTop: 0, debug: true, shadow: true, style: { width: \"280px\" } }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.form({\n                            padding: 2,\n                            marginBottom: 2,\n                            bgColor: \"body-tertiary\",\n                            border: \"bottom\",\n                            rounded: \"top\",\n                        }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({ type: \"search\", autocomplete: \"off\", placeholder: \"Type to filter...\" })),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({ id: \"record-fill\", color: \"success\" }) }, \"Action\")),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({ id: \"record-fill\", color: \"primary\" }) }, \"Another action\")),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({ id: \"record-fill\", color: \"danger\" }) }, \"Something else here\")),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({ id: \"record-fill\", color: \"info\" }) }, \"Separated link\")),\n                    ]),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Live preview\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: {\n                gap: 1,\n            },\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.container([\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.toggle(\"Light dropdown\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.menu({ theme: \"light\", paddingTop: 0 }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.form({\n                                padding: 2,\n                                marginBottom: 2,\n                                bgColor: \"body-tertiary\",\n                                border: \"bottom\",\n                                rounded: \"top\",\n                            }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({\n                                type: \"search\",\n                                autocomplete: \"off\",\n                                placeholder: \"Type to filter...\",\n                            })),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({ id: \"record-fill\", color: \"success\" }) }, \"Action\")),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({ id: \"record-fill\", color: \"primary\" }) }, \"Another action\")),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({ id: \"record-fill\", color: \"danger\" }) }, \"Something else here\")),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({ id: \"record-fill\", color: \"info\" }) }, \"Separated link\")),\n                        ]),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.container([\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.toggle(\"Dark dropdown\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.menu({ theme: \"dark\", paddingTop: 0 }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.form({\n                                padding: 2,\n                                marginBottom: 2,\n                                bgColor: \"body-tertiary\",\n                                border: \"bottom\",\n                                rounded: \"top\",\n                            }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({\n                                type: \"search\",\n                                autocomplete: \"off\",\n                                placeholder: \"Type to filter...\",\n                            })),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({ id: \"record-fill\", color: \"success\" }) }, \"Action\")),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({ id: \"record-fill\", color: \"primary\" }) }, \"Another action\")),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({ id: \"record-fill\", color: \"danger\" }) }, \"Something else here\")),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({ id: \"record-fill\", color: \"info\" }) }, \"Separated link\")),\n                        ]),\n                    ]),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Menu\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            showCodepen: false,\n            outputAttr: {\n                gap: 3,\n            },\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.menu({ theme: \"light\", debug: true, shadow: true, style: { width: \"220px\" } }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"files\" }, \"Documents\")),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"image-fill\" }, \"Photos\")),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"film\" }, \"Movie\")),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"music-note-beamed\" }, \"Music\")),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"joystick\" }, \"Games\")),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.divider(),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\", color: \"danger\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"trash\" }, \"Trash\")),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.menu({ theme: \"dark\", debug: true, shadow: true, style: { width: \"220px\" } }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"files\" }, \"Documents\")),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"image-fill\" }, \"Photos\")),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"film\" }, \"Movie\")),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"music-note-beamed\" }, \"Music\")),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"joystick\" }, \"Games\")),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.divider(),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"trash\" }, \"Trash\")),\n                    ]),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Live preview\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: {\n                gap: 1,\n            },\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.container([\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.toggle(\"Light dropdown\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.menu({ theme: \"light\" }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"files\" }, \"Documents\")),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"image-fill\" }, \"Photos\")),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"film\" }, \"Movie\")),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"music-note-beamed\" }, \"Music\")),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"joystick\" }, \"Games\")),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.divider(),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\", color: \"danger\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"trash\" }, \"Trash\")),\n                        ]),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.container([\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.toggle(\"Dark dropdown\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.menu({ theme: \"dark\" }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"files\" }, \"Documents\")),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"image-fill\" }, \"Photos\")),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"film\" }, \"Movie\")),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"music-note-beamed\" }, \"Music\")),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"joystick\" }, \"Games\")),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.divider(),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"trash\" }, \"Trash\")),\n                        ]),\n                    ]),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            code: `\r\n\t\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"CSS\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass variables\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n            code: `\r\n\t\t\t`,\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/example/dropdowns.js?");

/***/ })

}]);