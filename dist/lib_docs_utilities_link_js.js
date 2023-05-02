"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_utilities_link_js"],{

/***/ "./lib/docs/utilities/link.js":
/*!************************************!*\
  !*** ./lib/docs/utilities/link.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"link\": () => (/* binding */ link)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"./node_modules/@printf83/bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst link = {\n    title: \"Link\",\n    description: \"Link utilities are used to stylize your anchors to adjust their color, opacity, underline offset, underline color, and more.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Link opacity\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Change the alpha opacity of the link {{rgba()}} color value with utilities. Please be aware that changes to a color’s opacity can lead to links with {{https://getbootstrap.com/docs/5.3/getting-started/accessibility/#color-contrast::insufficient contrast}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [10, 25, 50, 75, 100].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({ href: \"#\", linkOpacity: i }, `Link opacity ${i}`)));\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"You can even change the opacity level on hover.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [10, 25, 50, 75, 100].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({ href: \"#\", linkOpacityHover: i }, `Link hover opacity ${i}`)));\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Link underlines\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Underline color\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Change the underline’s color independent of the link text color.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\"primary\", \"secondary\", \"success\", \"danger\", \"warning\", \"info\", \"light\", \"dark\"].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({ href: \"#\", linkUnderlineColor: i }, `${i.charAt(0).toUpperCase() + i.slice(1)} underline`)));\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Underline offset\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Change the underline’s distance from your text. Offset is set in {{em}} units to automatically scale with the element’s current {{font-size}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [undefined, 1, 2, 3].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({ href: \"#\", linkOffset: i }, i ? `Offset ${i} link` : \"Default link\")));\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Underline opacity\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Change the underline’s opacity. Requires adding {{.link-underline}} to first set an {{rgba()}} color Bootstrap use to then modify the alpha opacity.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [0, 10, 25, 50, 75, 100].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                    href: \"#\",\n                    linkOffset: 2,\n                    linkUnderline: true,\n                    linkUnderlineOpacity: i,\n                }, `Underline opacity ${i}`)));\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Hover variants\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Just like the {{.link-opacity-*-hover}} utilities, {{.link-offset}} and {{.link-underline-opacity}} utilities include {{:hover}} variants by default. Mix and match to create unique link styles.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                    href: \"#\",\n                    linkOffset: 2,\n                    linkOffsetHover: 3,\n                    linkUnderline: true,\n                    linkUnderlineOpacity: 0,\n                    linkUnderlineOpacityHover: 75,\n                }, \"Underline opacity 0\");\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Colored links\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"{{nav:docs/helpers/colored_links::Colored link helpers}} have been updated to pair with Bootstrap link utilities. Use the new utilities to modify the link opacity, underline opacity, and underline offset.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    \"primary\",\n                    \"secondary\",\n                    \"success\",\n                    \"danger\",\n                    \"warning\",\n                    \"info\",\n                    \"light\",\n                    \"dark\",\n                    \"body-emphasis\",\n                ].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                    href: \"#\",\n                    linkOffset: 2,\n                    linkUnderlineOpacity: 25,\n                    linkUnderlineOpacityHover: 100,\n                    linkColor: i,\n                }, `${i.charAt(0).toUpperCase() + i.slice(1)} link`)));\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"info\", callout: true }, \"{{b::Accessibility tip: }}Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies like screen readers. Please ensure the meaning is obvious from the content itself (e.g., the visible text) or is included through alternative means, such as additional text hidden with the {{.visually-hidden}} class.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Sass\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"In addition to the following Sass functionality, consider reading about Bootstrap included {{https://getbootstrap.com/docs/5.3/customize/css-variables/::CSS custom properties}} (aka CSS variables) for colors and more.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Utilities API\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Link utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_utilities.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_utilities.scss\",\n            code: `\n\t\t\t\t\"link-opacity\": (\n\t\t\t\tcss-var: true,\n\t\t\t\tclass: link-opacity,\n\t\t\t\tstate: hover,\n\t\t\t\tvalues: (\n\t\t\t\t\t10: .1,\n\t\t\t\t\t25: .25,\n\t\t\t\t\t50: .5,\n\t\t\t\t\t75: .75,\n\t\t\t\t\t100: 1\n\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t\"link-offset\": (\n\t\t\t\tproperty: text-underline-offset,\n\t\t\t\tclass: link-offset,\n\t\t\t\tstate: hover,\n\t\t\t\tvalues: (\n\t\t\t\t\t1: .125em,\n\t\t\t\t\t2: .25em,\n\t\t\t\t\t3: .375em,\n\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t\"link-underline\": (\n\t\t\t\tproperty: text-decoration-color,\n\t\t\t\tclass: link-underline,\n\t\t\t\tlocal-vars: (\n\t\t\t\t\t\"link-underline-opacity\": 1\n\t\t\t\t),\n\t\t\t\tvalues: map-merge(\n\t\t\t\t\t$utilities-links-underline,\n\t\t\t\t\t(\n\t\t\t\t\tnull: rgba(var(--#{$prefix}link-color-rgb), var(--#{$prefix}link-underline-opacity, 1)),\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t\"link-underline-opacity\": (\n\t\t\t\tcss-var: true,\n\t\t\t\tclass: link-underline-opacity,\n\t\t\t\tstate: hover,\n\t\t\t\tvalues: (\n\t\t\t\t\t0: 0,\n\t\t\t\t\t10: .1,\n\t\t\t\t\t25: .25,\n\t\t\t\t\t50: .5,\n\t\t\t\t\t75: .75,\n\t\t\t\t\t100: 1\n\t\t\t\t),\n\t\t\t\t),\n\t\t\t`,\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/utilities/link.js?");

/***/ })

}]);