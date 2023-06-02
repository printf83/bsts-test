"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_helpers_icon_link_js"],{

/***/ "./lib/docs/helpers/icon_link.js":
/*!***************************************!*\
  !*** ./lib/docs/helpers/icon_link.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   icon_link: () => (/* binding */ icon_link)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst icon_link = {\n    title: \"Icon link\",\n    description: \"Quickly create stylized hyperlinks with Bootstrap Icons or other icons.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"The icon link helper component modifies Bootstrap default link styles to enhance their appearance and quickly align any pairing of icon and text. Alignment is set via inline flexbox styling and a default {{gap}} value. Bootstrap stylize the underline with a custom offset and color. Icons are automatically sized to {{1em}} to best match their associated text’s {{font-size}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Icon links assume {{https://icons.getbootstrap.com/::Bootstrap Icons}} are being used, but you can use any icon or image you like.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"info\", callout: true }, \"When icons are purely decorative, they should be hidden from assistive technologies using {{aria-hidden='true'}}, as Bootstrap done in Bootstrap examples. For icons that convey meaning, provide an appropriate text alternative by adding {{role='img'}} and an appropriate {{aria-label='...'}} to the SVGs.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Example\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Take a regular {{<a>}} element, add {{.icon-link}}, and insert an icon on either the left or right of your link text. The icon is automatically sized, placed, and colored.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({ href: \"#\", iconLink: true }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.s('<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-box-seam\" viewBox=\"0 0 16 16\"><path d=\"M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z\"/></svg>'),\n                    \"Icon link\",\n                ]);\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({ href: \"#\", iconLink: true }, [\n                    \"Icon link\",\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.s('<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-right\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z\"/></svg>'),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Style on hover\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Add {{.icon-link-hover}} to move the icon to the right on hover.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({ href: \"#\", iconLink: \"hover\" }, [\n                    \"Icon link\",\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.s('<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-right\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z\"/></svg>'),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Customize\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Modify the styling of an icon link with Bootstrap link CSS variables, Sass variables, utilities, or custom styles.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"CSS variables\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Modify the {{--bs-link-*}} and {{--bs-icon-link-*}} CSS variables as needed to change the default appearance.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Customize the hover {{transform}} by overriding the {{--bs-icon-link-transform}} CSS variable:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                    href: \"#\",\n                    iconLink: \"hover\",\n                    style: { \"--bs-icon-link-transform\": \"translate3d(0, -.125rem, 0)\" },\n                }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.s('<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-clipboard\" viewBox=\"0 0 16 16\"><path d=\"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z\"/><path d=\"M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z\"/></svg>'),\n                    \"Icon link\",\n                ]);\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Customize the color by overriding the {{--bs-link-*}} CSS variable:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                    href: \"#\",\n                    iconLink: \"hover\",\n                    style: {\n                        \"--bs-link-hover-color-rgb\": \"25, 135, 84\",\n                    },\n                }, [\n                    \"Icon link\",\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.s('<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-right\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z\"/></svg>'),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Customize the icon link Sass variables to modify all icon link styles across your Bootstrap-powered project.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n            code: `\r\n\t\t\t\t$icon-link-gap:               .375rem;\r\n\t\t\t\t$icon-link-underline-offset:  .25em;\r\n\t\t\t\t$icon-link-icon-size:         1em;\r\n\t\t\t\t$icon-link-icon-transition:   .2s ease-in-out transform;\r\n\t\t\t\t$icon-link-icon-transform:    translate3d(.25em, 0, 0);\r\n\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Utilities\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Modify icon links with any of {{nav:docs/utilities/link::Bootstrap link utilities}} for modifying underline color and offset.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                    href: \"#\",\n                    linkColor: \"success\",\n                    linkUnderlineColor: \"success\",\n                    linkUnderlineOpacity: 25,\n                    iconLink: \"hover\",\n                    style: {\n                        \"--bs-link-hover-color-rgb\": \"25, 135, 84\",\n                    },\n                }, [\n                    \"Icon link\",\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.s('<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-right\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z\"/></svg>'),\n                ]);\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"On {{<span>}} so you can use this everywhere\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({\n                    iconLink: \"hover\",\n                }, [\n                    \"Icon link\",\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.s('<svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-right\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z\"/></svg>'),\n                ]));\n            },\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/helpers/icon_link.js?");

/***/ })

}]);