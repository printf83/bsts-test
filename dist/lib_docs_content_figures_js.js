"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_content_figures_js"],{

/***/ "./lib/docs/content/figures.js":
/*!*************************************!*\
  !*** ./lib/docs/content/figures.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   figures: () => (/* binding */ figures)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst figures = {\n    title: \"Figures\",\n    description: \"Documentation and examples for displaying related images and text with the figure component in Bootstrap.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Anytime you need to display a piece of content—like an image with an optional caption, consider using a {{<figure>}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use the included {{.figure}}, {{.figure-img}} and {{.figure-caption}} classes to provide some baseline styles for the HTML5 {{<figure>}} and {{<figcaption>}} elements. Images in figures have no explicit size, so be sure to add the {{.img-fluid}} class to your {{<img>}} to make it responsive.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.figure.container([\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.figure.img({\n                        fluid: true,\n                        rounded: true,\n                        src: \"https://picsum.photos/seed/bsts_0/400/300.webp\",\n                        alt: \"...\",\n                    }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.figure.caption(\"A caption for the above image\"),\n                ]);\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Aligning the figure’s caption is easy with Bootstrap {{nav:docs/utilities/text#text_alignment::text utilities}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.figure.container([\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.figure.img({\n                        fluid: true,\n                        rounded: true,\n                        src: \"https://picsum.photos/seed/bsts_0/400/300.webp\",\n                        alt: \"...\",\n                    }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.figure.caption({ textAlign: \"end\" }, \"A caption for the above image\"),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"CSS\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass variables\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n            code: `\r\n\t\t\t\t$figure-caption-font-size:          $small-font-size;\r\n\t\t\t\t$figure-caption-color:              var(--#{$prefix}secondary-color);\r\n\t\t\t`,\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/content/figures.js?");

/***/ })

}]);