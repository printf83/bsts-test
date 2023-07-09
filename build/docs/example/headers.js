"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.headers = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
const ex = {
    c1: (arg) => {
        return new bsts_1.h.div({ container: true }, new bsts_1.h.header({
            display: "flex",
            flex: "wrap",
            justifyContent: "center",
            paddingY: 3,
            marginBottom: 4,
            border: "bottom",
        }, [
            new bsts_1.h.a({
                href: "#",
                display: "flex",
                alignItem: "center",
                marginBottom: [3, "md-0"],
                marginEnd: "md-auto",
                linkColor: "body-emphasis",
                textDecoration: "none",
            }, new bsts_1.b.caption({
                icon: new bsts_1.b.icon({ id: arg.icon, marginBottom: 0 }),
                fontSize: 4,
            }, arg.title)),
            new bsts_1.b.nav.header.container({
                type: "pill",
                link: arg.link
                    ? arg.link.map((i) => {
                        i.handleActive = true;
                        return i;
                    })
                    : undefined,
                on: {
                    "change.bs.nav": arg.onlinkchange,
                },
            }),
        ]));
    },
    c2: (arg) => {
        return new bsts_1.h.div({ container: true }, new bsts_1.h.header({
            display: "flex",
            justifyContent: "center",
            paddingY: 3,
        }, new bsts_1.b.nav.header.container({
            type: "pill",
            link: arg.link
                ? arg.link.map((i) => {
                    i.handleActive = true;
                    return i;
                })
                : undefined,
            on: {
                "change.bs.nav": arg.onlinkchange,
            },
        })));
    },
    c3: (arg) => {
        return new bsts_1.h.div({ container: true }, new bsts_1.h.header({
            display: "flex",
            flex: "wrap",
            alignItem: "center",
            justifyContent: ["center", "md-between"],
            paddingY: 3,
            marginBottom: 4,
            border: "bottom",
        }, [
            new bsts_1.h.div({ col: "md-3", marginBottom: [2, "md-0"] }, new bsts_1.h.a({
                href: "#",
                display: "inline-flex",
                linkColor: "body-emphasis",
                textDecoration: "none",
                marginBottom: [3, "md-0"],
            }, new bsts_1.b.icon({ id: arg.icon, fontSize: 4 }))),
            new bsts_1.b.nav.header.container({
                col: [12, "md-auto"],
                marginBottom: [2, "md-0"],
                justifyContent: "center",
                linkNormal: "body-emphasis",
                linkActive: "secondary",
                link: arg.link
                    ? arg.link.map((i) => {
                        i.paddingX = 2;
                        i.handleActive = true;
                        return i;
                    })
                    : undefined,
                on: {
                    "change.bs.nav": arg.onlinkchange,
                },
            }),
            new bsts_1.h.div({ col: "md-3", textAlign: "end" }, [
                new bsts_1.b.button({ outline: true, marginEnd: 2, on: { click: arg.onlogin } }, "Login"),
                new bsts_1.b.button({ on: { click: arg.onsignup } }, "Sign-up"),
            ]),
        ]));
    },
    c4: (arg) => {
        return new bsts_1.h.header({
            padding: 3,
            theme: "dark",
            linkNormal: "body-emphasis",
            linkActive: "secondary",
        }, new bsts_1.h.div({ container: true }, new bsts_1.h.div({
            display: "flex",
            flex: "wrap",
            alignItem: "center",
            justifyContent: ["center", "lg-start"],
        }, [
            new bsts_1.h.a({
                href: "#",
                display: "flex",
                alignItem: "center",
                marginBottom: [2, "lg-0"],
                textColor: "white",
                textDecoration: "none",
                marginEnd: 2,
            }, new bsts_1.b.icon({ id: arg.icon, fontSize: 4 })),
            new bsts_1.b.nav.header.container({
                col: [12, "lg-auto"],
                marginBottom: [2, "md-0"],
                marginEnd: "lg-auto",
                justifyContent: "center",
                link: arg.link
                    ? arg.link.map((i) => {
                        i.handleActive = true;
                        i.paddingX = 2;
                        return i;
                    })
                    : undefined,
                on: {
                    "change.bs.nav": arg.onlinkchange,
                },
            }),
            new bsts_1.h.form({
                col: [12, "lg-auto"],
                marginBottom: [3, "lg-0"],
                marginEnd: "lg-3",
                role: "search",
                on: {
                    submit: arg.onsearch,
                },
            }, new bsts_1.b.input({ type: "search" })),
            new bsts_1.h.div({ textAlign: "end" }, [
                new bsts_1.b.button({
                    outline: true,
                    color: "light",
                    marginEnd: 2,
                    on: { click: arg.onlogin },
                }, "Login"),
                new bsts_1.b.button({ color: "warning", on: { click: arg.onsignup } }, "Sign-up"),
            ]),
        ])));
    },
    c5: (arg) => {
        return new bsts_1.h.header({
            padding: 3,
            marginBottom: 3,
            border: "bottom",
        }, new bsts_1.h.div({ container: true }, new bsts_1.h.div({
            display: "flex",
            flex: "wrap",
            alignItem: "center",
            justifyContent: ["center", "lg-start"],
        }, [
            new bsts_1.h.a({
                href: "#",
                display: "flex",
                alignItem: "center",
                marginBottom: [2, "lg-0"],
                linkColor: "body-emphasis",
                textDecoration: "none",
                marginEnd: 2,
            }, new bsts_1.b.icon({ id: arg.icon, fontSize: 4 })),
            new bsts_1.b.nav.header.container({
                col: [12, "lg-auto"],
                marginBottom: [2, "md-0"],
                marginEnd: "lg-auto",
                justifyContent: "center",
                linkNormal: "body-emphasis",
                linkActive: "secondary",
                link: arg.link
                    ? arg.link.map((i) => {
                        i.handleActive = true;
                        i.paddingX = 2;
                        return i;
                    })
                    : undefined,
                on: {
                    "change.bs.nav": arg.onlinkchange,
                },
            }),
            new bsts_1.h.form({
                col: [12, "lg-auto"],
                marginBottom: [3, "lg-0"],
                marginEnd: "lg-3",
                role: "search",
                on: {
                    submit: arg.onsearch,
                },
            }, new bsts_1.b.input({ type: "search", placeholder: "Search..." })),
            new bsts_1.h.div({
                textAlign: "end",
                class: "dropdown",
            }, [
                new bsts_1.b.dropdown.buttonLink({
                    href: "#",
                    color: "body-emphasis",
                }, new bsts_1.h.img({
                    src: arg.img,
                    rounded: "circle",
                    attrWidth: 32,
                    attrHeight: 32,
                })),
                new bsts_1.b.dropdown.menu(arg.menu ? arg.menu : ""),
            ]),
        ])));
    },
    c6Header: (arg) => {
        return new bsts_1.h.header({
            paddingY: 3,
            marginBottom: 3,
            border: "bottom",
        }, new bsts_1.h.div({
            container: "fluid",
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: 3,
            alignItem: "center",
        }, [
            new bsts_1.h.div({ class: "dropdown" }, [
                new bsts_1.b.dropdown.buttonLink({
                    href: "#",
                    color: "body-emphasis",
                    display: "flex",
                    alignItem: "center",
                    col: "lg-4",
                    marginBottom: [2, "lg-0"],
                }, new bsts_1.b.icon({ id: arg.icon, fontSize: 2 })),
                new bsts_1.b.dropdown.menu({
                    shadow: true,
                    on: {
                        "change.bs.menu": arg.onlinkchange,
                    },
                }, arg.link ? arg.link : ""),
            ]),
            new bsts_1.h.div({ display: "flex", alignItem: "center" }, [
                new bsts_1.h.form({
                    width: 100,
                    marginEnd: 3,
                    role: "search",
                    on: {
                        submit: arg.onsearch,
                    },
                }, new bsts_1.b.input({ type: "search", placeholder: "Search..." })),
                new bsts_1.h.div({ flex: "shrink-0", class: "dropdown" }, [
                    new bsts_1.b.dropdown.buttonLink({
                        href: "#",
                        color: "body-emphasis",
                    }, new bsts_1.h.img({
                        src: arg.img,
                        rounded: "circle",
                        attrWidth: 32,
                        attrHeight: 32,
                    })),
                    new bsts_1.b.dropdown.menu({
                        shadow: true,
                    }, arg.menu ? arg.menu : ""),
                ]),
            ]),
        ]));
    },
    c6Body: (arg) => {
        return new bsts_1.h.div({ container: "fluid", paddingBottom: 3 }, new bsts_1.h.div({ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 3 }, [
            new bsts_1.h.div({ bgColor: "body-tertiary", border: true, rounded: 3 }, arg.side ? arg.side : ""),
            new bsts_1.h.div({ bgColor: "body-tertiary", border: true, rounded: 3 }, arg.main ? arg.main : ""),
        ]));
    },
    c6: (arg) => {
        return [ex.c6Header(arg), ex.c6Body(arg)];
    },
    c7Nav: (arg) => {
        var _a, _b;
        return new bsts_1.h.nav({ paddingY: 2, bgColor: "body-secondary", border: "bottom" }, new bsts_1.h.div({
            container: true,
            display: "flex",
            flex: "wrap",
            linkNormal: "body-emphasis",
            linkActive: "secondary",
        }, [
            new bsts_1.b.nav.header.container({
                marginEnd: "auto",
                link: (_a = arg.startMenu) === null || _a === void 0 ? void 0 : _a.map((i) => {
                    i.handleActive = true;
                    return i;
                }),
                on: { "change.bs.nav": arg.onstarmenuchange },
            }),
            new bsts_1.b.nav.header.container({
                link: (_b = arg.endMenu) === null || _b === void 0 ? void 0 : _b.map((i) => {
                    return i;
                }),
            }),
        ]));
    },
    c7Header: (arg) => {
        return new bsts_1.h.header({ paddingY: 3, marginBottom: 4, border: "bottom" }, new bsts_1.h.div({ container: true, display: "flex", flex: "wrap", justifyContent: "center" }, [
            new bsts_1.h.a({
                href: "#",
                display: "flex",
                alignItem: "center",
                marginBottom: [3, "lg-0"],
                marginEnd: "lg-auto",
                linkColor: "body-emphasis",
                textDecoration: "none",
            }, new bsts_1.b.caption({
                icon: new bsts_1.b.icon({ id: arg.icon }),
                fontSize: 4,
            }, arg.title)),
            new bsts_1.h.form({
                col: [12, "lg-auto"],
                marginBottom: [3, "lg-0"],
                role: "search",
                on: {
                    submit: arg.onsearch ? arg.onsearch : undefined,
                },
            }, new bsts_1.b.input({ type: "search", placeholder: "Search..." })),
        ]));
    },
    c8: (arg) => {
        return new bsts_1.h.header([
            new bsts_1.h.div({ paddingX: 3, paddingY: 2, textBgColor: "dark", theme: "dark" }, new bsts_1.h.div({ container: true }, new bsts_1.h.div({
                display: "flex",
                flex: "wrap",
                alignItem: "center",
                justifyContent: ["center", "lg-start"],
            }, [
                new bsts_1.h.a({
                    href: "#",
                    display: "flex",
                    alignItem: "center",
                    marginY: [2, "lg-0"],
                    marginEnd: "lg-auto",
                    linkColor: "light",
                    textDecoration: "none",
                }, new bsts_1.b.icon({ id: arg.icon, fontSize: 1 })),
                new bsts_1.b.nav.header.container({
                    col: [12, "lg-auto"],
                    marginY: [2, "md-0"],
                    small: true,
                    justifyContent: "center",
                    linkNormal: "body-emphasis",
                    linkActive: "secondary",
                    link: arg.link.map((i) => {
                        let result = {
                            active: i.active,
                            handleActive: true,
                            href: i.href,
                            elem: new bsts_1.b.caption({ icon: new bsts_1.b.icon({ id: i.icon, h: 2 }), iconPosition: "top" }, i.label),
                        };
                        return result;
                    }),
                    on: {
                        "change.bs.nav": arg.onlinkchange,
                    },
                }),
            ]))),
            new bsts_1.h.div({ paddingX: 3, paddingY: 2, border: "bottom", marginBottom: 3 }, new bsts_1.h.div({ container: true, display: "flex", flex: "wrap", justifyContent: "center" }, [
                new bsts_1.h.form({
                    col: [12, "lg-auto"],
                    marginBottom: [2, "lg-0"],
                    marginEnd: "lg-auto",
                    role: "search",
                    on: {
                        submit: arg.onsearch ? arg.onsearch : undefined,
                    },
                }, new bsts_1.b.input({ type: "search", label: "Search", placeholder: "Search..." })),
                new bsts_1.h.div({ textAlign: "end" }, [
                    new bsts_1.b.button({
                        color: "light",
                        marginEnd: 2,
                        on: { click: arg.onlogin },
                    }, "Login"),
                    new bsts_1.b.button({ color: "primary", on: { click: arg.onsignup } }, "Sign-up"),
                ]),
            ])),
        ]);
    },
};
exports.headers = {
    title: "Headers",
    description: "Display your branding, navigation, search, and more with these header components",
    item: () => {
        return [
            new e.section([
                new e.title("Example header 1"),
                new e.code({
                    showViewport: true,
                    showConsole: true,
                    previewAttr: { padding: 0 },
                    extention: [{ name: "COMPONENT", rename: "ex.c1", output: ex.c1 }],
                    output: () => {
                        return ex.c1({
                            icon: "hexagon-fill",
                            title: "Simple header",
                            link: [
                                { active: true, href: "#", elem: "Home" },
                                { href: "#", elem: "Features" },
                                { href: "#", elem: "Pricing" },
                                { href: "#", elem: "FAQs" },
                                { href: "#", elem: "About" },
                            ],
                            onlinkchange: (event) => {
                                const target = event.target;
                                const detail = event.detail;
                                e.console(target, "onlinkchange", {
                                    target: bsts_1.core.elemInfo(detail.target),
                                    relatedTarget: bsts_1.core.elemInfo(detail.relatedTarget),
                                }, "info");
                            },
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Example header 2"),
                new e.code({
                    showConsole: true,
                    previewAttr: { padding: 0 },
                    extention: [{ name: "COMPONENT", rename: "ex.c2", output: ex.c2 }],
                    output: () => {
                        return ex.c2({
                            link: [
                                { active: true, href: "#", elem: "Home" },
                                { href: "#", elem: "Features" },
                                { href: "#", elem: "Pricing" },
                                { href: "#", elem: "FAQs" },
                                { href: "#", elem: "About" },
                            ],
                            onlinkchange: (event) => {
                                const target = event.target;
                                const detail = event.detail;
                                e.console(target, "onlinkchange", {
                                    target: bsts_1.core.elemInfo(detail.target),
                                    relatedTarget: bsts_1.core.elemInfo(detail.relatedTarget),
                                }, "info");
                            },
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Example header 3"),
                new e.code({
                    showConsole: true,
                    showViewport: true,
                    previewAttr: { padding: 0 },
                    extention: [{ name: "COMPONENT", rename: "ex.c3", output: ex.c3 }],
                    output: () => {
                        return ex.c3({
                            icon: "hexagon-fill",
                            link: [
                                { active: true, href: "#", elem: "Home" },
                                { href: "#", elem: "Features" },
                                { href: "#", elem: "Pricing" },
                                { href: "#", elem: "FAQs" },
                                { href: "#", elem: "About" },
                            ],
                            onlinkchange: (event) => {
                                const target = event.target;
                                const detail = event.detail;
                                e.console(target, "onlinkchange", {
                                    target: bsts_1.core.elemInfo(detail.target),
                                    relatedTarget: bsts_1.core.elemInfo(detail.relatedTarget),
                                }, "info");
                            },
                            onlogin: (event) => {
                                //do login
                                const target = event.target;
                                e.console(target, "onlogin", bsts_1.core.elemInfo(target), "secondary");
                            },
                            onsignup: (event) => {
                                //do sign up
                                const target = event.target;
                                e.console(target, "onsignup", bsts_1.core.elemInfo(target), "warning");
                            },
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Example header 4"),
                new e.code({
                    showConsole: true,
                    showViewport: true,
                    previewAttr: { bgColor: "dark", padding: 0 },
                    extention: [{ name: "COMPONENT", rename: "ex.c4", output: ex.c4 }],
                    output: () => {
                        return ex.c4({
                            icon: "hexagon-fill",
                            link: [
                                { active: true, href: "#", elem: "Home" },
                                { href: "#", elem: "Features" },
                                { href: "#", elem: "FAQs" },
                                { href: "#", elem: "About" },
                            ],
                            onlinkchange: (event) => {
                                const target = event.target;
                                const detail = event.detail;
                                e.console(target, "onlinkchange", {
                                    target: bsts_1.core.elemInfo(detail.target),
                                    relatedTarget: bsts_1.core.elemInfo(detail.relatedTarget),
                                }, "info");
                            },
                            onlogin: (event) => {
                                //do login
                                const target = event.target;
                                e.console(target, "onlogin", bsts_1.core.elemInfo(target), "secondary");
                            },
                            onsignup: (event) => {
                                //do sign up
                                const target = event.target;
                                e.console(target, "onsignup", bsts_1.core.elemInfo(target), "warning");
                            },
                            onsearch: (event) => {
                                //do search
                                event.preventDefault();
                                const target = event.target;
                                const input = target.getElementsByTagName("input")[0];
                                e.console(target, "onsearch", {
                                    input: bsts_1.core.elemInfo(input),
                                    value: input.value,
                                }, "success");
                            },
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Example header 5"),
                new e.code({
                    showConsole: true,
                    showViewport: true,
                    previewAttr: { padding: 0 },
                    extention: [{ name: "COMPONENT", rename: "ex.c5", output: ex.c5 }],
                    output: () => {
                        return ex.c5({
                            img: "https://picsum.photos/seed/bsts_0/32/32.webp",
                            icon: "hexagon-fill",
                            link: [
                                { active: true, href: "#", elem: "Overview" },
                                { href: "#", elem: "Inventory" },
                                { href: "#", elem: "Customers" },
                                { href: "#", elem: "Products" },
                            ],
                            menu: [
                                new bsts_1.b.dropdown.item({ href: "#" }, "New project..."),
                                new bsts_1.b.dropdown.item({ href: "#" }, "Setting"),
                                new bsts_1.b.dropdown.item({ href: "#" }, "Profile"),
                                new bsts_1.b.dropdown.divider(),
                                new bsts_1.b.dropdown.item({ href: "#" }, "Sign out"),
                            ],
                            onlinkchange: (event) => {
                                const target = event.target;
                                const detail = event.detail;
                                e.console(target, "onlinkchange", {
                                    target: bsts_1.core.elemInfo(detail.target),
                                    relatedTarget: bsts_1.core.elemInfo(detail.relatedTarget),
                                }, "info");
                            },
                            onsearch: (event) => {
                                //do search
                                event.preventDefault();
                                const target = event.target;
                                const input = target.getElementsByTagName("input")[0];
                                e.console(target, "onsearch", {
                                    input: bsts_1.core.elemInfo(input),
                                    value: input.value,
                                }, "success");
                            },
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Example header 6"),
                new e.code({
                    showConsole: true,
                    showViewport: true,
                    previewAttr: { padding: 0 },
                    extention: [
                        { name: "COMPONENT", rename: "ex.c6", output: ex.c6 },
                        { name: "COMPONENTHEADER", rename: "ex.c6Header", output: ex.c6Header },
                        { name: "COMPONENTBODY", rename: "ex.c6Body", output: ex.c6Body },
                    ],
                    output: () => {
                        return ex.c6({
                            img: "https://picsum.photos/seed/bsts_0/32/32.webp",
                            icon: "hexagon-fill",
                            link: [
                                new bsts_1.b.dropdown.item({ href: "#", active: true, handleActive: true }, "Overview"),
                                new bsts_1.b.dropdown.item({ href: "#", handleActive: true }, "Inventory"),
                                new bsts_1.b.dropdown.item({ href: "#", handleActive: true }, "Customers"),
                                new bsts_1.b.dropdown.item({ href: "#", handleActive: true }, "Products"),
                                new bsts_1.b.dropdown.divider(),
                                new bsts_1.b.dropdown.item({ href: "#", handleActive: true }, "Reports"),
                                new bsts_1.b.dropdown.item({ href: "#", handleActive: true }, "Analytics"),
                            ],
                            menu: [
                                new bsts_1.b.dropdown.item({ href: "#" }, "New project..."),
                                new bsts_1.b.dropdown.item({ href: "#" }, "Setting"),
                                new bsts_1.b.dropdown.item({ href: "#" }, "Profile"),
                                new bsts_1.b.dropdown.divider(),
                                new bsts_1.b.dropdown.item({ href: "#" }, "Sign out"),
                            ],
                            onlinkchange: (event) => {
                                const target = event.target;
                                const detail = event.detail;
                                e.console(target, "onlinkchange", {
                                    target: bsts_1.core.elemInfo(detail.target),
                                    relatedTarget: bsts_1.core.elemInfo(detail.relatedTarget),
                                }, "info");
                            },
                            onsearch: (event) => {
                                //do search
                                event.preventDefault();
                                const target = event.target;
                                const input = target.getElementsByTagName("input")[0];
                                e.console(target, "onsearch", {
                                    input: bsts_1.core.elemInfo(input),
                                    value: input.value,
                                }, "success");
                            },
                            side: new bsts_1.h.div({ padding: 2, style: { height: "200px" } }, "@side"),
                            main: new bsts_1.h.div({ padding: 2, style: { height: "200px" } }, "@main"),
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Example header 7"),
                new e.code({
                    showConsole: true,
                    showViewport: true,
                    previewAttr: { padding: 0 },
                    extention: [
                        { name: "COMPONENTNAV", rename: "ex.c7Nav", output: ex.c7Nav },
                        { name: "COMPONENTHEADER", rename: "ex.c7Header", output: ex.c7Header },
                    ],
                    output: () => {
                        return [
                            ex.c7Nav({
                                startMenu: [
                                    { active: true, href: "#", elem: "Home" },
                                    { href: "#", elem: "Features" },
                                    { href: "#", elem: "Pricing" },
                                    { href: "#", elem: "FAQs" },
                                    { href: "#", elem: "About" },
                                ],
                                onstarmenuchange: (event) => {
                                    const target = event.target;
                                    const detail = event.detail;
                                    e.console(target, "onstarmenuchange", {
                                        target: bsts_1.core.elemInfo(detail.target),
                                        relatedTarget: bsts_1.core.elemInfo(detail.relatedTarget),
                                    }, "info");
                                },
                                endMenu: [
                                    {
                                        on: {
                                            click: (event) => {
                                                //do login
                                                const target = event.target;
                                                e.console(target, "login", bsts_1.core.elemInfo(target), "secondary");
                                            },
                                        },
                                        elem: "Login",
                                    },
                                    {
                                        on: {
                                            click: (event) => {
                                                //do signup
                                                const target = event.target;
                                                e.console(target, "signup", bsts_1.core.elemInfo(target), "secondary");
                                            },
                                        },
                                        elem: "Sign up",
                                    },
                                ],
                            }),
                            ex.c7Header({
                                icon: "hexagon-fill",
                                title: "Double header",
                                onsearch: (event) => {
                                    //do search
                                    event.preventDefault();
                                    const target = event.target;
                                    const input = target.getElementsByTagName("input")[0];
                                    e.console(target, "onsearch", {
                                        input: bsts_1.core.elemInfo(input),
                                        value: input.value,
                                    }, "success");
                                },
                            }),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Example header 8"),
                new e.code({
                    showConsole: true,
                    showViewport: true,
                    previewAttr: { padding: 0, overflow: "hidden" },
                    extention: [{ name: "COMPONENT", rename: "ex.c8", output: ex.c8 }],
                    output: () => {
                        return ex.c8({
                            icon: "hexagon-fill",
                            link: [
                                {
                                    active: true,
                                    href: "#",
                                    icon: "house",
                                    label: "Home",
                                },
                                {
                                    href: "#",
                                    icon: "speedometer2",
                                    label: "Dashboard",
                                },
                                {
                                    href: "#",
                                    icon: "table",
                                    label: "Order",
                                },
                                {
                                    href: "#",
                                    icon: "grid",
                                    label: "Products",
                                },
                                {
                                    href: "#",
                                    icon: "person-circle",
                                    label: "Customers",
                                },
                            ],
                            onlinkchange: (event) => {
                                const target = event.target;
                                const detail = event.detail;
                                e.console(target, "onlinkchange", {
                                    target: bsts_1.core.elemInfo(detail.target),
                                    relatedTarget: bsts_1.core.elemInfo(detail.relatedTarget),
                                }, "info");
                            },
                            onlogin: (event) => {
                                //do login
                                const target = event.target;
                                e.console(target, "onlogin", bsts_1.core.elemInfo(target), "secondary");
                            },
                            onsignup: (event) => {
                                //do sign up
                                const target = event.target;
                                e.console(target, "onsignup", bsts_1.core.elemInfo(target), "warning");
                            },
                            onsearch: (event) => {
                                //do search
                                event.preventDefault();
                                const target = event.target;
                                const input = target.getElementsByTagName("input")[0];
                                e.console(target, "onsearch", {
                                    input: bsts_1.core.elemInfo(input),
                                    value: input.value,
                                }, "success");
                            },
                        });
                    },
                }),
            ]),
        ];
    },
};
