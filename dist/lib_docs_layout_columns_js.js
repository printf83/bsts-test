"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_layout_columns_js"],{

/***/ "./lib/docs/layout/columns.js":
/*!************************************!*\
  !*** ./lib/docs/layout/columns.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"columns\": () => (/* binding */ columns)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst columns = {\n    title: \"Columns\",\n    description: \"Learn how to modify columns with a handful of options for alignment, ordering, and offsetting thanks to Bootstrap flexbox grid system. Plus, see how to use column classes to manage widths of non-grid elements.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"info\", callout: true }, \"{{b::Heads up! }}Be sure to {{nav:docs/layout/grid::read the Grid page}} first before diving into how to modify and customize your grid columns. \"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"How they work\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\n                \"{{b::Columns build on the grid’s flexbox architecture.}} Flexbox means Bootstrap have options for changing individual columns and {{nav:docs/layout/grid#row_columns::modifying groups of columns at the row level}}. You choose how columns grow, shrink, or otherwise change.\",\n                \"{{b::When building grid layouts, all content goes in columns.}} The hierarchy of Bootstrap’s grid goes from {{nav:docs/layout/containers::container}} to row to column to your content. On rare occasions, you may combine content and column, but be aware there can be unintended consequences.\",\n                \"{{b::Bootstrap includes predefined classes for creating fast, responsive layouts.}} With {{nav:docs/layout/breakpoints::six breakpoints}} and a dozen columns at each grid tier, Bootstrap have dozens of classes already built for you to create your desired layouts. This can be disabled via Sass if you wish.\",\n            ],\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Alignment\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use flexbox alignment utilities to vertically and horizontally align columns.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Vertical alignment\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Change the vertical alignment with any of the responsive {{align-items-*}} classes.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: [\"col-box\", \"row-10\"] },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true, textAlign: \"center\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, alignItem: \"start\" }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: true }, \"One of three columns\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: true }, \"One of three columns\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: true }, \"One of three columns\"),\n                ]));\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: [\"col-box\", \"row-10\"] },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true, textAlign: \"center\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, alignItem: \"center\" }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: true }, \"One of three columns\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: true }, \"One of three columns\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: true }, \"One of three columns\"),\n                ]));\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: [\"col-box\", \"row-10\"] },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true, textAlign: \"center\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, alignItem: \"end\" }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: true }, \"One of three columns\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: true }, \"One of three columns\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: true }, \"One of three columns\"),\n                ]));\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Or, change the alignment of each column individually with any of the responsive {{.align-self-*}} classes.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: [\"col-box\", \"row-10\"] },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true, textAlign: \"center\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: true, alignSelf: \"start\" }, \"One of three columns\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: true, alignSelf: \"center\" }, \"One of three columns\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: true, alignSelf: \"end\" }, \"One of three columns\"),\n                ]));\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Horizontal alignment\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Change the horizontal alignment with any of the responsive {{justify-content-*}} classes.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"col-box\" },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true, textAlign: \"center\" }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, justifyContent: \"start\" }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 4 }, \"One of two columns\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 4 }, \"One of two columns\"),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, justifyContent: \"center\" }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 4 }, \"One of two columns\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 4 }, \"One of two columns\"),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, justifyContent: \"end\" }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 4 }, \"One of two columns\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 4 }, \"One of two columns\"),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, justifyContent: \"around\" }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 4 }, \"One of two columns\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 4 }, \"One of two columns\"),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, justifyContent: \"between\" }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 4 }, \"One of two columns\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 4 }, \"One of two columns\"),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, justifyContent: \"evenly\" }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 4 }, \"One of two columns\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 4 }, \"One of two columns\"),\n                    ]),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Column wrapping\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"col-box\" },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 9 }, \".col-9\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 4 }, [\n                        \".col-4\",\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.br(),\n                        \"Since 9 + 4 = 13 > 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.\",\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 6 }, [\n                        \".col-6\",\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.br(),\n                        \"Subsequent columns continue along the new line.\",\n                    ]),\n                ]));\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Column breaks\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Breaking columns to a new line in flexbox requires a small hack: add an element with {{width: 100%}} wherever you want to wrap your columns to a new line. Normally this is accomplished with multiple {{.row}}s, but not every implementation method can account for this.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            showViewport: true,\n            outputAttr: { class: \"col-box\" },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true, textAlign: \"center\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: [6, \"sm-3\"] }, \".col-6 .col-sm-3\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: [6, \"sm-3\"] }, \".col-6 .col-sm-3\"),\n                    //Force next columns to break to new line\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ width: 100 }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: [6, \"sm-3\"] }, \".col-6 .col-sm-3\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: [6, \"sm-3\"] }, \".col-6 .col-sm-3\"),\n                ]));\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"You may also apply this break at specific breakpoints with Bootstrap {{nav:docs/utilities/display::responsive display utilities}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            showViewport: true,\n            outputAttr: { class: \"col-box\" },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true, textAlign: \"center\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: [6, \"sm-4\"] }, \".col-6 .col-sm-4\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: [6, \"sm-4\"] }, \".col-6 .col-sm-4\"),\n                    //Force next columns to break to new line\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ width: 100, display: [\"none\", \"md-block\"] }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: [6, \"sm-4\"] }, \".col-6 .col-sm-4\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: [6, \"sm-4\"] }, \".col-6 .col-sm-4\"),\n                ]));\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Reordering\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Order classes\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use {{.order-}} classes for controlling the {{b::visual order}} of your content. These classes are responsive, so you can set the {{order}} by breakpoint (e.g., {{.order-1.order-md-2}}). Includes support for {{1}} through {{5}} across all six grid tiers. If you need more {{.order-*}} classes, you can modify the default number via Sass variable.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"col-box\" },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true, textAlign: \"center\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: true }, \"First in DOM, no order applied\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: true, order: 5 }, \"Second in DOM, with a larger order\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: true, order: 1 }, \"Third in DOM, with an order of 1\"),\n                ]));\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"There are also responsive {{.order-first}} and {{.order-last}} classes that change the {{order}} of an element by applying {{order: -1}} and {{order: 6}}, respectively. These classes can also be intermixed with the numbered {{.order-*}} classes as needed.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"col-box\" },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true, textAlign: \"center\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: true, order: \"last\" }, \"First in DOM, ordered last\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: true }, \"Second in DOM, unordered\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: true, order: \"first\" }, \"Third in DOM, ordered first\"),\n                ]));\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Offsetting columns\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"You can offset grid columns in two ways: Bootstrap responsive {{.offset-}} grid classes and Bootstrap {{nav:docs/utilities/spacing::margin utilities}}. Grid classes are sized to match columns while margins are more useful for quick layouts where the width of the offset is variable.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.xsubtitle(\"Offset classes\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Move columns to the right using {{.offset-md-*}} classes. These classes increase the left margin of a column by {{*}} columns. For example, {{.offset-md-4}} moves {{.col-md-4}} over four columns.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            showViewport: true,\n            outputAttr: { class: \"col-box\" },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true, textAlign: \"center\" }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"md-4\" }, \".col-md-4\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"md-4\", offset: \"md-4\" }, \".col-md-4 .offset-md-4\"),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"md-3\", offset: \"md-3\" }, \".col-md-3 .offset-md-3\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"md-3\", offset: \"md-3\" }, \".col-md-3 .offset-md-3\"),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true }, [new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"md-6\", offset: \"md-3\" }, \".col-md-6 .offset-md-3\")]),\n                ]);\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"In addition to column clearing at responsive breakpoints, you may need to reset offsets. See this in action in {{nav:docs/examples/grid::the grid example}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            showViewport: true,\n            outputAttr: { class: \"col-box\" },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true, textAlign: \"center\" }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: [\"sm-5\", \"md-6\"] }, \".col-sm-5 .col-md-6\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: [\"sm-5\", \"md-6\"], offset: [\"sm-2\", \"md-0\"] }, \".col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0\"),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: [\"sm-6\", \"md-5\", \"lg-6\"] }, \".col-sm-6 .col-md-5 .col-lg-6\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: [\"sm-6\", \"md-5\", \"lg-6\"], offset: [\"md-2\", \"lg-0\"] }, \".col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0\"),\n                    ]),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.xsubtitle(\"Margin utilities\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"With the move to flexbox in v4, you can use margin utilities like {{.me-auto}} to force sibling columns away from one another.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            showViewport: true,\n            outputAttr: { class: \"col-box\" },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true, textAlign: \"center\" }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"md-4\" }, \".col-md-4\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"md-4\", marginStart: \"auto\" }, \".col-md-4 .ms-auto\"),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"md-3\", marginStart: \"md-auto\" }, \".col-md-3 .ms-md-auto\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"md-3\", marginStart: \"md-auto\" }, \".col-md-3 .ms-md-auto\"),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"auto\", marginEnd: \"auto\" }, \".col-auto .me-auto\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"auto\" }, \".col-auto\"),\n                    ]),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Standalone column classes\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"The {{.col-*}} classes can also be used outside a {{.row}} to give an element a specific width. Whenever column classes are used as non-direct children of a row, the paddings are omitted.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            showViewport: true,\n            outputAttr: { class: \"col-box\" },\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 3, padding: 3, marginBottom: 2 }, \".col-3: width of 25%\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"sm-9\", padding: 3 }, \".col-sm-9: width of 75% above sm breakpoint\"),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"The classes can be used together with utilities to create responsive floated images. Make sure to wrap the content in a {{nav:docs/helpers/clearfix::.clearfix}} wrapper to clear the float if the text is shorter.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            showViewport: true,\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ clearfix: true }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.img({\n                        col: \"md-6\",\n                        float: \"end\",\n                        marginBottom: 3,\n                        marginStart: \"md-3\",\n                        alt: \"...\",\n                        src: \"https://picsum.photos/seed/bsts_0/300/200\",\n                    }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"A paragraph of placeholder text. Bootstrap're using it here to show the use of the clearfix class. Bootstrap're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"And yet, here you are, still persevering in reading this placeholder text, hoping for some more insights, or some hidden easter egg of content. A joke, perhaps. Unfortunately, there's none of that here.\"),\n                ]);\n            },\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/layout/columns.js?");

/***/ })

}]);