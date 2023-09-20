"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbsts_test"] = self["webpackChunkbsts_test"] || []).push([["src_docs_components_alert_ts"],{

/***/ "./src/docs/components/alert.ts":
/*!**************************************!*\
  !*** ./src/docs/components/alert.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   alert: () => (/* binding */ alert)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/build/esm/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./src/ctl/example/_index.ts\");\n/* harmony import */ var _ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ctl/main/content.js */ \"./src/ctl/main/content.ts\");\n\n\n\nconst alert = {\n    title: \"Alert\",\n    description: \"Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.\",\n    item: (db) => {\n        (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.resetContentIndex)();\n        return [\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Examples\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Alerts ({{b.alert.container}}) are available for any length of text, as well as an optional close button. For proper styling, use one of the eight required contextual classes (e.g., {{color:'success'}}). For inline dismissal, use the {{nav:docs/components/alert#dismissing::alerts JavaScript plugin}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"info\", callout: true }, \"{{b::Heads up!}} As of v5.3.0, the {{alert-variant()}} Sass mixin is deprecated. Alert variants now have their CSS variables overridden in the {{nav:docs/components/alert#sass_loop::Sass loop}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    output: () => {\n                        return [\n                            \"primary\",\n                            \"secondary\",\n                            \"success\",\n                            \"danger\",\n                            \"warning\",\n                            \"info\",\n                            \"light\",\n                            \"dark\",\n                        ].map((i) => {\n                            return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.alert.container({ color: i }, `A simple ${i} alert—check it out!`);\n                        });\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"info\", callout: true }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(5, \"Conveying meaning to assistive technologies\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the {{visually:'hidden'}} property.\"),\n                ]),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Callout\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Just set {{callout:true}} to change the {{alert}} to {{callout}}\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    output: () => {\n                        return [\n                            \"primary\",\n                            \"secondary\",\n                            \"success\",\n                            \"danger\",\n                            \"warning\",\n                            \"info\",\n                            \"light\",\n                            \"dark\",\n                        ].map((i) => {\n                            return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.alert.container({ color: i, callout: true }, `A simple ${i} callout—check it out!`);\n                        });\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Live example\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Click the button below to show an alert (hidden with inline styles to start), then dismiss (and destroy) it with the built-in close button.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    output: () => {\n                        return [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ id: \"liveAlertPlaceholder\" }),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                color: \"primary\",\n                                on: {\n                                    click: (_e) => {\n                                        let container = document.getElementById(\"liveAlertPlaceholder\");\n                                        _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.appendChild(container, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.alert.container({ color: \"success\", dismissible: true }, \"Nice, you triggered this alert message!\"));\n                                    },\n                                },\n                            }, \"Show live alert\")),\n                        ];\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Link color\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use the {{b.alert.link}} component to quickly provide matching colored links within any alert.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    output: () => {\n                        return [\n                            \"primary\",\n                            \"secondary\",\n                            \"success\",\n                            \"danger\",\n                            \"warning\",\n                            \"info\",\n                            \"light\",\n                            \"dark\",\n                        ].map((i) => {\n                            return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.alert.container({ color: i }, [\n                                `A simple ${i} alert with `,\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.alert.link({ href: \"#\" }, \"an example link\"),\n                                \".\",\n                            ]);\n                        });\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Additional content\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Alerts can also contain additional HTML elements like headings, paragraphs and dividers.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.alert.container({ color: \"success\" }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.alert.header(4, \"Well done!\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.hr(),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ marginBottom: 0 }, \"Whenever you need to, be sure to use margin utilities to keep things nice and tidy.\"),\n                        ]);\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Icons\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Similarly, you can use {{nav:docs/utilities/flex::flexbox utilities}} and {{https://icons.getbootstrap.com/::Bootstrap Icons}} to create alerts with icons. Depending on your icons and content, you may want to add more utilities or custom styles.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.alert.container({ color: \"info\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.msg({ icon: \"info-circle-fill\" }, \"An example alert with an icon\"));\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Need more than one icon for your alerts? Consider using more Bootstrap Icons and making a local SVG sprite like so to easily reference the same icons repeatedly.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    output: () => {\n                        return [\n                            { color: \"info\", icon: \"info-circle-fill\" },\n                            { color: \"success\", icon: \"check-circle-fill\" },\n                            { color: \"warning\", icon: \"exclamation-triangle-fill\" },\n                            { color: \"danger\", icon: \"x-circle-fill\" },\n                        ].map((i) => {\n                            return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.alert.container({ color: i.color }, [\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.msg({ icon: i.icon }, `An example ${i.color} alert with an icon`),\n                            ]);\n                        });\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Dismissing\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Add {{dismissible:true}} to {{b.alert.container}} to dismiss the alert.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n                    item: [\n                        \"Be sure you’ve loaded the alert plugin, or the compiled Bootstrap JavaScript.\",\n                        \"Set {{dismissible:true}} property to {{b.alert.container}} to add {{nav:docs/components/close_button::close button}}.\",\n                        \"{{dismissible:true}} add the {{data-bs-dismiss='alert'}} attribute automaticly, which triggers the JavaScript functionality and use the {{<button>}} element with it for proper behavior across all devices.\",\n                        \"{{b.alert.container}} automaticly animate alerts when dismissing them, by add the {{.fade}} and {{.show}} classes.\",\n                    ],\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"You can see this in action with a live demo:\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.alert.container({ color: \"warning\", dismissible: true }, \"{{b::Holy guacamole!}} You should check in on some of those fields below.\");\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"warning\", callout: true }, \"When an alert is dismissed, the element is completely removed from the page structure. If a keyboard user dismisses the alert using the close button, their focus will suddenly be lost and, depending on the browser, reset to the start of the page/document. For this reason, Bootstrap recommend including additional JavaScript that listens for the {{on:{'closed.bs.alert':Event} }} and programmatically sets {{focus()}} to the most appropriate location in the page. If you’re planning to move focus to a non-interactive element that normally does not receive focus, make sure to add {{tabindex:'-1'}} to the element.\"),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"CSS\")]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Variables\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"As part of Bootstrap’s evolving CSS variables approach, alerts now use local CSS variables on {{.alert}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"css\",\n                    title: \"scss/_alert.scss\",\n                    source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_alert.scss\",\n                    code: `\r\n\t\t\t\t\t\t--#{$prefix}alert-bg: transparent;\r\n\t\t\t\t\t\t--#{$prefix}alert-padding-x: #{$alert-padding-x};\r\n\t\t\t\t\t\t--#{$prefix}alert-padding-y: #{$alert-padding-y};\r\n\t\t\t\t\t\t--#{$prefix}alert-margin-bottom: #{$alert-margin-bottom};\r\n\t\t\t\t\t\t--#{$prefix}alert-color: inherit;\r\n\t\t\t\t\t\t--#{$prefix}alert-border-color: transparent;\r\n\t\t\t\t\t\t--#{$prefix}alert-border: #{$alert-border-width} solid var(--#{$prefix}alert-border-color);\r\n\t\t\t\t\t\t--#{$prefix}alert-border-radius: #{$alert-border-radius};\r\n\t\t\t\t\t\t--#{$prefix}alert-link-color: inherit;\r\n\t\t\t\t\t`,\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass variables\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"css\",\n                    title: \"scss/_variables.scss\",\n                    source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n                    code: `\r\n\t\t\t\t\t\t$alert-padding-y:               $spacer;\r\n\t\t\t\t\t\t$alert-padding-x:               $spacer;\r\n\t\t\t\t\t\t$alert-margin-bottom:           1rem;\r\n\t\t\t\t\t\t$alert-border-radius:           $border-radius;\r\n\t\t\t\t\t\t$alert-link-font-weight:        $font-weight-bold;\r\n\t\t\t\t\t\t$alert-border-width:            var(--#{$prefix}border-width);\r\n\t\t\t\t\t\t$alert-bg-scale:                -80%;\r\n\t\t\t\t\t\t$alert-border-scale:            -70%;\r\n\t\t\t\t\t\t$alert-color-scale:             40%;\r\n\t\t\t\t\t\t$alert-dismissible-padding-r:   $alert-padding-x * 3; // 3x covers width of x plus defaut\r\n\t\t\t\t\t`,\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass mixin\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Used in combination with {{$theme-colors}} to create contextual modifier classes for Bootstrap alerts.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"css\",\n                    title: \"scss/mixins/_alert.scss\",\n                    source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/mixins/_alert.scss\",\n                    code: `\r\n\t\t\t\t\t\t@mixin alert-variant($background, $border, $color) {\r\n\t\t\t\t\t\t--#{$prefix}alert-color: #{$color};\r\n\t\t\t\t\t\t--#{$prefix}alert-bg: #{$background};\r\n\t\t\t\t\t\t--#{$prefix}alert-border-color: #{$border};\r\n\t\t\t\t\t\t--#{$prefix}alert-link-color: #{shade-color($color, 20%)};\r\n\r\n\t\t\t\t\t\t@if $enable-gradients {\r\n\t\t\t\t\t\t\tbackground-image: var(--#{$prefix}gradient);\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.alert-link {\r\n\t\t\t\t\t\t\tcolor: var(--#{$prefix}alert-link-color);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t`,\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass loop\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Loop that generates the modifier classes with the {{alert-variant()}} mixin.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"css\",\n                    title: \"scss/_alert.scss\",\n                    source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_alert.scss\",\n                    code: `\r\n\t\t\t\t\t\t// Generate contextual modifier classes for colorizing the alert\r\n\t\t\t\t\t\t@each $state in map-keys($theme-colors) {\r\n\t\t\t\t\t\t\t.alert-#{$state} {\r\n\t\t\t\t\t\t\t\t--#{$prefix}alert-color: var(--#{$prefix}#{$state}-text);\r\n\t\t\t\t\t\t\t\t--#{$prefix}alert-bg: var(--#{$prefix}#{$state}-bg-subtle);\r\n\t\t\t\t\t\t\t\t--#{$prefix}alert-border-color: var(--#{$prefix}#{$state}-border-subtle);\r\n\t\t\t\t\t\t\t\t--#{$prefix}alert-link-color: var(--#{$prefix}#{$state}-text);\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t`,\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"JavaScript behavior\")]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Initialize\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Initialize elements as alerts\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"js\",\n                    code: `\r\n\t\t\t\t\t\tconst alertList = document.querySelectorAll('.alert')\r\n\t\t\t\t\t\tconst alerts = [...alertList].map(element => b.alert.init(element))\r\n\t\t\t\t\t`,\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"warning\", callout: true }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"For the sole purpose of dismissing an alert, it isn’t necessary to initialize the component manually via the JS API. By making use of {{b.alert.btnclose}} component, the alert component will be initialized automatically and properly dismissed.\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"See the {{nav:docs/components/alerts#triggers::triggers}} section for more details.\"),\n                ]),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Triggers\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Dismissal can be achieved with the {{data}} attribute on a button within the alert as demonstrated below:\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"js\",\n                    code: `\r\n\t\t\t\t\t\tnew b.alert.btnclose();\r\n\t\t\t\t\t\tnew b.button({dismiss:\"alert\"},\"Close\");\r\n\t\t\t\t\t`,\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"or on a button outside the alert using the {{data-bs-target}} as demonstrated below:\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"js\",\n                    code: `\r\n\t\t\t\t\t\tnew b.alert.btnclose({target:\"#my-alert\"});\r\n\t\t\t\t\t\tnew b.button({dismiss:\"alert\", target:\"#my-alert\"},\"Close\");\r\n\t\t\t\t\t`,\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"{{b::Note :}} that closing an alert will remove it from the DOM.\"),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Methods\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"You can create an alert instance with the alert constructor, for example:\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"js\",\n                    code: `\r\n\t\t\t\t\t\tconst bsAlert = b.alert.init('#myAlert');\r\n\t\t\t\t\t`,\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"This makes an alert listen for click events on descendant elements which have the {{dismiss:'alert'}} property. (Not necessary when using the data-api’s auto-initialization.)\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.table({\n                    item: [\n                        [\"Method\", \"Description\"],\n                        [\n                            \"{{close}}\",\n                            \"Closes an alert by removing it from the DOM. If the {{.fade}} and {{.show}} classes are present on the element, the alert will fade out before it is removed.\",\n                        ],\n                        [\n                            \"{{dispose}}\",\n                            \"Destroys an element’s alert. (Removes stored data on the DOM element)\",\n                        ],\n                        [\n                            \"{{getInstance}}\",\n                            \"Static method which allows you to get the alert instance associated to a DOM element. For example: {{b.alert.getInstance('#alert')}}.\",\n                        ],\n                        [\n                            \"{{getOrCreateInstance}}\",\n                            \"Static method which returns an alert instance associated to a DOM element or create a new one in case it wasn’t initialized. You can use it like this: {{b.alert.getOrCreateInstance('#alert')}}.\",\n                        ],\n                    ],\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Basic usage:\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"js\",\n                    code: `\r\n\t\t\t\t\t\tb.alert.close('#myAlert');\r\n\t\t\t\t\t`,\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    showConsole: true,\n                    output: () => {\n                        const exampleAlert = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ id: \"example-alert-container\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.alert.container({\n                            id: \"example-alert\",\n                            animation: true,\n                            color: \"primary\",\n                            marginBottom: 0,\n                            dismissible: true,\n                        }, \"Example\"));\n                        return [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\", overflow: \"auto\" }, [\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                                    width: 100,\n                                    marginEnd: 3,\n                                    bgColor: \"body-tertiary\",\n                                    rounded: true,\n                                    padding: [1, \"md-4\"],\n                                    display: \"flex\",\n                                    justifyContent: \"center\",\n                                    alignItem: \"center\",\n                                }, exampleAlert),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ marginStart: \"auto\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.btngroup({ vertical: true, weight: \"sm\" }, [\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                        color: \"success\",\n                                        on: {\n                                            click: (event) => {\n                                                const elem = _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.alert.init(\"#example-alert\");\n                                                _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.console(event.target, \"b.alert.init\", elem ? elem : \"null\", elem ? \"success\" : \"danger\");\n                                            },\n                                        },\n                                    }, \"init\"),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                        color: \"success\",\n                                        on: {\n                                            click: (event) => {\n                                                const elem = _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.alert.getInstance(\"#example-alert\");\n                                                _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.console(event.target, \"b.alert.getInstance\", elem ? elem : \"null\", elem ? \"success\" : \"danger\");\n                                            },\n                                        },\n                                    }, \"getInstance\"),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                        color: \"success\",\n                                        on: {\n                                            click: (event) => {\n                                                const elem = _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.alert.getOrCreateInstance(\"#example-alert\");\n                                                _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.console(event.target, \"b.alert.getOrCreateInstance\", elem ? elem : \"null\", elem ? \"success\" : \"danger\");\n                                            },\n                                        },\n                                    }, \"getOrCreateInstance\"),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                        color: \"danger\",\n                                        on: {\n                                            click: () => {\n                                                _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.alert.close(\"#example-alert\");\n                                            },\n                                        },\n                                    }, \"close\"),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                        color: \"danger\",\n                                        on: {\n                                            click: () => {\n                                                _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.alert.dispose(\"#example-alert\");\n                                            },\n                                        },\n                                    }, \"dispose\"),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                        on: {\n                                            click: () => {\n                                                _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.replaceWith(document.getElementById(\"example-alert-container\"), exampleAlert);\n                                            },\n                                        },\n                                    }, \"reset\"),\n                                ])),\n                            ]),\n                        ];\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Events\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Bootstrap’s alert plugin exposes a few events for hooking into alert functionality.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.table({\n                    item: [\n                        [\"Event\", \"Description\"],\n                        [\n                            \"{{close.bs.alert}}\",\n                            \"Fires immediately when the {{close}} instance method is called.\",\n                        ],\n                        [\n                            \"{{closed.bs.alert}}\",\n                            \"Fired when the alert has been closed and CSS transitions have completed.\",\n                        ],\n                    ],\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    showConsole: true,\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.alert.container({\n                            color: \"info\",\n                            dismissible: true,\n                            on: {\n                                \"close.bs.alert\": (event) => {\n                                    const target = event.target;\n                                    _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.console(target, \"close.bs.alert\", `Target: {{b::${_printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.elemInfo(target)}}}`, \"info\");\n                                },\n                            },\n                        }, \"Click close to see event trigged.\");\n                    },\n                }),\n            ]),\n        ];\n    },\n};\n\n\n//# sourceURL=webpack://bsts-test/./src/docs/components/alert.ts?");

/***/ })

}]);