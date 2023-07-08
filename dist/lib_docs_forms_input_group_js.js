"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_forms_input_group_js"],{

/***/ "./lib/docs/forms/input_group.js":
/*!***************************************!*\
  !*** ./lib/docs/forms/input_group.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   input_group: () => (/* binding */ input_group)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/build/esm/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst input_group = {\n    title: \"Input group\",\n    description: \"Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.\",\n    item: () => {\n        return [\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Basic example\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Place one add-on or button on either side of an input. You may also place one on both sides of an input. Remember to place {{<label>}}s outside the input group.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return [\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                                container: { marginBottom: 3 },\n                                type: \"text\",\n                                placeholder: \"Username\",\n                                before: \"@\",\n                            }),\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                                container: { marginBottom: 3 },\n                                type: \"text\",\n                                placeholder: \"Recipient's username\",\n                                after: \"@example.com\",\n                            }),\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                                container: { marginBottom: 3 },\n                                label: \"Your vanity URL\",\n                                type: \"text\",\n                                before: \"https://example.com/users/\",\n                                description: \"Example help text goes outside the input group.\",\n                            }),\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                                container: { marginBottom: 3 },\n                                type: \"text\",\n                                before: \"$\",\n                                after: \".00\",\n                            }),\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                                container: { marginBottom: 3 },\n                                type: \"text\",\n                                placeholder: \"Username\",\n                                after: [\"@\", new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({ type: \"text\", placeholder: \"Server\" })],\n                            }),\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.textarea({\n                                before: \"With textarea\",\n                            }),\n                        ];\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Wrapping\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Input groups wrap by default via {{flex-wrap: wrap}} in order to accommodate custom form field validation within an input group. You may disable this with {{.flex-nowrap}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                            type: \"text\",\n                            placeholder: \"Username\",\n                            before: \"@\",\n                        });\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Sizing\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Add the relative form sizing classes to the {{.input-group}} itself and contents within will automatically resize—no need for repeating the form control size classes on each element.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"{{b::Sizing on the individual input group elements isn’t supported.}}\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return [\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                                container: { marginBottom: 3 },\n                                type: \"text\",\n                                before: \"Small\",\n                                weight: \"sm\",\n                            }),\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                                container: { marginBottom: 3 },\n                                type: \"text\",\n                                before: \"Default\",\n                            }),\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                                type: \"text\",\n                                before: \"Large\",\n                                weight: \"lg\",\n                            }),\n                        ];\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Checkboxes and radios\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Place any checkbox or radio option within an input group’s addon instead of text. Bootstrap recommend adding {{.mt-0}} to the {{.form-check-input}} when there’s no visible text next to the input.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return [\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                                container: { marginBottom: 3 },\n                                type: \"text\",\n                                aria: { label: \"Text input with checkbox\" },\n                                before: \"[checkbox]\",\n                            }),\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                                container: { marginBottom: 3 },\n                                type: \"text\",\n                                aria: { label: \"Text input with radio\" },\n                                before: \"[radio]\",\n                            }),\n                        ];\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Multiple inputs\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"While multiple {{<input>}}s are supported visually, validation styles are only available for input groups with a single {{<input>}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return [\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                                type: \"text\",\n                                aria: { label: \"First name\" },\n                                before: \"First and last name\",\n                                after: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({ type: \"text\", aria: { label: \"Last name\" } }),\n                            }),\n                        ];\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Multiple addons\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Multiple add-ons are supported and can be mixed with checkbox and radio input versions.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return [\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                                container: { marginBottom: 3 },\n                                type: \"text\",\n                                aria: { label: \"Dollar amount (with dot and two decimal places)\" },\n                                before: [\"$\", \"0.00\"],\n                            }),\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                                type: \"text\",\n                                aria: { label: \"Dollar amount (with dot and two decimal places)\" },\n                                after: [\"$\", \"0.00\"],\n                            }),\n                        ];\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Button addons\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return [\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                                container: { marginBottom: 3 },\n                                type: \"text\",\n                                aria: { label: \"Example text with button addon\" },\n                                before: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"secondary\", outline: true }, \"Button\"),\n                            }),\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                                container: { marginBottom: 3 },\n                                type: \"text\",\n                                placeholder: \"Recipient's username\",\n                                aria: { label: \"Example text with button addon\" },\n                                after: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"secondary\", outline: true }, \"Button\"),\n                            }),\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                                container: { marginBottom: 3 },\n                                type: \"text\",\n                                aria: { label: \"Example text with button addons\" },\n                                before: [\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"secondary\", outline: true }, \"Button\"),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"secondary\", outline: true }, \"Button\"),\n                                ],\n                            }),\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                                type: \"text\",\n                                placeholder: \"Recipient's username\",\n                                aria: { label: \"Example text with button addons\" },\n                                after: [\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"secondary\", outline: true }, \"Button\"),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"secondary\", outline: true }, \"Button\"),\n                                ],\n                            }),\n                        ];\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Buttons with dropdowns\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        const dropdownItem = [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Action\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Another action\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Something else here\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.divider(),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Separated link\"),\n                        ];\n                        return [\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                                container: { marginBottom: 3 },\n                                type: \"text\",\n                                aria: { label: \"Text input with dropdown button\" },\n                                before: [\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.button({ color: \"secondary\", outline: true }, \"Dropdown\"),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.menu(dropdownItem),\n                                ],\n                            }),\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                                container: { marginBottom: 3 },\n                                type: \"text\",\n                                aria: { label: \"Text input with dropdown button\" },\n                                after: [\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.button({ color: \"secondary\", outline: true }, \"Dropdown\"),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.menu({ positionView: \"end\" }, dropdownItem),\n                                ],\n                            }),\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                                type: \"text\",\n                                aria: { label: \"Text input with dropdown button\" },\n                                before: [\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.button({ color: \"secondary\", outline: true }, \"Dropdown\"),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.menu(dropdownItem),\n                                ],\n                                after: [\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.button({ color: \"secondary\", outline: true }, \"Dropdown\"),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.menu({ positionView: \"end\" }, dropdownItem),\n                                ],\n                            }),\n                        ];\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Segmented buttons\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        const dropdownItem = [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Action\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Another action\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Something else here\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.divider(),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Separated link\"),\n                        ];\n                        return [\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                                container: { marginBottom: 3 },\n                                type: \"text\",\n                                aria: { label: \"Text input with segmented dropdown button\" },\n                                before: [\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"secondary\", outline: true }, \"Action\"),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.button({ color: \"secondary\", outline: true, split: true }),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.menu(dropdownItem),\n                                ],\n                            }),\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                                type: \"text\",\n                                aria: { label: \"Text input with segmented dropdown button\" },\n                                after: [\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"secondary\", outline: true }, \"Action\"),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.button({ color: \"secondary\", outline: true, split: true }),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.menu({ positionView: \"end\" }, dropdownItem),\n                                ],\n                            }),\n                        ];\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Custom forms\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Input groups include support for custom selects and custom file inputs. Browser default versions of these are not supported.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Custom select\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        let selectItem = [\n                            { selected: true, elem: \"Choose...\" },\n                            { value: \"1\", elem: \"One\" },\n                            { value: \"2\", elem: \"Two\" },\n                            { value: \"3\", elem: \"Three\" },\n                        ];\n                        return [\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.select({\n                                container: { marginBottom: 3 },\n                                item: selectItem,\n                                before: \"Options\",\n                            }),\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.select({\n                                container: { marginBottom: 3 },\n                                item: selectItem,\n                                after: \"Options\",\n                            }),\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.select({\n                                container: { marginBottom: 3 },\n                                item: selectItem,\n                                before: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"secondary\", outline: true }, \"Button\"),\n                            }),\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.select({\n                                container: { marginBottom: 3 },\n                                item: selectItem,\n                                after: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"secondary\", outline: true }, \"Button\"),\n                            }),\n                        ];\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Custom file input\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Input groups include support for custom selects and custom file inputs. Browser default versions of these are not supported.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return [\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                                container: { marginBottom: 3 },\n                                type: \"file\",\n                                before: \"Upload\",\n                            }),\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                                container: { marginBottom: 3 },\n                                type: \"file\",\n                                after: \"Upload\",\n                            }),\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                                container: { marginBottom: 3 },\n                                type: \"file\",\n                                before: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"secondary\", outline: true }, \"Button\"),\n                            }),\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.input({\n                                type: \"file\",\n                                after: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"secondary\", outline: true }, \"Button\"),\n                            }),\n                        ];\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"CSS\")]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass variables\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"css\",\n                    title: \"scss/_variables.scss\",\n                    source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n                    code: `\n\t\t\t\t$input-group-addon-padding-y:           $input-padding-y;\n\t\t\t\t$input-group-addon-padding-x:           $input-padding-x;\n\t\t\t\t$input-group-addon-font-weight:         $input-font-weight;\n\t\t\t\t$input-group-addon-color:               $input-color;\n\t\t\t\t$input-group-addon-bg:                  var(--#{$prefix}tertiary-bg);\n\t\t\t\t$input-group-addon-border-color:        $input-border-color;\n\t\t\t`,\n                }),\n            ]),\n        ];\n    },\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/forms/input_group.js?");

/***/ })

}]);