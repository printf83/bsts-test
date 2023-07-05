"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_components_pagination_js"],{

/***/ "./lib/docs/components/pagination.js":
/*!*******************************************!*\
  !*** ./lib/docs/components/pagination.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pagination: () => (/* binding */ pagination)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst pagination = {\n    title: \"Pagination\",\n    description: \"Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.\",\n    item: () => {\n        return [\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Overview\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Bootstrap use a large block of connected links for Bootstrap pagination, making links hard to miss and easily scalable—all while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of available links. {{b.pagination.container}} use a wrapping {{h.nav}} element to identify it as a navigation section to screen readers and other assistive technologies.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"In addition, as pages likely have more than one such navigation section, it’s advisable to provide a descriptive {{label}} for the {{b.pagination.container}} to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be {{label:'Search results pages'}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.container({ label: \"Page navigation example\" }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ href: \"#\" }, \"Previous\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ href: \"#\" }, \"1\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ href: \"#\" }, \"2\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ href: \"#\" }, \"3\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ href: \"#\" }, \"Next\"),\n                        ]);\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Working with icons\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with {{label}} attributes.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.container({ label: \"Page navigation example\" }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ href: \"#\", label: \"Previous\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({ aria: { hidden: true } }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon(\"chevron-bar-left\"))),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ href: \"#\" }, \"1\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ href: \"#\" }, \"2\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ href: \"#\" }, \"3\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ href: \"#\", label: \"Next\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({ aria: { hidden: true } }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon(\"chevron-bar-right\"))),\n                        ]);\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Disabled and active states\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Pagination links ({{b.pagination.item}}) are customizable for different circumstances. Use {{disabled}} for links that appear un-clickable and {{active}} to indicate the current page.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"The {{disabled}} property not just uses {{pointer-events: none}} to fully disable the functionality of {{b.pagination.item}}s\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.container({ label: \"...\" }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ disabled: true }, \"Previous\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ href: \"#\" }, \"1\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ href: \"#\", active: true }, \"2\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ href: \"#\" }, \"3\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ href: \"#\" }, \"Next\"),\n                        ]);\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"{{bsts}} automaticly swap out active or disabled {{b.pagination.item}} with {{h.span}}, to remove click functionality and prevent keyboard focus while retaining intended styles.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.container({ label: \"...\" }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ disabled: true }, \"Previous\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ href: \"#\" }, \"1\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ active: true }, \"2\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ href: \"#\", disabled: true }, \"3\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ href: \"#\" }, \"Next\"),\n                        ]);\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Sizing\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Fancy larger or smaller pagination? Add {{weight:'lg'}} or {{weight:'sm'}} for additional sizes.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.container({ label: \"...\", weight: \"lg\" }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ active: true }, \"1\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ href: \"#\" }, \"2\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ href: \"#\" }, \"3\"),\n                        ]);\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.container({ label: \"...\", weight: \"sm\" }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ active: true }, \"1\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ href: \"#\" }, \"2\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ href: \"#\" }, \"3\"),\n                        ]);\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Alignment\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Change the alignment of pagination components with {{nav:docs/utilities/flex::flexbox utilities}}. For example, with {{justifyContent:'center'}}:\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.container({ label: \"Page navigation example\", justifyContent: \"center\" }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ disabled: true }, \"Previous\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ href: \"#\" }, \"1\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ href: \"#\" }, \"2\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ href: \"#\" }, \"3\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ href: \"#\" }, \"Next\"),\n                        ]);\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Or with {{justifyContent:'end'}}:\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.container({ label: \"Page navigation example\", justifyContent: \"end\" }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ disabled: true }, \"Previous\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ href: \"#\" }, \"1\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ href: \"#\" }, \"2\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ href: \"#\" }, \"3\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.item({ href: \"#\" }, \"Next\"),\n                        ]);\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"CSS\")]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Variables\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"As part of Bootstrap’s evolving CSS variables approach, pagination now use local CSS variables on {{.pagination}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"css\",\n                    title: \"scss/_pagination.scss\",\n                    source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_pagination.scss\",\n                    code: `\r\n\t\t\t\t\t\t--#{$prefix}pagination-padding-x: #{$pagination-padding-x};\r\n\t\t\t\t\t\t--#{$prefix}pagination-padding-y: #{$pagination-padding-y};\r\n\t\t\t\t\t\t@include rfs($pagination-font-size, --#{$prefix}pagination-font-size);\r\n\t\t\t\t\t\t--#{$prefix}pagination-color: #{$pagination-color};\r\n\t\t\t\t\t\t--#{$prefix}pagination-bg: #{$pagination-bg};\r\n\t\t\t\t\t\t--#{$prefix}pagination-border-width: #{$pagination-border-width};\r\n\t\t\t\t\t\t--#{$prefix}pagination-border-color: #{$pagination-border-color};\r\n\t\t\t\t\t\t--#{$prefix}pagination-border-radius: #{$pagination-border-radius};\r\n\t\t\t\t\t\t--#{$prefix}pagination-hover-color: #{$pagination-hover-color};\r\n\t\t\t\t\t\t--#{$prefix}pagination-hover-bg: #{$pagination-hover-bg};\r\n\t\t\t\t\t\t--#{$prefix}pagination-hover-border-color: #{$pagination-hover-border-color};\r\n\t\t\t\t\t\t--#{$prefix}pagination-focus-color: #{$pagination-focus-color};\r\n\t\t\t\t\t\t--#{$prefix}pagination-focus-bg: #{$pagination-focus-bg};\r\n\t\t\t\t\t\t--#{$prefix}pagination-focus-box-shadow: #{$pagination-focus-box-shadow};\r\n\t\t\t\t\t\t--#{$prefix}pagination-active-color: #{$pagination-active-color};\r\n\t\t\t\t\t\t--#{$prefix}pagination-active-bg: #{$pagination-active-bg};\r\n\t\t\t\t\t\t--#{$prefix}pagination-active-border-color: #{$pagination-active-border-color};\r\n\t\t\t\t\t\t--#{$prefix}pagination-disabled-color: #{$pagination-disabled-color};\r\n\t\t\t\t\t\t--#{$prefix}pagination-disabled-bg: #{$pagination-disabled-bg};\r\n\t\t\t\t\t\t--#{$prefix}pagination-disabled-border-color: #{$pagination-disabled-border-color};\r\n\t\t\t\t\t`,\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass variables\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"css\",\n                    title: \"scss/_variables.scss\",\n                    source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n                    code: `\r\n\t\t\t\t\t\t$pagination-padding-y:              .375rem;\r\n\t\t\t\t\t\t$pagination-padding-x:              .75rem;\r\n\t\t\t\t\t\t$pagination-padding-y-sm:           .25rem;\r\n\t\t\t\t\t\t$pagination-padding-x-sm:           .5rem;\r\n\t\t\t\t\t\t$pagination-padding-y-lg:           .75rem;\r\n\t\t\t\t\t\t$pagination-padding-x-lg:           1.5rem;\r\n\r\n\t\t\t\t\t\t$pagination-font-size:              $font-size-base;\r\n\r\n\t\t\t\t\t\t$pagination-color:                  var(--#{$prefix}link-color);\r\n\t\t\t\t\t\t$pagination-bg:                     var(--#{$prefix}body-bg);\r\n\t\t\t\t\t\t$pagination-border-radius:          var(--#{$prefix}border-radius);\r\n\t\t\t\t\t\t$pagination-border-width:           var(--#{$prefix}border-width);\r\n\t\t\t\t\t\t$pagination-margin-start:           calc($pagination-border-width * -1); // stylelint-disable-line function-disallowed-list\r\n\t\t\t\t\t\t$pagination-border-color:           var(--#{$prefix}border-color);\r\n\r\n\t\t\t\t\t\t$pagination-focus-color:            var(--#{$prefix}link-hover-color);\r\n\t\t\t\t\t\t$pagination-focus-bg:               var(--#{$prefix}secondary-bg);\r\n\t\t\t\t\t\t$pagination-focus-box-shadow:       $focus-ring-box-shadow;\r\n\t\t\t\t\t\t$pagination-focus-outline:          0;\r\n\r\n\t\t\t\t\t\t$pagination-hover-color:            var(--#{$prefix}link-hover-color);\r\n\t\t\t\t\t\t$pagination-hover-bg:               var(--#{$prefix}tertiary-bg);\r\n\t\t\t\t\t\t$pagination-hover-border-color:     var(--#{$prefix}border-color); // Todo in v6: remove this?\r\n\r\n\t\t\t\t\t\t$pagination-active-color:           $component-active-color;\r\n\t\t\t\t\t\t$pagination-active-bg:              $component-active-bg;\r\n\t\t\t\t\t\t$pagination-active-border-color:    $component-active-bg;\r\n\r\n\t\t\t\t\t\t$pagination-disabled-color:         var(--#{$prefix}secondary-color);\r\n\t\t\t\t\t\t$pagination-disabled-bg:            var(--#{$prefix}secondary-bg);\r\n\t\t\t\t\t\t$pagination-disabled-border-color:  var(--#{$prefix}border-color);\r\n\r\n\t\t\t\t\t\t$pagination-transition:              color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;\r\n\r\n\t\t\t\t\t\t$pagination-border-radius-sm:       $border-radius-sm;\r\n\t\t\t\t\t\t$pagination-border-radius-lg:       $border-radius-lg;\r\n\r\n\t\t\t\t\t`,\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass mixins\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"css\",\n                    title: \"scss/mixins/_pagination.scss\",\n                    source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/mixins/_pagination.scss\",\n                    code: `\r\n\t\t\t\t\t\t@mixin pagination-size($padding-y, $padding-x, $font-size, $border-radius) {\r\n\t\t\t\t\t\t--#{$prefix}pagination-padding-x: #{$padding-x};\r\n\t\t\t\t\t\t--#{$prefix}pagination-padding-y: #{$padding-y};\r\n\t\t\t\t\t\t@include rfs($font-size, --#{$prefix}pagination-font-size);\r\n\t\t\t\t\t\t--#{$prefix}pagination-border-radius: #{$border-radius};\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t`,\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Event\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    showConsole: true,\n                    outputAttr: { overflow: \"hidden\" },\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.pagination.container({\n                            label: \"Event example\",\n                            total: 1284,\n                            limit: 10,\n                            maxBtnCount: 5,\n                            on: {\n                                \"change.bs.pagination\": (event) => {\n                                    _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.console(event.target, \"change.bs.pagination\", event.detail, \"success\");\n                                },\n                            },\n                        });\n                    },\n                }),\n            ]),\n        ];\n    },\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/components/pagination.js?");

/***/ })

}]);