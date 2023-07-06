"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_example_breadcrumbs_js"],{

/***/ "./lib/docs/example/breadcrumbs.js":
/*!*****************************************!*\
  !*** ./lib/docs/example/breadcrumbs.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   breadcrumbs: () => (/* binding */ breadcrumbs)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"./node_modules/@printf83/bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst breadcrumbs = {\n    title: \"Breadcrumbs\",\n    description: \"Integrate custom icons and create stepper components.\",\n    item: () => {\n        return [\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Rounded padding\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.breadcrumb.container({ label: \"breadcrumb\", bgColor: \"body-tertiary\", rounded: 3, padding: 3 }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.breadcrumb.item({ href: \"#\" }, \"Home\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.breadcrumb.item({ href: \"#\" }, \"Library\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.breadcrumb.item({ active: true, href: \"#\" }, \"Data\"),\n                        ]);\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"With icon\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.breadcrumb.container({ label: \"breadcrumb\", bgColor: \"body-tertiary\", rounded: 3, padding: 3 }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.breadcrumb.item({\n                                textDecoration: \"none\",\n                                fontWeight: \"semibold\",\n                                linkColor: \"body-emphasis\",\n                                href: \"#\",\n                            }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon(\"house-fill\")),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.breadcrumb.item({\n                                textDecoration: \"none\",\n                                fontWeight: \"semibold\",\n                                linkColor: \"body-emphasis\",\n                                href: \"#\",\n                            }, \"Library\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.breadcrumb.item({ active: true, href: \"#\" }, \"Data\"),\n                        ]);\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Custom divider\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.breadcrumb.container({\n                            label: \"breadcrumb\",\n                            bgColor: \"body-tertiary\",\n                            rounded: 3,\n                            padding: 3,\n                            divider: `url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%236c757d'%3E%3Cpath fill-rule='evenodd' d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E\")`,\n                        }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.breadcrumb.item({\n                                textDecoration: \"none\",\n                                fontWeight: \"semibold\",\n                                linkColor: \"body-emphasis\",\n                                href: \"#\",\n                            }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon(\"house-fill\")),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.breadcrumb.item({\n                                textDecoration: \"none\",\n                                fontWeight: \"semibold\",\n                                linkColor: \"body-emphasis\",\n                                href: \"#\",\n                            }, \"Library\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.breadcrumb.item({ active: true, href: \"#\" }, \"Data\"),\n                        ]);\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Flex\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.breadcrumb.container({\n                            label: \"breadcrumb\",\n                            bgColor: \"body-tertiary\",\n                            rounded: 3,\n                            border: true,\n                            display: \"grid\",\n                            style: { \"grid-template-columns\": \"1fr 1fr 1fr\" },\n                            textAlign: \"center\",\n                            padding: 3,\n                            divider: \"''\",\n                        }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.breadcrumb.item({\n                                textDecoration: \"none\",\n                                fontWeight: \"semibold\",\n                                linkColor: \"body-emphasis\",\n                                href: \"#\",\n                            }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"house-fill\" }, \"Home\")),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.breadcrumb.item({\n                                textDecoration: \"none\",\n                                fontWeight: \"semibold\",\n                                linkColor: \"body-emphasis\",\n                                href: \"#\",\n                            }, \"Library\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.breadcrumb.item({ active: true, href: \"#\" }, \"Data\"),\n                        ]);\n                    },\n                }),\n            ]),\n            //----------------------\n        ];\n    },\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/example/breadcrumbs.js?");

/***/ })

}]);