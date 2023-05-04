"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_components_collapse_js"],{

/***/ "./lib/docs/components/collapse.js":
/*!*****************************************!*\
  !*** ./lib/docs/components/collapse.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"collapse\": () => (/* binding */ collapse)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst collapse = {\n    title: \"Collapse\",\n    description: \"Toggle the visibility of content across your project with a few classes and Bootstrap JavaScript plugins.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"How it works\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"The collapse JavaScript plugin is used to show and hide content. {{b.collapse.toggle}} are used as triggers that are mapped to specific elements you toggle. Collapsing an element will animate the {{height}} from its current value to {{0}}. Given how CSS handles animations, you cannot use {{padding}} on a {{b.collapse.container}} element. Instead, use the class as an independent wrapping element.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.alert.container({ color: \"info\", callout: true }, \"The animation effect of this component is dependent on the {{prefers-reduced-motion}} media query. See the {{nav:docs/gettingstarted/accessibility#reduce_motion::reduced motion section of Bootstrap accessibility documentation}}.\")),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Example\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Click the buttons below to show and hide another element via class changes:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\n                \"{{.collapse}} hides content\",\n                \"{{.collapsing}} is applied during transitions\",\n                \"{{.collapse.show}} shows content\",\n            ],\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Generally, {{bsts}} recommend using a {{b.collapse.toggle}} with the {{target}} property. While not recommended from a semantic point of view, you can also use an {{b.collapse.toggle}} with the {{href}} property ({{bsts}} automaticly add {{role:'button'}} and the {{toggle:'collapse'}} because it's required by Bootstrap.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { gap: 2 },\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\", gap: 2 }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.collapse.toggle({ href: \"#collapseExample\", controlfor: \"collapseExample\" }, \"Link with href\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.collapse.toggle({ target: \"#collapseExample\", controlfor: \"collapseExample\" }, \"Button with data-bs-target\"),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.collapse.container({ id: \"collapseExample\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.container(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.body(\"Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.\"))),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Horizontal\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"The collapse plugin supports horizontal collapsing. Add the {{horizontal:true}} to {{b.collapse.container}} to transition the {{width}} instead of {{height}} and set a {{width}} on the immediate child element. Feel free to write your own custom Sass, use inline styles, or use Bootstrap {{nav:docs/utilities/sizing::width utilities}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.alert.container({ color: \"info\", callout: true }, \"Please note that while the example below has a {{min-height}} set to avoid excessive repaints in Bootstrap docs, this is not explicitly required. {{b::Only the}} {{width}} {{b::on the child element is required}}.\")),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { gap: 2 },\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\", gap: 2 }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.collapse.toggle({ target: \"#collapseWidthExample\", controlfor: \"collapseWidthExample\" }, \"Toggle width collapse\"),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ style: { minHeight: \"120px\" } }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.collapse.container({ id: \"collapseWidthExample\", horizontal: true }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.container({ style: { width: \"300px\" } }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.body(\"This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.\")))),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Multiple toggles and targets\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"A {{b.collapse.toggle}} component can show and hide multiple elements by referencing them with a selector in its {{target}} or {{href}} property. Conversely, multiple {{b.collapse.toggle}} component can show and hide the same element if they each reference it with their {{target}} or {{href}} property.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { gap: 2 },\n            output: () => {\n                const toggle1 = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.collapse.toggle({ href: \"#multiCollapseExample1\", controlfor: \"multiCollapseExample1\" }, \"Toggle first element\");\n                const toggle2 = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.collapse.toggle({ target: \"#multiCollapseExample2\", controlfor: \"multiCollapseExample2\" }, \"Toggle second element\");\n                const toggleBoth = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.collapse.toggle({ target: \".multi-collapse\", controlfor: \"multiCollapseExample1 multiCollapseExample2\" }, \"Toggle both element\");\n                const collapse1 = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.collapse.container({ id: \"multiCollapseExample1\", class: \"multi-collapse\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.container(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.body(\"Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.\")));\n                const collapse2 = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.collapse.container({ id: \"multiCollapseExample2\", class: \"multi-collapse\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.container(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.body(\"Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.\")));\n                const rowDiv = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 6 }, collapse1),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 6 }, collapse2),\n                ]);\n                return [toggle1, toggle2, toggleBoth, rowDiv];\n            },\n        }),\n        // new e.code({\n        // \toutputAttr: { gap: 2 },\n        // \toutput: () => {\n        // \t\treturn [\n        // \t\t\tnew b.collapse.toggle(\n        // \t\t\t\t{ href: \"#multiCollapseExample1\", controlfor: \"multiCollapseExample1\" },\n        // \t\t\t\t\"Toggle first element\"\n        // \t\t\t),\n        // \t\t\tnew b.collapse.toggle(\n        // \t\t\t\t{ target: \"#multiCollapseExample2\", controlfor: \"multiCollapseExample2\" },\n        // \t\t\t\t\"Toggle second element\"\n        // \t\t\t),\n        // \t\t\tnew b.collapse.toggle(\n        // \t\t\t\t{ target: \".multi-collapse\", controlfor: \"multiCollapseExample1 multiCollapseExample2\" },\n        // \t\t\t\t\"Toggle both element\"\n        // \t\t\t),\n        // \t\t\tnew h.div({ row: true }, [\n        // \t\t\t\tnew h.div(\n        // \t\t\t\t\t{ col: 6 },\n        // \t\t\t\t\tnew b.collapse.container(\n        // \t\t\t\t\t\t{ id: \"multiCollapseExample1\", class: \"multi-collapse\" },\n        // \t\t\t\t\t\tnew b.card.container(\n        // \t\t\t\t\t\t\tnew b.card.body(\n        // \t\t\t\t\t\t\t\t\"Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.\"\n        // \t\t\t\t\t\t\t)\n        // \t\t\t\t\t\t)\n        // \t\t\t\t\t)\n        // \t\t\t\t),\n        // \t\t\t\tnew h.div(\n        // \t\t\t\t\t{ col: 6 },\n        // \t\t\t\t\tnew b.collapse.container(\n        // \t\t\t\t\t\t{ id: \"multiCollapseExample2\", class: \"multi-collapse\" },\n        // \t\t\t\t\t\tnew b.card.container(\n        // \t\t\t\t\t\t\tnew b.card.body(\n        // \t\t\t\t\t\t\t\t\"Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.\"\n        // \t\t\t\t\t\t\t)\n        // \t\t\t\t\t\t)\n        // \t\t\t\t\t)\n        // \t\t\t\t),\n        // \t\t\t]),\n        // \t\t];\n        // \t},\n        // }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Accessibility\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Be sure to add {{aria-expanded}} to the control element. This attribute explicitly conveys the current state of the collapsible element tied to the control to screen readers and similar assistive technologies. If the collapsible element is closed by default, the attribute on the control element should have a value of {{aria-expanded='false'}}. If you’ve set the collapsible element to be open by default using the {{show}} class, set {{aria-expanded='true'}} on the control instead. The plugin will automatically toggle this attribute on the control based on whether or not the collapsible element has been opened or closed (via JavaScript, or because the user triggered another control element also tied to the same collapsible element). If the control element’s HTML element is not a button (e.g., an {{<a>}} or {{<div>}}), the attribute {{role='button'}} should be added to the element.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"{{bsts}} automaticly handle this when you using {{b.collapse.toggle}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"If your {{b.collapse.toggle}} component is targeting a single {{b.collapse.container}} component – i.e. the {{target}} property is pointing to an {{id}} selector – you should add the {{controlfor}} property to the control element, containing the {{id}} of the {{b.collapse.container}}. Modern screen readers and similar assistive technologies make use of this attribute to provide users with additional shortcuts to navigate directly to the {{b.collapse.container}} component itself.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Note that Bootstrap’s current implementation does not cover the various optional keyboard interactions described in the {{https://www.w3.org/WAI/ARIA/apg/patterns/accordion/::ARIA Authoring Practices Guide accordion pattern}} - you will need to include these yourself with custom JavaScript.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"CSS\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass variables\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss\",\n            code: `\n\t\t\t    $transition-collapse:         height .35s ease;\n\t\t\t\t$transition-collapse-width:   width .35s ease;\t\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Classes\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Collapse transition classes can be found in {{scss/_transitions.scss}} as these are shared across multiple components (collapse and accordion).\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_transitions.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_transitions.scss\",\n            code: `\n\t\t\t\t.collapse {\n\t\t\t\t&:not(.show) {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t.collapsing {\n\t\t\t\theight: 0;\n\t\t\t\toverflow: hidden;\n\t\t\t\t@include transition($transition-collapse);\n\n\t\t\t\t&.collapse-horizontal {\n\t\t\t\t\twidth: 0;\n\t\t\t\t\theight: auto;\n\t\t\t\t\t@include transition($transition-collapse-width);\n\t\t\t\t}\n\t\t\t\t}\n\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Usage\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"The collapse plugin utilizes a few classes to handle the heavy lifting:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\n                \"{{.collapse}} hides the content\",\n                \"{{.collapse.show}} shows the content\",\n                \"{{.collapsing}} is added when the transition starts, and removed when it finishes\",\n            ],\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"These classes can be found in {{_transitions.scss}}.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Via data attributes\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Just use {{b.collapse.toggle}} and set {{target}} to the {{b.collapse.container}} to automatically assign control of one or more collapsible elements. The {{target}} property accepts a CSS selector to apply the collapse to. Be sure to use the {{b.collapse.container}} to the collapsible element. If you’d like it to default open, add the additional {{show}} property.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"To add accordion-like group management to a collapsible area, add set {{parent:'#selector'}} property. Refer to the {{nav:docs/components/accordion::accordion page}} for more information.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"{{bsts}} automaticly handle this when you using {{b.accordion.container}}.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Via JavaScript\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Enable manually with:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"js\",\n            code: `\n\t\t\t\tconst collapseElementList = document.querySelectorAll('.collapse')\n\t\t\t\tconst collapseList = [...collapseElementList].map(collapseEl => b.collapse.init(collapseEl))\n\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Options\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(`As options can be passed via data attributes or JavaScript, you can append an option name to {{data:{'bs-*':'{value}'\\}\\}}, as in {{data:{'bs-animation':'{value}'\\}\\}}. Make sure to change the case type of the option name from {{i::“camelCase”}} to {{i::“kebab-case”}} when passing the options via data attributes. For example, use {{data:{'bs-custom-class':'beautifier'\\}\\}} instead of {{data:{'bs-customClass':'beautifier'\\}\\}}.`),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(`As of Bootstrap 5.2.0, all components support an experimental reserved data attribute data-bs-config that can house simple component configuration as a JSON string. When an element has {{data:{'bs-config':'{\"delay\":0, \"title\":123}'/}/}} and {{data:{'bs-title':'456'/}/}} property, the final {{title}} value will be {{456}} and the separate data attributes will override values given on {{data:{'bs-config':''/}/}}. In addition, existing data attributes are able to house JSON values like {{data:{'bs-delay':'{\"show\":0,\"hide\":150}'/}/}}.`),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.table({\n            item: [\n                [\"Name\", \"Type\", \"Default\", \"Description\"],\n                [\n                    \"{{parent}}\",\n                    \"selector, DOM element\",\n                    \"{{null}}\",\n                    \"If parent is provided, then all collapsible elements under the specified parent will be closed when this collapsible item is shown. (similar to traditional accordion behavior - this is dependent on the {{card}} class). The attribute has to be set on the target collapsible area.\",\n                ],\n                [\"{{toggle}}\", \"boolean\", \"{{true}}\", \"Toggles the collapsible element on invocation.\"],\n            ],\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Methods\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.alert.container({ color: \"danger\", callout: true }, \"{{b::All API methods are asynchronous and start a transition}}. They return to the caller as soon as the transition is started, but before it ends. In addition, a method call on a transitioning component will be ignored. {{https://getbootstrap.com/docs/5.3/getting-started/javascript/#asynchronous-functions-and-transitions::Learn more in Bootstrap JavaScript docs}}.\")),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Activates your content as a collapsible element. Accepts an optional options object.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"You can create a collapse instance with the constructor, for example:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"js\",\n            code: `\n\t\t\t\tconst bsCollapse = b.collapse.init('#myCollapse', {\n\t\t\t\t\ttoggle: false\n\t\t\t\t});\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.table({\n            item: [\n                [\"Method\", \"Description\"],\n                [\"{{dispose}}\", \"Destroys an element’s collapse. (Removes stored data on the DOM element)\"],\n                [\n                    \"{{getInstance}}\",\n                    \"Static method which allows you to get the collapse instance associated to a DOM element, you can use it like this: {{bootstrap.Collapse.getInstance(element)}}.\",\n                ],\n                [\n                    \"{{getOrCreateInstance}}\",\n                    \"Static method which returns a collapse instance associated to a DOM element or create a new one in case it wasn’t initialized. You can use it like this: {{bootstrap.Collapse.getOrCreateInstance(element)}}.\",\n                ],\n                [\n                    \"{{hide}}\",\n                    \"Hides a collapsible element. {{b::Returns to the caller before the collapsible element has actually been hidden}} (e.g., before the {{hidden.bs.collapse}} event occurs).\",\n                ],\n                [\n                    \"{{show}}\",\n                    \"Shows a collapsible element. {{b::Returns to the caller before the collapsible element has actually been shown}} (e.g., before the {{shown.bs.collapse}} event occurs).\",\n                ],\n                [\n                    \"{{toggle}}\",\n                    \"Toggles a collapsible element to shown or hidden. {{b::Returns to the caller before the collapsible element has actually been shown or hidden}} (i.e. before the {{shown.bs.collapse}} or {{hidden.bs.collapse}} event occurs).\",\n                ],\n            ],\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            showConsole: true,\n            output: () => {\n                const collapseContent = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.body(\"Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.\");\n                const collapseContainer = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.collapse.container({ id: \"example-collapse\", autoInit: false }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.container(collapseContent));\n                const initButton = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                    color: \"success\",\n                    on: {\n                        click: (event) => {\n                            const elem = _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.collapse.init(\"#example-collapse\");\n                            _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.console(event.target, \"b.collapse.init\", elem ? elem : \"null\", elem ? \"success\" : \"danger\");\n                        },\n                    },\n                }, \"init\");\n                const getInstanceButton = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                    color: \"success\",\n                    on: {\n                        click: (event) => {\n                            const elem = _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.collapse.getInstance(\"#example-collapse\");\n                            _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.console(event.target, \"b.collapse.getInstance\", elem ? elem : \"null\", elem ? \"success\" : \"danger\");\n                        },\n                    },\n                }, \"getInstance\");\n                const getOrCreateInstanceButton = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                    color: \"success\",\n                    on: {\n                        click: (event) => {\n                            const elem = _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.collapse.getOrCreateInstance(\"#example-collapse\");\n                            _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.console(event.target, \"b.collapse.getOrCreateInstance\", elem, elem ? \"success\" : \"danger\");\n                        },\n                    },\n                }, \"getOrCreateInstance\");\n                const hideButton = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                    on: {\n                        click: () => {\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.collapse.hide(\"#example-collapse\");\n                        },\n                    },\n                }, \"hide\");\n                const showButton = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                    on: {\n                        click: () => {\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.collapse.show(\"#example-collapse\");\n                        },\n                    },\n                }, \"show\");\n                const toggleButton = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                    on: {\n                        click: () => {\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.collapse.toggles(\"#example-collapse\");\n                        },\n                    },\n                }, \"toggle\");\n                const disposeButton = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                    color: \"danger\",\n                    on: {\n                        click: () => {\n                            _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.collapse.dispose(\"#example-collapse\");\n                        },\n                    },\n                }, \"dispose\");\n                const buttonGroup = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.btngroup({ vertical: true, weight: \"sm\" }, [\n                    initButton,\n                    getInstanceButton,\n                    getOrCreateInstanceButton,\n                    hideButton,\n                    showButton,\n                    toggleButton,\n                    disposeButton,\n                ]);\n                const previewContainer = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                    width: 100,\n                    marginEnd: 3,\n                    bgColor: \"body-tertiary\",\n                    rounded: true,\n                    position: \"relative\",\n                }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                        position: \"absolute\",\n                        top: 50,\n                        start: 50,\n                        tMiddle: true,\n                    }, collapseContainer),\n                ]);\n                const controlContainer = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                    marginStart: \"auto\",\n                }, buttonGroup);\n                const mainContainer = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\" }, [previewContainer, controlContainer]);\n                return [mainContainer];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Events\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Bootstrap’s collapse class exposes a few events for hooking into collapse functionality.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.table({\n            item: [\n                [\"Event type\", \"Description\"],\n                [\"{{hide.bs.collapse}}\", \"This event is fired immediately when the {{hide}} method has been called.\"],\n                [\n                    \"{{hidden.bs.collapse}}\",\n                    \"This event is fired when a collapse element has been hidden from the user (will wait for CSS transitions to complete).\",\n                ],\n                [\"{{show.bs.collapse}}\", \"This event fires immediately when the {{show}} instance method is called.\"],\n                [\n                    \"{{shown.bs.collapse}}\",\n                    \"This event is fired when a collapse element has been made visible to the user (will wait for CSS transitions to complete).\",\n                ],\n            ],\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { gap: 2 },\n            showConsole: true,\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.collapse.toggle({ target: \"#collapseEventExample\", controlfor: \"collapseEventExample\" }, \"Collapse event\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.collapse.container({\n                        id: \"collapseEventExample\",\n                        on: {\n                            \"hidden.bs.collapse\": (event) => {\n                                let target = event.target;\n                                _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.console(event.target, \"hidden.bs.collapse\", `Target: {{b::${_printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.elemInfo(target)}}}`, \"danger\");\n                            },\n                            \"shown.bs.collapse\": (event) => {\n                                let target = event.target;\n                                _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.console(event.target, \"shown.bs.collapse\", `Target: {{b::${_printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.elemInfo(target)}}}`, \"success\");\n                            },\n                        },\n                    }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.container(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.body(\"Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.\"))),\n                ];\n            },\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/components/collapse.js?");

/***/ })

}]);