"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_components_accordion_js"],{

/***/ "./lib/docs/components/accordion.js":
/*!******************************************!*\
  !*** ./lib/docs/components/accordion.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   accordion: () => (/* binding */ accordion)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst accordion = {\n    title: \"Accordion\",\n    description: \"Build vertically collapsing accordions in combination with Bootstrap Collapse JavaScript plugin.\",\n    item: () => {\n        return [\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"How it works\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"The accordion ({{b.accordion.container}) uses {{nav:docs/components/collapse::collapse}} internally to make it collapsible. To render an accordion that’s expanded, add the {{show:true}} property on the {{b.accordion.item}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"info\", callout: true }, \"The animation effect of this component is dependent on the {{prefers-reduced-motion}} media query. See the {{nav:docs/gettingstarted/accessibility#reduce_motion::reduced motion section of Bootstrap accessibility documentation}}. \"),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Example\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Click the accordions below to expand/collapse the accordion content.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        let mainID = _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.UUID();\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.accordion.container({ id: mainID }, [\n                            {\n                                title: \"Accordion Item #1\",\n                                elem: \"{{b::This is the first item's accordion body}}. It is shown by default, until the collapse plugin adds the appropriate classes that Bootstrap use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding Bootstrap default variables. It's also worth noting that just about any HTML can go within the {{b.accordion.body}}, though the transition does limit overflow.\",\n                                show: true,\n                            },\n                            {\n                                title: \"Accordion Item #2\",\n                                elem: \"{{b::This is the second item's accordion body}}. It is hidden by default, until the collapse plugin adds the appropriate classes that Bootstrap use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding Bootstrap default variables. It's also worth noting that just about any HTML can go within the {{b.accordion.body}}, though the transition does limit overflow.\",\n                            },\n                            {\n                                title: \"Accordion Item #3\",\n                                elem: \"{{b::This is the third item's accordion body}}. It is hidden by default, until the collapse plugin adds the appropriate classes that Bootstrap use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding Bootstrap default variables. It's also worth noting that just about any HTML can go within the {{b.accordion.body}}, though the transition does limit overflow.\",\n                            },\n                        ].map((i) => {\n                            let itemID = _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.UUID();\n                            return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.accordion.item([\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.accordion.header({\n                                    id: `heading-${itemID}`,\n                                    target: `#collapse-${itemID}`,\n                                    controlfor: `collapse-${itemID}`,\n                                    expanded: i.show,\n                                }, i.title),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.accordion.body({ id: `collapse-${itemID}`, parent: `#${mainID}`, show: i.show }, i.elem),\n                            ]);\n                        }));\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Using item\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Same as above but more easy.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.accordion.container({\n                            item: [\n                                {\n                                    title: \"Accordion Item #1\",\n                                    elem: \"{{b::This is the first item's accordion body}}. It is shown by default, until the collapse plugin adds the appropriate classes that Bootstrap use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding Bootstrap default variables. It's also worth noting that just about any HTML can go within the {{b.accordion.body}}, though the transition does limit overflow.\",\n                                    show: true,\n                                },\n                                {\n                                    title: \"Accordion Item #2\",\n                                    elem: \"{{b::This is the second item's accordion body}}. It is hidden by default, until the collapse plugin adds the appropriate classes that Bootstrap use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding Bootstrap default variables. It's also worth noting that just about any HTML can go within the {{b.accordion.body}}, though the transition does limit overflow.\",\n                                },\n                                {\n                                    title: \"Accordion Item #3\",\n                                    elem: \"{{b::This is the third item's accordion body}}. It is hidden by default, until the collapse plugin adds the appropriate classes that Bootstrap use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding Bootstrap default variables. It's also worth noting that just about any HTML can go within the {{b.accordion.body}}, though the transition does limit overflow.\",\n                                },\n                            ],\n                        });\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Flush\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Add {{flush:true}} to {{b.accordion.container}} to remove the default {{background-color}}, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.accordion.container({\n                            flush: true,\n                            item: [\n                                {\n                                    title: \"Accordion Item #1\",\n                                    elem: \"{{b::This is the first item's accordion body}}. It is shown by default, until the collapse plugin adds the appropriate classes that Bootstrap use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding Bootstrap default variables. It's also worth noting that just about any HTML can go within the {{b.accordion.body}}, though the transition does limit overflow.\",\n                                    show: true,\n                                },\n                                {\n                                    title: \"Accordion Item #2\",\n                                    elem: \"{{b::This is the second item's accordion body}}. It is hidden by default, until the collapse plugin adds the appropriate classes that Bootstrap use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding Bootstrap default variables. It's also worth noting that just about any HTML can go within the {{b.accordion.body}}, though the transition does limit overflow.\",\n                                },\n                                {\n                                    title: \"Accordion Item #3\",\n                                    elem: \"{{b::This is the third item's accordion body}}. It is hidden by default, until the collapse plugin adds the appropriate classes that Bootstrap use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding Bootstrap default variables. It's also worth noting that just about any HTML can go within the {{b.accordion.body}}, though the transition does limit overflow.\",\n                                },\n                            ],\n                        });\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Always open\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Add {{alwaysOpen:true}} to {{b.accordion.container}} to make accordion items stay open when another item is opened.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.accordion.container({\n                            alwaysOpen: true,\n                            item: [\n                                {\n                                    title: \"Accordion Item #1\",\n                                    elem: \"{{b::This is the first item's accordion body}}. It is shown by default, until the collapse plugin adds the appropriate classes that Bootstrap use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding Bootstrap default variables. It's also worth noting that just about any HTML can go within the {{b.accordion.body}}, though the transition does limit overflow.\",\n                                    show: true,\n                                },\n                                {\n                                    title: \"Accordion Item #2\",\n                                    elem: \"{{b::This is the second item's accordion body}}. It is hidden by default, until the collapse plugin adds the appropriate classes that Bootstrap use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding Bootstrap default variables. It's also worth noting that just about any HTML can go within the {{b.accordion.body}}, though the transition does limit overflow.\",\n                                },\n                                {\n                                    title: \"Accordion Item #3\",\n                                    elem: \"{{b::This is the third item's accordion body}}. It is hidden by default, until the collapse plugin adds the appropriate classes that Bootstrap use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding Bootstrap default variables. It's also worth noting that just about any HTML can go within the {{b.accordion.body}}, though the transition does limit overflow.\",\n                                },\n                            ],\n                        });\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Accessibility\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Please read the {{nav:docs/components/collapse#accessibility::collapse accessibility section}} for more information.\"),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"CSS\")]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Variables\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"As part of Bootstrap’s evolving CSS variables approach, accordions now use local CSS variables on {{.accordion}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"css\",\n                    title: \"scss/_accordion.scss\",\n                    source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_accordion.scss\",\n                    code: `\r\n\t\t\t\t\t\t--#{$prefix}accordion-color: #{$accordion-color};\r\n\t\t\t\t\t\t--#{$prefix}accordion-bg: #{$accordion-bg};\r\n\t\t\t\t\t\t--#{$prefix}accordion-transition: #{$accordion-transition};\r\n\t\t\t\t\t\t--#{$prefix}accordion-border-color: #{$accordion-border-color};\r\n\t\t\t\t\t\t--#{$prefix}accordion-border-width: #{$accordion-border-width};\r\n\t\t\t\t\t\t--#{$prefix}accordion-border-radius: #{$accordion-border-radius};\r\n\t\t\t\t\t\t--#{$prefix}accordion-inner-border-radius: #{$accordion-inner-border-radius};\r\n\t\t\t\t\t\t--#{$prefix}accordion-btn-padding-x: #{$accordion-button-padding-x};\r\n\t\t\t\t\t\t--#{$prefix}accordion-btn-padding-y: #{$accordion-button-padding-y};\r\n\t\t\t\t\t\t--#{$prefix}accordion-btn-color: #{$accordion-button-color};\r\n\t\t\t\t\t\t--#{$prefix}accordion-btn-bg: #{$accordion-button-bg};\r\n\t\t\t\t\t\t--#{$prefix}accordion-btn-icon: #{escape-svg($accordion-button-icon)};\r\n\t\t\t\t\t\t--#{$prefix}accordion-btn-icon-width: #{$accordion-icon-width};\r\n\t\t\t\t\t\t--#{$prefix}accordion-btn-icon-transform: #{$accordion-icon-transform};\r\n\t\t\t\t\t\t--#{$prefix}accordion-btn-icon-transition: #{$accordion-icon-transition};\r\n\t\t\t\t\t\t--#{$prefix}accordion-btn-active-icon: #{escape-svg($accordion-button-active-icon)};\r\n\t\t\t\t\t\t--#{$prefix}accordion-btn-focus-border-color: #{$accordion-button-focus-border-color};\r\n\t\t\t\t\t\t--#{$prefix}accordion-btn-focus-box-shadow: #{$accordion-button-focus-box-shadow};\r\n\t\t\t\t\t\t--#{$prefix}accordion-body-padding-x: #{$accordion-body-padding-x};\r\n\t\t\t\t\t\t--#{$prefix}accordion-body-padding-y: #{$accordion-body-padding-y};\r\n\t\t\t\t\t\t--#{$prefix}accordion-active-color: #{$accordion-button-active-color};\r\n\t\t\t\t\t\t--#{$prefix}accordion-active-bg: #{$accordion-button-active-bg};\r\n\t\t\t\t\t`,\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass variables\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"css\",\n                    title: \"scss/_variables.scss\",\n                    source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n                    code: `\r\n\t\t\t\t\t\t$accordion-padding-y:                     1rem;\r\n\t\t\t\t\t\t$accordion-padding-x:                     1.25rem;\r\n\t\t\t\t\t\t$accordion-color:                         var(--#{$prefix}body-color); // Sass variable because of $accordion-button-icon\r\n\t\t\t\t\t\t$accordion-bg:                            var(--#{$prefix}body-bg);\r\n\t\t\t\t\t\t$accordion-border-width:                  var(--#{$prefix}border-width);\r\n\t\t\t\t\t\t$accordion-border-color:                  var(--#{$prefix}border-color);\r\n\t\t\t\t\t\t$accordion-border-radius:                 var(--#{$prefix}border-radius);\r\n\t\t\t\t\t\t$accordion-inner-border-radius:           subtract($accordion-border-radius, $accordion-border-width);\r\n\r\n\t\t\t\t\t\t$accordion-body-padding-y:                $accordion-padding-y;\r\n\t\t\t\t\t\t$accordion-body-padding-x:                $accordion-padding-x;\r\n\r\n\t\t\t\t\t\t$accordion-button-padding-y:              $accordion-padding-y;\r\n\t\t\t\t\t\t$accordion-button-padding-x:              $accordion-padding-x;\r\n\t\t\t\t\t\t$accordion-button-color:                  var(--#{$prefix}body-color);\r\n\t\t\t\t\t\t$accordion-button-bg:                     var(--#{$prefix}accordion-bg);\r\n\t\t\t\t\t\t$accordion-transition:                    $btn-transition, border-radius .15s ease;\r\n\t\t\t\t\t\t$accordion-button-active-bg:              var(--#{$prefix}primary-bg-subtle);\r\n\t\t\t\t\t\t$accordion-button-active-color:           var(--#{$prefix}primary-text);\r\n\r\n\t\t\t\t\t\t$accordion-button-focus-border-color:     $input-focus-border-color;\r\n\t\t\t\t\t\t$accordion-button-focus-box-shadow:       $btn-focus-box-shadow;\r\n\r\n\t\t\t\t\t\t$accordion-icon-width:                    1.25rem;\r\n\t\t\t\t\t\t$accordion-icon-color:                    $body-color;\r\n\t\t\t\t\t\t$accordion-icon-active-color:             $primary-text;\r\n\t\t\t\t\t\t$accordion-icon-transition:               transform .2s ease-in-out;\r\n\t\t\t\t\t\t$accordion-icon-transform:                rotate(-180deg);\r\n\r\n\t\t\t\t\t\t$accordion-button-icon:         url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$accordion-icon-color}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>\");\r\n\t\t\t\t\t\t$accordion-button-active-icon:  url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$accordion-icon-active-color}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>\");\r\n\t\t\t\t\t`,\n                }),\n            ]),\n        ];\n    },\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/components/accordion.js?");

/***/ })

}]);