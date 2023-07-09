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
exports.list_groups = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
const ex = {
    c1: (arg) => {
        return new bsts_1.b.list.itemLink({ action: true, display: "flex", gap: 3, paddingY: 3, href: arg.href }, [
            new bsts_1.h.img({
                rounded: "circle",
                flex: "shrink-0",
                src: arg.img,
                attrWidth: 32,
                attrHeight: 32,
            }),
            new bsts_1.h.div({ display: "flex", gap: 2, width: 100, justifyContent: "between" }, [
                new bsts_1.h.div([
                    new bsts_1.h.h(6, { marginBottom: 0 }, arg.title),
                    new bsts_1.h.p({ marginBottom: 0, opacity: 75 }, arg.details),
                ]),
                new bsts_1.h.small({ opacity: 50, textWrap: false }, arg.date),
            ]),
        ]);
    },
    c2: (arg) => {
        return new bsts_1.b.list.itemLabel({
            display: "flex",
            gap: 2,
        }, [
            new bsts_1.b.input({
                flex: "shrink-0",
                type: arg.type,
                checked: arg.checked,
                name: arg.name,
            }),
            new bsts_1.h.span([
                arg.label,
                new bsts_1.h.small({ display: "block", textColor: "body-secondary" }, arg.description),
            ]),
        ]);
    },
    c3: (arg) => {
        return new bsts_1.b.list.itemLabel({
            display: "flex",
            gap: 3,
            bgColor: arg.isadd ? "body-tertiary" : undefined,
        }, [
            new bsts_1.b.input({
                flex: "shrink-0",
                type: "checkbox",
                checked: arg.checked,
                disabled: arg.isadd ? true : undefined,
                pointerEvent: arg.isadd ? "none" : undefined,
                style: {
                    fontSize: "1.375em",
                    filter: arg.isadd ? "none" : undefined,
                    opacity: arg.isadd ? "0.5" : undefined,
                },
            }),
            new bsts_1.h.span({ paddingTop: 1, class: "form-cheked-content" }, [
                new bsts_1.h.b(arg.label),
                new bsts_1.h.small({ display: "block", textColor: "body-secondary" }, new bsts_1.b.caption({ icon: arg.icon }, arg.description)),
            ]),
        ]);
    },
    c4: (arg) => {
        const id = bsts_1.core.UUID();
        return [
            new bsts_1.b.input({
                id: id,
                class: "list-group-item",
                type: arg.type,
                checked: arg.checked,
                name: arg.name,
                disabled: arg.disabled,
                pointerEvent: "none",
            }),
            new bsts_1.b.list.itemLabel({
                for: id,
                rounded: 3,
                paddingY: 3,
            }, [arg.label, new bsts_1.h.span({ display: "block", small: true, opacity: 50 }, arg.description)]),
        ];
    },
    c5: (arg) => {
        const id = bsts_1.core.UUID();
        return new bsts_1.b.list.itemDiv({ display: "grid", gap: 2, border: false }, new bsts_1.h.div({ position: "relative" }, [
            new bsts_1.b.input({
                id: id,
                type: arg.type,
                checked: arg.checked,
                name: arg.name,
                disabled: arg.disabled,
                position: "absolute",
                zIndex: 2,
                top: 50,
                end: 0,
                marginEnd: 3,
                fontSize: 5,
            }),
            new bsts_1.b.list.itemLabel({
                for: id,
                rounded: 3,
                paddingY: 3,
                paddingEnd: 5,
            }, [
                new bsts_1.h.b({ fontWeight: "semibold" }, arg.label),
                new bsts_1.h.span({ display: "block", small: true, opacity: 75 }, arg.description),
            ]),
        ]));
    },
};
exports.list_groups = {
    title: "List groups",
    description: "Extend list groups with utilities and custom styles for any content.",
    item: () => {
        return [
            new e.section([
                new e.title("List with icon"),
                new e.code({
                    extention: [{ name: "COMPONENT", rename: "ex.c1", output: ex.c1 }],
                    output: () => {
                        return new bsts_1.b.list.containerDiv({ style: { maxWidth: "460px" } }, [
                            ex.c1({
                                href: "#",
                                img: "https://picsum.photos/seed/bsts_0/32/32.webp",
                                title: "List group item heading",
                                details: "Some placeholder content in a paragraph.",
                                date: "now",
                            }),
                            ex.c1({
                                href: "#",
                                img: "https://picsum.photos/seed/bsts_1/32/32.webp",
                                title: "Another title here",
                                details: "Some placeholder content in a paragraph that gose a little longer so it wraps to a new line.",
                                date: "3d",
                            }),
                            ex.c1({
                                href: "#",
                                img: "https://picsum.photos/seed/bsts_2/32/32.webp",
                                title: "Third heading",
                                details: "Some placeholder content in a paragraph.",
                                date: "1w",
                            }),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Checkbox and radio"),
                new e.code({
                    outputAttr: { display: "flex", flex: "wrap", gap: 3 },
                    extention: [{ name: "COMPONENT", rename: "ex.c2", output: ex.c2 }],
                    output: () => {
                        return [
                            new bsts_1.b.list.containerDiv({ style: { maxWidth: "460px" } }, [
                                ex.c2({
                                    checked: true,
                                    type: "checkbox",
                                    label: "First checkbox",
                                    description: "With support text underneath to add more detail",
                                }),
                                ex.c2({
                                    type: "checkbox",
                                    label: "Second checkbox",
                                    description: "Some other text goes here",
                                }),
                                ex.c2({
                                    type: "checkbox",
                                    label: "Third checkbox",
                                    description: "And we end with another snippet of text",
                                }),
                            ]),
                            new bsts_1.b.list.container({ style: { maxWidth: "460px" } }, [
                                ex.c2({
                                    name: "group1",
                                    checked: true,
                                    type: "radio",
                                    label: "First radio",
                                    description: "With support text underneath to add more detail",
                                }),
                                ex.c2({
                                    name: "group1",
                                    type: "radio",
                                    label: "Second radio",
                                    description: "Some other text goes here",
                                }),
                                ex.c2({
                                    name: "group1",
                                    type: "radio",
                                    label: "Third radio",
                                    description: "And we end with another snippet of text",
                                }),
                            ]),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Todo list"),
                new e.code({
                    outputAttr: { class: "todo-list" },
                    extention: [{ name: "COMPONENT", rename: "ex.c3", output: ex.c3 }],
                    output: () => {
                        return [
                            new bsts_1.b.list.containerDiv({ style: { maxWidth: "460px" } }, [
                                ex.c3({
                                    checked: true,
                                    icon: "calendar-event",
                                    label: "Finish sales report",
                                    description: "1:00-2:00pm",
                                }),
                                ex.c3({
                                    checked: false,
                                    icon: "calendar-event",
                                    label: "Weekly All Hands",
                                    description: "2:00-2:30pm",
                                }),
                                ex.c3({
                                    checked: false,
                                    icon: "alarm",
                                    label: "Out of office",
                                    description: "Tomorrow",
                                }),
                                ex.c3({
                                    isadd: true,
                                    icon: "list-check",
                                    label: "Add new task",
                                    description: "Choose list...",
                                }),
                            ]),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Checkable list"),
                new e.code({
                    outputAttr: { class: "list-group-item-check", display: "flex", flex: "wrap", gap: 3 },
                    extention: [{ name: "COMPONENT", rename: "ex.c4", output: ex.c4 }],
                    output: () => {
                        return new bsts_1.b.list.containerDiv({ display: "grid", gap: 2, border: false }, [
                            ...ex.c4({
                                checked: true,
                                type: "checkbox",
                                label: "First checkbox",
                                description: "With support text underneath to add more detail",
                            }),
                            ...ex.c4({
                                type: "checkbox",
                                label: "Second checkbox",
                                description: "Some other text goes here",
                            }),
                            ...ex.c4({
                                type: "checkbox",
                                label: "Third checkbox",
                                description: "And we end with another snippet of text",
                            }),
                            ...ex.c4({
                                type: "checkbox",
                                disabled: true,
                                label: "Fourth disabled checkbox",
                                description: "This option is disabled",
                            }),
                        ]);
                    },
                }),
                new e.text("Radio"),
                new e.code({
                    outputAttr: { class: "list-group-item-check", display: "flex", flex: "wrap", gap: 3 },
                    extention: [{ name: "COMPONENT", rename: "ex.c4", output: ex.c4 }],
                    output: () => {
                        return new bsts_1.b.list.containerDiv({ display: "grid", gap: 2, border: false }, [
                            ...ex.c4({
                                checked: true,
                                type: "radio",
                                name: "group2",
                                label: "First radio",
                                description: "With support text underneath to add more detail",
                            }),
                            ...ex.c4({
                                type: "radio",
                                name: "group2",
                                label: "Second radio",
                                description: "Some other text goes here",
                            }),
                            ...ex.c4({
                                type: "radio",
                                name: "group2",
                                label: "Third radio",
                                description: "And we end with another snippet of text",
                            }),
                            ...ex.c4({
                                type: "radio",
                                disabled: true,
                                name: "group2",
                                label: "Fourth disabled radio",
                                description: "This option is disabled",
                            }),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Checkable list 2"),
                new e.code({
                    outputAttr: { class: "list-group-item-check-2", display: "flex", flex: "wrap", gap: 3 },
                    extention: [{ name: "COMPONENT", rename: "ex.c5", output: ex.c5 }],
                    output: () => {
                        return new bsts_1.b.list.containerDiv({ display: "grid", gap: 2, border: false }, [
                            ex.c5({
                                checked: true,
                                type: "checkbox",
                                label: "First checkbox",
                                description: "With support text underneath to add more detail",
                            }),
                            ex.c5({
                                type: "checkbox",
                                label: "Second checkbox",
                                description: "Some other text goes here",
                            }),
                            ex.c5({
                                type: "checkbox",
                                label: "Third checkbox",
                                description: "And we end with another snippet of text",
                            }),
                            ex.c5({
                                type: "checkbox",
                                disabled: true,
                                label: "Fourth disabled checkbox",
                                description: "This option is disabled",
                            }),
                        ]);
                    },
                }),
                new e.text("Radio"),
                new e.code({
                    outputAttr: { class: "list-group-item-check-2", display: "flex", flex: "wrap", gap: 3 },
                    extention: [{ name: "COMPONENT", rename: "ex.c5", output: ex.c5 }],
                    output: () => {
                        return new bsts_1.b.list.containerDiv({ display: "grid", gap: 2, border: false }, [
                            ex.c5({
                                checked: true,
                                type: "radio",
                                name: "group3",
                                label: "First radio",
                                description: "With support text underneath to add more detail",
                            }),
                            ex.c5({
                                type: "radio",
                                name: "group3",
                                label: "Second radio",
                                description: "Some other text goes here",
                            }),
                            ex.c5({
                                type: "radio",
                                name: "group3",
                                label: "Third radio",
                                description: "And we end with another snippet of text",
                            }),
                            ex.c5({
                                type: "radio",
                                disabled: true,
                                name: "group3",
                                label: "Fourth disabled radio",
                                description: "This option is disabled",
                            }),
                        ]);
                    },
                }),
            ]),
        ];
    },
};
