"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_helpers_ratio_js"],{

/***/ "./lib/docs/helpers/ratio.js":
/*!***********************************!*\
  !*** ./lib/docs/helpers/ratio.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ratio: () => (/* binding */ ratio)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst ratio = {\n    title: \"Ratios\",\n    description: \"Use generated pseudo elements to make an element maintain the aspect ratio of your choosing. Perfect for responsively handling video or slideshow embeds based on the width of the parent.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"About\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use the ratio helper to manage the aspect ratios of external content like {{h.iframe}}s, {{h.embed}}s, {{h.video}}s, and {{h.obj}}s. These helpers also can be used on any standard HTML child element (e.g., a {{h.div}} or {{h.img}}). Styles are applied from the parent {{ratio}} property directly to the child.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Aspect ratios are declared in a Sass map and included in each class via CSS variable, which also allows {{nav:docs/helpers/ratio#custom_ratios::custom aspect ratios}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"info\", callout: true }, \"{{b::Pro-Tip! }}You don’t need {{frameborder:'0'}} on your {{h.iframe}}s as Bootstrap override that for you in {{nav:docs/content/reboot::Reboot}}.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Example\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Wrap any embed, like an {{h.iframe}}, in a parent element with {{ratio}} and an aspect ratio class. The immediate child element is automatically sized thanks to Bootstrap universal selector {{.ratio > *}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ ratio: \"16x9\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.iframe({\n                    src: \"https://www.youtube.com/embed/eVxNksC88_U\",\n                    title: \"YouTube video player\",\n                    allowfullscreen: true,\n                }));\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Aspect ratios\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Aspect ratios can be customized with modifier classes. By default the following ratio classes are provided:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { display: \"flex\", flex: \"wrap\", gap: 2, class: \"ratio-box\" },\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ ratio: \"1x1\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div(\"1X1\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ ratio: \"4x3\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div(\"4X3\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ ratio: \"16x9\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div(\"16X9\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ ratio: \"21x9\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div(\"21X9\")),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Custom ratios\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Each {{ratio}} property includes a CSS custom property (or CSS variable) in the selector. You can override this CSS variable to create custom aspect ratios on the fly with some quick math on your part.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"For example, to create a 2x1 aspect ratio, set {{style:{'--bs-aspect-ratio': '50%'} }}beside the {{ratio}} property.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { display: \"flex\", flex: \"wrap\", gap: 2, class: \"ratio-box\" },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ ratio: true, style: { \"--bs-aspect-ratio\": \"50%\" } }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div(\"2X1\"));\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"This CSS variable makes it easy to modify the aspect ratio across breakpoints. The following is 4x3 to start, but changes to a custom 2x1 at the medium breakpoint.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            code: `\r\n\t\t\t\t.ratio-4x3 {\r\n\t\t\t\t@include media-breakpoint-up(md) {\r\n\t\t\t\t\t--bs-aspect-ratio: 50%; // 2x1\r\n\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Sass map\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Within {{_variables.scss}}, you can change the aspect ratios you want to use. Here’s Bootstrap default {{$ratio-aspect-ratios}} map. Modify the map as you like and recompile your Sass to put them to use.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n            code: `\r\n\t\t\t\t$aspect-ratios: (\r\n\t\t\t\t\"1x1\": 100%,\r\n\t\t\t\t\"4x3\": calc(3 / 4 * 100%),\r\n\t\t\t\t\"16x9\": calc(9 / 16 * 100%),\r\n\t\t\t\t\"21x9\": calc(9 / 21 * 100%)\r\n\t\t\t\t);\r\n\t\t\t`,\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/helpers/ratio.js?");

/***/ })

}]);