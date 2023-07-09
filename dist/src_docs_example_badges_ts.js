"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["src_docs_example_badges_ts"],{

/***/ "./src/docs/example/badges.ts":
/*!************************************!*\
  !*** ./src/docs/example/badges.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   badges: () => (/* binding */ badges)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"./node_modules/@printf83/bsts/build/esm/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./src/ctl/example/_index.ts\");\n\n\nconst badges = {\n    title: \"Badges\",\n    description: \"Make badges work with custom inner HTML and new looks.\",\n    item: () => {\n        return [\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Style 1\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    outputAttr: { display: \"flex\", flex: \"wrap\", gap: 2 },\n                    output: () => {\n                        return [\"primary\", \"secondary\", \"success\", \"danger\", \"warning\", \"info\", \"light\", \"dark\"].map((i) => {\n                            return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.badge({ textBgColor: i, rounded: \"pill\" }, _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.uppercaseFirst(i));\n                        });\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Style 2\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    outputAttr: { display: \"flex\", flex: \"wrap\", gap: 2 },\n                    output: () => {\n                        return [\"primary\", \"secondary\", \"success\", \"danger\", \"warning\", \"info\", \"light\", \"dark\"].map((i) => {\n                            return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.badge({\n                                bgColor: `${i}-subtle`,\n                                textColor: `${i}-emphasis`,\n                                rounded: \"pill\",\n                            }, _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.uppercaseFirst(i));\n                        });\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Style 3\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    outputAttr: { display: \"flex\", flex: \"wrap\", gap: 2 },\n                    output: () => {\n                        return [\"primary\", \"secondary\", \"success\", \"danger\", \"warning\", \"info\", \"light\", \"dark\"].map((i) => {\n                            return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.badge({\n                                bgColor: `${i}-subtle`,\n                                textColor: `${i}-emphasis`,\n                                border: true,\n                                borderColor: `${i}-subtle`,\n                                rounded: \"pill\",\n                            }, _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.uppercaseFirst(i));\n                        });\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"With image\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    outputAttr: { display: \"flex\", flex: \"wrap\", gap: 2 },\n                    output: () => {\n                        return [\"primary\", \"secondary\", \"success\", \"danger\", \"warning\", \"info\", \"light\", \"dark\"].map((i, ix) => {\n                            return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.badge({\n                                bgColor: `${i}-subtle`,\n                                textColor: `${i}-emphasis`,\n                                border: true,\n                                borderColor: `${i}-subtle`,\n                                rounded: \"pill\",\n                                display: \"flex\",\n                                alignItem: \"center\",\n                                gap: 2,\n                            }, [\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.img({\n                                    rounded: \"circle\",\n                                    attrWidth: 24,\n                                    attrHeight: 24,\n                                    src: `https://picsum.photos/seed/bsts_${ix}/24/24.webp`,\n                                }),\n                                _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.uppercaseFirst(i),\n                            ]);\n                        });\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"With close button\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    outputAttr: { display: \"flex\", flex: \"wrap\", gap: 2 },\n                    output: () => {\n                        return [\"primary\", \"secondary\", \"success\", \"danger\", \"warning\", \"info\", \"light\", \"dark\"].map((i, ix) => {\n                            return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.badge({\n                                bgColor: `${i}-subtle`,\n                                textColor: `${i}-emphasis`,\n                                border: true,\n                                borderColor: `${i}-subtle`,\n                                rounded: \"pill\",\n                                display: \"flex\",\n                                alignItem: \"center\",\n                                gap: 2,\n                            }, [\n                                _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.uppercaseFirst(i),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({\n                                    id: \"x-circle-fill\",\n                                    fontSize: 6,\n                                    pointerEvent: \"auto\",\n                                    on: {\n                                        click: (event) => {\n                                            const target = event.target;\n                                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.removeElement(target.closest(\".badge\"));\n                                        },\n                                    },\n                                }),\n                            ]);\n                        });\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"With image and close button\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    outputAttr: { display: \"flex\", flex: \"wrap\", gap: 2 },\n                    output: () => {\n                        return [\"primary\", \"secondary\", \"success\", \"danger\", \"warning\", \"info\", \"light\", \"dark\"].map((i, ix) => {\n                            return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.badge({\n                                bgColor: `${i}-subtle`,\n                                textColor: `${i}-emphasis`,\n                                border: true,\n                                borderColor: `${i}-subtle`,\n                                rounded: \"pill\",\n                                display: \"flex\",\n                                alignItem: \"center\",\n                                gap: 2,\n                            }, [\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.img({\n                                    rounded: \"circle\",\n                                    attrWidth: 24,\n                                    attrHeight: 24,\n                                    src: `https://picsum.photos/seed/bsts_${ix}/24/24.webp`,\n                                }),\n                                _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.uppercaseFirst(i),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.verticalrule(),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({\n                                    id: \"x-circle-fill\",\n                                    fontSize: 6,\n                                    pointerEvent: \"auto\",\n                                    on: {\n                                        click: (event) => {\n                                            const target = event.target;\n                                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.removeElement(target.closest(\".badge\"));\n                                        },\n                                    },\n                                }),\n                            ]);\n                        });\n                    },\n                }),\n            ]),\n            //----------------------\n        ];\n    },\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./src/docs/example/badges.ts?");

/***/ })

}]);