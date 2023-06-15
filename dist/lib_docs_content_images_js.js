"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_content_images_js"],{

/***/ "./lib/docs/content/images.js":
/*!************************************!*\
  !*** ./lib/docs/content/images.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   images: () => (/* binding */ images)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"./node_modules/@printf83/bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst images = {\n    title: \"Images\",\n    description: \"Documentation and examples for opting images into responsive behavior (so they never become wider than their parent) and add lightweight styles to them—all via classes.\",\n    item: [\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Responsive images\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Images in Bootstrap are made responsive with {{.img-fluid}}. This applies {{max-width: 100%;}} and {{height: auto;}} to the image so that it scales with the parent width.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.img({ fluid: true, src: \"https://picsum.photos/seed/bsts_0/820/250.webp\", alt: \"...\" });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Image thumbnails\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"In addition to Bootstrap {{nav:docs/utilities/borders::border-radius utilities}}, you can use {{.img-thumbnail}} to give an image a rounded 1px border appearance.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.img({\n                    thumbnail: true,\n                    src: \"https://picsum.photos/seed/bsts_0/200/200.webp\",\n                    alt: \"...\",\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Aligning images\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Align images with the {{nav:docs/utilities/float::helper float classes}} or {{nav:docs/utilities/text#text_alignment::text alignment classes}}. {{block}}-level images can be centered using the {{nav:docs/utilities/spacing#horizontal_centering::.mx-auto margin utility class}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.img({\n                        float: \"start\",\n                        rounded: true,\n                        src: \"https://picsum.photos/seed/bsts_0/200/200.webp\",\n                        alt: \"...\",\n                    }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.img({\n                        float: \"end\",\n                        rounded: true,\n                        src: \"https://picsum.photos/seed/bsts_0/200/200.webp\",\n                        alt: \"...\",\n                    }),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ textAlign: \"center\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.img({ rounded: true, src: \"https://picsum.photos/seed/bsts_0/200/200.webp\", alt: \"...\" }));\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Picture\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"If you are using the {{<picture>}} element to specify multiple {{<source>}} elements for a specific {{<img>}}, make sure to add the {{.img-*}} classes to the {{<img>}} and not to the {{<picture>}} tag.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            showViewport: true,\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.picture([\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.source({\n                        media: \"(min-width:992px)\",\n                        srcset: \"https://picsum.photos/seed/bsts_0/820/250.webp\",\n                    }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.source({\n                        media: \"(min-width:768px)\",\n                        srcset: \"https://picsum.photos/seed/bsts_1/710/200.webp\",\n                    }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.img({\n                        fluid: true,\n                        thumbnail: true,\n                        src: \"https://picsum.photos/seed/bsts_2/450/200.webp\",\n                        alt: \"...\",\n                    }),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"CSS\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass variables\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Variables are available for image thumbnails.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n            code: `\n\t\t\t\t$thumbnail-padding:                 .25rem;\n\t\t\t\t$thumbnail-bg:                      var(--#{$prefix}body-bg);\n\t\t\t\t$thumbnail-border-width:            var(--#{$prefix}border-width);\n\t\t\t\t$thumbnail-border-color:            var(--#{$prefix}border-color);\n\t\t\t\t$thumbnail-border-radius:           var(--#{$prefix}border-radius);\n\t\t\t\t$thumbnail-box-shadow:              var(--#{$prefix}box-shadow-sm);\n\t\t\t`,\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/content/images.js?");

/***/ })

}]);