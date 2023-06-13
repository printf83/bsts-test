"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_helpers_stacks_js"],{

/***/ "./lib/docs/helpers/stacks.js":
/*!************************************!*\
  !*** ./lib/docs/helpers/stacks.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   stacks: () => (/* binding */ stacks)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"./node_modules/@printf83/bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst stacks = {\n    title: \"Stacks\",\n    description: \"Shorthand helpers that build on top of Bootstrap flexbox utilities to make component layout faster and easier than ever.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Stacks offer a shortcut for applying a number of flexbox properties to quickly and easily create layouts in Bootstrap. All credit for the concept and implementation goes to the open source {{https://almonk.github.io/pylon/::Pylon project}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"info\", callout: true }, \"{{b::Heads up! }}Support for gap utilities with flexbox was recently added to Safari, so consider verifying your intended browser support. Grid layout should have no issues. {{https://caniuse.com/flexbox-gap::Read more}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Vertical\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use {{.vstack}} to create vertical layouts. Stacked items are full-width by default. Use {{.gap-*}} utilities to add space between items.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"flex-box\" },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ vstack: true, gap: 3 }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, \"First item\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, \"Second item\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, \"Third item\"),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Horizontal\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use {{.hstack}} for horizontal layouts. Stacked items are vertically centered by default and only take up their necessary width. Use {{.gap-*}} utilities to add space between items.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"flex-box\" },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ hstack: true, gap: 3 }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, \"First item\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, \"Second item\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, \"Third item\"),\n                ]);\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Using horizontal margin utilities like {{.ms-auto}} as spacers:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"flex-box\" },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ hstack: true, gap: 3 }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, \"First item\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2, marginStart: \"auto\" }, \"Second item\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, \"Third item\"),\n                ]);\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"And with {{nav:docs/helpers/vertical_rule::vertical rules}}:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"flex-box\" },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ hstack: true, gap: 3 }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, \"First item\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, \"Second item\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.verticalrule(),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 2 }, \"Third item\"),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Examples\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use {{.vstack}} to stack buttons and other elements:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ vstack: true, gap: 3, col: \"md-5\", marginX: \"auto\" }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"secondary\" }, \"Save changes\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"secondary\", outline: true }, \"Cancel\"),\n                ]);\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Create an inline form with {{.hstack}}:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ hstack: true, gap: 3 }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({\n                        marginEnd: \"auto\",\n                        placeholder: \"Add your item here...\",\n                        label: \"Add your item here...\",\n                    }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"secondary\" }, \"Submit\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.verticalrule(),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"danger\", outline: true }, \"Reset\"),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"CSS\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/helpers/_stacks.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/helpers/_stacks.scss\",\n            code: `\n\t\t\t\t.hstack {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: row;\n\t\t\t\talign-items: center;\n\t\t\t\talign-self: stretch;\n\t\t\t\t}\n\n\t\t\t\t.vstack {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex: 1 1 auto;\n\t\t\t\tflex-direction: column;\n\t\t\t\talign-self: stretch;\n\t\t\t\t}\n\t\t\t`,\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/helpers/stacks.js?");

/***/ })

}]);