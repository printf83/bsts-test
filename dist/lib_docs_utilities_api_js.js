"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_utilities_api_js"],{

/***/ "./lib/docs/utilities/api.js":
/*!***********************************!*\
  !*** ./lib/docs/utilities/api.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   api: () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\nconst api = {\n    title: \"Utility API\",\n    description: \"The utility API is a Sass-based tool to generate utility classes.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"Bootstrap utilities are generated with Bootstrap utility API and can be used to modify or extend Bootstrap default set of utility classes via Sass. Bootstrap utility API is based on a series of Sass maps and functions for generating families of classes with various options. If you’re unfamiliar with Sass maps, read up on the {{https://sass-lang.com/documentation/values/maps::official Sass docs}} to get started.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"The {{$utilities}} map contains all Bootstrap utilities and is later merged with your custom {{$utilities}} map, if present. The utility map contains a keyed list of utility groups which accept the following options:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.table({\n            item: [\n                [\"Option\", \"Type\", \"Default value\", \"Description\"],\n                [\n                    \"{{nav:docs/utilities/api#property::property}}\",\n                    \"{{b::Required}}\",\n                    \"-\",\n                    \"Name of the property, this can be a string or an array of strings (e.g., horizontal paddings or margins).\",\n                ],\n                [\n                    \"{{nav:docs/utilities/api#values::values}}\",\n                    \"{{b::Required}}\",\n                    \"-\",\n                    \"List of values, or a map if you don’t want the class name to be the same as the value. If {{null}} is used as map key, {{class}} is not prepended to the class name.\",\n                ],\n                [\n                    \"{{nav:docs/utilities/api#class::class}}\",\n                    \"Optional\",\n                    \"null\",\n                    \"Name of the generated class. If not provided and {{property}} is an array of strings, {{class}} will default to the first element of the {{property}} array. If not provided and {{property}} is a string, the {{values}} keys are used for the {{class}} names.\",\n                ],\n                [\n                    \"{{nav:docs/utilities/api#css-var::css-var}}\",\n                    \"Optional\",\n                    \"{{false}}\",\n                    \"Boolean to generate CSS variables instead of CSS rules.\",\n                ],\n                [\n                    \"{{nav:docs/utilities/api#css-variable-name::css-variable-name}}\",\n                    \"Optional\",\n                    \"null\",\n                    \"Custom un-prefixed name for the CSS variable inside the ruleset.\",\n                ],\n                [\n                    \"{{nav:docs/utilities/api#local-vars::local-vars}}\",\n                    \"Optional\",\n                    \"null\",\n                    \"Map of local CSS variables to generate in addition to the CSS rules.\",\n                ],\n                [\n                    \"{{nav:docs/utilities/api#state::state}}\",\n                    \"Optional\",\n                    \"null\",\n                    \"List of pseudo-class variants (e.g., {{:hover}} or {{:focus}}) to generate.\",\n                ],\n                [\n                    \"{{nav:docs/utilities/api#responsive::responsive}}\",\n                    \"Optional\",\n                    \"{{false}}\",\n                    \"Boolean indicating if responsive classes should be generated.\",\n                ],\n                [\n                    \"{{rfs}}\",\n                    \"Optional\",\n                    \"{{false}}\",\n                    \"Boolean to enable {{https://getbootstrap.com/docs/5.3/getting-started/rfs/::fluid rescaling with RFS}}.\",\n                ],\n                [\n                    \"{{nav:docs/utilities/api#print::print}}\",\n                    \"Optional\",\n                    \"{{false}}\",\n                    \"Boolean indicating if print classes need to be generated.\",\n                ],\n                [\"{{rtl}}\", \"Optional\", \"{{true}}\", \"Boolean indicating if utility should be kept in RTL.\"],\n            ],\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.title(\"API explained\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"All utility variables are added to the {{$utilities}} variable within Bootstrap {{_utilities.scss}} stylesheet. Each group of utilities looks something like this:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.codepreview({\n            type: \"css\",\n            code: `\r\n                $utilities: (\r\n                \"opacity\": (\r\n                    property: opacity,\r\n                    values: (\r\n                    0: 0,\r\n                    25: .25,\r\n                    50: .5,\r\n                    75: .75,\r\n                    100: 1,\r\n                    )\r\n                )\r\n                );\r\n\t\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"Which outputs the following:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.codepreview({\n            type: \"css\",\n            code: `\r\n                .opacity-0 { opacity: 0; }\r\n                .opacity-25 { opacity: .25; }\r\n                .opacity-50 { opacity: .5; }\r\n                .opacity-75 { opacity: .75; }\r\n                .opacity-100 { opacity: 1; }\r\n\t\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.subtitle(\"Property\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"The required {{property}} key must be set for any utility, and it must contain a valid CSS property. This property is used in the generated utility’s ruleset. When the {{class}} key is omitted, it also serves as the default class name. Consider the {{text-decoration}} utility:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.codepreview({\n            type: \"css\",\n            code: `\r\n                $utilities: (\r\n                \"text-decoration\": (\r\n                    property: text-decoration,\r\n                    values: none underline line-through\r\n                )\r\n                );\r\n\t\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"Output:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.codepreview({\n            type: \"css\",\n            code: `\r\n                .text-decoration-none { text-decoration: none !important; }\r\n                .text-decoration-underline { text-decoration: underline !important; }\r\n                .text-decoration-line-through { text-decoration: line-through !important; }\r\n\t\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.subtitle(\"Values\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"Use the {{values}} key to specify which values for the specified {{property}} should be used in the generated class names and rules. Can be a list or map (set in the utilities or in a Sass variable).\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"As a list, like with {{nav:docs/utilities/text#text_decoration::text-decoration utilities}}:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.codepreview({\n            type: \"css\",\n            code: `\r\n                values: none underline line-through\r\n\t\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"As a map, like with {{nav:docs/utilities/opacity::opacity utilities}}:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.codepreview({\n            type: \"css\",\n            code: `\r\n                values: (\r\n                0: 0,\r\n                25: .25,\r\n                50: .5,\r\n                75: .75,\r\n                100: 1,\r\n                )\r\n\t\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"As a Sass variable that sets the list or map, as in Bootstrap {{nav:docs/utilities/position::position utilities}}:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.codepreview({\n            type: \"css\",\n            code: `\r\n                values: $position-values\r\n\t\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.subtitle(\"Class\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"Use the {{class}} option to change the class prefix used in the compiled CSS. For example, to change from {{.opacity-*}} to {{.o-*}}:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.codepreview({\n            type: \"css\",\n            code: `\r\n                $utilities: (\r\n\t\t\t\t\"opacity\": (\r\n\t\t\t\t\tproperty: opacity,\r\n\t\t\t\t\tclass: o,\r\n\t\t\t\t\tvalues: (\r\n\t\t\t\t\t0: 0,\r\n\t\t\t\t\t25: .25,\r\n\t\t\t\t\t50: .5,\r\n\t\t\t\t\t75: .75,\r\n\t\t\t\t\t100: 1,\r\n\t\t\t\t\t)\r\n\t\t\t\t)\r\n\t\t\t\t);\r\n\t\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"Output:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.codepreview({\n            type: \"css\",\n            code: `\r\n                .o-0 { opacity: 0 !important; }\r\n\t\t\t\t.o-25 { opacity: .25 !important; }\r\n\t\t\t\t.o-50 { opacity: .5 !important; }\r\n\t\t\t\t.o-75 { opacity: .75 !important; }\r\n\t\t\t\t.o-100 { opacity: 1 !important; }\r\n\t\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"If {{class: null}}, generates classes for each of the {{values}} keys:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.codepreview({\n            type: \"css\",\n            code: `\r\n\t\t\t\t$utilities: (\r\n\t\t\t\t\"visibility\": (\r\n\t\t\t\t\tproperty: visibility,\r\n\t\t\t\t\tclass: null,\r\n\t\t\t\t\tvalues: (\r\n\t\t\t\t\tvisible: visible,\r\n\t\t\t\t\tinvisible: hidden,\r\n\t\t\t\t\t)\r\n\t\t\t\t)\r\n\t\t\t\t);\r\n\t\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"Output:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.codepreview({\n            type: \"css\",\n            code: `\r\n\t\t\t\t.visible { visibility: visible !important; }\r\n\t\t\t\t.invisible { visibility: hidden !important; }\r\n\t\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.subtitle(\"CSS variable utilities\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"Set the {{css-var}} boolean option to {{true}} and the API will generate local CSS variables for the given selector instead of the usual {{property: value}} rules. Add an optional {{css-variable-name}} to set a different CSS variable name than the class name.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"Consider Bootstrap {{.text-opacity-*}} utilities. If Bootstrap add the {{css-variable-name}} option, Bootstrap’ll get a custom output.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.codepreview({\n            type: \"css\",\n            code: `\r\n\t\t\t\t$utilities: (\r\n\t\t\t\t\"text-opacity\": (\r\n\t\t\t\t\tcss-var: true,\r\n\t\t\t\t\tcss-variable-name: text-alpha,\r\n\t\t\t\t\tclass: text-opacity,\r\n\t\t\t\t\tvalues: (\r\n\t\t\t\t\t25: .25,\r\n\t\t\t\t\t50: .5,\r\n\t\t\t\t\t75: .75,\r\n\t\t\t\t\t100: 1\r\n\t\t\t\t\t)\r\n\t\t\t\t),\r\n\t\t\t\t);\r\n\t\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"Output:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.codepreview({\n            type: \"css\",\n            code: `\r\n\t\t\t\t.text-opacity-25 { --bs-text-alpha: .25; }\r\n\t\t\t\t.text-opacity-50 { --bs-text-alpha: .5; }\r\n\t\t\t\t.text-opacity-75 { --bs-text-alpha: .75; }\r\n\t\t\t\t.text-opacity-100 { --bs-text-alpha: 1; }\r\n\t\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.subtitle(\"Local CSS variables\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"Use the {{local-vars}} option to specify a Sass map that will generate local CSS variables within the utility class’s ruleset. Please note that it may require additional work to consume those local CSS variables in the generated CSS rules. For example, consider Bootstrap {{.bg-*}} utilities:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.codepreview({\n            type: \"css\",\n            code: `\r\n\t\t\t\t$utilities: (\r\n\t\t\t\t\"background-color\": (\r\n\t\t\t\t\tproperty: background-color,\r\n\t\t\t\t\tclass: bg,\r\n\t\t\t\t\tlocal-vars: (\r\n\t\t\t\t\t\"bg-opacity\": 1\r\n\t\t\t\t\t),\r\n\t\t\t\t\tvalues: map-merge(\r\n\t\t\t\t\t$utilities-bg-colors,\r\n\t\t\t\t\t(\r\n\t\t\t\t\t\t\"transparent\": transparent\r\n\t\t\t\t\t)\r\n\t\t\t\t\t)\r\n\t\t\t\t)\r\n\t\t\t\t);\r\n\t\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"Output:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.codepreview({\n            type: \"css\",\n            code: `\r\n\t\t\t\t.bg-primary {\r\n\t\t\t\t--bs-bg-opacity: 1;\r\n\t\t\t\tbackground-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important;\r\n\t\t\t\t}\r\n\t\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.subtitle(\"States\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"Use the {{state}} option to generate pseudo-class variations. Example pseudo-classes are {{:hover}} and {{:focus}}. When a list of states are provided, classnames are created for that pseudo-class. For example, to change opacity on hover, add {{state: hover}} and you’ll get {{.opacity-hover:hover}} in your compiled CSS.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"Need multiple pseudo-classes? Use a space-separated list of states: {{state: hover focus}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.codepreview({\n            type: \"css\",\n            code: `\r\n\t\t\t\t$utilities: (\r\n\t\t\t\t\"opacity\": (\r\n\t\t\t\t\tproperty: opacity,\r\n\t\t\t\t\tclass: opacity,\r\n\t\t\t\t\tstate: hover,\r\n\t\t\t\t\tvalues: (\r\n\t\t\t\t\t0: 0,\r\n\t\t\t\t\t25: .25,\r\n\t\t\t\t\t50: .5,\r\n\t\t\t\t\t75: .75,\r\n\t\t\t\t\t100: 1,\r\n\t\t\t\t\t)\r\n\t\t\t\t)\r\n\t\t\t\t);\r\n\t\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"Output:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.codepreview({\n            type: \"css\",\n            code: `\r\n\t\t\t\t.opacity-0-hover:hover { opacity: 0 !important; }\r\n\t\t\t\t.opacity-25-hover:hover { opacity: .25 !important; }\r\n\t\t\t\t.opacity-50-hover:hover { opacity: .5 !important; }\r\n\t\t\t\t.opacity-75-hover:hover { opacity: .75 !important; }\r\n\t\t\t\t.opacity-100-hover:hover { opacity: 1 !important; }\r\n\t\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.subtitle(\"Responsive\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"Add the responsive boolean to generate responsive utilities (e.g., .opacity-md-25) across all breakpoints.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.codepreview({\n            type: \"css\",\n            code: `\r\n\t\t\t\t$utilities: (\r\n\t\t\t\t\"opacity\": (\r\n\t\t\t\t\tproperty: opacity,\r\n\t\t\t\t\tresponsive: true,\r\n\t\t\t\t\tvalues: (\r\n\t\t\t\t\t0: 0,\r\n\t\t\t\t\t25: .25,\r\n\t\t\t\t\t50: .5,\r\n\t\t\t\t\t75: .75,\r\n\t\t\t\t\t100: 1,\r\n\t\t\t\t\t)\r\n\t\t\t\t)\r\n\t\t\t\t);\r\n\t\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"Output:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.codepreview({\n            type: \"css\",\n            code: `\r\n\t\t\t\t.opacity-0 { opacity: 0 !important; }\r\n\t\t\t\t.opacity-25 { opacity: .25 !important; }\r\n\t\t\t\t.opacity-50 { opacity: .5 !important; }\r\n\t\t\t\t.opacity-75 { opacity: .75 !important; }\r\n\t\t\t\t.opacity-100 { opacity: 1 !important; }\r\n\r\n\t\t\t\t@media (min-width: 576px) {\r\n\t\t\t\t.opacity-sm-0 { opacity: 0 !important; }\r\n\t\t\t\t.opacity-sm-25 { opacity: .25 !important; }\r\n\t\t\t\t.opacity-sm-50 { opacity: .5 !important; }\r\n\t\t\t\t.opacity-sm-75 { opacity: .75 !important; }\r\n\t\t\t\t.opacity-sm-100 { opacity: 1 !important; }\r\n\t\t\t\t}\r\n\r\n\t\t\t\t@media (min-width: 768px) {\r\n\t\t\t\t.opacity-md-0 { opacity: 0 !important; }\r\n\t\t\t\t.opacity-md-25 { opacity: .25 !important; }\r\n\t\t\t\t.opacity-md-50 { opacity: .5 !important; }\r\n\t\t\t\t.opacity-md-75 { opacity: .75 !important; }\r\n\t\t\t\t.opacity-md-100 { opacity: 1 !important; }\r\n\t\t\t\t}\r\n\r\n\t\t\t\t@media (min-width: 992px) {\r\n\t\t\t\t.opacity-lg-0 { opacity: 0 !important; }\r\n\t\t\t\t.opacity-lg-25 { opacity: .25 !important; }\r\n\t\t\t\t.opacity-lg-50 { opacity: .5 !important; }\r\n\t\t\t\t.opacity-lg-75 { opacity: .75 !important; }\r\n\t\t\t\t.opacity-lg-100 { opacity: 1 !important; }\r\n\t\t\t\t}\r\n\r\n\t\t\t\t@media (min-width: 1200px) {\r\n\t\t\t\t.opacity-xl-0 { opacity: 0 !important; }\r\n\t\t\t\t.opacity-xl-25 { opacity: .25 !important; }\r\n\t\t\t\t.opacity-xl-50 { opacity: .5 !important; }\r\n\t\t\t\t.opacity-xl-75 { opacity: .75 !important; }\r\n\t\t\t\t.opacity-xl-100 { opacity: 1 !important; }\r\n\t\t\t\t}\r\n\r\n\t\t\t\t@media (min-width: 1400px) {\r\n\t\t\t\t.opacity-xxl-0 { opacity: 0 !important; }\r\n\t\t\t\t.opacity-xxl-25 { opacity: .25 !important; }\r\n\t\t\t\t.opacity-xxl-50 { opacity: .5 !important; }\r\n\t\t\t\t.opacity-xxl-75 { opacity: .75 !important; }\r\n\t\t\t\t.opacity-xxl-100 { opacity: 1 !important; }\r\n\t\t\t\t}\r\n\t\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.subtitle(\"Print\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"Enabling the {{print}} option will also generate utility classes for print, which are only applied within the {{@media print { ... } }}media query.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.codepreview({\n            type: \"css\",\n            code: `\r\n\t\t\t\t$utilities: (\r\n\t\t\t\t\"opacity\": (\r\n\t\t\t\t\tproperty: opacity,\r\n\t\t\t\t\tprint: true,\r\n\t\t\t\t\tvalues: (\r\n\t\t\t\t\t0: 0,\r\n\t\t\t\t\t25: .25,\r\n\t\t\t\t\t50: .5,\r\n\t\t\t\t\t75: .75,\r\n\t\t\t\t\t100: 1,\r\n\t\t\t\t\t)\r\n\t\t\t\t)\r\n\t\t\t\t);\r\n\t\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"Output:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.codepreview({\n            type: \"css\",\n            code: `\r\n\t\t\t\t.opacity-0 { opacity: 0 !important; }\r\n\t\t\t\t.opacity-25 { opacity: .25 !important; }\r\n\t\t\t\t.opacity-50 { opacity: .5 !important; }\r\n\t\t\t\t.opacity-75 { opacity: .75 !important; }\r\n\t\t\t\t.opacity-100 { opacity: 1 !important; }\r\n\r\n\t\t\t\t@media print {\r\n\t\t\t\t.opacity-print-0 { opacity: 0 !important; }\r\n\t\t\t\t.opacity-print-25 { opacity: .25 !important; }\r\n\t\t\t\t.opacity-print-50 { opacity: .5 !important; }\r\n\t\t\t\t.opacity-print-75 { opacity: .75 !important; }\r\n\t\t\t\t.opacity-print-100 { opacity: 1 !important; }\r\n\t\t\t\t}\r\n\t\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.title(\"Importance\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"All utilities generated by the API include {{!important}} to ensure they override components and modifier classes as intended. You can toggle this setting globally with the {{$enable-important-utilities}} variable (defaults to {{true}}).\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.title(\"Using the API\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"Now that you’re familiar with how the utilities API works, learn how to add your own custom classes and modify Bootstrap default utilities.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.subtitle(\"Override utilities\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"Override existing utilities by using the same key. For example, if you want additional responsive overflow utility classes, you can do this:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.codepreview({\n            type: \"css\",\n            code: `\r\n\t\t\t\t$utilities: (\r\n\t\t\t\t\"overflow\": (\r\n\t\t\t\t\tresponsive: true,\r\n\t\t\t\t\tproperty: overflow,\r\n\t\t\t\t\tvalues: visible hidden scroll auto,\r\n\t\t\t\t),\r\n\t\t\t\t);\r\n\t\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.subtitle(\"Add utilities\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"New utilities can be added to the default {{$utilities}} map with a {{map-merge}}. Make sure Bootstrap required Sass files and {{_utilities.scss}} are imported first, then use the {{map-merge}} to add your additional utilities. For example, here’s how to add a responsive {{cursor}} utility with three values.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.codepreview({\n            type: \"css\",\n            code: `\r\n\t\t\t\t@import \"bootstrap/scss/functions\";\r\n\t\t\t\t@import \"bootstrap/scss/variables\";\r\n\t\t\t\t@import \"bootstrap/scss/variables-dark\";\r\n\t\t\t\t@import \"bootstrap/scss/maps\";\r\n\t\t\t\t@import \"bootstrap/scss/mixins\";\r\n\t\t\t\t@import \"bootstrap/scss/utilities\";\r\n\r\n\t\t\t\t$utilities: map-merge(\r\n\t\t\t\t$utilities,\r\n\t\t\t\t(\r\n\t\t\t\t\t\"cursor\": (\r\n\t\t\t\t\tproperty: cursor,\r\n\t\t\t\t\tclass: cursor,\r\n\t\t\t\t\tresponsive: true,\r\n\t\t\t\t\tvalues: auto pointer grab,\r\n\t\t\t\t\t)\r\n\t\t\t\t)\r\n\t\t\t\t);\r\n\r\n\t\t\t\t@import \"bootstrap/scss/utilities/api\";\r\n\t\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.subtitle(\"Modify utilities\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"Modify existing utilities in the default {{$utilities}} map with {{map-get}} and {{map-merge}} functions. In the example below, Bootstrap’re adding an additional value to the {{width}} utilities. Start with an initial {{map-merge}} and then specify which utility you want to modify. From there, fetch the nested {{'width'}} map with {{map-get}} to access and modify the utility’s options and values.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.codepreview({\n            type: \"css\",\n            code: `\r\n\t\t\t\t@import \"bootstrap/scss/functions\";\r\n\t\t\t\t@import \"bootstrap/scss/variables\";\r\n\t\t\t\t@import \"bootstrap/scss/variables-dark\";\r\n\t\t\t\t@import \"bootstrap/scss/maps\";\r\n\t\t\t\t@import \"bootstrap/scss/mixins\";\r\n\t\t\t\t@import \"bootstrap/scss/utilities\";\r\n\r\n\t\t\t\t$utilities: map-merge(\r\n\t\t\t\t$utilities,\r\n\t\t\t\t(\r\n\t\t\t\t\t\"width\": map-merge(\r\n\t\t\t\t\tmap-get($utilities, \"width\"),\r\n\t\t\t\t\t(\r\n\t\t\t\t\t\tvalues: map-merge(\r\n\t\t\t\t\t\tmap-get(map-get($utilities, \"width\"), \"values\"),\r\n\t\t\t\t\t\t(10: 10%),\r\n\t\t\t\t\t\t),\r\n\t\t\t\t\t),\r\n\t\t\t\t\t),\r\n\t\t\t\t)\r\n\t\t\t\t);\r\n\r\n\t\t\t\t@import \"bootstrap/scss/utilities/api\";\r\n\t\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.xsubtitle(\"Enable responsive\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"You can enable responsive classes for an existing set of utilities that are not currently responsive by default. For example, to make the {{border}} classes responsive:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.codepreview({\n            type: \"css\",\n            code: `\r\n\t\t\t\t@import \"bootstrap/scss/functions\";\r\n\t\t\t\t@import \"bootstrap/scss/variables\";\r\n\t\t\t\t@import \"bootstrap/scss/variables-dark\";\r\n\t\t\t\t@import \"bootstrap/scss/maps\";\r\n\t\t\t\t@import \"bootstrap/scss/mixins\";\r\n\t\t\t\t@import \"bootstrap/scss/utilities\";\r\n\r\n\t\t\t\t$utilities: map-merge(\r\n\t\t\t\t$utilities, (\r\n\t\t\t\t\t\"border\": map-merge(\r\n\t\t\t\t\tmap-get($utilities, \"border\"),\r\n\t\t\t\t\t( responsive: true ),\r\n\t\t\t\t\t),\r\n\t\t\t\t)\r\n\t\t\t\t);\r\n\r\n\t\t\t\t@import \"bootstrap/scss/utilities/api\";\r\n\t\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"This will now generate responsive variations of {{.border}} and {{.border-0}} for each breakpoint. Your generated CSS will look like this:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.codepreview({\n            type: \"css\",\n            code: `\r\n\t\t\t\t.border { ... }\r\n\t\t\t\t.border-0 { ... }\r\n\r\n\t\t\t\t@media (min-width: 576px) {\r\n\t\t\t\t.border-sm { ... }\r\n\t\t\t\t.border-sm-0 { ... }\r\n\t\t\t\t}\r\n\r\n\t\t\t\t@media (min-width: 768px) {\r\n\t\t\t\t.border-md { ... }\r\n\t\t\t\t.border-md-0 { ... }\r\n\t\t\t\t}\r\n\r\n\t\t\t\t@media (min-width: 992px) {\r\n\t\t\t\t.border-lg { ... }\r\n\t\t\t\t.border-lg-0 { ... }\r\n\t\t\t\t}\r\n\r\n\t\t\t\t@media (min-width: 1200px) {\r\n\t\t\t\t.border-xl { ... }\r\n\t\t\t\t.border-xl-0 { ... }\r\n\t\t\t\t}\r\n\r\n\t\t\t\t@media (min-width: 1400px) {\r\n\t\t\t\t.border-xxl { ... }\r\n\t\t\t\t.border-xxl-0 { ... }\r\n\t\t\t\t}\r\n\t\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.xsubtitle(\"Rename utilities\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"Missing v4 utilities, or used to another naming convention? The utilities API can be used to override the resulting {{class}} of a given utility—for example, to rename {{.ms-*}} utilities to oldish {{.ml-*}}:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.codepreview({\n            type: \"css\",\n            code: `\r\n\t\t\t\t@import \"bootstrap/scss/functions\";\r\n\t\t\t\t@import \"bootstrap/scss/variables\";\r\n\t\t\t\t@import \"bootstrap/scss/variables-dark\";\r\n\t\t\t\t@import \"bootstrap/scss/maps\";\r\n\t\t\t\t@import \"bootstrap/scss/mixins\";\r\n\t\t\t\t@import \"bootstrap/scss/utilities\";\r\n\r\n\t\t\t\t$utilities: map-merge(\r\n\t\t\t\t$utilities, (\r\n\t\t\t\t\t\"margin-start\": map-merge(\r\n\t\t\t\t\tmap-get($utilities, \"margin-start\"),\r\n\t\t\t\t\t( class: ml ),\r\n\t\t\t\t\t),\r\n\t\t\t\t)\r\n\t\t\t\t);\r\n\r\n\t\t\t\t@import \"bootstrap/scss/utilities/api\";\r\n\t\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.subtitle(\"Remove utilities\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"Remove any of the default utilities with the {{https://sass-lang.com/documentation/modules/map#remove::map-remove() Sass function}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.codepreview({\n            type: \"css\",\n            code: `\r\n\t\t\t\t@import \"bootstrap/scss/functions\";\r\n\t\t\t\t@import \"bootstrap/scss/variables\";\r\n\t\t\t\t@import \"bootstrap/scss/variables-dark\";\r\n\t\t\t\t@import \"bootstrap/scss/maps\";\r\n\t\t\t\t@import \"bootstrap/scss/mixins\";\r\n\t\t\t\t@import \"bootstrap/scss/utilities\";\r\n\r\n\t\t\t\t// Remove multiple utilities with a comma-separated list\r\n\t\t\t\t$utilities: map-remove($utilities, \"width\", \"float\");\r\n\r\n\t\t\t\t@import \"bootstrap/scss/utilities/api\";\r\n\t\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"You can also use the {{https://sass-lang.com/documentation/modules/map#merge::map-merge() Sass function}} and set the group key to {{null}} to remove the utility.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.codepreview({\n            type: \"css\",\n            code: `\r\n\t\t\t\t@import \"bootstrap/scss/functions\";\r\n\t\t\t\t@import \"bootstrap/scss/variables\";\r\n\t\t\t\t@import \"bootstrap/scss/variables-dark\";\r\n\t\t\t\t@import \"bootstrap/scss/maps\";\r\n\t\t\t\t@import \"bootstrap/scss/mixins\";\r\n\t\t\t\t@import \"bootstrap/scss/utilities\";\r\n\r\n\t\t\t\t$utilities: map-merge(\r\n\t\t\t\t$utilities,\r\n\t\t\t\t(\r\n\t\t\t\t\t\"width\": null\r\n\t\t\t\t)\r\n\t\t\t\t);\r\n\r\n\t\t\t\t@import \"bootstrap/scss/utilities/api\";\r\n\t\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.subtitle(\"Add, remove, modify\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"You can add, remove, and modify many utilities all at once with the {{https://sass-lang.com/documentation/modules/map#merge::map-merge() Sass function}}. Here’s how you can combine the previous examples into one larger map.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.codepreview({\n            type: \"css\",\n            code: `\r\n\t\t\t\t@import \"bootstrap/scss/functions\";\r\n\t\t\t\t@import \"bootstrap/scss/variables\";\r\n\t\t\t\t@import \"bootstrap/scss/variables-dark\";\r\n\t\t\t\t@import \"bootstrap/scss/maps\";\r\n\t\t\t\t@import \"bootstrap/scss/mixins\";\r\n\t\t\t\t@import \"bootstrap/scss/utilities\";\r\n\r\n\t\t\t\t$utilities: map-merge(\r\n\t\t\t\t$utilities,\r\n\t\t\t\t(\r\n\t\t\t\t\t// Remove the 'width' utility\r\n\t\t\t\t\t\"width\": null,\r\n\r\n\t\t\t\t\t// Make an existing utility responsive\r\n\t\t\t\t\t\"border\": map-merge(\r\n\t\t\t\t\tmap-get($utilities, \"border\"),\r\n\t\t\t\t\t( responsive: true ),\r\n\t\t\t\t\t),\r\n\r\n\t\t\t\t\t// Add new utilities\r\n\t\t\t\t\t\"cursor\": (\r\n\t\t\t\t\tproperty: cursor,\r\n\t\t\t\t\tclass: cursor,\r\n\t\t\t\t\tresponsive: true,\r\n\t\t\t\t\tvalues: auto pointer grab,\r\n\t\t\t\t\t)\r\n\t\t\t\t)\r\n\t\t\t\t);\r\n\r\n\t\t\t\t@import \"bootstrap/scss/utilities/api\";\r\n\t\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.xsubtitle(\"Remove utility in RTL\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"Some edge cases make {{https://rtlstyling.com/posts/rtl-styling#common-things-that-might-not-work-for-rtl::RTL styling difficult}}, such as line breaks in Arabic. Thus utilities can be dropped from RTL output by setting the {{rtl}} option to {{false}}:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.codepreview({\n            type: \"css\",\n            code: `\r\n\t\t\t\t$utilities: (\r\n\t\t\t\t\"word-wrap\": (\r\n\t\t\t\t\tproperty: word-wrap word-break,\r\n\t\t\t\t\tclass: text,\r\n\t\t\t\t\tvalues: (break: break-word),\r\n\t\t\t\t\trtl: false\r\n\t\t\t\t),\r\n\t\t\t\t);\r\n\t\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"Output:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.codepreview({\n            type: \"css\",\n            code: `\r\n\t\t\t\t/* rtl:begin:remove */\r\n\t\t\t\t.text-break {\r\n\t\t\t\tword-wrap: break-word !important;\r\n\t\t\t\tword-break: break-word !important;\r\n\t\t\t\t}\r\n\t\t\t\t/* rtl:end:remove */\r\n\t\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_0__.text(\"This doesn’t output anything in RTL, thanks to {{https://rtlcss.com/learn/usage-guide/control-directives/#remove::the RTLCSS remove control directive}}.\"),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/utilities/api.js?");

/***/ })

}]);