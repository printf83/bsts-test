"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_components_placeholder_js"],{

/***/ "./lib/docs/components/placeholder.js":
/*!********************************************!*\
  !*** ./lib/docs/components/placeholder.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   placeholder: () => (/* binding */ placeholder)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"./node_modules/@printf83/bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst placeholder = {\n    title: \"Placeholder\",\n    description: \"Use loading placeholders for your components or pages to indicate something may still be loading.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"About\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Placeholders can be used to enhance the experience of your application. They’re built only with HTML and CSS, meaning you don’t need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, color, and sizing can be easily customized with Bootstrap utility classes.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Example\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"In the example below, Bootstrap take a typical card component and recreate it with placeholders applied to create a “loading card”. Size and proportions are the same between the two.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            manager: (item) => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true }, item.map((i) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: [12, \"md-6\"], paddingY: 3 }, i);\n                }));\n            },\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.container([\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ class: \"card-img-top\", bgColor: \"primary\", style: { height: \"180px\" } }),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.body([\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.title(\"Card title\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.text(\"Some quick example text to build on the card title and make up the bulk of the card's content.\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button(\"Go somewhere\"),\n                        ]),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.container([\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ class: \"card-img-top\", bgColor: \"secondary\", style: { height: \"180px\" } }),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.body([\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.title({ loadingPlaceholderAnimation: \"glow\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({ loadingPlaceholder: true, col: 6 }, \" \")),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.text({ loadingPlaceholderAnimation: \"glow\" }, [\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({ loadingPlaceholder: true, col: 7, marginEnd: 1 }, \" \"),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({ loadingPlaceholder: true, col: 4, marginEnd: 1 }, \" \"),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({ loadingPlaceholder: true, col: 4, marginEnd: 1 }, \" \"),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({ loadingPlaceholder: true, col: 6, marginEnd: 1 }, \" \"),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({ loadingPlaceholder: true, col: 8 }, \" \"),\n                            ]),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ loadingPlaceholder: true, col: 6, disabled: true }, \" \"),\n                        ]),\n                    ]),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"How it works\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Create placeholders with the {{loadingPlaceholder:true}} property and a grid column property (e.g., {{col:6}}) to set the {{width}}. They can replace the text inside an element or be added as a modifier class to an existing component.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Bootstrap apply additional styling to {{b.button}}s via {{/://:/before}} to ensure the {{height}} is respected. You may extend this pattern for other situations as needed, or add a {{empty string}} within the element to reflect the height when actual text is rendered in its place.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ aria: { hidden: true } }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({ loadingPlaceholder: true, col: 6 }, \" \")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"primary\", disabled: true, loadingPlaceholder: true, col: 4 }),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"info\", callout: true }, \" The use of {{aria:{hidden:'true'} }}only indicates that the element should be hidden to screen readers. The loading behavior of the placeholder depends on how authors will actually use the placeholder styles, how they plan to update things, etc. Some JavaScript code may be needed to swap the state of the placeholder and inform AT users of the update.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Width\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"You can change the {{width}} through grid column propertu, width utilities, or inline styles.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({ loadingPlaceholder: true, col: 6 }, \" \"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({ loadingPlaceholder: true, width: 75 }, \" \"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({ loadingPlaceholder: true, style: { width: \"30%\" } }, \" \"),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Colors\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"By default, the {{placeholder}} uses {{currentColor}}. This can be overridden with a custom color or utility property.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            manager: (item) => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, gutter: 2 }, item);\n            },\n            output: () => {\n                return [undefined, \"primary\", \"secondary\", \"success\", \"danger\", \"warning\", \"info\", \"light\", \"dark\"].map((i) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({ bgColor: i, col: 12, loadingPlaceholder: true }, \" \");\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sizing\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"The size of {{placeholders}} are based on the typographic style of the parent element. Customize them with sizing modifiers: {{placeholderWeight:'lg'}}, {{placeholderWeight:'sm'}}, or {{placeholderWeight:'xs'}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            manager: (item) => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, gutter: 2 }, item);\n            },\n            output: () => {\n                return [\"lg\", undefined, \"sm\", \"xs\"].map((i) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({\n                        col: 12,\n                        loadingPlaceholder: true,\n                        loadingPlaceholderWeight: i,\n                    }, \" \");\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Animation\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Animate placeholders with {{loadingPlaceholderAnimation:'glow'}} or {{loadingPlaceholderAnimation:'wave'}} to better convey the perception of something being {{i::actively}} loaded.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\"glow\", \"wave\"].map((i) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ loadingPlaceholderAnimation: i }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({\n                        col: 12,\n                        loadingPlaceholder: true,\n                    }, \" \"));\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"CSS\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Variables\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss\",\n            code: `\r\n\t\t\t\t$placeholder-opacity-max:           .5;\r\n\t\t\t\t$placeholder-opacity-min:           .2;\r\n\t\t\t`,\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/components/placeholder.js?");

/***/ })

}]);