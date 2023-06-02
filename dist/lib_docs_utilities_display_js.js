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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   display: () => (/* binding */ display)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"./node_modules/@printf83/bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst display = {\n    title: \"Display property\",\n    description: \"Quickly and responsively toggle the display value of components and more with Bootstrap display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"How it works\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Change the value of the {{https://developer.mozilla.org/en-US/docs/Web/CSS/display::display property}} with Bootstrap responsive display utility classes. Bootstrap purposely support only a subset of all possible values for {{display}}. Classes can be combined for various effects as you need.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Notation\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Display utility classes that apply to all {{nav:docs/layout/breakpoints::breakpoints}}, from {{xs}} to {{xxl}}, have no breakpoint abbreviation in them. This is because those classes are applied from {{min-width: 0;}} and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"As such, the classes are named using the format:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\n                \"{{.d-{value} }}for {{xs}}\",\n                \"{{.d-{breakpoint}-{value} }}for {{sm}}, {{md}}, {{lg}}, {{xl}}, and {{xxl}}.\",\n            ],\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Where {{i::value}} is one of:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\n                \"{{none}}\",\n                \"{{inline}}\",\n                \"{{inline-block}}\",\n                \"{{block}}\",\n                \"{{grid}}\",\n                \"{{inline-grid}}\",\n                \"{{table}}\",\n                \"{{table-cell}}\",\n                \"{{table-row}}\",\n                \"{{flex}}\",\n                \"{{inline-flex}}\",\n            ],\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"The display values can be altered by changing the {{display}} values defined in {{$utilities}} and recompiling the SCSS.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"The media queries affect screen widths with the given breakpoint or larger. For example, {{.d-lg-none}} sets {{display: none;}} on {{lg}}, {{xl}}, and {{xxl}} screens.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Examples\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"inline\", padding: 2, textBgColor: \"primary\" }, \"d-inline\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"inline\", padding: 2, textBgColor: \"dark\" }, \"d-inline\"),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"block\", padding: 2, textBgColor: \"primary\" }, \"d-block\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"block\", padding: 2, textBgColor: \"dark\" }, \"d-block\"),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Hiding elements\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"For faster mobile-friendly development, use responsive display classes for showing and hiding elements by device. Avoid creating entirely different versions of the same site, instead hide elements responsively for each screen size.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"To hide elements simply use the .d-none class or one of the .d-{sm,md,lg,xl,xxl}-none classes for any responsive screen variation.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"To show an element only on a given interval of screen sizes you can combine one {{.d-*-none}} class with a {{.d-*-*}} class, for example {{.d-none}}, {{.d-md-block}}, {{.d-xl-none}} and {{.d-xxl-none}} will hide the element for all screen sizes except on medium and large devices.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.table({\n            item: [\n                [\"Screen size\", \"Class\"],\n                [\"Hidden on all\", \"{{.d-none}}\"],\n                [\"Hidden only on xs\", \"{{.d-none .d-sm-block}}\"],\n                [\"Hidden only on sm\", \"{{.d-sm-none .d-md-block}}\"],\n                [\"Hidden only on md\", \"{{.d-md-none .d-lg-block}}\"],\n                [\"Hidden only on lg\", \"{{.d-lg-none .d-xl-block}}\"],\n                [\"Hidden only on xl\", \"{{.d-xl-none .d-xxl-block}}\"],\n                [\"Hidden only on xxl\", \"{{.d-xxl-none}}\"],\n                [\"Visible on all\", \"{{.d-block}}\"],\n                [\"Visible only on xs\", \"{{.d-block .d-sm-none}}\"],\n                [\"Visible only on sm\", \"{{.d-none .d-sm-block .d-md-none}}\"],\n                [\"Visible only on md\", \"{{.d-none .d-md-block .d-lg-none}}\"],\n                [\"Visible only on lg\", \"{{.d-none .d-lg-block .d-xl-none}}\"],\n                [\"Visible only on xl\", \"{{.d-none .d-xl-block .d-xxl-none}}\"],\n                [\"Visible only on xxl\", \"{{.d-none .d-xxl-block}}\"],\n            ],\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            showViewport: true,\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"lg-none\" }, \"hide on lg and wider screens\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: [\"none\", \"lg-block\"] }, \"hide on screens smaller than lg\"),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Display in print\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Change the {{display}} value of elements when printing with Bootstrap print display utility classes. Includes support for the same {{display}} values as Bootstrap responsive {{.d-*}} utilities.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\n                \"{{.d-print-none}}\",\n                \"{{.d-print-inline}}\",\n                \"{{.d-print-inline-block}}\",\n                \"{{.d-print-block}}\",\n                \"{{.d-print-grid}}\",\n                \"{{.d-print-inline-grid}}\",\n                \"{{.d-print-table}}\",\n                \"{{.d-print-table-row}}\",\n                \"{{.d-print-table-cell}}\",\n                \"{{.d-print-flex}}\",\n                \"{{.d-print-inline-flex}}\",\n            ],\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"The print and display classes can be combined.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ print: \"none\" }, \"Screen Only (Hide on print only)\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"none\", print: \"block\" }, \"Print Only (Hide on screen only)\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: [\"none\", \"lg-block\"], print: \"block\" }, \"Hide up to large on screen, but always show on print\"),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Sass\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Utilities API \"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Display utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_utilities.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_utilities.scss\",\n            code: `\r\n\t\t\t\t\"display\": (\r\n\t\t\t\t\tresponsive: true,\r\n\t\t\t\t\tprint: true,\r\n\t\t\t\t\tproperty: display,\r\n\t\t\t\t\tclass: d,\r\n\t\t\t\t\tvalues: inline inline-block block grid inline-grid table table-row table-cell flex inline-flex none\r\n\t\t\t\t),\r\n\t\t\t`,\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/utilities/display.js?");

/***/ })

}]);