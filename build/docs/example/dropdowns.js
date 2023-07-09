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
exports.dropdowns = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
const menuItem = () => {
    return new bsts_1.h.div({
        display: "flex",
        flex: ["column", "lg-row"],
        alignItem: "stretch",
        justifyContent: "start",
    }, [
        new bsts_1.h.nav({ col: "lg-8" }, new bsts_1.h.ul({
            unstyle: true,
            display: "flex",
            flex: "column",
            gap: 2,
            linkNormal: "body",
            linkHover: "link",
            linkHoverBg: "body-tertiary",
        }, [
            {
                href: "#",
                icon: "image-fill",
                title: "Main product",
                description: "Take a tour trough the product",
            },
            {
                href: "#",
                icon: "music-note-beamed",
                title: "Another product",
                description: "Explore this other product we offer",
            },
            {
                href: "#",
                icon: "question-circle",
                title: "Support",
                description: "Get help from our support crew",
            },
        ].map((i) => {
            return new bsts_1.h.li([
                new bsts_1.h.a({
                    rounded: 2,
                    display: "flex",
                    alignItem: "start",
                    gap: 2,
                    paddingY: 2,
                    paddingX: 3,
                    lineHeight: "sm",
                    textAlign: "start",
                    textDecoration: "none",
                    href: i.href,
                }, [
                    new bsts_1.b.icon({ id: i.icon, style: { fontSize: "1.5em" } }),
                    new bsts_1.h.div([new bsts_1.h.b({ display: "block" }, i.title), new bsts_1.h.small(i.description)]),
                ]),
            ]);
        }))),
        new bsts_1.b.verticalrule({
            display: ["none", "lg-block"],
            opacity: 25,
            marginX: 4,
        }),
        new bsts_1.h.hr({ display: "lg-none" }),
        new bsts_1.h.div({ col: "lg-auto", paddingEnd: 3 }, new bsts_1.h.ul({
            display: "flex",
            flex: "column",
            gap: 2,
            unstyle: true,
            small: true,
            marginBottom: 2,
        }, [
            { href: "#", label: "Documentation" },
            { href: "#", label: "Use cases" },
            { href: "#", label: "API status" },
            { href: "#", label: "Partners" },
            { href: "#", label: "Resources" },
        ].map((i) => {
            return new bsts_1.h.li(new bsts_1.h.a({
                href: i.href,
                linkOffset: 2,
                linkUnderline: true,
                linkUnderlineOpacity: 25,
                linkUnderlineOpacityHover: 75,
            }, i.label));
        }))),
    ]);
};
exports.dropdowns = {
    title: "Dropdowns",
    description: "Enhance your dropdowns with filters, icons, custom styles, and more.",
    item: () => {
        return [
            new e.section([
                new e.title("Style : 1"),
                new e.code({
                    showCodepen: false,
                    outputAttr: {
                        display: "flex",
                        flex: "wrap",
                        gap: 4,
                    },
                    output: () => {
                        return [
                            new bsts_1.b.dropdown.menu({
                                customStyle: 1,
                                theme: "light",
                                debug: true,
                                shadow: true,
                                style: { width: "220px" },
                            }, [
                                new bsts_1.b.dropdown.item({ href: "#", active: true }, "Action"),
                                new bsts_1.b.dropdown.item({ href: "#" }, "Another action"),
                                new bsts_1.b.dropdown.item({ href: "#" }, "Something else here"),
                                new bsts_1.b.dropdown.divider(),
                                new bsts_1.b.dropdown.item({ href: "#" }, "Separated link"),
                            ]),
                            new bsts_1.b.dropdown.menu({ customStyle: 1, theme: "dark", debug: true, shadow: true, style: { width: "220px" } }, [
                                new bsts_1.b.dropdown.item({ href: "#", active: true }, "Action"),
                                new bsts_1.b.dropdown.item({ href: "#" }, "Another action"),
                                new bsts_1.b.dropdown.item({ href: "#" }, "Something else here"),
                                new bsts_1.b.dropdown.divider(),
                                new bsts_1.b.dropdown.item({ href: "#" }, "Separated link"),
                            ]),
                        ];
                    },
                }),
                new e.text("Live preview"),
                new e.code({
                    outputAttr: {
                        display: "flex",
                        flex: "wrap",
                        gap: 2,
                    },
                    output: () => {
                        return [
                            new bsts_1.b.dropdown.container([
                                new bsts_1.b.dropdown.button("Light dropdown"),
                                new bsts_1.b.dropdown.menu({ customStyle: 1, theme: "light" }, [
                                    new bsts_1.b.dropdown.item({ href: "#", active: true }, "Action"),
                                    new bsts_1.b.dropdown.item({ href: "#" }, "Another action"),
                                    new bsts_1.b.dropdown.item({ href: "#" }, "Something else here"),
                                    new bsts_1.b.dropdown.divider(),
                                    new bsts_1.b.dropdown.item({ href: "#" }, "Separated link"),
                                ]),
                            ]),
                            new bsts_1.b.dropdown.container([
                                new bsts_1.b.dropdown.button("Dark dropdown"),
                                new bsts_1.b.dropdown.menu({ customStyle: 1, theme: "dark" }, [
                                    new bsts_1.b.dropdown.item({ href: "#", active: true }, "Action"),
                                    new bsts_1.b.dropdown.item({ href: "#" }, "Another action"),
                                    new bsts_1.b.dropdown.item({ href: "#" }, "Something else here"),
                                    new bsts_1.b.dropdown.divider(),
                                    new bsts_1.b.dropdown.item({ href: "#" }, "Separated link"),
                                ]),
                            ]),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Filter"),
                new e.code({
                    showCodepen: false,
                    outputAttr: {
                        display: "flex",
                        flex: "wrap",
                        gap: 4,
                    },
                    output: () => {
                        return [
                            new bsts_1.b.dropdown.menu({ theme: "light", paddingTop: 0, debug: true, shadow: true, style: { width: "280px" } }, [
                                new bsts_1.h.form({
                                    padding: 2,
                                    marginBottom: 2,
                                    bgColor: "body-tertiary",
                                    border: "bottom",
                                    rounded: "top",
                                }, new bsts_1.b.input({
                                    type: "search",
                                    autocomplete: "off",
                                    placeholder: "Type to filter...",
                                })),
                                new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: new bsts_1.b.icon({ id: "record-fill", textColor: "success" }) }, "Action")),
                                new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: new bsts_1.b.icon({ id: "record-fill", textColor: "primary" }) }, "Another action")),
                                new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: new bsts_1.b.icon({ id: "record-fill", textColor: "danger" }) }, "Something else here")),
                                new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: new bsts_1.b.icon({ id: "record-fill", textColor: "info" }) }, "Separated link")),
                            ]),
                            new bsts_1.b.dropdown.menu({ theme: "dark", paddingTop: 0, debug: true, shadow: true, style: { width: "280px" } }, [
                                new bsts_1.h.form({
                                    padding: 2,
                                    marginBottom: 2,
                                    bgColor: "body-tertiary",
                                    border: "bottom",
                                    rounded: "top",
                                }, new bsts_1.b.input({
                                    type: "search",
                                    autocomplete: "off",
                                    placeholder: "Type to filter...",
                                })),
                                new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: new bsts_1.b.icon({ id: "record-fill", textColor: "success" }) }, "Action")),
                                new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: new bsts_1.b.icon({ id: "record-fill", textColor: "primary" }) }, "Another action")),
                                new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: new bsts_1.b.icon({ id: "record-fill", textColor: "danger" }) }, "Something else here")),
                                new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: new bsts_1.b.icon({ id: "record-fill", textColor: "info" }) }, "Separated link")),
                            ]),
                        ];
                    },
                }),
                new e.text("Live preview"),
                new e.code({
                    outputAttr: {
                        display: "flex",
                        flex: "wrap",
                        gap: 2,
                    },
                    output: () => {
                        return [
                            new bsts_1.b.dropdown.container([
                                new bsts_1.b.dropdown.button("Light dropdown"),
                                new bsts_1.b.dropdown.menu({ theme: "light", paddingTop: 0 }, [
                                    new bsts_1.h.form({
                                        padding: 2,
                                        marginBottom: 2,
                                        bgColor: "body-tertiary",
                                        border: "bottom",
                                        rounded: "top",
                                    }, new bsts_1.b.input({
                                        type: "search",
                                        autocomplete: "off",
                                        placeholder: "Type to filter...",
                                    })),
                                    new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: new bsts_1.b.icon({ id: "record-fill", textColor: "success" }) }, "Action")),
                                    new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: new bsts_1.b.icon({ id: "record-fill", textColor: "primary" }) }, "Another action")),
                                    new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: new bsts_1.b.icon({ id: "record-fill", textColor: "danger" }) }, "Something else here")),
                                    new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: new bsts_1.b.icon({ id: "record-fill", textColor: "info" }) }, "Separated link")),
                                ]),
                            ]),
                            new bsts_1.b.dropdown.container([
                                new bsts_1.b.dropdown.button("Dark dropdown"),
                                new bsts_1.b.dropdown.menu({ theme: "dark", paddingTop: 0 }, [
                                    new bsts_1.h.form({
                                        padding: 2,
                                        marginBottom: 2,
                                        bgColor: "body-tertiary",
                                        border: "bottom",
                                        rounded: "top",
                                    }, new bsts_1.b.input({
                                        type: "search",
                                        autocomplete: "off",
                                        placeholder: "Type to filter...",
                                    })),
                                    new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: new bsts_1.b.icon({ id: "record-fill", textColor: "success" }) }, "Action")),
                                    new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: new bsts_1.b.icon({ id: "record-fill", textColor: "primary" }) }, "Another action")),
                                    new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: new bsts_1.b.icon({ id: "record-fill", textColor: "danger" }) }, "Something else here")),
                                    new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: new bsts_1.b.icon({ id: "record-fill", textColor: "info" }) }, "Separated link")),
                                ]),
                            ]),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Menu"),
                new e.code({
                    showCodepen: false,
                    outputAttr: {
                        display: "flex",
                        flex: "wrap",
                        gap: 4,
                    },
                    output: () => {
                        return [
                            new bsts_1.b.dropdown.menu({ theme: "light", debug: true, shadow: true, style: { width: "220px" } }, [
                                new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: "files" }, "Documents")),
                                new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: "image-fill" }, "Photos")),
                                new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: "film" }, "Movie")),
                                new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: "music-note-beamed" }, "Music")),
                                new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: "joystick" }, "Games")),
                                new bsts_1.b.dropdown.divider(),
                                new bsts_1.b.dropdown.item({ href: "#", color: "danger" }, new bsts_1.b.caption({ icon: "trash" }, "Trash")),
                            ]),
                            new bsts_1.b.dropdown.menu({ theme: "dark", debug: true, shadow: true, style: { width: "220px" } }, [
                                new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: "files" }, "Documents")),
                                new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: "image-fill" }, "Photos")),
                                new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: "film" }, "Movie")),
                                new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: "music-note-beamed" }, "Music")),
                                new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: "joystick" }, "Games")),
                                new bsts_1.b.dropdown.divider(),
                                new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: "trash" }, "Trash")),
                            ]),
                        ];
                    },
                }),
                new e.text("Live preview"),
                new e.code({
                    outputAttr: {
                        display: "flex",
                        flex: "wrap",
                        gap: 2,
                    },
                    output: () => {
                        return [
                            new bsts_1.b.dropdown.container([
                                new bsts_1.b.dropdown.button("Light dropdown"),
                                new bsts_1.b.dropdown.menu({ theme: "light" }, [
                                    new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: "files" }, "Documents")),
                                    new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: "image-fill" }, "Photos")),
                                    new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: "film" }, "Movie")),
                                    new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: "music-note-beamed" }, "Music")),
                                    new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: "joystick" }, "Games")),
                                    new bsts_1.b.dropdown.divider(),
                                    new bsts_1.b.dropdown.item({ href: "#", color: "danger" }, new bsts_1.b.caption({ icon: "trash" }, "Trash")),
                                ]),
                            ]),
                            new bsts_1.b.dropdown.container([
                                new bsts_1.b.dropdown.button("Dark dropdown"),
                                new bsts_1.b.dropdown.menu({ theme: "dark" }, [
                                    new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: "files" }, "Documents")),
                                    new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: "image-fill" }, "Photos")),
                                    new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: "film" }, "Movie")),
                                    new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: "music-note-beamed" }, "Music")),
                                    new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: "joystick" }, "Games")),
                                    new bsts_1.b.dropdown.divider(),
                                    new bsts_1.b.dropdown.item({ href: "#" }, new bsts_1.b.caption({ icon: "trash" }, "Trash")),
                                ]),
                            ]),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Calendar"),
                new e.code({
                    showConsole: true,
                    showCodepen: false,
                    outputAttr: {
                        display: "flex",
                        flex: "wrap",
                        gap: 4,
                    },
                    output: () => {
                        return [
                            new bsts_1.b.dropdown.menu({ theme: "light", debug: true, shadow: true, style: { minWidth: "320px" } }, new bsts_1.b.calendar({
                                paddingX: 2,
                                view: new Date(),
                                startDate: new Date(),
                                on: {
                                    "change.bs.calendar": (event) => {
                                        const target = event.target;
                                        const detail = event.detail;
                                        e.console(target, "change.bs.calendar", detail, "success");
                                    },
                                },
                            })),
                            new bsts_1.b.dropdown.menu({ theme: "dark", debug: true, shadow: true, style: { minWidth: "320px" } }, new bsts_1.b.calendar({
                                paddingX: 2,
                                view: new Date(),
                                startDate: new Date(),
                                on: {
                                    "change.bs.calendar": (event) => {
                                        const target = event.target;
                                        const detail = event.detail;
                                        e.console(target, "change.bs.calendar", detail, "success");
                                    },
                                },
                            })),
                        ];
                    },
                }),
                new e.text("Live preview"),
                new e.code({
                    showConsole: true,
                    outputAttr: {
                        display: "flex",
                        flex: "wrap",
                        gap: 2,
                    },
                    output: () => {
                        return [
                            new bsts_1.b.dropdown.container([
                                new bsts_1.b.dropdown.button({ autoClose: "outside" }, "Light dropdown"),
                                new bsts_1.b.dropdown.menu({
                                    theme: "light",
                                    style: { minWidth: "320px" },
                                }, new bsts_1.b.calendar({
                                    paddingX: 2,
                                    view: new Date(),
                                    startDate: new Date(),
                                    on: {
                                        "change.bs.calendar": (event) => {
                                            const target = event.target;
                                            const detail = event.detail;
                                            e.console(target, "change.bs.calendar", detail, "success");
                                        },
                                    },
                                })),
                            ]),
                            new bsts_1.b.dropdown.container([
                                new bsts_1.b.dropdown.button({ autoClose: "outside" }, "Dark dropdown"),
                                new bsts_1.b.dropdown.menu({ theme: "dark", style: { minWidth: "320px" } }, new bsts_1.b.calendar({
                                    paddingX: 2,
                                    view: new Date(),
                                    startDate: new Date(),
                                    on: {
                                        "change.bs.calendar": (event) => {
                                            const target = event.target;
                                            const detail = event.detail;
                                            e.console(target, "change.bs.calendar", detail, "success");
                                        },
                                    },
                                })),
                            ]),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Multiple"),
                new e.code({
                    showConsole: true,
                    showCodepen: false,
                    outputAttr: {
                        display: "flex",
                        flex: "wrap",
                        gap: 4,
                    },
                    output: () => {
                        return [
                            new bsts_1.b.dropdown.menu({ theme: "light", debug: true, shadow: true, style: { minWidth: "320px" } }, new bsts_1.b.calendar({
                                paddingX: 2,
                                multiple: true,
                                view: new Date(),
                                startDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 3),
                                endDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 3),
                                on: {
                                    "change.bs.calendar": (event) => {
                                        const target = event.target;
                                        const detail = event.detail;
                                        e.console(target, "change.bs.calendar", detail, "success");
                                    },
                                },
                            })),
                            new bsts_1.b.dropdown.menu({ theme: "dark", debug: true, shadow: true, style: { minWidth: "320px" } }, new bsts_1.b.calendar({
                                paddingX: 2,
                                multiple: true,
                                view: new Date(),
                                startDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 3),
                                endDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 3),
                                on: {
                                    "change.bs.calendar": (event) => {
                                        const target = event.target;
                                        const detail = event.detail;
                                        e.console(target, "change.bs.calendar", detail, "success");
                                    },
                                },
                            })),
                        ];
                    },
                }),
                new e.text("Live preview"),
                new e.code({
                    showConsole: true,
                    outputAttr: {
                        display: "flex",
                        flex: "wrap",
                        gap: 2,
                    },
                    output: () => {
                        return [
                            new bsts_1.b.dropdown.container([
                                new bsts_1.b.dropdown.button({ autoClose: "outside" }, "Light dropdown"),
                                new bsts_1.b.dropdown.menu({
                                    theme: "light",
                                    style: { minWidth: "320px" },
                                }, new bsts_1.b.calendar({
                                    paddingX: 2,
                                    multiple: true,
                                    view: new Date(),
                                    startDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 3),
                                    endDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 3),
                                    on: {
                                        "change.bs.calendar": (event) => {
                                            const target = event.target;
                                            const detail = event.detail;
                                            e.console(target, "change.bs.calendar", detail, "success");
                                        },
                                    },
                                })),
                            ]),
                            new bsts_1.b.dropdown.container([
                                new bsts_1.b.dropdown.button({ autoClose: "outside" }, "Dark dropdown"),
                                new bsts_1.b.dropdown.menu({
                                    theme: "dark",
                                    style: { minWidth: "320px" },
                                }, new bsts_1.b.calendar({
                                    paddingX: 2,
                                    multiple: true,
                                    view: new Date(),
                                    startDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 3),
                                    endDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 3),
                                    on: {
                                        "change.bs.calendar": (event) => {
                                            const target = event.target;
                                            const detail = event.detail;
                                            e.console(target, "change.bs.calendar", detail, "success");
                                        },
                                    },
                                })),
                            ]),
                        ];
                    },
                }),
                new e.text("Change toggle"),
                new e.code({
                    showConsole: true,
                    outputAttr: {
                        display: "flex",
                        flex: "wrap",
                        gap: 2,
                    },
                    output: () => {
                        return [
                            new bsts_1.b.dropdown.container([
                                new bsts_1.b.dropdown.button({ autoClose: "outside" }, "Light dropdown"),
                                new bsts_1.b.dropdown.menu({
                                    theme: "light",
                                    style: { minWidth: "320px" },
                                }, new bsts_1.b.calendar({
                                    paddingX: 2,
                                    multiple: true,
                                    view: new Date(),
                                    startDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 3),
                                    endDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 3),
                                    on: {
                                        "change.bs.calendar": (event) => {
                                            var _a;
                                            const target = event.target;
                                            const detail = event.detail;
                                            e.console(target, "change.bs.calendar", detail, "success");
                                            //change toggle text
                                            const toggle = (_a = target.closest(".dropdown-menu")) === null || _a === void 0 ? void 0 : _a.previousSibling;
                                            toggle.innerHTML = `${detail.startDate
                                                ? detail.startDate.getDate() +
                                                    "/" +
                                                    detail.startDate.getMonth() +
                                                    "/" +
                                                    detail.startDate.getFullYear()
                                                : ""}${detail.endDate ? " - " : ""}${detail.endDate
                                                ? detail.endDate.getDate() +
                                                    "/" +
                                                    detail.endDate.getMonth() +
                                                    "/" +
                                                    detail.endDate.getFullYear()
                                                : ""}`;
                                        },
                                    },
                                })),
                            ]),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("List"),
                new e.code({
                    showViewport: true,
                    showCodepen: false,
                    outputAttr: { class: "dropdown-menu-w-md-480px", display: "flex", flex: "wrap", gap: 4 },
                    extention: [{ name: "MENUCOMPONENT", rename: "menuItem", output: menuItem }],
                    output: () => {
                        return [
                            new bsts_1.b.dropdown.menu({
                                theme: "light",
                                padding: 3,
                                debug: true,
                                shadow: true,
                            }, menuItem()),
                            new bsts_1.b.dropdown.menu({
                                theme: "dark",
                                padding: 3,
                                debug: true,
                                shadow: true,
                            }, menuItem()),
                        ];
                    },
                }),
                new e.text("Live preview"),
                new e.code({
                    showViewport: true,
                    outputAttr: { class: "dropdown-menu-w-md-480px", display: "flex", flex: "wrap", gap: 2 },
                    extention: [{ name: "MENUCOMPONENT", rename: "menuItem", output: menuItem }],
                    output: () => {
                        return [
                            new bsts_1.b.dropdown.container([
                                new bsts_1.b.dropdown.button("Light dropdown"),
                                new bsts_1.b.dropdown.menu({
                                    theme: "light",
                                    padding: 3,
                                }, menuItem()),
                            ]),
                            new bsts_1.b.dropdown.container([
                                new bsts_1.b.dropdown.button("Dark dropdown"),
                                new bsts_1.b.dropdown.menu({
                                    theme: "dark",
                                    padding: 3,
                                }, menuItem()),
                            ]),
                        ];
                    },
                }),
            ]),
        ];
    },
};
