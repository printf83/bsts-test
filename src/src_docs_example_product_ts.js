"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbsts_test"] = self["webpackChunkbsts_test"] || []).push([["src_docs_example_product_ts"],{

/***/ "./src/docs/example/product.ts":
/*!*************************************!*\
  !*** ./src/docs/example/product.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   product: () => (/* binding */ product)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"./node_modules/@printf83/bsts/build/esm/index.js\");\n\nconst product = {\n    fullscreen: true,\n    title: \"Product\",\n    item: () => {\n        const header = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.navbar.containerHeader({\n            theme: \"dark\",\n            bgColor: \"dark\",\n            expand: \"md\",\n            sticky: \"top\",\n            border: \"bottom\",\n        }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.navbar.innercontainerNav({ container: true }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.navbar.brand({ display: \"md-none\", href: \"#\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({ id: \"camera2\", fontSize: 4, lineHeight: 1 }) }, \"Aperture\")),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.navbar.toggle.offcanvas({\n                target: \"#offcanvas\",\n                controlfor: \"#offcanvas\",\n                label: \"Toggle navigation\",\n            }),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.container({\n                tabindex: -1,\n                id: \"offcanvas\",\n                labelledby: \"#offcanvasLabel\",\n                placement: \"end\",\n            }, [\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.header([\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.title({ id: \"offcanvasLabel\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({\n                        icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({\n                            id: \"camera2\",\n                            fontSize: 4,\n                            lineHeight: 1,\n                        }),\n                    }, \"Aperture\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.btnclose(),\n                ]),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.offcanvas.body(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.navbar.itemcontainer({ display: \"flex\", flex: \"grow-1\", justifyContent: \"between\" }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.navbar.item(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.navbar.link({ href: \"#\" }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({\n                            id: \"camera2\",\n                            fontSize: 4,\n                            lineHeight: 1,\n                            display: [\"none\", \"sm-inline-block\"],\n                        }),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({ display: \"sm-none\" }, \"Home\"),\n                    ])),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.navbar.item(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.navbar.link({ href: \"#\" }, \"Tour\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.navbar.item(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.navbar.link({ href: \"#\" }, \"Product\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.navbar.item(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.navbar.link({ href: \"#\" }, \"Features\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.navbar.item(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.navbar.link({ href: \"#\" }, \"Support\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.navbar.item(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.navbar.link({ href: \"#\" }, \"Pricing\")),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.navbar.item(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.navbar.link({ href: \"#\" }, [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({\n                            id: \"cart\",\n                            fontSize: 4,\n                            lineHeight: 1,\n                            display: [\"none\", \"sm-inline-block\"],\n                        }),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({ display: \"sm-none\" }, \"Buy\"),\n                    ])),\n                ])),\n            ]),\n        ]));\n        const jumbotron = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.section({ padding: 3, marginBottom: 0, textColor: \"light\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n            textAlign: \"center\",\n            paddingY: 5,\n            style: {\n                backgroundImage: `url('https://picsum.photos/seed/bsts_0/472/63.webp')`,\n                backgroundSize: \"cover\",\n            },\n        }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(1, { marginTop: 4, fontDisplay: 3 }, \"Designed for engineers\"),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ lead: true }, \"Build anything you want with Aperture\"),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                display: \"inline-flex\",\n                flex: \"wrap\",\n                justifyContent: \"center\",\n                gap: 2,\n                marginBottom: 5,\n            }, [\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"link\", weight: \"lg\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"chevron-right\", iconPosition: \"end\" }, \"Learn more\")),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"link\", weight: \"lg\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: \"chevron-right\", iconPosition: \"end\" }, \"Buy\")),\n            ]),\n        ]));\n        const item = (arg) => {\n            return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                paddingX: 4,\n                paddingTop: 5,\n                textAlign: \"center\",\n                bgColor: arg.bgColor,\n                textColor: arg.textColor,\n            }, [\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(3, { fontDisplay: 5 }, arg.title),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"lg-6\", marginX: \"auto\" }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ lead: true, marginBottom: 2 }, arg.description),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                        display: [\"grid\", \"sm-flex\"],\n                        gap: 2,\n                        justifyContent: \"sm-center\",\n                        marginBottom: 3,\n                    }, arg.elem ? arg.elem : \"\"),\n                ]),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ overflow: \"hidden\", style: { maxHeight: \"30vh\" } }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true, paddingX: 5 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.img({\n                    src: arg.img,\n                    fluid: true,\n                    rounded: 3,\n                    shadow: \"lg\",\n                    marginBottom: 4,\n                    alt: \"Example image\",\n                    attrWidth: 700,\n                    attrHeight: 500,\n                }))),\n            ]);\n        };\n        const container = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.main(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ padding: 4, paddingTop: 0 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, rowCol: [\"1\", \"md-2\"], gutter: 3 }, Array(12)\n            .fill(\"\")\n            .map((_i, ix) => {\n            const bgColor = ix === 0 ? \"dark\" : ix === 3 ? \"primary\" : undefined;\n            const textColor = ix === 0 || ix === 3 ? \"light\" : undefined;\n            return item({\n                title: \"Another headline\",\n                description: \"And an even wittier subheading.\",\n                img: `https://picsum.photos/seed/bsts_${ix + 1}/510/364.webp`,\n                bgColor,\n                textColor,\n            });\n        }))));\n        const section = (arg) => {\n            return [\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(5, arg.title),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.container({\n                    flex: \"column\",\n                    elem: arg.link.map((i) => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.item({ marginBottom: 2 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.link({\n                            textColor: \"secondary\",\n                            textColorHover: \"primary-emphasis\",\n                            href: i.href,\n                            elem: i.elem,\n                            padding: 0,\n                        }));\n                    }),\n                }),\n            ];\n        };\n        const footer = new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.footer({\n            container: true,\n        }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, rowCol: [1, \"sm-2\", \"md-5\"], paddingY: 5, marginY: 5 }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: true, marginBottom: 3 }, [\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                    href: \"#\",\n                    display: \"flex\",\n                    alignItem: \"center\",\n                    marginBottom: 3,\n                    textDecoration: \"none\",\n                }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({ id: \"hexagon-fill\", fontSize: 3, textColor: \"body\" })),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ textColor: \"body-tertiary\" }, \"© 2017–2023\"),\n            ]),\n            ...[\n                section({\n                    title: \"Features\",\n                    link: [\n                        { href: \"#\", elem: \"Cool stuff\" },\n                        { href: \"#\", elem: \"Random feature\" },\n                        { href: \"#\", elem: \"Team feature\" },\n                        { href: \"#\", elem: \"Stuff for developers\" },\n                        { href: \"#\", elem: \"Another one\" },\n                        { href: \"#\", elem: \"Last time\" },\n                    ],\n                }),\n                section({\n                    title: \"Resources\",\n                    link: [\n                        { href: \"#\", elem: \"Resource\" },\n                        { href: \"#\", elem: \"Resource name\" },\n                        { href: \"#\", elem: \"Another resource\" },\n                        { href: \"#\", elem: \"Final resource\" },\n                    ],\n                }),\n                section({\n                    title: \"Resources\",\n                    link: [\n                        { href: \"#\", elem: \"Resource\" },\n                        { href: \"#\", elem: \"Resource name\" },\n                        { href: \"#\", elem: \"Another resource\" },\n                        { href: \"#\", elem: \"Final resource\" },\n                    ],\n                }),\n                section({\n                    title: \"About\",\n                    link: [\n                        { href: \"#\", elem: \"Team\" },\n                        { href: \"#\", elem: \"Locations\" },\n                        { href: \"#\", elem: \"Privacy\" },\n                        { href: \"#\", elem: \"Terms\" },\n                    ],\n                }),\n            ].map((i) => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: true, marginBottom: 3 }, i ? i : \"\");\n            }),\n        ]));\n        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ bgColor: \"body\" }, [header, jumbotron, container, footer]);\n    },\n};\n\n\n//# sourceURL=webpack://bsts-test/./src/docs/example/product.ts?");

/***/ })

}]);