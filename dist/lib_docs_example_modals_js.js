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
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modals: () => (/* binding */ modals)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\n// import Chart from \"chart.js/auto\";\nconst modals = {\n    title: \"Modals\",\n    description: \"Transform modals to serve any purpose, from feature tours to dialogs.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"IOS Style\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { bgColor: \"body-tertiary\" },\n            showCodepen: false,\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.container({ debug: true, view: \"end\", contentAttr: { rounded: 4 } }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.header({ close: true, borderNone: \"bottom\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.title(\"Modal title\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.body({ paddingY: 0 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS.\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.footer({\n                        flex: \"column\",\n                        alignItem: \"stretch\",\n                        width: 100,\n                        gap: 2,\n                        paddingBottom: 3,\n                        borderNone: \"top\",\n                    }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"primary\", weight: \"lg\" }, \"Save changes\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                            dismiss: \"modal\",\n                            color: \"secondary\",\n                            weight: \"lg\",\n                        }, \"Close\"),\n                    ]),\n                ]);\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Using {{b.modal.create}}\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { bgColor: \"body-tertiary\" },\n            showCodepen: false,\n            output: () => {\n                return _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.create({\n                    debug: true,\n                    customStyle: \"ios\",\n                    title: \"Modal title\",\n                    elem: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS.\"),\n                    btn: [\"savechanges\", \"close\"],\n                    btnFn: [(_event) => { }],\n                });\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Live preview\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { display: \"flex\", gap: 2 },\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                        on: {\n                            click: (_event) => {\n                                _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.show(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.container({ view: \"end\", contentAttr: { rounded: 4 } }, [\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.header({ close: true, borderNone: \"bottom\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.title(\"Modal title\")),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.body({ paddingY: 0 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS.\")),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.footer({\n                                        flex: \"column\",\n                                        alignItem: \"stretch\",\n                                        width: 100,\n                                        gap: 2,\n                                        paddingBottom: 3,\n                                        borderNone: \"top\",\n                                    }, [\n                                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"primary\", weight: \"lg\" }, \"Save changes\"),\n                                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                            dismiss: \"modal\",\n                                            color: \"secondary\",\n                                            weight: \"lg\",\n                                        }, \"Close\"),\n                                    ]),\n                                ]));\n                            },\n                        },\n                    }, \"b.modal.container\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                        on: {\n                            click: (_event) => {\n                                _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.show(_printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.create({\n                                    customStyle: \"ios\",\n                                    title: \"Modal title\",\n                                    elem: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS.\"),\n                                    btn: [\"savechanges\", \"close\"],\n                                    btnFn: [(_event) => { }],\n                                }));\n                            },\n                        },\n                    }, \"b.modal.create\"),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Android Style\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { bgColor: \"body-tertiary\" },\n            showCodepen: false,\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.container({ debug: true }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.header({\n                        textAlign: \"center\",\n                        padding: 4,\n                        paddingBottom: 0,\n                        borderNone: \"bottom\",\n                        position: \"relative\",\n                        close: false,\n                    }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.title({ width: 100 }, \"Enable this setting?\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.body({ padding: 4, paddingTop: 0, textAlign: \"center\" }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ marginBottom: 0 }, \"You can always change your mind in your account settings.\"),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.footer({\n                        flex: [\"nowrap\", \"grow-1\"],\n                        padding: 0,\n                    }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                            fontWeight: \"bold\",\n                            border: \"end\",\n                            flex: \"grow-1\",\n                            textDecoration: \"none\",\n                            color: \"primary\",\n                            rounded: 0,\n                            weight: \"lg\",\n                            fontSize: 6,\n                            paddingY: 3,\n                            margin: 0,\n                        }, \"Yes, enable\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                            dismiss: \"modal\",\n                            flex: \"grow-1\",\n                            textDecoration: \"none\",\n                            color: \"primary\",\n                            rounded: 0,\n                            weight: \"lg\",\n                            fontSize: 6,\n                            paddingY: 3,\n                            margin: 0,\n                        }, \"No thanks\"),\n                    ]),\n                ]);\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Using {{b.modal.create}}\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { bgColor: \"body-tertiary\" },\n            showCodepen: false,\n            output: () => {\n                return _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.create({\n                    debug: true,\n                    customStyle: \"android\",\n                    title: \"Enable this setting?\",\n                    elem: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ marginBottom: 0 }, \"You can always change your mind in your account settings.\"),\n                    btn: [\"yesenable\", \"nothanks\"],\n                    btnFn: [(_event) => { }],\n                });\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Live preview\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { display: \"flex\", gap: 2 },\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                        on: {\n                            click: (_event) => {\n                                _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.show(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.container([\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.header({\n                                        textAlign: \"center\",\n                                        padding: 4,\n                                        paddingBottom: 0,\n                                        borderNone: \"bottom\",\n                                        position: \"relative\",\n                                        close: false,\n                                    }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.title({ width: 100 }, \"Enable this setting?\")),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.body({ padding: 4, paddingTop: 0, textAlign: \"center\" }, [\n                                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ marginBottom: 0 }, \"You can always change your mind in your account settings.\"),\n                                    ]),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.footer({\n                                        flex: [\"nowrap\", \"grow-1\"],\n                                        padding: 0,\n                                    }, [\n                                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                            fontWeight: \"bold\",\n                                            border: \"end\",\n                                            flex: \"grow-1\",\n                                            textDecoration: \"none\",\n                                            color: \"primary\",\n                                            rounded: 0,\n                                            weight: \"lg\",\n                                            fontSize: 6,\n                                            paddingY: 3,\n                                            margin: 0,\n                                        }, \"Yes, enable\"),\n                                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                            dismiss: \"modal\",\n                                            flex: \"grow-1\",\n                                            textDecoration: \"none\",\n                                            color: \"primary\",\n                                            rounded: 0,\n                                            weight: \"lg\",\n                                            fontSize: 6,\n                                            paddingY: 3,\n                                            margin: 0,\n                                        }, \"No thanks\"),\n                                    ]),\n                                ]));\n                            },\n                        },\n                    }, \"b.modal.container\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                        on: {\n                            click: (_event) => {\n                                _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.show(_printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.create({\n                                    customStyle: \"android\",\n                                    title: \"Enable this setting?\",\n                                    elem: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ marginBottom: 0 }, \"You can always change your mind in your account settings.\"),\n                                    btn: [\"yesenable\", \"nothanks\"],\n                                    btnFn: [(_event) => { }],\n                                }));\n                            },\n                        },\n                    }, \"b.modal.create\"),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"What's new\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { bgColor: \"body-tertiary\" },\n            showCodepen: false,\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.container({ debug: true, contentAttr: { rounded: 4 } }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.body({ padding: 5 }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(2, { fontWeight: \"bold\", marginBottom: 0 }, \"What's new\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.ul({ unstyle: true, display: \"grid\", gap: 4, marginY: 5, small: true }, [\n                            {\n                                icon: \"grid-fill\",\n                                iconColor: \"secondary\",\n                                title: \"Grid view\",\n                                description: \"Not into lists? Try the new grid view.\",\n                            },\n                            {\n                                icon: \"bookmark-star\",\n                                iconColor: \"warning\",\n                                title: \"Bookmarks\",\n                                description: \"Save items you love for easy access later.\",\n                            },\n                            {\n                                icon: \"film\",\n                                iconColor: \"primary\",\n                                title: \"Video embeds\",\n                                description: \"Share videos wherever you go.\",\n                            },\n                        ].map((i) => {\n                            return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li({ display: \"flex\", gap: 4 }, [\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({\n                                    id: i.icon,\n                                    fontSize: 1,\n                                    h: 1,\n                                    fontWeight: \"bold\",\n                                    color: i.iconColor,\n                                }),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div([new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(5, { marginBottom: 0 }, i.title), i.description]),\n                            ]);\n                        })),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ weight: \"lg\", marginTop: 5, width: 100, dismiss: \"modal\" }, \"Great, thanks!\"),\n                    ]),\n                ]);\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Live preview\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                    on: {\n                        click: (_event) => {\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.show(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.container({ contentAttr: { rounded: 4 } }, [\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.body({ padding: 5 }, [\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(2, { fontWeight: \"bold\", marginBottom: 0 }, \"What's new\"),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.ul({ unstyle: true, display: \"grid\", gap: 4, marginY: 5, small: true }, [\n                                        {\n                                            icon: \"grid-fill\",\n                                            iconColor: \"secondary\",\n                                            title: \"Grid view\",\n                                            description: \"Not into lists? Try the new grid view.\",\n                                        },\n                                        {\n                                            icon: \"bookmark-star\",\n                                            iconColor: \"warning\",\n                                            title: \"Bookmarks\",\n                                            description: \"Save items you love for easy access later.\",\n                                        },\n                                        {\n                                            icon: \"film\",\n                                            iconColor: \"primary\",\n                                            title: \"Video embeds\",\n                                            description: \"Share videos wherever you go.\",\n                                        },\n                                    ].map((i) => {\n                                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li({ display: \"flex\", gap: 4 }, [\n                                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({\n                                                id: i.icon,\n                                                fontSize: 1,\n                                                h: 1,\n                                                fontWeight: \"bold\",\n                                                color: i.iconColor,\n                                            }),\n                                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div([\n                                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(5, { marginBottom: 0 }, i.title),\n                                                i.description,\n                                            ]),\n                                        ]);\n                                    })),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ weight: \"lg\", marginTop: 5, width: 100, dismiss: \"modal\" }, \"Great, thanks!\"),\n                                ]),\n                            ]));\n                        },\n                    },\n                }, \"What's new\");\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Sign up form\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { bgColor: \"body-tertiary\" },\n            showCodepen: false,\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.container({ debug: true, contentAttr: { rounded: 4, padding: 0 } }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.header({ padding: 5, paddingBottom: 4, borderNone: \"bottom\", close: true }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.title({ fontWeight: \"bold\", marginBottom: 0, fontSize: 2 }, \"Sign up for free\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.body({ padding: 5, paddingTop: 0 }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.form({ display: \"grid\", gap: 3 }, [\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.floatinglabel.input({ type: \"email\", label: \"Email address\", required: true }),\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.floatinglabel.input({ type: \"password\", label: \"Password\", required: true }),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ weight: \"lg\", type: \"submit\" }, \"Sign up\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.small({ textColor: \"body-secondary\" }, \"By clicking Sign up, you agree to the terms of use.\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.hr({ marginY: 4 }),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(2, { fontSize: 5, fontWeight: \"bold\" }, \"Or use a third-party\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"grid\", gap: 2 }, [\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ outline: true, color: \"info\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"fab twitter\" }, \"Sign up with Twitter\")),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ outline: true, color: \"primary\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"fab facebook\" }, \"Sign up with Facebook\")),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ outline: true, color: \"secondary\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"fab github\" }, \"Sign up with Github\")),\n                            ]),\n                        ]),\n                    ]),\n                ]);\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Live preview\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                    on: {\n                        click: (_event) => {\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.show(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.container({\n                                contentAttr: { rounded: 4, padding: 0 },\n                                on: {\n                                    submit: (event) => {\n                                        event.preventDefault();\n                                        event.stopPropagation();\n                                        _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.hide(event.target);\n                                    },\n                                },\n                            }, [\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.header({ padding: 5, paddingBottom: 4, borderNone: \"bottom\", close: true }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.title({ fontWeight: \"bold\", marginBottom: 0, fontSize: 2 }, \"Sign up for free\")),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.body({ padding: 5, paddingTop: 0 }, [\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.form({ display: \"grid\", gap: 3 }, [\n                                        _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.floatinglabel.input({\n                                            type: \"email\",\n                                            label: \"Email address\",\n                                            required: true,\n                                        }),\n                                        _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.floatinglabel.input({\n                                            type: \"password\",\n                                            label: \"Password\",\n                                            required: true,\n                                        }),\n                                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ weight: \"lg\", type: \"submit\" }, \"Sign up\"),\n                                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.small({ textColor: \"body-secondary\" }, \"By clicking Sign up, you agree to the terms of use.\"),\n                                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.hr({ marginY: 4 }),\n                                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(2, { fontSize: 5, fontWeight: \"bold\" }, \"Or use a third-party\"),\n                                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"grid\", gap: 2 }, [\n                                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ outline: true, color: \"info\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"fab twitter\" }, \"Sign up with Twitter\")),\n                                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ outline: true, color: \"primary\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"fab facebook\" }, \"Sign up with Facebook\")),\n                                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ outline: true, color: \"secondary\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"fab github\" }, \"Sign up with Github\")),\n                                        ]),\n                                    ]),\n                                ]),\n                            ]));\n                        },\n                    },\n                }, \"Sign up\");\n            },\n        }),\n        //-----------------------\n        // new e.title(\"Testing\"),\n        // new e.code({\n        // \tshowCodepen: false,\n        // \toutput: () => {\n        // \t\tconst item = (arg: { data: number[] }) => {\n        // \t\t\treturn new b.card.container(\n        // \t\t\t\t{ style: { maxWidth: \"120px\" } },\n        // \t\t\t\tnew b.card.body(\n        // \t\t\t\t\tnew h.canvas({\n        // \t\t\t\t\t\tratio: \"4x3\",\n        // \t\t\t\t\t\ton: {\n        // \t\t\t\t\t\t\tbuild: (event) => {\n        // \t\t\t\t\t\t\t\tconst target = event.target as HTMLCanvasElement;\n        // \t\t\t\t\t\t\t\t//dialog show after 300 ms\n        // \t\t\t\t\t\t\t\tsetTimeout(\n        // \t\t\t\t\t\t\t\t\t(target) => {\n        // \t\t\t\t\t\t\t\t\t\tnew Chart(target, {\n        // \t\t\t\t\t\t\t\t\t\t\ttype: \"line\",\n        // \t\t\t\t\t\t\t\t\t\t\tdata: {\n        // \t\t\t\t\t\t\t\t\t\t\t\tlabels: Array(arg.data.length).fill(\"\"),\n        // \t\t\t\t\t\t\t\t\t\t\t\tdatasets: [\n        // \t\t\t\t\t\t\t\t\t\t\t\t\t{\n        // \t\t\t\t\t\t\t\t\t\t\t\t\t\tdata: arg.data,\n        // \t\t\t\t\t\t\t\t\t\t\t\t\t\tborderWidth: 2,\n        // \t\t\t\t\t\t\t\t\t\t\t\t\t\tpointRadius: 0,\n        // \t\t\t\t\t\t\t\t\t\t\t\t\t\ttension: 0.5,\n        // \t\t\t\t\t\t\t\t\t\t\t\t\t},\n        // \t\t\t\t\t\t\t\t\t\t\t\t],\n        // \t\t\t\t\t\t\t\t\t\t\t},\n        // \t\t\t\t\t\t\t\t\t\t\toptions: {\n        // \t\t\t\t\t\t\t\t\t\t\t\tplugins: {\n        // \t\t\t\t\t\t\t\t\t\t\t\t\tlegend: {\n        // \t\t\t\t\t\t\t\t\t\t\t\t\t\tdisplay: false,\n        // \t\t\t\t\t\t\t\t\t\t\t\t\t},\n        // \t\t\t\t\t\t\t\t\t\t\t\t},\n        // \t\t\t\t\t\t\t\t\t\t\t\tscales: {\n        // \t\t\t\t\t\t\t\t\t\t\t\t\tx: { display: false },\n        // \t\t\t\t\t\t\t\t\t\t\t\t\ty: {\n        // \t\t\t\t\t\t\t\t\t\t\t\t\t\tdisplay: false,\n        // \t\t\t\t\t\t\t\t\t\t\t\t\t\tbeginAtZero: true,\n        // \t\t\t\t\t\t\t\t\t\t\t\t\t},\n        // \t\t\t\t\t\t\t\t\t\t\t\t},\n        // \t\t\t\t\t\t\t\t\t\t\t},\n        // \t\t\t\t\t\t\t\t\t\t});\n        // \t\t\t\t\t\t\t\t\t},\n        // \t\t\t\t\t\t\t\t\t300,\n        // \t\t\t\t\t\t\t\t\ttarget\n        // \t\t\t\t\t\t\t\t);\n        // \t\t\t\t\t\t\t},\n        // \t\t\t\t\t\t},\n        // \t\t\t\t\t})\n        // \t\t\t\t)\n        // \t\t\t);\n        // \t\t};\n        // \t\treturn new b.button(\n        // \t\t\t{\n        // \t\t\t\ton: {\n        // \t\t\t\t\tclick: () => {\n        // \t\t\t\t\t\tb.modal.show(\n        // \t\t\t\t\t\t\tb.modal.create({\n        // \t\t\t\t\t\t\t\tcustomStyle: \"android\",\n        // \t\t\t\t\t\t\t\ttitle: \"Chatjs example\",\n        // \t\t\t\t\t\t\t\tscrollable: true,\n        // \t\t\t\t\t\t\t\telem: new h.div(\n        // \t\t\t\t\t\t\t\t\t{\n        // \t\t\t\t\t\t\t\t\t\tdisplay: \"flex\",\n        // \t\t\t\t\t\t\t\t\t\tgap: 3,\n        // \t\t\t\t\t\t\t\t\t\tjustifyContent: \"center\",\n        // \t\t\t\t\t\t\t\t\t\tflex: \"wrap\",\n        // \t\t\t\t\t\t\t\t\t\tmarginTop: 3,\n        // \t\t\t\t\t\t\t\t\t},\n        // \t\t\t\t\t\t\t\t\tnew Array(15).fill(\"\").map(() => {\n        // \t\t\t\t\t\t\t\t\t\treturn item({\n        // \t\t\t\t\t\t\t\t\t\t\tdata: Array(core.rndBetween(5, 20))\n        // \t\t\t\t\t\t\t\t\t\t\t\t.fill(\"\")\n        // \t\t\t\t\t\t\t\t\t\t\t\t.map(() => {\n        // \t\t\t\t\t\t\t\t\t\t\t\t\treturn core.rndBetween(1, 20);\n        // \t\t\t\t\t\t\t\t\t\t\t\t}),\n        // \t\t\t\t\t\t\t\t\t\t});\n        // \t\t\t\t\t\t\t\t\t})\n        // \t\t\t\t\t\t\t\t),\n        // \t\t\t\t\t\t\t\tbtn: [\"ok\", \"cancel\"],\n        // \t\t\t\t\t\t\t})\n        // \t\t\t\t\t\t);\n        // \t\t\t\t\t},\n        // \t\t\t\t},\n        // \t\t\t},\n        // \t\t\t\"Test\"\n        // \t\t);\n        // \t},\n        // }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/example/modals.js?");

/***/ })

}]);