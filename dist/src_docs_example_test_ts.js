"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["src_docs_example_test_ts"],{

/***/ "./src/docs/example/test.ts":
/*!**********************************!*\
  !*** ./src/docs/example/test.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   test: () => (/* binding */ test)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"./node_modules/@printf83/bsts/build/esm/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./src/ctl/example/_index.ts\");\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js/auto */ \"./node_modules/chart.js/auto/auto.js\");\n\n\n\nconst test = {\n    title: \"Testing memory leak\",\n    description: \"This is testing page to test our library one by one\",\n    item: () => {\n        return [\n            // new e.section([\n            // \tnew e.title(\"Tooltip\"),\n            // \tnew e.code({\n            // \t\toutput: () => {\n            // \t\t\treturn new b.button(\"Hello\");\n            // \t\t},\n            // \t}),\n            // ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Animation\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    outputAttr: { display: \"flex\", gap: 3, flex: \"wrap\" },\n                    output: () => {\n                        return [\n                            \"rotation\",\n                            \"sidetoside\",\n                            \"zoom-in\",\n                            \"zoom-out\",\n                            \"spin\",\n                            \"pulse\",\n                            \"shake\",\n                            \"barrel-roll\",\n                            \"floater\",\n                            \"wiggle\",\n                            \"pound\",\n                            \"heartbeat\",\n                            \"roller-right\",\n                            \"roller-left\",\n                            \"slide-down\",\n                            \"slide-up\",\n                            \"slide-left\",\n                            \"slide-right\",\n                            \"fade-in\",\n                            \"fade-out\",\n                            \"rotate-in-right\",\n                            \"rotate-in-left\",\n                            \"rotate-in\",\n                            \"bounce-in\",\n                        ].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                            display: \"flex\",\n                            justifyContent: \"center\",\n                            alignItem: \"center\",\n                            overflow: \"hidden\",\n                            padding: 2,\n                            border: true,\n                            rounded: 2,\n                            col: [6, \"md-4\", \"lg-3\", \"xl-2\"],\n                        }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({\n                            icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({\n                                animate: i,\n                                animateRepeat: \"infinite\",\n                                fontSize: 1,\n                            }, \"asterisk\"),\n                            iconPosition: \"top\",\n                            elem: i,\n                        })));\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Rotate\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    outputAttr: { display: \"flex\", gap: 3, flex: \"wrap\" },\n                    output: () => {\n                        return [undefined, 45, 90, 135, 180, 225, 270, 315].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                            display: \"flex\",\n                            justifyContent: \"center\",\n                            alignItem: \"center\",\n                            padding: 2,\n                            border: true,\n                            rounded: 2,\n                            col: [6, \"md-4\", \"lg-3\", \"xl-2\"],\n                        }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({\n                            icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({\n                                rotate: i,\n                                fontSize: 1,\n                            }, \"at\"),\n                            iconPosition: \"top\",\n                            elem: i ? i : \"normal\",\n                        })));\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Flip\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    outputAttr: { display: \"flex\", gap: 3, flex: \"wrap\" },\n                    output: () => {\n                        return [undefined, \"vertical\", \"horizontal\", \"both\"].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                            display: \"flex\",\n                            justifyContent: \"center\",\n                            alignItem: \"center\",\n                            padding: 2,\n                            border: true,\n                            rounded: 2,\n                            col: [6, \"md-4\", \"lg-3\", \"xl-2\"],\n                        }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({\n                            icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({\n                                flip: i,\n                                fontSize: 1,\n                            }, \"at\"),\n                            iconPosition: \"top\",\n                            elem: i ? i : \"normal\",\n                        })));\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Duplicate ID\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    outputAttr: { display: \"flex\", gap: 2 },\n                    output: () => {\n                        return [\n                        // new b.button({ id: \"chart\" }, \"chart\"),\n                        // new b.button({ id: \"duplicate_id\" }, \"duplicate_id\"),\n                        // new b.button({ id: \"tooltip\" }, \"tooltip\"),\n                        ];\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Chart\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        const item = (arg) => {\n                            return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.container({ style: { maxWidth: \"120px\" } }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.body(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.canvas({\n                                ratio: \"4x3\",\n                                on: {\n                                    build: (event) => {\n                                        const target = event.target;\n                                        //dialog show after 300 ms\n                                        setTimeout((target) => {\n                                            new chart_js_auto__WEBPACK_IMPORTED_MODULE_2__[\"default\"](target, {\n                                                type: \"line\",\n                                                data: {\n                                                    labels: Array(arg.data.length).fill(\"\"),\n                                                    datasets: [\n                                                        {\n                                                            data: arg.data,\n                                                            borderWidth: 2,\n                                                            pointRadius: 0,\n                                                            tension: 0.5,\n                                                        },\n                                                    ],\n                                                },\n                                                options: {\n                                                    plugins: {\n                                                        legend: {\n                                                            display: false,\n                                                        },\n                                                    },\n                                                    scales: {\n                                                        x: { display: false },\n                                                        y: {\n                                                            display: false,\n                                                            beginAtZero: true,\n                                                        },\n                                                    },\n                                                },\n                                            });\n                                        }, 300, target);\n                                    },\n                                },\n                            })));\n                        };\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                            on: {\n                                click: () => {\n                                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.show(_printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.modal.create({\n                                        customStyle: 2,\n                                        title: \"Chatjs example\",\n                                        scrollable: true,\n                                        elem: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                                            display: \"flex\",\n                                            gap: 3,\n                                            justifyContent: \"center\",\n                                            flex: \"wrap\",\n                                            marginTop: 3,\n                                        }, new Array(15).fill(\"\").map(() => {\n                                            return item({\n                                                data: Array(_printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.rndBetween(5, 20))\n                                                    .fill(\"\")\n                                                    .map(() => {\n                                                    return _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.rndBetween(1, 20);\n                                                }),\n                                            });\n                                        })),\n                                        btn: [\"ok\", \"cancel\"],\n                                    }));\n                                },\n                            },\n                        }, \"Test\");\n                    },\n                }),\n            ]),\n        ];\n    },\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./src/docs/example/test.ts?");

/***/ })

}]);