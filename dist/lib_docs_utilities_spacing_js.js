"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_utilities_spacing_js"],{

/***/ "./lib/docs/utilities/spacing.js":
/*!***************************************!*\
  !*** ./lib/docs/utilities/spacing.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   spacing: () => (/* binding */ spacing)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst spacing = {\n    title: \"Spacing\",\n    description: \"Bootstrap includes a wide range of shorthand responsive margin, padding, and gap utility classes to modify an element’s appearance.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Margin and padding\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Assign responsive-friendly {{margin}} or {{padding}} values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are built from a default Sass map ranging from {{.25rem}} to {{3rem}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"info\", callout: true }, \"{{b::Using the CSS Grid layout module?}} Consider using {{nav:docs/utilities/spacing#gap::the gap utility}} instead.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Notation\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Spacing utilities that apply to all breakpoints, from {{xs}} to {{xxl}}, have no breakpoint abbreviation in them. This is because those classes are applied from {{min-width: 0}} and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"The classes are named using the format{{ {property}{sides}-{size} }}for {{xs}} and{{ {property}{sides}-{breakpoint}-{size} }}for {{sm}}, {{md}}, {{lg}}, {{xl}}, and {{xxl}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Where {{i::property}} is one of:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\"{{m}} - for classes that set {{margin}}\", \"{{p}} - for classes that set {{padding}}\"],\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Where {{i::sides}} is one of:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\n                \"{{t}} - for classes that set {{margin-top}} or {{padding-top}}\",\n                \"{{b}} - for classes that set {{margin-bottom}} or {{padding-bottom}}\",\n                \"{{s}} - (start) for classes that set {{margin-left}} or {{padding-left}} in LTR, {{margin-right}} or {{padding-right}} in RTL\",\n                \"{{e}} - (end) for classes that set {{margin-right}} or {{padding-right}} in LTR, {{margin-left}} or {{padding-left}} in RTL\",\n                \"{{x}} - for classes that set both {{*-left}} and {{*-right}}\",\n                \"{{y}} - for classes that set both {{*-top}} and {{*-bottom}}\",\n                \"blank - for classes that set a {{margin}} or {{padding}} on all 4 sides of the element\",\n            ],\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Where {{i::size}} is one of:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\n                \"{{0}} - for classes that eliminate the {{margin}} or {{padding}} by setting it to {{0}}\",\n                \"{{1}} - (by default) for classes that set the {{margin}} or {{padding}} to {{$spacer * .25}}\",\n                \"{{2}} - (by default) for classes that set the {{margin}} or {{padding}} to {{$spacer * .5}}\",\n                \"{{3}} - (by default) for classes that set the {{margin}} or {{padding}} to {{$spacer}}\",\n                \"{{4}} - (by default) for classes that set the {{margin}} or {{padding}} to {{$spacer * 1.5}}\",\n                \"{{5}} - (by default) for classes that set the {{margin}} or {{padding}} to {{$spacer * 3}}\",\n                \"{{auto}} - for classes that set the {{margin}} to auto\",\n            ],\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"(You can add more sizes by adding entries to the {{$spacers}} Sass map variable.)\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Examples\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Here are some representative examples of these classes:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            code: `\r\n\t\t\t\t.mt-0 {\r\n\t\t\t\tmargin-top: 0 !important;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.ms-1 {\r\n\t\t\t\tmargin-left: ($spacer * .25) !important;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.px-2 {\r\n\t\t\t\tpadding-left: ($spacer * .5) !important;\r\n\t\t\t\tpadding-right: ($spacer * .5) !important;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.p-3 {\r\n\t\t\t\tpadding: $spacer !important;\r\n\t\t\t\t}\r\n\t\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Horizontal centering\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Additionally, Bootstrap also includes an {{.mx-auto}} class for horizontally centering fixed-width block level content—that is, content that has {{display: block}} and a {{width}} set—by setting the horizontal margins to {{auto}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"flex-box\" },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ marginX: \"auto\", padding: 2, style: { width: \"200px\" } }, \"Centered element\");\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Negative margin\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"warning\", callout: true }, \"These negative margins are {{b::disabled by default}}, but can be enabled in Sass by setting {{$enable-negative-margins: true}}. Then, recompile your Sass. This features currently not supported by {{bsts}} until it enable default by Bootstrap.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"In CSS, {{margin}} properties can utilize negative values ({{padding}} cannot).\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"The syntax is nearly the same as the default, positive margin utilities, but with the addition of {{n}} before the requested size. Here’s an example class that’s the opposite of {{.mt-1}}:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            code: `\r\n\t\t\t\t.mt-n1 {\r\n\t\t\t\tmargin-top: -0.25rem !important;\r\n\t\t\t\t}\r\n\t\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"If you like to use this feature in {{bsts}}, you need to write the class manually:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"js\",\n            code: `\r\n\t\t\t\t() => {\r\n\t\t\t\t\treturn new h.div({ padding: 2, class: \"mt-n1\" }, \"Negative margin\");\r\n\t\t\t\t}\r\n\t\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Gap\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"warning\", callout: true }, \"{{b::CSS Grid is opt-in}}. Disable the default grid system by setting {{$enable-grid-classes: false}} and enable the CSS Grid by setting {{$enable-cssgrid: true}}. Then, recompile your Sass. This features currently not supported by {{bsts}} until it enable default by Bootstrap.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"When using {{display: grid}} or {{display: flex}}, you can make use of {{gap}} utilities on the parent element. This can save on having to add margin utilities to individual children of a grid or flex container. Gap utilities are responsive by default, and are generated via Bootstrap utilities API, based on the {{$spacers}} Sass map.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"html\",\n            code: `\r\n\t\t\t\t<div class=\"grid gap-3\">\r\n\t\t\t\t<div class=\"p-2 g-col-6\">Grid item 1</div>\r\n\t\t\t\t<div class=\"p-2 g-col-6\">Grid item 2</div>\r\n\t\t\t\t<div class=\"p-2 g-col-6\">Grid item 3</div>\r\n\t\t\t\t<div class=\"p-2 g-col-6\">Grid item 4</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"If you like to use this feature in {{bsts}}, you need to write the class manually:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"js\",\n            code: `\r\n\t\t\t\t() => {\r\n\t\t\t\t\treturn new h.div({ gap: 3, class: \"grid\" }, [\r\n\t\t\t\t\t\tnew h.div({ padding: 2, class: \"g-col-6\" }, \"Grid item 1\"),\r\n\t\t\t\t\t\tnew h.div({ padding: 2, class: \"g-col-6\" }, \"Grid item 2\"),\r\n\t\t\t\t\t\tnew h.div({ padding: 2, class: \"g-col-6\" }, \"Grid item 3\"),\r\n\t\t\t\t\t\tnew h.div({ padding: 2, class: \"g-col-6\" }, \"Grid item 4\"),\r\n\t\t\t\t\t]);\r\n\t\t\t\t}\r\n\t\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"row-gap\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"{{row-gap}} sets the vertical space between children items in the specified container.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"html\",\n            code: `\r\n\t\t\t\t<div class=\"grid gap-0 row-gap-3\">\r\n\t\t\t\t<div class=\"p-2 g-col-6\">Grid item 1</div>\r\n\t\t\t\t<div class=\"p-2 g-col-6\">Grid item 2</div>\r\n\t\t\t\t<div class=\"p-2 g-col-6\">Grid item 3</div>\r\n\t\t\t\t<div class=\"p-2 g-col-6\">Grid item 4</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"column-gap\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"{{column-gap}} sets the horizontal space between children items in the specified container.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"html\",\n            code: `\r\n\t\t\t\t<div class=\"grid gap-0 column-gap-3\">\r\n\t\t\t\t<div class=\"p-2 g-col-6\">Grid item 1</div>\r\n\t\t\t\t<div class=\"p-2 g-col-6\">Grid item 2</div>\r\n\t\t\t\t<div class=\"p-2 g-col-6\">Grid item 3</div>\r\n\t\t\t\t<div class=\"p-2 g-col-6\">Grid item 4</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Sass\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Maps\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Spacing utilities are declared via Sass map and then generated with Bootstrap utilities API.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss\",\n            code: `\r\n\t\t\t\t$spacer: 1rem;\r\n\t\t\t\t$spacers: (\r\n\t\t\t\t0: 0,\r\n\t\t\t\t1: $spacer * .25,\r\n\t\t\t\t2: $spacer * .5,\r\n\t\t\t\t3: $spacer,\r\n\t\t\t\t4: $spacer * 1.5,\r\n\t\t\t\t5: $spacer * 3,\r\n\t\t\t\t);\r\n\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Utilities API\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Spacing utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_utilities.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_utilities.scss\",\n            code: `\r\n\t\t\t\t\"margin\": (\r\n\t\t\t\tresponsive: true,\r\n\t\t\t\tproperty: margin,\r\n\t\t\t\tclass: m,\r\n\t\t\t\tvalues: map-merge($spacers, (auto: auto))\r\n\t\t\t\t),\r\n\t\t\t\t\"margin-x\": (\r\n\t\t\t\tresponsive: true,\r\n\t\t\t\tproperty: margin-right margin-left,\r\n\t\t\t\tclass: mx,\r\n\t\t\t\tvalues: map-merge($spacers, (auto: auto))\r\n\t\t\t\t),\r\n\t\t\t\t\"margin-y\": (\r\n\t\t\t\tresponsive: true,\r\n\t\t\t\tproperty: margin-top margin-bottom,\r\n\t\t\t\tclass: my,\r\n\t\t\t\tvalues: map-merge($spacers, (auto: auto))\r\n\t\t\t\t),\r\n\t\t\t\t\"margin-top\": (\r\n\t\t\t\tresponsive: true,\r\n\t\t\t\tproperty: margin-top,\r\n\t\t\t\tclass: mt,\r\n\t\t\t\tvalues: map-merge($spacers, (auto: auto))\r\n\t\t\t\t),\r\n\t\t\t\t\"margin-end\": (\r\n\t\t\t\tresponsive: true,\r\n\t\t\t\tproperty: margin-right,\r\n\t\t\t\tclass: me,\r\n\t\t\t\tvalues: map-merge($spacers, (auto: auto))\r\n\t\t\t\t),\r\n\t\t\t\t\"margin-bottom\": (\r\n\t\t\t\tresponsive: true,\r\n\t\t\t\tproperty: margin-bottom,\r\n\t\t\t\tclass: mb,\r\n\t\t\t\tvalues: map-merge($spacers, (auto: auto))\r\n\t\t\t\t),\r\n\t\t\t\t\"margin-start\": (\r\n\t\t\t\tresponsive: true,\r\n\t\t\t\tproperty: margin-left,\r\n\t\t\t\tclass: ms,\r\n\t\t\t\tvalues: map-merge($spacers, (auto: auto))\r\n\t\t\t\t),\r\n\t\t\t\t// Negative margin utilities\r\n\t\t\t\t\"negative-margin\": (\r\n\t\t\t\tresponsive: true,\r\n\t\t\t\tproperty: margin,\r\n\t\t\t\tclass: m,\r\n\t\t\t\tvalues: $negative-spacers\r\n\t\t\t\t),\r\n\t\t\t\t\"negative-margin-x\": (\r\n\t\t\t\tresponsive: true,\r\n\t\t\t\tproperty: margin-right margin-left,\r\n\t\t\t\tclass: mx,\r\n\t\t\t\tvalues: $negative-spacers\r\n\t\t\t\t),\r\n\t\t\t\t\"negative-margin-y\": (\r\n\t\t\t\tresponsive: true,\r\n\t\t\t\tproperty: margin-top margin-bottom,\r\n\t\t\t\tclass: my,\r\n\t\t\t\tvalues: $negative-spacers\r\n\t\t\t\t),\r\n\t\t\t\t\"negative-margin-top\": (\r\n\t\t\t\tresponsive: true,\r\n\t\t\t\tproperty: margin-top,\r\n\t\t\t\tclass: mt,\r\n\t\t\t\tvalues: $negative-spacers\r\n\t\t\t\t),\r\n\t\t\t\t\"negative-margin-end\": (\r\n\t\t\t\tresponsive: true,\r\n\t\t\t\tproperty: margin-right,\r\n\t\t\t\tclass: me,\r\n\t\t\t\tvalues: $negative-spacers\r\n\t\t\t\t),\r\n\t\t\t\t\"negative-margin-bottom\": (\r\n\t\t\t\tresponsive: true,\r\n\t\t\t\tproperty: margin-bottom,\r\n\t\t\t\tclass: mb,\r\n\t\t\t\tvalues: $negative-spacers\r\n\t\t\t\t),\r\n\t\t\t\t\"negative-margin-start\": (\r\n\t\t\t\tresponsive: true,\r\n\t\t\t\tproperty: margin-left,\r\n\t\t\t\tclass: ms,\r\n\t\t\t\tvalues: $negative-spacers\r\n\t\t\t\t),\r\n\t\t\t\t// Padding utilities\r\n\t\t\t\t\"padding\": (\r\n\t\t\t\tresponsive: true,\r\n\t\t\t\tproperty: padding,\r\n\t\t\t\tclass: p,\r\n\t\t\t\tvalues: $spacers\r\n\t\t\t\t),\r\n\t\t\t\t\"padding-x\": (\r\n\t\t\t\tresponsive: true,\r\n\t\t\t\tproperty: padding-right padding-left,\r\n\t\t\t\tclass: px,\r\n\t\t\t\tvalues: $spacers\r\n\t\t\t\t),\r\n\t\t\t\t\"padding-y\": (\r\n\t\t\t\tresponsive: true,\r\n\t\t\t\tproperty: padding-top padding-bottom,\r\n\t\t\t\tclass: py,\r\n\t\t\t\tvalues: $spacers\r\n\t\t\t\t),\r\n\t\t\t\t\"padding-top\": (\r\n\t\t\t\tresponsive: true,\r\n\t\t\t\tproperty: padding-top,\r\n\t\t\t\tclass: pt,\r\n\t\t\t\tvalues: $spacers\r\n\t\t\t\t),\r\n\t\t\t\t\"padding-end\": (\r\n\t\t\t\tresponsive: true,\r\n\t\t\t\tproperty: padding-right,\r\n\t\t\t\tclass: pe,\r\n\t\t\t\tvalues: $spacers\r\n\t\t\t\t),\r\n\t\t\t\t\"padding-bottom\": (\r\n\t\t\t\tresponsive: true,\r\n\t\t\t\tproperty: padding-bottom,\r\n\t\t\t\tclass: pb,\r\n\t\t\t\tvalues: $spacers\r\n\t\t\t\t),\r\n\t\t\t\t\"padding-start\": (\r\n\t\t\t\tresponsive: true,\r\n\t\t\t\tproperty: padding-left,\r\n\t\t\t\tclass: ps,\r\n\t\t\t\tvalues: $spacers\r\n\t\t\t\t),\r\n\t\t\t\t// Gap utility\r\n\t\t\t\t\"gap\": (\r\n\t\t\t\tresponsive: true,\r\n\t\t\t\tproperty: gap,\r\n\t\t\t\tclass: gap,\r\n\t\t\t\tvalues: $spacers\r\n\t\t\t\t),\r\n\t\t\t\t\"row-gap\": (\r\n\t\t\t\tresponsive: true,\r\n\t\t\t\tproperty: row-gap,\r\n\t\t\t\tclass: row-gap,\r\n\t\t\t\tvalues: $spacers\r\n\t\t\t\t),\r\n\t\t\t\t\"column-gap\": (\r\n\t\t\t\tresponsive: true,\r\n\t\t\t\tproperty: column-gap,\r\n\t\t\t\tclass: column-gap,\r\n\t\t\t\tvalues: $spacers\r\n\t\t\t\t),\r\n\t\t\t`,\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/utilities/spacing.js?");

/***/ })

}]);