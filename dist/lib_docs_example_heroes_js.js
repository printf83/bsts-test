"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_example_heroes_js"],{

/***/ "./lib/docs/example/heroes.js":
/*!************************************!*\
  !*** ./lib/docs/example/heroes.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   heroes: () => (/* binding */ heroes)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst ex = {\n    c1: (arg) => {\n        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ paddingX: 4, paddingY: 5, marginY: 5, textAlign: \"center\" }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(1, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({ id: arg.icon, weight: \"2xl\", fontDisplay: 1 })),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(1, { fontDisplay: 5, fontWeight: \"bold\", textColor: \"body-emphasis\" }, arg.title),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"lg-6\", marginX: \"auto\" }, [\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ lead: true, marginBottom: 4 }, arg.description),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: [\"grid\", \"sm-flex\"], gap: 2, justifyContent: \"sm-center\" }, arg.elem ? arg.elem : \"\"),\n            ]),\n        ]);\n    },\n    c2: (arg) => {\n        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n            paddingX: 4,\n            paddingTop: 5,\n            marginY: 5,\n            textAlign: \"center\",\n            border: \"bottom\",\n        }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(1, { fontDisplay: 4, fontWeight: \"bold\", textColor: \"body-emphasis\" }, arg.title),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"lg-6\", marginX: \"auto\" }, [\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ lead: true, marginBottom: 4 }, arg.description),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                    display: [\"grid\", \"sm-flex\"],\n                    gap: 2,\n                    justifyContent: \"sm-center\",\n                    marginBottom: 5,\n                }, arg.elem ? arg.elem : \"\"),\n            ]),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ overflow: \"hidden\", style: { maxHeight: \"30vh\" } }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ container: true, paddingX: 5 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.img({\n                src: arg.img,\n                fluid: true,\n                border: true,\n                rounded: 3,\n                shadow: \"lg\",\n                marginBottom: 4,\n                alt: \"Example image\",\n                attrWidth: 700,\n                attrHeight: 500,\n            }))),\n        ]);\n    },\n    c3: (arg) => {\n        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n            col: \"xxl-8\",\n            container: true,\n            paddingX: 4,\n            paddingY: 5,\n        }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, flex: \"lg-row-reverse\", alignItem: \"center\", gutter: 5, paddingY: 5 }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: [10, \"sm-8\", \"lg-6\"] }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.img({\n                src: arg.img,\n                fluid: true,\n                marginX: \"lg-auto\",\n                display: \"block\",\n                alt: \"Example image\",\n                attrWidth: 700,\n                attrHeight: 500,\n                rounded: 3,\n                shadow: true,\n            })),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"lg-6\" }, [\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(1, {\n                    fontDisplay: 5,\n                    fontWeight: \"bold\",\n                    textColor: \"body-emphasis\",\n                    lineHeight: 1,\n                    marginBottom: 3,\n                }, arg.title),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ lead: true }, arg.description),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                    display: [\"grid\", \"md-flex\"],\n                    gap: 2,\n                    justifyContent: \"md-start\",\n                }, arg.elem ? arg.elem : \"\"),\n            ]),\n        ]));\n    },\n    c4: (arg) => {\n        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n            col: [\"xl-10\", \"xxl-8\"],\n            container: true,\n            paddingX: 4,\n            paddingY: 5,\n        }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ row: true, alignItem: \"center\", gutter: 5, paddingY: 5 }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"lg-7\", textAlign: [\"center\", \"lg-start\"] }, [\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(1, {\n                    fontDisplay: 4,\n                    fontWeight: \"bold\",\n                    textColor: \"body-emphasis\",\n                    lineHeight: 1,\n                    marginBottom: 3,\n                }, arg.title),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ col: \"lg-10\", fontSize: 4 }, arg.description),\n            ]),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                col: [\"md-10\", \"lg-5\"],\n                marginX: \"auto\",\n            }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.form({\n                padding: [4, \"md-5\"],\n                border: true,\n                rounded: 3,\n                bgColor: \"body-tertiary\",\n                gap: 3,\n                display: \"grid\",\n                on: { submit: arg.onsignup },\n            }, [\n                _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.floatinglabel.input({\n                    type: \"email\",\n                    label: \"Email address\",\n                    name: \"email\",\n                    required: true,\n                }),\n                _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.floatinglabel.input({\n                    type: \"password\",\n                    label: \"Password\",\n                    name: \"password\",\n                    required: true,\n                }),\n                _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.form.check({ type: \"checkbox\", label: \"Remember me\", name: \"remember\" }),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ color: \"primary\", weight: \"lg\", width: 100, type: \"submit\" }, \"Sign up\"),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.hr(),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.small({ textColor: \"body-secondary\" }, \"By clicking Sign up, you agree to the terms of use.\"),\n            ])),\n        ]));\n    },\n    c5: (arg) => {\n        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n            container: true,\n            marginY: 5,\n        }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n            row: true,\n            padding: 4,\n            paddingBottom: 0,\n            paddingEnd: \"lg-0\",\n            paddingTop: \"lg-5\",\n            alignItem: \"center\",\n            rounded: 3,\n            border: true,\n            shadow: \"lg\",\n        }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"lg-7\", padding: [3, \"lg-5\"], paddingTop: \"lg-3\" }, [\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(1, {\n                    fontDisplay: 4,\n                    fontWeight: \"bold\",\n                    textColor: \"body-emphasis\",\n                    lineHeight: 1,\n                }, arg.title),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ lead: true }, arg.description),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n                    display: [\"grid\", \"md-flex\"],\n                    gap: 2,\n                    justifyContent: \"md-start\",\n                    marginBottom: [4, \"lg-3\"],\n                }, arg.elem ? arg.elem : \"\"),\n            ]),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"lg-4\", offset: \"lg-1\", padding: 0, overflow: \"hidden\", shadow: \"lg\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.img({\n                src: arg.img,\n                alt: \"Example image\",\n                attrWidth: 720,\n                // rounded: 3,\n            })),\n        ]));\n    },\n    c6: (arg) => {\n        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n            paddingX: 4,\n            paddingY: 5,\n            textAlign: \"center\",\n            bgColor: \"dark\",\n            textColor: \"light\",\n        }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h(1, { fontDisplay: 5, fontWeight: \"bold\" }, arg.title),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: \"lg-6\", marginX: \"auto\" }, [\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ lead: true, marginBottom: 4, textColor: \"secondary\" }, arg.description),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: [\"grid\", \"sm-flex\"], gap: 2, justifyContent: \"sm-center\" }, arg.elem ? arg.elem : \"\"),\n            ]),\n        ]);\n    },\n};\nconst heroes = {\n    title: \"Heroes\",\n    description: \"Set the stage on your homepage with heroes that feature clear calls to action.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Centered hero\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            showViewport: true,\n            previewAttr: { padding: 0 },\n            extention: [{ name: \"COMPONENT\", rename: \"ex.c1\", output: ex.c1 }],\n            output: () => {\n                return ex.c1({\n                    icon: \"fab bootstrap\",\n                    title: \"Centered hero\",\n                    description: \"Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.\",\n                    elem: [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ weight: \"lg\", color: \"primary\" }, \"Primary button\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ weight: \"lg\", color: \"secondary\", outline: true }, \"Secondary\"),\n                    ],\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Centered screenshot\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            showViewport: true,\n            previewAttr: { padding: 0, overflow: \"hidden\" },\n            extention: [{ name: \"COMPONENT\", rename: \"ex.c2\", output: ex.c2 }],\n            output: () => {\n                return ex.c2({\n                    title: \"Centered screenshot\",\n                    description: \"Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.\",\n                    elem: [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ weight: \"lg\", color: \"primary\" }, \"Primary button\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ weight: \"lg\", color: \"secondary\", outline: true }, \"Secondary\"),\n                    ],\n                    img: \"https://picsum.photos/seed/bsts_0/622/393.webp\",\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Responsive left-aligned hero with image\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            showViewport: true,\n            previewAttr: { padding: 0 },\n            extention: [{ name: \"COMPONENT\", rename: \"ex.c3\", output: ex.c3 }],\n            output: () => {\n                return ex.c3({\n                    title: \"Responsive left-aligned hero with image\",\n                    description: \"Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.\",\n                    elem: [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ weight: \"lg\", color: \"primary\" }, \"Primary\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ weight: \"lg\", color: \"secondary\", outline: true }, \"Default\"),\n                    ],\n                    img: \"https://picsum.photos/seed/bsts_0/432/308.webp\",\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Vertically centered hero sign-up form\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            showViewport: true,\n            showConsole: true,\n            previewAttr: { padding: 0 },\n            extention: [{ name: \"COMPONENT\", rename: \"ex.c4\", output: ex.c4 }],\n            output: () => {\n                return ex.c4({\n                    title: \"Vertically centered hero sign-up form\",\n                    description: \"Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.\",\n                    onsignup: (event) => {\n                        //do signup\n                        event.preventDefault();\n                        const form = event.target;\n                        const email = form.querySelector(\"input[name='email']\");\n                        const password = form.querySelector(\"input[name='password']\");\n                        const remember = form.querySelector(\"input[name='remember']\");\n                        _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.console(form, \"signup\", {\n                            email: email.value,\n                            password: password.value,\n                            remember: remember.checked,\n                        }, \"info\");\n                    },\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Border hero with cropped image and shadows\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            showViewport: true,\n            extention: [{ name: \"COMPONENT\", rename: \"ex.c5\", output: ex.c5 }],\n            output: () => {\n                return ex.c5({\n                    img: \"https://picsum.photos/seed/bsts_0/432/308.webp\",\n                    title: \"Border hero with cropped image and shadows\",\n                    description: \"Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.\",\n                    elem: [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ weight: \"lg\", color: \"primary\" }, \"Primary\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ weight: \"lg\", color: \"secondary\", outline: true }, \"Default\"),\n                    ],\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Dark color hero\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            showViewport: true,\n            previewAttr: { padding: 0, bgColor: \"dark\", overflow: \"hidden\" },\n            extention: [{ name: \"COMPONENT\", rename: \"ex.c6\", output: ex.c6 }],\n            output: () => {\n                return ex.c6({\n                    title: \"Dark color hero\",\n                    description: \"Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.\",\n                    elem: [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ weight: \"lg\", color: \"info\", outline: true }, \"Custom button\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.button({ weight: \"lg\", color: \"secondary\", outline: true }, \"Secondary\"),\n                    ],\n                });\n            },\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/example/heroes.js?");

/***/ })

}]);