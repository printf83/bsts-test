"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_forms_select_js"],{

/***/ "./lib/docs/forms/select.js":
/*!**********************************!*\
  !*** ./lib/docs/forms/select.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   select: () => (/* binding */ select)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst select = {\n    title: \"Select\",\n    description: \"Customize the native {{<select>}}s with custom CSS that changes the element’s initial appearance.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Default\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Custom {{<select>}} menus need only a custom class, {{.form-select}} to trigger the custom styles. Custom styles are limited to the {{<select>}}’s initial appearance and cannot modify the {{<option>}}s due to browser limitations.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.select({ label: \"Default select example\" }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.option({ selected: true }, \"Open this select menu\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.option({ value: \"1\" }, \"One\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.option({ value: \"2\" }, \"Two\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.option({ value: \"3\" }, \"Three\"),\n                ]);\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Using {{item}} to setup option\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.select({\n                    label: \"Default select example using item\",\n                    item: [\n                        { selected: true, elem: \"Open this select menu\" },\n                        { value: \"1\", elem: \"One\" },\n                        { value: \"2\", elem: \"Two\" },\n                        { value: \"3\", elem: \"Three\" },\n                    ],\n                });\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Using {{b.form.select}}\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.select({\n                    label: \"Default select example using b.form.select\",\n                    hideLabel: true,\n                    item: [\n                        { selected: true, elem: \"Open this select menu\" },\n                        { value: \"1\", elem: \"One\" },\n                        { value: \"2\", elem: \"Two\" },\n                        { value: \"3\", elem: \"Three\" },\n                    ],\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Sizing\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Set heights using classes like {{.form-control-lg}} and {{.form-control-sm}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { gap: 2 },\n            output: () => {\n                return [\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.select({\n                        weight: \"lg\",\n                        label: \".form-select-lg example\",\n                        hideLabel: true,\n                        item: [\n                            { selected: true, elem: \"Open this select menu\" },\n                            { value: \"1\", elem: \"One\" },\n                            { value: \"2\", elem: \"Two\" },\n                            { value: \"3\", elem: \"Three\" },\n                        ],\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.select({\n                        weight: \"sm\",\n                        label: \".form-select-sm example\",\n                        hideLabel: true,\n                        item: [\n                            { selected: true, elem: \"Open this select menu\" },\n                            { value: \"1\", elem: \"One\" },\n                            { value: \"2\", elem: \"Two\" },\n                            { value: \"3\", elem: \"Three\" },\n                        ],\n                    }),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"The {{multiple}} attribute is also supported:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.select({\n                    multiple: true,\n                    label: \"Multiple select example\",\n                    hideLabel: true,\n                    item: [\n                        { selected: true, elem: \"Open this select menu\" },\n                        { value: \"1\", elem: \"One\" },\n                        { value: \"2\", elem: \"Two\" },\n                        { value: \"3\", elem: \"Three\" },\n                    ],\n                });\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"As is the {{size}} attribute:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.select({\n                    size: 3,\n                    label: \"Size 3 select example\",\n                    hideLabel: true,\n                    item: [\n                        { selected: true, elem: \"Open this select menu\" },\n                        { value: \"1\", elem: \"One\" },\n                        { value: \"2\", elem: \"Two\" },\n                        { value: \"3\", elem: \"Three\" },\n                    ],\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Disabled\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Add the {{disabled}} boolean attribute on a select to give it a grayed out appearance and remove pointer events.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.select({\n                    disabled: true,\n                    label: \"Disabled select example\",\n                    hideLabel: true,\n                    item: [\n                        { selected: true, elem: \"Open this select menu\" },\n                        { value: \"1\", elem: \"One\" },\n                        { value: \"2\", elem: \"Two\" },\n                        { value: \"3\", elem: \"Three\" },\n                    ],\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"CSS\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass variables\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n            code: `\n\t\t\t\t$form-select-padding-y:             $input-padding-y;\n\t\t\t\t$form-select-padding-x:             $input-padding-x;\n\t\t\t\t$form-select-font-family:           $input-font-family;\n\t\t\t\t$form-select-font-size:             $input-font-size;\n\t\t\t\t$form-select-indicator-padding:     $form-select-padding-x * 3; // Extra padding for background-image\n\t\t\t\t$form-select-font-weight:           $input-font-weight;\n\t\t\t\t$form-select-line-height:           $input-line-height;\n\t\t\t\t$form-select-color:                 $input-color;\n\t\t\t\t$form-select-bg:                    $input-bg;\n\t\t\t\t$form-select-disabled-color:        null;\n\t\t\t\t$form-select-disabled-bg:           $input-disabled-bg;\n\t\t\t\t$form-select-disabled-border-color: $input-disabled-border-color;\n\t\t\t\t$form-select-bg-position:           right $form-select-padding-x center;\n\t\t\t\t$form-select-bg-size:               16px 12px; // In pixels because image dimensions\n\t\t\t\t$form-select-indicator-color:       $gray-800;\n\t\t\t\t$form-select-indicator:             url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='#{$form-select-indicator-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/></svg>\");\n\n\t\t\t\t$form-select-feedback-icon-padding-end: $form-select-padding-x * 2.5 + $form-select-indicator-padding;\n\t\t\t\t$form-select-feedback-icon-position:    center right $form-select-indicator-padding;\n\t\t\t\t$form-select-feedback-icon-size:        $input-height-inner-half $input-height-inner-half;\n\n\t\t\t\t$form-select-border-width:        $input-border-width;\n\t\t\t\t$form-select-border-color:        $input-border-color;\n\t\t\t\t$form-select-border-radius:       $input-border-radius;\n\t\t\t\t$form-select-box-shadow:          $box-shadow-inset;\n\n\t\t\t\t$form-select-focus-border-color:  $input-focus-border-color;\n\t\t\t\t$form-select-focus-width:         $input-focus-width;\n\t\t\t\t$form-select-focus-box-shadow:    0 0 0 $form-select-focus-width $input-btn-focus-color;\n\n\t\t\t\t$form-select-padding-y-sm:        $input-padding-y-sm;\n\t\t\t\t$form-select-padding-x-sm:        $input-padding-x-sm;\n\t\t\t\t$form-select-font-size-sm:        $input-font-size-sm;\n\t\t\t\t$form-select-border-radius-sm:    $input-border-radius-sm;\n\n\t\t\t\t$form-select-padding-y-lg:        $input-padding-y-lg;\n\t\t\t\t$form-select-padding-x-lg:        $input-padding-x-lg;\n\t\t\t\t$form-select-font-size-lg:        $input-font-size-lg;\n\t\t\t\t$form-select-border-radius-lg:    $input-border-radius-lg;\n\n\t\t\t\t$form-select-transition:          $input-transition;\n\t\t\t`,\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/forms/select.js?");

/***/ })

}]);