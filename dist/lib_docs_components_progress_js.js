"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_components_progress_js"],{

/***/ "./lib/docs/components/progress.js":
/*!*****************************************!*\
  !*** ./lib/docs/components/progress.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   progress: () => (/* binding */ progress)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst progress = {\n    title: \"Progress\",\n    description: \"Documentation and examples for using Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and text labels.\",\n    item: () => {\n        return [\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"info\", callout: true }, \"{{b::New markup in v5.3.0 —}} Bootstrap’ve deprecated the previous HTML structure for progress bars and replaced it with a more accessible one. The previous structure will continue to work until v6. {{https://getbootstrap.com/docs/5.3/migration/#improved-markup-for-progress-bars::See what’s changed in Bootstrap migration guide}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"How it works\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. Bootstrap don’t use the {{https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress::HTML5 <progress> element}}, ensuring you can stack progress bars, animate them, and place text labels over them.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n                    item: [\n                        \"Bootstrap use the {{b.progress.container}} as a wrapper to indicate the max value of the progress bar.\",\n                        \"The {{b.progress.container}} wrapper automaticly get {{role:'progressbar'}} and {{aria}} attributes to make it accessible, including an accessible name (using {{label}}, {{labelledby}}, or similar).\",\n                        \"Bootstrap use the inner {{b.progress.bar}} purely for the visual bar and label.\",\n                        \"The {{b.progress.bar}} requires an inline style, utility class, or custom CSS to set its width.\",\n                        \"Bootstrap provide a special {{stacked}} property to create multiple/stacked progress bars.\",\n                    ],\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Put that all together, and you have the following examples.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    outputAttr: { display: \"flex\", flex: \"column\", gap: 3 },\n                    output: () => {\n                        return [0, 25, 50, 75, 100].map((i) => {\n                            return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.container({ label: \"Basic example\", value: i, min: 0, max: 100 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.bar({ style: { width: `${i}%` } }));\n                        });\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Or without {{b.progress.bar}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    outputAttr: { display: \"flex\", flex: \"column\", gap: 3 },\n                    output: () => {\n                        return [0, 25, 50, 75, 100].map((i) => {\n                            return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.container({\n                                label: \"Basic example\",\n                                value: i,\n                                min: 0,\n                                max: 100,\n                            });\n                        });\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Bar sizing\")]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Width\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Bootstrap provides a handful of {{nav:docs/utilities/sizing::utilities for setting width}}. Depending on your needs, these may help with quickly configuring the width of the {{b.progress.bar}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.container({ label: \"Basic example\", value: 75, min: 0, max: 100 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.bar({ width: 75 }));\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Or without {{b.progress.bar}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.container({ label: \"Basic example\", value: 75, min: 0, max: 100 });\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Height\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"You only set a {{height}} value on the {{b.progress.container}} component, so if you change that value, the inner {{b.progress.bar}} will automatically resize accordingly.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    outputAttr: { display: \"flex\", flex: \"column\", gap: 3 },\n                    output: () => {\n                        return [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.container({ label: \"Example 1px high\", value: 25, min: 0, max: 100, style: { height: \"1px\" } }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.bar({ style: { width: \"25%\" } })),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.container({ label: \"Example 20px high\", value: 25, min: 0, max: 100, style: { height: \"20px\" } }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.bar({ style: { width: \"25%\" } })),\n                        ];\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Or without {{b.progress.bar}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    outputAttr: { display: \"flex\", flex: \"column\", gap: 3 },\n                    output: () => {\n                        return [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.container({\n                                label: \"Example 1px high\",\n                                value: 25,\n                                min: 0,\n                                max: 100,\n                                style: { height: \"1px\" },\n                            }),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.container({\n                                label: \"Example 20px high\",\n                                value: 25,\n                                min: 0,\n                                max: 100,\n                                style: { height: \"20px\" },\n                            }),\n                        ];\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Labels\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Add labels to your progress bars by placing text within the {{b.progress.bar}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.container({ label: \"Example with label\", value: 25, min: 0, max: 100 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.bar({ style: { width: \"25%\" } }, \"25%\"));\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Or without {{b.progress.bar}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.container({\n                            label: \"Example with label\",\n                            value: 25,\n                            min: 0,\n                            max: 100,\n                            text: \"percent\",\n                        });\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.container({\n                            label: \"Example with label\",\n                            value: 25,\n                            min: 0,\n                            max: 100,\n                            text: \"progress\",\n                        });\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Note that by default, the content inside the {{b.progress.bar}} is controlled with {{overflow: hidden}}, so it doesn’t bleed out of the bar. If your progress bar is shorter than its label, the content will be capped and may become unreadable. To change this behavior, you can use {{overflow:'visible'}} from the {{nav:docs/utilities/overflow::overflow utilities}}, but make sure to also define an explicit {{nav:docs/utilities/colors#colors::text color}} so the text remains readable. Be aware though that currently this approach does not take into account {{https://getbootstrap.com/docs/5.3/customize/color-modes/::color modes}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.container({ label: \"Example with label\", value: 10, min: 0, max: 100 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.bar({ style: { width: \"10%\" }, overflow: \"visible\", textColor: \"dark\" }, \"Long label text for the progress bar, set to a dark color\"));\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Or without {{b.progress.bar}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.container({\n                            label: \"Example with label\",\n                            value: 10,\n                            min: 0,\n                            max: 100,\n                            text: \"Long label text for the progress bar, set to a dark color\",\n                        });\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Backgrounds\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use background utility classes to change the appearance of individual progress bars.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    outputAttr: { display: \"flex\", flex: \"column\", gap: 3 },\n                    output: () => {\n                        return [\"success\", \"info\", \"warning\", \"danger\"].map((i, ix) => {\n                            let val = [25, 50, 75, 100][ix];\n                            return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.container({ label: `${_printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.uppercaseFirst(i)} example`, value: val, min: 0, max: 100 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.bar({\n                                color: i,\n                                style: { width: `${val}%` },\n                            }));\n                        });\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Or without {{b.progress.bar}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    outputAttr: { display: \"flex\", flex: \"column\", gap: 3 },\n                    output: () => {\n                        return [\"success\", \"info\", \"warning\", \"danger\"].map((i, ix) => {\n                            let val = [25, 50, 75, 100][ix];\n                            return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.container({\n                                label: `${_printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.uppercaseFirst(i)} example`,\n                                value: val,\n                                min: 0,\n                                max: 100,\n                                color: i,\n                            });\n                        });\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"info\", callout: true }, \"{{b::Accessibility tip:}} Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies like screen readers. Please ensure the meaning is obvious from the content itself (e.g., the visible text) or is included through alternative means, such as additional text hidden with the {{visually:'hidden'}} property.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"If you’re adding labels to progress bars with a custom background color, make sure to also set an appropriate {{textColor}}, so the labels remain readable and have sufficient contrast.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    outputAttr: { display: \"flex\", flex: \"column\", gap: 3 },\n                    output: () => {\n                        return [\"success\", \"info\", \"warning\", \"danger\"].map((i, ix) => {\n                            let val = [25, 50, 75, 100][ix];\n                            let text = [\"light\", \"dark\", \"dark\", \"light\"][ix];\n                            return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.container({ label: `${_printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.uppercaseFirst(i)} example`, value: val, min: 0, max: 100 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.bar({\n                                color: i,\n                                textColor: text,\n                                style: { width: `${val}%` },\n                            }, `${val}%`));\n                        });\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Or without {{b.progress.bar}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    outputAttr: { display: \"flex\", flex: \"column\", gap: 3 },\n                    output: () => {\n                        return [\"success\", \"info\", \"warning\", \"danger\"].map((i, ix) => {\n                            let val = [25, 50, 75, 100][ix];\n                            return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.container({\n                                label: `${_printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.uppercaseFirst(i)} example`,\n                                value: val,\n                                min: 0,\n                                max: 100,\n                                color: i,\n                                text: \"percent\",\n                            });\n                        });\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Alternatively, you can use the new combined {{nav:docs/helpers/color_background::color and background}} property. Without {{b.progress.bar}} the {{textBgColor}} will be used.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    outputAttr: { display: \"flex\", flex: \"column\", gap: 3 },\n                    output: () => {\n                        return [\"success\", \"info\", \"warning\", \"danger\"].map((i, ix) => {\n                            let val = [25, 50, 75, 100][ix];\n                            return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.container({ label: `${_printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.uppercaseFirst(i)} example`, value: val, min: 0, max: 100 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.bar({\n                                textBgColor: i,\n                                style: { width: `${val}%` },\n                            }, `${val}%`));\n                        });\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Multiple bars\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"You can include multiple progress components inside a container with {{B.progress.stacked}} to create a single stacked progress bar. Note that in this case, the styling to set the visual width of the progress bar must be applied to the {{b.progress.container}} component, rather than the {{b.progress.bar}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.stacked([\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.container({\n                                label: \"Segment one\",\n                                value: 15,\n                                min: 0,\n                                max: 100,\n                                style: { width: \"15%\" },\n                            }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.bar()),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.container({\n                                label: \"Segment two\",\n                                value: 30,\n                                min: 0,\n                                max: 100,\n                                style: { width: \"30%\" },\n                            }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.bar({ color: \"success\" })),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.container({\n                                label: \"Segment three\",\n                                value: 20,\n                                min: 0,\n                                max: 100,\n                                style: { width: \"20%\" },\n                            }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.bar({ color: \"info\" })),\n                        ]);\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Or without {{b.progress.bar}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.stacked([\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.container({\n                                label: \"Segment one\",\n                                value: 15,\n                                min: 0,\n                                max: 100,\n                                stacked: true,\n                            }),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.container({\n                                label: \"Segment two\",\n                                value: 30,\n                                min: 0,\n                                max: 100,\n                                stacked: true,\n                                color: \"success\",\n                            }),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.container({\n                                label: \"Segment three\",\n                                value: 20,\n                                min: 0,\n                                max: 100,\n                                stacked: true,\n                                color: \"info\",\n                            }),\n                        ]);\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Striped\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Add {{striped:true}} to any {{b.progress.bar}} to apply a stripe via CSS gradient over the progress bar’s background color.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    outputAttr: { display: \"flex\", flex: \"column\", gap: 3 },\n                    output: () => {\n                        return [undefined, \"success\", \"info\", \"warning\", \"danger\"].map((i, ix) => {\n                            let val = [10, 25, 50, 75, 100][ix];\n                            return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.container({\n                                label: `${i ? _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.uppercaseFirst(i) : \"Default\"} striped example`,\n                                value: val,\n                                min: 0,\n                                max: 100,\n                            }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.bar({\n                                striped: true,\n                                textBgColor: i,\n                                style: { width: `${val}%` },\n                            }));\n                        });\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Or without {{b.progress.bar}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    outputAttr: { display: \"flex\", flex: \"column\", gap: 3 },\n                    output: () => {\n                        return [undefined, \"success\", \"info\", \"warning\", \"danger\"].map((i, ix) => {\n                            let val = [10, 25, 50, 75, 100][ix];\n                            return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.container({\n                                label: `${i ? _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.uppercaseFirst(i) : \"Default\"} striped example`,\n                                value: val,\n                                min: 0,\n                                max: 100,\n                                striped: true,\n                                color: i,\n                            });\n                        });\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Animated stripes\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"The striped gradient can also be animated. Add {{striped:true}} and {{animated:true}} togather to {{b.progress.bar}} to animate the stripes right to left via CSS3 animations.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.container({\n                            label: `Animated striped example`,\n                            value: 75,\n                            min: 0,\n                            max: 100,\n                        }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.bar({\n                            striped: true,\n                            animated: true,\n                            style: { width: `75%` },\n                        }));\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Or without {{b.progress.bar}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.progress.container({\n                            label: `Animated striped example`,\n                            value: 75,\n                            min: 0,\n                            max: 100,\n                            striped: true,\n                            animated: true,\n                        });\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"CSS\")]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Variables\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"As part of Bootstrap’s evolving CSS variables approach, progress bars now use local CSS variables on {{.progress}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"css\",\n                    title: \"scss/_progress.scss\",\n                    source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_progress.scss\",\n                    code: `\n\t\t\t\t\t\t--#{$prefix}progress-height: #{$progress-height};\n\t\t\t\t\t\t@include rfs($progress-font-size, --#{$prefix}progress-font-size);\n\t\t\t\t\t\t--#{$prefix}progress-bg: #{$progress-bg};\n\t\t\t\t\t\t--#{$prefix}progress-border-radius: #{$progress-border-radius};\n\t\t\t\t\t\t--#{$prefix}progress-box-shadow: #{$progress-box-shadow};\n\t\t\t\t\t\t--#{$prefix}progress-bar-color: #{$progress-bar-color};\n\t\t\t\t\t\t--#{$prefix}progress-bar-bg: #{$progress-bar-bg};\n\t\t\t\t\t\t--#{$prefix}progress-bar-transition: #{$progress-bar-transition};\n\t\t\t\t\t`,\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass variables\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"As part of Bootstrap’s evolving CSS variables approach, progress bars now use local CSS variables on {{.progress}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"css\",\n                    title: \"scss/_variables.scss\",\n                    source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n                    code: `\n\t\t\t\t\t\t$progress-height:                   1rem;\n\t\t\t\t\t\t$progress-font-size:                $font-size-base * .75;\n\t\t\t\t\t\t$progress-bg:                       var(--#{$prefix}secondary-bg);\n\t\t\t\t\t\t$progress-border-radius:            var(--#{$prefix}border-radius);\n\t\t\t\t\t\t$progress-box-shadow:               var(--#{$prefix}box-shadow-inset);\n\t\t\t\t\t\t$progress-bar-color:                $white;\n\t\t\t\t\t\t$progress-bar-bg:                   $primary;\n\t\t\t\t\t\t$progress-bar-animation-timing:     1s linear infinite;\n\t\t\t\t\t\t$progress-bar-transition:           width .6s ease;\n\t\t\t\t\t`,\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Keyframes\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Used for creating the CSS animations for {{.progress-bar-animated}}. Included in {{scss/_progress-bar.scss}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"css\",\n                    title: \"scss/_progress.scss\",\n                    source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_progress.scss\",\n                    code: `\n\t\t\t\t\t\t@if $enable-transitions {\n\t\t\t\t\t\t@keyframes progress-bar-stripes {\n\t\t\t\t\t\t\t0% { background-position-x: $progress-height; }\n\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t`,\n                }),\n            ]),\n        ];\n    },\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/components/progress.js?");

/***/ })

}]);