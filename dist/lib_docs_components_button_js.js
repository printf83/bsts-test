"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_components_button_js"],{

/***/ "./lib/docs/components/button.js":
/*!***************************************!*\
  !*** ./lib/docs/components/button.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   button: () => (/* binding */ button)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst button = {\n    title: \"Buttons\",\n    description: \"Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Examples\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { display: \"flex\", flex: \"wrap\", gap: 2 },\n            output: () => {\n                return [\"primary\", \"secondary\", \"success\", \"danger\", \"warning\", \"info\", \"light\", \"dark\", \"link\"].map((i) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: i }, _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.uppercaseFirst(i));\n                });\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"info\", callout: true }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(5, \"Conveying meaning to assistive technologies\"),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the {{visually:'hidden'}} property.\"),\n        ]),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Disable text wrapping\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"If you don’t want the button text to wrap, you can add the {{textWrap:false}} class to the button. In Sass, you can set {{$btn-white-space: nowrap}} to disable text wrapping for each button.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Button tags\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"{{b.button}} component automaticly add {{.btn}} class and retun a {{h.button}} component. If you provide {{href:<href>}} to the component, it will return {{h.a}} component.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"The {{.btn}} classes are designed to be used with the {{h.button}} component. However, you can also use these classes on {{h.a}} or {{h.input}} component (though some browsers may apply a slightly different rendering).\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"When using button classes on {{h.a}} component that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a {{role:'button'}} to appropriately convey their purpose to assistive technologies such as screen readers.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { display: \"flex\", flex: \"wrap\", gap: 2 },\n            output: () => {\n                let id = _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.UUID();\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"primary\", href: \"#\" }, \"Link\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"primary\" }, \"Button\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"primary\", type: \"submit\" }, \"Submit\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"primary\", type: \"reset\" }, \"Reset\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({ type: \"checkbox\", id: `chk${id}`, toggle: true }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.label({ for: `chk${id}`, color: \"primary\" }, \"Check\"),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Outline buttons\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the {{outline:true}} ones to remove all background images and colors on any {{b.button}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { display: \"flex\", flex: \"wrap\", gap: 2 },\n            output: () => {\n                return [\"primary\", \"secondary\", \"success\", \"danger\", \"warning\", \"info\", \"light\", \"dark\", \"link\"].map((i) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: i, outline: true }, _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.uppercaseFirst(i));\n                });\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"info\", callout: true }, \"Some of the button styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Sizes\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Fancy larger or smaller buttons? Add {{weight:'lg'|'sm'}} for additional sizes.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { display: \"flex\", flex: \"wrap\", gap: 2 },\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ weight: \"lg\", color: \"primary\" }, \"Large button\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ weight: \"lg\", color: \"secondary\" }, \"Large button\"),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { display: \"flex\", flex: \"wrap\", gap: 2 },\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ weight: \"sm\", color: \"primary\" }, \"Small button\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ weight: \"sm\", color: \"secondary\" }, \"Small button\"),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"You can even roll your own custom sizing with CSS variables:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                    color: \"primary\",\n                    style: {\n                        \"--bs-btn-padding-y\": \".25rem\",\n                        \"--bs-btn-padding-x\": \".5rem\",\n                        \"--bs-btn-font-size\": \".75rem\",\n                    },\n                }, \"Custom button\");\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Disabled state\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Make buttons look inactive by adding the {{disabled:true}} property to any {{h.button}} component. Disabled buttons have {{pointer-events: none}} applied to, preventing hover and active states from triggering.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { display: \"flex\", flex: \"wrap\", gap: 2 },\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"primary\", disabled: true }, \"Primary button\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"secondary\", disabled: true }, \"Button\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"primary\", outline: true, disabled: true }, \"Primary button\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"secondary\", outline: true, disabled: true }, \"Button\"),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Disabled buttons using the {{<a>}} element behave a bit different:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\n                \"{{<a>}}s don’t support the disabled attribute, so you must add the {{.disabled}} class to make it visually appear disabled.\",\n                \"Some future-friendly styles are included to disable all {{pointer-events}} on anchor buttons.\",\n                \"Disabled buttons using {{<a>}} should include the {{aria-disabled='true'}} attribute to indicate the state of the element to assistive technologies.\",\n                \"Disabled buttons using {{<a>}} should not include the {{href}} attribute.\",\n            ],\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"{{bsts}} handle this if you using {{b.button({href:'#'})}} component\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { display: \"flex\", flex: \"wrap\", gap: 2 },\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"primary\", href: \"#\", disabled: true }, \"Primary link\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"secondary\", href: \"#\", disabled: true }, \"Link\"),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Link functionality caveat\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"To cover cases where you have to keep the {{href}} property on a disabled link, the {{disabled:true}} property uses {{pointer-events: none}} to try to disable the link functionality of {{h.a}}s. Note that this CSS property is not yet standardized for HTML, but all modern browsers support it. In addition, even in browsers that do support {{pointer-events: none}}, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, in addition to {{aria-disabled='true'}}, also include a {{tabindex='-1'}} attribute on these links to prevent them from receiving keyboard focus, and use custom JavaScript to disable their functionality altogether.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"{{bsts}} handle this automaticly.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { display: \"flex\", flex: \"wrap\", gap: 2 },\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"primary\", href: \"#\", disabled: true }, \"Primary link\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"secondary\", href: \"#\", disabled: true }, \"Link\"),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Block buttons\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Create responsive stacks of full-width, “block buttons” like those in Bootstrap 4 with a mix of Bootstrap display and gap utilities. By using utilities instead of button specific classes, Bootstrap have much greater control over spacing, alignment, and responsive behaviors.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"grid\", gap: 2 }, [new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button(\"Button\"), new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button(\"Button\")]);\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Here Bootstrap create a responsive variation, starting with vertically stacked buttons until the {{md}} breakpoint, where {{display:'md-block'}} replaces the {{display:'grid'}}, thus nullifying the {{gap:2}} utility. Resize your browser to see them change.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            showViewport: true,\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: [\"grid\", \"md-flex\"], gap: 2 }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button(\"Button\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button(\"Button\"),\n                ]);\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"You can adjust the width of your block buttons with grid column width classes. For example, for a half-width “block button”, use {{col:6}}. Center it horizontally with {{marginX:'auto'}}, too.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"grid\", gap: 2, col: 6, marginX: \"auto\" }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button(\"Button\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button(\"Button\"),\n                ]);\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Additional utilities can be used to adjust the alignment of buttons when horizontal. Here Bootstrap taken Bootstrap previous responsive example and added some flex utilities and a margin utility on the button to right align the buttons when they’re no longer stacked.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            showViewport: true,\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: [\"grid\", \"md-flex\"], gap: 2, justifyContent: \"md-end\" }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button(\"Button\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button(\"Button\"),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Button plugin\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"The button plugin allows you to create simple on/off toggle buttons.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"info\", callout: true }, \" Visually, these toggle buttons are identical to the {{nav:docs/forms/check_radio#checkbox_toggle_buttons::checkbox toggle buttons}}. However, they are conveyed differently by assistive technologies: the checkbox toggles will be announced by screen readers as “checked”/“not checked” (since, despite their appearance, they are fundamentally still checkboxes), whereas these toggle buttons will be announced as “button”/“button pressed”. The choice between these two approaches will depend on the type of toggle you are creating, and whether or not the toggle will make sense to users when announced as a checkbox or as an actual button.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Toggle states\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Add {{toggle:true}} to toggle a button’s {{active}} state. If you’re pre-toggling a button, you must manually add the {{active:true}} property. The {{aria:{pressed:'true'/}/}} add automaticly by {{bsts}} to ensure that it is conveyed appropriately to assistive technologies.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { display: \"flex\", flex: \"wrap\", gap: 2 },\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ toggle: true }, \"Toggle button\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ toggle: true, active: true }, \"Active toggle button\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ toggle: true, disabled: true }, \"Disabled toggle button\"),\n                ];\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { display: \"flex\", flex: \"wrap\", gap: 2 },\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ href: \"#\", toggle: true }, \"Toggle button\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ href: \"#\", toggle: true, active: true }, \"Active toggle button\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ href: \"#\", toggle: true, disabled: true }, \"Disabled toggle button\"),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Methods\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"You can create a button instance with the button constructor, for example:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"js\",\n            code: `\n\t\t\t    const bsButton = b.button.init('#myButton')\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.table({\n            item: [\n                [\"Method\", \"Description\"],\n                [\"{{dispose}}\", \"Destroys an element’s button. (Removes stored data on the DOM element)\"],\n                [\n                    \"{{getInstance}}\",\n                    \"Static method which allows you to get the button instance associated to a DOM element, you can use it like this: {{bootstrap.Button.getInstance(element)}}.\",\n                ],\n                [\n                    \"{{getOrCreateInstance}}\",\n                    \"Static method which returns a button instance associated to a DOM element or create a new one in case it wasn’t initialized. You can use it like this: {{bootstrap.Button.getOrCreateInstance(element)}}.\",\n                ],\n                [\"{{toggle}}\", \"Toggles push state. Gives the button the appearance that it has been activated.\"],\n            ],\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"For example, to toggle all buttons\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"js\",\n            code: `\n\t\t\t    document.querySelectorAll('.btn').forEach(buttonElement => {\n\t\t\t\t\tb.button.toggle(buttonElement);\n\t\t\t\t});\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            showConsole: true,\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\", overflow: \"auto\" }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                            width: 100,\n                            marginEnd: 3,\n                            bgColor: \"body-tertiary\",\n                            rounded: true,\n                            position: \"relative\",\n                        }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ position: \"absolute\", top: 50, start: 50, tMiddle: true }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                            id: \"example-button\",\n                            outline: true,\n                            color: \"primary\",\n                            weight: \"lg\",\n                        }, \"Example\"))),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ marginStart: \"auto\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.btngroup({ vertical: true, weight: \"sm\" }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                color: \"success\",\n                                on: {\n                                    click: (event) => {\n                                        const elem = _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button.init(\"#example-button\");\n                                        _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.console(event.target, \"b.button.init\", elem ? elem : \"null\", elem ? \"success\" : \"danger\");\n                                    },\n                                },\n                            }, \"init\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                color: \"success\",\n                                on: {\n                                    click: (event) => {\n                                        const elem = _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button.getInstance(\"#example-button\");\n                                        _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.console(event.target, \"b.button.getInstance\", elem ? elem : \"null\", elem ? \"success\" : \"danger\");\n                                    },\n                                },\n                            }, \"getInstance\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                color: \"success\",\n                                on: {\n                                    click: (event) => {\n                                        const elem = _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button.getOrCreateInstance(\"#example-button\");\n                                        _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.console(event.target, \"b.button.getOrCreateInstance\", elem, elem ? \"success\" : \"danger\");\n                                    },\n                                },\n                            }, \"getOrCreateInstance\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                on: {\n                                    click: () => {\n                                        _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button.toggle(\"#example-button\");\n                                    },\n                                },\n                            }, \"toggle\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                color: \"danger\",\n                                on: {\n                                    click: () => {\n                                        _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button.dispose(\"#example-button\");\n                                    },\n                                },\n                            }, \"dispose\"),\n                        ])),\n                    ]),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"CSS\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Variables\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"As part of Bootstrap’s evolving CSS variables approach, buttons now use local CSS variables on {{.btn}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_buttons.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_buttons.scss\",\n            code: `\n\t\t\t    --#{$prefix}btn-padding-x: #{$btn-padding-x};\n\t\t\t\t--#{$prefix}btn-padding-y: #{$btn-padding-y};\n\t\t\t\t--#{$prefix}btn-font-family: #{$btn-font-family};\n\t\t\t\t@include rfs($btn-font-size, --#{$prefix}btn-font-size);\n\t\t\t\t--#{$prefix}btn-font-weight: #{$btn-font-weight};\n\t\t\t\t--#{$prefix}btn-line-height: #{$btn-line-height};\n\t\t\t\t--#{$prefix}btn-color: #{$body-color};\n\t\t\t\t--#{$prefix}btn-bg: transparent;\n\t\t\t\t--#{$prefix}btn-border-width: #{$btn-border-width};\n\t\t\t\t--#{$prefix}btn-border-color: transparent;\n\t\t\t\t--#{$prefix}btn-border-radius: #{$btn-border-radius};\n\t\t\t\t--#{$prefix}btn-hover-border-color: transparent;\n\t\t\t\t--#{$prefix}btn-box-shadow: #{$btn-box-shadow};\n\t\t\t\t--#{$prefix}btn-disabled-opacity: #{$btn-disabled-opacity};\n\t\t\t\t--#{$prefix}btn-focus-box-shadow: 0 0 0 #{$btn-focus-width} rgba(var(--#{$prefix}btn-focus-shadow-rgb), .5);\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Each {{.btn-*}} modifier class updates the appropriate CSS variables to minimize additional CSS rules with Bootstrap {{button-variant()}}, {{button-outline-variant()}}, and {{button-size()}} mixins.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Here’s an example of building a custom {{.btn-*}} modifier class like Bootstrap do for the buttons unique to Bootstrap docs by reassigning Bootstrap’s CSS variables with a mixture of Bootstrap own CSS and Sass variables.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                    style: {\n                        \"$bd-violet\": \"#ee82ee\",\n                        \"--bd-violet\": \"#ee82ee\",\n                        \"--bd-violet-rgb\": \"238,130,238\",\n                        \"--bs-btn-font-weight\": \"600\",\n                        \"--bs-btn-color\": \"var(--bs-white)\",\n                        \"--bs-btn-bg\": \"var(--bd-violet)\",\n                        \"--bs-btn-border-color\": \"var(--bd-violet)\",\n                        \"--bs-btn-border-radius\": \".5rem\",\n                        \"--bs-btn-hover-color\": \"var(--bs-white)\",\n                        \"--bs-btn-hover-bg\": \"#{shade-color($bd-violet, 10%)}\",\n                        \"--bs-btn-hover-border-color\": \"#{shade-color($bd-violet, 10%)}\",\n                        \"--bs-btn-focus-shadow-rgb\": \"var(--bd-violet-rgb)\",\n                        \"--bs-btn-active-color\": \"var(--bs-btn-hover-color)\",\n                        \"--bs-btn-active-bg\": \"#{shade-color($bd-violet, 20%)}\",\n                        \"--bs-btn-active-border-color\": \"#{shade-color($bd-violet, 20%)}\",\n                    },\n                }, \"Custom button\");\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass variables\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n            code: `\n\t\t\t\t$btn-padding-y:               $input-btn-padding-y;\n\t\t\t\t$btn-padding-x:               $input-btn-padding-x;\n\t\t\t\t$btn-font-family:             $input-btn-font-family;\n\t\t\t\t$btn-font-size:               $input-btn-font-size;\n\t\t\t\t$btn-line-height:             $input-btn-line-height;\n\t\t\t\t$btn-white-space:             null; // Set to nowrap to prevent text wrapping\n\n\t\t\t\t$btn-padding-y-sm:            $input-btn-padding-y-sm;\n\t\t\t\t$btn-padding-x-sm:            $input-btn-padding-x-sm;\n\t\t\t\t$btn-font-size-sm:            $input-btn-font-size-sm;\n\n\t\t\t\t$btn-padding-y-lg:            $input-btn-padding-y-lg;\n\t\t\t\t$btn-padding-x-lg:            $input-btn-padding-x-lg;\n\t\t\t\t$btn-font-size-lg:            $input-btn-font-size-lg;\n\n\t\t\t\t$btn-border-width:            $input-btn-border-width;\n\n\t\t\t\t$btn-font-weight:             $font-weight-normal;\n\t\t\t\t$btn-box-shadow:              inset 0 1px 0 rgba($white, .15), 0 1px 1px rgba($black, .075);\n\t\t\t\t$btn-focus-width:             $input-btn-focus-width;\n\t\t\t\t$btn-focus-box-shadow:        $input-btn-focus-box-shadow;\n\t\t\t\t$btn-disabled-opacity:        .65;\n\t\t\t\t$btn-active-box-shadow:       inset 0 3px 5px rgba($black, .125);\n\n\t\t\t\t$btn-link-color:              var(--#{$prefix}link-color);\n\t\t\t\t$btn-link-hover-color:        var(--#{$prefix}link-hover-color);\n\t\t\t\t$btn-link-disabled-color:     $gray-600;\n\n\t\t\t\t// Allows for customizing button radius independently from global border radius\n\t\t\t\t$btn-border-radius:           $border-radius;\n\t\t\t\t$btn-border-radius-sm:        $border-radius-sm;\n\t\t\t\t$btn-border-radius-lg:        $border-radius-lg;\n\n\t\t\t\t$btn-transition:              color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n\n\t\t\t\t$btn-hover-bg-shade-amount:       15%;\n\t\t\t\t$btn-hover-bg-tint-amount:        15%;\n\t\t\t\t$btn-hover-border-shade-amount:   20%;\n\t\t\t\t$btn-hover-border-tint-amount:    10%;\n\t\t\t\t$btn-active-bg-shade-amount:      20%;\n\t\t\t\t$btn-active-bg-tint-amount:       20%;\n\t\t\t\t$btn-active-border-shade-amount:  25%;\n\t\t\t\t$btn-active-border-tint-amount:   10%;\n\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass mixins\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"There are three mixins for buttons: button and button outline variant mixins (both based on {{$theme-colors}}), plus a button size mixin.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/mixins/_buttons.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/mixins/_buttons.scss\",\n            code: `\n\t\t\t\t@mixin button-variant(\n\t\t\t\t$background,\n\t\t\t\t$border,\n\t\t\t\t$color: color-contrast($background),\n\t\t\t\t$hover-background: if($color == $color-contrast-light, shade-color($background, $btn-hover-bg-shade-amount), tint-color($background, $btn-hover-bg-tint-amount)),\n\t\t\t\t$hover-border: if($color == $color-contrast-light, shade-color($border, $btn-hover-border-shade-amount), tint-color($border, $btn-hover-border-tint-amount)),\n\t\t\t\t$hover-color: color-contrast($hover-background),\n\t\t\t\t$active-background: if($color == $color-contrast-light, shade-color($background, $btn-active-bg-shade-amount), tint-color($background, $btn-active-bg-tint-amount)),\n\t\t\t\t$active-border: if($color == $color-contrast-light, shade-color($border, $btn-active-border-shade-amount), tint-color($border, $btn-active-border-tint-amount)),\n\t\t\t\t$active-color: color-contrast($active-background),\n\t\t\t\t$disabled-background: $background,\n\t\t\t\t$disabled-border: $border,\n\t\t\t\t$disabled-color: color-contrast($disabled-background)\n\t\t\t\t) {\n\t\t\t\t--#{$prefix}btn-color: #{$color};\n\t\t\t\t--#{$prefix}btn-bg: #{$background};\n\t\t\t\t--#{$prefix}btn-border-color: #{$border};\n\t\t\t\t--#{$prefix}btn-hover-color: #{$hover-color};\n\t\t\t\t--#{$prefix}btn-hover-bg: #{$hover-background};\n\t\t\t\t--#{$prefix}btn-hover-border-color: #{$hover-border};\n\t\t\t\t--#{$prefix}btn-focus-shadow-rgb: #{to-rgb(mix($color, $border, 15%))};\n\t\t\t\t--#{$prefix}btn-active-color: #{$active-color};\n\t\t\t\t--#{$prefix}btn-active-bg: #{$active-background};\n\t\t\t\t--#{$prefix}btn-active-border-color: #{$active-border};\n\t\t\t\t--#{$prefix}btn-active-shadow: #{$btn-active-box-shadow};\n\t\t\t\t--#{$prefix}btn-disabled-color: #{$disabled-color};\n\t\t\t\t--#{$prefix}btn-disabled-bg: #{$disabled-background};\n\t\t\t\t--#{$prefix}btn-disabled-border-color: #{$disabled-border};\n\t\t\t\t}\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/mixins/_buttons.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/mixins/_buttons.scss\",\n            code: `\n\t\t\t\t@mixin button-outline-variant(\n\t\t\t\t$color,\n\t\t\t\t$color-hover: color-contrast($color),\n\t\t\t\t$active-background: $color,\n\t\t\t\t$active-border: $color,\n\t\t\t\t$active-color: color-contrast($active-background)\n\t\t\t\t) {\n\t\t\t\t--#{$prefix}btn-color: #{$color};\n\t\t\t\t--#{$prefix}btn-border-color: #{$color};\n\t\t\t\t--#{$prefix}btn-hover-color: #{$color-hover};\n\t\t\t\t--#{$prefix}btn-hover-bg: #{$active-background};\n\t\t\t\t--#{$prefix}btn-hover-border-color: #{$active-border};\n\t\t\t\t--#{$prefix}btn-focus-shadow-rgb: #{to-rgb($color)};\n\t\t\t\t--#{$prefix}btn-active-color: #{$active-color};\n\t\t\t\t--#{$prefix}btn-active-bg: #{$active-background};\n\t\t\t\t--#{$prefix}btn-active-border-color: #{$active-border};\n\t\t\t\t--#{$prefix}btn-active-shadow: #{$btn-active-box-shadow};\n\t\t\t\t--#{$prefix}btn-disabled-color: #{$color};\n\t\t\t\t--#{$prefix}btn-disabled-bg: transparent;\n\t\t\t\t--#{$prefix}btn-disabled-border-color: #{$color};\n\t\t\t\t--#{$prefix}gradient: none;\n\t\t\t\t}\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/mixins/_buttons.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/mixins/_buttons.scss\",\n            code: `\n\t\t\t\t@mixin button-size($padding-y, $padding-x, $font-size, $border-radius) {\n\t\t\t\t--#{$prefix}btn-padding-y: #{$padding-y};\n\t\t\t\t--#{$prefix}btn-padding-x: #{$padding-x};\n\t\t\t\t@include rfs($font-size, --#{$prefix}btn-font-size);\n\t\t\t\t--#{$prefix}btn-border-radius: #{$border-radius};\n\t\t\t\t}\n\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass loops\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Button variants (for regular and outline buttons) use their respective mixins with Bootstrap {{$theme-colors}} map to generate the modifier classes in {{scss/_buttons.scss}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_buttons.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_buttons.scss\",\n            code: `\n\t\t\t\t@each $color, $value in $theme-colors {\n\t\t\t\t\t.btn-#{$color} {\n\t\t\t\t\t\t@if $color == \"light\" {\n\t\t\t\t\t\t@include button-variant(\n\t\t\t\t\t\t\t$value,\n\t\t\t\t\t\t\t$value,\n\t\t\t\t\t\t\t$hover-background: shade-color($value, $btn-hover-bg-shade-amount),\n\t\t\t\t\t\t\t$hover-border: shade-color($value, $btn-hover-border-shade-amount),\n\t\t\t\t\t\t\t$active-background: shade-color($value, $btn-active-bg-shade-amount),\n\t\t\t\t\t\t\t$active-border: shade-color($value, $btn-active-border-shade-amount)\n\t\t\t\t\t\t);\n\t\t\t\t\t\t} @else if $color == \"dark\" {\n\t\t\t\t\t\t@include button-variant(\n\t\t\t\t\t\t\t$value,\n\t\t\t\t\t\t\t$value,\n\t\t\t\t\t\t\t$hover-background: tint-color($value, $btn-hover-bg-tint-amount),\n\t\t\t\t\t\t\t$hover-border: tint-color($value, $btn-hover-border-tint-amount),\n\t\t\t\t\t\t\t$active-background: tint-color($value, $btn-active-bg-tint-amount),\n\t\t\t\t\t\t\t$active-border: tint-color($value, $btn-active-border-tint-amount)\n\t\t\t\t\t\t);\n\t\t\t\t\t\t} @else {\n\t\t\t\t\t\t@include button-variant($value, $value);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t@each $color, $value in $theme-colors {\n\t\t\t\t\t.btn-outline-#{$color} {\n\t\t\t\t\t\t@include button-outline-variant($value);\n\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t`,\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/components/button.js?");

/***/ })

}]);