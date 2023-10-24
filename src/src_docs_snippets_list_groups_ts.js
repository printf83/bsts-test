"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbsts_test"] = self["webpackChunkbsts_test"] || []).push([["src_docs_snippets_list_groups_ts"],{

/***/ "./src/docs/snippets/list_groups.ts":
/*!******************************************!*\
  !*** ./src/docs/snippets/list_groups.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   list_groups: () => (/* binding */ list_groups)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"../bsts/build/esm/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./src/ctl/example/_index.ts\");\n/* harmony import */ var _ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ctl/main/content.js */ \"./src/ctl/main/content.ts\");\n\n\n\nconst ex = {\n    c1: (arg) => {\n        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.list.itemLink({ action: true, display: \"flex\", gap: 3, paddingY: 3, href: arg.href }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.img({\n                rounded: \"circle\",\n                flex: \"shrink-0\",\n                src: arg.img,\n                attrWidth: 32,\n                attrHeight: 32,\n            }),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\", gap: 2, width: 100, justifyContent: \"between\" }, [\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div([\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.h6({ marginBottom: 0 }, arg.title),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.p({ marginBottom: 0, opacity: 75 }, arg.details),\n                ]),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.small({ opacity: 50, textWrap: false }, arg.date),\n            ]),\n        ]);\n    },\n    c2: (arg) => {\n        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.list.itemLabel({\n            display: \"flex\",\n            gap: 2,\n        }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({\n                flex: \"shrink-0\",\n                type: arg.type,\n                checked: arg.checked,\n                name: arg.name,\n            }),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span([\n                arg.label,\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.small({ display: \"block\", textColor: \"body-secondary\" }, arg.description),\n            ]),\n        ]);\n    },\n    c3: (arg) => {\n        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.list.itemLabel({\n            display: \"flex\",\n            gap: 3,\n            bgColor: arg.isadd ? \"body-tertiary\" : undefined,\n        }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({\n                flex: \"shrink-0\",\n                type: \"checkbox\",\n                checked: arg.checked,\n                disabled: arg.isadd ? true : undefined,\n                pointerEvent: arg.isadd ? \"none\" : undefined,\n                style: {\n                    fontSize: \"1.375em\",\n                    filter: arg.isadd ? \"none\" : undefined,\n                    opacity: arg.isadd ? \"0.5\" : undefined,\n                },\n            }),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({ paddingTop: 1, class: \"form-cheked-content\" }, [\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.b(arg.label),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.small({ display: \"block\", textColor: \"body-secondary\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: arg.icon }, arg.description)),\n            ]),\n        ]);\n    },\n    c4: (arg) => {\n        const id = _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.UUID();\n        return [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({\n                id: id,\n                class: \"list-group-item\",\n                type: arg.type,\n                checked: arg.checked,\n                name: arg.name,\n                disabled: arg.disabled,\n                pointerEvent: \"none\",\n            }),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.list.itemLabel({\n                for: id,\n                rounded: 3,\n                paddingY: 3,\n            }, [\n                arg.label,\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({ display: \"block\", small: true, opacity: 50 }, arg.description),\n            ]),\n        ];\n    },\n    c5: (arg) => {\n        const id = _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.UUID();\n        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.list.itemDiv({ display: \"grid\", gap: 2, border: false }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ position: \"relative\" }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.input({\n                id: id,\n                type: arg.type,\n                checked: arg.checked,\n                name: arg.name,\n                disabled: arg.disabled,\n                position: \"absolute\",\n                zIndex: 2,\n                top: 50,\n                end: 0,\n                marginEnd: 3,\n                fontSize: 5,\n            }),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.list.itemLabel({\n                for: id,\n                rounded: 3,\n                paddingY: 3,\n                paddingEnd: 5,\n            }, [\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.b({ fontWeight: \"semibold\" }, arg.label),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.span({ display: \"block\", small: true, opacity: 75 }, arg.description),\n            ]),\n        ]));\n    },\n};\nconst list_groups = {\n    title: \"List groups\",\n    description: \"Extend list groups with utilities and custom styles for any content.\",\n    item: (db) => {\n        (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.resetContentIndex)();\n        return [\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"List with icon\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    extention: [{ name: \"COMPONENT\", rename: \"ex.c1\", output: ex.c1 }],\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.list.containerDiv({ style: { maxWidth: \"460px\" } }, [\n                            ex.c1({\n                                href: \"#\",\n                                img: \"https://picsum.photos/seed/bsts_0/32/32.webp\",\n                                title: \"List group item heading\",\n                                details: \"Some placeholder content in a paragraph.\",\n                                date: \"now\",\n                            }),\n                            ex.c1({\n                                href: \"#\",\n                                img: \"https://picsum.photos/seed/bsts_1/32/32.webp\",\n                                title: \"Another title here\",\n                                details: \"Some placeholder content in a paragraph that gose a little longer so it wraps to a new line.\",\n                                date: \"3d\",\n                            }),\n                            ex.c1({\n                                href: \"#\",\n                                img: \"https://picsum.photos/seed/bsts_2/32/32.webp\",\n                                title: \"Third heading\",\n                                details: \"Some placeholder content in a paragraph.\",\n                                date: \"1w\",\n                            }),\n                        ]);\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Checkbox and radio\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    outputAttr: { display: \"flex\", flex: \"wrap\", gap: 3 },\n                    extention: [{ name: \"COMPONENT\", rename: \"ex.c2\", output: ex.c2 }],\n                    output: () => {\n                        return [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.list.containerDiv({ style: { maxWidth: \"460px\" } }, [\n                                ex.c2({\n                                    checked: true,\n                                    type: \"checkbox\",\n                                    label: \"First checkbox\",\n                                    description: \"With support text underneath to add more detail\",\n                                }),\n                                ex.c2({\n                                    type: \"checkbox\",\n                                    label: \"Second checkbox\",\n                                    description: \"Some other text goes here\",\n                                }),\n                                ex.c2({\n                                    type: \"checkbox\",\n                                    label: \"Third checkbox\",\n                                    description: \"And we end with another snippet of text\",\n                                }),\n                            ]),\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.list.container({ style: { maxWidth: \"460px\" } }, [\n                                ex.c2({\n                                    name: \"group1\",\n                                    checked: true,\n                                    type: \"radio\",\n                                    label: \"First radio\",\n                                    description: \"With support text underneath to add more detail\",\n                                }),\n                                ex.c2({\n                                    name: \"group1\",\n                                    type: \"radio\",\n                                    label: \"Second radio\",\n                                    description: \"Some other text goes here\",\n                                }),\n                                ex.c2({\n                                    name: \"group1\",\n                                    type: \"radio\",\n                                    label: \"Third radio\",\n                                    description: \"And we end with another snippet of text\",\n                                }),\n                            ]),\n                        ];\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Todo list\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    outputAttr: { class: \"todo-list\" },\n                    extention: [{ name: \"COMPONENT\", rename: \"ex.c3\", output: ex.c3 }],\n                    output: () => {\n                        return [\n                            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.list.containerDiv({ style: { maxWidth: \"460px\" } }, [\n                                ex.c3({\n                                    checked: true,\n                                    icon: \"calendar-event\",\n                                    label: \"Finish sales report\",\n                                    description: \"1:00-2:00pm\",\n                                }),\n                                ex.c3({\n                                    checked: false,\n                                    icon: \"calendar-event\",\n                                    label: \"Weekly All Hands\",\n                                    description: \"2:00-2:30pm\",\n                                }),\n                                ex.c3({\n                                    checked: false,\n                                    icon: \"alarm\",\n                                    label: \"Out of office\",\n                                    description: \"Tomorrow\",\n                                }),\n                                ex.c3({\n                                    isadd: true,\n                                    icon: \"list-check\",\n                                    label: \"Add new task\",\n                                    description: \"Choose list...\",\n                                }),\n                            ]),\n                        ];\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Checkable list\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    outputAttr: {\n                        class: \"list-group-item-check\",\n                        display: \"flex\",\n                        flex: \"wrap\",\n                        gap: 3,\n                    },\n                    extention: [{ name: \"COMPONENT\", rename: \"ex.c4\", output: ex.c4 }],\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.list.containerDiv({ display: \"grid\", gap: 2, border: false }, [\n                            ...ex.c4({\n                                checked: true,\n                                type: \"checkbox\",\n                                label: \"First checkbox\",\n                                description: \"With support text underneath to add more detail\",\n                            }),\n                            ...ex.c4({\n                                type: \"checkbox\",\n                                label: \"Second checkbox\",\n                                description: \"Some other text goes here\",\n                            }),\n                            ...ex.c4({\n                                type: \"checkbox\",\n                                label: \"Third checkbox\",\n                                description: \"And we end with another snippet of text\",\n                            }),\n                            ...ex.c4({\n                                type: \"checkbox\",\n                                disabled: true,\n                                label: \"Fourth disabled checkbox\",\n                                description: \"This option is disabled\",\n                            }),\n                        ]);\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Radio\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    outputAttr: {\n                        class: \"list-group-item-check\",\n                        display: \"flex\",\n                        flex: \"wrap\",\n                        gap: 3,\n                    },\n                    extention: [{ name: \"COMPONENT\", rename: \"ex.c4\", output: ex.c4 }],\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.list.containerDiv({ display: \"grid\", gap: 2, border: false }, [\n                            ...ex.c4({\n                                checked: true,\n                                type: \"radio\",\n                                name: \"group2\",\n                                label: \"First radio\",\n                                description: \"With support text underneath to add more detail\",\n                            }),\n                            ...ex.c4({\n                                type: \"radio\",\n                                name: \"group2\",\n                                label: \"Second radio\",\n                                description: \"Some other text goes here\",\n                            }),\n                            ...ex.c4({\n                                type: \"radio\",\n                                name: \"group2\",\n                                label: \"Third radio\",\n                                description: \"And we end with another snippet of text\",\n                            }),\n                            ...ex.c4({\n                                type: \"radio\",\n                                disabled: true,\n                                name: \"group2\",\n                                label: \"Fourth disabled radio\",\n                                description: \"This option is disabled\",\n                            }),\n                        ]);\n                    },\n                }),\n            ]),\n            //----------------------\n            new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.section([\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Checkable list 2\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    outputAttr: {\n                        class: \"list-group-item-check-2\",\n                        display: \"flex\",\n                        flex: \"wrap\",\n                        gap: 3,\n                    },\n                    extention: [{ name: \"COMPONENT\", rename: \"ex.c5\", output: ex.c5 }],\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.list.containerDiv({ display: \"grid\", gap: 2, border: false }, [\n                            ex.c5({\n                                checked: true,\n                                type: \"checkbox\",\n                                label: \"First checkbox\",\n                                description: \"With support text underneath to add more detail\",\n                            }),\n                            ex.c5({\n                                type: \"checkbox\",\n                                label: \"Second checkbox\",\n                                description: \"Some other text goes here\",\n                            }),\n                            ex.c5({\n                                type: \"checkbox\",\n                                label: \"Third checkbox\",\n                                description: \"And we end with another snippet of text\",\n                            }),\n                            ex.c5({\n                                type: \"checkbox\",\n                                disabled: true,\n                                label: \"Fourth disabled checkbox\",\n                                description: \"This option is disabled\",\n                            }),\n                        ]);\n                    },\n                }),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.text(\"Radio\"),\n                new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n                    db: (0,_ctl_main_content_js__WEBPACK_IMPORTED_MODULE_2__.getContentCode)(db),\n                    outputAttr: {\n                        class: \"list-group-item-check-2\",\n                        display: \"flex\",\n                        flex: \"wrap\",\n                        gap: 3,\n                    },\n                    extention: [{ name: \"COMPONENT\", rename: \"ex.c5\", output: ex.c5 }],\n                    output: () => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.list.containerDiv({ display: \"grid\", gap: 2, border: false }, [\n                            ex.c5({\n                                checked: true,\n                                type: \"radio\",\n                                name: \"group3\",\n                                label: \"First radio\",\n                                description: \"With support text underneath to add more detail\",\n                            }),\n                            ex.c5({\n                                type: \"radio\",\n                                name: \"group3\",\n                                label: \"Second radio\",\n                                description: \"Some other text goes here\",\n                            }),\n                            ex.c5({\n                                type: \"radio\",\n                                name: \"group3\",\n                                label: \"Third radio\",\n                                description: \"And we end with another snippet of text\",\n                            }),\n                            ex.c5({\n                                type: \"radio\",\n                                disabled: true,\n                                name: \"group3\",\n                                label: \"Fourth disabled radio\",\n                                description: \"This option is disabled\",\n                            }),\n                        ]);\n                    },\n                }),\n            ]),\n        ];\n    },\n};\n\n\n//# sourceURL=webpack://bsts-test/./src/docs/snippets/list_groups.ts?");

/***/ })

}]);