"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_example_features_js"],{

/***/ "./lib/docs/example/features.js":
/*!**************************************!*\
  !*** ./lib/docs/example/features.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   features: () => (/* binding */ features)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst ex = {\n    c1: (arg) => {\n        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: true, marginBottom: 5 }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                display: \"inline-flex\",\n                alignItem: \"center\",\n                justifyContent: \"center\",\n                textBgColor: \"primary\",\n                bgGradient: true,\n                fontSize: 2,\n                marginBottom: 3,\n                paddingX: 3,\n                paddingY: 2,\n                rounded: 3,\n            }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon(arg.icon)),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(3, { fontSize: 2 }, arg.title),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(arg.description),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({ href: arg.href, iconLink: true }, [\"Call to action\", new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon(\"chevron-right\")]),\n        ]);\n    },\n    c2: (arg) => {\n        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n            col: true,\n            display: \"flex\",\n            alignItem: \"start\",\n        }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                textColor: \"body-emphasis\",\n                bgColor: \"body-secondary\",\n                display: \"inline-flex\",\n                alignItem: \"center\",\n                justifyContent: \"center\",\n                fontSize: 4,\n                flex: \"shrink-0\",\n                marginEnd: 3,\n                paddingX: 3,\n                paddingY: 2,\n                rounded: 3,\n            }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon(arg.icon)),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div([new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(3, { fontSize: 2 }, arg.title), new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(arg.description), new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div(arg.elem)]),\n        ]);\n    },\n    c3: (arg) => {\n        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n            col: true,\n        }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.container({\n                textBgColor: \"dark\",\n                border: false,\n                rounded: 3,\n            }, [\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.img({\n                    src: arg.bg,\n                    alt: \"Card image\",\n                    rounded: 3,\n                }),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.imgoverlay({\n                    display: \"flex\",\n                    flex: \"column\",\n                    height: 100,\n                    padding: 5,\n                    paddingBottom: 3,\n                }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.title({\n                        marginTop: \"auto\",\n                        marginBottom: 4,\n                        fontDisplay: 6,\n                        lineHeight: 1,\n                        fontWeight: \"bold\",\n                    }, arg.title),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.ul({ display: \"flex\", unstyle: true, marginBottom: 3 }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li({ marginEnd: \"auto\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.img({\n                            src: arg.img,\n                            alt: \"Image\",\n                            attrWidth: 32,\n                            attrHeight: 32,\n                            rounded: \"circle\",\n                            border: true,\n                            borderWidth: 2,\n                            borderColor: \"light\",\n                        })),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li({ display: \"flex\", marginEnd: 3, textAlign: \"center\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"geo-fill\" }, arg.location)),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li({ display: \"flex\", textAlign: \"center\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"calendar3\" }, arg.date)),\n                    ]),\n                ]),\n            ]),\n        ]);\n    },\n    c4: (arg) => {\n        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n            col: true,\n            display: \"flex\",\n            alignItem: \"start\",\n        }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                textColor: \"body-secondary\",\n                flex: \"shrink-0\",\n                marginEnd: 3,\n                h: 3,\n            }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon(arg.icon)),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div([\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(3, { fontSize: 4, marginBottom: 0, fontWeight: \"bold\" }, arg.title),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(arg.description),\n            ]),\n        ]);\n    },\n    c5Feature: (arg) => {\n        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n            col: true,\n            display: \"flex\",\n            flex: \"column\",\n            gap: 2,\n        }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                display: \"inline-flex\",\n                alignItem: \"center\",\n                justifyContent: \"center\",\n                textBgColor: \"primary\",\n                bgGradient: true,\n                fontSize: 4,\n                paddingX: 3,\n                paddingY: 2,\n                rounded: 3,\n            }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon(arg.icon))),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(4, { fontWeight: \"semibold\", marginBottom: 0 }, arg.title),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ textColor: \"body-secondary\" }, arg.description),\n        ]);\n    },\n    c5Title: (arg) => {\n        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n            col: true,\n            display: \"flex\",\n            flex: \"column\",\n            alignItem: \"start\",\n            gap: 2,\n        }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(3, { fontWeight: \"bold\" }, arg.title),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ textColor: \"body-secondary\" }, arg.description),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div(arg.elem),\n        ]);\n    },\n    c5: (arg) => {\n        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, rowCol: [1, \"md-2\"], alignItem: \"md-center\", gutter: 5, paddingY: 5 }, [\n            ex.c5Title(arg.main),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: true }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, rowCol: [1, \"sm-2\"], gutter: 4 }, arg.feature.map((i) => ex.c5Feature(i)))),\n        ]);\n    },\n};\nconst features = {\n    title: \"Features\",\n    description: \"Explain the features, benefits, or other details in your marketing content.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Columns with icons\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            extention: [{ name: \"COMPONENT\", rename: \"ex.c1\", output: ex.c1 }],\n            output: () => {\n                return [\n                    ex.c1({\n                        icon: \"collection\",\n                        title: \"Featured title\",\n                        description: \"Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.\",\n                        href: \"\",\n                    }),\n                    ex.c1({\n                        icon: \"person-circle\",\n                        title: \"Featured title\",\n                        description: \"Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.\",\n                        href: \"\",\n                    }),\n                    ex.c1({\n                        icon: \"toggles2\",\n                        title: \"Featured title\",\n                        description: \"Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.\",\n                        href: \"\",\n                    }),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Hanging icons\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            extention: [{ name: \"COMPONENT\", rename: \"ex.c2\", output: ex.c2 }],\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, gutter: 4, paddingY: 5, rowCol: [1, \"md-2\", \"lg-3\"] }, [\n                    ex.c2({\n                        icon: \"toggles2\",\n                        title: \"Featured title\",\n                        description: \"Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.\",\n                        elem: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ href: \"#\" }, \"Primary button\"),\n                    }),\n                    ex.c2({\n                        icon: \"cpu-fill\",\n                        title: \"Featured title\",\n                        description: \"Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.\",\n                        elem: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ href: \"#\" }, \"Primary button\"),\n                    }),\n                    ex.c2({\n                        icon: \"tools\",\n                        title: \"Featured title\",\n                        description: \"Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.\",\n                        elem: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ href: \"#\" }, \"Primary button\"),\n                    }),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Custom cards\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            extention: [{ name: \"COMPONENT\", rename: \"ex.c3\", output: ex.c3 }],\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                    row: true,\n                    alignItem: \"stretch\",\n                    gutter: 4,\n                    paddingY: 5,\n                    rowCol: [1, \"md-2\", \"lg-3\"],\n                }, [\n                    ex.c3({\n                        img: \"https://picsum.photos/seed/bsts_0/32/32\",\n                        bg: \"https://picsum.photos/seed/bsts_1/506/495\",\n                        title: \"Short title, long jacket\",\n                        location: \"Earth\",\n                        date: \"3d\",\n                    }),\n                    ex.c3({\n                        img: \"https://picsum.photos/seed/bsts_2/32/32\",\n                        bg: \"https://picsum.photos/seed/bsts_3/506/495\",\n                        title: \"Much longer title that wraps to multiple lines\",\n                        location: \"Putatan\",\n                        date: \"4d\",\n                    }),\n                    ex.c3({\n                        img: \"https://picsum.photos/seed/bsts_4/32/32\",\n                        bg: \"https://picsum.photos/seed/bsts_5/506/495\",\n                        title: \"Another longer title belongs here\",\n                        location: \"Kedah\",\n                        date: \"5d\",\n                    }),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Icon grid\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            extention: [{ name: \"COMPONENT\", rename: \"ex.c4\", output: ex.c4 }],\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                    row: true,\n                    gutter: 4,\n                    paddingY: 5,\n                    rowCol: [1, \"sm-2\", \"md-3\", \"lg-4\"],\n                }, [\n                    ex.c4({\n                        icon: \"fab bootstrap\",\n                        title: \"Featured title\",\n                        description: \"Paragraph of text beneath the heading to explain the heading.\",\n                    }),\n                    ex.c4({\n                        icon: \"cpu-fill\",\n                        title: \"Featured title\",\n                        description: \"Paragraph of text beneath the heading to explain the heading.\",\n                    }),\n                    ex.c4({\n                        icon: \"calendar3\",\n                        title: \"Featured title\",\n                        description: \"Paragraph of text beneath the heading to explain the heading.\",\n                    }),\n                    ex.c4({\n                        icon: \"house\",\n                        title: \"Featured title\",\n                        description: \"Paragraph of text beneath the heading to explain the heading.\",\n                    }),\n                    ex.c4({\n                        icon: \"speedometer2\",\n                        title: \"Featured title\",\n                        description: \"Paragraph of text beneath the heading to explain the heading.\",\n                    }),\n                    ex.c4({\n                        icon: \"toggles2\",\n                        title: \"Featured title\",\n                        description: \"Paragraph of text beneath the heading to explain the heading.\",\n                    }),\n                    ex.c4({\n                        icon: \"toggles2\",\n                        title: \"Featured title\",\n                        description: \"Paragraph of text beneath the heading to explain the heading.\",\n                    }),\n                    ex.c4({\n                        icon: \"geo-fill\",\n                        title: \"Featured title\",\n                        description: \"Paragraph of text beneath the heading to explain the heading.\",\n                    }),\n                    ex.c4({\n                        icon: \"tools\",\n                        title: \"Featured title\",\n                        description: \"Paragraph of text beneath the heading to explain the heading.\",\n                    }),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Features with title\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            extention: [\n                { name: \"COMPONENTFEATURE\", rename: \"ex.c5Feature\", output: ex.c5Feature },\n                { name: \"COMPONENTTITLE\", rename: \"ex.c5Title\", output: ex.c5Title },\n                { name: \"COMPONENT\", rename: \"ex.c5\", output: ex.c5 },\n            ],\n            output: () => {\n                return ex.c5({\n                    main: {\n                        title: \"Left-aligned title explaining these awesome features\",\n                        description: \"Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.\",\n                        elem: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ weight: \"lg\" }, \"Primary button\"),\n                    },\n                    feature: [\n                        {\n                            icon: \"collection\",\n                            title: \"Featured title\",\n                            description: \"Paragraph of text beneath the heading to explain the heading.\",\n                        },\n                        {\n                            icon: \"gear-fill\",\n                            title: \"Featured title\",\n                            description: \"Paragraph of text beneath the heading to explain the heading.\",\n                        },\n                        {\n                            icon: \"person-circle\",\n                            title: \"Featured title\",\n                            description: \"Paragraph of text beneath the heading to explain the heading.\",\n                        },\n                        {\n                            icon: \"toggles2\",\n                            title: \"Featured title\",\n                            description: \"Paragraph of text beneath the heading to explain the heading.\",\n                        },\n                    ],\n                });\n            },\n        }),\n        //-----------------------\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/example/features.js?");

/***/ })

}]);