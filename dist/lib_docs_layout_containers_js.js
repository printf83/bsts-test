"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_layout_containers_js"],{

/***/ "./lib/docs/layout/containers.js":
/*!***************************************!*\
  !*** ./lib/docs/layout/containers.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   containers: () => (/* binding */ containers)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/build/esm/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst containers = {\n    title: \"Containers\",\n    description: \"Containers are a fundamental building block of Bootstrap that contain, pad, and align your content within a given device or viewport.\",\n    item: () => {\n        return [\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"How they work\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Containers are the most basic layout element in Bootstrap and are {{b::required when using Bootstrap default grid system}}. Containers are used to contain, pad, and (sometimes) center the content within them. While containers {{i::can}} be nested, most layouts do not require a nested container.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Bootstrap comes with three different containers:\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n                    item: [\n                        \"{{.container}}, which sets a {{max-width}} at each responsive breakpoint\",\n                        \"{{.container-{breakpoint} }}, which is {{width: 100%}} until the specified breakpoint\",\n                        \"{{.container-fluid}}, which is {{width: 100%}} at all breakpoints\",\n                    ],\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"The table below illustrates how each container’s {{max-width}} compares to the original {{.container}} and {{.container-fluid}} across each breakpoint.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"See them in action and compare them in Bootstrap {{https://getbootstrap.com/docs/5.3/examples/grid/#containers::Grid example}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.table({\n                    responsiveHeader: [\n                        \"Property\",\n                        \"Extra small (576px)\",\n                        \"Small (≥576px)\",\n                        \"Medium (≥768px)\",\n                        \"Large (≥992px)\",\n                        \"X-Large (≥1200px)\",\n                        \"XX-Large (≥1400px)\",\n                    ],\n                    responsiveCol: \"20ch auto\",\n                    item: [\n                        [\n                            \"\",\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div([\"Extra small\", new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ fontWeight: \"normal\" }, \"<576px\")]),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div([\"Small\", new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ fontWeight: \"normal\" }, \"≥576px\")]),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div([\"Medium\", new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ fontWeight: \"normal\" }, \"≥768px\")]),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div([\"Large\", new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ fontWeight: \"normal\" }, \"≥992px\")]),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div([\"X-Large\", new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ fontWeight: \"normal\" }, \"≥1200px\")]),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div([\"XX-Large\", new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ fontWeight: \"normal\" }, \"≥1400px\")]),\n                        ],\n                        [\"{{.container}}\", \"100%\", \"540px\", \"720px\", \"960px\", \"1140px\", \"1320px\"],\n                        [\"{{.container-sm}}\", \"100%\", \"540px\", \"720px\", \"960px\", \"1140px\", \"1320px\"],\n                        [\"{{.container-md}}\", \"100%\", \"100%\", \"720px\", \"960px\", \"1140px\", \"1320px\"],\n                        [\"{{.container-lg}}\", \"100%\", \"100%\", \"100%\", \"960px\", \"1140px\", \"1320px\"],\n                        [\"{{.container-xl}}\", \"100%\", \"100%\", \"100%\", \"100%\", \"1140px\", \"1320px\"],\n                        [\"{{.container-xxl}}\", \"100%\", \"100%\", \"100%\", \"100%\", \"100%\", \"1320px\"],\n                        [\"{{.container-fluid}}\", \"100%\", \"100%\", \"100%\", \"100%\", \"100%\", \"100%\"],\n                    ],\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Default container\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Bootstrap default {{.container}} class is a responsive, fixed-width container, meaning its {{max-width}} changes at each breakpoint.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"js\",\n                    code: `new h.div({ container: true }, \"Content here\")`,\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Responsive containers\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Responsive containers allow you to specify a class that is 100% wide until the specified breakpoint is reached, after which Bootstrap apply {{max-widths}} for each of the higher breakpoints. For example, {{.container-sm}} is 100% wide to start until the {{sm}} breakpoint is reached, where it will scale up with {{md}}, {{lg}}, {{xl}}, and {{xxl}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"js\",\n                    code: `\n\t\t\t\t\t\tnew h.div({ container: \"sm\" }, \"100% wide until small breakpoint\");\n\t\t\t\t\t\tnew h.div({ container: \"md\" }, \"100% wide until medium breakpoint\");\n\t\t\t\t\t\tnew h.div({ container: \"lg\" }, \"100% wide until large breakpoint\");\n\t\t\t\t\t\tnew h.div({ container: \"xl\" }, \"100% wide until extra large breakpoint\");\n\t\t\t\t\t\tnew h.div({ container: \"xxl\" }, \"100% wide until extra extra large breakpoint\");\n\t\t\t\t\t\t`,\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Fluid containers\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use {{.container-fluid}} for a full width container, spanning the entire width of the viewport.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"js\",\n                    code: `new h.div({container:\"fluid\"},\"Content here\");`,\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Sass\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"As shown above, Bootstrap generates a series of predefined container classes to help you build the layouts you desire. You may customize these predefined container classes by modifying the Sass map (found in {{_variables.scss}}) that powers them:\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"css\",\n                    title: \"scss/_variables.scss\",\n                    source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n                    code: `\n\t\t\t\t\t\t$container-max-widths: (\n\t\t\t\t\t\tsm: 540px,\n\t\t\t\t\t\tmd: 720px,\n\t\t\t\t\t\tlg: 960px,\n\t\t\t\t\t\txl: 1140px,\n\t\t\t\t\t\txxl: 1320px\n\t\t\t\t\t\t);\n\t\t\t\t\t`,\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"In addition to customizing the Sass, you can also create your own containers with Bootstrap Sass mixin.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"css\",\n                    code: `\n\t\t\t\t\t\t// Source mixin\n\t\t\t\t\t\t@mixin make-container($padding-x: $container-padding-x) {\n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\tpadding-right: $padding-x;\n\t\t\t\t\t\tpadding-left: $padding-x;\n\t\t\t\t\t\tmargin-right: auto;\n\t\t\t\t\t\tmargin-left: auto;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t// Usage\n\t\t\t\t\t\t.custom-container {\n\t\t\t\t\t\t@include make-container();\n\t\t\t\t\t\t}\n\t\t\t\t\t`,\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"For more information and examples on how to modify Bootstrap Sass maps and variables, please refer to {{nav:docs/layout/grid#sass::the Sass section of the Grid documentation}}.\"),\n            ]),\n        ];\n    },\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/layout/containers.js?");

/***/ })

}]);