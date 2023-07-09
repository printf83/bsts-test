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
exports.sidebars = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
const ex = {
    c1: (arg) => {
        var _a;
        return new bsts_1.h.div({
            display: "flex",
            flex: ["column", "shrink-0"],
            padding: 3,
            shadow: true,
            style: { width: "280px", minHeight: "500px" },
            theme: "dark",
            textBgColor: "dark",
        }, [
            new bsts_1.h.a({
                href: "#",
                display: "flex",
                alignItem: "center",
                marginBottom: [3, "md-0"],
                marginEnd: "md-auto",
                textDecoration: "none",
                textColor: "white",
            }, new bsts_1.b.caption({ icon: new bsts_1.b.icon({ id: arg.icon }), fontSize: 4 }, arg.title)),
            new bsts_1.h.hr(),
            new bsts_1.b.nav.header.container({
                type: "pill",
                flex: "column",
                marginBottom: "auto",
                on: { "change.bs.nav": arg.onlinkchange },
                link: (_a = arg.link) === null || _a === void 0 ? void 0 : _a.map((i) => {
                    return {
                        handleActive: true,
                        active: i.active,
                        textColor: "white",
                        href: i.href,
                        elem: new bsts_1.b.caption({ icon: i.icon }, i.label),
                    };
                }),
            }),
            new bsts_1.h.hr(),
            new bsts_1.b.dropdown.container({
                drop: "up",
            }, [
                new bsts_1.b.dropdown.buttonLink({
                    href: "#",
                    textColor: "white",
                }, [
                    new bsts_1.h.img({
                        src: arg.userImage,
                        rounded: "circle",
                        attrWidth: 32,
                        attrHeight: 32,
                    }),
                    new bsts_1.h.b({ marginStart: 2 }, arg.userName),
                ]),
                new bsts_1.b.dropdown.menu(arg.menu ? arg.menu : ""),
            ]),
        ]);
    },
    c2: (arg) => {
        var _a;
        return new bsts_1.h.div({
            display: "flex",
            flex: ["column", "shrink-0"],
            padding: 3,
            shadow: true,
            bgColor: "body-tertiary",
            style: { width: "280px", minHeight: "500px" },
        }, [
            new bsts_1.h.a({
                href: "#",
                display: "flex",
                alignItem: "center",
                marginBottom: [3, "md-0"],
                marginEnd: "md-auto",
                textDecoration: "none",
                textColor: "body-emphasis",
            }, new bsts_1.b.caption({ icon: new bsts_1.b.icon({ id: arg.icon }), fontSize: 4 }, arg.title)),
            new bsts_1.h.hr(),
            new bsts_1.b.nav.header.container({
                type: "pill",
                flex: "column",
                marginBottom: "auto",
                linkNormal: "body",
                linkActive: "white",
                on: { "change.bs.nav": arg.onlinkchange },
                link: (_a = arg.link) === null || _a === void 0 ? void 0 : _a.map((i) => {
                    return {
                        handleActive: true,
                        active: i.active,
                        href: i.href,
                        elem: new bsts_1.b.caption({ icon: i.icon }, i.label),
                    };
                }),
            }),
            new bsts_1.h.hr(),
            new bsts_1.b.dropdown.container({
                drop: "up",
            }, [
                new bsts_1.b.dropdown.buttonLink({
                    href: "#",
                    textColor: "body-emphasis",
                }, [
                    new bsts_1.h.img({
                        src: arg.userImage,
                        rounded: "circle",
                        attrWidth: 32,
                        attrHeight: 32,
                    }),
                    new bsts_1.h.b({ marginStart: 2 }, arg.userName),
                ]),
                new bsts_1.b.dropdown.menu(arg.menu ? arg.menu : ""),
            ]),
        ]);
    },
    c3: (arg) => {
        var _a;
        return new bsts_1.h.div({
            display: "flex",
            flex: ["column", "shrink-0"],
            shadow: true,
            bgColor: "body-tertiary",
            style: { width: "4.5rem", minHeight: "500px" },
        }, [
            new bsts_1.h.a({
                href: "#",
                display: "flex",
                alignItem: "center",
                justifyContent: "center",
                marginBottom: [3, "md-0"],
                marginEnd: "md-auto",
                textDecoration: "none",
                textColor: "body-emphasis",
                paddingX: 4,
                paddingY: 3,
            }, new bsts_1.b.icon({ id: arg.icon, h: 4 })),
            new bsts_1.h.div({ marginBottom: "auto" }, new bsts_1.b.nav.header.containerNav({
                type: "pill",
                flex: "column",
                border: "top",
                on: { "change.bs.nav": arg.onlinkchange },
                link: (_a = arg.link) === null || _a === void 0 ? void 0 : _a.map((i) => {
                    return {
                        handleActive: true,
                        rounded: 0,
                        active: i.active,
                        href: i.href,
                        elem: new bsts_1.b.tooltip({
                            padding: 3,
                            content: i.label,
                            placement: "right",
                        }, new bsts_1.b.icon({
                            id: i.icon,
                            fontSize: 4,
                        })),
                        padding: 0,
                        border: "bottom",
                        display: "flex",
                        justifyContent: "center",
                        alignItem: "center",
                    };
                }),
            })),
            new bsts_1.b.dropdown.container({
                drop: "up",
                padding: 3,
                border: "top",
                rounded: false,
            }, [
                new bsts_1.b.dropdown.buttonLink({
                    href: "#",
                    textColor: "body-emphasis",
                }, [
                    new bsts_1.h.img({
                        src: arg.userImage,
                        rounded: "circle",
                        attrWidth: 32,
                        attrHeight: 32,
                    }),
                ]),
                new bsts_1.b.dropdown.menu(arg.menu ? arg.menu : ""),
            ]),
        ]);
    },
    c4ClickEvent: (event) => {
        const target = event.target.closest("a.sidebar-item");
        const container = target.closest("div.sidebar-container");
        if (container) {
            const lastActive = container === null || container === void 0 ? void 0 : container.querySelector("a.sidebar-item.active");
            if (lastActive) {
                lastActive.classList.remove("active");
                container.dispatchEvent(new CustomEvent("change.bs.sidebar", {
                    detail: {
                        target: target,
                        relatedTarget: lastActive,
                    },
                }));
            }
            else {
                container.dispatchEvent(new CustomEvent("change.bs.sidebar", {
                    detail: {
                        target: target,
                        relatedTarget: null,
                    },
                }));
            }
            target.classList.add("active");
        }
    },
    c4: (arg) => {
        var _a;
        return new bsts_1.h.div({
            display: "flex",
            class: "sidebar-container",
            flex: ["column", "shrink-0"],
            padding: 3,
            shadow: true,
            style: { width: "280px", minHeight: "500px" },
            on: { "change.bs.sidebar": arg.onlinkchange },
        }, [
            new bsts_1.h.a({
                href: "#",
                display: "flex",
                alignItem: "center",
                marginBottom: [3, "md-0"],
                marginEnd: "md-auto",
                textDecoration: "none",
                textColor: "body-emphasis",
            }, new bsts_1.b.caption({ icon: new bsts_1.b.icon({ id: arg.icon }), fontSize: 4 }, arg.title)),
            new bsts_1.h.hr(),
            new bsts_1.h.ul({ unstyle: true, paddingStart: 0 }, (_a = arg.link) === null || _a === void 0 ? void 0 : _a.map((i) => {
                let id = bsts_1.core.UUID();
                return new bsts_1.h.li({ marginBottom: 1 }, [
                    new bsts_1.b.collapse.button({
                        href: `#${id}`,
                        class: "btn",
                        icon: true,
                        defColor: false,
                    }, i.label),
                    new bsts_1.b.collapse.container({ id: id }, new bsts_1.h.ul({
                        unstyle: true,
                        fontWeight: "normal",
                        class: "btn-toggle-nav",
                        paddingBottom: 1,
                        small: true,
                    }, i.item.map((j) => {
                        return new bsts_1.h.li(new bsts_1.h.a({
                            href: j.href,
                            class: "sidebar-item",
                            linkColor: "body-emphasis",
                            display: "inline-flex",
                            textDecoration: "none",
                            rounded: true,
                            on: {
                                click: ex.c4ClickEvent,
                            },
                        }, j.label));
                    }))),
                ]);
            })),
            new bsts_1.h.hr(),
            new bsts_1.h.ul({ unstyle: true, paddingStart: 0 }, new bsts_1.h.li({ marginBottom: 1 }, [
                new bsts_1.b.collapse.button({ href: `#usermenu`, class: "btn", icon: true, defColor: false }, "Account"),
                new bsts_1.b.collapse.container({ id: "usermenu" }, new bsts_1.h.ul({
                    unstyle: true,
                    class: "btn-toggle-nav",
                    fontWeight: "normal",
                    paddingBottom: 1,
                    small: true,
                }, arg.menu.map((j) => {
                    return new bsts_1.h.li(new bsts_1.h.a({
                        class: "sidebar-item",
                        href: j.href,
                        linkColor: "body-emphasis",
                        display: "inline-flex",
                        textDecoration: "none",
                        rounded: true,
                        on: {
                            click: ex.c4ClickEvent,
                        },
                    }, j.label));
                }))),
            ])),
        ]);
    },
    c5: (arg) => {
        var _a;
        return new bsts_1.h.div({
            display: "flex",
            flex: ["column", "shrink-0"],
            shadow: true,
            style: { maxWidth: "380px", height: "500px" },
        }, [
            new bsts_1.h.a({
                href: "#",
                display: "flex",
                alignItem: "center",
                marginBottom: "md-0",
                marginEnd: "md-auto",
                textDecoration: "none",
                textColor: "body-emphasis",
                bgColor: "body-tertiary",
                width: 100,
                padding: 3,
                border: "bottom",
            }, new bsts_1.b.caption({ icon: new bsts_1.b.icon({ id: arg.icon }), fontSize: 4 }, arg.title)),
            new bsts_1.b.tabList.container({ flush: true, overflowY: "auto" }, (_a = arg.item) === null || _a === void 0 ? void 0 : _a.map((i, ix) => {
                return new bsts_1.b.tabList.item({
                    action: true,
                    active: ix === 0 ? true : undefined,
                    paddingY: 3,
                    lineHeight: "sm",
                    autoInit: true,
                }, [
                    new bsts_1.h.div({ display: "flex", width: 100, alignItem: "center", justifyContent: "between" }, [new bsts_1.h.b(i.title), new bsts_1.h.small(i.date)]),
                    new bsts_1.h.div({ col: 10, marginBottom: 1, small: true }, i.description),
                ]);
            })),
        ]);
    },
};
exports.sidebars = {
    title: "Sidebars",
    description: "Common navigation patterns ideal for offcanvas or multi-column layouts.",
    item: () => {
        return [
            new e.section([
                new e.title("Dark"),
                new e.code({
                    showConsole: true,
                    showViewport: true,
                    previewAttr: { padding: 0, overflow: "hidden" },
                    extention: [{ name: "COMPONENT", rename: "ex.c1", output: ex.c1 }],
                    output: () => {
                        return ex.c1({
                            icon: "hexagon-fill",
                            title: "Sidebar",
                            userImage: "https://picsum.photos/seed/bsts_0/32/32.webp",
                            userName: "@printf83",
                            link: [
                                { active: true, href: "#", icon: "house", label: "Home" },
                                { href: "#", icon: "speedometer2", label: "Dashboard" },
                                { href: "#", icon: "table", label: "Orders" },
                                { href: "#", icon: "grid", label: "Products" },
                                { href: "#", icon: "person-circle", label: "Customers" },
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
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Light"),
                new e.code({
                    showConsole: true,
                    showViewport: true,
                    previewAttr: { padding: 0, overflow: "hidden" },
                    extention: [{ name: "COMPONENT", rename: "ex.c2", output: ex.c2 }],
                    output: () => {
                        return ex.c2({
                            icon: "hexagon-fill",
                            title: "Sidebar",
                            userImage: "https://picsum.photos/seed/bsts_0/32/32.webp",
                            userName: "@printf83",
                            link: [
                                { active: true, href: "#", icon: "house", label: "Home" },
                                { href: "#", icon: "speedometer2", label: "Dashboard" },
                                { href: "#", icon: "table", label: "Orders" },
                                { href: "#", icon: "grid", label: "Products" },
                                { href: "#", icon: "person-circle", label: "Customers" },
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
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Compact"),
                new e.code({
                    showConsole: true,
                    showViewport: true,
                    previewAttr: { padding: 0, overflow: "hidden" },
                    extention: [{ name: "COMPONENT", rename: "ex.c3", output: ex.c3 }],
                    output: () => {
                        return ex.c3({
                            icon: "hexagon-fill",
                            userImage: "https://picsum.photos/seed/bsts_0/32/32.webp",
                            link: [
                                { active: true, href: "#", icon: "house", label: "Home" },
                                { href: "#", icon: "speedometer2", label: "Dashboard" },
                                { href: "#", icon: "table", label: "Orders" },
                                { href: "#", icon: "grid", label: "Products" },
                                { href: "#", icon: "person-circle", label: "Customers" },
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
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Collapsible"),
                new e.code({
                    showConsole: true,
                    showViewport: true,
                    previewAttr: { padding: 0, overflow: "hidden" },
                    outputAttr: { class: ["sidebar-item"] },
                    extention: [
                        { name: "CLICKEVENT", rename: "ex.c4ClickEvent", output: ex.c4ClickEvent },
                        { name: "COMPONENT", rename: "ex.c4", output: ex.c4 },
                    ],
                    output: () => {
                        return ex.c4({
                            icon: "hexagon-fill",
                            title: "Collapsible",
                            link: [
                                {
                                    label: "Home",
                                    item: [
                                        { href: "#", label: "Overview" },
                                        { href: "#", label: "Updates" },
                                        { href: "#", label: "Reports" },
                                    ],
                                },
                                {
                                    label: "Dashboard",
                                    item: [
                                        { href: "#", label: "Overview" },
                                        { href: "#", label: "Weekly" },
                                        { href: "#", label: "Monthly" },
                                        { href: "#", label: "Annually" },
                                    ],
                                },
                                {
                                    label: "Orders",
                                    item: [
                                        { href: "#", label: "New" },
                                        { href: "#", label: "Processed" },
                                        { href: "#", label: "Shipped" },
                                        { href: "#", label: "Returned" },
                                    ],
                                },
                            ],
                            menu: [
                                { href: "#", label: "New..." },
                                { href: "#", label: "Profile" },
                                { href: "#", label: "Setting" },
                                { href: "#", label: "Sign out" },
                            ],
                            onlinkchange: (event) => {
                                const target = event.target;
                                const detail = event.detail;
                                e.console(target, "onlinkchange", {
                                    target: bsts_1.core.elemInfo(detail.target),
                                    relatedTarget: detail.relatedTarget
                                        ? bsts_1.core.elemInfo(detail.relatedTarget)
                                        : "null",
                                }, "info");
                            },
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("List group"),
                new e.code({
                    showViewport: true,
                    previewAttr: { padding: 0, overflow: "hidden" },
                    extention: [{ name: "COMPONENT", rename: "ex.c5", output: ex.c5 }],
                    output: () => {
                        return ex.c5({
                            icon: "hexagon-fill",
                            title: "List group",
                            item: [
                                {
                                    title: "List group item heading",
                                    description: "Some placeholder content in a paragraph below the heading and date.",
                                    date: "Wed",
                                },
                                {
                                    title: "List group item heading",
                                    description: "Some placeholder content in a paragraph below the heading and date.",
                                    date: "Tues",
                                },
                                {
                                    title: "List group item heading",
                                    description: "Some placeholder content in a paragraph below the heading and date.",
                                    date: "Mon",
                                },
                                {
                                    title: "List group item heading",
                                    description: "Some placeholder content in a paragraph below the heading and date.",
                                    date: "Wed",
                                },
                                {
                                    title: "List group item heading",
                                    description: "Some placeholder content in a paragraph below the heading and date.",
                                    date: "Tues",
                                },
                                {
                                    title: "List group item heading",
                                    description: "Some placeholder content in a paragraph below the heading and date.",
                                    date: "Mon",
                                },
                                {
                                    title: "List group item heading",
                                    description: "Some placeholder content in a paragraph below the heading and date.",
                                    date: "Wed",
                                },
                                {
                                    title: "List group item heading",
                                    description: "Some placeholder content in a paragraph below the heading and date.",
                                    date: "Tues",
                                },
                                {
                                    title: "List group item heading",
                                    description: "Some placeholder content in a paragraph below the heading and date.",
                                    date: "Mon",
                                },
                                {
                                    title: "List group item heading",
                                    description: "Some placeholder content in a paragraph below the heading and date.",
                                    date: "Wed",
                                },
                                {
                                    title: "List group item heading",
                                    description: "Some placeholder content in a paragraph below the heading and date.",
                                    date: "Tues",
                                },
                                {
                                    title: "List group item heading",
                                    description: "Some placeholder content in a paragraph below the heading and date.",
                                    date: "Mon",
                                },
                                {
                                    title: "List group item heading",
                                    description: "Some placeholder content in a paragraph below the heading and date.",
                                    date: "Wed",
                                },
                                {
                                    title: "List group item heading",
                                    description: "Some placeholder content in a paragraph below the heading and date.",
                                    date: "Tues",
                                },
                                {
                                    title: "List group item heading",
                                    description: "Some placeholder content in a paragraph below the heading and date.",
                                    date: "Mon",
                                },
                            ],
                        });
                    },
                }),
            ]),
        ];
    },
};
