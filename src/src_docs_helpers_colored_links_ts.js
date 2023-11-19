"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbsts_test"] = self["webpackChunkbsts_test"] || []).push([["src_docs_helpers_colored_links_ts"],{

/***/ "./src/docs/helpers/colored_links.ts":
/*!*******************************************!*\
  !*** ./src/docs/helpers/colored_links.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   colored_links: () => (/* binding */ colored_links)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"./node_modules/@printf83/bsts/build/esm/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./src/ctl/example/_index.ts\");\n/* harmony import */ var _ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ctl/main/content.js */ \"./src/ctl/main/content.ts\");\n\n\n\nconst colored_links = {\n    title: \"Colored links\",\n    description: \"Colored links with hover states\",\n    item: (db) => {\n        (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.resetContentIndex)();\n        return [\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Link colors\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"You can use the {{.link-*}} classes to colorize links. Unlike the {{nav:docs/utilities/colors::.text-* classes}}, these classes have a {{:hover}} and {{:focus}} state. Some of the link styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"info\", callout: true }, \"{{b::Heads up! }}{{.link-body-emphasis}} is currently the only colored link that adapts to color modes. It’s treated as a special case until v6 arrives and Bootstrap can more thoroughly rebuild Bootstrap theme colors for color modes. Until then, it’s a unique, high-contrast link color with custom {{:hover}} and {{:focus}} styles. However, it still responds to the new link utilities.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    output: () => {\n                        return [\n                            \"primary\",\n                            \"secondary\",\n                            \"success\",\n                            \"danger\",\n                            \"warning\",\n                            \"info\",\n                            \"light\",\n                            \"dark\",\n                            \"body-emphasis\",\n                        ].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({ href: \"#\", linkColor: i }, `${_printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.uppercaseFirst(i)} link`)));\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"info\", callout: true }, \"{{b::Accessibility tip: }}Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies like screen readers. Please ensure the meaning is obvious from the content itself (e.g., the visible text) or is included through alternative means, such as additional text hidden with the {{.visually-hidden}} class.\"),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Link utilities\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Colored links can also be modified by Bootstrap {{nav:docs/utilities/link::link utilities}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    output: () => {\n                        return [\n                            \"primary\",\n                            \"secondary\",\n                            \"success\",\n                            \"danger\",\n                            \"warning\",\n                            \"info\",\n                            \"light\",\n                            \"dark\",\n                            \"body-emphasis\",\n                        ].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                            href: \"#\",\n                            linkColor: i,\n                            linkOffset: 2,\n                            linkUnderlineOpacity: 25,\n                            linkUnderlineOpacityHover: 100,\n                        }, `${_printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.uppercaseFirst(i)} link`)));\n                    },\n                }),\n            ]),\n        ];\n    },\n};\n\n\n//# sourceURL=webpack://bsts-test/./src/docs/helpers/colored_links.ts?");

/***/ })

}]);