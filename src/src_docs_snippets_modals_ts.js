"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbsts_test"] = self["webpackChunkbsts_test"] || []).push([["src_docs_snippets_modals_ts"],{

/***/ "./src/docs/snippets/modals.ts":
/*!*************************************!*\
  !*** ./src/docs/snippets/modals.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modals: () => (/* binding */ modals)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/build/esm/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./src/ctl/example/_index.ts\");\n/* harmony import */ var _ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ctl/main/content.js */ \"./src/ctl/main/content.ts\");\n\n\n\nconst modals = {\n    title: \"Modals\",\n    description: \"Transform modals to serve any purpose, from feature tours to dialogs.\",\n    item: (db) => {\n        (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.resetContentIndex)();\n        return [\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Style 1\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    previewAttr: { bgColor: \"body-tertiary\" },\n                    showCodepen: false,\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.container({ debug: true, view: \"end\", contentAttr: { rounded: 4 } }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.header({ close: true, borderNone: \"bottom\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.title(\"Modal title\")),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.body({ paddingY: 0 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS.\")),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.footer({\n                                flex: \"column\",\n                                alignItem: \"stretch\",\n                                width: 100,\n                                gap: 2,\n                                paddingBottom: 3,\n                                borderNone: \"top\",\n                                rounded: \"bottom-4\",\n                            }, [\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"primary\", weight: \"lg\" }, \"Save changes\"),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                    dismiss: \"modal\",\n                                    color: \"secondary\",\n                                    weight: \"lg\",\n                                }, \"Close\"),\n                            ]),\n                        ]);\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Using {{b.modal.create}}\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    previewAttr: { bgColor: \"body-tertiary\" },\n                    showCodepen: false,\n                    output: () => {\n                        return _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.create({\n                            debug: true,\n                            customStyle: 1,\n                            title: \"Modal title\",\n                            elem: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS.\"),\n                            btn: [\"savechanges\", \"close\"],\n                            btnFn: [(_event) => { }],\n                        });\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Live preview\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    outputAttr: { display: \"flex\", gap: 2 },\n                    output: () => {\n                        return [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                on: {\n                                    click: (_event) => {\n                                        _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.show(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.container({\n                                            view: \"end\",\n                                            animate: \"slide-in-bottom\",\n                                            animateDuration: \"300ms\",\n                                            contentAttr: {\n                                                rounded: 4,\n                                            },\n                                        }, [\n                                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.header({ close: true, borderNone: \"bottom\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.title(\"Modal title\")),\n                                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.body({ paddingY: 0 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS.\")),\n                                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.footer({\n                                                flex: \"column\",\n                                                alignItem: \"stretch\",\n                                                width: 100,\n                                                gap: 2,\n                                                paddingBottom: 3,\n                                                borderNone: \"top\",\n                                            }, [\n                                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                                    color: \"primary\",\n                                                    weight: \"lg\",\n                                                }, \"Save changes\"),\n                                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                                    dismiss: \"modal\",\n                                                    color: \"secondary\",\n                                                    weight: \"lg\",\n                                                }, \"Close\"),\n                                            ]),\n                                        ]));\n                                    },\n                                },\n                            }, \"b.modal.container\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                on: {\n                                    click: (_event) => {\n                                        _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.show(_printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.create({\n                                            customStyle: 1,\n                                            title: \"Modal title\",\n                                            elem: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS.\"),\n                                            btn: [\"savechanges\", \"close\"],\n                                            btnFn: [(_event) => { }],\n                                        }));\n                                    },\n                                },\n                            }, \"b.modal.create\"),\n                        ];\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Style 2\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    previewAttr: { bgColor: \"body-tertiary\" },\n                    showCodepen: false,\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.container({ debug: true }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.header({\n                                textAlign: \"center\",\n                                padding: 4,\n                                paddingBottom: 0,\n                                borderNone: \"bottom\",\n                                position: \"relative\",\n                                close: false,\n                            }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.title({ width: 100 }, \"Enable this setting?\")),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.body({ padding: 4, paddingTop: 0, textAlign: \"center\" }, [\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ marginBottom: 0 }, \"You can always change your mind in your account settings.\"),\n                            ]),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.footer({\n                                flex: [\"nowrap\", \"grow-1\"],\n                                padding: 0,\n                            }, [\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                    fontWeight: \"bold\",\n                                    border: \"end\",\n                                    flex: \"grow-1\",\n                                    textDecoration: \"none\",\n                                    color: \"transparent\",\n                                    textColor: \"primary\",\n                                    rounded: 0,\n                                    weight: \"lg\",\n                                    fontSize: 6,\n                                    paddingY: 3,\n                                    margin: 0,\n                                }, \"Yes, enable\"),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                    defColor: false,\n                                    dismiss: \"modal\",\n                                    flex: \"grow-1\",\n                                    textDecoration: \"none\",\n                                    color: \"transparent\",\n                                    textColor: \"primary\",\n                                    rounded: 0,\n                                    weight: \"lg\",\n                                    fontSize: 6,\n                                    paddingY: 3,\n                                    margin: 0,\n                                }, \"No thanks\"),\n                            ]),\n                        ]);\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Using {{b.modal.create}}\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    previewAttr: { bgColor: \"body-tertiary\" },\n                    showCodepen: false,\n                    output: () => {\n                        return _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.create({\n                            debug: true,\n                            customStyle: 2,\n                            title: \"Enable this setting?\",\n                            elem: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ marginBottom: 0 }, \"You can always change your mind in your account settings.\"),\n                            btn: [\"yesenable\", \"nothanks\"],\n                            btnFn: [(_event) => { }],\n                        });\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Live preview\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    outputAttr: { display: \"flex\", gap: 2 },\n                    output: () => {\n                        return [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                on: {\n                                    click: (_event) => {\n                                        _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.show(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.container([\n                                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.header({\n                                                textAlign: \"center\",\n                                                padding: 4,\n                                                paddingBottom: 0,\n                                                borderNone: \"bottom\",\n                                                position: \"relative\",\n                                                close: false,\n                                            }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.title({ width: 100 }, \"Enable this setting?\")),\n                                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.body({\n                                                padding: 4,\n                                                paddingTop: 0,\n                                                textAlign: \"center\",\n                                            }, [\n                                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ marginBottom: 0 }, \"You can always change your mind in your account settings.\"),\n                                            ]),\n                                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.footer({\n                                                flex: [\"nowrap\", \"grow-1\"],\n                                                padding: 0,\n                                            }, [\n                                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                                    fontWeight: \"bold\",\n                                                    border: \"end\",\n                                                    flex: \"grow-1\",\n                                                    textDecoration: \"none\",\n                                                    color: \"transparent\",\n                                                    textColor: \"primary\",\n                                                    rounded: 0,\n                                                    weight: \"lg\",\n                                                    fontSize: 6,\n                                                    paddingY: 3,\n                                                    margin: 0,\n                                                }, \"Yes, enable\"),\n                                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                                    dismiss: \"modal\",\n                                                    flex: \"grow-1\",\n                                                    textDecoration: \"none\",\n                                                    color: \"transparent\",\n                                                    textColor: \"primary\",\n                                                    rounded: 0,\n                                                    weight: \"lg\",\n                                                    fontSize: 6,\n                                                    paddingY: 3,\n                                                    margin: 0,\n                                                }, \"No thanks\"),\n                                            ]),\n                                        ]));\n                                    },\n                                },\n                            }, \"b.modal.container\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                on: {\n                                    click: (_event) => {\n                                        _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.show(_printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.create({\n                                            customStyle: 2,\n                                            title: \"Enable this setting?\",\n                                            elem: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ marginBottom: 0 }, \"You can always change your mind in your account settings.\"),\n                                            btn: [\"yesenable\", \"nothanks\"],\n                                            btnFn: [(_event) => { }],\n                                        }));\n                                    },\n                                },\n                            }, \"b.modal.create\"),\n                        ];\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"What's new\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    previewAttr: { bgColor: \"body-tertiary\" },\n                    showCodepen: false,\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.container({ debug: true, contentAttr: { rounded: 4 } }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.body({ padding: 5 }, [\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h2({ fontWeight: \"bold\", marginBottom: 0 }, \"What's new\"),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.ul({\n                                    unstyle: true,\n                                    display: \"grid\",\n                                    gap: 4,\n                                    marginY: 5,\n                                    small: true,\n                                }, [\n                                    {\n                                        icon: \"grid-fill\",\n                                        iconColor: \"secondary\",\n                                        title: \"Grid view\",\n                                        description: \"Not into lists? Try the new grid view.\",\n                                    },\n                                    {\n                                        icon: \"bookmark-star\",\n                                        iconColor: \"warning\",\n                                        title: \"Bookmarks\",\n                                        description: \"Save items you love for easy access later.\",\n                                    },\n                                    {\n                                        icon: \"film\",\n                                        iconColor: \"primary\",\n                                        title: \"Video embeds\",\n                                        description: \"Share videos wherever you go.\",\n                                    },\n                                ].map((i) => {\n                                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li({ display: \"flex\", gap: 4 }, [\n                                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({\n                                            id: i.icon,\n                                            fontSize: 1,\n                                            h: 1,\n                                            fontWeight: \"bold\",\n                                            textColor: i.iconColor,\n                                        }),\n                                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div([\n                                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h5({ marginBottom: 0 }, i.title),\n                                            i.description,\n                                        ]),\n                                    ]);\n                                })),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ weight: \"lg\", marginTop: 5, width: 100, dismiss: \"modal\" }, \"Great, thanks!\"),\n                            ]),\n                        ]);\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Live preview\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                            on: {\n                                click: (_event) => {\n                                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.show(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.container({ contentAttr: { rounded: 4 } }, [\n                                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.body({ padding: 5 }, [\n                                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h2({ fontWeight: \"bold\", marginBottom: 0 }, \"What's new\"),\n                                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.ul({\n                                                unstyle: true,\n                                                display: \"grid\",\n                                                gap: 4,\n                                                marginY: 5,\n                                                small: true,\n                                            }, [\n                                                {\n                                                    icon: \"grid-fill\",\n                                                    iconColor: \"secondary\",\n                                                    title: \"Grid view\",\n                                                    description: \"Not into lists? Try the new grid view.\",\n                                                },\n                                                {\n                                                    icon: \"bookmark-star\",\n                                                    iconColor: \"warning\",\n                                                    title: \"Bookmarks\",\n                                                    description: \"Save items you love for easy access later.\",\n                                                },\n                                                {\n                                                    icon: \"film\",\n                                                    iconColor: \"primary\",\n                                                    title: \"Video embeds\",\n                                                    description: \"Share videos wherever you go.\",\n                                                },\n                                            ].map((i) => {\n                                                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li({ display: \"flex\", gap: 4 }, [\n                                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({\n                                                        id: i.icon,\n                                                        fontSize: 1,\n                                                        h: 1,\n                                                        fontWeight: \"bold\",\n                                                        textColor: i.iconColor,\n                                                    }),\n                                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div([\n                                                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h5({ marginBottom: 0 }, i.title),\n                                                        i.description,\n                                                    ]),\n                                                ]);\n                                            })),\n                                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                                weight: \"lg\",\n                                                marginTop: 5,\n                                                width: 100,\n                                                dismiss: \"modal\",\n                                            }, \"Great, thanks!\"),\n                                        ]),\n                                    ]));\n                                },\n                            },\n                        }, \"What's new\");\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Sign up form\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    previewAttr: { bgColor: \"body-tertiary\" },\n                    showCodepen: false,\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.container({ debug: true, contentAttr: { rounded: 4, padding: 0 } }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.header({\n                                padding: 5,\n                                paddingBottom: 4,\n                                borderNone: \"bottom\",\n                                close: true,\n                            }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.title({ fontWeight: \"bold\", marginBottom: 0, fontSize: 2 }, \"Sign up for free\")),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.body({ padding: 5, paddingTop: 0 }, [\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.form({ display: \"grid\", gap: 3 }, [\n                                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.floatinglabel.input({\n                                        type: \"email\",\n                                        label: \"Email address\",\n                                        required: true,\n                                    }),\n                                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.floatinglabel.input({\n                                        type: \"password\",\n                                        label: \"Password\",\n                                        required: true,\n                                    }),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ weight: \"lg\", type: \"submit\" }, \"Sign up\"),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.small({ textColor: \"body-secondary\" }, \"By clicking Sign up, you agree to the terms of use.\"),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.hr({ marginY: 4 }),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h2({ fontSize: 5, fontWeight: \"bold\" }, \"Or use a third-party\"),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"grid\", gap: 2 }, [\n                                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ outline: true, color: \"info\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"twitter\" }, \"Sign up with Twitter\")),\n                                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ outline: true, color: \"primary\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"facebook\" }, \"Sign up with Facebook\")),\n                                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ outline: true, color: \"secondary\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"github\" }, \"Sign up with Github\")),\n                                    ]),\n                                ]),\n                            ]),\n                        ]);\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Live preview\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                            on: {\n                                click: (_event) => {\n                                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.show(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.container({\n                                        contentAttr: { rounded: 4, padding: 0 },\n                                        on: {\n                                            submit: (event) => {\n                                                event.preventDefault();\n                                                event.stopPropagation();\n                                                _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.hide(event.target);\n                                            },\n                                        },\n                                    }, [\n                                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.header({\n                                            padding: 5,\n                                            paddingBottom: 4,\n                                            borderNone: \"bottom\",\n                                            close: true,\n                                        }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.title({\n                                            fontWeight: \"bold\",\n                                            marginBottom: 0,\n                                            fontSize: 2,\n                                        }, \"Sign up for free\")),\n                                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.body({ padding: 5, paddingTop: 0 }, [\n                                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.form({ display: \"grid\", gap: 3 }, [\n                                                _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.floatinglabel.input({\n                                                    type: \"email\",\n                                                    label: \"Email address\",\n                                                    required: true,\n                                                }),\n                                                _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.floatinglabel.input({\n                                                    type: \"password\",\n                                                    label: \"Password\",\n                                                    required: true,\n                                                }),\n                                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                                    weight: \"lg\",\n                                                    type: \"submit\",\n                                                }, \"Sign up\"),\n                                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.small({\n                                                    textColor: \"body-secondary\",\n                                                }, \"By clicking Sign up, you agree to the terms of use.\"),\n                                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.hr({ marginY: 4 }),\n                                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h2({\n                                                    fontSize: 5,\n                                                    fontWeight: \"bold\",\n                                                }, \"Or use a third-party\"),\n                                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"grid\", gap: 2 }, [\n                                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                                        outline: true,\n                                                        color: \"info\",\n                                                    }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({\n                                                        icon: \"twitter\",\n                                                    }, \"Sign up with Twitter\")),\n                                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                                        outline: true,\n                                                        color: \"primary\",\n                                                    }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({\n                                                        icon: \"facebook\",\n                                                    }, \"Sign up with Facebook\")),\n                                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                                        outline: true,\n                                                        color: \"secondary\",\n                                                    }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({\n                                                        icon: \"github\",\n                                                    }, \"Sign up with Github\")),\n                                                ]),\n                                            ]),\n                                        ]),\n                                    ]));\n                                },\n                            },\n                        }, \"Sign up\");\n                    },\n                }),\n            ]),\n        ];\n    },\n};\n\n\n//# sourceURL=webpack://bsts-test/./src/docs/snippets/modals.ts?");

/***/ })

}]);