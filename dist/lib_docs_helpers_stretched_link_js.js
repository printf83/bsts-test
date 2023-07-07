"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_helpers_stretched_link_js"],{

/***/ "./lib/docs/helpers/stretched_link.js":
/*!********************************************!*\
  !*** ./lib/docs/helpers/stretched_link.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   stretched_link: () => (/* binding */ stretched_link)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst stretched_link = {\n    title: \"Stretched link\",\n    description: \"Make any HTML element or Bootstrap component clickable by “stretching” a nested link via CSS.\",\n    item: () => {\n        return [\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Add {{.stretched-link}} to a link to make its {{https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block::containing block}} clickable via a {{::after}} pseudo element. In most cases, this means that an element with {{position: relative;}} that contains a link with the {{.stretched-link}} class is clickable. Please note given {{https://www.w3.org/TR/CSS21/visuren.html#propdef-position::how CSS position works}}, {{.stretched-link}} cannot be mixed with most table elements.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Cards have {{position: relative}} by default in Bootstrap, so in this case you can safely add the {{.stretched-link}} class to a link in the card without any other HTML changes.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Multiple links and tap targets are not recommended with stretched links. However, some {{position}} and {{z-index}} styles can help should this be required.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    showConsole: true,\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.container({ style: { width: \"18rem\" } }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.img({\n                                location: \"top\",\n                                src: \"https://picsum.photos/seed/bsts_0/286/180.webp\",\n                                alt: \"Image cap\",\n                            }),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.body([\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.title(\"Card with stretched link\"),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.text(\"Some quick example text to build on the card title and make up the bulk of the card's content.\"),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                    href: \"#\",\n                                    stretched: true,\n                                    on: {\n                                        click: (event) => {\n                                            const target = event.target;\n                                            _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.console(target, \"click\", \"Go somewhere button clicked\");\n                                        },\n                                    },\n                                }, \"Go somewhere\"),\n                            ]),\n                        ]);\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Most custom components do not have {{position: relative}} by default, so Bootstrap need to add the {{.position-relative}} here to prevent the link from stretching outside the parent element.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    showConsole: true,\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\", position: \"relative\" }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.img({\n                                flex: \"shrink-0\",\n                                marginEnd: 3,\n                                src: \"https://picsum.photos/seed/bsts_0/144/144.webp\",\n                                alt: \"Image cap\",\n                            }),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div([\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(5, { marginTop: 0 }, \"Custom component with stretched link\"),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and Bootstrap're using it here to give the component a bit of body and size.\"),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                                    href: \"#\",\n                                    stretched: true,\n                                    on: {\n                                        click: (event) => {\n                                            const target = event.target;\n                                            _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.console(target, \"click\", \"Go somewhere link clicked\");\n                                        },\n                                    },\n                                }, \"Go somewhere\"),\n                            ]),\n                        ]);\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    showConsole: true,\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, gutter: 0, bgColor: \"body-secondary\", position: \"relative\" }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"md-6\", marginBottom: \"md-0\", padding: \"md-4\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.img({\n                                width: 100,\n                                src: \"https://picsum.photos/seed/bsts_0/330/200.webp\",\n                                alt: \"Image cap\",\n                            })),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"md-6\", padding: 4, paddingStart: \"md-0\" }, [\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(5, { marginTop: 0 }, \"Columns with stretched link\"),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and Bootstrap're using it here to give the component a bit of body and size.\"),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                                    href: \"#\",\n                                    stretched: true,\n                                    on: {\n                                        click: (event) => {\n                                            const target = event.target;\n                                            _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.console(target, \"click\", \"Go somewhere link clicked\");\n                                        },\n                                    },\n                                }, \"Go somewhere\"),\n                            ]),\n                        ]);\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Identifying the containing block\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"If the stretched link doesn’t seem to work, the {{https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block::containing block}} will probably be the cause. The following CSS properties will make an element the containing block:\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n                    item: [\n                        \"A {{position}} value other than {{static}}\",\n                        \"A {{transform}} or {{perspective}} value other than {{none}}\",\n                        \"A {{will-change}} value of {{transform}} or {{perspective}}\",\n                        \"A {{filter}} value other than {{none}} or a {{will-change}} value of {{filter}} (only works on Firefox)\",\n                    ],\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    showConsole: true,\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.container({ style: { width: \"18rem\" } }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.img({\n                                location: \"top\",\n                                src: \"https://picsum.photos/seed/bsts_0/286/180.webp\",\n                                alt: \"Image cap\",\n                            }),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.body([\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.title(\"Card with stretched link\"),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.text(\"Some quick example text to build on the card title and make up the bulk of the card's content.\"),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.text(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                                    href: \"#\",\n                                    stretched: true,\n                                    textColor: \"danger\",\n                                    style: { position: \"relative\" },\n                                    on: {\n                                        click: (event) => {\n                                            const target = event.target;\n                                            _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.console(target, \"click\", \"Link 1 clicked\");\n                                        },\n                                    },\n                                }, \"Stretched link will not work here, because {{position: relative}} is added to the link\")),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.text({\n                                    bgColor: \"body-tertiary\",\n                                    style: { transform: \"rotate(0)\" },\n                                }, [\n                                    \"This \",\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                                        href: \"#\",\n                                        textColor: \"warning\",\n                                        stretched: true,\n                                        on: {\n                                            click: (event) => {\n                                                const target = event.target;\n                                                _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.console(target, \"click\", \"Link 2 clicked\");\n                                            },\n                                        },\n                                    }, \"stretched link\"),\n                                    \" will only be spread over the {{p}}-tag, because a transform is applied to it.\",\n                                ]),\n                            ]),\n                        ]);\n                    },\n                }),\n            ]),\n        ];\n    },\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/helpers/stretched_link.js?");

/***/ })

}]);