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
exports.modals = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
exports.modals = {
    title: "Modals",
    description: "Transform modals to serve any purpose, from feature tours to dialogs.",
    item: () => {
        return [
            new e.section([
                new e.title("Style 1"),
                new e.code({
                    previewAttr: { bgColor: "body-tertiary" },
                    showCodepen: false,
                    output: () => {
                        return new bsts_1.b.modal.container({ debug: true, view: "end", contentAttr: { rounded: 4 } }, [
                            new bsts_1.b.modal.header({ close: true, borderNone: "bottom" }, new bsts_1.b.modal.title("Modal title")),
                            new bsts_1.b.modal.body({ paddingY: 0 }, new bsts_1.h.p("This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS.")),
                            new bsts_1.b.modal.footer({
                                flex: "column",
                                alignItem: "stretch",
                                width: 100,
                                gap: 2,
                                paddingBottom: 3,
                                borderNone: "top",
                            }, [
                                new bsts_1.b.button({ color: "primary", weight: "lg" }, "Save changes"),
                                new bsts_1.b.button({
                                    dismiss: "modal",
                                    color: "secondary",
                                    weight: "lg",
                                }, "Close"),
                            ]),
                        ]);
                    },
                }),
                new e.text("Using {{b.modal.create}}"),
                new e.code({
                    previewAttr: { bgColor: "body-tertiary" },
                    showCodepen: false,
                    output: () => {
                        return bsts_1.b.modal.create({
                            debug: true,
                            customStyle: 1,
                            title: "Modal title",
                            elem: new bsts_1.h.p("This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS."),
                            btn: ["savechanges", "close"],
                            btnFn: [(_event) => { }],
                        });
                    },
                }),
                new e.text("Live preview"),
                new e.code({
                    outputAttr: { display: "flex", gap: 2 },
                    output: () => {
                        return [
                            new bsts_1.b.button({
                                on: {
                                    click: (_event) => {
                                        bsts_1.b.modal.show(new bsts_1.b.modal.container({ view: "end", contentAttr: { rounded: 4 } }, [
                                            new bsts_1.b.modal.header({ close: true, borderNone: "bottom" }, new bsts_1.b.modal.title("Modal title")),
                                            new bsts_1.b.modal.body({ paddingY: 0 }, new bsts_1.h.p("This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS.")),
                                            new bsts_1.b.modal.footer({
                                                flex: "column",
                                                alignItem: "stretch",
                                                width: 100,
                                                gap: 2,
                                                paddingBottom: 3,
                                                borderNone: "top",
                                            }, [
                                                new bsts_1.b.button({ color: "primary", weight: "lg" }, "Save changes"),
                                                new bsts_1.b.button({
                                                    dismiss: "modal",
                                                    color: "secondary",
                                                    weight: "lg",
                                                }, "Close"),
                                            ]),
                                        ]));
                                    },
                                },
                            }, "b.modal.container"),
                            new bsts_1.b.button({
                                on: {
                                    click: (_event) => {
                                        bsts_1.b.modal.show(bsts_1.b.modal.create({
                                            customStyle: 1,
                                            title: "Modal title",
                                            elem: new bsts_1.h.p("This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS."),
                                            btn: ["savechanges", "close"],
                                            btnFn: [(_event) => { }],
                                        }));
                                    },
                                },
                            }, "b.modal.create"),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Style 2"),
                new e.code({
                    previewAttr: { bgColor: "body-tertiary" },
                    showCodepen: false,
                    output: () => {
                        return new bsts_1.b.modal.container({ debug: true }, [
                            new bsts_1.b.modal.header({
                                textAlign: "center",
                                padding: 4,
                                paddingBottom: 0,
                                borderNone: "bottom",
                                position: "relative",
                                close: false,
                            }, new bsts_1.b.modal.title({ width: 100 }, "Enable this setting?")),
                            new bsts_1.b.modal.body({ padding: 4, paddingTop: 0, textAlign: "center" }, [
                                new bsts_1.h.p({ marginBottom: 0 }, "You can always change your mind in your account settings."),
                            ]),
                            new bsts_1.b.modal.footer({
                                flex: ["nowrap", "grow-1"],
                                padding: 0,
                            }, [
                                new bsts_1.b.button({
                                    fontWeight: "bold",
                                    border: "end",
                                    flex: "grow-1",
                                    textDecoration: "none",
                                    color: "transparent",
                                    textColor: "primary",
                                    rounded: 0,
                                    weight: "lg",
                                    fontSize: 6,
                                    paddingY: 3,
                                    margin: 0,
                                }, "Yes, enable"),
                                new bsts_1.b.button({
                                    defColor: false,
                                    dismiss: "modal",
                                    flex: "grow-1",
                                    textDecoration: "none",
                                    color: "transparent",
                                    textColor: "primary",
                                    rounded: 0,
                                    weight: "lg",
                                    fontSize: 6,
                                    paddingY: 3,
                                    margin: 0,
                                }, "No thanks"),
                            ]),
                        ]);
                    },
                }),
                new e.text("Using {{b.modal.create}}"),
                new e.code({
                    previewAttr: { bgColor: "body-tertiary" },
                    showCodepen: false,
                    output: () => {
                        return bsts_1.b.modal.create({
                            debug: true,
                            customStyle: 2,
                            title: "Enable this setting?",
                            elem: new bsts_1.h.p({ marginBottom: 0 }, "You can always change your mind in your account settings."),
                            btn: ["yesenable", "nothanks"],
                            btnFn: [(_event) => { }],
                        });
                    },
                }),
                new e.text("Live preview"),
                new e.code({
                    outputAttr: { display: "flex", gap: 2 },
                    output: () => {
                        return [
                            new bsts_1.b.button({
                                on: {
                                    click: (_event) => {
                                        bsts_1.b.modal.show(new bsts_1.b.modal.container([
                                            new bsts_1.b.modal.header({
                                                textAlign: "center",
                                                padding: 4,
                                                paddingBottom: 0,
                                                borderNone: "bottom",
                                                position: "relative",
                                                close: false,
                                            }, new bsts_1.b.modal.title({ width: 100 }, "Enable this setting?")),
                                            new bsts_1.b.modal.body({ padding: 4, paddingTop: 0, textAlign: "center" }, [
                                                new bsts_1.h.p({ marginBottom: 0 }, "You can always change your mind in your account settings."),
                                            ]),
                                            new bsts_1.b.modal.footer({
                                                flex: ["nowrap", "grow-1"],
                                                padding: 0,
                                            }, [
                                                new bsts_1.b.button({
                                                    fontWeight: "bold",
                                                    border: "end",
                                                    flex: "grow-1",
                                                    textDecoration: "none",
                                                    color: "transparent",
                                                    textColor: "primary",
                                                    rounded: 0,
                                                    weight: "lg",
                                                    fontSize: 6,
                                                    paddingY: 3,
                                                    margin: 0,
                                                }, "Yes, enable"),
                                                new bsts_1.b.button({
                                                    dismiss: "modal",
                                                    flex: "grow-1",
                                                    textDecoration: "none",
                                                    color: "transparent",
                                                    textColor: "primary",
                                                    rounded: 0,
                                                    weight: "lg",
                                                    fontSize: 6,
                                                    paddingY: 3,
                                                    margin: 0,
                                                }, "No thanks"),
                                            ]),
                                        ]));
                                    },
                                },
                            }, "b.modal.container"),
                            new bsts_1.b.button({
                                on: {
                                    click: (_event) => {
                                        bsts_1.b.modal.show(bsts_1.b.modal.create({
                                            customStyle: 2,
                                            title: "Enable this setting?",
                                            elem: new bsts_1.h.p({ marginBottom: 0 }, "You can always change your mind in your account settings."),
                                            btn: ["yesenable", "nothanks"],
                                            btnFn: [(_event) => { }],
                                        }));
                                    },
                                },
                            }, "b.modal.create"),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("What's new"),
                new e.code({
                    previewAttr: { bgColor: "body-tertiary" },
                    showCodepen: false,
                    output: () => {
                        return new bsts_1.b.modal.container({ debug: true, contentAttr: { rounded: 4 } }, [
                            new bsts_1.b.modal.body({ padding: 5 }, [
                                new bsts_1.h.h(2, { fontWeight: "bold", marginBottom: 0 }, "What's new"),
                                new bsts_1.h.ul({ unstyle: true, display: "grid", gap: 4, marginY: 5, small: true }, [
                                    {
                                        icon: "grid-fill",
                                        iconColor: "secondary",
                                        title: "Grid view",
                                        description: "Not into lists? Try the new grid view.",
                                    },
                                    {
                                        icon: "bookmark-star",
                                        iconColor: "warning",
                                        title: "Bookmarks",
                                        description: "Save items you love for easy access later.",
                                    },
                                    {
                                        icon: "film",
                                        iconColor: "primary",
                                        title: "Video embeds",
                                        description: "Share videos wherever you go.",
                                    },
                                ].map((i) => {
                                    return new bsts_1.h.li({ display: "flex", gap: 4 }, [
                                        new bsts_1.b.icon({
                                            id: i.icon,
                                            fontSize: 1,
                                            h: 1,
                                            fontWeight: "bold",
                                            textColor: i.iconColor,
                                        }),
                                        new bsts_1.h.div([new bsts_1.h.h(5, { marginBottom: 0 }, i.title), i.description]),
                                    ]);
                                })),
                                new bsts_1.b.button({ weight: "lg", marginTop: 5, width: 100, dismiss: "modal" }, "Great, thanks!"),
                            ]),
                        ]);
                    },
                }),
                new e.text("Live preview"),
                new e.code({
                    output: () => {
                        return new bsts_1.b.button({
                            on: {
                                click: (_event) => {
                                    bsts_1.b.modal.show(new bsts_1.b.modal.container({ contentAttr: { rounded: 4 } }, [
                                        new bsts_1.b.modal.body({ padding: 5 }, [
                                            new bsts_1.h.h(2, { fontWeight: "bold", marginBottom: 0 }, "What's new"),
                                            new bsts_1.h.ul({
                                                unstyle: true,
                                                display: "grid",
                                                gap: 4,
                                                marginY: 5,
                                                small: true,
                                            }, [
                                                {
                                                    icon: "grid-fill",
                                                    iconColor: "secondary",
                                                    title: "Grid view",
                                                    description: "Not into lists? Try the new grid view.",
                                                },
                                                {
                                                    icon: "bookmark-star",
                                                    iconColor: "warning",
                                                    title: "Bookmarks",
                                                    description: "Save items you love for easy access later.",
                                                },
                                                {
                                                    icon: "film",
                                                    iconColor: "primary",
                                                    title: "Video embeds",
                                                    description: "Share videos wherever you go.",
                                                },
                                            ].map((i) => {
                                                return new bsts_1.h.li({ display: "flex", gap: 4 }, [
                                                    new bsts_1.b.icon({
                                                        id: i.icon,
                                                        fontSize: 1,
                                                        h: 1,
                                                        fontWeight: "bold",
                                                        textColor: i.iconColor,
                                                    }),
                                                    new bsts_1.h.div([
                                                        new bsts_1.h.h(5, { marginBottom: 0 }, i.title),
                                                        i.description,
                                                    ]),
                                                ]);
                                            })),
                                            new bsts_1.b.button({ weight: "lg", marginTop: 5, width: 100, dismiss: "modal" }, "Great, thanks!"),
                                        ]),
                                    ]));
                                },
                            },
                        }, "What's new");
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Sign up form"),
                new e.code({
                    previewAttr: { bgColor: "body-tertiary" },
                    showCodepen: false,
                    output: () => {
                        return new bsts_1.b.modal.container({ debug: true, contentAttr: { rounded: 4, padding: 0 } }, [
                            new bsts_1.b.modal.header({ padding: 5, paddingBottom: 4, borderNone: "bottom", close: true }, new bsts_1.b.modal.title({ fontWeight: "bold", marginBottom: 0, fontSize: 2 }, "Sign up for free")),
                            new bsts_1.b.modal.body({ padding: 5, paddingTop: 0 }, [
                                new bsts_1.h.form({ display: "grid", gap: 3 }, [
                                    bsts_1.b.form.floatinglabel.input({
                                        type: "email",
                                        label: "Email address",
                                        required: true,
                                    }),
                                    bsts_1.b.form.floatinglabel.input({ type: "password", label: "Password", required: true }),
                                    new bsts_1.b.button({ weight: "lg", type: "submit" }, "Sign up"),
                                    new bsts_1.h.small({ textColor: "body-secondary" }, "By clicking Sign up, you agree to the terms of use."),
                                    new bsts_1.h.hr({ marginY: 4 }),
                                    new bsts_1.h.h(2, { fontSize: 5, fontWeight: "bold" }, "Or use a third-party"),
                                    new bsts_1.h.div({ display: "grid", gap: 2 }, [
                                        new bsts_1.b.button({ outline: true, color: "info" }, new bsts_1.b.caption({ icon: "twitter" }, "Sign up with Twitter")),
                                        new bsts_1.b.button({ outline: true, color: "primary" }, new bsts_1.b.caption({ icon: "facebook" }, "Sign up with Facebook")),
                                        new bsts_1.b.button({ outline: true, color: "secondary" }, new bsts_1.b.caption({ icon: "github" }, "Sign up with Github")),
                                    ]),
                                ]),
                            ]),
                        ]);
                    },
                }),
                new e.text("Live preview"),
                new e.code({
                    output: () => {
                        return new bsts_1.b.button({
                            on: {
                                click: (_event) => {
                                    bsts_1.b.modal.show(new bsts_1.b.modal.container({
                                        contentAttr: { rounded: 4, padding: 0 },
                                        on: {
                                            submit: (event) => {
                                                event.preventDefault();
                                                event.stopPropagation();
                                                bsts_1.b.modal.hide(event.target);
                                            },
                                        },
                                    }, [
                                        new bsts_1.b.modal.header({
                                            padding: 5,
                                            paddingBottom: 4,
                                            borderNone: "bottom",
                                            close: true,
                                        }, new bsts_1.b.modal.title({ fontWeight: "bold", marginBottom: 0, fontSize: 2 }, "Sign up for free")),
                                        new bsts_1.b.modal.body({ padding: 5, paddingTop: 0 }, [
                                            new bsts_1.h.form({ display: "grid", gap: 3 }, [
                                                bsts_1.b.form.floatinglabel.input({
                                                    type: "email",
                                                    label: "Email address",
                                                    required: true,
                                                }),
                                                bsts_1.b.form.floatinglabel.input({
                                                    type: "password",
                                                    label: "Password",
                                                    required: true,
                                                }),
                                                new bsts_1.b.button({ weight: "lg", type: "submit" }, "Sign up"),
                                                new bsts_1.h.small({ textColor: "body-secondary" }, "By clicking Sign up, you agree to the terms of use."),
                                                new bsts_1.h.hr({ marginY: 4 }),
                                                new bsts_1.h.h(2, { fontSize: 5, fontWeight: "bold" }, "Or use a third-party"),
                                                new bsts_1.h.div({ display: "grid", gap: 2 }, [
                                                    new bsts_1.b.button({ outline: true, color: "info" }, new bsts_1.b.caption({ icon: "twitter" }, "Sign up with Twitter")),
                                                    new bsts_1.b.button({ outline: true, color: "primary" }, new bsts_1.b.caption({ icon: "facebook" }, "Sign up with Facebook")),
                                                    new bsts_1.b.button({ outline: true, color: "secondary" }, new bsts_1.b.caption({ icon: "github" }, "Sign up with Github")),
                                                ]),
                                            ]),
                                        ]),
                                    ]));
                                },
                            },
                        }, "Sign up");
                    },
                }),
            ]),
        ];
    },
};
