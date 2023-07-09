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
exports.heroes = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
const ex = {
    c1: (arg) => {
        return new bsts_1.h.div({ paddingX: 4, paddingY: 5, marginY: 5, textAlign: "center" }, [
            new bsts_1.h.h(1, new bsts_1.b.icon({ id: arg.icon, fontSize: 1, fontDisplay: 1 })),
            new bsts_1.h.h(1, { fontDisplay: 5, fontWeight: "bold", textColor: "body-emphasis" }, arg.title),
            new bsts_1.h.div({ col: "lg-6", marginX: "auto" }, [
                new bsts_1.h.p({ lead: true, marginBottom: 4 }, arg.description),
                new bsts_1.h.div({ display: ["grid", "sm-flex"], gap: 2, justifyContent: "sm-center" }, arg.elem ? arg.elem : ""),
            ]),
        ]);
    },
    c2: (arg) => {
        return new bsts_1.h.div({
            paddingX: 4,
            paddingTop: 5,
            marginY: 5,
            textAlign: "center",
            border: "bottom",
        }, [
            new bsts_1.h.h(1, { fontDisplay: 4, fontWeight: "bold", textColor: "body-emphasis" }, arg.title),
            new bsts_1.h.div({ col: "lg-6", marginX: "auto" }, [
                new bsts_1.h.p({ lead: true, marginBottom: 4 }, arg.description),
                new bsts_1.h.div({
                    display: ["grid", "sm-flex"],
                    gap: 2,
                    justifyContent: "sm-center",
                    marginBottom: 5,
                }, arg.elem ? arg.elem : ""),
            ]),
            new bsts_1.h.div({ overflow: "hidden", style: { maxHeight: "30vh" } }, new bsts_1.h.div({ container: true, paddingX: 5 }, new bsts_1.b.img({
                src: arg.img,
                fluid: true,
                border: true,
                rounded: 3,
                shadow: "lg",
                marginBottom: 4,
                alt: "Example image",
                attrWidth: 700,
                attrHeight: 500,
            }))),
        ]);
    },
    c3: (arg) => {
        return new bsts_1.h.div({
            col: "xxl-8",
            container: true,
            paddingX: 4,
            paddingY: 5,
        }, new bsts_1.h.div({ row: true, flex: "lg-row-reverse", alignItem: "center", gutter: 5, paddingY: 5 }, [
            new bsts_1.h.div({ col: [10, "sm-8", "lg-6"] }, new bsts_1.b.img({
                src: arg.img,
                fluid: true,
                marginX: "lg-auto",
                display: "block",
                alt: "Example image",
                attrWidth: 700,
                attrHeight: 500,
                rounded: 3,
                shadow: true,
            })),
            new bsts_1.h.div({ col: "lg-6" }, [
                new bsts_1.h.h(1, {
                    fontDisplay: 5,
                    fontWeight: "bold",
                    textColor: "body-emphasis",
                    lineHeight: 1,
                    marginBottom: 3,
                }, arg.title),
                new bsts_1.h.p({ lead: true }, arg.description),
                new bsts_1.h.div({
                    display: ["grid", "md-flex"],
                    gap: 2,
                    justifyContent: "md-start",
                }, arg.elem ? arg.elem : ""),
            ]),
        ]));
    },
    c4: (arg) => {
        return new bsts_1.h.div({
            col: ["xl-10", "xxl-8"],
            container: true,
            paddingX: 4,
            paddingY: 5,
        }, new bsts_1.h.div({ row: true, alignItem: "center", gutter: 5, paddingY: 5 }, [
            new bsts_1.h.div({ col: "lg-7", textAlign: ["center", "lg-start"] }, [
                new bsts_1.h.h(1, {
                    fontDisplay: 4,
                    fontWeight: "bold",
                    textColor: "body-emphasis",
                    lineHeight: 1,
                    marginBottom: 3,
                }, arg.title),
                new bsts_1.h.p({ col: "lg-10", fontSize: 4 }, arg.description),
            ]),
            new bsts_1.h.div({
                col: ["md-10", "lg-5"],
                marginX: "auto",
            }, new bsts_1.h.form({
                padding: [4, "md-5"],
                border: true,
                rounded: 3,
                bgColor: "body-tertiary",
                gap: 3,
                display: "grid",
                on: { submit: arg.onsignup },
            }, [
                bsts_1.b.form.floatinglabel.input({
                    type: "email",
                    label: "Email address",
                    name: "email",
                    required: true,
                }),
                bsts_1.b.form.floatinglabel.input({
                    type: "password",
                    label: "Password",
                    name: "password",
                    required: true,
                }),
                bsts_1.b.form.check({ type: "checkbox", label: "Remember me", name: "remember" }),
                new bsts_1.b.button({ color: "primary", weight: "lg", width: 100, type: "submit" }, "Sign up"),
                new bsts_1.h.hr(),
                new bsts_1.h.small({ textColor: "body-secondary" }, "By clicking Sign up, you agree to the terms of use."),
            ])),
        ]));
    },
    c5: (arg) => {
        return new bsts_1.h.div({
            container: true,
            marginY: 5,
        }, new bsts_1.h.div({
            row: true,
            padding: 4,
            paddingBottom: 0,
            paddingEnd: "lg-0",
            paddingTop: "lg-5",
            alignItem: "center",
            rounded: 3,
            border: true,
            shadow: "lg",
        }, [
            new bsts_1.h.div({ col: "lg-7", padding: [3, "lg-5"], paddingTop: "lg-3" }, [
                new bsts_1.h.h(1, {
                    fontDisplay: 4,
                    fontWeight: "bold",
                    textColor: "body-emphasis",
                    lineHeight: 1,
                }, arg.title),
                new bsts_1.h.p({ lead: true }, arg.description),
                new bsts_1.h.div({
                    display: ["grid", "md-flex"],
                    gap: 2,
                    justifyContent: "md-start",
                    marginBottom: [4, "lg-3"],
                }, arg.elem ? arg.elem : ""),
            ]),
            new bsts_1.h.div({ col: "lg-4", offset: "lg-1", padding: 0, overflow: "hidden", shadow: "lg" }, new bsts_1.b.img({
                src: arg.img,
                alt: "Example image",
                attrWidth: 720,
            })),
        ]));
    },
    c6: (arg) => {
        return new bsts_1.h.div({
            paddingX: 4,
            paddingY: 5,
            textAlign: "center",
            bgColor: "dark",
            textColor: "light",
        }, [
            new bsts_1.h.h(1, { fontDisplay: 5, fontWeight: "bold" }, arg.title),
            new bsts_1.h.div({ col: "lg-6", marginX: "auto" }, [
                new bsts_1.h.p({ lead: true, marginBottom: 4, textColor: "secondary" }, arg.description),
                new bsts_1.h.div({ display: ["grid", "sm-flex"], gap: 2, justifyContent: "sm-center" }, arg.elem ? arg.elem : ""),
            ]),
        ]);
    },
};
exports.heroes = {
    title: "Heroes",
    description: "Set the stage on your homepage with heroes that feature clear calls to action.",
    item: () => {
        return [
            new e.section([
                new e.title("Centered hero"),
                new e.code({
                    showViewport: true,
                    previewAttr: { padding: 0 },
                    extention: [{ name: "COMPONENT", rename: "ex.c1", output: ex.c1 }],
                    output: () => {
                        return ex.c1({
                            icon: "hexagon-fill",
                            title: "Centered hero",
                            description: "Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.",
                            elem: [
                                new bsts_1.b.button({ weight: "lg", color: "primary" }, "Primary button"),
                                new bsts_1.b.button({ weight: "lg", color: "secondary", outline: true }, "Secondary"),
                            ],
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Centered screenshot"),
                new e.code({
                    showViewport: true,
                    previewAttr: { padding: 0, overflow: "hidden" },
                    extention: [{ name: "COMPONENT", rename: "ex.c2", output: ex.c2 }],
                    output: () => {
                        return ex.c2({
                            title: "Centered screenshot",
                            description: "Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.",
                            elem: [
                                new bsts_1.b.button({ weight: "lg", color: "primary" }, "Primary button"),
                                new bsts_1.b.button({ weight: "lg", color: "secondary", outline: true }, "Secondary"),
                            ],
                            img: "https://picsum.photos/seed/bsts_0/622/393.webp",
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Responsive left-aligned hero with image"),
                new e.code({
                    showViewport: true,
                    previewAttr: { padding: 0 },
                    extention: [{ name: "COMPONENT", rename: "ex.c3", output: ex.c3 }],
                    output: () => {
                        return ex.c3({
                            title: "Responsive left-aligned hero with image",
                            description: "Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.",
                            elem: [
                                new bsts_1.b.button({ weight: "lg", color: "primary" }, "Primary"),
                                new bsts_1.b.button({ weight: "lg", color: "secondary", outline: true }, "Default"),
                            ],
                            img: "https://picsum.photos/seed/bsts_0/432/308.webp",
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Vertically centered hero sign-up form"),
                new e.code({
                    showViewport: true,
                    showConsole: true,
                    previewAttr: { padding: 0 },
                    extention: [{ name: "COMPONENT", rename: "ex.c4", output: ex.c4 }],
                    output: () => {
                        return ex.c4({
                            title: "Vertically centered hero sign-up form",
                            description: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
                            onsignup: (event) => {
                                //do signup
                                event.preventDefault();
                                const form = event.target;
                                const email = form.querySelector("input[name='email']");
                                const password = form.querySelector("input[name='password']");
                                const remember = form.querySelector("input[name='remember']");
                                e.console(form, "signup", {
                                    email: email.value,
                                    password: password.value,
                                    remember: remember.checked,
                                }, "info");
                            },
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Border hero with cropped image and shadows"),
                new e.code({
                    showViewport: true,
                    extention: [{ name: "COMPONENT", rename: "ex.c5", output: ex.c5 }],
                    output: () => {
                        return ex.c5({
                            img: "https://picsum.photos/seed/bsts_0/432/308.webp",
                            title: "Border hero with cropped image and shadows",
                            description: "Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.",
                            elem: [
                                new bsts_1.b.button({ weight: "lg", color: "primary" }, "Primary"),
                                new bsts_1.b.button({ weight: "lg", color: "secondary", outline: true }, "Default"),
                            ],
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Dark color hero"),
                new e.code({
                    showViewport: true,
                    previewAttr: { padding: 0, bgColor: "dark", overflow: "hidden" },
                    extention: [{ name: "COMPONENT", rename: "ex.c6", output: ex.c6 }],
                    output: () => {
                        return ex.c6({
                            title: "Dark color hero",
                            description: "Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.",
                            elem: [
                                new bsts_1.b.button({ weight: "lg", color: "info", outline: true }, "Custom button"),
                                new bsts_1.b.button({ weight: "lg", color: "secondary", outline: true }, "Secondary"),
                            ],
                        });
                    },
                }),
            ]),
        ];
    },
};
