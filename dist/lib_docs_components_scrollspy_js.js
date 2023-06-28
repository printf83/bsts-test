"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_components_scrollspy_js"],{

/***/ "./lib/docs/components/scrollspy.js":
/*!******************************************!*\
  !*** ./lib/docs/components/scrollspy.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   scrollspy: () => (/* binding */ scrollspy)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"./node_modules/@printf83/bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst scrollspy = {\n    title: \"Scrollspy\",\n    description: \"Automatically update Bootstrap navigation or list group components based on scroll position to indicate which link is currently active in the viewport.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"How it works\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Scrollspy toggles the {{.active}} class on anchor ({{<a>}}) elements when the element with the {{id}} referenced by the anchor’s {{href}} is scrolled into view. Scrollspy is best used in conjunction with a Bootstrap {{nav:docs/components/nav::nav component}} or {{nav:docs/components/list::list group}}, but it will also work with any anchor elements in the current page. Here’s how it works.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\n                \"To start, scrollspy requires two things: a navigation, list group, or a simple set of links, plus a scrollable container. The scrollable container can be the {{<body>}} or a custom element with a set {{height}} and {{overflow-y: scroll}}.\",\n                \"On the scrollable container, add {{data-bs-spy='scroll'}} and {{data-bs-target='#navId'}} where {{navId}} is the unique {{id}} of the associated navigation. If there is no focusable element inside the element, be sure to also include a {{tabindex='0'}} to ensure keyboard access.\",\n                \"As you scroll the “spied” container, an {{.active}} class is added and removed from anchor links within the associated navigation. Links must have resolvable {{id}} targets, otherwise they’re ignored. For example, a {{<a href='#home'>home</a>}} must correspond to something in the DOM like {{<div id='home'></div>}}\",\n                \"Target elements that are not visible will be ignored. See the Non-visible elements section below.\",\n            ],\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Examples\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Navbar\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Scroll the area below the navbar and watch the active class change. Open the dropdown menu and watch the dropdown items be highlighted as well.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                let headerItems = [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.item(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.link({ href: \"#scrollspyHeading1\" }, \"First\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.item(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.link({ href: \"#scrollspyHeading2\" }, \"Second\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.item({ dropdown: true }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.button({ navItem: true, href: \"#\" }, \"Dropdown\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.menu([\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#scrollspyHeading3\" }, \"Third\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#scrollspyHeading4\" }, \"Fourth\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.divider(),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#scrollspyHeading5\" }, \"Fifth\"),\n                        ]),\n                    ]),\n                ];\n                let contentItems = [];\n                [\"First\", \"Second\", \"Third\", \"Forth\", \"Fifth\"].forEach((i, ix) => {\n                    contentItems.push(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(4, { id: `scrollspyHeading${ix + 1}` }, `${i} heading`));\n                    contentItems.push(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. Bootstrap keep adding some more example copy here to emphasize the scrolling and highlighting.\"));\n                });\n                return [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.navbar.container({\n                        id: \"navbar-example\",\n                        bgColor: \"body-tertiary\",\n                        paddingX: 3,\n                        marginBottom: 3,\n                        rounded: 2,\n                    }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.navbar.brand({ href: \"#\" }, \"Navbar\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.container({ type: \"pill\" }, headerItems),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.scrollspy({\n                        target: \"#navbar-example\",\n                        rootMargin: \"0px 0px -40%\",\n                        smooth: true,\n                        bgColor: \"body-tertiary\",\n                        padding: 3,\n                        rounded: 2,\n                        overflowX: \"auto\",\n                        style: { maxHeight: \"200px\" },\n                    }, contentItems),\n                ];\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Nested nav\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Scrollspy also works with nested {{.navs}}. If a nested {{.nav}} is {{.active}}, its parents will also be {{.active}}. Scroll the area next to the navbar and watch the active class change.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                let headerItems = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.containerNav({\n                    type: \"pill\",\n                    flex: \"column\",\n                }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.link({ href: \"#item-1\" }, \"Item 1\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.containerNav({\n                        type: \"pill\",\n                        flex: \"column\",\n                    }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.link({ href: \"#item-1-1\", marginStart: 3, marginY: 1 }, \"Item 1-1\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.link({ href: \"#item-1-2\", marginStart: 3, marginY: 1 }, \"Item 1-2\"),\n                    ]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.link({ href: \"#item-2\" }, \"Item 2\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.link({ href: \"#item-3\" }, \"Item 3\"),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.containerNav({\n                        type: \"pill\",\n                        flex: \"column\",\n                    }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.link({ href: \"#item-3-1\", marginStart: 3, marginY: 1 }, \"Item 3-1\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.link({ href: \"#item-3-2\", marginStart: 3, marginY: 1 }, \"Item 3-2\"),\n                    ]),\n                ]);\n                let contentItems = [\"1\", \"1-1\", \"1-2\", \"2\", \"3\", \"3-1\", \"3-2\"].map((i) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ id: `item-${i}` }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(4, `Item ${i}`),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. Bootstrap keep adding some more example copy here to emphasize the scrolling and highlighting.\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible. Multiple visible scrollspy targets at the same time may cause some issues.\"),\n                    ]);\n                });\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 4 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.nav({\n                        id: \"navbar-example2\",\n                        height: 100,\n                        flex: \"column\",\n                        alignItem: \"stretch\",\n                        paddingEnd: 4,\n                        border: \"end\",\n                    }, headerItems)),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 8 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.scrollspy({\n                        target: \"#navbar-example2\",\n                        smooth: true,\n                        overflowX: \"auto\",\n                        style: { maxHeight: \"312px\" },\n                    }, contentItems)),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"List group\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Scrollspy also works with {{.list-groups}}. Scroll the area next to the list group and watch the active class change.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            output: () => {\n                let d = [\"1\", \"2\", \"3\", \"4\"];\n                let headerItems = d.map((i) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.tabList.item({ action: true, href: `#list-item-${i}` }, `Item ${i}`);\n                });\n                let contentItems = [];\n                d.forEach((i) => {\n                    contentItems.push(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(4, { id: `list-item-${i}` }, `Item ${i}`));\n                    contentItems.push(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. Bootstrap keep adding some more example copy here to emphasize the scrolling and highlighting.\"));\n                });\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 4 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.tabList.container({\n                        id: \"list-example\",\n                    }, headerItems)),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 8 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.scrollspy({\n                        target: \"#list-example\",\n                        smooth: true,\n                        overflowX: \"auto\",\n                        style: { maxHeight: \"165px\" },\n                    }, contentItems)),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Simple anchors\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Scrollspy is not limited to nav components and list groups, so it will work on any {{<a>}} anchor elements in the current document. Scroll the area and watch the {{.active}} class change.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            css: `\n\t\t\t#simple-list-example a.active{\n\t\t\t\tbackground-color: var(--bs-secondary-bg);\n\t\t\t}\n\t\t\t`,\n            output: () => {\n                let d = [\"1\", \"2\", \"3\", \"4\", \"5\"];\n                let headerItems = d.map((i) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({ href: `#simple-list-item-${i}`, padding: 2, rounded: true }, `Item ${i}`);\n                });\n                let contentItems = [];\n                d.forEach((i) => {\n                    contentItems.push(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(4, { id: `simple-list-item-${i}` }, `Item ${i}`));\n                    contentItems.push(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. Bootstrap keep adding some more example copy here to emphasize the scrolling and highlighting.\"));\n                });\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 4 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                        id: \"simple-list-example\",\n                        display: \"flex\",\n                        flex: \"column\",\n                        gap: 2,\n                        textAlign: \"center\",\n                    }, headerItems)),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 8 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.scrollspy({\n                        target: \"#simple-list-example\",\n                        smooth: true,\n                        overflowX: \"auto\",\n                        style: { maxHeight: \"232px\" },\n                        data: { \"bs-offset\": \"0\" },\n                    }, contentItems)),\n                ]);\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Non-visible elements\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Target elements that aren’t visible will be ignored and their corresponding nav items won’t receive an {{.active}} class. Scrollspy instances initialized in a non-visible wrapper will ignore all target elements. Use the {{refresh}} method to check for observable elements once the wrapper becomes visible.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"js\",\n            code: `\n\t\t\t\tdocument.querySelectorAll('#nav-tab>[data-bs-toggle=\"tab\"]').forEach(el => {\n\t\t\t\tel.addEventListener('shown.bs.tab', () => {\n\t\t\t\t\tconst target = el.getAttribute('data-bs-target')\n\t\t\t\t\tconst scrollElem = document.querySelector('\\${target} [data-bs-spy=\"scroll\"]')\n\t\t\t\t\tbootstrap.ScrollSpy.getOrCreateInstance(scrollElem).refresh()\n\t\t\t\t});\n\t\t\t\t});\n\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Usage\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Via data attributes\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"To easily add scrollspy behavior to your topbar navigation, add {{data-bs-spy='scroll'}} to the element you want to spy on (most typically this would be the {{<body>}}). Then add the {{data-bs-target}} attribute with the {{id}} or {{class}} name of the parent element of any Bootstrap {{.nav}} component.\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"html\",\n            code: `\n\t\t\t\t<body data-bs-spy=\"scroll\" data-bs-target=\"#navbar-example\">\n\t\t\t\t...\n\t\t\t\t<div id=\"navbar-example\">\n\t\t\t\t\t<ul class=\"nav nav-tabs\" role=\"tablist\">\n\t\t\t\t\t...\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t...\n\t\t\t\t</body>\n\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Via JavaScript\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"js\",\n            code: `\n\t\t\t\tconst scrollSpy = new bootstrap.ScrollSpy(document.body, {\n\t\t\t\t\ttarget: '#navbar-example'\n\t\t\t\t})\n\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Options\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(`As options can be passed via data attributes or JavaScript, you can append an option name to {{data:{'bs-*':'{value}'\\}\\}}, as in {{data:{'bs-animation':'{value}'\\}\\}}. Make sure to change the case type of the option name from {{i::“camelCase”}} to {{i::“kebab-case”}} when passing the options via data attributes. For example, use {{data:{'bs-custom-class':'beautifier'\\}\\}} instead of {{data:{'bs-customClass':'beautifier'\\}\\}}.`),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(`As of Bootstrap 5.2.0, all components support an experimental reserved data attribute data-bs-config that can house simple component configuration as a JSON string. When an element has {{data:{'bs-config':'{\"delay\":0, \"title\":123}'/}/}} and {{data:{'bs-title':'456'/}/}} property, the final {{title}} value will be {{456}} and the separate data attributes will override values given on {{data:{'bs-config':''/}/}}. In addition, existing data attributes are able to house JSON values like {{data:{'bs-delay':'{\"show\":0,\"hide\":150}'/}/}}.`),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.table({\n            item: [\n                [\"Name\", \"Type\", \"Default\", \"Description\"],\n                [\n                    \"{{rootMargin}}\",\n                    \"string\",\n                    \"{{0px 0px -25%}}\",\n                    \"Intersection Observer {{https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin::rootMargin}} valid units, when calculating scroll position.\",\n                ],\n                [\n                    \"{{smoothScroll}}\",\n                    \"boolean\",\n                    \"{{false}}\",\n                    \"Enables smooth scrolling when a user clicks on a link that refers to ScrollSpy observables.\",\n                ],\n                [\"{{target}}\", \"string, DOM element\", \"{{null}}\", \"Specifies element to apply Scrollspy plugin.\"],\n                [\n                    \"{{threshold}}\",\n                    \"array\",\n                    \"{{[0.1, 0.5, 1]}}\",\n                    \"{{IntersectionObserver}} {{https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#threshold::threshold}} valid input, when calculating scroll position.\",\n                ],\n            ],\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"warning\", callout: true }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.alert.header(4, \"Deprecated Options\"),\n            \"Up until v5.1.3 Bootstrap were using {{offset}} & {{method}} options, which are now deprecated and replaced by {{rootMargin}}. To keep backwards compatibility, Bootstrap will continue to parse a given {{offset}} to {{rootMargin}}, but this feature will be removed in {{b::v6}}.\",\n        ]),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Methods\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.table({\n            item: [\n                [\"Method\", \"Description\"],\n                [\"{{dispose}}\", \"Destroys an element’s scrollspy. (Removes stored data on the DOM element)\"],\n                [\n                    \"{{getInstance}}\",\n                    \"{{i::Static}} method to get the scrollspy instance associated with a DOM element.\",\n                ],\n                [\n                    \"{{getOrCreateInstance}}\",\n                    \"{{i::Static}} method to get the scrollspy instance associated with a DOM element, or to create a new one in case it wasn’t initialized.\",\n                ],\n                [\"{{refresh}}\", \"When adding or removing elements in the DOM, you’ll need to call the refresh method.\"],\n            ],\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Here’s an example using the refresh method:\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"js\",\n            code: `\n\t\t\t\tconst dataSpyList = document.querySelectorAll('[data-bs-spy=\"scroll\"]')\n\t\t\t\tdataSpyList.forEach(dataSpyEl => {\n\t\t\t\t\tbootstrap.ScrollSpy.getInstance(dataSpyEl).refresh()\n\t\t\t\t})\n\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Events\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.table({\n            item: [\n                [\"Event\", \"Description\"],\n                [\n                    \"{{activate.bs.scrollspy}}\",\n                    \"This event fires on the scroll element whenever an anchor is activated by the scrollspy.\",\n                ],\n            ],\n        }),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            code: `\n\t\t\t\tconst firstScrollSpyEl = document.querySelector('[data-bs-spy=\"scroll\"]')\n\t\t\t\tfirstScrollSpyEl.addEventListener('activate.bs.scrollspy', () => {\n\t\t\t\t\t// do something...\n\t\t\t\t})\n\t\t\t`,\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/components/scrollspy.js?");

/***/ })

}]);