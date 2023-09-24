"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbsts_test"] = self["webpackChunkbsts_test"] || []).push([["src_docs_example_blog_ts"],{

/***/ "./src/docs/example/blog.ts":
/*!**********************************!*\
  !*** ./src/docs/example/blog.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   blog: () => (/* binding */ blog)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"./node_modules/@printf83/bsts/build/esm/index.js\");\n\nconst blog = {\n    fullscreen: true,\n    title: \"Blog\",\n    item: () => {\n        const header = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.header({ border: \"bottom\", lineHeight: 1, paddingY: 3 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, flex: \"nowrap\", justifyContent: \"between\", alignItem: \"center\" }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 4, paddingTop: 1 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({ linkColor: \"secondary\", href: \"#\" }, \"Subscribe\")),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 4, textAlign: \"center\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                class: \"font-serif\",\n                h: 3,\n                fontWeight: \"bold\",\n                textColor: \"body-emphasis\",\n                textDecoration: \"none\",\n                href: \"#\",\n            }, \"Large\")),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                col: 4,\n                display: \"flex\",\n                justifyContent: \"end\",\n                alignItem: \"center\",\n            }, [\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({ linkColor: \"secondary\", href: \"#\", label: \"Search\", marginX: 3 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon(\"search\")),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ weight: \"sm\", outline: true, color: \"secondary\", href: \"#\" }, \"Sign up\"),\n            ]),\n        ]));\n        const navbar = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ paddingY: 1, marginBottom: 3, border: \"bottom\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.container({\n            flex: \"nowrap\",\n            overflowX: \"hidden\",\n            justifyContent: \"between\",\n            link: [\n                {\n                    active: true,\n                    href: \"#\",\n                    textColor: \"body-emphasis\",\n                    fontWeight: \"bold\",\n                    elem: \"World\",\n                },\n                { href: \"#\", textColor: \"body-emphasis\", elem: \"MY\" },\n                { href: \"#\", textColor: \"body-emphasis\", elem: \"Technology\" },\n                { href: \"#\", textColor: \"body-emphasis\", elem: \"Design\" },\n                { href: \"#\", textColor: \"body-emphasis\", elem: \"Culture\" },\n                { href: \"#\", textColor: \"body-emphasis\", elem: \"Business\" },\n                { href: \"#\", textColor: \"body-emphasis\", elem: \"Politics\" },\n                { href: \"#\", textColor: \"body-emphasis\", elem: \"Opinion\" },\n                { href: \"#\", textColor: \"body-emphasis\", elem: \"Science\" },\n                { href: \"#\", textColor: \"body-emphasis\", elem: \"Health\" },\n                { href: \"#\", textColor: \"body-emphasis\", elem: \"Style\" },\n                { href: \"#\", textColor: \"body-emphasis\", elem: \"Travel\" },\n            ],\n        }));\n        const banner = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n            padding: [4, \"md-5\"],\n            marginBottom: 4,\n            rounded: true,\n            textColor: \"body-emphasis\",\n            bgColor: \"body-secondary\",\n        }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"lg-6\", paddingX: 0 }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(1, { class: \"font-serif\", fontDisplay: 4, fontItalic: true, fontWeight: \"bold\" }, \"Title of a longer featured blog post\"),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ lead: true, marginY: 3 }, \"Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.\"),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ lead: true, marginBottom: 0 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({ textColor: \"body-emphasis\", fontWeight: \"bold\", href: \"#\" }, \"Continue reading...\")),\n        ]));\n        const card = (opt) => {\n            return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"md-6\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.container({ position: \"relative\", overflow: \"hidden\", shadow: \"sm\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true }, [\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"md-8\" }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.body({ padding: 4 }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.strong({ display: \"inline-block\", marginBottom: 2 }, opt.group),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.title({ class: \"font-serif\", h: 3, fontWeight: \"bold\", margin: 0 }, opt.title),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.text({ textColor: \"secondary\", margin: 0 }, opt.date),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.text({ marginTop: 1, marginBottom: 3 }, opt.description),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.link({\n                            stretched: true,\n                            href: opt.href,\n                            display: \"inline-block\",\n                        }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.label({ icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon(\"chevron-right\"), iconPosition: \"end\" }, \"Continue reading\")),\n                    ]),\n                ]),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: true, display: [\"none\", \"md-block\"] }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.card.img({\n                    fluid: true,\n                    src: opt.img,\n                    alt: \"Image\",\n                })),\n            ])));\n        };\n        const card_section = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ overflow: \"hidden\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, gutter: 3, marginY: 3 }, [\n            {\n                img: \"https://picsum.photos/seed/bsts_0/200/250.webp\",\n                group: \"World\",\n                title: \"Featured post\",\n                date: \"Nov 12\",\n                description: \"This is a wider card with supporting text below as a natural lead-in to additional content.\",\n                href: \"#\",\n            },\n            {\n                img: \"https://picsum.photos/seed/bsts_1/200/250.webp\",\n                group: \"Design\",\n                title: \"Post title\",\n                date: \"Nov 11\",\n                description: \"This is a wider card with supporting text below as a natural lead-in to additional content.\",\n                href: \"#\",\n            },\n        ].map((i) => card(i))));\n        const post = (opt) => {\n            return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.article([\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(2, {\n                    class: \"font-serif\",\n                    fontWeight: \"bold\",\n                    fontDisplay: 5,\n                    textColor: \"body-emphasis\",\n                    marginBottom: 1,\n                    marginTop: 5,\n                }, opt.title),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ marginBottom: 5, textColor: \"secondary\" }, [\n                    opt.date,\n                    \" by \",\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({ href: opt.writer_url }, opt.writer),\n                ]),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div(opt.elem),\n            ]);\n        };\n        const recent_post = (opt) => {\n            return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                display: \"flex\",\n                flex: [\"column\", \"lg-row\"],\n                gap: 3,\n                alignItem: [\"start\", \"lg-center\"],\n                paddingY: 3,\n                linkColor: \"body-emphasis\",\n                textDecoration: \"none\",\n                border: \"top\",\n                href: opt.url,\n            }, [\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.img({ fluid: true, src: opt.img }),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div([\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(6, {\n                        class: \"font-serif\",\n                        fontWeight: \"bold\",\n                        h: 5,\n                        marginBottom: 0,\n                    }, opt.title),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.small({ textColor: \"body-secondary\" }, opt.date),\n                ]),\n            ]);\n        };\n        const content_main = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"md-8\" }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(3, {\n                class: \"font-serif\",\n                fontWeight: \"bold\",\n                paddingBottom: 4,\n                marginBottom: 4,\n                fontItalic: true,\n                border: \"bottom\",\n            }, \"From the Firehose\"),\n            ...[\n                {\n                    title: \"Sample blog post\",\n                    date: \"January 1, 2021\",\n                    writer: \"Mark\",\n                    writer_url: \"#\",\n                    elem: [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.hr(),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(2, { class: \"font-serif\", fontWeight: \"bold\" }, \"Blockquote\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"This is an example blockquote in action:\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.blockquote.container(\"Quoted text goes here.\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(2, { class: \"font-serif\", fontWeight: \"bold\" }, \"Example lists\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout. This is an example unordered list:\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.ul([\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li(\"First list item\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li(\"Second list item with a longer description\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li(\"Third list item to close it out\"),\n                        ]),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"And this is an ordered list:\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.ol([\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li(\"First list item\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li(\"Second list item with a longer description\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li(\"Third list item to close it out\"),\n                        ]),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"And this is a definition list:\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.dl([\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.dt(\"HyperText Markup Language (HTML)\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.dd(\"The language used to describe and define the content of a Web page\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.dt(\"Cascading Style Sheets (CSS)\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.dd(\"Used to describe the appearance of Web content\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.dt(\"JavaScript (JS)\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.dd(\"The programming language used to build advanced Web sites and applications\"),\n                        ]),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(2, { class: \"font-serif\", fontWeight: \"bold\" }, \"Inline HTML elements\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"HTML defines a long list of available inline tags, a complete list of which can be found on the {{https://developer.mozilla.org/en-US/docs/Web/HTML/Element::Mozilla Developer Network}}.\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.ul([\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li(\"{{s::To bold text}} use {{<strong>}}\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li(\"{{i::To italicize text}}, use {{<em>}}.\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li([\n                                \"Abbreviations, like \",\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.abbr({ title: \"HyperText Markup Language\" }, \"HTML\"),\n                                \" should use {{<abbr>}}, with an optional {{title}} attribute for the full phrase.\",\n                            ]),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li([\n                                \"Citations, like \",\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.cite(\"— Mark Otto\"),\n                                \", should use {{<cite>}}.\",\n                            ]),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li([\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.del(\"Deleted\"),\n                                \" text should use {{<del>}} and \",\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.ins(\"inserted\"),\n                                \" text should use {{<ins>}}.\",\n                            ]),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li([\n                                \"Superscript \",\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.sup(\"text\"),\n                                \" uses {{<sup>}} and subscript \",\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.sub(\"text\"),\n                                \" uses {{<sub>}}.\",\n                            ]),\n                        ]),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"Most of these elements are styled by browsers with few modifications on our part.\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(1, { class: \"font-serif\", fontWeight: \"bold\" }, \"Heading\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(2, { class: \"font-serif\", fontWeight: \"bold\" }, \"Sub-heading\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.code({ marginBottom: 3, display: \"inline-block\" }, \"Example code block\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.\"),\n                    ],\n                },\n                {\n                    title: \"Another blog post\",\n                    date: \"December 23, 2020\",\n                    writer: \"Jacob\",\n                    writer_url: \"#\",\n                    elem: [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"Longer quote goes here, maybe with some {{s::emphasized text}} in the middle of it.\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(2, { class: \"font-serif\", fontWeight: \"bold\" }, \"Example table\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"And don't forget about tables in these posts:\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.table.container({\n                            item: [\n                                [\"Name\", \"Upvotes\", \"Downvotes\"],\n                                [\"Alice\", \"10\", \"11\"],\n                                [\"Bob\", \"4\", \"3\"],\n                                [\"Charlie\", \"7\", \"9\"],\n                                [\"Totals\", \"21\", \"23\"],\n                            ],\n                        }),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.\"),\n                    ],\n                },\n                {\n                    title: \"New feature\",\n                    date: \"December 14, 2020\",\n                    writer: \"Chris\",\n                    writer_url: \"#\",\n                    elem: [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.ul([\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li(\"First list item\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li(\"Second list item with a longer description\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li(\"Third list item to close it out\"),\n                        ]),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.\"),\n                    ],\n                },\n            ].map((i) => post(i)),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.nav({ label: \"Pagination\", display: \"flex\", gap: 2, marginY: 5 }, [\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ outline: true, color: \"primary\", rounded: \"pill\", href: \"#\" }, \"Older\"),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({\n                    disabled: true,\n                    outline: true,\n                    color: \"secondary\",\n                    rounded: \"pill\",\n                    href: \"#\",\n                }, \"Newer\"),\n            ]),\n        ]);\n        const content_side = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"md-4\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ position: \"sticky\", style: { top: \"2rem\" } }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 4, marginBottom: 3, bgColor: \"body-tertiary\", rounded: true }, [\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(4, { class: \"font-serif\", fontWeight: \"bold\", fontItalic: true }, \"About\"),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ marginBottom: 0 }, \"Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.\"),\n            ]),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div([\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(4, { class: \"font-serif\", fontWeight: \"bold\", fontItalic: true }, \"Recent post\"),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.ul({ unstyle: true }, [\n                    {\n                        url: \"#\",\n                        img: \"https://picsum.photos/seed/bsts_2/200/96.webp\",\n                        title: \"Example blog post title\",\n                        date: \"January 15, 2023\",\n                    },\n                    {\n                        url: \"#\",\n                        img: \"https://picsum.photos/seed/bsts_3/200/96.webp\",\n                        title: \"This is another blog post title\",\n                        date: \"January 14, 2023\",\n                    },\n                    {\n                        url: \"#\",\n                        img: \"https://picsum.photos/seed/bsts_4/200/96.webp\",\n                        title: \"Longer blog post title: This one has multiple lines!\",\n                        date: \"January 13, 2023\",\n                    },\n                ].map((i) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li(recent_post(i));\n                })),\n            ]),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 4 }, [\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(4, { class: \"font-serif\", fontWeight: \"bold\", fontItalic: true }, \"Archives\"),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.ul({ unstyle: true, marginBottom: 0 }, [\n                    { url: \"#\", title: \"March 2021\" },\n                    { url: \"#\", title: \"February 2021\" },\n                    { url: \"#\", title: \"January 2021\" },\n                    { url: \"#\", title: \"December 2020\" },\n                    { url: \"#\", title: \"November 2020\" },\n                    { url: \"#\", title: \"October 2020\" },\n                    { url: \"#\", title: \"Septermber 2020\" },\n                    { url: \"#\", title: \"August 2020\" },\n                    { url: \"#\", title: \"July 2020\" },\n                    { url: \"#\", title: \"June 2020\" },\n                    { url: \"#\", title: \"May 2020\" },\n                    { url: \"#\", title: \"April 2020\" },\n                ].map((i) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({ href: i.url }, i.title));\n                })),\n            ]),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 4 }, [\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(4, { class: \"font-serif\", fontWeight: \"bold\", fontItalic: true }, \"Elsewhere\"),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.ul({ unstyle: true, marginBottom: 0 }, [\n                    { url: \"#\", title: \"Github\" },\n                    { url: \"#\", title: \"Twitter\" },\n                    { url: \"#\", title: \"Facebook\" },\n                ].map((i) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({ href: i.url }, i.title));\n                })),\n            ]),\n        ]));\n        const content_section = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, gutter: 5, marginTop: 0 }, [\n            content_main,\n            content_side,\n        ]);\n        const footer = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.footer({ bgColor: \"body-tertiary\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true, paddingY: 5, textAlign: \"center\", textColor: \"body-secondary\" }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"Blog template built for {{https://getbootstrap.com/::Bootstrap}} by {{https://twitter.com/mdo::@mdo}}.\"),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ marginBottom: 0 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({ href: \"#\" }, \"Back to top\")),\n        ]));\n        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: \"fluid\", padding: 0, overflow: \"hidden\" }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true }, [header, navbar, banner, card_section, content_section]),\n            footer,\n        ]);\n    },\n};\n\n\n//# sourceURL=webpack://bsts-test/./src/docs/example/blog.ts?");

/***/ })

}]);