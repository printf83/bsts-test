"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_utilities_display_js"],{

/***/ "./lib/docs/utilities/display.js":
/*!***************************************!*\
  !*** ./lib/docs/utilities/display.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   display: () => (/* binding */ display)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst display = {\n    title: \"Display property\",\n    description: \"Quickly and responsively toggle the display value of components and more with Bootstrap display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing.\",\n    item: () => {\n        return [\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"How it works\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Change the value of the {{https://developer.mozilla.org/en-US/docs/Web/CSS/display::display property}} with Bootstrap responsive display utility classes. Bootstrap purposely support only a subset of all possible values for {{display}}. Property value can be combined for various effects as you need.\"),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Notation\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Display utility classes that apply to all {{nav:docs/layout/breakpoints::breakpoints}}, from {{xs}} to {{xxl}}, have no breakpoint abbreviation in them. This is because those classes are applied from {{min-width: 0;}} and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"As such, the classes are named using the format:\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n                    item: [\n                        \"{{display:'{value}' }}for {{xs}}\",\n                        \"{{display:'{breakpoint}-{value}' }}for {{sm}}, {{md}}, {{lg}}, {{xl}}, and {{xxl}}.\",\n                    ],\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Where {{i::value}} is one of:\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n                    item: [\n                        \"{{none}}\",\n                        \"{{inline}}\",\n                        \"{{inline-block}}\",\n                        \"{{block}}\",\n                        \"{{grid}}\",\n                        \"{{inline-grid}}\",\n                        \"{{table}}\",\n                        \"{{table-cell}}\",\n                        \"{{table-row}}\",\n                        \"{{flex}}\",\n                        \"{{inline-flex}}\",\n                    ],\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"The display values can be altered by changing the {{display}} values defined in {{$utilities}} and recompiling the SCSS.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"The media queries affect screen widths with the given breakpoint or larger. For example, {{.d-lg-none}} sets {{display: none;}} on {{lg}}, {{xl}}, and {{xxl}} screens.\"),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Examples\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"inline\", padding: 2, textBgColor: \"primary\" }, \"d-inline\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"inline\", padding: 2, textBgColor: \"dark\" }, \"d-inline\"),\n                        ];\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"block\", padding: 2, textBgColor: \"primary\" }, \"d-block\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"block\", padding: 2, textBgColor: \"dark\" }, \"d-block\"),\n                        ];\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Hiding elements\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"For faster mobile-friendly development, use responsive display classes for showing and hiding elements by device. Avoid creating entirely different versions of the same site, instead hide elements responsively for each screen size.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"To hide elements simply use the {{display:'none'}} property or one of the {{display:'{sm,md,lg,xl,xxl}-none'}} property for any responsive screen variation.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"To show an element only on a given interval of screen sizes you can combine one {{display:'*-none'}} property value with a {{display:'*-*'}} property value, for example {{display:['none','md-block','xl-none','xl-none','xxl-none']}} will hide the element for all screen sizes except on medium and large devices.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.table({\n                    item: [\n                        [\"Screen size\", \"Class\"],\n                        [\"Hidden on all\", \"{{display:'none'}}\"],\n                        [\"Hidden only on xs\", \"{{display:['none', 'sm-block']}}\"],\n                        [\"Hidden only on sm\", \"{{display:['sm-none', 'md-block']}}\"],\n                        [\"Hidden only on md\", \"{{display:['md-none', 'lg-block']}}\"],\n                        [\"Hidden only on lg\", \"{{display:['lg-none', 'xl-block']}}\"],\n                        [\"Hidden only on xl\", \"{{display:['xl-none', 'xxl-block']}}\"],\n                        [\"Hidden only on xxl\", \"{{display:['xxl-none']}}\"],\n                        [\"Visible on all\", \"{{display:'block'}}\"],\n                        [\"Visible only on xs\", \"{{display:['block', 'sm-none']}}\"],\n                        [\"Visible only on sm\", \"{{display:['none', 'sm-block', 'md-none']}}\"],\n                        [\"Visible only on md\", \"{{display:['none', 'md-block', 'lg-none']}}\"],\n                        [\"Visible only on lg\", \"{{display:['none', 'lg-block', 'xl-none']}}\"],\n                        [\"Visible only on xl\", \"{{display:['none', 'xl-block', 'xxl-none']}}\"],\n                        [\"Visible only on xxl\", \"{{display:['none', 'xxl-block']}}\"],\n                    ],\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    showViewport: true,\n                    output: () => {\n                        return [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"lg-none\" }, \"hide on lg and wider screens\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: [\"none\", \"lg-block\"] }, \"hide on screens smaller than lg\"),\n                        ];\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Display in print\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Change the {{print}} property of elements when printing with Bootstrap print display utility classes. Includes support for the same {{display}} values as Bootstrap responsive {{display}} utilities.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n                    item: [\n                        \"{{print:'none'}}\",\n                        \"{{print:'inline'}}\",\n                        \"{{print:'inline-block'}}\",\n                        \"{{print:'block'}}\",\n                        \"{{print:'grid'}}\",\n                        \"{{print:'inline-grid'}}\",\n                        \"{{print:'table'}}\",\n                        \"{{print:'table-row'}}\",\n                        \"{{print:'table-cell'}}\",\n                        \"{{print:'flex'}}\",\n                        \"{{print:'inline-flex'}}\",\n                    ],\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"The print and display classes can be combined.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ print: \"none\" }, \"Screen Only (Hide on print only)\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"none\", print: \"block\" }, \"Print Only (Hide on screen only)\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: [\"none\", \"lg-block\"], print: \"block\" }, \"Hide up to large on screen, but always show on print\"),\n                        ];\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Sass\")]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Utilities API \"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Display utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"css\",\n                    title: \"scss/_utilities.scss\",\n                    source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss\",\n                    code: `\n\t\t\t\t\t\t\"display\": (\n\t\t\t\t\t\t\tresponsive: true,\n\t\t\t\t\t\t\tprint: true,\n\t\t\t\t\t\t\tproperty: display,\n\t\t\t\t\t\t\tclass: d,\n\t\t\t\t\t\t\tvalues: inline inline-block block grid inline-grid table table-row table-cell flex inline-flex none\n\t\t\t\t\t\t),\n\t\t\t\t\t`,\n                }),\n            ]),\n        ];\n    },\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/utilities/display.js?");

/***/ })

}]);