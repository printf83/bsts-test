"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_printf83_bsts_test"] = self["webpackChunk_printf83_bsts_test"] || []).push([["lib_docs_example_sidebars_js"],{

/***/ "./lib/docs/example/sidebars.js":
/*!**************************************!*\
  !*** ./lib/docs/example/sidebars.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sidebars: () => (/* binding */ sidebars)\n/* harmony export */ });\n/* harmony import */ var _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @printf83/bsts */ \"./node_modules/@printf83/bsts/lib/index.js\");\n/* harmony import */ var _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ctl/example/_index.js */ \"./lib/ctl/example/_index.js\");\n\n\nconst ex = {\n    c1: (arg) => {\n        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n            display: \"flex\",\n            flex: [\"column\", \"shrink-0\"],\n            padding: 3,\n            shadow: true,\n            style: { width: \"280px\", minHeight: \"500px\" },\n            theme: \"dark\",\n            textBgColor: \"dark\",\n        }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                href: \"#\",\n                display: \"flex\",\n                alignItem: \"center\",\n                marginBottom: [3, \"md-0\"],\n                marginEnd: \"md-auto\",\n                textDecoration: \"none\",\n                textColor: \"white\",\n            }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({ id: arg.icon, weight: \"lg\" }), fontSize: 4 }, arg.title)),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.hr(),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.container({\n                type: \"pill\",\n                flex: \"column\",\n                marginBottom: \"auto\",\n                link: arg.link?.map((i) => {\n                    return {\n                        handleActive: true,\n                        active: i.active,\n                        textColor: \"white\",\n                        href: i.href,\n                        elem: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: i.icon }, i.label),\n                    };\n                }),\n            }),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.hr(),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.container({\n                drop: \"up\",\n            }, [\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.toggleLink({\n                    href: \"#\",\n                    textColor: \"white\",\n                }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.img({\n                        src: arg.userImage,\n                        rounded: \"circle\",\n                        attrWidth: 32,\n                        attrHeight: 32,\n                    }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.b({ marginStart: 2 }, arg.userName),\n                ]),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.menu(arg.menu ? arg.menu : \"\"),\n            ]),\n        ]);\n    },\n    c2: (arg) => {\n        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n            display: \"flex\",\n            flex: [\"column\", \"shrink-0\"],\n            padding: 3,\n            shadow: true,\n            bgColor: \"body-tertiary\",\n            style: { width: \"280px\", minHeight: \"500px\" },\n        }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                href: \"#\",\n                display: \"flex\",\n                alignItem: \"center\",\n                marginBottom: [3, \"md-0\"],\n                marginEnd: \"md-auto\",\n                textDecoration: \"none\",\n                textColor: \"body-emphasis\",\n            }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({ id: arg.icon, weight: \"lg\" }), fontSize: 4 }, arg.title)),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.hr(),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.container({\n                type: \"pill\",\n                flex: \"column\",\n                marginBottom: \"auto\",\n                link: arg.link?.map((i) => {\n                    return {\n                        handleActive: true,\n                        active: i.active,\n                        // textColor: \"body-emphasis\",\n                        href: i.href,\n                        elem: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: i.icon }, i.label),\n                    };\n                }),\n            }),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.hr(),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.container({\n                drop: \"up\",\n            }, [\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.toggleLink({\n                    href: \"#\",\n                    textColor: \"body-emphasis\",\n                }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.img({\n                        src: arg.userImage,\n                        rounded: \"circle\",\n                        attrWidth: 32,\n                        attrHeight: 32,\n                    }),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.b({ marginStart: 2 }, arg.userName),\n                ]),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.menu(arg.menu ? arg.menu : \"\"),\n            ]),\n        ]);\n    },\n    c3: (arg) => {\n        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n            display: \"flex\",\n            flex: [\"column\", \"shrink-0\"],\n            shadow: true,\n            bgColor: \"body-tertiary\",\n            style: { width: \"4.5rem\", minHeight: \"500px\" },\n        }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                href: \"#\",\n                display: \"flex\",\n                alignItem: \"center\",\n                justifyContent: \"center\",\n                marginBottom: [3, \"md-0\"],\n                marginEnd: \"md-auto\",\n                textDecoration: \"none\",\n                textColor: \"body-emphasis\",\n                padding: 3,\n            }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({ id: arg.icon, weight: \"2xl\" })),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ marginBottom: \"auto\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.nav.header.containerNav({\n                type: \"pill\",\n                flex: \"column\",\n                border: \"top\",\n                link: arg.link?.map((i) => {\n                    return {\n                        handleActive: true,\n                        rounded: 0,\n                        active: i.active,\n                        href: i.href,\n                        elem: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.tooltip({\n                            padding: 3,\n                            content: i.label,\n                            placement: \"right\",\n                        }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({\n                            id: i.icon,\n                            fontSize: 4,\n                        })),\n                        padding: 0,\n                        border: \"bottom\",\n                        display: \"flex\",\n                        justifyContent: \"center\",\n                        alignItem: \"center\",\n                    };\n                }),\n            })),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.container({\n                drop: \"up\",\n                padding: 3,\n                border: \"top\",\n                rounded: false,\n            }, [\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.toggleLink({\n                    href: \"#\",\n                    textColor: \"body-emphasis\",\n                }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.img({\n                        src: arg.userImage,\n                        rounded: \"circle\",\n                        attrWidth: 32,\n                        attrHeight: 32,\n                    }),\n                ]),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.menu(arg.menu ? arg.menu : \"\"),\n            ]),\n        ]);\n    },\n    c4: (arg) => {\n        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n            display: \"flex\",\n            flex: [\"column\", \"shrink-0\"],\n            padding: 3,\n            shadow: true,\n            style: { width: \"280px\", minHeight: \"500px\" },\n        }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                href: \"#\",\n                display: \"flex\",\n                alignItem: \"center\",\n                marginBottom: [3, \"md-0\"],\n                marginEnd: \"md-auto\",\n                textDecoration: \"none\",\n                textColor: \"body-emphasis\",\n            }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({ id: arg.icon, weight: \"lg\" }), fontSize: 4 }, arg.title)),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.hr(),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.ul({ unstyle: true, paddingStart: 0 }, arg.link?.map((i) => {\n                let id = _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.core.UUID();\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li({ marginBottom: 1 }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.collapse.toggle({ href: `#${id}`, class: \"btn btn-toggle\", defColor: false }, i.label),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.collapse.container({ id: id }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.ul({\n                        unstyle: true,\n                        fontWeight: \"normal\",\n                        class: \"btn-toggle-nav\",\n                        paddingBottom: 1,\n                        small: true,\n                    }, i.item.map((j) => {\n                        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                            href: j.href,\n                            linkColor: \"body-emphasis\",\n                            display: \"inline-flex\",\n                            textDecoration: \"none\",\n                            rounded: true,\n                        }, j.label));\n                    }))),\n                ]);\n            })),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.hr(),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.ul({ unstyle: true, paddingStart: 0 }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li({ marginBottom: 1 }, [\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.collapse.toggle({ href: `#usermenu`, class: \"btn btn-toggle\", defColor: false }, \"Account\"),\n                new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.collapse.container({ id: \"usermenu\" }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.ul({\n                    unstyle: true,\n                    class: \"btn-toggle-nav\",\n                    fontWeight: \"normal\",\n                    paddingBottom: 1,\n                    small: true,\n                }, arg.menu.map((j) => {\n                    return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.li(new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                        href: j.href,\n                        linkColor: \"body-emphasis\",\n                        display: \"inline-flex\",\n                        textDecoration: \"none\",\n                        rounded: true,\n                    }, j.label));\n                }))),\n            ])),\n        ]);\n    },\n    c5: (arg) => {\n        return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({\n            display: \"flex\",\n            flex: [\"column\", \"shrink-0\"],\n            shadow: true,\n            style: { maxWidth: \"380px\", height: \"500px\" },\n        }, [\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.a({\n                href: \"#\",\n                display: \"flex\",\n                alignItem: \"center\",\n                marginBottom: [3, \"md-0\"],\n                marginEnd: \"md-auto\",\n                textDecoration: \"none\",\n                textColor: \"body-emphasis\",\n                bgColor: \"body-tertiary\",\n                width: 100,\n                padding: 3,\n                border: \"bottom\",\n            }, new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.caption({ icon: new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.icon({ id: arg.icon, weight: \"lg\" }), fontSize: 4 }, arg.title)),\n            new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.tabList.container({ flush: true, overflowY: \"auto\" }, arg.item?.map((i, ix) => {\n                return new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.tabList.item({\n                    action: true,\n                    active: ix === 0 ? true : undefined,\n                    paddingY: 3,\n                    lineHeight: \"sm\",\n                }, [\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ display: \"flex\", width: 100, alignItem: \"center\", justifyContent: \"between\" }, [new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.b(i.title), new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.small(i.date)]),\n                    new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.h.div({ col: 10, marginBottom: 1, small: true }, i.description),\n                ]);\n            })),\n        ]);\n    },\n};\nconst sidebars = {\n    title: \"Sidebars\",\n    description: \"Common navigation patterns ideal for offcanvas or multi-column layouts.\",\n    item: [\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Dark\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { padding: 0, overflow: \"hidden\" },\n            extention: [{ name: \"COMPONENT\", rename: \"ex.c1\", output: ex.c1 }],\n            output: () => {\n                return ex.c1({\n                    icon: \"fab bootstrap\",\n                    title: \"Sidebar\",\n                    userImage: \"https://picsum.photos/seed/bsts_0/32/32\",\n                    userName: \"@printf83\",\n                    link: [\n                        { active: true, href: \"#\", icon: \"house\", label: \"Home\" },\n                        { href: \"#\", icon: \"speedometer2\", label: \"Dashboard\" },\n                        { href: \"#\", icon: \"table\", label: \"Orders\" },\n                        { href: \"#\", icon: \"grid\", label: \"Products\" },\n                        { href: \"#\", icon: \"person-circle\", label: \"Customers\" },\n                    ],\n                    menu: [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"New project...\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Setting\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Profile\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.divider(),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Sign out\"),\n                    ],\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Light\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            outputAttr: { class: \"sidebar-custom-1\" },\n            previewAttr: { padding: 0, overflow: \"hidden\" },\n            extention: [{ name: \"COMPONENT\", rename: \"ex.c2\", output: ex.c2 }],\n            output: () => {\n                return ex.c2({\n                    icon: \"fab bootstrap\",\n                    title: \"Sidebar\",\n                    userImage: \"https://picsum.photos/seed/bsts_0/32/32\",\n                    userName: \"@printf83\",\n                    link: [\n                        { active: true, href: \"#\", icon: \"house\", label: \"Home\" },\n                        { href: \"#\", icon: \"speedometer2\", label: \"Dashboard\" },\n                        { href: \"#\", icon: \"table\", label: \"Orders\" },\n                        { href: \"#\", icon: \"grid\", label: \"Products\" },\n                        { href: \"#\", icon: \"person-circle\", label: \"Customers\" },\n                    ],\n                    menu: [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"New project...\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Setting\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Profile\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.divider(),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Sign out\"),\n                    ],\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Compact\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { padding: 0, overflow: \"hidden\" },\n            extention: [{ name: \"COMPONENT\", rename: \"ex.c3\", output: ex.c3 }],\n            output: () => {\n                return ex.c3({\n                    icon: \"fab bootstrap\",\n                    userImage: \"https://picsum.photos/seed/bsts_0/32/32\",\n                    link: [\n                        { active: true, href: \"#\", icon: \"house\", label: \"Home\" },\n                        { href: \"#\", icon: \"speedometer2\", label: \"Dashboard\" },\n                        { href: \"#\", icon: \"table\", label: \"Orders\" },\n                        { href: \"#\", icon: \"grid\", label: \"Products\" },\n                        { href: \"#\", icon: \"person-circle\", label: \"Customers\" },\n                    ],\n                    menu: [\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"New project...\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Setting\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Profile\"),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.divider(),\n                        new _printf83_bsts__WEBPACK_IMPORTED_MODULE_0__.b.dropdown.item({ href: \"#\" }, \"Sign out\"),\n                    ],\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"Collapsible\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { padding: 0, overflow: \"hidden\" },\n            outputAttr: { class: \"toggle\" },\n            extention: [{ name: \"COMPONENT\", rename: \"ex.c4\", output: ex.c4 }],\n            output: () => {\n                return ex.c4({\n                    icon: \"fab bootstrap\",\n                    title: \"Collapsible\",\n                    link: [\n                        {\n                            label: \"Home\",\n                            item: [\n                                { href: \"#\", label: \"Overview\" },\n                                { href: \"#\", label: \"Updates\" },\n                                { href: \"#\", label: \"Reports\" },\n                            ],\n                        },\n                        {\n                            label: \"Dashboard\",\n                            item: [\n                                { href: \"#\", label: \"Overview\" },\n                                { href: \"#\", label: \"Weekly\" },\n                                { href: \"#\", label: \"Monthly\" },\n                                { href: \"#\", label: \"Annually\" },\n                            ],\n                        },\n                        {\n                            label: \"Orders\",\n                            item: [\n                                { href: \"#\", label: \"New\" },\n                                { href: \"#\", label: \"Processed\" },\n                                { href: \"#\", label: \"Shipped\" },\n                                { href: \"#\", label: \"Returned\" },\n                            ],\n                        },\n                    ],\n                    menu: [\n                        { href: \"\", label: \"New...\" },\n                        { href: \"\", label: \"Profile\" },\n                        { href: \"\", label: \"Setting\" },\n                        { href: \"\", label: \"Sign out\" },\n                    ],\n                });\n            },\n        }),\n        //-----------------------\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.title(\"List group\"),\n        new _ctl_example_index_js__WEBPACK_IMPORTED_MODULE_1__.code({\n            previewAttr: { padding: 0, overflow: \"hidden\" },\n            extention: [{ name: \"COMPONENT\", rename: \"ex.c5\", output: ex.c5 }],\n            output: () => {\n                return ex.c5({\n                    icon: \"fab bootstrap\",\n                    title: \"List group\",\n                    item: [\n                        {\n                            title: \"List group item heading\",\n                            description: \"Some placeholder content in a paragraph below the heading and date.\",\n                            date: \"Wed\",\n                        },\n                        {\n                            title: \"List group item heading\",\n                            description: \"Some placeholder content in a paragraph below the heading and date.\",\n                            date: \"Tues\",\n                        },\n                        {\n                            title: \"List group item heading\",\n                            description: \"Some placeholder content in a paragraph below the heading and date.\",\n                            date: \"Mon\",\n                        },\n                        {\n                            title: \"List group item heading\",\n                            description: \"Some placeholder content in a paragraph below the heading and date.\",\n                            date: \"Wed\",\n                        },\n                        {\n                            title: \"List group item heading\",\n                            description: \"Some placeholder content in a paragraph below the heading and date.\",\n                            date: \"Tues\",\n                        },\n                        {\n                            title: \"List group item heading\",\n                            description: \"Some placeholder content in a paragraph below the heading and date.\",\n                            date: \"Mon\",\n                        },\n                        {\n                            title: \"List group item heading\",\n                            description: \"Some placeholder content in a paragraph below the heading and date.\",\n                            date: \"Wed\",\n                        },\n                        {\n                            title: \"List group item heading\",\n                            description: \"Some placeholder content in a paragraph below the heading and date.\",\n                            date: \"Tues\",\n                        },\n                        {\n                            title: \"List group item heading\",\n                            description: \"Some placeholder content in a paragraph below the heading and date.\",\n                            date: \"Mon\",\n                        },\n                        {\n                            title: \"List group item heading\",\n                            description: \"Some placeholder content in a paragraph below the heading and date.\",\n                            date: \"Wed\",\n                        },\n                        {\n                            title: \"List group item heading\",\n                            description: \"Some placeholder content in a paragraph below the heading and date.\",\n                            date: \"Tues\",\n                        },\n                        {\n                            title: \"List group item heading\",\n                            description: \"Some placeholder content in a paragraph below the heading and date.\",\n                            date: \"Mon\",\n                        },\n                        {\n                            title: \"List group item heading\",\n                            description: \"Some placeholder content in a paragraph below the heading and date.\",\n                            date: \"Wed\",\n                        },\n                        {\n                            title: \"List group item heading\",\n                            description: \"Some placeholder content in a paragraph below the heading and date.\",\n                            date: \"Tues\",\n                        },\n                        {\n                            title: \"List group item heading\",\n                            description: \"Some placeholder content in a paragraph below the heading and date.\",\n                            date: \"Mon\",\n                        },\n                    ],\n                });\n            },\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@printf83/bsts-test/./lib/docs/example/sidebars.js?");

/***/ })

}]);