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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modals: () => (/* binding */ modals)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js/auto */ \"./node_modules/chart.js/auto/auto.js\");\n\n\n\nconst modals = {\n    title: \"Modals\",\n    description: \"Transform modals to serve any purpose, from feature tours to dialogs.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"IOS Style\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { bgColor: \"body-tertiary\" },\n            showCodepen: false,\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.container({ debug: true, view: \"end\", contentAttr: { rounded: 4 } }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.header({ close: true, borderNone: \"bottom\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.title(\"Modal title\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.body({ paddingY: 0 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS.\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.footer({\n                        flex: \"column\",\n                        alignItem: \"stretch\",\n                        width: 100,\n                        gap: 2,\n                        paddingBottom: 3,\n                        borderNone: \"top\",\n                    }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"primary\", weight: \"lg\" }, \"Save changes\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                            dismiss: \"modal\",\n                            color: \"secondary\",\n                            weight: \"lg\",\n                        }, \"Close\"),\n                    ]),\n                ]);\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Using {{b.modal.create}}\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { bgColor: \"body-tertiary\" },\n            showCodepen: false,\n            output: () => {\n                return _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.create({\n                    debug: true,\n                    customStyle: \"ios\",\n                    title: \"Modal title\",\n                    elem: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS.\"),\n                    btn: [\"savechanges\", \"close\"],\n                    btnFn: [(_event) => { }],\n                });\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Live preview\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { display: \"flex\", gap: 2 },\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                        on: {\n                            click: (_event) => {\n                                _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.show(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.container({ view: \"end\", contentAttr: { rounded: 4 } }, [\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.header({ close: true, borderNone: \"bottom\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.title(\"Modal title\")),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.body({ paddingY: 0 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS.\")),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.footer({\n                                        flex: \"column\",\n                                        alignItem: \"stretch\",\n                                        width: 100,\n                                        gap: 2,\n                                        paddingBottom: 3,\n                                        borderNone: \"top\",\n                                    }, [\n                                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"primary\", weight: \"lg\" }, \"Save changes\"),\n                                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                            dismiss: \"modal\",\n                                            color: \"secondary\",\n                                            weight: \"lg\",\n                                        }, \"Close\"),\n                                    ]),\n                                ]));\n                            },\n                        },\n                    }, \"b.modal.container\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                        on: {\n                            click: (_event) => {\n                                _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.show(_printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.create({\n                                    customStyle: \"ios\",\n                                    title: \"Modal title\",\n                                    elem: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS.\"),\n                                    btn: [\"savechanges\", \"close\"],\n                                    btnFn: [(_event) => { }],\n                                }));\n                            },\n                        },\n                    }, \"b.modal.create\"),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Android Style\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { bgColor: \"body-tertiary\" },\n            showCodepen: false,\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.container({ debug: true }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.header({\n                        textAlign: \"center\",\n                        padding: 4,\n                        paddingBottom: 0,\n                        borderNone: \"bottom\",\n                        position: \"relative\",\n                        close: false,\n                    }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.title({ width: 100 }, \"Enable this setting?\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.body({ padding: 4, paddingTop: 0, textAlign: \"center\" }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ marginBottom: 0 }, \"You can always change your mind in your account settings.\"),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.footer({\n                        flex: [\"nowrap\", \"grow-1\"],\n                        padding: 0,\n                    }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                            fontWeight: \"bold\",\n                            border: \"end\",\n                            flex: \"grow-1\",\n                            textDecoration: \"none\",\n                            color: \"link\",\n                            rounded: 0,\n                            weight: \"lg\",\n                            fontSize: 6,\n                            paddingY: 3,\n                            margin: 0,\n                        }, \"Yes, enable\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                            dismiss: \"modal\",\n                            flex: \"grow-1\",\n                            textDecoration: \"none\",\n                            color: \"link\",\n                            rounded: 0,\n                            weight: \"lg\",\n                            fontSize: 6,\n                            paddingY: 3,\n                            margin: 0,\n                        }, \"No thanks\"),\n                    ]),\n                ]);\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Using {{b.modal.create}}\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { bgColor: \"body-tertiary\" },\n            showCodepen: false,\n            output: () => {\n                return _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.create({\n                    debug: true,\n                    customStyle: \"android\",\n                    title: \"Enable this setting?\",\n                    elem: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ marginBottom: 0 }, \"You can always change your mind in your account settings.\"),\n                    btn: [\"yesenable\", \"nothanks\"],\n                    btnFn: [(_event) => { }],\n                });\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Live preview\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { display: \"flex\", gap: 2 },\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                        on: {\n                            click: (_event) => {\n                                _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.show(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.container([\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.header({\n                                        textAlign: \"center\",\n                                        padding: 4,\n                                        paddingBottom: 0,\n                                        borderNone: \"bottom\",\n                                        position: \"relative\",\n                                        close: false,\n                                    }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.title({ width: 100 }, \"Enable this setting?\")),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.body({ padding: 4, paddingTop: 0, textAlign: \"center\" }, [\n                                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ marginBottom: 0 }, \"You can always change your mind in your account settings.\"),\n                                    ]),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.footer({\n                                        flex: [\"nowrap\", \"grow-1\"],\n                                        padding: 0,\n                                    }, [\n                                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                            fontWeight: \"bold\",\n                                            border: \"end\",\n                                            flex: \"grow-1\",\n                                            textDecoration: \"none\",\n                                            color: \"link\",\n                                            rounded: 0,\n                                            weight: \"lg\",\n                                            fontSize: 6,\n                                            paddingY: 3,\n                                            margin: 0,\n                                        }, \"Yes, enable\"),\n                                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                            dismiss: \"modal\",\n                                            flex: \"grow-1\",\n                                            textDecoration: \"none\",\n                                            color: \"link\",\n                                            rounded: 0,\n                                            weight: \"lg\",\n                                            fontSize: 6,\n                                            paddingY: 3,\n                                            margin: 0,\n                                        }, \"No thanks\"),\n                                    ]),\n                                ]));\n                            },\n                        },\n                    }, \"b.modal.container\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                        on: {\n                            click: (_event) => {\n                                _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.show(_printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.create({\n                                    customStyle: \"android\",\n                                    title: \"Enable this setting?\",\n                                    elem: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ marginBottom: 0 }, \"You can always change your mind in your account settings.\"),\n                                    btn: [\"yesenable\", \"nothanks\"],\n                                    btnFn: [(_event) => { }],\n                                }));\n                            },\n                        },\n                    }, \"b.modal.create\"),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"What's new\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { bgColor: \"body-tertiary\" },\n            showCodepen: false,\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.container({ debug: true, contentAttr: { rounded: 4 } }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.body({ padding: 5 }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(2, { fontWeight: \"bold\", marginBottom: 0 }, \"What's new\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.ul({ unstyle: true, display: \"grid\", gap: 4, marginY: 5, small: true }, [\n                            {\n                                icon: \"grid-fill\",\n                                iconColor: \"secondary\",\n                                title: \"Grid view\",\n                                description: \"Not into lists? Try the new grid view.\",\n                            },\n                            {\n                                icon: \"bookmark-star\",\n                                iconColor: \"warning\",\n                                title: \"Bookmarks\",\n                                description: \"Save items you love for easy access later.\",\n                            },\n                            {\n                                icon: \"film\",\n                                iconColor: \"primary\",\n                                title: \"Video embeds\",\n                                description: \"Share videos wherever you go.\",\n                            },\n                        ].map((i) => {\n                            return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li({ display: \"flex\", gap: 4 }, [\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({\n                                    id: i.icon,\n                                    fontSize: 1,\n                                    h: 1,\n                                    fontWeight: \"bold\",\n                                    color: i.iconColor,\n                                }),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div([new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(5, { marginBottom: 0 }, i.title), i.description]),\n                            ]);\n                        })),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ weight: \"lg\", marginTop: 5, width: 100, dismiss: \"modal\" }, \"Great, thanks!\"),\n                    ]),\n                ]);\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Live preview\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                    on: {\n                        click: (_event) => {\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.show(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.container({ contentAttr: { rounded: 4 } }, [\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.body({ padding: 5 }, [\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(2, { fontWeight: \"bold\", marginBottom: 0 }, \"What's new\"),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.ul({ unstyle: true, display: \"grid\", gap: 4, marginY: 5, small: true }, [\n                                        {\n                                            icon: \"grid-fill\",\n                                            iconColor: \"secondary\",\n                                            title: \"Grid view\",\n                                            description: \"Not into lists? Try the new grid view.\",\n                                        },\n                                        {\n                                            icon: \"bookmark-star\",\n                                            iconColor: \"warning\",\n                                            title: \"Bookmarks\",\n                                            description: \"Save items you love for easy access later.\",\n                                        },\n                                        {\n                                            icon: \"film\",\n                                            iconColor: \"primary\",\n                                            title: \"Video embeds\",\n                                            description: \"Share videos wherever you go.\",\n                                        },\n                                    ].map((i) => {\n                                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li({ display: \"flex\", gap: 4 }, [\n                                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({\n                                                id: i.icon,\n                                                fontSize: 1,\n                                                h: 1,\n                                                fontWeight: \"bold\",\n                                                color: i.iconColor,\n                                            }),\n                                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div([\n                                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(5, { marginBottom: 0 }, i.title),\n                                                i.description,\n                                            ]),\n                                        ]);\n                                    })),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ weight: \"lg\", marginTop: 5, width: 100, dismiss: \"modal\" }, \"Great, thanks!\"),\n                                ]),\n                            ]));\n                        },\n                    },\n                }, \"What's new\");\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Testing\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            showCodepen: false,\n            output: () => {\n                const item = (arg) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.container({ style: { maxWidth: \"120px\" } }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.body(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.canvas({\n                        ratio: \"4x3\",\n                        on: {\n                            build: (event) => {\n                                const target = event.target;\n                                //dialog show after 300 ms\n                                setTimeout((target) => {\n                                    new chart_js_auto__WEBPACK_IMPORTED_MODULE_2__[\"default\"](target, {\n                                        type: \"line\",\n                                        data: {\n                                            labels: Array(arg.data.length).fill(\"\"),\n                                            datasets: [\n                                                {\n                                                    data: arg.data,\n                                                    borderWidth: 2,\n                                                    pointRadius: 0,\n                                                    tension: 0.5,\n                                                },\n                                            ],\n                                        },\n                                        options: {\n                                            plugins: {\n                                                legend: {\n                                                    display: false,\n                                                },\n                                            },\n                                            scales: {\n                                                x: { display: false },\n                                                y: {\n                                                    display: false,\n                                                    beginAtZero: true,\n                                                },\n                                            },\n                                        },\n                                    });\n                                }, 300, target);\n                            },\n                        },\n                    })));\n                };\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                    on: {\n                        click: () => {\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.show(_printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.create({\n                                customStyle: \"android\",\n                                title: \"Chatjs example\",\n                                elem: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                                    display: \"flex\",\n                                    gap: 3,\n                                    justifyContent: \"center\",\n                                    flex: \"wrap\",\n                                    marginTop: 3,\n                                }, new Array(15).fill(\"\").map(() => {\n                                    return item({\n                                        data: Array(_printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.rndBetween(5, 20))\n                                            .fill(\"\")\n                                            .map(() => {\n                                            return _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.rndBetween(1, 20);\n                                        }),\n                                    });\n                                })),\n                                btn: [\"ok\", \"cancel\"],\n                            }));\n                        },\n                    },\n                }, \"Test\");\n            },\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/example/modals.js?");

/***/ })

}]);