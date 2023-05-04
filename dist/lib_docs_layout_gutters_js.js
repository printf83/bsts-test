"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_layout_gutters_js"],{

/***/ "./lib/docs/layout/gutters.js":
/*!************************************!*\
  !*** ./lib/docs/layout/gutters.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gutters\": () => (/* binding */ gutters)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst gutters = {\n    title: \"Gutters\",\n    description: \"Gutters are the padding between your columns, used to responsively space and align content in the Bootstrap grid system.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"How they work\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\n                \"{{b::Gutters are the gaps between column content, created by horizontal }}{{bc::padding}}{{b::.}} Bootstrap set {{padding-right}} and {{padding-left}} on each column, and use negative {{margin}} to offset that at the start and end of each row to align content.\",\n                \"{{b::Gutters start at }}{{bc::1.5rem }}{{b::(}}{{bc::24px}}{{b::) wide.}} This allows us to match Bootstrap grid to the {{nav:docs/utilities/spacing::padding and margin spacers}} scale.\",\n                \"{{b::Gutters can be responsively adjusted.}} Use breakpoint-specific gutter classes to modify horizontal gutters, vertical gutters, and all gutters.\",\n            ],\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Horizontal gutters\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"{{.gx-*}} classes can be used to control the horizontal gutter widths. The {{.container}} or {{.container-fluid}} parent may need to be adjusted if larger gutters are used too to avoid unwanted overflow, using a matching padding utility. For example, in the following example Bootstrap increased the padding with {{.px-4}}:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"p-box\" },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true, paddingX: 4, textAlign: \"center\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, gutterX: 5 }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: true }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 3 }, \"Custom column padding\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: true }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 3 }, \"Custom column padding\")),\n                ]));\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"An alternative solution is to add a wrapper around the {{.row}} with the {{.overflow-hidden}} class:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"p-box\" },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true, overflow: \"hidden\", textAlign: \"center\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, gutterX: 5 }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: true }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 3 }, \"Custom column padding\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: true }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 3 }, \"Custom column padding\")),\n                ]));\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Vertical gutters\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"{{.gy-*}} classes can be used to control the vertical gutter widths within a row when columns wrap to new lines. Like the horizontal gutters, the vertical gutters can cause some overflow below the {{.row}} at the end of a page. If this occurs, you add a wrapper around {{.row}} with the {{.overflow-hidden}} class:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"p-box\" },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true, overflow: \"hidden\", textAlign: \"center\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, gutterY: 5 }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 6 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 3 }, \"Custom column padding\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 6 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 3 }, \"Custom column padding\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 6 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 3 }, \"Custom column padding\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 6 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 3 }, \"Custom column padding\")),\n                ]));\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Horizontal & vertical gutters\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use {{.g-*}} classes to control the horizontal and vertical grid gutters. In the example below, Bootstrap use a smaller gutter width, so there isn’t a need for the {{.overflow-hidden}} wrapper class.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"p-box\" },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true, textAlign: \"center\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, gutter: 2 }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 6 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 3 }, \"Custom column padding\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 6 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 3 }, \"Custom column padding\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 6 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 3 }, \"Custom column padding\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 6 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 3 }, \"Custom column padding\")),\n                ]));\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Row columns gutters\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Gutter classes can also be added to {{nav:docs/layout/grid#row_columns::row columns}}. In the following example, Bootstrap use responsive row columns and responsive gutter classes.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            showViewport: true,\n            outputAttr: { class: \"p-box\" },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true, textAlign: \"center\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, gutter: [2, \"lg-3\"], rowCol: [2, \"lg-5\"] }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 6 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 3 }, \"Row column\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 6 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 3 }, \"Row column\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 6 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 3 }, \"Row column\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 6 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 3 }, \"Row column\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 6 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 3 }, \"Row column\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 6 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 3 }, \"Row column\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 6 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 3 }, \"Row column\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 6 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 3 }, \"Row column\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 6 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 3 }, \"Row column\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 6 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 3 }, \"Row column\")),\n                ]));\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"No gutters\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"The gutters between columns in Bootstrap predefined grid classes can be removed with {{.g-0}}. This removes the negative {{margins}} from {{.row}} and the horizontal {{padding}} from all immediate children columns.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"{{b::Need an edge-to-edge design?}} Drop the parent {{.container}} or {{.container-fluid}} and add {{.mx-0}} to the {{.row}} to prevent overflow.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"In practice, here’s how it looks. Note you can continue to use this with all other predefined grid classes (including column widths, responsive tiers, reorders, and more).\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            showViewport: true,\n            outputAttr: { class: \"col-box\" },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, gutter: 0, textAlign: \"center\" }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: [\"sm-6\", \"md-8\"] }, \".col-sm-6 .col-md-8\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: [6, \"md-4\"] }, \".col-6 .col-md-4\"),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Change the gutters\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Classes are built from the {{$gutters}} Sass map which is inherited from the {{$spacers}} Sass map.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            code: `\n\t\t\t\t$grid-gutter-width: 1.5rem;\n\t\t\t\t$gutters: (\n\t\t\t\t0: 0,\n\t\t\t\t1: $spacer * .25,\n\t\t\t\t2: $spacer * .5,\n\t\t\t\t3: $spacer,\n\t\t\t\t4: $spacer * 1.5,\n\t\t\t\t5: $spacer * 3,\n\t\t\t\t);\n\t\t\t`,\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/layout/gutters.js?");

/***/ })

}]);