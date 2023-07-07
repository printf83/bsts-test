"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_components_badge_js"],{

/***/ "./lib/docs/components/badge.js":
/*!**************************************!*\
  !*** ./lib/docs/components/badge.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   badge: () => (/* binding */ badge)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst badge = {\n    title: \"Badges\",\n    description: \"Documentation and examples for badges, Bootstrap small count and labeling component.\",\n    item: () => {\n        return [\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Examples\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Badges ({{b.badge}}) scale to match the size of the immediate parent element by using relative font sizing and {{em}} units. As of v5, badges no longer have focus or hover styles for links.\"),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Headings\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return [1, 2, 3, 4, 5, 6].map((i) => {\n                            return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(i, [\n                                \"Example heading \",\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.badge({ bgColor: \"secondary\" }, \"New\"),\n                            ]);\n                        });\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Buttons\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Badges can be used as part of links or buttons to provide a counter.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button([\"Notification \", new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.badge({ bgColor: \"secondary\" }, \"4\")]);\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link, or button.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Unless the context is clear (as with the “Notifications” example, where it is understood that the “4” is the number of notifications), consider including additional context with a visually hidden piece of additional text.\"),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Positioned\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use utilities to modify a {{b.badge}} and position it in the corner of a link or button.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ position: \"relative\" }, [\n                            \"Inbox \",\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.badge({\n                                bgColor: \"danger\",\n                                position: \"absolute\",\n                                top: 0,\n                                start: 100,\n                                tMiddle: true,\n                                rounded: \"pill\",\n                            }, [\"99+\", new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.visuallyhidden(\"unread messages\")]),\n                        ]);\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"You can also replace the {{b.badge}} component with a few more utilities without a count for a more generic indicator.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ position: \"relative\" }, [\n                            \"Profile \",\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.badge({\n                                bgColor: \"danger\",\n                                position: \"absolute\",\n                                top: 0,\n                                start: 100,\n                                tMiddle: true,\n                                rounded: \"circle\",\n                                border: true,\n                                borderColor: \"light\",\n                                padding: 2,\n                            }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.visuallyhidden(\"New alerts\")),\n                        ]);\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Background colors\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Set a {{bgColor}} with contrasting foreground {{textColor}} with {{nav:docs/helpers/color_background::textBgColor:<color> property}}. Previously it was required to manually pair your choice of {{nav:docs/utilities/colors::textColor:<color> }}and {{nav:docs/utilities/background::bgColor:<color> }}utilities for styling, which you still may use if you prefer.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    outputAttr: { display: \"flex\", flex: \"wrap\", gap: 2 },\n                    output: () => {\n                        return [\"primary\", \"secondary\", \"success\", \"danger\", \"warning\", \"info\", \"light\", \"dark\"].map((i) => {\n                            return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.badge({ textBgColor: i }, _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.uppercaseFirst(i));\n                        });\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"info\", callout: true }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(5, \"Conveying meaning to assistive technologies\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the {{visually:'hidden'}} property.\"),\n                ]),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Pill badges\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use the {{rounded:'pill'}} property to make badges more rounded with a larger {{border-radius}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    outputAttr: { display: \"flex\", flex: \"wrap\", gap: 2 },\n                    output: () => {\n                        return [\"primary\", \"secondary\", \"success\", \"danger\", \"warning\", \"info\", \"light\", \"dark\"].map((i) => {\n                            return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.badge({ textBgColor: i, rounded: \"pill\" }, _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.uppercaseFirst(i));\n                        });\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"CSS\")]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Variables\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"As part of Bootstrap’s evolving CSS variables approach, badges now use local CSS variables on {{.badge}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"css\",\n                    title: \"scss/_badge.scss\",\n                    source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_badge.scss\",\n                    code: `\n\t\t\t\t\t\t--#{$prefix}badge-padding-x: #{$badge-padding-x};\n\t\t\t\t\t\t--#{$prefix}badge-padding-y: #{$badge-padding-y};\n\t\t\t\t\t\t@include rfs($badge-font-size, --#{$prefix}badge-font-size);\n\t\t\t\t\t\t--#{$prefix}badge-font-weight: #{$badge-font-weight};\n\t\t\t\t\t\t--#{$prefix}badge-color: #{$badge-color};\n\t\t\t\t\t\t--#{$prefix}badge-border-radius: #{$badge-border-radius};\n\t\t\t\t\t`,\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass variables\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"css\",\n                    title: \"scss/_variables.scss\",\n                    source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n                    code: `\n\t\t\t\t\t\t$badge-font-size:                   .75em;\n\t\t\t\t\t\t$badge-font-weight:                 $font-weight-bold;\n\t\t\t\t\t\t$badge-color:                       $white;\n\t\t\t\t\t\t$badge-padding-y:                   .35em;\n\t\t\t\t\t\t$badge-padding-x:                   .65em;\n\t\t\t\t\t\t$badge-border-radius:               $border-radius;\n\t\t\t\t\t`,\n                }),\n            ]),\n        ];\n    },\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/components/badge.js?");

/***/ })

}]);