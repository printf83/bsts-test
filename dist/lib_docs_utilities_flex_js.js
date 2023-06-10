"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_utilities_flex_js"],{

/***/ "./lib/docs/utilities/flex.js":
/*!************************************!*\
  !*** ./lib/docs/utilities/flex.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   flex: () => (/* binding */ flex)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"./node_modules/@printf83/bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst FLEXITEM = (length) => {\n    return Array(length)\n        .fill(\"\")\n        .map(() => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, \"Flex item\"));\n};\nconst flex = {\n    title: \"Flex\",\n    description: \"Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Enable flex behaviors \"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Apply {{display}} utilities to create a flexbox container and transform {{b::direct children elements}} into flex items. Flex containers and items are able to be modified further with additional flex properties.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"flex-box\" },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\", padding: 2 }, \"I'm a flexbox container!\");\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"flex-box\" },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"inline-flex\", padding: 2 }, \"I'm a flexbox container!\");\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Responsive variations also exist for {{.d-flex}} and {{.d-inline-flex}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\n                ...[\"\", \"-sm\", \"-md\", \"-lg\", \"-xl\", \"-xxl\"]\n                    .map((i) => {\n                    return [\"flex\", \"inline-flex\"].map((j) => `{{ .d${i}-${j} }}`);\n                })\n                    .flat(),\n            ],\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Direction\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Set the direction of flex items in a flex container with direction utilities. In most cases you can omit the horizontal class here as the browser default is {{row}}. However, you may encounter situations where you needed to explicitly set this value (like responsive layouts).\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use {{.flex-row}} to set a horizontal direction (the browser default), or {{.flex-row-reverse}} to start the horizontal direction from the opposite side.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { display: \"grid\", gap: 3, class: \"flex-box\" },\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\", flex: \"row\" }, [1, 2, 3].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, `Flex item ${i}`))),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\", flex: \"row-reverse\" }, [1, 2, 3].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, `Flex item ${i}`))),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use {{.flex-column}} to set a vertical direction, or {{.flex-column-reverse}} to start the vertical direction from the opposite side.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { display: \"grid\", gap: 3, class: \"flex-box\" },\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\", flex: \"column\" }, [1, 2, 3].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, `Flex item ${i}`))),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\", flex: \"column-reverse\" }, [1, 2, 3].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, `Flex item ${i}`))),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Responsive variations also exist for {{flex-direction}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\n                ...[\"\", \"-sm\", \"-md\", \"-lg\", \"-xl\", \"-xxl\"]\n                    .map((i) => {\n                    return [\"row\", \"column\", \"row-reverse\", \"column-reverse\"].map((j) => `{{.justify-content${i}-${j}}}`);\n                })\n                    .flat(),\n            ],\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Justify content\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use {{justify-content}} utilities on flexbox containers to change the alignment of flex items on the main axis (the x-axis to start, y-axis if {{flex-direction: column}}). Choose from {{start}} (browser default), {{end}}, {{center}}, {{between}}, {{around}}, or {{evenly}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { display: \"grid\", gap: 3, class: \"flex-box\" },\n            output: () => {\n                const item = (value) => {\n                    return [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, \"Justify\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, \"Content\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, value),\n                    ];\n                };\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\", justifyContent: \"start\" }, item(\"Start\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\", justifyContent: \"end\" }, item(\"End\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\", justifyContent: \"center\" }, item(\"Center\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\", justifyContent: \"between\" }, item(\"Between\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\", justifyContent: \"around\" }, item(\"Around\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\", justifyContent: \"evenly\" }, item(\"Evenly\")),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Responsive variations also exist for {{justify-content}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\n                ...[\"\", \"-sm\", \"-md\", \"-lg\", \"-xl\", \"-xxl\"]\n                    .map((i) => {\n                    return [\"start\", \"end\", \"center\", \"between\", \"around\", \"evenly\"].map((j) => `{{.justify-content${i}-${j}}}`);\n                })\n                    .flat(),\n            ],\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Align items\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use {{align-items}} utilities on flexbox containers to change the alignment of flex items on the cross axis (the y-axis to start, x-axis if {{flex-direction: column}}). Choose from {{start}}, {{end}}, {{center}}, {{baseline}}, or {{stretch}} (browser default).\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { display: \"grid\", gap: 3, class: \"flex-box\" },\n            output: () => {\n                const item = [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, \"Flex item\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, \"Flex item\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, \"Flex item\"),\n                ];\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\", alignItem: \"start\", style: { height: \"100px\" } }, item),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\", alignItem: \"end\", style: { height: \"100px\" } }, item),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\", alignItem: \"center\", style: { height: \"100px\" } }, item),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\", alignItem: \"baseline\", style: { height: \"100px\" } }, item),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\", alignItem: \"stretch\", style: { height: \"100px\" } }, item),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Responsive variations also exist for {{align-items}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\n                ...[\"\", \"-sm\", \"-md\", \"-lg\", \"-xl\", \"-xxl\"]\n                    .map((i) => {\n                    return [\"start\", \"end\", \"center\", \"baseline\", \"stretch\"].map((j) => `{{.align-items${i}-${j}}}`);\n                })\n                    .flat(),\n            ],\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Align self\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use {{align-self}} utilities on flexbox items to individually change their alignment on the cross axis (the y-axis to start, x-axis if {{flex-direction: column}}). Choose from the same options as {{align-items}}: {{start}}, {{end}}, {{center}}, {{baseline}}, or {{stretch}} (browser default).\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { display: \"grid\", gap: 3, class: \"flex-box\" },\n            output: () => {\n                const item = (i) => {\n                    return [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, \"Flex item\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2, alignSelf: i }, \"Flex item\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, \"Flex item\"),\n                    ];\n                };\n                return [\"start\", \"end\", \"center\", \"baseline\", \"stretch\"].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\", style: { height: \"100px\" } }, item(i)));\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Responsive variations also exist for {{align-self}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\n                ...[\"\", \"-sm\", \"-md\", \"-lg\", \"-xl\", \"-xxl\"]\n                    .map((i) => {\n                    return [\"start\", \"end\", \"center\", \"baseline\", \"stretch\"].map((j) => `{{.align-self${i}-${j}}}`);\n                })\n                    .flat(),\n            ],\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Fill\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use the {{.flex-fill}} class on a series of sibling elements to force them into widths equal to their content (or equal widths if their content does not surpass their border-boxes) while taking up all available horizontal space.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"flex-box\" },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\" }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ flex: \"fill\", padding: 2 }, \"Flex item with a lot of content\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ flex: \"fill\", padding: 2 }, \"Flex item\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ flex: \"fill\", padding: 2 }, \"Flex item\"),\n                ]);\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Responsive variations also exist for {{flex-fill}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\n                \"{{.flex-fill}}\",\n                \"{{.flex-sm-fill}}\",\n                \"{{.flex-md-fill}}\",\n                \"{{.flex-lg-fill}}\",\n                \"{{.flex-xl-fill}}\",\n                \"{{.flex-xxl-fill}}\",\n            ],\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Grow and shrink\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use {{.flex-grow-*}} utilities to toggle a flex item’s ability to grow to fill available space. In the example below, the {{.flex-grow-1}} elements uses all available space it can, while allowing the remaining two flex items their necessary space.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"flex-box\" },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\" }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ flex: \"grow-1\", padding: 2 }, \"Flex item\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, \"Flex item\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, \"Third flex item\"),\n                ]);\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use {{.flex-shrink-*}} utilities to toggle a flex item’s ability to shrink if necessary. In the example below, the second flex item with {{.flex-shrink-1}} is forced to wrap its contents to a new line, “shrinking” to allow more space for the previous flex item with {{.w-100}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"flex-box\" },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\" }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ width: 100, padding: 2 }, \"Flex item\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ flex: \"shrink-1\", padding: 2 }, \"Flex item\"),\n                ]);\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Responsive variations also exist for {{flex-grow}} and {{flex-shrink}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\n                ...[\"\", \"-sm\", \"-md\", \"-lg\", \"-xl\", \"-xxl\"]\n                    .map((i) => {\n                    return [\"grow-0\", \"grow-1\", \"shrink-0\", \"shrink-1\"].map((j) => `{{.flex${i}-${j}}}`);\n                })\n                    .flat(),\n            ],\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Auto margins\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Flexbox can do some pretty awesome things when you mix flex alignments with auto margins. Shown below are three examples of controlling flex items via auto margins: default (no auto margin), pushing two items to the right ({{.me-auto}}), and pushing two items to the left ({{.ms-auto}}).\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { display: \"grid\", gap: 3, class: \"flex-box\" },\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\" }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, \"Flex item\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, \"Flex item\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, \"Flex item\"),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\" }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2, marginEnd: \"auto\" }, \"Flex item\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, \"Flex item\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, \"Flex item\"),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\" }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, \"Flex item\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, \"Flex item\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2, marginStart: \"auto\" }, \"Flex item\"),\n                    ]),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"With align-items\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Vertically move one flex item to the top or bottom of a container by mixing {{align-items}}, {{flex-direction: column}}, and {{margin-top: auto}} or {{margin-bottom: auto}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { display: \"grid\", gap: 3, class: \"flex-box\" },\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\", alignItem: \"start\", flex: \"column\", style: { height: \"200px\" } }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2, marginBottom: \"auto\" }, \"Flex item\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, \"Flex item\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, \"Flex item\"),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\", alignItem: \"end\", flex: \"column\", style: { height: \"200px\" } }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, \"Flex item\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, \"Flex item\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2, marginTop: \"auto\" }, \"Flex item\"),\n                    ]),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Warp\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Change how flex items wrap in a flex container. Choose from no wrapping at all (the browser default) with {{.flex-nowrap}}, wrapping with {{.flex-wrap}}, or reverse wrapping with {{.flex-wrap-reverse}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"flex-box\" },\n            extention: [{ name: \"FLEXITEM\", output: FLEXITEM }],\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\", flex: \"nowrap\", style: { width: \"8rem\" } }, FLEXITEM(5));\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"flex-box\" },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\", flex: \"wrap\" }, Array(14)\n                    .fill(\"\")\n                    .map((i, ix) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, `Flex item ${ix + 1}`)));\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"flex-box\" },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\", flex: \"wrap-reverse\" }, Array(14)\n                    .fill(\"\")\n                    .map((i, ix) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, `Flex item ${ix + 1}`)));\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Responsive variations also exist for {{flex-wrap}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\n                ...[\"\", \"-sm\", \"-md\", \"-lg\", \"-xl\", \"-xxl\"]\n                    .map((i) => {\n                    return [\"nowarp\", \"wrap\", \"wrap-reverse\"].map((j) => `{{.flex${i}-${j}}}`);\n                })\n                    .flat(),\n            ],\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Order\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Change the visual order of specific flex items with a handful of {{order}} utilities. Bootstrap only provide options for making an item first or last, as well as a reset to use the DOM order. As {{order}} takes any integer value from 0 to 5, add custom CSS for any additional values needed.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"flex-box\" },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\", flex: \"nowrap\" }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2, order: 3 }, \"First flex item\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2, order: 2 }, \"Second flex item\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2, order: 1 }, \"Third flex item\"),\n                ]);\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Responsive variations also exist for {{order}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\n                ...[\"\", \"-sm\", \"-md\", \"-lg\", \"-xl\", \"-xxl\"]\n                    .map((i) => {\n                    return [0, 1, 2, 3, 4, 5].map((j) => `{{.order${i}-${j}}}`);\n                })\n                    .flat(),\n            ],\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Additionally there are also responsive {{.order-first}} and {{.order-last}} classes that change the {{order}} of an element by applying {{order: -1}} and {{order: 6}}, respectively.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\n                ...[\"\", \"-sm\", \"-md\", \"-lg\", \"-xl\", \"-xxl\"]\n                    .map((i) => {\n                    return [\"first\", \"last\"].map((j) => `{{.order${i}-${j}}}`);\n                })\n                    .flat(),\n            ],\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Align content\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use {{align-content}} utilities on flexbox containers to align flex items together on the cross axis. Choose from {{start}} (browser default), {{end}}, {{center}}, {{between}}, {{around}}, or {{stretch}}. To demonstrate these utilities, Bootstrap enforced {{flex-wrap: wrap}} and increased the number of flex items.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"{{b::Heads up! }}This property has no effect on single rows of flex items.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"flex-box\" },\n            extention: [{ name: \"FLEXITEM\", output: FLEXITEM }],\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                    display: \"flex\",\n                    flex: \"wrap\",\n                    alignContent: \"start\",\n                    style: { height: \"200px\" },\n                }, FLEXITEM(15));\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"flex-box\" },\n            extention: [{ name: \"FLEXITEM\", output: FLEXITEM }],\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                    display: \"flex\",\n                    flex: \"wrap\",\n                    alignContent: \"end\",\n                    style: { height: \"200px\" },\n                }, FLEXITEM(15));\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"flex-box\" },\n            extention: [{ name: \"FLEXITEM\", output: FLEXITEM }],\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                    display: \"flex\",\n                    flex: \"wrap\",\n                    alignContent: \"center\",\n                    style: { height: \"200px\" },\n                }, FLEXITEM(15));\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"flex-box\" },\n            extention: [{ name: \"FLEXITEM\", output: FLEXITEM }],\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                    display: \"flex\",\n                    flex: \"wrap\",\n                    alignContent: \"between\",\n                    style: { height: \"200px\" },\n                }, FLEXITEM(15));\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"flex-box\" },\n            extention: [{ name: \"FLEXITEM\", output: FLEXITEM }],\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                    display: \"flex\",\n                    flex: \"wrap\",\n                    alignContent: \"around\",\n                    style: { height: \"200px\" },\n                }, FLEXITEM(15));\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"flex-box\" },\n            extention: [{ name: \"FLEXITEM\", output: FLEXITEM }],\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                    display: \"flex\",\n                    flex: \"wrap\",\n                    alignContent: \"stretch\",\n                    style: { height: \"200px\" },\n                }, FLEXITEM(15));\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Responsive variations also exist for {{align-content}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\n                ...[\"\", \"-sm\", \"-md\", \"-lg\", \"-xl\", \"-xxl\"]\n                    .map((i) => {\n                    return [\"start\", \"end\", \"center\", \"between\", \"around\", \"stretch\"].map((j) => `{{.align-content${i}-${j}}}`);\n                })\n                    .flat(),\n            ],\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Media object\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Looking to replicate the {{https://getbootstrap.com/docs/4.6/components/media-object/::media object component}} from Bootstrap 4? Recreate it in no time with a few flex utilities that allow even more flexibility and customization than before.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\" }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ flex: \"shrink-0\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.img({ src: \"https://picsum.photos/seed/bsts_0/100/100.webp\", alt: \"...\" })),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ flex: \"grow-1\", marginStart: 3 }, \"This is some content from a media component. You can replace this with any content and adjust it as needed.\"),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Sass\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Utilities API\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Flexbox utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_utilities.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss\",\n            code: `\n\t\t\t\t\"flex\": (\n\t\t\t\tresponsive: true,\n\t\t\t\tproperty: flex,\n\t\t\t\tvalues: (fill: 1 1 auto)\n\t\t\t\t),\n\t\t\t\t\"flex-direction\": (\n\t\t\t\tresponsive: true,\n\t\t\t\tproperty: flex-direction,\n\t\t\t\tclass: flex,\n\t\t\t\tvalues: row column row-reverse column-reverse\n\t\t\t\t),\n\t\t\t\t\"flex-grow\": (\n\t\t\t\tresponsive: true,\n\t\t\t\tproperty: flex-grow,\n\t\t\t\tclass: flex,\n\t\t\t\tvalues: (\n\t\t\t\t\tgrow-0: 0,\n\t\t\t\t\tgrow-1: 1,\n\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t\"flex-shrink\": (\n\t\t\t\tresponsive: true,\n\t\t\t\tproperty: flex-shrink,\n\t\t\t\tclass: flex,\n\t\t\t\tvalues: (\n\t\t\t\t\tshrink-0: 0,\n\t\t\t\t\tshrink-1: 1,\n\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t\"flex-wrap\": (\n\t\t\t\tresponsive: true,\n\t\t\t\tproperty: flex-wrap,\n\t\t\t\tclass: flex,\n\t\t\t\tvalues: wrap nowrap wrap-reverse\n\t\t\t\t),\n\t\t\t\t\"justify-content\": (\n\t\t\t\tresponsive: true,\n\t\t\t\tproperty: justify-content,\n\t\t\t\tvalues: (\n\t\t\t\t\tstart: flex-start,\n\t\t\t\t\tend: flex-end,\n\t\t\t\t\tcenter: center,\n\t\t\t\t\tbetween: space-between,\n\t\t\t\t\taround: space-around,\n\t\t\t\t\tevenly: space-evenly,\n\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t\"align-items\": (\n\t\t\t\tresponsive: true,\n\t\t\t\tproperty: align-items,\n\t\t\t\tvalues: (\n\t\t\t\t\tstart: flex-start,\n\t\t\t\t\tend: flex-end,\n\t\t\t\t\tcenter: center,\n\t\t\t\t\tbaseline: baseline,\n\t\t\t\t\tstretch: stretch,\n\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t\"align-content\": (\n\t\t\t\tresponsive: true,\n\t\t\t\tproperty: align-content,\n\t\t\t\tvalues: (\n\t\t\t\t\tstart: flex-start,\n\t\t\t\t\tend: flex-end,\n\t\t\t\t\tcenter: center,\n\t\t\t\t\tbetween: space-between,\n\t\t\t\t\taround: space-around,\n\t\t\t\t\tstretch: stretch,\n\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t\"align-self\": (\n\t\t\t\tresponsive: true,\n\t\t\t\tproperty: align-self,\n\t\t\t\tvalues: (\n\t\t\t\t\tauto: auto,\n\t\t\t\t\tstart: flex-start,\n\t\t\t\t\tend: flex-end,\n\t\t\t\t\tcenter: center,\n\t\t\t\t\tbaseline: baseline,\n\t\t\t\t\tstretch: stretch,\n\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t\"order\": (\n\t\t\t\tresponsive: true,\n\t\t\t\tproperty: order,\n\t\t\t\tvalues: (\n\t\t\t\t\tfirst: -1,\n\t\t\t\t\t0: 0,\n\t\t\t\t\t1: 1,\n\t\t\t\t\t2: 2,\n\t\t\t\t\t3: 3,\n\t\t\t\t\t4: 4,\n\t\t\t\t\t5: 5,\n\t\t\t\t\tlast: 6,\n\t\t\t\t),\n\t\t\t\t),\n\t\t\t`,\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/utilities/flex.js?");

/***/ })

}]);