"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_gettingstarted_introduction_js"],{

/***/ "./lib/docs/gettingstarted/introduction.js":
/*!*************************************************!*\
  !*** ./lib/docs/gettingstarted/introduction.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"introduction\": () => (/* binding */ introduction)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index */ \"./lib/ctl/example/_index.js\");\n\n\nconst BSTSCDN = \"https://cdn.jsdelivr.net/npm/@printf83/bsts@0.1.109/+esm\";\nconst BSCDNCSS = [\n    \"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css\",\n    \"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css\",\n    \"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css\",\n];\nconst BSCDNJS = [\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js\"];\nconst introduction = {\n    title: \"Get started with Bootstrap\",\n    description: \"Bootstrap is a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes.\",\n    item: [\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.alert({ color: \"warning\", callout: true }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.alert.header(3, \"Disclaimer\"),\n            \"This is {{b::not a real Bootstrap}} website. This is only a {{b::Bootstrap TS test website}} to test {{b::Bootstrap TS library}} {{bc::(bsts)}} and make sure it's fully support Bootstrap.\",\n        ]),\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.title(\"Quick start\"),\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.text([\n            \"Get started by including Bootstrap’s production-ready CSS and JavaScript via CDN without the need for any build steps. See it in practice with this \",\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                href: \"#\",\n                on: {\n                    click: () => {\n                        _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.codePen({\n                            title: \"Bootstrap TS demo\",\n                            description: \"Create bootstrap using TS/JS\",\n                            private: false,\n                            tags: [\"bsts\", \"Bootstrap TS\", \"@printf83/bsts\"],\n                            editors: \"001\",\n                            layout: \"top\",\n                            css_external: BSCDNCSS,\n                            head: _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.codeBeautify(\"html\", `<meta charset=\"utf-8\">\n\t\t\t\t\t\t\t\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">`),\n                            html: _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.codeBeautify(\"html\", `<div id=\"root\"></div>`),\n                            js_external: BSCDNJS,\n                            js: _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.codeBeautify(\"js\", `\n\t\t\t\t\t\t\t\t\timport {core, h, b} from '${BSTSCDN}';\n\n\t\t\t\t\t\t\t\t\tconst Component1 = new h.p(\"Hello world\");\n\t\t\t\t\t\t\t\t\tconst Component2 = new b.button({ color: \"primary\" }, \"Button\");\n\t\t\t\t\t\t\t\t\tconst Component3 = new h.div({ row: true }, [\n\t\t\t\t\t\t\t\t\t\tnew h.div({ col:4 }, \".col-4\"),\n\t\t\t\t\t\t\t\t\t\tnew h.div({ col:4 }, \".col-4\"),\n\t\t\t\t\t\t\t\t\t\tnew h.div({ col:4 }, \".col-4\"),\n\t\t\t\t\t\t\t\t\t]);\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\tcore.documentReady(() => {\n\t\t\t\t\t\t\t\t\t\tcore.replaceChild(document.getElementById(\"root\"), [\n\t\t\t\t\t\t\t\t\t\t\tComponent1, \n\t\t\t\t\t\t\t\t\t\t\tComponent2, \n\t\t\t\t\t\t\t\t\t\t\tComponent3\n\t\t\t\t\t\t\t\t\t\t]);\n\t\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t\t`),\n                        });\n                    },\n                },\n            }, \"Bootstrap TS Demo\"),\n            \" on {{CodePen}}.\",\n        ]),\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.ol({\n            item: [\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div([\n                    '{{b::Create a new }}{{bc::index.html}}{{b:: file in your project root}}. Include the {{<meta name=\"viewport\">}} tag as well for {{https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag::proper responsive behavior}} in mobile devices.',\n                    new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                        class: \"ms-n4\",\n                        marginStart: \"md-0\",\n                        type: \"html\",\n                        code: `\n\t\t\t\t\t\t\t<!doctype html>\n\t\t\t\t\t\t\t<html lang=\"en\">\n\t\t\t\t\t\t\t<head>\n\t\t\t\t\t\t\t\t<meta charset=\"utf-8\">\n\t\t\t\t\t\t\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\t\t\t\t\t\t\t\t<link rel=\"stylesheet\" href=\"${BSCDNCSS[0]}\">\n\t\t\t\t\t\t\t\t<link rel=\"stylesheet\" href=\"${BSCDNCSS[1]}\">\n\t\t\t\t\t\t\t\t<link rel=\"stylesheet\" href=\"${BSCDNCSS[2]}\">\n\t\t\t\t\t\t\t\t<title>Bootstrap TS demo</title>\n\t\t\t\t\t\t\t</head>\n\t\t\t\t\t\t\t<body>\n\t\t\t\t\t\t\t\t<div id=\"root\"></div>\n\t\t\t\t\t\t\t\t<script src=\"${BSCDNJS[0]}\"></script>\n\t\t\t\t\t\t\t</body>\n\t\t\t\t\t\t\t</html>\n\t\t\t\t\t\t\t`,\n                    }),\n                ]),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div([\n                    `{{b::Create a new }}{{bc::index.js}}{{b:: file in your project root}}. Import {{bsts}} library {{import {core, h} from \"${BSTSCDN}\";}} and write some code. Learn more about {{bsts}} {{nav:docs/gettingstarted/introduction#expose_function::Exposed function}}.`,\n                    new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                        class: \"ms-n4\",\n                        marginStart: \"md-0\",\n                        type: \"js\",\n                        code: `\n\t\t\t\t\t\t\timport {core, h, b} from '${BSTSCDN}';\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tconst Component1 = new h.p(\"Hello world\");\n\t\t\t\t\t\t\tconst Component2 = new b.button({ color: \"primary\" }, \"Button\");\n\t\t\t\t\t\t\tconst Component3 = new h.div({ row: true }, [\n\t\t\t\t\t\t\t\tnew h.div({ col:4 }, \".col-4\"),\n\t\t\t\t\t\t\t\tnew h.div({ col:4 }, \".col-4\"),\n\t\t\t\t\t\t\t\tnew h.div({ col:4 }, \".col-4\"),\n\t\t\t\t\t\t\t]);\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tcore.documentReady(() => {\n\t\t\t\t\t\t\t\tcore.replaceChild(document.getElementById(\"root\"), [\n\t\t\t\t\t\t\t\t\tComponent1, \n\t\t\t\t\t\t\t\t\tComponent2, \n\t\t\t\t\t\t\t\t\tComponent3\n\t\t\t\t\t\t\t\t]);\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t`,\n                    }),\n                ]),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div([\n                    \"{{b::Include your index.js file in the index.html}}. Place the {{<script>}} tag before the closing {{</body>}}.\",\n                    new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                        class: \"ms-n4\",\n                        marginStart: \"md-0\",\n                        type: \"html\",\n                        code: `\n\t\t\t\t\t\t\t<!doctype html>\n\t\t\t\t\t\t\t<html lang=\"en\">\n\t\t\t\t\t\t\t<head>\n\t\t\t\t\t\t\t\t<meta charset=\"utf-8\">\n\t\t\t\t\t\t\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\t\t\t\t\t\t\t\t<link rel=\"stylesheet\" href=\"${BSCDNCSS[0]}\">\n\t\t\t\t\t\t\t\t<link rel=\"stylesheet\" href=\"${BSCDNCSS[1]}\">\n\t\t\t\t\t\t\t\t<link rel=\"stylesheet\" href=\"${BSCDNCSS[2]}\">\n\t\t\t\t\t\t\t\t<title>Bootstrap TS demo</title>\n\t\t\t\t\t\t\t</head>\n\t\t\t\t\t\t\t<body>\n\t\t\t\t\t\t\t\t<div id=\"root\"></div>\n\t\t\t\t\t\t\t\t<script src=\"${BSCDNJS[0]}\"></script>\n\n\t\t\t\t\t\t\t\t<!--- put your script here ---->\n\t\t\t\t\t\t\t\t<script src=\"index.js\" type=\"module\"></script>\n\t\t\t\t\t\t\t</body>\n\t\t\t\t\t\t\t</html>\n\t\t\t\t\t\t\t`,\n                    }),\n                ]),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div(\"{{b::Hello, world!}} Open the page in your browser of choice to see your Bootstrapped page. Now you can start building with Bootstrap by creating your own {{nav:docs/layout/grid::layout}}, adding dozens of {{nav:docs/components/button::components}}, and utilizing {{https://getbootstrap.com/docs/5.3/examples/::Bootstrap official examples}}.\"),\n            ],\n        }),\n        //-----------------------\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.title(\"Expose function\"),\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.text(\"As reference, here are {{bsts}} primary CDN links.\"),\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"js\",\n            code: `import { core } from \"${BSTSCDN}\";`,\n        }),\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.table({\n            item: [\n                [\"Library\", \"Description\"],\n                [\"core\", \"Core function to build html using {{bsts}}\"],\n                [\"I\", \"Interface if you like to use {{Typescript}}\"],\n                [\"h\", \"HTML component\"],\n                [\"H\", \"Create HTML component without {{new}} keyword\"],\n                [\"b\", \"Bootstrap component\"],\n                [\"B\", \"Create Bootstrap component without {{new}} keyword\"],\n                [\"t\", \"Main class that build all HTML and Bootstrap component\"],\n                [\"T\", \"Create t without {{new}} keyword.\"],\n                [\"s\", \"Class to allow HTML syntax and process by {{core.build}} as HTML\"],\n                [\"S\", \"Create s wihthout {{new}} keyword.\"],\n            ],\n        }),\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.text(\"Example usage.\"),\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"js\",\n            code: `\n\t\t\t\timport {core, h, b} from \"${BSTSCDN}\";\n\n\t\t\t\tconst Component1 = new h.p(\"Hello world\");\n\t\t\t\tconst Component2 = new b.button({ color: \"primary\" }, \"Button\");\n\n\t\t\t\tcore.documentReady(() => {\n\t\t\t\t\tcore.replaceChild(document.getElementById(\"root\"), [\n\t\t\t\t\t\tComponent1,\n\t\t\t\t\t\tComponent2,\n\t\t\t\t\t]);\n\t\t\t\t});\n\t\t\t\t`,\n        }),\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.text(\"Example usage without {{new}} keyword.\"),\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"js\",\n            code: `\n\t\t\t\timport {core, H, B} from \"${BSTSCDN}\";\n\n\t\t\t\tconst Component1 = H.P(\"Hello world\");\n\t\t\t\tconst Component2 = B.Button({ color: \"primary\" }, \"Button\");\n\n\t\t\t\tcore.documentReady(() => {\n\t\t\t\t\tcore.replaceChild(document.getElementById(\"root\"), [\n\t\t\t\t\t\tComponent1,\n\t\t\t\t\t\tComponent2,\n\t\t\t\t\t]);\n\t\t\t\t});\n\t\t\t\t`,\n        }),\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.text(\"You can also use the CDN to fetch any of Bootstrap {{nav:docs/gettingstarted/content::additional builds listed in the Contents page}}.\"),\n        //-----------------------\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.title(\"Next steps\"),\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\n                \"Read a bit more about some {{nav:docs/gettingstarted/introduction#important_globals::important global environment settings}} that Bootstrap utilizes.\",\n                \"Read about what’s included in Bootstrap in Bootstrap {{https://getbootstrap.com/docs/5.3/getting-started/contents/::contents section}} and the list of {{nav:docs/gettingstarted/introduction#js_components::components that require JavaScript}} below.\",\n                \"Need a little more power? Consider building with Bootstrap by {{https://getbootstrap.com/docs/5.3/getting-started/download/#package-managers::including the source files via package manager}}.\",\n                \"Looking to use Bootstrap as a module with {{<script type='module'>}}? Please refer to Bootstrap using {{https://getbootstrap.com/docs/5.3/getting-started/javascript/#using-bootstrap-as-a-module::Bootstrap as a module}} section.\",\n            ],\n        }),\n        //-----------------------\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.title(\"JS components\"),\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.text(\"Curious which components explicitly require Bootstrap JavaScript and Popper? Click the show components link below. If you’re at all unsure about the general page structure, keep reading for an example page template.\"),\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.item(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.details([\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.summary({ textColor: \"primary\" }, \"Components requiring JavaScript\"),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ marginY: 3 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.ul({\n                item: [\n                    \"Alerts for dismissing\",\n                    \"Buttons for toggling states and checkbox/radio functionality\",\n                    \"Carousel for all slide behaviors, controls, and indicators\",\n                    \"Collapse for toggling visibility of content\",\n                    \"Dropdowns for displaying and positioning (also requires {{https://popper.js.org/::Popper}})\",\n                    \"Modals for displaying, positioning, and scroll behavior\",\n                    \"Navbar for extending Bootstrap Collapse and Offcanvas plugins to implement responsive behaviors\",\n                    \"Navs with the Tab plugin for toggling content panes\",\n                    \"Offcanvases for displaying, positioning, and scroll behavior\",\n                    \"Scrollspy for scroll behavior and navigation updates\",\n                    \"Toasts for displaying and dismissing\",\n                    \"Tooltips and popovers for displaying and positioning (also requires {{https://popper.js.org/::Popper}})\",\n                ],\n            })),\n        ])),\n        //-----------------------\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.title(\"Important globals\"),\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.text(\"Bootstrap employs a handful of important global styles and settings, all of which are almost exclusively geared towards the normalization of cross browser styles. Let’s dive in.\"),\n        //-----------------------\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"HTML5 doctype\"),\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.text(\"Bootstrap requires the use of the HTML5 doctype. Without it, you’ll see some funky and incomplete styling.\"),\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"html\",\n            code: `\n\t\t\t\t<!doctype html>\n\t\t\t\t<html lang=\"en\">\n\t\t\t\t...\n\t\t\t\t</html>\n\t\t\t\t`,\n        }),\n        //-----------------------\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Viewport meta\"),\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.text(\"Bootstrap is developed {{i::mobile first}}, a strategy in which Bootstrap optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your {{<head>}}.\"),\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"html\",\n            code: `\n\t\t\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\t\t\t\t`,\n        }),\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.text(\"You can see an example of this in action in the {{nav:docs/gettingstarted/introduction#quick_start::quick start}}.\"),\n        //-----------------------\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Box-sizing\"),\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.text(\"For more straightforward sizing in CSS, Bootstrap switch the global {{box-sizing}} value from {{content-box}} to {{border-box}}. This ensures {{padding}} does not affect the final computed width of an element, but it can cause problems with some third-party software like Google Maps and Google Custom Search Engine.\"),\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.text(\"On the rare occasion you need to override it, use something like the following:\"),\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n            type: \"css\",\n            code: `\n\t\t\t\t.selector-for-some-widget {\n\t\t\t\tbox-sizing: content-box;\n\t\t\t\t}\n\t\t\t\t`,\n        }),\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.text(\"With the above snippet, nested elements—including generated content via {{/://:/before}} and {{/://:/after}}—will all inherit the specified {{box-sizing}} for that {{.selector-for-some-widget}}.\"),\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.text(\"Learn more about {{https://css-tricks.com/box-sizing/::box model and sizing at CSS Tricks}}.\"),\n        //-----------------------\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Reboot\"),\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.text(\"For improved cross-browser rendering, Bootstrap use {{nav:docs/content/reboot::Reboot}} to correct inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements.\"),\n        //-----------------------\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.title(\"Community\"),\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.text(\"Stay up-to-date on the development of Bootstrap and reach out to the community with these helpful resources.\"),\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.ul({\n            item: [\n                \"Read and subscribe to {{https://blog.getbootstrap.com/::The Official Bootstrap Blog}}.\",\n                \"Ask and explore {{https://github.com/twbs/bootstrap/discussions::Bootstrap GitHub Discussions}}.\",\n                \"Chat with fellow Bootstrappers in IRC. On the {{irc.libera.chat}} server, in the {{#bootstrap}} channel.\",\n                \"Implementation help may be found at Stack Overflow (tagged {{https://stackoverflow.com/questions/tagged/bootstrap-5::bootstrap-5}}).\",\n                \"Developers should use the keyword {{bootstrap}} on packages that modify or add to the functionality of Bootstrap when distributing through {{https://www.npmjs.com/search?q=keywords:bootstrap::npm}} or similar delivery mechanisms for maximum discoverability.\",\n            ],\n        }),\n        new _ctl_example_index__WEBPACK_IMPORTED_MODULE_1__.text(\"You can also follow {{https://twitter.com/getbootstrap::@getbootstrap on Twitter}} for the latest gossip and awesome music videos.\"),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/gettingstarted/introduction.js?");

/***/ })

}]);