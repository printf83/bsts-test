"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_example_headers_js"],{

/***/ "./lib/docs/example/headers.js":
/*!*************************************!*\
  !*** ./lib/docs/example/headers.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headers: () => (/* binding */ headers)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst headers = {\n    title: \"Headers\",\n    description: \"Display your branding, navigation, search, and more with these header components\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Sample 1\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { padding: 0 },\n            output: () => {\n                const component = (arg) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.header({\n                        display: \"flex\",\n                        flex: \"wrap\",\n                        justifyContent: \"center\",\n                        paddingY: 3,\n                        marginBottom: 4,\n                        border: \"bottom\",\n                    }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                            href: \"#\",\n                            display: \"flex\",\n                            alignItem: \"center\",\n                            marginBottom: [3, \"md-0\"],\n                            marginEnd: \"md-auto\",\n                            linkColor: \"body-emphasis\",\n                            textDecoration: \"none\",\n                        }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: arg.icon, h: 4 }, arg.title)),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.container({\n                            type: \"pill\",\n                            link: arg.link,\n                        }),\n                    ]));\n                };\n                return component({\n                    icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({ type: \"brand\", id: \"bootstrap\", h: 3, marginBottom: 0 }),\n                    title: \"Simple header\",\n                    link: [\n                        { active: true, href: \"#\", elem: \"Home\" },\n                        { href: \"#\", elem: \"Features\" },\n                        { href: \"#\", elem: \"Pricing\" },\n                        { href: \"#\", elem: \"FAQs\" },\n                        { href: \"#\", elem: \"About\" },\n                    ],\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Sample 2\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { padding: 0 },\n            output: () => {\n                const component = (arg) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.header({\n                        display: \"flex\",\n                        justifyContent: \"center\",\n                        paddingY: 3,\n                    }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.container({\n                        type: \"pill\",\n                        link: arg,\n                    })));\n                };\n                return component([\n                    { active: true, href: \"#\", elem: \"Home\" },\n                    { href: \"#\", elem: \"Features\" },\n                    { href: \"#\", elem: \"Pricing\" },\n                    { href: \"#\", elem: \"FAQs\" },\n                    { href: \"#\", elem: \"About\" },\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Sample 3\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { padding: 0 },\n            output: () => {\n                const component = (arg) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.header({\n                        display: \"flex\",\n                        flex: \"wrap\",\n                        alignItem: \"center\",\n                        justifyContent: [\"center\", \"md-between\"],\n                        paddingY: 3,\n                        marginBottom: 4,\n                        border: \"bottom\",\n                    }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"md-3\", marginBottom: [2, \"md-0\"] }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                            href: \"#\",\n                            display: \"inline-flex\",\n                            linkColor: \"body-emphasis\",\n                            textDecoration: \"none\",\n                            h: 3,\n                        }, arg.icon)),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.container({\n                            col: [12, \"md-auto\"],\n                            marginBottom: [2, \"md-0\"],\n                            justifyContent: \"center\",\n                            link: arg.link,\n                        }),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"md-3\", textAlign: \"end\" }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ outline: true, marginEnd: 2, on: { click: arg.onlogin } }, \"Login\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ on: { click: arg.onsignup } }, \"Sign-up\"),\n                        ]),\n                    ]));\n                };\n                return component({\n                    icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon(\"fab bootstrap\"),\n                    link: [\n                        { paddingX: 2, color: \"secondary\", href: \"#\", elem: \"Home\" },\n                        { paddingX: 2, href: \"#\", elem: \"Features\" },\n                        { paddingX: 2, href: \"#\", elem: \"Pricing\" },\n                        { paddingX: 2, href: \"#\", elem: \"FAQs\" },\n                        { paddingX: 2, href: \"#\", elem: \"About\" },\n                    ],\n                    onlogin: (event) => {\n                        //do login\n                    },\n                    onsignup: (event) => {\n                        //do sign up\n                    },\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Sample 4\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { bgColor: \"dark\", padding: 0 },\n            output: () => {\n                const component = (arg) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.header({\n                        padding: 3,\n                        theme: \"dark\",\n                    }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                        display: \"flex\",\n                        flex: \"wrap\",\n                        alignItem: \"center\",\n                        justifyContent: [\"center\", \"lg-start\"],\n                    }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                            href: \"#\",\n                            display: \"flex\",\n                            alignItem: \"center\",\n                            marginBottom: [2, \"lg-0\"],\n                            textColor: \"white\",\n                            textDecoration: \"none\",\n                            h: 3,\n                            marginEnd: 2,\n                        }, arg.icon),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.container({\n                            col: [12, \"lg-auto\"],\n                            marginBottom: [2, \"md-0\"],\n                            marginEnd: \"lg-auto\",\n                            justifyContent: \"center\",\n                            link: arg.link,\n                        }),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.form({\n                            col: [12, \"lg-auto\"],\n                            marginBottom: [3, \"lg-0\"],\n                            marginEnd: \"lg-3\",\n                            role: \"search\",\n                            on: {\n                                submit: arg.onsearch,\n                            },\n                        }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({ type: \"search\" })),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ textAlign: \"end\" }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                outline: true,\n                                color: \"light\",\n                                marginEnd: 2,\n                                on: { click: arg.onlogin },\n                            }, \"Login\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"warning\", on: { click: arg.onsignup } }, \"Sign-up\"),\n                        ]),\n                    ])));\n                };\n                return component({\n                    icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon(\"fab bootstrap\"),\n                    link: [\n                        { paddingX: 2, color: \"secondary\", href: \"#\", elem: \"Home\" },\n                        { paddingX: 2, href: \"#\", elem: \"Features\" },\n                        { paddingX: 2, href: \"#\", elem: \"Pricing\" },\n                        { paddingX: 2, href: \"#\", elem: \"FAQs\" },\n                        { paddingX: 2, href: \"#\", elem: \"About\" },\n                    ],\n                    onlogin: (event) => {\n                        //do login\n                    },\n                    onsignup: (event) => {\n                        //do sign up\n                    },\n                    onsearch: (event) => {\n                        //do search\n                    },\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Sample 5\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { padding: 0 },\n            output: () => {\n                const component = (arg) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.header({\n                        padding: 3,\n                        marginBottom: 3,\n                        border: \"bottom\",\n                    }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                        display: \"flex\",\n                        flex: \"wrap\",\n                        alignItem: \"center\",\n                        justifyContent: [\"center\", \"lg-start\"],\n                    }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                            href: \"#\",\n                            display: \"flex\",\n                            alignItem: \"center\",\n                            marginBottom: [2, \"lg-0\"],\n                            linkColor: \"body-emphasis\",\n                            textDecoration: \"none\",\n                            h: 3,\n                            marginEnd: 2,\n                        }, arg.icon),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.container({\n                            col: [12, \"lg-auto\"],\n                            marginBottom: [2, \"md-0\"],\n                            marginEnd: \"lg-auto\",\n                            justifyContent: \"center\",\n                            link: arg.link,\n                        }),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.form({\n                            col: [12, \"lg-auto\"],\n                            marginBottom: [3, \"lg-0\"],\n                            marginEnd: \"lg-3\",\n                            role: \"search\",\n                            on: {\n                                submit: arg.onsearch,\n                            },\n                        }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({ type: \"search\", placeholder: \"Search...\" })),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                            textAlign: \"end\",\n                            class: \"dropdown\",\n                        }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.toggleLink({\n                                href: \"#\",\n                            }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.img({\n                                src: arg.img,\n                                rounded: \"circle\",\n                                attrWidth: 32,\n                                attrHeight: 32,\n                            })),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.menu({\n                                small: true,\n                            }, arg.menu ? arg.menu : \"\"),\n                        ]),\n                    ])));\n                };\n                return component({\n                    img: \"https://picsum.photos/seed/bsts_0/32/32\",\n                    icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon(\"fab bootstrap\"),\n                    link: [\n                        { paddingX: 2, color: \"secondary\", href: \"#\", elem: \"Overview\" },\n                        { paddingX: 2, href: \"#\", elem: \"Inventory\" },\n                        { paddingX: 2, href: \"#\", elem: \"Customers\" },\n                        { paddingX: 2, href: \"#\", elem: \"Products\" },\n                    ],\n                    menu: [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"New project...\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Setting\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Profile\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.divider(),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Sign out\"),\n                    ],\n                    onsearch: (event) => {\n                        //do search\n                    },\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Sample 6\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { padding: 0 },\n            output: () => {\n                return [];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [];\n            },\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/example/headers.js?");

/***/ })

}]);