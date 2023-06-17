"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_components_breadcrumb_js"],{

/***/ "./lib/docs/components/breadcrumb.js":
/*!*******************************************!*\
  !*** ./lib/docs/components/breadcrumb.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   breadcrumb: () => (/* binding */ breadcrumb)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst breadcrumb = {\n    title: \"Breadcrumb\",\n    description: \"Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Example\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use an ordered or unordered list with linked list items to create a minimally styled breadcrumb ({{b.breadcrumb.container}}). Use Bootstrap utilities to add additional styles as desired.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [[\"Home\"], [\"Home\", \"Library\"], [\"Home\", \"Library\", \"Data\"]].map((i) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.breadcrumb.container({ label: \"breadcrumb\" }, i.map((j, jx) => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.breadcrumb.item({ active: jx === i.length - 1, href: \"#\" }, j);\n                    }));\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Using item\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.breadcrumb.container({\n                    label: \"breadcrumb\",\n                    item: [\n                        { href: \"#\", elem: \"Home\" },\n                        { href: \"#\", elem: \"Library\" },\n                        { href: \"#\", elem: \"Data\" },\n                    ],\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Dividers\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Dividers are automatically added in CSS through {{https://developer.mozilla.org/en-US/docs/Web/CSS/::before}} and {{https://developer.mozilla.org/en-US/docs/Web/CSS/content::content}}. They can be changed by modifying the {{divider: '<divide>'}} property, or through the {{$breadcrumb-divider}} Sass variable — and {{$breadcrumb-divider-flipped}} for its RTL counterpart, if needed. Bootstrap default to Bootstrap Sass variable, which is set as a fallback to the custom property. This way, you get a global divider that you can override without recompiling CSS at any time.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.breadcrumb.container({\n                    label: \"breadcrumb\",\n                    divider: \"'>'\",\n                    item: [\n                        { href: \"#\", elem: \"Home\" },\n                        { href: \"#\", elem: \"Library\" },\n                        { href: \"#\", elem: \"Data\" },\n                    ],\n                });\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"When modifying via Sass, the {{https://sass-lang.com/documentation/modules/string#quote::quote}} function is required to generate the quotes around a string. For example, using {{>}} as the divider, you can use this:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            code: `\n\t\t\t\t$breadcrumb-divider: quote(\">\");\n\t\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"It’s also possible to use an {{b::embedded SVG icon}}. Apply it via Bootstrap CSS custom property, or use the Sass variable.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"info\", callout: true }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(5, \"Using embedded SVG\"),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"Inlining SVG as data URI requires to URL escape a few characters, most notably {{<}}, {{>}} and {{#}}. That’s why the {{$breadcrumb-divider}} variable is passed through Bootstrap {{https://getbootstrap.com/docs/5.3/customize/sass/#escape-svg::escape-svg() Sass function}}. When using the CSS custom property, you need to URL escape your SVG on your own. Read {{https://codepen.io/kevinweber/pen/dXWoRw::Kevin Weber’s explanations on CodePen}} for detailed information on what to escape. \"),\n        ]),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.breadcrumb.container({\n                    label: \"breadcrumb\",\n                    divider: \"url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);\",\n                    item: [\n                        { href: \"#\", elem: \"Home\" },\n                        { href: \"#\", elem: \"Library\" },\n                        { href: \"#\", elem: \"Data\" },\n                    ],\n                });\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            code: `\n\t\t\t\t$breadcrumb-divider: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8'><path d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='#{$breadcrumb-divider-color}'/></svg>\");\n\t\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"You can also remove the divider setting {{divider: ''}} (empty strings as a value), or setting the Sass variable to {{$breadcrumb-divider: none;}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.breadcrumb.container({\n                    label: \"breadcrumb\",\n                    divider: \"''\",\n                    item: [\n                        { href: \"#\", elem: \"Home\" },\n                        { href: \"#\", elem: \"Library\" },\n                        { href: \"#\", elem: \"Data\" },\n                    ],\n                });\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            code: `\n\t\t\t\t$breadcrumb-divider: none;\n\t\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Accessibility\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Since breadcrumbs provide a navigation, it’s a good idea to add a meaningful label such as {{label:'breadcrumb'}} to describe the type of navigation provided in the {{b.breadcrumb.container}} component, and automaticly applying an {{aria-current='page'}} to the last item of the set to indicate that it represents the current page.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"For more information, see the {{https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/::ARIA Authoring Practices Guide breadcrumb pattern}}.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"CSS\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Variables\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"As part of Bootstrap’s evolving CSS variables approach, breadcrumbs now use local CSS variables on {{.breadcrumb}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_breadcrumb.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_breadcrumb.scss\",\n            code: `\n\t\t        --#{$prefix}breadcrumb-padding-x: #{$breadcrumb-padding-x};\n\t\t\t\t--#{$prefix}breadcrumb-padding-y: #{$breadcrumb-padding-y};\n\t\t\t\t--#{$prefix}breadcrumb-margin-bottom: #{$breadcrumb-margin-bottom};\n\t\t\t\t@include rfs($breadcrumb-font-size, --#{$prefix}breadcrumb-font-size);\n\t\t\t\t--#{$prefix}breadcrumb-bg: #{$breadcrumb-bg};\n\t\t\t\t--#{$prefix}breadcrumb-border-radius: #{$breadcrumb-border-radius};\n\t\t\t\t--#{$prefix}breadcrumb-divider-color: #{$breadcrumb-divider-color};\n\t\t\t\t--#{$prefix}breadcrumb-item-padding-x: #{$breadcrumb-item-padding-x};\n\t\t\t\t--#{$prefix}breadcrumb-item-active-color: #{$breadcrumb-active-color};\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass variables\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n            code: `\n\t\t\t\t$breadcrumb-font-size:              null;\n\t\t\t\t$breadcrumb-padding-y:              0;\n\t\t\t\t$breadcrumb-padding-x:              0;\n\t\t\t\t$breadcrumb-item-padding-x:         .5rem;\n\t\t\t\t$breadcrumb-margin-bottom:          1rem;\n\t\t\t\t$breadcrumb-bg:                     null;\n\t\t\t\t$breadcrumb-divider-color:          var(--#{$prefix}secondary-color);\n\t\t\t\t$breadcrumb-active-color:           var(--#{$prefix}secondary-color);\n\t\t\t\t$breadcrumb-divider:                quote(\"/\");\n\t\t\t\t$breadcrumb-divider-flipped:        $breadcrumb-divider;\n\t\t\t\t$breadcrumb-border-radius:          null;\n\t\t\t`,\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/components/breadcrumb.js?");

/***/ })

}]);