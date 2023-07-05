"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_forms_range_js"],{

/***/ "./lib/docs/forms/range.js":
/*!*********************************!*\
  !*** ./lib/docs/forms/range.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   range: () => (/* binding */ range)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst range = {\n    title: \"Range\",\n    description: \"Use Bootstrap custom range inputs for consistent cross-browser styling and built-in customization.\",\n    item: () => {\n        return [\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Overview\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Create custom {{<input type='range'>}} controls with {{.form-range}}. The track (the background) and thumb (the value) are both styled to appear the same across browsers. As only Firefox supports “filling” their track from the left or right of the thumb as a means to visually indicate progress, Bootstrap do not currently support it.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.label({ for: \"customRange1\", class: \"form-label\" }, \"Example range\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({ type: \"range\", id: \"customRange1\" }),\n                        ];\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Using {{item}} to setup option\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                            label: \"Example range\",\n                            type: \"range\",\n                        });\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Disabled\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Add the {{disabled}} boolean attribute on an input to give it a grayed out appearance, remove pointer events, and prevent focusing.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                            label: \"Disabled range\",\n                            type: \"range\",\n                            disabled: true,\n                        });\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Min and max\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Range inputs have implicit values for {{min}} and {{max}}—{{0}} and {{100}}, respectively. You may specify new values for those using the {{min}} and {{max}} attributes.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                            label: \"Example range\",\n                            type: \"range\",\n                            min: 0,\n                            max: 5,\n                            value: 4,\n                        });\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Steps\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"By default, range inputs “snap” to integer values. To change this, you can specify a {{step}} value. In the example below, Bootstrap double the number of steps by using {{step='0.5'}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                            label: \"Example range\",\n                            type: \"range\",\n                            min: 0,\n                            max: 5,\n                            step: 0.5,\n                            value: 4,\n                        });\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"CSS\")]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass variables\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"css\",\n                    title: \"scss/_variables.scss\",\n                    source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n                    code: `\r\n\t\t\t\t\t\t$form-range-track-width:          100%;\r\n\t\t\t\t\t\t$form-range-track-height:         .5rem;\r\n\t\t\t\t\t\t$form-range-track-cursor:         pointer;\r\n\t\t\t\t\t\t$form-range-track-bg:             var(--#{$prefix}tertiary-bg);\r\n\t\t\t\t\t\t$form-range-track-border-radius:  1rem;\r\n\t\t\t\t\t\t$form-range-track-box-shadow:     $box-shadow-inset;\r\n\r\n\t\t\t\t\t\t$form-range-thumb-width:                   1rem;\r\n\t\t\t\t\t\t$form-range-thumb-height:                  $form-range-thumb-width;\r\n\t\t\t\t\t\t$form-range-thumb-bg:                      $component-active-bg;\r\n\t\t\t\t\t\t$form-range-thumb-border:                  0;\r\n\t\t\t\t\t\t$form-range-thumb-border-radius:           1rem;\r\n\t\t\t\t\t\t$form-range-thumb-box-shadow:              0 .1rem .25rem rgba($black, .1);\r\n\t\t\t\t\t\t$form-range-thumb-focus-box-shadow:        0 0 0 1px $body-bg, $input-focus-box-shadow;\r\n\t\t\t\t\t\t$form-range-thumb-focus-box-shadow-width:  $input-focus-width; // For focus box shadow issue in Edge\r\n\t\t\t\t\t\t$form-range-thumb-active-bg:               tint-color($component-active-bg, 70%);\r\n\t\t\t\t\t\t$form-range-thumb-disabled-bg:             var(--#{$prefix}secondary-color);\r\n\t\t\t\t\t\t$form-range-thumb-transition:              background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;\r\n\t\t\t\t\t`,\n                }),\n            ]),\n        ];\n    },\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/forms/range.js?");

/***/ })

}]);