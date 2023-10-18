"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbsts_test"] = self["webpackChunkbsts_test"] || []).push([["src_docs_content_typography_ts"],{

/***/ "./src/docs/content/typography.ts":
/*!****************************************!*\
  !*** ./src/docs/content/typography.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   typography: () => (/* binding */ typography)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"./node_modules/@printf83/bsts/build/esm/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./src/ctl/example/_index.ts\");\n/* harmony import */ var _ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ctl/main/content.js */ \"./src/ctl/main/content.ts\");\n\n\n\nconst typography = {\n    title: \"Typography\",\n    description: \"Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.\",\n    item: (db) => {\n        (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.resetContentIndex)();\n        return [\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Global settings\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Bootstrap sets basic global display, typography, and link styles. When more control is needed, check out the {{nav:docs/utilities/text::textual utility classes}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n                    item: [\n                        \"Use a {{nav:docs/content/reboot#native_font_stack::native font stack}} that selects the best {{font-family}} for each OS and device.\",\n                        \"For a more inclusive and accessible type scale, Bootstrap use the browser’s default root {{font-size}} (typically 16px) so visitors can customize their browser defaults as needed.\",\n                        \"Use the {{$font-family-base}}, {{$font-size-base}}, and {{$line-height-base}} attributes as Bootstrap typographic base applied to the {{<body>}}.\",\n                        \"Set the global link color via {{$link-color}}.\",\n                        \"Use {{$body-bg}} to set a {{background-color}} on the {{<body>}} ({{#fff}} by default).\",\n                    ],\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"These styles can be found within {{_reboot.scss}}, and the global variables are defined in {{_variables.scss}}. Make sure to set {{$font-size-base}} in {{rem}}.\"),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Headings\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"All HTML headings, {{<h1>}} through {{<h6>}}, are available.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.table({\n                    item: [\n                        [\"Heading\", \"Example\"],\n                        [\"{{<h1></h1>}}\", new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h1(\"h1.Bootstrap heading\")],\n                        [\"{{<h2></h2>}}\", new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h2(\"h2.Bootstrap heading\")],\n                        [\"{{<h3></h3>}}\", new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h3(\"h3.Bootstrap heading\")],\n                        [\"{{<h4></h4>}}\", new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h4(\"h4.Bootstrap heading\")],\n                        [\"{{<h5></h5>}}\", new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h5(\"h5.Bootstrap heading\")],\n                        [\"{{<h6></h6>}}\", new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h6(\"h6.Bootstrap heading\")],\n                    ],\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    output: () => {\n                        return [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h1(\"h1. Bootstrap heading\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h2(\"h2. Bootstrap heading\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h3(\"h3. Bootstrap heading\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h4(\"h4. Bootstrap heading\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h5(\"h5. Bootstrap heading\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h6(\"h6. Bootstrap heading\"),\n                        ];\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"{{.h1}} through {{.h6}} classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    output: () => {\n                        return [1, 2, 3, 4, 5, 6].map((i) => new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ h: i }, `h${i}. Bootstrap heading`));\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Customizing headings\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use the included utility classes to recreate the small secondary heading text from Bootstrap 3.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h3([\n                            \"Fancy display heading \",\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.small({ textColor: \"body-secondary\" }, \"With faded secondary text\"),\n                        ]);\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Display headings\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a {{b::display heading}}—a larger, slightly more opinionated heading style.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    output: () => {\n                        return [1, 2, 3, 4, 5, 6]\n                            .map((i) => [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h1({ fontDisplay: i }, `Display ${i}`),\n                            i < 6 ? new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.hr() : \"\",\n                        ])\n                            .flat();\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Display headings are configured via the {{$display-font-sizes}} Sass map and two variables, {{$display-font-weight}} and {{$display-line-height}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Display headings are customizable via two variables, {{$display-font-family}} and {{$display-font-style}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"css\",\n                    title: \"scss/_variables.scss\",\n                    source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n                    code: `\n\t\t\t\t\t\t$display-font-sizes: (\n\t\t\t\t\t\t1: 5rem,\n\t\t\t\t\t\t2: 4.5rem,\n\t\t\t\t\t\t3: 4rem,\n\t\t\t\t\t\t4: 3.5rem,\n\t\t\t\t\t\t5: 3rem,\n\t\t\t\t\t\t6: 2.5rem\n\t\t\t\t\t\t);\n\n\t\t\t\t\t\t$display-font-family: null;\n\t\t\t\t\t\t$display-font-style:  null;\n\t\t\t\t\t\t$display-font-weight: 300;\n\t\t\t\t\t\t$display-line-height: $headings-line-height;\n\t\t\t\t\t`,\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Lead\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Make a paragraph stand out by adding {{.lead}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ lead: true }, \"This is a lead paragraph. It stands out from regular paragraphs.\");\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Inline text elements\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Styling for common inline HTML5 elements.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    output: () => {\n                        return [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p([\n                                \"You can use the mark tag to \",\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.mark(\"highlight\"),\n                                \" text.\",\n                            ]),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.del(\"This line of text is meant to be treated as deleted text.\")),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.s(\"This line of text is meant to be treated as no longer accurate.\")),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.ins(\"This line of text is meant to be treated as an addition to the document.\")),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.u(\"This line of text will render as underlined.\")),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.small(\"This line of text is meant to be treated as fine print.\")),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.strong(\"This line rendered as bold text.\")),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.em(\"This line rendered as italicized text.\")),\n                        ];\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Beware that those tags should be used for semantic purpose:\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n                    item: [\n                        \"{{<mark>}} represents text which is marked or highlighted for reference or notation purposes.\",\n                        \"{{<small>}} represents side-comments and small print, like copyright and legal text.\",\n                        \"{{<s>}} represents element that are no longer relevant or no longer accurate.\",\n                        \"{{<u>}} represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation.\",\n                    ],\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"If you want to style your text, you should use the following classes instead:\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.ul({\n                    item: [\n                        \"{{.mark}} will apply the same styles as {{<mark>}}.\",\n                        \"{{.small}} will apply the same styles as {{<small>}}.\",\n                        \"{{.text-decoration-underline}} will apply the same styles as {{<u>}}.\",\n                        \"{{.text-decoration-line-through}} will apply the same styles as {{<s>}}.\",\n                    ],\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"While not shown above, feel free to use {{<b>}} and {{<i>}} in HTML5. {{<b>}} is meant to highlight words or phrases without conveying additional importance, while {{<i>}} is mostly for voice, technical terms, etc.\"),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Text utilities\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Change text alignment, transform, style, weight, line-height, decoration and color with Bootstrap {{nav:docs/utilities/text::text utilities}} and {{nav:docs/utilities/colors::color utilities}}.\"),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Abbreviations\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Stylized implementation of HTML’s {{<abbr>}} element for abbreviations and acronyms to show the expanded version on hover. Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to users of assistive technologies.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Add {{.initialism}} to an abbreviation for a slightly smaller font-size.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    output: () => {\n                        return [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.abbr({ title: \"attribute\" }, \"attr\")),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.abbr({ title: \"HyperText Markup Language\", small: true }, \"HTML\")),\n                        ];\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Blockquotes\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"For quoting blocks of content from another source within your document. Wrap {{<blockquote class='blockquote'>}} around any HTML as the quote.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.blockquote.container(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"A well-known quote, contained in a blockquote element.\"));\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Naming a source\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"The HTML spec requires that blockquote attribution be placed outside the {{<blockquote>}}. When providing attribution, wrap your {{<blockquote>}} in a {{<figure>}} and use a {{<figcaption>}} or a block level element (e.g., {{<p>}}) with the {{.blockquote-footer}} class. Be sure to wrap the name of the source work in {{<cite>}} as well.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.figure([\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.blockquote.container(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"A well-known quote, contained in a blockquote element.\")),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.blockquote.caption([\n                                \"Someone famous in \",\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.cite({ title: \"Source Title\" }, \"Source Title\"),\n                            ]),\n                        ]);\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Alignment\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Use text utilities as needed to change the alignment of your blockquote.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.figure({ textAlign: \"center\" }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.blockquote.container(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"A well-known quote, contained in a blockquote element.\")),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.blockquote.caption([\n                                \"Someone famous in \",\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.cite({ title: \"Source Title\" }, \"Source Title\"),\n                            ]),\n                        ]);\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.figure({ textAlign: \"end\" }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.blockquote.container(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"A well-known quote, contained in a blockquote element.\")),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.blockquote.caption([\n                                \"Someone famous in \",\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.cite({ title: \"Source Title\" }, \"Source Title\"),\n                            ]),\n                        ]);\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"List\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Unstyled\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Remove the default {{list-style}} and left margin on list items (immediate children only). This only applies to immediate children list items, meaning you will need to add the class for any nested lists as well.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.ul({\n                            unstyle: true,\n                        }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li(\"This is a list.\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li(\"It appears completely unstyled.\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li(\"Structurally, it's still a list.\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li(\"However, this style only applies to immediate child elements.\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li([\n                                \"Nested lists: \",\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.ul([\n                                    \"are unaffected by this style\",\n                                    \"will still show a bullet\",\n                                    \"and have appropriate left margin\",\n                                ]),\n                            ]),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li(\"This may still come in handy in some situations.\"),\n                        ]);\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Inline\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Remove a list’s bullets and apply some light {{margin}} with a combination of two classes, {{.list-inline}} and {{.list-inline-item}}.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.ul({ inline: true }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li({ inline: true }, \"This is a list item.\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li({ inline: true }, \"And another one.\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li({ inline: true }, \"But they're displayed inline.\"),\n                        ]);\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Description list alignment\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Align terms and descriptions horizontally by using Bootstrap grid system’s predefined classes (or semantic mixins). For longer terms, you can optionally add a {{.text-truncate}} class to truncate the text with an ellipsis.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.dl({ row: true }, [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.dt({ col: \"sm-3\" }, \"Description lists\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.dd({ col: \"sm-9\" }, \"A description list is perfect for defining terms.\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.dt({ col: \"sm-3\" }, \"Term\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.dd({ col: \"sm-9\" }, [\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"Definition for the term.\"),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p(\"And some more placeholder definition text.\"),\n                            ]),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.dt({ col: \"sm-3\" }, \"Another term\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.dd({ col: \"sm-9\" }, \"his definition is short, so no extra paragraphs or anything.\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.dt({ col: \"sm-3\", textTruncate: true }, \"Truncated term is truncated\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.dd({ col: \"sm-9\" }, \"This can be useful when space is tight. Adds an ellipsis at the end.\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.dt({ col: \"sm-3\" }, \"Nesting\"),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.dd({ col: \"sm-9\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.dl({ row: true }, [\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.dt({ col: \"sm-4\" }, \"Nested definition list\"),\n                                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.dd({ col: \"sm-8\" }, \"I heard you like definition lists. Let me put a definition list inside your definition list.\"),\n                            ])),\n                        ]);\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Responsive font sizes\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"In Bootstrap 5, Bootstrap enabled responsive font sizes by default, allowing text to scale more naturally across device and viewport sizes. Have a look at the {{https://getbootstrap.com/docs/5.3/getting-started/rfs/::RFS page}} to find out how this works.\"),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"CSS\")]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass variables\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Headings have some dedicated variables for sizing and spacing.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"css\",\n                    title: \"scss/_variables.scss\",\n                    source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n                    code: `\n\t\t\t\t\t\t$headings-margin-bottom:      $spacer * .5;\n\t\t\t\t\t\t$headings-font-family:        null;\n\t\t\t\t\t\t$headings-font-style:         null;\n\t\t\t\t\t\t$headings-font-weight:        500;\n\t\t\t\t\t\t$headings-line-height:        1.2;\n\t\t\t\t\t\t$headings-color:              null;\n\t\t\t\t\t`,\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Miscellaneous typography elements covered here and in {{nav:docs/content/reboot::Reboot}} also have dedicated variables.\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.codepreview({\n                    type: \"css\",\n                    title: \"scss/_variables.scss\",\n                    source: \"https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss\",\n                    code: `\n\t\t\t\t\t\t$lead-font-size:              $font-size-base * 1.25;\n\t\t\t\t\t\t$lead-font-weight:            300;\n\n\t\t\t\t\t\t$small-font-size:             .875em;\n\n\t\t\t\t\t\t$sub-sup-font-size:           .75em;\n\n\t\t\t\t\t\t// fusv-disable\n\t\t\t\t\t\t$text-muted:                  var(--#{$prefix}secondary-color); // Deprecated in 5.3.0\n\t\t\t\t\t\t// fusv-enable\n\n\t\t\t\t\t\t$initialism-font-size:        $small-font-size;\n\n\t\t\t\t\t\t$blockquote-margin-y:         $spacer;\n\t\t\t\t\t\t$blockquote-font-size:        $font-size-base * 1.25;\n\t\t\t\t\t\t$blockquote-footer-color:     $gray-600;\n\t\t\t\t\t\t$blockquote-footer-font-size: $small-font-size;\n\n\t\t\t\t\t\t$hr-margin-y:                 $spacer;\n\t\t\t\t\t\t$hr-color:                    inherit;\n\n\t\t\t\t\t\t// fusv-disable\n\t\t\t\t\t\t$hr-bg-color:                 null; // Deprecated in v5.2.0\n\t\t\t\t\t\t$hr-height:                   null; // Deprecated in v5.2.0\n\t\t\t\t\t\t// fusv-enable\n\n\t\t\t\t\t\t$hr-border-color:             null; // Allows for inherited colors\n\t\t\t\t\t\t$hr-border-width:             var(--#{$prefix}border-width);\n\t\t\t\t\t\t$hr-opacity:                  .25;\n\n\t\t\t\t\t\t$legend-margin-bottom:        .5rem;\n\t\t\t\t\t\t$legend-font-size:            1.5rem;\n\t\t\t\t\t\t$legend-font-weight:          null;\n\n\t\t\t\t\t\t$dt-font-weight:              $font-weight-bold;\n\n\t\t\t\t\t\t$list-inline-padding:         .5rem;\n\n\t\t\t\t\t\t$mark-padding:                .1875em;\n\t\t\t\t\t\t$mark-bg:                     $yellow-100;\n\t\t\t\t\t`,\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.subtitle(\"Sass mixins\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"There are no dedicated mixins for typography, but Bootstrap does use {{https://getbootstrap.com/docs/5.3/getting-started/rfs/::Responsive Font Sizing (RFS)}}.\"),\n            ]),\n        ];\n    },\n};\n\n\n//# sourceURL=webpack://bsts-test/./src/docs/content/typography.ts?");

/***/ })

}]);