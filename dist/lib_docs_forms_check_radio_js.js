"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_forms_check_radio_js"],{

/***/ "./lib/docs/forms/check_radio.js":
/*!***************************************!*\
  !*** ./lib/docs/forms/check_radio.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   check_radio: () => (/* binding */ check_radio)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst check_radio = {\n    title: \"Checks and radios\",\n    description: \"Create consistent cross-browser and cross-device checkboxes and radios with Bootstrap completely rewritten checks component.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Approach\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Browser default checkboxes and radios are replaced with the help of .form-check, a series of classes for both input types that improves the layout and behavior of their HTML elements, that provide greater customization and cross browser consistency. Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Structurally, Bootstrap {{<input>}}s and {{<label>}}s are sibling elements as opposed to an {{<input>}} within a {{<label>}}. This is slightly more verbose as you must specify {{id}} and {{for}} attributes to relate the {{<input>}} and {{<label>}}. Bootstrap use the sibling selector ({{~}}) for all Bootstrap {{<input>}} states, like {{:checked}} or {{:disabled}}. When combined with the {{.form-check-label}} class, Bootstrap can easily style the text for each item based on the {{<input>}}’s state.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Bootstrap checks use custom Bootstrap icons to indicate checked or indeterminate states.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Checks\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ class: \"form-check\" }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({ type: \"checkbox\", id: \"flexCheckDefault\" }),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.label({ for: \"flexCheckDefault\", class: \"form-check-label\" }, \"Default checkbox\"),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ class: \"form-check\" }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({ type: \"checkbox\", id: \"flexCheckChecked\", checked: true }),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.label({ for: \"flexCheckChecked\", class: \"form-check-label\" }, \"Checked checkbox\"),\n                    ]),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Using {{B.Form.Check}}\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({ type: \"checkbox\", label: \"Default checkbox\" }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({ type: \"checkbox\", label: \"Checked checkbox\", checked: true }),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Indeterminate\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Checkboxes can utilize the {{:indeterminate}} pseudo class when manually set via JavaScript (there is no available HTML attribute for specifying it).\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({ type: \"checkbox\", label: \"Indeterminate checkbox\", indeterminate: true });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Disabled\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Add the {{disabled}} attribute and the associated {{<label>}}s are automatically styled to match with a lighter color to help indicate the input’s state.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({\n                        type: \"checkbox\",\n                        label: \"Disabled indeterminate checkbox\",\n                        indeterminate: true,\n                        disabled: true,\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({\n                        type: \"checkbox\",\n                        label: \"Disabled checkbox\",\n                        disabled: true,\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({\n                        type: \"checkbox\",\n                        label: \"Disabled checked checkbox\",\n                        checked: true,\n                        disabled: true,\n                    }),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Radios\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ class: \"form-check\" }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({ type: \"radio\", id: \"flexRadioDefault\", name: \"exampeRadioGroup1\" }),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.label({ for: \"flexRadioDefault\", class: \"form-check-label\" }, \"Default radio\"),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ class: \"form-check\" }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({\n                            type: \"radio\",\n                            id: \"flexRadioDefault2\",\n                            name: \"exampeRadioGroup1\",\n                            checked: true,\n                        }),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.label({ for: \"flexRadioDefault2\", class: \"form-check-label\" }, \"Default checked radio\"),\n                    ]),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Using {{B.Form.Check}}\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({ type: \"radio\", name: \"exampeRadioGroup2\", label: \"Default radio\" }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({\n                        type: \"radio\",\n                        name: \"exampeRadioGroup2\",\n                        label: \"Default checked radio\",\n                        checked: true,\n                    }),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle({ id: \"radio_disabled\" }, \"Disabled\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Add the {{disabled}} attribute and the associated {{<label>}}s are automatically styled to match with a lighter color to help indicate the input’s state.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({ type: \"radio\", name: \"exampeRadioGroup3\", label: \"Disabled radio\", disabled: true }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({\n                        type: \"radio\",\n                        name: \"exampeRadioGroup3\",\n                        label: \"Disabled checked radio\",\n                        checked: true,\n                        disabled: true,\n                    }),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Switches\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"A switch has the markup of a custom checkbox but uses the {{.form-switch}} class to render a toggle switch. Consider using {{role='switch'}} to more accurately convey the nature of the control to assistive technologies that support this role. In older assistive technologies, it will simply be announced as a regular checkbox as a fallback. Switches also support the {{disabled}} attribute.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({ type: \"checkbox\", switch: true, label: \"Default switch checkbox input\" }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({\n                        type: \"checkbox\",\n                        switch: true,\n                        label: \"Checked switch checkbox input\",\n                        checked: true,\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({\n                        type: \"checkbox\",\n                        switch: true,\n                        label: \"Disabled switch checkbox input\",\n                        disabled: true,\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({\n                        type: \"checkbox\",\n                        switch: true,\n                        label: \"Disabled switch checkbox input\",\n                        checked: true,\n                        disabled: true,\n                    }),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Default (stacked)\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced with {{.form-check}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({ type: \"checkbox\", label: \"Default checkbox\" }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({ type: \"checkbox\", label: \"Disabled checkbox\", disabled: true }),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({ type: \"radio\", name: \"exampeRadioGroup4\", label: \"Default radio\", checked: true }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({ type: \"radio\", name: \"exampeRadioGroup4\", label: \"Second default radio\" }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({\n                        type: \"radio\",\n                        name: \"exampeRadioGroup4\",\n                        label: \"Disabled radio\",\n                        disabled: true,\n                    }),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Inline\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Group checkboxes or radios on the same horizontal row by adding {{.form-check-inline}} to any {{.form-check}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { gap: 1 },\n            output: () => {\n                return [\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({ type: \"checkbox\", label: \"1\", inline: true }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({ type: \"checkbox\", label: \"2\", inline: true }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({ type: \"checkbox\", label: \"3 (disabled)\", disabled: true, inline: true }),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { gap: 1 },\n            output: () => {\n                return [\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({ type: \"radio\", name: \"exampeRadioGroup5\", label: \"1\", inline: true }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({ type: \"radio\", name: \"exampeRadioGroup5\", label: \"2\", inline: true }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({\n                        type: \"radio\",\n                        name: \"exampeRadioGroup5\",\n                        label: \"3 (disabled)\",\n                        disabled: true,\n                        inline: true,\n                    }),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Reverse\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Put your checkboxes, radios, and switches on the opposite side with the .form-check-reverse modifier class.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({ type: \"checkbox\", label: \"Reverse checkbox\", reverse: true }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({\n                        type: \"checkbox\",\n                        label: \"Disabled reverse checkbox\",\n                        disabled: true,\n                        reverse: true,\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({\n                        type: \"checkbox\",\n                        label: \"Reverse switch checkbox input\",\n                        switch: true,\n                        reverse: true,\n                    }),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Without labels\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Omit the wrapping {{.form-check}} for checkboxes and radios that have no label text. Remember to still provide some form of accessible name for assistive technologies (for instance, using {{aria-label}}). See the {{nav:docs/forms/overview#accessibility::forms overview accessibility}} section for details.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({ type: \"checkbox\", label: \"Checkbox without label\", hideLabel: true }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({\n                        type: \"radio\",\n                        label: \"Radio without label\",\n                        name: \"exampeRadioGroup6\",\n                        hideLabel: true,\n                    }),\n                    _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Check({\n                        type: \"checkbox\",\n                        label: \"Switch without label\",\n                        switch: true,\n                        hideLabel: true,\n                    }),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Toggle buttons\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Create button-like checkboxes and radio buttons by using {{.btn}} styles rather than {{.form-check-label}} on the {{<label>}} elements. These toggle buttons can further be grouped in a {{nav:docs/components/button_group::button group}} if needed.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"danger\", callout: true }, \"{{b::Heads up!}} The {{B.Form.Toggle}} function return an array. You need to flat the array before add the result into your array. For this example, Bootstrap use the {{...}} to flatten the array.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Checkbox toggle buttons\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Toggle({ type: \"checkbox\", label: \"Single toggle\", container: { color: \"primary\" } });\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Toggle({\n                    type: \"checkbox\",\n                    label: \"Checked\",\n                    container: { color: \"primary\" },\n                    checked: true,\n                });\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Toggle({\n                    type: \"checkbox\",\n                    label: \"Disabled\",\n                    container: { color: \"primary\" },\n                    disabled: true,\n                });\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"info\", callout: true }, \" Visually, these checkbox toggle buttons are identical to the {{nav:docs/components/button#button_plugin::button plugin toggle buttons}}. However, they are conveyed differently by assistive technologies: the checkbox toggles will be announced by screen readers as “checked”/“not checked” (since, despite their appearance, they are fundamentally still checkboxes), whereas the button plugin toggle buttons will be announced as “button”/“button pressed”. The choice between these two approaches will depend on the type of toggle you are creating, and whether or not the toggle will make sense to users when announced as a checkbox or as an actual button.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Radio toggle buttons\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { gap: 1 },\n            output: () => {\n                return [\n                    ..._printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Toggle({\n                        type: \"radio\",\n                        label: \"Checked\",\n                        name: \"exampeRadioGroup7\",\n                        checked: true,\n                        container: { color: \"secondary\" },\n                    }),\n                    ..._printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Toggle({\n                        type: \"radio\",\n                        label: \"Radio\",\n                        name: \"exampeRadioGroup7\",\n                        container: { color: \"secondary\" },\n                    }),\n                    ..._printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Toggle({\n                        type: \"radio\",\n                        label: \"Disabled\",\n                        name: \"exampeRadioGroup7\",\n                        disabled: true,\n                        container: { color: \"secondary\" },\n                    }),\n                    ..._printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Toggle({\n                        type: \"radio\",\n                        label: \"Radio\",\n                        name: \"exampeRadioGroup7\",\n                        container: { color: \"secondary\" },\n                    }),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Outlined styles\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Different variants of {{.btn}}, such at the various outlined styles, are supported.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { gap: 1 },\n            output: () => {\n                return [\n                    ..._printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Toggle({\n                        type: \"checkbox\",\n                        label: \"Single toggle\",\n                        container: { color: \"primary\", outline: true },\n                    }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.br(),\n                    ..._printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Toggle({\n                        type: \"checkbox\",\n                        label: \"Checked\",\n                        checked: true,\n                        container: { color: \"secondary\", outline: true },\n                    }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.br(),\n                    ..._printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Toggle({\n                        type: \"radio\",\n                        label: \"Checked success radio\",\n                        name: \"exampeRadioGroup8\",\n                        checked: true,\n                        container: { color: \"success\", outline: true },\n                    }),\n                    ..._printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.B.Form.Toggle({\n                        type: \"radio\",\n                        label: \"Radio\",\n                        name: \"exampeRadioGroup8\",\n                        container: { color: \"danger\", outline: true },\n                    }),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"CSS\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass variables\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Variables for checks:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss\",\n            code: `\r\n\t\t\t\t$form-check-input-width:                  1em;\r\n\t\t\t\t$form-check-min-height:                   $font-size-base * $line-height-base;\r\n\t\t\t\t$form-check-padding-start:                $form-check-input-width + .5em;\r\n\t\t\t\t$form-check-margin-bottom:                .125rem;\r\n\t\t\t\t$form-check-label-color:                  null;\r\n\t\t\t\t$form-check-label-cursor:                 null;\r\n\t\t\t\t$form-check-transition:                   null;\r\n\r\n\t\t\t\t$form-check-input-active-filter:          brightness(90%);\r\n\r\n\t\t\t\t$form-check-input-bg:                     $input-bg;\r\n\t\t\t\t$form-check-input-border:                 var(--#{$prefix}border-width) solid var(--#{$prefix}border-color);\r\n\t\t\t\t$form-check-input-border-radius:          .25em;\r\n\t\t\t\t$form-check-radio-border-radius:          50%;\r\n\t\t\t\t$form-check-input-focus-border:           $input-focus-border-color;\r\n\t\t\t\t$form-check-input-focus-box-shadow:       $focus-ring-box-shadow;\r\n\r\n\t\t\t\t$form-check-input-checked-color:          $component-active-color;\r\n\t\t\t\t$form-check-input-checked-bg-color:       $component-active-bg;\r\n\t\t\t\t$form-check-input-checked-border-color:   $form-check-input-checked-bg-color;\r\n\t\t\t\t$form-check-input-checked-bg-image:       url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='#{$form-check-input-checked-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/></svg>\");\r\n\t\t\t\t$form-check-radio-checked-bg-image:       url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='2' fill='#{$form-check-input-checked-color}'/></svg>\");\r\n\r\n\t\t\t\t$form-check-input-indeterminate-color:          $component-active-color;\r\n\t\t\t\t$form-check-input-indeterminate-bg-color:       $component-active-bg;\r\n\t\t\t\t$form-check-input-indeterminate-border-color:   $form-check-input-indeterminate-bg-color;\r\n\t\t\t\t$form-check-input-indeterminate-bg-image:       url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='#{$form-check-input-indeterminate-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/></svg>\");\r\n\r\n\t\t\t\t$form-check-input-disabled-opacity:        .5;\r\n\t\t\t\t$form-check-label-disabled-opacity:        $form-check-input-disabled-opacity;\r\n\t\t\t\t$form-check-btn-check-disabled-opacity:    $btn-disabled-opacity;\r\n\r\n\t\t\t\t$form-check-inline-margin-end:    1rem;\r\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Variables for switches:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss\",\n            code: `\r\n\t\t\t\t$form-switch-color:               rgba($black, .25);\r\n\t\t\t\t$form-switch-width:               2em;\r\n\t\t\t\t$form-switch-padding-start:       $form-switch-width + .5em;\r\n\t\t\t\t$form-switch-bg-image:            url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-color}'/></svg>\");\r\n\t\t\t\t$form-switch-border-radius:       $form-switch-width;\r\n\t\t\t\t$form-switch-transition:          background-position .15s ease-in-out;\r\n\r\n\t\t\t\t$form-switch-focus-color:         $input-focus-border-color;\r\n\t\t\t\t$form-switch-focus-bg-image:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-focus-color}'/></svg>\");\r\n\r\n\t\t\t\t$form-switch-checked-color:       $component-active-color;\r\n\t\t\t\t$form-switch-checked-bg-image:    url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-checked-color}'/></svg>\");\r\n\t\t\t\t$form-switch-checked-bg-position: right center;\r\n\t\t\t`,\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/forms/check_radio.js?");

/***/ })

}]);