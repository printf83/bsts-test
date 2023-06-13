"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_forms_control_js"],{

/***/ "./lib/docs/forms/control.js":
/*!***********************************!*\
  !*** ./lib/docs/forms/control.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   control: () => (/* binding */ control)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst control = {\n    title: \"Form controls\",\n    description: \"Give textual form controls like {{<input>}}s and {{<textarea>}}s an upgrade with custom styles, sizing, focus states, and more.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Example\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Form controls are styled with a mix of Sass and CSS variables, allowing them to adapt to color modes and support any customization method.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ marginBottom: 3 }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.label({ for: \"exampleFormControlInput1\", class: \"form-label\" }, \"Email address\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({ type: \"email\", id: \"exampleFormControlInput1\", placeholder: \"name@example.com\" }),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div([\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.label({ for: \"exampleFormControlTextarea1\", class: \"form-label\" }, \"Example textarea\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.textarea({ id: \"exampleFormControlTextarea1\" }),\n                    ]),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Using {{b.form.input}} and {{b.form.textarea}}\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                        container: { marginBottom: 3 },\n                        label: \"Email address\",\n                        placeholder: \"name@example.com\",\n                        type: \"email\",\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.textarea({\n                        label: \"Example textarea\",\n                    }),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Sizing\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Set heights using classes like {{.form-control-lg}} and {{.form-control-sm}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                        container: { marginBottom: 3 },\n                        placeholder: \".form-control-lg\",\n                        weight: \"lg\",\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                        container: { marginBottom: 3 },\n                        placeholder: \"Default input\",\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                        placeholder: \".form-control-sm\",\n                        weight: \"sm\",\n                    }),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Form text\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Block-level or inline-level form text can be created using {{.form-text}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"warning\", callout: true }, \"Form text should be explicitly associated with the form control it relates to using the {{aria-labelledby}} (for mandatory information such as data format) or {{aria-describedby}} (for complementary information) attribute. This will ensure that assistive technologies—such as screen readers—will announce this form text when the user focuses or enters the control.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Form text below inputs can be styled with .form-text. If a block-level element will be used, a top margin is added for easy spacing from the inputs above.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div([\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.label({ for: \"inputPassword5\", class: \"form-label\" }, \"Password\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({ type: \"password\", id: \"inputPassword5\", describedby: \"passwordHelpBlock\" }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ id: \"passwordHelpBlock\", class: \"form-text\" }, \"Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.\"),\n                ]);\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Using {{b.form.input}}\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                    label: \"Password\",\n                    type: \"password\",\n                    description: \"Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.\",\n                });\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Inline text can use any typical inline HTML element (be it a {{<span>}}, {{<small>}}, or something else) with nothing more than the {{.form-text}} class.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, gutter: 3, alignItem: \"center\" }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"auto\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.label({ for: \"inputPassword6\", class: \"col-form-label\" }, \"Password\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"auto\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({ type: \"password\", id: \"inputPassword6\", describedby: \"passwordHelpBlock\" })),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"auto\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({ id: \"passwordHelpInline\", class: \"form-text\" }, \" Must be 8-20 characters long. \")),\n                ]);\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Using {{b.form.input}}\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                    container: { gutter: 3, alignItem: \"center\" },\n                    label: \"Password\",\n                    type: \"password\",\n                    description: \" Must be 8-20 characters long. \",\n                    col1: \"auto\",\n                    col2: \"auto\",\n                    col3: \"auto\",\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Disabled\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Add the {{disabled}} boolean attribute on an input to give it a grayed out appearance, remove pointer events, and prevent focusing.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({\n                        marginBottom: 3,\n                        placeholder: \"Disabled input\",\n                        label: \"Disabled input example\",\n                        disabled: true,\n                    }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({\n                        value: \"Disabled readonly input\",\n                        label: \"Disabled readonly input example\",\n                        disabled: true,\n                        readonly: true,\n                    }),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Readonly\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Add the {{readonly}} boolean attribute on an input to prevent modification of the input’s value. {{readonly}} inputs can still be focused and selected, while {{disabled}} inputs cannot.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({\n                        value: \"Readonly input here...\",\n                        label: \"Readonly input example\",\n                        readonly: true,\n                    }),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Readonly plain text\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"If you want to have {{<input readonly>}} elements in your form styled as plain text, replace {{.form-control}} with {{.form-control-plaintext}} to remove the default form field styling and preserve the correct {{margin}} and {{padding}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                        container: { marginBottom: 3 },\n                        value: \"email@example.com\",\n                        label: \"Email\",\n                        plaintext: true,\n                        col1: \"sm-2\",\n                        col2: \"sm-10\",\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                        label: \"Password\",\n                        type: \"password\",\n                        col1: \"sm-2\",\n                        col2: \"sm-10\",\n                    }),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true }, [\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                        container: { col: \"auto\" },\n                        value: \"email@example.com\",\n                        label: \"Email\",\n                        hideLabel: true,\n                        plaintext: true,\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                        container: { col: \"auto\" },\n                        label: \"Password\",\n                        hideLabel: true,\n                        type: \"password\",\n                        placeholder: \"Password\",\n                    }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"auto\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ type: \"submit\" }, \"Confirm identity\")),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"File input\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                        container: { marginBottom: 3 },\n                        label: \"Default file input example\",\n                        type: \"file\",\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                        container: { marginBottom: 3 },\n                        label: \"Multiple file input example\",\n                        type: \"file\",\n                        multiple: true,\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                        container: { marginBottom: 3 },\n                        label: \"Disabled file input example\",\n                        type: \"file\",\n                        disabled: true,\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                        container: { marginBottom: 3 },\n                        label: \"Small file input example\",\n                        type: \"file\",\n                        weight: \"sm\",\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                        label: \"Large file input example\",\n                        type: \"file\",\n                        weight: \"lg\",\n                    }),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Color\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Set the {{type='color'}} and add {{.form-control-color}} to the {{<input>}}. Bootstrap use the modifier class to set fixed {{heights}} and override some inconsistencies between browsers.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text([new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({ class: \"teal-700\" }, \"This teal-700\")]),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                    label: \"Color picker\",\n                    type: \"color\",\n                    value: \"#563d7c\",\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Datalists\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Datalists allow you to create a group of {{<option>}}s that can be accessed (and autocompleted) from within an {{<input>}}. These are similar to {{<select>}} elements, but come with more menu styling limitations and differences. While most browsers and operating systems include some support for {{<datalist>}} elements, their styling is inconsistent at best.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Learn more about {{https://caniuse.com/datalist::support for datalist elements}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                    label: \"Datalist example\",\n                    type: \"text\",\n                    placeholder: \"Type to search...\",\n                    datalist: [\"San Francisco\", \"New York\", \"Seattle\", \"Los Angeles\", \"Chicago\"],\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"CSS\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass variables\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"{{$input-*}} are shared across most of Bootstrap form controls (and not buttons).\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n            code: `\n\t\t\t\t$input-padding-y:                       $input-btn-padding-y;\n\t\t\t\t$input-padding-x:                       $input-btn-padding-x;\n\t\t\t\t$input-font-family:                     $input-btn-font-family;\n\t\t\t\t$input-font-size:                       $input-btn-font-size;\n\t\t\t\t$input-font-weight:                     $font-weight-base;\n\t\t\t\t$input-line-height:                     $input-btn-line-height;\n\n\t\t\t\t$input-padding-y-sm:                    $input-btn-padding-y-sm;\n\t\t\t\t$input-padding-x-sm:                    $input-btn-padding-x-sm;\n\t\t\t\t$input-font-size-sm:                    $input-btn-font-size-sm;\n\n\t\t\t\t$input-padding-y-lg:                    $input-btn-padding-y-lg;\n\t\t\t\t$input-padding-x-lg:                    $input-btn-padding-x-lg;\n\t\t\t\t$input-font-size-lg:                    $input-btn-font-size-lg;\n\n\t\t\t\t$input-bg:                              var(--#{$prefix}body-bg);\n\t\t\t\t$input-disabled-color:                  null;\n\t\t\t\t$input-disabled-bg:                     var(--#{$prefix}secondary-bg);\n\t\t\t\t$input-disabled-border-color:           null;\n\n\t\t\t\t$input-color:                           var(--#{$prefix}body-color);\n\t\t\t\t$input-border-color:                    var(--#{$prefix}border-color);\n\t\t\t\t$input-border-width:                    $input-btn-border-width;\n\t\t\t\t$input-box-shadow:                      $box-shadow-inset;\n\n\t\t\t\t$input-border-radius:                   var(--#{$prefix}border-radius);\n\t\t\t\t$input-border-radius-sm:                var(--#{$prefix}border-radius-sm);\n\t\t\t\t$input-border-radius-lg:                var(--#{$prefix}border-radius-lg);\n\n\t\t\t\t$input-focus-bg:                        $input-bg;\n\t\t\t\t$input-focus-border-color:              tint-color($component-active-bg, 50%);\n\t\t\t\t$input-focus-color:                     $input-color;\n\t\t\t\t$input-focus-width:                     $input-btn-focus-width;\n\t\t\t\t$input-focus-box-shadow:                $input-btn-focus-box-shadow;\n\n\t\t\t\t$input-placeholder-color:               var(--#{$prefix}secondary-color);\n\t\t\t\t$input-plaintext-color:                 var(--#{$prefix}body-color);\n\n\t\t\t\t$input-height-border:                   calc(#{$input-border-width} * 2); // stylelint-disable-line function-disallowed-list\n\n\t\t\t\t$input-height-inner:                    add($input-line-height * 1em, $input-padding-y * 2);\n\t\t\t\t$input-height-inner-half:               add($input-line-height * .5em, $input-padding-y);\n\t\t\t\t$input-height-inner-quarter:            add($input-line-height * .25em, $input-padding-y * .5);\n\n\t\t\t\t$input-height:                          add($input-line-height * 1em, add($input-padding-y * 2, $input-height-border, false));\n\t\t\t\t$input-height-sm:                       add($input-line-height * 1em, add($input-padding-y-sm * 2, $input-height-border, false));\n\t\t\t\t$input-height-lg:                       add($input-line-height * 1em, add($input-padding-y-lg * 2, $input-height-border, false));\n\n\t\t\t\t$input-transition:                      border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n\n\t\t\t\t$form-color-width:                      3rem;\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"{{$form-label-*}} and {{$form-text-*}} are for Bootstrap {{<label>}}s and {{.form-text}} component.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n            code: `\n\t\t\t\t$form-label-margin-bottom:              .5rem;\n\t\t\t\t$form-label-font-size:                  null;\n\t\t\t\t$form-label-font-style:                 null;\n\t\t\t\t$form-label-font-weight:                null;\n\t\t\t\t$form-label-color:                      null;\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n            code: `\n\t\t\t\t$form-text-margin-top:                  .25rem;\n\t\t\t\t$form-text-font-size:                   $small-font-size;\n\t\t\t\t$form-text-font-style:                  null;\n\t\t\t\t$form-text-font-weight:                 null;\n\t\t\t\t$form-text-color:                       var(--#{$prefix}secondary-color);\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"{{$form-file-*}} are for file input.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n            code: `\n\t\t\t\t$form-file-button-color:          $input-color;\n\t\t\t\t$form-file-button-bg:             var(--#{$prefix}tertiary-bg);\n\t\t\t\t$form-file-button-hover-bg:       var(--#{$prefix}secondary-bg);\n\t\t\t`,\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/forms/control.js?");

/***/ })

}]);