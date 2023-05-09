"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_forms_floating_label_js"],{

/***/ "./lib/docs/forms/floating_label.js":
/*!******************************************!*\
  !*** ./lib/docs/forms/floating_label.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"floating_label\": () => (/* binding */ floating_label)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"./node_modules/@printf83/bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst floating_label = {\n    title: \"Floating labels\",\n    description: \"Create beautifully simple form labels that float over your input fields.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Example\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Wrap a pair of {{<input class='form-control'>}} and {{<label>}} elements in {{.form-floating}} to enable floating labels with Bootstrap’s textual form fields. A {{placeholder}} is required on each {{<input>}} as Bootstrap method of CSS-only floating labels uses the {{:placeholder-shown}} pseudo-element. Also note that the {{<input>}} must come first so Bootstrap can utilize a sibling selector (e.g., {{~}}).\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.formfloating({ marginBottom: 3 }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({ type: \"email\", id: \"floatingInput\", placeholder: \"name@example.com\" }),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.label({ for: \"floatingInput\" }, \"Email address\"),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.formfloating([\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({ type: \"password\", id: \"floatingPassword\", placeholder: \"Password\" }),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.label({ for: \"floatingPassword\" }, \"Password\"),\n                    ]),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Using {{B.Form.FloatingLabel.Input}} :\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.FloatingLabel.Input({\n                        container: { marginBottom: 3 },\n                        type: \"email\",\n                        label: \"Email address\",\n                        placeholder: \"name@example.com\",\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.FloatingLabel.Input({\n                        type: \"password\",\n                        label: \"Password\",\n                    }),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"When there’s a {{value}} already defined, {{<label>}}s will automatically adjust to their floated position.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.FloatingLabel.Input({\n                    type: \"email\",\n                    label: \"Input with value\",\n                    value: \"test@example.com\",\n                });\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Form validation styles also work as expected.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.FloatingLabel.Input({\n                    type: \"email\",\n                    label: \"Invalid input\",\n                    value: \"test@example.com\",\n                    isvalid: false,\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Textareas\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"By default, {{<textarea>}}s with {{.form-control}} will be the same height as {{<input>}}s.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.FloatingLabel.Textarea({\n                    label: \"Comments\",\n                });\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"To set a custom height on your {{<textarea>}}, do not use the {{rows}} attribute. Instead, set an explicit {{height}} (either inline or via custom CSS).\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.FloatingLabel.Textarea({\n                    label: \"Comments\",\n                    style: { height: \"100px\" },\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Selects\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Other than {{.form-control}}, floating labels are only available on {{.form-selects}}. They work in the same way, but unlike {{<input>}}s, they’ll always show the {{<label>}} in its floated state. {{b::Selects with }}{{bc::size}}{{b:: and }}{{bc::multiple}}{{b:: are not supported}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.FloatingLabel.Select({\n                    label: \"Work with selects\",\n                    item: [\n                        { selected: true, elem: \"Open this select menu\" },\n                        { value: \"1\", elem: \"One\" },\n                        { value: \"2\", elem: \"Two\" },\n                        { value: \"3\", elem: \"Three\" },\n                    ],\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Disabled\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Add the {{disabled}} boolean attribute on an input, a textarea or a select to give it a grayed out appearance, remove pointer events, and prevent focusing.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.FloatingLabel.Input({\n                        container: { marginBottom: 3 },\n                        label: \"Email address\",\n                        type: \"email\",\n                        disabled: true,\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.FloatingLabel.Textarea({\n                        container: { marginBottom: 3 },\n                        label: \"Comments\",\n                        disabled: true,\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.FloatingLabel.Textarea({\n                        container: { marginBottom: 3 },\n                        label: \"Comments\",\n                        disabled: true,\n                        style: { height: \"100px\" },\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.FloatingLabel.Select({\n                        label: \"Work with selects\",\n                        disabled: true,\n                        item: [\n                            { selected: true, elem: \"Open this select menu\" },\n                            { value: \"1\", elem: \"One\" },\n                            { value: \"2\", elem: \"Two\" },\n                            { value: \"3\", elem: \"Three\" },\n                        ],\n                    }),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Readonly plaintext\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Floating labels also support {{.form-control-plaintext}}, which can be helpful for toggling from an editable {{<input>}} to a plaintext value without affecting the page layout.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.FloatingLabel.Input({\n                        container: { marginBottom: 3 },\n                        label: \"Empty input\",\n                        type: \"email\",\n                        readonly: true,\n                        plaintext: true,\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.FloatingLabel.Input({\n                        label: \"Input with value\",\n                        type: \"email\",\n                        value: \"name@example.com\",\n                        readonly: true,\n                        plaintext: true,\n                    }),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Input groups\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Floating labels also support {{.input-group}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.FloatingLabel.Input({\n                    label: \"Username\",\n                    type: \"text\",\n                    before: \"@\",\n                });\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"When using {{.input-group}} and {{.form-floating}} along with form validation, the {{-feedback}} should be placed outside of the {{.form-floating}}, but inside of the {{.input-group}}. This means that the feedback will need to be shown using javascript.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.FloatingLabel.Input({\n                    invalidFeedback: \"Please choose a username.\",\n                    label: \"Username\",\n                    type: \"text\",\n                    before: \"@\",\n                    isvalid: false,\n                    required: true,\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Layout\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"When working with the Bootstrap grid system, be sure to place form elements within column classes.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, gutter: 3 }, [\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.FloatingLabel.Input({\n                        container: { col: \"md\" },\n                        label: \"Email address\",\n                        type: \"email\",\n                        value: \"mdo@example.com\",\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.FloatingLabel.Select({\n                        container: { col: \"md\" },\n                        label: \"Work with selects\",\n                        item: [\n                            { selected: true, elem: \"Open this select menu\" },\n                            { value: \"1\", elem: \"One\" },\n                            { value: \"2\", elem: \"Two\" },\n                            { value: \"3\", elem: \"Three\" },\n                        ],\n                    }),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"CSS\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass variables\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss\",\n            code: `\r\n\t\t\t\t$form-floating-height:                  add(3.5rem, $input-height-border);\r\n\t\t\t\t$form-floating-line-height:             1.25;\r\n\t\t\t\t$form-floating-padding-x:               $input-padding-x;\r\n\t\t\t\t$form-floating-padding-y:               1rem;\r\n\t\t\t\t$form-floating-input-padding-t:         1.625rem;\r\n\t\t\t\t$form-floating-input-padding-b:         .625rem;\r\n\t\t\t\t$form-floating-label-height:            1.5em;\r\n\t\t\t\t$form-floating-label-opacity:           .65;\r\n\t\t\t\t$form-floating-label-transform:         scale(.85) translateY(-.5rem) translateX(.15rem);\r\n\t\t\t\t$form-floating-label-disabled-color:    $gray-600;\r\n\t\t\t\t$form-floating-transition:              opacity .1s ease-in-out, transform .1s ease-in-out;\r\n\t\t\t`,\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/forms/floating_label.js?");

/***/ })

}]);