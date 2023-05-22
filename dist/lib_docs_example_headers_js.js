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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headers: () => (/* binding */ headers)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst headers = {\n    title: \"Headers\",\n    description: \"Display your branding, navigation, search, and more with these header components\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Example header 1\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { padding: 0 },\n            output: () => {\n                const component = (arg) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.header({\n                        display: \"flex\",\n                        flex: \"wrap\",\n                        justifyContent: \"center\",\n                        paddingY: 3,\n                        marginBottom: 4,\n                        border: \"bottom\",\n                    }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                            href: \"#\",\n                            display: \"flex\",\n                            alignItem: \"center\",\n                            marginBottom: [3, \"md-0\"],\n                            marginEnd: \"md-auto\",\n                            linkColor: \"body-emphasis\",\n                            textDecoration: \"none\",\n                        }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({\n                            icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({ id: arg.icon, h: 2, marginBottom: 0 }),\n                            h: 4,\n                        }, arg.title)),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.container({\n                            type: \"pill\",\n                            link: arg.link,\n                        }),\n                    ]));\n                };\n                return component({\n                    icon: \"fab bootstrap\",\n                    title: \"Simple header\",\n                    link: [\n                        { active: true, href: \"#\", elem: \"Home\" },\n                        { href: \"#\", elem: \"Features\" },\n                        { href: \"#\", elem: \"Pricing\" },\n                        { href: \"#\", elem: \"FAQs\" },\n                        { href: \"#\", elem: \"About\" },\n                    ],\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Example header 2\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { padding: 0 },\n            output: () => {\n                const component = (arg) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.header({\n                        display: \"flex\",\n                        justifyContent: \"center\",\n                        paddingY: 3,\n                    }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.container({\n                        type: \"pill\",\n                        link: arg,\n                    })));\n                };\n                return component([\n                    { active: true, href: \"#\", elem: \"Home\" },\n                    { href: \"#\", elem: \"Features\" },\n                    { href: \"#\", elem: \"Pricing\" },\n                    { href: \"#\", elem: \"FAQs\" },\n                    { href: \"#\", elem: \"About\" },\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Example header 3\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { padding: 0 },\n            output: () => {\n                const component = (arg) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.header({\n                        display: \"flex\",\n                        flex: \"wrap\",\n                        alignItem: \"center\",\n                        justifyContent: [\"center\", \"md-between\"],\n                        paddingY: 3,\n                        marginBottom: 4,\n                        border: \"bottom\",\n                    }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"md-3\", marginBottom: [2, \"md-0\"] }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                            href: \"#\",\n                            display: \"inline-flex\",\n                            linkColor: \"body-emphasis\",\n                            textDecoration: \"none\",\n                            h: 2,\n                        }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon(arg.icon))),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.container({\n                            col: [12, \"md-auto\"],\n                            marginBottom: [2, \"md-0\"],\n                            justifyContent: \"center\",\n                            link: arg.link\n                                ? arg.link.map((i) => {\n                                    i.paddingX = 2;\n                                    i.color = i.active ? \"secondary\" : undefined;\n                                    return i;\n                                })\n                                : undefined,\n                        }),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"md-3\", textAlign: \"end\" }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ outline: true, marginEnd: 2, on: { click: arg.onlogin } }, \"Login\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ on: { click: arg.onsignup } }, \"Sign-up\"),\n                        ]),\n                    ]));\n                };\n                return component({\n                    icon: \"fab bootstrap\",\n                    link: [\n                        { active: true, href: \"#\", elem: \"Home\" },\n                        { href: \"#\", elem: \"Features\" },\n                        { href: \"#\", elem: \"Pricing\" },\n                        { href: \"#\", elem: \"FAQs\" },\n                        { href: \"#\", elem: \"About\" },\n                    ],\n                    onlogin: (event) => {\n                        //do login\n                    },\n                    onsignup: (event) => {\n                        //do sign up\n                    },\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Example header 4\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { bgColor: \"dark\", padding: 0 },\n            output: () => {\n                const component = (arg) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.header({\n                        padding: 3,\n                        theme: \"dark\",\n                    }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                        display: \"flex\",\n                        flex: \"wrap\",\n                        alignItem: \"center\",\n                        justifyContent: [\"center\", \"lg-start\"],\n                    }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                            href: \"#\",\n                            display: \"flex\",\n                            alignItem: \"center\",\n                            marginBottom: [2, \"lg-0\"],\n                            textColor: \"white\",\n                            textDecoration: \"none\",\n                            h: 2,\n                            marginEnd: 2,\n                        }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon(arg.icon)),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.container({\n                            col: [12, \"lg-auto\"],\n                            marginBottom: [2, \"md-0\"],\n                            marginEnd: \"lg-auto\",\n                            justifyContent: \"center\",\n                            link: arg.link\n                                ? arg.link.map((i) => {\n                                    i.paddingX = 2;\n                                    i.color = i.active ? \"secondary\" : \"light\";\n                                    return i;\n                                })\n                                : undefined,\n                        }),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.form({\n                            col: [12, \"lg-auto\"],\n                            marginBottom: [3, \"lg-0\"],\n                            marginEnd: \"lg-3\",\n                            role: \"search\",\n                            on: {\n                                submit: arg.onsearch,\n                            },\n                        }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({ type: \"search\" })),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ textAlign: \"end\" }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                outline: true,\n                                color: \"light\",\n                                marginEnd: 2,\n                                on: { click: arg.onlogin },\n                            }, \"Login\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"warning\", on: { click: arg.onsignup } }, \"Sign-up\"),\n                        ]),\n                    ])));\n                };\n                return component({\n                    icon: \"fab bootstrap\",\n                    link: [\n                        { active: true, href: \"#\", elem: \"Home\" },\n                        { href: \"#\", elem: \"Features\" },\n                        { href: \"#\", elem: \"FAQs\" },\n                        { href: \"#\", elem: \"About\" },\n                    ],\n                    onlogin: (event) => {\n                        //do login\n                    },\n                    onsignup: (event) => {\n                        //do sign up\n                    },\n                    onsearch: (event) => {\n                        //do search\n                    },\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Example header 5\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { padding: 0 },\n            output: () => {\n                const component = (arg) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.header({\n                        padding: 3,\n                        marginBottom: 3,\n                        border: \"bottom\",\n                    }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                        display: \"flex\",\n                        flex: \"wrap\",\n                        alignItem: \"center\",\n                        justifyContent: [\"center\", \"lg-start\"],\n                    }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                            href: \"#\",\n                            display: \"flex\",\n                            alignItem: \"center\",\n                            marginBottom: [2, \"lg-0\"],\n                            linkColor: \"body-emphasis\",\n                            textDecoration: \"none\",\n                            h: 2,\n                            marginEnd: 2,\n                        }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon(arg.icon)),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.container({\n                            col: [12, \"lg-auto\"],\n                            marginBottom: [2, \"md-0\"],\n                            marginEnd: \"lg-auto\",\n                            justifyContent: \"center\",\n                            link: arg.link\n                                ? arg.link.map((i) => {\n                                    i.paddingX = 2;\n                                    i.color = i.active ? \"secondary\" : undefined;\n                                    return i;\n                                })\n                                : undefined,\n                        }),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.form({\n                            col: [12, \"lg-auto\"],\n                            marginBottom: [3, \"lg-0\"],\n                            marginEnd: \"lg-3\",\n                            role: \"search\",\n                            on: {\n                                submit: arg.onsearch,\n                            },\n                        }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({ type: \"search\", placeholder: \"Search...\" })),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                            textAlign: \"end\",\n                            class: \"dropdown\",\n                        }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.toggleLink({\n                                href: \"#\",\n                                color: \"body-emphasis\",\n                            }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.img({\n                                src: arg.img,\n                                rounded: \"circle\",\n                                attrWidth: 32,\n                                attrHeight: 32,\n                            })),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.menu(arg.menu ? arg.menu : \"\"),\n                        ]),\n                    ])));\n                };\n                return component({\n                    img: \"https://picsum.photos/seed/bsts_0/32/32\",\n                    icon: \"fab bootstrap\",\n                    link: [\n                        { active: true, href: \"#\", elem: \"Overview\" },\n                        { href: \"#\", elem: \"Inventory\" },\n                        { href: \"#\", elem: \"Customers\" },\n                        { href: \"#\", elem: \"Products\" },\n                    ],\n                    menu: [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"New project...\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Setting\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Profile\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.divider(),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Sign out\"),\n                    ],\n                    onsearch: (event) => {\n                        //do search\n                    },\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Example header 6\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { padding: 0 },\n            output: () => {\n                const componentHeader = (arg) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.header({\n                        paddingY: 3,\n                        marginBottom: 3,\n                        border: \"bottom\",\n                    }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                        container: \"fluid\",\n                        display: \"grid\",\n                        gap: 3,\n                        alignItem: \"center\",\n                        style: { \"grid-template-columns\": \"1fr 2fr\" },\n                    }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ class: \"dropdown\" }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.toggleLink({\n                                href: \"#\",\n                                color: \"body-emphasis\",\n                                display: \"flex\",\n                                alignItem: \"center\",\n                                col: \"lg-4\",\n                                marginBottom: [2, \"lg-0\"],\n                            }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({ id: arg.icon, h: 2, marginBottom: 0 })),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.menu({ shadow: true }, arg.link ? arg.link : \"\"),\n                        ]),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\", alignItem: \"center\" }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.form({\n                                width: 100,\n                                marginEnd: 3,\n                                role: \"search\",\n                                on: {\n                                    submit: arg.onsearch,\n                                },\n                            }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({ type: \"search\", placeholder: \"Search...\" })),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ flex: \"shrink-0\", class: \"dropdown\" }, [\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.toggleLink({\n                                    href: \"#\",\n                                    color: \"body-emphasis\",\n                                }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.img({\n                                    src: arg.img,\n                                    rounded: \"circle\",\n                                    attrWidth: 32,\n                                    attrHeight: 32,\n                                })),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.menu({ shadow: true }, arg.menu ? arg.menu : \"\"),\n                            ]),\n                        ]),\n                    ]));\n                };\n                const componentBody = (arg) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: \"fluid\", paddingBottom: 3 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"grid\", gap: 3, style: { \"grid-template-columns\": \"1fr 2fr\" } }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ bgColor: \"body-tertiary\", border: true, rounded: 3 }, arg.side ? arg.side : \"\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ bgColor: \"body-tertiary\", border: true, rounded: 3 }, arg.main ? arg.main : \"\"),\n                    ]));\n                };\n                const component = (arg) => {\n                    return [componentHeader(arg), componentBody(arg)];\n                };\n                return component({\n                    img: \"https://picsum.photos/seed/bsts_0/32/32\",\n                    icon: \"fab bootstrap\",\n                    link: [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\", active: true }, \"Overview\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Inventory\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Customers\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Products\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.divider(),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Reports\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Analytics\"),\n                    ],\n                    menu: [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"New project...\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Setting\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Profile\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.divider(),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Sign out\"),\n                    ],\n                    onsearch: (event) => {\n                        //do search\n                    },\n                    side: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2, style: { height: \"200px\" } }, \"@side\"),\n                    main: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2, style: { height: \"200px\" } }, \"@main\"),\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Example header 7\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { padding: 0 },\n            output: () => {\n                const componentNav = (arg) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.nav({ paddingY: 2, bgColor: \"body-secondary\", border: \"bottom\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true, display: \"flex\", flex: \"wrap\" }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.container({\n                            marginEnd: \"auto\",\n                            link: arg.startMenu?.map((i) => {\n                                i.linkColor = \"body-emphasis\";\n                                return i;\n                            }),\n                        }),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.container({\n                            link: arg.endMenu?.map((i) => {\n                                i.linkColor = \"body-emphasis\";\n                                return i;\n                            }),\n                        }),\n                    ]));\n                };\n                const componentHeader = (arg) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.header({ paddingY: 3, marginBottom: 4, border: \"bottom\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true, display: \"flex\", flex: \"wrap\", justifyContent: \"center\" }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                            href: \"#\",\n                            display: \"flex\",\n                            alignItem: \"center\",\n                            marginBottom: [3, \"lg-0\"],\n                            marginEnd: \"lg-auto\",\n                            linkColor: \"body-emphasis\",\n                            textDecoration: \"none\",\n                        }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({\n                            icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({ id: arg.icon, h: 2, marginBottom: 0 }),\n                            h: 4,\n                        }, arg.title)),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.form({\n                            col: [12, \"lg-auto\"],\n                            marginBottom: [3, \"lg-0\"],\n                            role: \"search\",\n                            on: {\n                                submit: arg.onsearch ? arg.onsearch : undefined,\n                            },\n                        }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({ type: \"search\", placeholder: \"Search...\" })),\n                    ]));\n                };\n                return [\n                    componentNav({\n                        startMenu: [\n                            { href: \"#\", elem: \"Home\" },\n                            { href: \"#\", elem: \"Features\" },\n                            { href: \"#\", elem: \"Pricing\" },\n                            { href: \"#\", elem: \"FAQs\" },\n                            { href: \"#\", elem: \"About\" },\n                        ],\n                        endMenu: [\n                            { href: \"#\", elem: \"Login\" },\n                            { href: \"#\", elem: \"Sign up\" },\n                        ],\n                    }),\n                    componentHeader({ icon: \"fab bootstrap\", title: \"Double header\", onsearch: (event) => { } }),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Example header 8\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { padding: 0, overflow: \"hidden\" },\n            output: () => {\n                const component = (arg) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.header([\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ paddingX: 3, paddingY: 2, textBgColor: \"dark\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                            display: \"flex\",\n                            flex: \"wrap\",\n                            alignItem: \"center\",\n                            justifyContent: [\"center\", \"lg-start\"],\n                        }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                                href: \"#\",\n                                display: \"flex\",\n                                alignItem: \"center\",\n                                marginY: [2, \"lg-0\"],\n                                marginEnd: \"lg-auto\",\n                                linkColor: \"light\",\n                                textDecoration: \"none\",\n                            }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({ id: arg.icon, h: 2, marginBottom: 0 })),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.container({\n                                col: [12, \"lg-auto\"],\n                                marginY: [2, \"md-0\"],\n                                small: true,\n                                justifyContent: \"center\",\n                                link: arg.link.map((i) => {\n                                    let result = {\n                                        linkColor: i.active === true ? \"secondary\" : \"light\",\n                                        href: i.href,\n                                        elem: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({ id: i.icon, h: 2 }), iconPosition: \"top\" }, i.label),\n                                    };\n                                    return result;\n                                }),\n                            }),\n                        ]))),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ paddingX: 3, paddingY: 2, border: \"bottom\", marginBottom: 3 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true, display: \"flex\", flex: \"wrap\", justifyContent: \"center\" }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.form({\n                                col: [12, \"lg-auto\"],\n                                marginBottom: [2, \"lg-0\"],\n                                marginEnd: \"lg-auto\",\n                                role: \"search\",\n                                on: {\n                                    submit: arg.onsearch ? arg.onsearch : undefined,\n                                },\n                            }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({ type: \"search\", label: \"Search\", placeholder: \"Search...\" })),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ textAlign: \"end\" }, [\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                    color: \"light\",\n                                    marginEnd: 2,\n                                    on: { click: arg.onlogin },\n                                }, \"Login\"),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"primary\", on: { click: arg.onsignup } }, \"Sign-up\"),\n                            ]),\n                        ])),\n                    ]);\n                };\n                return component({\n                    icon: \"fab bootstrap\",\n                    link: [\n                        {\n                            active: true,\n                            href: \"#\",\n                            icon: \"house\",\n                            label: \"Home\",\n                        },\n                        {\n                            href: \"#\",\n                            icon: \"speedometer2\",\n                            label: \"Dashboard\",\n                        },\n                        {\n                            href: \"#\",\n                            icon: \"table\",\n                            label: \"Order\",\n                        },\n                        {\n                            href: \"#\",\n                            icon: \"grid\",\n                            label: \"Products\",\n                        },\n                        {\n                            href: \"#\",\n                            icon: \"person-circle\",\n                            label: \"Customers\",\n                        },\n                    ],\n                    onlogin: (event) => {\n                        //do login\n                    },\n                    onsignup: (event) => {\n                        //do sign up\n                    },\n                    onsearch: (event) => {\n                        //do search\n                    },\n                });\n            },\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/example/headers.js?");

/***/ })

}]);