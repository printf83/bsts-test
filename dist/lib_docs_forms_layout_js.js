"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_forms_layout_js"],{

/***/ "./lib/docs/forms/layout.js":
/*!**********************************!*\
  !*** ./lib/docs/forms/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   layout: () => (/* binding */ layout)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst layout = {\n    title: \"Layout\",\n    description: \"Give your forms some structure—from inline to horizontal to custom grid implementations—with Bootstrap form layout options.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Forms\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Every group of form fields should reside in a {{<form>}} element. Bootstrap provides no default styling for the {{<form>}} element, but there are some powerful browser features that are provided by default.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\n                \"New to browser forms? Consider reviewing {{https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form::the MDN form docs}} for an overview and complete list of available attributes.\",\n                \"{{<button>}}s within a {{<form>}} default to {{type='submit'}}, so strive to be specific and always include a type.\",\n            ],\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Since Bootstrap applies {{display: block}} and {{width: 100%}} to almost all Bootstrap form controls, forms will by default stack vertically. Additional classes can be used to vary this layout on a per-form basis.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Utilities\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"{{nav:docs/utilities/spacing::Margin utilities}} are the easiest way to add some structure to forms. They provide basic grouping of labels, controls, optional form text, and form validation messaging. Bootstrap recommend sticking to {{margin-bottom}} utilities, and using a single direction throughout the form for consistency.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Feel free to build your forms however you like, with {{<fieldset>}}s, {{<div>}}s, or nearly any other element.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ marginBottom: 3 }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.label({ for: \"formGroupExampleInput\", class: \"form-label\" }, \"Example label\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({ id: \"formGroupExampleInput\", placeholder: \"Example input placeholder\" }),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div([\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.label({ for: \"formGroupExampleInput2\", class: \"form-label\" }, \"Another label\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({ id: \"formGroupExampleInput2\", placeholder: \"Another input placeholder\" }),\n                    ]),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Using {{B.Form.Input}}\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Input({\n                        container: { marginBottom: 3 },\n                        label: \"Example label\",\n                        placeholder: \"Example input placeholder\",\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Input({ label: \"Another label\", placeholder: \"Another input placeholder\" }),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Form grid\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"More complex forms can be built using Bootstrap grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options. {{b::Requires the }}{{bc::$enable-grid-classes}}{{b:: Sass variable to be enabled}} (on by default).\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true }, [\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Input({\n                        container: { col: true },\n                        label: \"First name\",\n                        hideLabel: true,\n                        placeholder: \"First name\",\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Input({\n                        container: { col: true },\n                        label: \"Last name\",\n                        hideLabel: true,\n                        placeholder: \"Last name\",\n                    }),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Gutters\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"By adding {{nav:docs/layout/gutters::gutter modifier classes}}, you can have control over the gutter width in as well the inline as block direction. {{b::Also requires the }}{{bc::$enable-grid-classes}}{{b:: Sass variable to be enabled}} (on by default).\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, gutter: 3 }, [\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Input({\n                        container: { col: true },\n                        label: \"First name\",\n                        hideLabel: true,\n                        placeholder: \"First name\",\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Input({\n                        container: { col: true },\n                        label: \"Last name\",\n                        hideLabel: true,\n                        placeholder: \"Last name\",\n                    }),\n                ]);\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"More complex layouts can also be created with the grid system.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.form({ row: true, gutter: 3 }, [\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Input({\n                        container: { col: \"md-6\" },\n                        label: \"Email\",\n                        type: \"email\",\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Input({\n                        container: { col: \"md-6\" },\n                        label: \"Password\",\n                        type: \"password\",\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Input({\n                        container: { col: 12 },\n                        label: \"Address\",\n                        placeholder: \"1234 Main st\",\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Input({\n                        container: { col: 12 },\n                        label: \"Address 2\",\n                        placeholder: \"Apartment, studio, or floor\",\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Input({\n                        container: { col: 5 },\n                        label: \"City\",\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Select({\n                        container: { col: 4 },\n                        label: \"State\",\n                        item: [{ selected: true, elem: \"Choose...\" }, { elem: \"...\" }],\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Input({\n                        container: { col: 3 },\n                        label: \"Zip\",\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({ container: { col: 12 }, label: \"Check me out\" }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 12 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ type: \"submit\" }, \"Sign in\")),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Horizontal form\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Create horizontal forms with the grid by adding the {{.row}} class to form groups and using the {{.col-*-*}} classes to specify the width of your labels and controls. Be sure to add {{.col-form-label}} to your {{<label>}}s as well so they’re vertically centered with their associated form controls.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"At times, you maybe need to use margin or padding utilities to create that perfect alignment you need. For example, Bootstrap removed the {{padding-top}} on Bootstrap stacked radio inputs label to better align the text baseline.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.form([\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Input({\n                        container: { marginBottom: 3 },\n                        label: \"Email\",\n                        type: \"email\",\n                        col1: 3,\n                        col2: 9,\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Input({\n                        container: { marginBottom: 3 },\n                        label: \"Password\",\n                        type: \"password\",\n                        col1: 3,\n                        col2: 9,\n                    }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.fieldset({ row: true, marginBottom: 3 }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.legend({ class: \"col-form-label\", col: \"sm-3\", paddingTop: 0 }, \"Radios\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"sm-9\" }, [\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({\n                                type: \"radio\",\n                                name: \"gridRadios\",\n                                label: \"First radio\",\n                            }),\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({\n                                type: \"radio\",\n                                name: \"gridRadios\",\n                                label: \"Second radio\",\n                            }),\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({\n                                type: \"radio\",\n                                name: \"gridRadios\",\n                                label: \"Third radio\",\n                            }),\n                        ]),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true }, _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({ container: { col: \"sm-9\", offset: \"sm-3\" }, label: \"Example checkbox\" })),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 12 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ type: \"submit\" }, \"Sign in\")),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Horizontal form label sizing\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Be sure to use {{.col-form-label-sm}} or {{.col-form-label-lg}} to your {{<label>}}s or {{<legend>}}s to correctly follow the size of {{.form-control-lg}} and {{.form-control-sm}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Input({\n                        container: { row: true, marginBottom: 3 },\n                        label: \"Email\",\n                        weight: \"sm\",\n                        placeholder: \"col-form-label-sm\",\n                        col1: 3,\n                        col2: 9,\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Input({\n                        container: { row: true, marginBottom: 3 },\n                        label: \"Email\",\n                        placeholder: \"col-form-label\",\n                        col1: 3,\n                        col2: 9,\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Input({\n                        label: \"Email\",\n                        weight: \"lg\",\n                        placeholder: \"col-form-label-lg\",\n                        col1: 3,\n                        col2: 9,\n                    }),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Column sizing\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"As shown in the previous examples, Bootstrap grid system allows you to place any number of {{.col}}s within a {{.row}}. They’ll split the available width equally between them. You may also pick a subset of your columns to take up more or less space, while the remaining {{.col}}s equally split the rest, with specific column classes like {{.col-sm-6}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            showViewport: true,\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, gutter: 3 }, [\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Input({\n                        container: { col: \"sm-6\" },\n                        label: \"City\",\n                        hideLabel: true,\n                        placeholder: \"City\",\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Input({\n                        container: { col: \"sm\" },\n                        label: \"State\",\n                        hideLabel: true,\n                        placeholder: \"State\",\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Input({\n                        container: { col: \"sm\" },\n                        label: \"Zip\",\n                        hideLabel: true,\n                        placeholder: \"Zip\",\n                    }),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Auto-sizing\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"The example below uses a flexbox utility to vertically center the contents and changes {{.col}} to {{.col-auto}} so that your columns only take up as much space as needed. Put another way, the column sizes itself based on the contents.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, gutterY: 2, gutterX: 3, alignItem: \"center\" }, [\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Input({\n                        container: { col: \"auto\" },\n                        label: \"Name\",\n                        hideLabel: true,\n                        placeholder: \"Jane Doe\",\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Input({\n                        container: { col: \"auto\" },\n                        label: \"Username\",\n                        hideLabel: true,\n                        placeholder: \"Username\",\n                        before: \"@\",\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Select({\n                        container: { col: \"auto\" },\n                        label: \"Preference\",\n                        hideLabel: true,\n                        item: [\n                            { selected: true, elem: \"Choose...\" },\n                            { value: \"1\", elem: \"One\" },\n                            { value: \"2\", elem: \"Two\" },\n                            { value: \"3\", elem: \"Three\" },\n                        ],\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({ container: { col: \"auto\" }, label: \"Remember me\" }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"auto\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ type: \"submit\" }, \"Submit\")),\n                ]);\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"You can then remix that once again with size-specific column classes.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, gutterY: 2, gutterX: 3, alignItem: \"center\" }, [\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Input({\n                        container: { col: \"sm-3\" },\n                        label: \"Name\",\n                        hideLabel: true,\n                        placeholder: \"Jane Doe\",\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Input({\n                        container: { col: \"sm-3\" },\n                        label: \"Username\",\n                        hideLabel: true,\n                        placeholder: \"Username\",\n                        before: \"@\",\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Select({\n                        container: { col: \"sm-3\" },\n                        label: \"Preference\",\n                        hideLabel: true,\n                        item: [\n                            { selected: true, elem: \"Choose...\" },\n                            { value: \"1\", elem: \"One\" },\n                            { value: \"2\", elem: \"Two\" },\n                            { value: \"3\", elem: \"Three\" },\n                        ],\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({ container: { col: \"auto\" }, label: \"Remember me\" }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"auto\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ type: \"submit\" }, \"Submit\")),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Inline forms\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use the {{.row-cols-*}} classes to create responsive horizontal layouts. By adding {{nav:docs/layout/gutters::gutter modifier classes}}, Bootstrap’ll have gutters in horizontal and vertical directions. On narrow mobile viewports, the {{.col-12}} helps stack the form controls and more. The {{.align-items-center}} aligns the form elements to the middle, making the {{.form-check}} align properly.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, rowCol: \"lg-auto\", gutter: 3, alignItem: \"center\" }, [\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Input({\n                        container: { col: 12 },\n                        label: \"Username\",\n                        hideLabel: true,\n                        placeholder: \"Username\",\n                        before: \"@\",\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Select({\n                        container: { col: 12 },\n                        label: \"Preference\",\n                        hideLabel: true,\n                        item: [\n                            { selected: true, elem: \"Choose...\" },\n                            { value: \"1\", elem: \"One\" },\n                            { value: \"2\", elem: \"Two\" },\n                            { value: \"3\", elem: \"Three\" },\n                        ],\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({ container: { col: 12 }, label: \"Remember me\" }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 12 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ type: \"submit\" }, \"Submit\")),\n                ]);\n            },\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/forms/layout.js?");

/***/ })

}]);