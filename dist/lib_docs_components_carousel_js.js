"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_components_carousel_js"],{

/***/ "./lib/docs/components/carousel.js":
/*!*****************************************!*\
  !*** ./lib/docs/components/carousel.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   carousel: () => (/* binding */ carousel)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"./node_modules/@printf83/bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst carousel = {\n    title: \"Carousel\",\n    description: \"A slideshow component for cycling through elements—images or slides of text—like a carousel.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"How it works\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\n                \"The carousel ({{b.carousel.container}}) is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.\",\n                \"For performance reasons, {{b::carousels must be manually initialized}} using the {{nav:docs/components/carousel#methods::carousel constructor method}}. Without initialization, some of the event listeners (specifically, the events needed touch/swipe support) will not be registered until a user has explicitly activated a control or indicator.\",\n                \"The only exception are {{nav:docs/components/carousel#autoplaying_carousels::autoplaying carousels}} with the {{ride:'carousel'}} property as these are initialized automatically on page load. If you’re using autoplaying carousels with the data attribute, {{b::don’t explicitly initialize the same carousels with the constructor method}}.\",\n                \"Nested carousels are not supported. You should also be aware that carousels in general can often cause usability and accessibility challenges.\",\n            ],\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"info\", callout: true }, \"The animation effect of this component is dependent on the {{prefers-reduced-motion}} media query. See the {{https://getbootstrap.com/docs/5.3/getting-started/accessibility/#reduced-motion::reduced motion section of Bootstrap accessibility documentation}}.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Basic examples\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Here is a basic example of a carousel with three slides. Note the previous/next controls. Bootstrap recommend using {{b.carousel.inner.control.prev}} and {{b.carousel.inner.control.next}} component, but you can also use {{h.a}} elements with {{role:'button'}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.carousel.container({ id: \"carouselExample\" }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.carousel.indicators.container([0, 1, 2, 3, 4, 5, 6].map((_i, ix) => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.carousel.indicators.button({\n                            target: \"#carouselExample\",\n                            slide: ix,\n                            active: ix === 0 ? true : undefined,\n                        });\n                    })),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.carousel.inner.container([0, 1, 2, 3, 4, 5, 6].map((i, ix) => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.carousel.inner.item.container({ active: ix === 0 ? true : undefined }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.carousel.inner.item.img({\n                                src: `https://picsum.photos/seed/bsts_${i}/710/400.webp`,\n                            }),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.carousel.inner.item.caption([\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(5, `Slide #${ix + 1}`),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(`Some representative placeholder content for the slide #${ix + 1}.`),\n                            ]),\n                        ]);\n                    })),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.carousel.inner.control.prev({ target: \"#carouselExample\" }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.carousel.inner.control.next({ target: \"#carouselExample\" }),\n                ]);\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they’re not explicitly required. Add and customize as you see fit.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"{{b::You must add the}} {{.active}} {{b::class to one of the slides}}, otherwise the carousel will not be visible. Also be sure to set a unique {{id}} on the {{.carousel}} for optional controls, especially if you’re using multiple carousels on a single page. Control and indicator elements must have a {{data-bs-target}} attribute (or {{href}} for links) that matches the {{id}} of the {{.carousel}} element.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"{{bsts}} do this automaticly for you.\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Using item\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.carousel.container({\n                    itemControl: true,\n                    itemIndicator: true,\n                    item: [0, 1, 2, 3, 4, 5, 6].map((i) => {\n                        return {\n                            src: `https://picsum.photos/seed/bsts_${i}/710/400.webp`,\n                            caption: [\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(5, `Slide #${i + 1}`),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(`Some representative placeholder content for the slide #${i + 1}.`),\n                            ],\n                        };\n                    }),\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Indicators\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"You can add indicators to the carousel using {{itemIndicator:true}}, alongside the previous/next controls using {{itemControl:true}}. The indicators let users jump directly to a particular slide.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.carousel.container({\n                    itemControl: true,\n                    itemIndicator: true,\n                    item: [0, 1, 2, 3, 4, 5, 6].map((i) => {\n                        return {\n                            src: `https://picsum.photos/seed/bsts_${i}/710/400.webp`,\n                        };\n                    }),\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Captions\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"You can add captions to your slides with the {{b.carousel.inner.item.caption}} component within any {{b.carousel.inner.item.container}}. They can be easily hidden on smaller viewports, as shown below, with optional {{nav:docs/utilities/display::display utilities}}. Bootstrap hide them initially with {{display:'none'}} and bring them back on medium-sized devices with {{display:'md-block'}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.carousel.container({\n                    itemControl: true,\n                    itemIndicator: true,\n                    item: [0, 1, 2, 3, 4, 5, 6].map((i) => {\n                        return {\n                            src: `https://picsum.photos/seed/bsts_${i}/710/400.webp`,\n                            caption: [\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(5, `Slide #${i + 1}`),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(`Some representative placeholder content for the slide #${i + 1}.`),\n                            ],\n                        };\n                    }),\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Crossfade\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Add {{fade:true}} to your carousel to animate slides with a fade transition instead of a slide. Depending on your carousel content (e.g., text only slides), you may want to add {{bgColor:'body'}} or some custom CSS to the {{b.carousel.inner.item.container}} for proper crossfading.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.carousel.container({\n                    fade: true,\n                    itemControl: true,\n                    item: [0, 1, 2, 3, 4, 5, 6].map((i) => {\n                        return {\n                            src: `https://picsum.photos/seed/bsts_${i}/710/400.webp`,\n                        };\n                    }),\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Autoplaying carousels\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"You can make your carousels autoplay on page load by setting the {{ride}} option to {{carousel}}. Autoplaying carousels automatically pause while hovered with the mouse. This behavior can be controlled with the {{pause}} option. In browsers that support the {{https://www.w3.org/TR/page-visibility/::Page Visibility API}}, the carousel will stop cycling when the webpage is not visible to the user (such as when the browser tab is inactive, or when the browser window is minimized).\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"{{bsts}} automaticly handle this.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"info\", callout: true }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"For accessibility reasons, Bootstrap recommend avoiding the use of autoplaying carousels. If your page does include an autoplaying carousel, Bootstrap recommend providing an additional button or control to explicitly pause/stop the carousel.\"),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"See {{https://www.w3.org/TR/WCAG21/#pause-stop-hide::WCAG 2.1 Success Criterion 2.2.2 Pause, Stop, Hide}}.\"),\n        ]),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.carousel.container({\n                    ride: \"carousel\",\n                    itemControl: true,\n                    item: [0, 1, 2, 3, 4, 5, 6].map((i) => {\n                        return {\n                            src: `https://picsum.photos/seed/bsts_${i}/710/400.webp`,\n                        };\n                    }),\n                });\n            },\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"When the {{ride}} property is set to {{true}}, rather than {{carousel}}, the carousel won’t automatically start to cycle on page load. Instead, it will only start after the first user interaction.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"By default {{bsts}} set {{ride:true}} if {{itemControl:true}} and {{ride:'carousel'}} if {{itemControl:false}}. So it will only start after first user intraction.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.carousel.container({\n                    ride: true,\n                    itemControl: true,\n                    item: [0, 1, 2, 3, 4, 5, 6].map((i) => {\n                        return {\n                            src: `https://picsum.photos/seed/bsts_${i}/710/400.webp`,\n                        };\n                    }),\n                });\n            },\n        }),\n        //------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Individual {{.carousel-item}} interval\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Add {{interval='<milisecond>'}} to a {{b.carousel.inner.item.container}} to change the amount of time to delay between automatically cycling to the next item.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.carousel.container({\n                    itemControl: true,\n                    item: [1000, 2000, 3000, 4000, 5000, 6000, 7000].map((i, ix) => {\n                        return {\n                            interval: i,\n                            src: `https://picsum.photos/seed/bsts_${ix}/710/400.webp`,\n                        };\n                    }),\n                });\n            },\n        }),\n        //------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Autoplaying carousels without controls\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Here’s a carousel with slides only. Note the presence of the .d-block and .w-100 on carousel images to prevent browser default image alignment.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.carousel.container({\n                    ride: \"carousel\",\n                    itemControl: false,\n                    item: [0, 1, 2, 3, 4, 5, 6, 7].map((i) => {\n                        return {\n                            src: `https://picsum.photos/seed/bsts_${i}/710/400.webp`,\n                        };\n                    }),\n                });\n            },\n        }),\n        //------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Disable touch swiping\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Carousels support swiping left/right on touchscreen devices to move between slides. This can be disabled by setting the {{touch}} property to {{false}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.carousel.container({\n                    touch: false,\n                    itemControl: true,\n                    item: [0, 1, 2, 3, 4, 5, 6, 7].map((i) => {\n                        return {\n                            src: `https://picsum.photos/seed/bsts_${i}/710/400.webp`,\n                        };\n                    }),\n                });\n            },\n        }),\n        //------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Dark variant\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"warning\", callout: true }, \"{{b::Heads up!}} Dark variants for components were deprecated in v5.3.0 with the introduction of color modes. Instead of adding {{.carousel-dark}}, set {{theme:'dark'}} on the {{b.carousel.container}}, a parent wrapper, or the component itself.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.carousel.container({\n                    theme: \"dark\",\n                    itemControl: true,\n                    item: [\"first\", \"second\", \"third\", \"fourth\", \"fifth\"].map((i, ix) => {\n                        return {\n                            src: `https://picsum.photos/seed/bsts_${ix}/710/400.webp`,\n                            caption: [\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(5, `${_printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.uppercaseFirst(i)} slide label`),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(`Some representative placeholder content for the ${i} slide.`),\n                            ],\n                        };\n                    }),\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Custom transition\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"The transition duration of {{.carousel-item}} can be changed with the {{$carousel-transition-duration}} Sass variable before compiling or custom styles if you’re using the compiled CSS. If multiple transitions are applied, make sure the transform transition is defined first (e.g. {{transition: transform 2s ease, opacity .5s ease-out}}).\"),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"CSS\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass variables\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"As part of Bootstrap’s evolving CSS variables approach, carousel now use local CSS variables on {{.carousel}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            title: \"scss/_variables.scss\",\n            source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n            code: `\n\t\t\t    $carousel-control-color:             $white;\n\t\t\t\t$carousel-control-width:             15%;\n\t\t\t\t$carousel-control-opacity:           .5;\n\t\t\t\t$carousel-control-hover-opacity:     .9;\n\t\t\t\t$carousel-control-transition:        opacity .15s ease;\n\n\t\t\t\t$carousel-indicator-width:           30px;\n\t\t\t\t$carousel-indicator-height:          3px;\n\t\t\t\t$carousel-indicator-hit-area-height: 10px;\n\t\t\t\t$carousel-indicator-spacer:          3px;\n\t\t\t\t$carousel-indicator-opacity:         .5;\n\t\t\t\t$carousel-indicator-active-bg:       $white;\n\t\t\t\t$carousel-indicator-active-opacity:  1;\n\t\t\t\t$carousel-indicator-transition:      opacity .6s ease;\n\n\t\t\t\t$carousel-caption-width:             70%;\n\t\t\t\t$carousel-caption-color:             $white;\n\t\t\t\t$carousel-caption-padding-y:         1.25rem;\n\t\t\t\t$carousel-caption-spacer:            1.25rem;\n\n\t\t\t\t$carousel-control-icon-width:        2rem;\n\n\t\t\t\t$carousel-control-prev-icon-bg:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$carousel-control-color}'><path d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/></svg>\");\n\t\t\t\t$carousel-control-next-icon-bg:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$carousel-control-color}'><path d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/></svg>\");\n\n\t\t\t\t$carousel-transition-duration:       .6s;\n\t\t\t\t$carousel-transition:                transform $carousel-transition-duration ease-in-out; // Define transform transition first if using multiple transitions (e.g., 'transform 2s ease, opacity .5s ease-out')\n\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Usage\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Via data attributes\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use data attributes to easily control the position of the carousel. {{data-bs-slide}} accepts the keywords {{prev}} or {{next}}, which alters the slide position relative to its current position. Alternatively, use {{data-bs-slide-to}} to pass a raw slide index to the carousel {{data-bs-slide-to='2'}}, which shifts the slide position to a particular index beginning with {{0}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Via JavaScript\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Call carousel manually with:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"js\",\n            code: `\n\t\t\t    const carousel = b.carousel.init('#myCarousel');\n\t\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Options\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(`As options can be passed via data attributes or JavaScript, you can append an option name to {{data:{'bs-*':'{value}'\\}\\}}, as in {{data:{'bs-animation':'{value}'\\}\\}}. Make sure to change the case type of the option name from {{i::“camelCase”}} to {{i::“kebab-case”}} when passing the options via data attributes. For example, use {{data:{'bs-custom-class':'beautifier'\\}\\}} instead of {{data:{'bs-customClass':'beautifier'\\}\\}}.`),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(`As of Bootstrap 5.2.0, all components support an experimental reserved data attribute data-bs-config that can house simple component configuration as a JSON string. When an element has {{data:{'bs-config':'{\"delay\":0, \"title\":123}'/}/}} and {{data:{'bs-title':'456'/}/}} property, the final {{title}} value will be {{456}} and the separate data attributes will override values given on {{data:{'bs-config':''/}/}}. In addition, existing data attributes are able to house JSON values like {{data:{'bs-delay':'{\"show\":0,\"hide\":150}'/}/}}.`),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.table({\n            item: [\n                [\"Name\", \"Type\", \"Default\", \"Description\"],\n                [\n                    \"{{interval}}\",\n                    \"number\",\n                    \"{{5000}}\",\n                    \"The amount of time to delay between automatically cycling an item.\",\n                ],\n                [\"{{keyboard}}\", \"boolean\", \"{{true}}\", \"Whether the carousel should react to keyboard events.\"],\n                [\n                    \"{{pause}}\",\n                    \"string, boolean\",\n                    \"{{'hover'}}\",\n                    \"If set to {{'hover'}}, pauses the cycling of the carousel on {{mouseenter}} and resumes the cycling of the carousel on {{mouseleave}}. If set to {{false}}, hovering over the carousel won’t pause it. On touch-enabled devices, when set to {{'hover'}}, cycling will pause on {{touchend}} (once the user finished interacting with the carousel) for two intervals, before automatically resuming. This is in addition to the mouse behavior.\",\n                ],\n                [\n                    \"{{ride}}\",\n                    \"string, boolean\",\n                    \"{{false}}\",\n                    \"If set to {{true}}, autoplays the carousel after the user manually cycles the first item. If set to {{'carousel'}}, autoplays the carousel on load.\",\n                ],\n                [\n                    \"{{touch}}\",\n                    \"boolean\",\n                    \"{{true}}\",\n                    \"Whether the carousel should support left/right swipe interactions on touchscreen devices.\",\n                ],\n                [\n                    \"{{wrap}}\",\n                    \"boolean\",\n                    \"{{true}}\",\n                    \"Whether the carousel should cycle continuously or have hard stops.\",\n                ],\n            ],\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Methods\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"danger\", callout: true }, \"{{b::All API methods are asynchronous and start a transition.}} They return to the caller as soon as the transition is started, but before it ends. In addition, a method call on a transitioning component will be ignored. {{https://getbootstrap.com/docs/5.3/getting-started/javascript/#asynchronous-functions-and-transitions::Learn more in Bootstrap JavaScript docs}}.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"You can create a carousel instance with the carousel constructor, and pass on any additional options. For example, to manually initialize an autoplaying carousel (assuming you’re not using the {{ride:'carousel'}} property in the markup itself) with a specific interval and with touch support disabled, you can use:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"js\",\n            code: `\n\t\t\t    const myCarouselElement = document.querySelector('#myCarousel');\n\t\t\t\tconst carousel = b.carousel.init(myCarouselElement, {\n\t\t\t\t\tinterval: 2000,\n\t\t\t\t\ttouch: false\n\t\t\t\t});\n\t\t\t\t`,\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.table({\n            item: [\n                [\"Method\", \"Description\"],\n                [\"{{cycle}}\", \"Starts cycling through the carousel items from left to right.\"],\n                [\"{{dispose}}\", \"Destroys an element’s carousel. (Removes stored data on the DOM element)\"],\n                [\n                    \"{{getInstance}}\",\n                    \"Static method which allows you to get the carousel instance associated to a DOM element. You can use it like this: {{bootstrap.Carousel.getInstance(element)}}.\",\n                ],\n                [\n                    \"{{getOrCreateInstance}}\",\n                    \"Static method which returns a carousel instance associated to a DOM element, or creates a new one in case it wasn’t initialized. You can use it like this: {{bootstrap.Carousel.getOrCreateInstance(element)}}.\",\n                ],\n                [\n                    \"{{next}}\",\n                    \"Cycles to the next item. {{b::Returns to the caller before the next item has been shown}} (e.g., before the {{slid.bs.carousel}} event occurs).\",\n                ],\n                [\n                    \"{{nextWhenVisible}}\",\n                    \"Don’t cycle carousel to next when the page, the carousel, or the carousel’s parent aren’t visible. {{b::Returns to the caller before the target item has been shown}}.\",\n                ],\n                [\"{{pause}}\", \"Stops the carousel from cycling through items.\"],\n                [\n                    \"{{prev}}\",\n                    \"Cycles to the previous item. {{b::Returns to the caller before the previous item has been shown}} (e.g., before the {{slid.bs.carousel}} event occurs).\",\n                ],\n                [\n                    \"{{to}}\",\n                    \"Cycles the carousel to a particular frame (0 based, similar to an array). {{b::Returns to the caller before the target item has been shown}} (e.g., before the {{slid.bs.carousel}} event occurs).\",\n                ],\n            ],\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            showConsole: true,\n            output: () => {\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\", overflow: \"auto\" }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                            width: 100,\n                            marginEnd: 3,\n                            bgColor: \"body-tertiary\",\n                            rounded: true,\n                            position: \"relative\",\n                        }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ position: \"absolute\", top: 50, start: 50, tMiddle: true }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.carousel.container({\n                            id: \"example-carousel\",\n                            itemIndicator: true,\n                            item: [0, 1, 2, 3, 4, 5, 6].map((i) => {\n                                return {\n                                    src: `https://picsum.photos/seed/bsts_${i}/710/400.webp`,\n                                };\n                            }),\n                        }))),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ marginStart: \"auto\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.btngroup({ vertical: true, weight: \"sm\" }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                color: \"success\",\n                                on: {\n                                    click: (event) => {\n                                        const elem = _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.carousel.init(\"#example-carousel\", {\n                                            interval: 1500,\n                                        });\n                                        _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.console(event.target, \"b.carousel.init\", elem ? elem : \"null\", elem ? \"success\" : \"danger\");\n                                    },\n                                },\n                            }, \"init\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                color: \"success\",\n                                on: {\n                                    click: (event) => {\n                                        const elem = _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.carousel.getInstance(\"#example-carousel\");\n                                        _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.console(event.target, \"b.carousel.getInstance\", elem ? elem : \"null\", elem ? \"success\" : \"danger\");\n                                    },\n                                },\n                            }, \"getInstance\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                color: \"success\",\n                                on: {\n                                    click: (event) => {\n                                        const elem = _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.carousel.getOrCreateInstance(\"#example-carousel\");\n                                        _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.console(event.target, \"b.carousel.getOrCreateInstance\", elem, elem ? \"success\" : \"danger\");\n                                    },\n                                },\n                            }, \"getOrCreateInstance\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                on: {\n                                    click: () => {\n                                        _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.carousel.cycle(\"#example-carousel\");\n                                    },\n                                },\n                            }, \"cycle\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                on: {\n                                    click: () => {\n                                        _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.carousel.pause(\"#example-carousel\", false);\n                                    },\n                                },\n                            }, \"pause\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                on: {\n                                    click: () => {\n                                        _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.carousel.next(\"#example-carousel\");\n                                    },\n                                },\n                            }, \"next\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                on: {\n                                    click: () => {\n                                        _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.carousel.nextWhenVisible(\"#example-carousel\");\n                                    },\n                                },\n                            }, \"nextWhenVisible\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                on: {\n                                    click: () => {\n                                        _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.carousel.prev(\"#example-carousel\");\n                                    },\n                                },\n                            }, \"prev\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                on: {\n                                    click: () => {\n                                        _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.carousel.to(\"#example-carousel\", _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.rndBetween(0, 6));\n                                    },\n                                },\n                            }, \"to (random)\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                                color: \"danger\",\n                                on: {\n                                    click: () => {\n                                        _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.carousel.dispose(\"#example-carousel\");\n                                    },\n                                },\n                            }, \"dispose\"),\n                        ])),\n                    ]),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Events\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Bootstrap’s carousel class exposes two events for hooking into carousel functionality. Both events have the following additional properties:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\n                \"{{direction}} : The direction in which the carousel is sliding (either 'left' or 'right').\",\n                \"{{relatedTarget}} : The DOM element that is being slid into place as the active item.\",\n                \"{{from}} : The index of the current item\",\n                \"{{to}} : The index of the next item\",\n            ],\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"All carousel events are fired at the carousel itself (i.e. at the {{<div class='carousel'>}}).\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.table({\n            item: [\n                [\"Event type\", \"Description\"],\n                [\"{{slid.bs.carousel}}\", \"Fired when the carousel has completed its slide transition.\"],\n                [\"{{slide.bs.carousel}}\", \"Fires immediately when the slide instance method is invoked.\"],\n            ],\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            showConsole: true,\n            output: () => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.carousel.container({\n                    interval: 3000,\n                    itemControl: true,\n                    item: [0, 1, 2, 3, 4, 5, 6, 7].map((i) => {\n                        return {\n                            src: `https://picsum.photos/seed/bsts_${i}/710/400.webp`,\n                        };\n                    }),\n                    on: {\n                        \"slide.bs.carousel\": (event) => {\n                            let carouselEvent = event;\n                            _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.console(event.target, \"slide.bs.carousel\", `Direction: {{b::${carouselEvent.direction}}}{{br}}\n\t\t\t\t\t\t\t\t\t\t\t\t\tFrom: {{b::${carouselEvent.from}}}{{br}}\n\t\t\t\t\t\t\t\t\t\t\t\t\tTo: {{b::${carouselEvent.to}}}{{br}}\n\t\t\t\t\t\t\t\t\t\t\t\t\tRelatedTarget: {{b::${_printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.elemInfo(carouselEvent.relatedTarget)}}}`, \"info\");\n                        },\n                    },\n                });\n            },\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/components/carousel.js?");

/***/ })

}]);