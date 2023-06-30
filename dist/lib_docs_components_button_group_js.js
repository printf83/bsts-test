"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_components_button_group_js"],{

/***/ "./lib/docs/components/button_group.js":
/*!*********************************************!*\
  !*** ./lib/docs/components/button_group.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   button_group: () => (/* binding */ button_group)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"./node_modules/@printf83/bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst button_group = {\n    title: \"Button group\",\n    description: \"Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Basic example\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Wrap a series of buttons with {{b.button}} in {{b.btngroup}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.btngroup({ label: \"Basic example\", role: \"group\" }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button(\"Left\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button(\"Middle\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button(\"Right\"),\n                ]);\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"warning\", callout: true }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(5, \"Ensure correct {{role}} and provide a label\"),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"In order for assistive technologies (such as screen readers) to convey that a series of buttons is grouped, an appropriate {{role}} attribute needs to be provided. For button groups, this would be {{role:'group'}}, while toolbars should have a {{role:'toolbar'}}.\"),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"In addition, groups and toolbars should be given an explicit label, as most assistive technologies will otherwise not announce them, despite the presence of the correct role attribute. In the examples provided here, Bootstrap use {{label}}, but alternatives such as {{labelledby}} can also be used.\"),\n        ]),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"These classes can also be added to groups of links, as an alternative to the {{nav:docs/components/nav::.nav navigation components}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.btngroup([\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ href: \"#\", active: true }, \"Left\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ href: \"#\" }, \"Middle\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ href: \"#\" }, \"Right\"),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Mixed styles\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.btngroup({ label: \"Basic mixed styles example\", role: \"group\" }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"danger\" }, \"Left\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"warning\" }, \"Middle\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"success\" }, \"Right\"),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Outlined styles\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.btngroup({ label: \"Basic outlined example\", role: \"group\" }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ outline: true }, \"Left\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ outline: true }, \"Middle\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ outline: true }, \"Right\"),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Checkbox and radio button groups\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Combine button-like checkbox and radio {{nav:docs/forms/check_radio::toggle buttons}} into a seamless looking button group.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.btngroup({ label: \"Basic checkbox toggle button group\", role: \"group\" }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({ type: \"checkbox\", toggle: true, id: \"btncheck1\" }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.label({ for: \"btncheck1\", color: \"primary\", outline: true }, \"Checkbox 1\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({ type: \"checkbox\", toggle: true, id: \"btncheck2\" }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.label({ for: \"btncheck2\", color: \"primary\", outline: true }, \"Checkbox 2\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({ type: \"checkbox\", toggle: true, id: \"btncheck3\" }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.label({ for: \"btncheck3\", color: \"primary\", outline: true }, \"Checkbox 3\"),\n                ]);\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.btngroup({ label: \"Basic checkbox toggle button group\", role: \"group\" }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({ type: \"radio\", toggle: true, id: \"btnradio1\", name: \"btnradio\", checked: true }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.label({ for: \"btnradio1\", color: \"primary\", outline: true }, \"Radio 1\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({ type: \"radio\", toggle: true, id: \"btnradio2\", name: \"btnradio\" }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.label({ for: \"btnradio2\", color: \"primary\", outline: true }, \"Radio 2\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({ type: \"radio\", toggle: true, id: \"btnradio3\", name: \"btnradio\" }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.label({ for: \"btnradio3\", color: \"primary\", outline: true }, \"Radio 3\"),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Button toolbar\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to space out groups, buttons, and more.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.btngroup({ label: \"Toolbar with button groups\", role: \"toolbar\" }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.btngroup({ label: \"First group\", marginEnd: 2 }, [\"1\", \"2\", \"3\", \"4\"].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button(i))),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.btngroup({ label: \"Second group\", marginEnd: 2 }, [\"5\", \"6\", \"7\"].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"secondary\" }, i))),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.btngroup({ label: \"Third group\" }, [\"8\"].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"info\" }, i))),\n                ]);\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Feel free to mix input groups with button groups in your toolbars. Similar to the example above, you’ll likely need some utilities though to space things properly.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.btngroup({ label: \"Toolbar with button groups\", role: \"toolbar\", marginBottom: 3 }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.btngroup({ label: \"First group\", marginEnd: 2 }, [\"1\", \"2\", \"3\", \"4\"].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"secondary\", outline: true }, i))),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.inputgroup.container([\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.inputgroup.text({ id: \"btnGroupAddon\" }, \"@\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({\n                                type: \"text\",\n                                placeholder: \"Input group example\",\n                                label: \"Input group example\",\n                                describedby: \"btnGroupAddon\",\n                            }),\n                        ]),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.btngroup({ label: \"Toolbar with button groups\", role: \"toolbar\", justifyContent: \"between\" }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.btngroup({ label: \"First group\", marginEnd: 2 }, [\"1\", \"2\", \"3\", \"4\"].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"secondary\", outline: true }, i))),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.inputgroup.container([\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.inputgroup.text({ id: \"btnGroupAddon2\" }, \"@\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({\n                                type: \"text\",\n                                placeholder: \"Input group example\",\n                                label: \"Input group example\",\n                                describedby: \"btnGroupAddon2\",\n                            }),\n                        ]),\n                    ]),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Sizing\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Instead of applying button sizing classes to every button in a group, just add {{weight:<weight>}} to each {{b.btngroup}}, including each one when nesting multiple groups.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: {\n                display: \"flex\",\n                flex: \"wrap\",\n                alignItem: \"center\",\n                gap: 3,\n            },\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.btngroup({ label: \"Large button group\", weight: \"lg\", display: \"block\" }, [\"Left\", \"Middle\", \"Right\"].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"primary\", outline: true }, i))),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.btngroup({ label: \"Default button group\", display: \"block\" }, [\"Left\", \"Middle\", \"Right\"].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"primary\", outline: true }, i))),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.btngroup({ label: \"Small button group\", weight: \"sm\", display: \"block\" }, [\"Left\", \"Middle\", \"Right\"].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"primary\", outline: true }, i))),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Nesting\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Place a {{b.btngroup}} within another {{b.btngroup}} when you want dropdown menus mixed with a series of buttons.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.btngroup({ label: \"Button group with nested dropdown\" }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button(\"1\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button(\"2\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.btngroup([\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.button({}, \"Dropdown\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.menu([\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Dropdown link 1\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Dropdown link 2\"),\n                        ]),\n                    ]),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Vertical variation\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Make a set of buttons appear vertically stacked rather than horizontally. {{b::Split button dropdowns are not supported here.}}\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.btngroup({ label: \"Vertical button group\", vertical: true }, [1, 2, 3, 4, 5, 6].map(() => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"primary\" }, \"Button\")));\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.btngroup({ label: \"Vertical button group\", vertical: true }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button(\"Button\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button(\"Button\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.btngroup([\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.button({}, \"Dropdown\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.menu([\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Dropdown link 1\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Dropdown link 2\"),\n                        ]),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button(\"Button\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button(\"Button\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.btngroup([\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.button({}, \"Dropdown\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.menu([\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Dropdown link 1\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Dropdown link 2\"),\n                        ]),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.btngroup([\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.button({}, \"Dropdown\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.menu([\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Dropdown link 1\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Dropdown link 2\"),\n                        ]),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.btngroup([\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.button({}, \"Dropdown\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.menu([\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Dropdown link 1\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Dropdown link 2\"),\n                        ]),\n                    ]),\n                ]);\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.btngroup({ label: \"Vertical radio toggle button group\", vertical: true }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({ type: \"radio\", toggle: true, id: \"vbtnradio1\", name: \"vbtnradio\", checked: true }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.label({ for: \"vbtnradio1\", color: \"danger\", outline: true }, \"Radio 1\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({ type: \"radio\", toggle: true, id: \"vbtnradio2\", name: \"vbtnradio\" }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.label({ for: \"vbtnradio2\", color: \"danger\", outline: true }, \"Radio 2\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({ type: \"radio\", toggle: true, id: \"vbtnradio3\", name: \"vbtnradio\" }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.label({ for: \"vbtnradio3\", color: \"danger\", outline: true }, \"Radio 3\"),\n                ]);\n            },\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/components/button_group.js?");

/***/ })

}]);