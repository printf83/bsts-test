"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_components_offcanvas_js"],{

/***/ "./lib/docs/components/offcanvas.js":
/*!******************************************!*\
  !*** ./lib/docs/components/offcanvas.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"offcanvas\": () => (/* binding */ offcanvas)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst offcanvas = {\n    title: \"Offcanvas\",\n    description: \"Build hidden sidebars into your project for navigation, shopping carts, and more with a few classes and Bootstrap JavaScript plugin.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"How it works\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Offcanvas is a sidebar component that can be toggled via JavaScript to appear from the left, right, top, or bottom edge of the viewport. Buttons or anchors are used as triggers that are attached to specific elements you toggle, and {{data}} attributes are used to invoke Bootstrap JavaScript.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\n                \"Offcanvas shares some of the same JavaScript code as modals. Conceptually, they are quite similar, but they are separate plugins.\",\n                \"Similarly, some source {{nav:docs/components/offcanvas#sass_variables::Sass variables}} for offcanvas’s styles and dimensions are inherited from the modal’s variables.\",\n                \"When shown, offcanvas includes a default backdrop that can be clicked to hide the offcanvas.\",\n                \"Similar to modals, only one offcanvas can be shown at a time.\",\n            ],\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"{{b::Heads up!}} Given how CSS handles animations, you cannot use {{margin}} or {{translate}} on an {{.offcanvas}} element. Instead, use the class as an independent wrapping element.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"info\", callout: true }, \" The animation effect of this component is dependent on the {{prefers-reduced-motion}} media query. See the {{https://getbootstrap.com/docs/5.3/getting-started/accessibility/#reduced-motion::reduced motion section of Bootstrap accessibility documentation}}.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Examples\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Offcanvas components\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Below is an offcanvas example that is shown by default (via {{debug}} on {{b.offcanvas.container}}). Offcanvas includes support for a header ({{b.offcanvas.header}}) with a close button ({{b.offcanvas.btnclose}}) and an optional body ({{b.offcanvas.body}}) component for some initial {{padding}}. Bootstrap suggest that you include offcanvas headers with dismiss actions whenever possible, or provide an explicit dismiss action.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { bgColor: \"body-tertiary\", padding: 0 },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.container({\n                    debug: true,\n                    labelledby: \"offcanvasLabel\",\n                }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.header([\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.title({ id: \"offcanvasLabel\" }, \"Offcanvas\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.btnclose(),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.body(\"Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.\"),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Live demo\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use the buttons below to show and hide an offcanvas element via JavaScript that toggles the {{b.offcanvas.container}} component.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\"{{b.offcanvas.container}} hides content (default)\", \"{{hide:false}} to shows content\"],\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.toggle({ href: \"#offcanvasExample\", controlfor: \"offcanvasExample\", marginEnd: 2 }, \"Link with href\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.toggle({ target: \"#offcanvasExample\", controlfor: \"offcanvasExample\" }, \"Button with data-bs-target\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.container({ id: \"offcanvasExample\", labelledby: \"offcanvasExampleLabel\" }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.header([\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.title({ id: \"offcanvasExampleLabel\" }, \"Offcanvas\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.btnclose(),\n                        ]),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.body([\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div(\"Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.container({ marginTop: 3 }, [\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.toggle({ color: \"secondary\" }, \"Dropdown button\"),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.menu([\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Action\"),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Another action\"),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Something else here\"),\n                                ]),\n                            ]),\n                        ]),\n                    ]),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Body scrolling\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Scrolling the {{<body>}} element is disabled when an offcanvas and its backdrop are visible. Use the {{scroll:true}} property to enable {{<body>}} scrolling.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.toggle({ target: \"#offcanvasScrolling\", controlfor: \"offcanvasScrolling\" }, \"Enable body scrolling\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.container({\n                        id: \"offcanvasScrolling\",\n                        scroll: true,\n                        backdrop: false,\n                        labelledby: \"offcanvasScrollingLabel\",\n                    }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.header([\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.title({ id: \"offcanvasScrollingLabel\" }, \"Offcanvas with body scrolling\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.btnclose(),\n                        ]),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.body(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"Try scrolling the rest of the page to see this option in action.\")),\n                    ]),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Body scrolling and backdrop\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"You can also enable {{<body>}} scrolling with a visible backdrop by set {{scroll:true}} and {{backdrop:true}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.toggle({ target: \"#offcanvasWithBothOptions\", controlfor: \"offcanvasWithBothOptions\" }, \"Enable both scrolling & backdrop\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.container({\n                        id: \"offcanvasWithBothOptions\",\n                        scroll: true,\n                        backdrop: true,\n                        labelledby: \"offcanvasWithBothOptionsLabel\",\n                    }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.header([\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.title({ id: \"offcanvasWithBothOptionsLabel\" }, \"Backdrop with scrolling\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.btnclose(),\n                        ]),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.body(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"Try scrolling the rest of the page to see this option in action.\")),\n                    ]),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Static backdrop\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"When {{backdrop}} is set to {{static}}, the offcanvas will not close when clicking outside of it.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.toggle({ target: \"#staticBackdrop\", controlfor: \"staticBackdrop\" }, \"Toggle static offcanvas\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.container({\n                        id: \"staticBackdrop\",\n                        backdrop: \"static\",\n                        labelledby: \"staticBackdropLabel\",\n                    }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.header([\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.title({ id: \"staticBackdropLabel\" }, \"Offcanvas\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.btnclose(),\n                        ]),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.body(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div(\"I will not close if you click outside of me.\")),\n                    ]),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Dark offcanvas\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Change the appearance of offcanvases to dark by setting {{theme:'dark'}} to {{b.offcanvas.container}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"warning\", callout: true }, \"{{b::Heads up!}} Dark variants for components were deprecated in v5.3.0 with the introduction of color modes.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { bgColor: \"body-tertiary\", padding: 0 },\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.container({\n                    debug: true,\n                    theme: \"dark\",\n                    labelledby: \"offcanvasDarkLabel\",\n                }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.header([\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.title({ id: \"offcanvasDarkLabel\" }, \"Offcanvas\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.btnclose(),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.body(\"Place offcanvas content here.\"),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Responsive\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Responsive offcanvas classes hide content outside the viewport from a specified breakpoint and down. Above that breakpoint, the contents within will behave as usual. For example, {{show:'lg'}} hides content in an offcanvas below the {{lg}} breakpoint, but shows the content above the {{lg}} breakpoint.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            showViewport: true,\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.toggle({\n                        target: \"#offcanvasResponsive\",\n                        controlfor: \"offcanvasResponsive\",\n                        display: \"lg-none\",\n                    }, \"Toggle offcanvas\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.alert.container({ color: \"info\", display: [\"none\", \"lg-block\"] }, \"Resize your browser to show the responsive offcanvas toggle.\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.container({\n                        id: \"offcanvasResponsive\",\n                        placement: \"end\",\n                        show: \"lg\",\n                        labelledby: \"offcanvasResponsiveLabel\",\n                    }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.header([\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.title({ id: \"offcanvasResponsiveLabel\" }, \"Responsive offcanvas\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.btnclose({ target: \"#offcanvasResponsive\" }),\n                        ]),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.body(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ marginBottom: 0 }, \"This is content within an {{show:lg}}.\")),\n                    ]),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Responsive offcanvas classes are available across for each breakpoint.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\n                \"{{show:true}}\",\n                \"{{show:'sm'}}\",\n                \"{{show:'md'}}\",\n                \"{{show:'lg'}}\",\n                \"{{show:'xl'}}\",\n                \"{{show:'xxl'}}\",\n            ],\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Placement\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"There’s no default placement for offcanvas components, so you must add one of the modifier classes below.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\n                \"{{placement:'start'}} places offcanvas on the left of the viewport (shown above)\",\n                \"{{placement:'end'}} places offcanvas on the right of the viewport\",\n                \"{{placement:'top'}} places offcanvas on the top of the viewport\",\n                \"{{placement:'bottom'}} places offcanvas on the bottom of the viewport\",\n            ],\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Try the top, right, and bottom examples out below.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.toggle({ target: \"#offcanvasTop\", controlfor: \"offcanvasTop\" }, \"Toggle top offcanvas\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.container({\n                        id: \"offcanvasTop\",\n                        placement: \"top\",\n                        labelledby: \"offcanvasTopLabel\",\n                    }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.header([\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.title({ id: \"offcanvasTopLabel\" }, \"Offcanvas top\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.btnclose(),\n                        ]),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.body(\"...\"),\n                    ]),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.toggle({ target: \"#offcanvasEnd\", controlfor: \"offcanvasEnd\" }, \"Toggle end offcanvas\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.container({\n                        id: \"offcanvasEnd\",\n                        placement: \"end\",\n                        labelledby: \"offcanvasEndLabel\",\n                    }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.header([\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.title({ id: \"offcanvasEndLabel\" }, \"Offcanvas end\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.btnclose(),\n                        ]),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.body(\"...\"),\n                    ]),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.toggle({ target: \"#offcanvasBottom\", controlfor: \"offcanvasBottom\" }, \"Toggle bottom offcanvas\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.container({\n                        id: \"offcanvasBottom\",\n                        placement: \"bottom\",\n                        labelledby: \"offcanvasBottomLabel\",\n                    }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.header([\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.title({ id: \"offcanvasBottomLabel\" }, \"Offcanvas bottom\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.btnclose(),\n                        ]),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.body(\"...\"),\n                    ]),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Accessibility\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Since the offcanvas panel is conceptually a modal dialog, be sure to add {{labelledby:'...'}}—referencing the offcanvas title—to {{b.offcanvas.title(id)}}. Note that you don’t need to add {{role:'dialog'}} since Bootstrap already add it via JavaScript.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"CSS\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Variables\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"As part of Bootstrap’s evolving CSS variables approach, offcanvas now use local CSS variables on {{.offcanvas}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_offcanvas.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_offcanvas.scss\",\n            code: `\n\t\t\t\t--#{$prefix}offcanvas-zindex: #{$zindex-offcanvas};\n\t\t\t\t--#{$prefix}offcanvas-width: #{$offcanvas-horizontal-width};\n\t\t\t\t--#{$prefix}offcanvas-height: #{$offcanvas-vertical-height};\n\t\t\t\t--#{$prefix}offcanvas-padding-x: #{$offcanvas-padding-x};\n\t\t\t\t--#{$prefix}offcanvas-padding-y: #{$offcanvas-padding-y};\n\t\t\t\t--#{$prefix}offcanvas-color: #{$offcanvas-color};\n\t\t\t\t--#{$prefix}offcanvas-bg: #{$offcanvas-bg-color};\n\t\t\t\t--#{$prefix}offcanvas-border-width: #{$offcanvas-border-width};\n\t\t\t\t--#{$prefix}offcanvas-border-color: #{$offcanvas-border-color};\n\t\t\t\t--#{$prefix}offcanvas-box-shadow: #{$offcanvas-box-shadow};\n\t\t\t\t--#{$prefix}offcanvas-transition: #{transform $offcanvas-transition-duration ease-in-out};\n\t\t\t\t--#{$prefix}offcanvas-title-line-height: #{$offcanvas-title-line-height};\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass variables\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss\",\n            code: `\n\t\t\t\t$offcanvas-padding-y:               $modal-inner-padding;\n\t\t\t\t$offcanvas-padding-x:               $modal-inner-padding;\n\t\t\t\t$offcanvas-horizontal-width:        400px;\n\t\t\t\t$offcanvas-vertical-height:         30vh;\n\t\t\t\t$offcanvas-transition-duration:     .3s;\n\t\t\t\t$offcanvas-border-color:            $modal-content-border-color;\n\t\t\t\t$offcanvas-border-width:            $modal-content-border-width;\n\t\t\t\t$offcanvas-title-line-height:       $modal-title-line-height;\n\t\t\t\t$offcanvas-bg-color:                var(--#{$prefix}body-bg);\n\t\t\t\t$offcanvas-color:                   var(--#{$prefix}body-color);\n\t\t\t\t$offcanvas-box-shadow:              $modal-content-box-shadow-xs;\n\t\t\t\t$offcanvas-backdrop-bg:             $modal-backdrop-bg;\n\t\t\t\t$offcanvas-backdrop-opacity:        $modal-backdrop-opacity;\n\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Usage\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"The offcanvas plugin utilizes a few classes and attributes to handle the heavy lifting:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\n                \"{{show:false}} hides the content\",\n                \"{{show:true}} shows the content\",\n                \"{{placement:'start'}} hides the offcanvas on the left\",\n                \"{{placement:'end'}} hides the offcanvas on the right\",\n                \"{{placement:'top'}} hides the offcanvas on the top\",\n                \"{{placement:'bottom'}} hides the offcanvas on the bottom\",\n            ],\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Add a dismiss button with the {{dismiss:'offcanvas'}} property, which triggers the JavaScript functionality. Be sure to use the {{b.button}} component with it for proper behavior across all devices.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Via data attributes\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.xsubtitle(\"Toggle\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Add {{toggle:'offcanvas'}} and a {{target}} or {{href}} to the component to automatically assign control of one offcanvas component. The {{target}} property accepts a CSS selector to apply the offcanvas to. Be sure to add the class {{offcanvas}} to the offcanvas element. If you’d like it to default open, add the additional class {{show}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.xsubtitle(\"Dismiss\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Dismissal can be achieved with the {{dismiss}} property on a {{b.button}} {{b::within the offcanvas}} as demonstrated below:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"js\",\n            code: `\n\t\t\t\tb.offcanvas.btnclose();\n\t\t\t\tb.button({dismiss:\"offcanvas\"});\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"or on a button {{outside the offcanvas}} using the additional {{data-bs-target}} as demonstrated below:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"html\",\n            code: `\n\t\t\t\tb.offcanvas.btnclose({target:\"#myOffcanvas\"});\n\t\t\t\tb.button({dismiss:\"offcanvas\",target:\"#myOffcanvas\"});\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"warning\", callout: true }, \" While both ways to dismiss an offcanvas are supported, keep in mind that dismissing from outside an offcanvas does not match the {{https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/::ARIA Authoring Practices Guide dialog (modal) pattern}}. Do this at your own risk.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Via JavaScript\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Enable manually with:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"js\",\n            code: `\n\t\t\t\tconst offcanvasElementList = document.querySelectorAll('.offcanvas')\n\t\t\t\tconst offcanvasList = [...offcanvasElementList].map(offcanvasEl => new bootstrap.Offcanvas(offcanvasEl))\n\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Options\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(`As options can be passed via data attributes or JavaScript, you can append an option name to {{data:{'bs-*':'{value}'\\}\\}}, as in {{data:{'bs-animation':'{value}'\\}\\}}. Make sure to change the case type of the option name from {{i::“camelCase”}} to {{i::“kebab-case”}} when passing the options via data attributes. For example, use {{data:{'bs-custom-class':'beautifier'\\}\\}} instead of {{data:{'bs-customClass':'beautifier'\\}\\}}.`),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(`As of Bootstrap 5.2.0, all components support an experimental reserved data attribute data-bs-config that can house simple component configuration as a JSON string. When an element has {{data:{'bs-config':'{\"delay\":0, \"title\":123}'/}/}} and {{data:{'bs-title':'456'/}/}} property, the final {{title}} value will be {{456}} and the separate data attributes will override values given on {{data:{'bs-config':''/}/}}. In addition, existing data attributes are able to house JSON values like {{data:{'bs-delay':'{\"show\":0,\"hide\":150}'/}/}}.`),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.table({\n            item: [\n                [\"Name\", \"Type\", \"Default\", \"Description\"],\n                [\n                    \"{{backdrop}}\",\n                    \"boolean or the string {{static}}\",\n                    \"{{true}}\",\n                    \"Apply a backdrop on body while offcanvas is open. Alternatively, specify {{static}} for a backdrop which doesn’t close the offcanvas when clicked.\",\n                ],\n                [\"{{keyboard}}\", \"boolean\", \"{{true}}\", \"Closes the offcanvas when escape key is pressed.\"],\n                [\"{{scroll}}\", \"boolean\", \"{{false}}\", \"Allow body scrolling while offcanvas is open.\"],\n            ],\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Methods\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"danger\", callout: true }, \"{{b::All API methods are asynchronous and start a transition}}. They return to the caller as soon as the transition is started, but before it ends. In addition, a method call on a transitioning component will be ignored. {{https://getbootstrap.com/docs/5.3/getting-started/javascript/#asynchronous-functions-and-transitions::Learn more in Bootstrap JavaScript docs}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Activates your content as an offcanvas element. Accepts an optional options {{object}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"You can create an offcanvas instance with the constructor, for example:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"js\",\n            code: `\n\t\t\t\tconst bsOffcanvas = new bootstrap.Offcanvas('#myOffcanvas')\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.table({\n            item: [\n                [\"Method\", \"Description\"],\n                [\n                    \"{{getInstance}}\",\n                    \"{{i::Static}} method which allows you to get the offcanvas instance associated with a DOM element.\",\n                ],\n                [\n                    \"{{getOrCreateInstance\t}}\",\n                    \"{{i::Static}} method which allows you to get the offcanvas instance associated with a DOM element, or create a new one in case it wasn’t initialized.\",\n                ],\n                [\n                    \"{{hide}}\",\n                    \"Hides an offcanvas element. {{b::Returns to the caller before the offcanvas element has actually been hidden}} (i.e. before the {{hidden.bs.offcanvas}} event occurs).\",\n                ],\n                [\n                    \"{{show}}\",\n                    \"Shows an offcanvas element. {{b::Returns to the caller before the offcanvas element has actually been shown}} (i.e. before the {{shown.bs.offcanvas}} event occurs).\",\n                ],\n                [\n                    \"{{toggle}}\",\n                    \"Toggles an offcanvas element to shown or hidden. {{b::Returns to the caller before the offcanvas element has actually been shown or hidden}} (i.e. before the {{shown.bs.offcanvas}} or {{hidden.bs.offcanvas}} event occurs).\",\n                ],\n            ],\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Events\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Bootstrap’s offcanvas class exposes a few events for hooking into offcanvas functionality.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.table({\n            item: [\n                [\"Event type\", \"Description\"],\n                [\n                    \"{{hide.bs.offcanvas}}\",\n                    \"This event is fired immediately when the {{hide}} instance method has been called.\",\n                ],\n                [\n                    \"{{hidden.bs.offcanvas}}\",\n                    \"This event is fired when an offcanvas has finished being hidden from the user (will wait for CSS transitions to complete).\",\n                ],\n                [\n                    \"{{hidePrevented.bs.offcanvas}}\",\n                    \"This event is fired when an offcanvas is shown, its backdrop is {{static}} and a click outside of the offcanvas is performed. The event is also fired when the escape key is pressed and the {{keyboard}} option is set to {{false}}.\",\n                ],\n                [\"{{show.bs.offcanvas}}\", \"This event fires immediately when the {{show}} instance method is called.\"],\n                [\n                    \"{{shown.bs.offcanvas}}\",\n                    \"This event is fired when an offcanvas element has been made visible to the user (will wait for CSS transitions to complete).\",\n                ],\n            ],\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"js\",\n            code: `\n\t\t\t\tconst myOffcanvas = document.getElementById('myOffcanvas')\n\t\t\t\tmyOffcanvas.addEventListener('hidden.bs.offcanvas', event => {\n\t\t\t\t// do something...\n\t\t\t\t})\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            showConsole: true,\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.toggle({ target: \"#offcanvasEventExample\", controlfor: \"offcanvasEventExample\" }, \"Show offcanvas event\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.container({\n                        id: \"offcanvasEventExample\",\n                        labelledby: \"offcanvasEventExampleLabel\",\n                        backdrop: \"static\",\n                        on: {\n                            \"shown.bs.offcanvas\": (event) => {\n                                const evnt = event;\n                                _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.console(evnt.target, \"shown.bs.offcanvas\", `Target: {{b::${_printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.elemInfo(evnt.target)}}}{{br}}RelatedTarget: {{b::${_printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.elemInfo(evnt.relatedTarget)}}}`, \"success\");\n                            },\n                            \"hidden.bs.offcanvas\": (event) => {\n                                const target = event.target;\n                                _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.console(target, \"hidden.bs.offcanvas\", `Target: {{b::${_printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.elemInfo(target)}}}`, \"danger\");\n                            },\n                            \"hidePrevented.bs.offcanvas\": (event) => {\n                                const target = event.target;\n                                _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.console(target, \"hidePrevented.bs.offcanvas\", `Target: {{b::${_printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.elemInfo(target)}}}`, \"warning\");\n                            },\n                        },\n                    }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.header([\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.title({ id: \"offcanvasEventExampleLabel\" }, \"Offcanvas\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.btnclose(),\n                        ]),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.body([\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div(\"Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.container({ marginTop: 3 }, [\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.toggle({ color: \"secondary\" }, \"Dropdown button\"),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.menu([\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Action\"),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Another action\"),\n                                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Something else here\"),\n                                ]),\n                            ]),\n                        ]),\n                    ]),\n                ];\n            },\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/components/offcanvas.js?");

/***/ })

}]);