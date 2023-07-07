"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_helpers_focus_ring_js"],{

/***/ "./lib/docs/helpers/focus_ring.js":
/*!****************************************!*\
  !*** ./lib/docs/helpers/focus_ring.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   focus_ring: () => (/* binding */ focus_ring)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst focus_ring = {\n    title: \"Focus ring\",\n    description: \"Utility classes that allows you to add and modify custom focus ring styles to elements and components.\",\n    item: () => {\n        return [\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"The {{.focus-ring}} helper removes the default {{outline}} on {{:focus}}, replacing it with a {{box-shadow}} that can be more broadly customized. The new shadow is made up of a series of CSS variables, inherited from the {{:root}} level, that can be modified for any element or component.\"),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Example\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Click directly on the link below to see the focus ring in action, or into the example below and then press {{k::Tab}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                            href: \"#\",\n                            display: \"inline-flex\",\n                            paddingY: 1,\n                            paddingX: 2,\n                            textDecoration: \"none\",\n                            border: true,\n                            rounded: true,\n                            focusRing: true,\n                        }, \"Custom focus ring\");\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Customize\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Modify the styling of a focus ring with Bootstrap CSS variables, Sass variables, utilities, or custom styles.\"),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"CSS variables \"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Modify the {{--bs-focus-ring-*}} CSS variables as needed to change the default appearance.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                            href: \"#\",\n                            display: \"inline-flex\",\n                            paddingY: 1,\n                            paddingX: 2,\n                            textDecoration: \"none\",\n                            border: true,\n                            rounded: true,\n                            focusRing: true,\n                            style: {\n                                \"--bs-focus-ring-color\": \"rgba(var(--bs-success-rgb), .25)\",\n                            },\n                        }, \"Green focus ring\");\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"{{.focus-ring}} sets styles via global CSS variables that can be overridden on any parent element, as shown above. These variables are generated from their Sass variable counterparts.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"css\",\n                    title: \"scss/_root.scss\",\n                    source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_root.scss\",\n                    code: `\n\t\t\t\t\t\t--#{$prefix}focus-ring-width: #{$focus-ring-width};\n\t\t\t\t\t\t--#{$prefix}focus-ring-opacity: #{$focus-ring-opacity};\n\t\t\t\t\t\t--#{$prefix}focus-ring-color: #{$focus-ring-color};\n\t\t\t\t\t`,\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"By default, there is no {{--bs-focus-ring-x}}, {{--bs-focus-ring-y}}, or {{--bs-focus-ring-blur}}, but Bootstrap provide CSS variables with fallbacks to initial {{0}} values. Modify them to change the default appearance.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                            href: \"#\",\n                            display: \"inline-flex\",\n                            paddingY: 1,\n                            paddingX: 2,\n                            textDecoration: \"none\",\n                            border: true,\n                            rounded: true,\n                            focusRing: true,\n                            style: {\n                                \"--bs-focus-ring-x\": \"10px\",\n                                \"--bs-focus-ring-y\": \"10px\",\n                                \"--bs-focus-ring-blur\": \"4px\",\n                            },\n                        }, \"Blurry offset focus ring\");\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Customize the focus ring Sass variables to modify all usage of the focus ring styles across your Bootstrap-powered project.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"css\",\n                    title: \"scss/_variables.scss\",\n                    source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n                    code: `\n\t\t\t\t\t\t$focus-ring-width:      .25rem;\n\t\t\t\t\t\t$focus-ring-opacity:    .25;\n\t\t\t\t\t\t$focus-ring-color:      rgba($primary, $focus-ring-opacity);\n\t\t\t\t\t\t$focus-ring-blur:       0;\n\t\t\t\t\t\t$focus-ring-box-shadow: 0 0 $focus-ring-blur $focus-ring-width $focus-ring-color;\n\t\t\t\t\t`,\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Utilities\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"In addition to {{.focus-ring}}, Bootstrap have several {{.focus-ring-*}} utilities to modify the helper class defaults. Modify the color with any of Bootstrap {{https://getbootstrap.com/docs/5.3/customize/color/#theme-colors::theme colors}}. Note that the light and dark variants may not be visible on all background colors given current color mode support.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return [\"primary\", \"secondary\", \"success\", \"danger\", \"warning\", \"info\", \"light\", \"dark\"].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                            href: \"#\",\n                            display: \"inline-flex\",\n                            focusRing: i,\n                            paddingY: 1,\n                            paddingX: 2,\n                            textDecoration: \"none\",\n                            border: true,\n                            rounded: 2,\n                        }, `${_printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.uppercaseFirst(i)} focus`)));\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Focus ring utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"css\",\n                    title: \"scss/_variables.scss\",\n                    source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n                    code: `\n\t\t\t\t\t\t\"focus-ring\": (\n\t\t\t\t\t\tcss-var: true,\n\t\t\t\t\t\tcss-variable-name: focus-ring-color,\n\t\t\t\t\t\tclass: focus-ring,\n\t\t\t\t\t\tvalues: map-loop($theme-colors-rgb, rgba-css-var, \"$key\", \"focus-ring\")\n\t\t\t\t\t\t),\n\t\t\t\t\t`,\n                }),\n            ]),\n        ];\n    },\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/helpers/focus_ring.js?");

/***/ })

}]);