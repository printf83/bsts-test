"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_components_spinner_js"],{

/***/ "./lib/docs/components/spinner.js":
/*!****************************************!*\
  !*** ./lib/docs/components/spinner.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   spinner: () => (/* binding */ spinner)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"./node_modules/@printf83/bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst spinner = {\n    title: \"Spinner\",\n    description: \"Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"About\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Bootstrap “spinners” can be used to show the loading state in your projects. They’re built only with HTML and CSS, meaning you don’t need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, alignment, and sizing can be easily customized with Bootstrap amazing utility classes.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"For accessibility purposes, each loader includes {{role:'status'}} and a nested {{h.span({visually:'hidden'},'Loading...')}} automaticly by {{b.spinner}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"info\", callout: true }, \"The animation effect of this component is dependent on the {{prefers-reduced-motion}} media query. See the {{https://getbootstrap.com/docs/5.3/getting-started/accessibility/#reduced-motion::reduced motion section of Bootstrap accessibility documentation}}.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Border spinner\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use the border spinners for a lightweight loading indicator.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.spinner({ type: \"border\" });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Colors\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"The border spinner uses {{currentColor}} for its {{borderColor}}, meaning you can customize the color with text color utilities. You can use any of Bootstrap {{nav:docs/utilities/colors::text color utilities}} on the standard spinner.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { gap: 1 },\n            output: () => {\n                return [\"primary\", \"secondary\", \"success\", \"danger\", \"warning\", \"info\", \"light\", \"dark\"].map((i) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.spinner({ type: \"border\", color: i });\n                });\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"info\", callout: true }, \"{{b::Why not use }}{{cb::borderColor}}{{b:: utilities?}} Each border spinner specifies a {{transparent}} border for at least one side, so {{borderColor}} utilities would override that.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Growing spinner\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"If you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it does repeatedly grow!\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.spinner({ type: \"grow\" });\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Once again, this spinner is built with {{currentColor}}, so you can easily change its appearance with {{nav:docs/utilities/colors::text color utilities}}. Here it is in blue, along with the supported variants.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { gap: 1 },\n            output: () => {\n                return [\"primary\", \"secondary\", \"success\", \"danger\", \"warning\", \"info\", \"light\", \"dark\"].map((i) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.spinner({ type: \"grow\", color: i });\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Alignment\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use margin utilities like {{margin:5}} for easy spacing.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Margin\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Spinners in Bootstrap are built with {{rems}}, {{currentColor}}, and {{display:'inline-flex'}}. This means they can easily be resized, recolored, and quickly aligned.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.spinner({ type: \"border\", margin: 5 });\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"info\", callout: true }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(5, \"Conveying meaning to assistive technologies\"),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the {{visually:'hidden'}} property.\"),\n        ]),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Placement\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use {{nav:docs/utilities/flex::flexbox utilities}}, {{nav:docs/utilities/float::float utilities}}, or {{nav:docs/utilities/text::text alignment}} utilities to place spinners exactly where you need them in any situation.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.xsubtitle(\"Flex\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.spinner({ type: \"border\", display: \"flex\", justifyContent: \"center\" });\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\", alignItem: \"center\" }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.strong(\"Loading...\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.spinner({ type: \"border\", marginStart: \"auto\" }, \"\"),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.xsubtitle(\"Floats\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ clearfix: true }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.spinner({ type: \"border\", float: \"end\" }));\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.xsubtitle(\"Text align\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ textAlign: \"center\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.spinner({ type: \"border\" }));\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Size\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Add {{small:true}} to make a smaller spinner that can quickly be used within other components.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { gap: 1 },\n            output: () => {\n                return [new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.spinner({ type: \"border\", small: true }), new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.spinner({ type: \"grow\", small: true })];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Or, use custom CSS or inline styles to change the dimensions as needed.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { gap: 1 },\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.spinner({ style: { width: \"3rem\", height: \"3rem\" }, type: \"border\" }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.spinner({ style: { width: \"3rem\", height: \"3rem\" }, type: \"grow\" }),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Buttons\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { gap: 1 },\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ disabled: true }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.spinner({ type: \"border\", small: true }, \"\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.visuallyhidden(\"Loading...\"),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ disabled: true }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.spinner({ type: \"border\", small: true }, \"\"),\n                        \" Loading...\",\n                    ]),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { gap: 1 },\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ disabled: true }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.spinner({ type: \"grow\", small: true }, \"\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.visuallyhidden(\"Loading...\"),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ disabled: true }, [new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.spinner({ type: \"grow\", small: true }, \"\"), \" Loading...\"]),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Buttons with label\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { gap: 1 },\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ disabled: true }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ iconPosition: \"end\", icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.spinner({ type: \"border\", small: true }, \"\") }, \"Loading\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ disabled: true }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.spinner({ type: \"border\", small: true }, \"\") }, \"Loading\")),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { gap: 1 },\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ disabled: true }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ iconPosition: \"end\", icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.spinner({ type: \"grow\", small: true }, \"\") }, \"Loading\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ disabled: true }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.spinner({ type: \"grow\", small: true }, \"\") }, \"Loading\")),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"CSS\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Variables\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"As part of Bootstrap’s evolving CSS variables approach, spinners now use local CSS variables on {{.spinner-border}} and {{.spinner-grow}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Border spinner variables:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_spinners.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_spinners.scss\",\n            code: `\r\n\t\t\t\t--#{$prefix}spinner-width: #{$spinner-width};\r\n\t\t\t\t--#{$prefix}spinner-height: #{$spinner-height};\r\n\t\t\t\t--#{$prefix}spinner-vertical-align: #{$spinner-vertical-align};\r\n\t\t\t\t--#{$prefix}spinner-border-width: #{$spinner-border-width};\r\n\t\t\t\t--#{$prefix}spinner-animation-speed: #{$spinner-animation-speed};\r\n\t\t\t\t--#{$prefix}spinner-animation-name: spinner-border;\r\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Growing spinner variables:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_spinners.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_spinners.scss\",\n            code: `\r\n\t\t\t\t--#{$prefix}spinner-width: #{$spinner-width};\r\n\t\t\t\t--#{$prefix}spinner-height: #{$spinner-height};\r\n\t\t\t\t--#{$prefix}spinner-vertical-align: #{$spinner-vertical-align};\r\n\t\t\t\t--#{$prefix}spinner-animation-speed: #{$spinner-animation-speed};\r\n\t\t\t\t--#{$prefix}spinner-animation-name: spinner-grow;\r\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"For both spinners, small spinner modifier classes are used to update the values of these CSS variables as needed. For example, the {{.spinner-border-sm}} class does the following:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_spinners.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_spinners.scss\",\n            code: `\r\n\t\t\t\t--#{$prefix}spinner-width: #{$spinner-width-sm};\r\n\t\t\t\t--#{$prefix}spinner-height: #{$spinner-height-sm};\r\n\t\t\t\t--#{$prefix}spinner-border-width: #{$spinner-border-width-sm};\r\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass variables\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n            code: `\r\n\t\t\t\t$spinner-width:           2rem;\r\n\t\t\t\t$spinner-height:          $spinner-width;\r\n\t\t\t\t$spinner-vertical-align:  -.125em;\r\n\t\t\t\t$spinner-border-width:    .25em;\r\n\t\t\t\t$spinner-animation-speed: .75s;\r\n\r\n\t\t\t\t$spinner-width-sm:        1rem;\r\n\t\t\t\t$spinner-height-sm:       $spinner-width-sm;\r\n\t\t\t\t$spinner-border-width-sm: .2em;\r\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Keyframes\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Used for creating the CSS animations for Bootstrap spinners. Included in {{scss/_spinners.scss}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_spinners.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_spinners.scss\",\n            code: `\r\n\t\t\t\t@keyframes spinner-border {\r\n\t\t\t\tto { transform: rotate(360deg) #{\"/* rtl:ignore */\"}; }\r\n\t\t\t\t}\r\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_spinners.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_spinners.scss\",\n            code: `\r\n\t\t\t\t@keyframes spinner-grow {\r\n\t\t\t\t\t0% {\r\n\t\t\t\t\t\ttransform: scale(0);\r\n\t\t\t\t\t}\r\n\t\t\t\t\t50% {\r\n\t\t\t\t\t\topacity: 1;\r\n\t\t\t\t\t\ttransform: none;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t`,\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/components/spinner.js?");

/***/ })

}]);