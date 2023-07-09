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
exports.button_group = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
exports.button_group = {
    title: "Button group",
    description: "Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.",
    item: () => {
        return [
            new e.section([
                new e.title("Basic example"),
                new e.text("Wrap a series of buttons with {{b.button}} in {{b.btngroup}}."),
                new e.code({
                    output: () => {
                        return new bsts_1.b.btngroup({ label: "Basic example", role: "group" }, [
                            new bsts_1.b.button("Left"),
                            new bsts_1.b.button("Middle"),
                            new bsts_1.b.button("Right"),
                        ]);
                    },
                }),
                new e.alert({ color: "warning", callout: true }, [
                    new bsts_1.h.h(5, "Ensure correct {{role}} and provide a label"),
                    new bsts_1.h.p("In order for assistive technologies (such as screen readers) to convey that a series of buttons is grouped, an appropriate {{role}} attribute needs to be provided. For button groups, this would be {{role:'group'}}, while toolbars should have a {{role:'toolbar'}}."),
                    new bsts_1.h.p("In addition, groups and toolbars should be given an explicit label, as most assistive technologies will otherwise not announce them, despite the presence of the correct role attribute. In the examples provided here, Bootstrap use {{label}}, but alternatives such as {{labelledby}} can also be used."),
                ]),
                new e.text("These classes can also be added to groups of links, as an alternative to the {{nav:docs/components/nav::.nav navigation components}}."),
                new e.code({
                    output: () => {
                        return new bsts_1.b.btngroup([
                            new bsts_1.b.button({ href: "#", active: true }, "Left"),
                            new bsts_1.b.button({ href: "#" }, "Middle"),
                            new bsts_1.b.button({ href: "#" }, "Right"),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Mixed styles"),
                new e.code({
                    output: () => {
                        return new bsts_1.b.btngroup({ label: "Basic mixed styles example", role: "group" }, [
                            new bsts_1.b.button({ color: "danger" }, "Left"),
                            new bsts_1.b.button({ color: "warning" }, "Middle"),
                            new bsts_1.b.button({ color: "success" }, "Right"),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Outlined styles"),
                new e.code({
                    output: () => {
                        return new bsts_1.b.btngroup({ label: "Basic outlined example", role: "group" }, [
                            new bsts_1.b.button({ outline: true }, "Left"),
                            new bsts_1.b.button({ outline: true }, "Middle"),
                            new bsts_1.b.button({ outline: true }, "Right"),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Checkbox and radio button groups"),
                new e.text("Combine button-like checkbox and radio {{nav:docs/forms/check_radio::toggle buttons}} into a seamless looking button group."),
                new e.code({
                    output: () => {
                        return new bsts_1.b.btngroup({ label: "Basic checkbox toggle button group", role: "group" }, [
                            new bsts_1.b.input({ type: "checkbox", toggle: true, id: "btncheck1" }),
                            new bsts_1.b.label({ for: "btncheck1", color: "primary", outline: true }, "Checkbox 1"),
                            new bsts_1.b.input({ type: "checkbox", toggle: true, id: "btncheck2" }),
                            new bsts_1.b.label({ for: "btncheck2", color: "primary", outline: true }, "Checkbox 2"),
                            new bsts_1.b.input({ type: "checkbox", toggle: true, id: "btncheck3" }),
                            new bsts_1.b.label({ for: "btncheck3", color: "primary", outline: true }, "Checkbox 3"),
                        ]);
                    },
                }),
                new e.code({
                    output: () => {
                        return new bsts_1.b.btngroup({ label: "Basic checkbox toggle button group", role: "group" }, [
                            new bsts_1.b.input({
                                type: "radio",
                                toggle: true,
                                id: "btnradio1",
                                name: "btnradio",
                                checked: true,
                            }),
                            new bsts_1.b.label({ for: "btnradio1", color: "primary", outline: true }, "Radio 1"),
                            new bsts_1.b.input({ type: "radio", toggle: true, id: "btnradio2", name: "btnradio" }),
                            new bsts_1.b.label({ for: "btnradio2", color: "primary", outline: true }, "Radio 2"),
                            new bsts_1.b.input({ type: "radio", toggle: true, id: "btnradio3", name: "btnradio" }),
                            new bsts_1.b.label({ for: "btnradio3", color: "primary", outline: true }, "Radio 3"),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Button toolbar"),
                new e.text("Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to space out groups, buttons, and more."),
                new e.code({
                    output: () => {
                        return new bsts_1.b.btngroup({ label: "Toolbar with button groups", role: "toolbar" }, [
                            new bsts_1.b.btngroup({ label: "First group", marginEnd: 2 }, ["1", "2", "3", "4"].map((i) => new bsts_1.b.button(i))),
                            new bsts_1.b.btngroup({ label: "Second group", marginEnd: 2 }, ["5", "6", "7"].map((i) => new bsts_1.b.button({ color: "secondary" }, i))),
                            new bsts_1.b.btngroup({ label: "Third group" }, ["8"].map((i) => new bsts_1.b.button({ color: "info" }, i))),
                        ]);
                    },
                }),
                new e.text("Feel free to mix input groups with button groups in your toolbars. Similar to the example above, you’ll likely need some utilities though to space things properly."),
                new e.code({
                    output: () => {
                        return [
                            new bsts_1.b.btngroup({ label: "Toolbar with button groups", role: "toolbar", marginBottom: 3 }, [
                                new bsts_1.b.btngroup({ label: "First group", marginEnd: 2 }, ["1", "2", "3", "4"].map((i) => new bsts_1.b.button({ color: "secondary", outline: true }, i))),
                                new bsts_1.b.inputgroup.container([
                                    new bsts_1.b.inputgroup.text({ id: "btnGroupAddon" }, "@"),
                                    new bsts_1.b.input({
                                        type: "text",
                                        placeholder: "Input group example",
                                        label: "Input group example",
                                        describedby: "btnGroupAddon",
                                    }),
                                ]),
                            ]),
                            new bsts_1.b.btngroup({ label: "Toolbar with button groups", role: "toolbar", justifyContent: "between" }, [
                                new bsts_1.b.btngroup({ label: "First group", marginEnd: 2 }, ["1", "2", "3", "4"].map((i) => new bsts_1.b.button({ color: "secondary", outline: true }, i))),
                                new bsts_1.b.inputgroup.container([
                                    new bsts_1.b.inputgroup.text({ id: "btnGroupAddon2" }, "@"),
                                    new bsts_1.b.input({
                                        type: "text",
                                        placeholder: "Input group example",
                                        label: "Input group example",
                                        describedby: "btnGroupAddon2",
                                    }),
                                ]),
                            ]),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Sizing"),
                new e.text("Instead of applying button sizing classes to every button in a group, just add {{weight:<weight>}} to each {{b.btngroup}}, including each one when nesting multiple groups."),
                new e.code({
                    outputAttr: {
                        display: "flex",
                        flex: "wrap",
                        alignItem: "center",
                        gap: 3,
                    },
                    output: () => {
                        return [
                            new bsts_1.b.btngroup({ label: "Large button group", weight: "lg", display: "block" }, ["Left", "Middle", "Right"].map((i) => new bsts_1.b.button({ color: "primary", outline: true }, i))),
                            new bsts_1.b.btngroup({ label: "Default button group", display: "block" }, ["Left", "Middle", "Right"].map((i) => new bsts_1.b.button({ color: "primary", outline: true }, i))),
                            new bsts_1.b.btngroup({ label: "Small button group", weight: "sm", display: "block" }, ["Left", "Middle", "Right"].map((i) => new bsts_1.b.button({ color: "primary", outline: true }, i))),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Nesting"),
                new e.text("Place a {{b.btngroup}} within another {{b.btngroup}} when you want dropdown menus mixed with a series of buttons."),
                new e.code({
                    output: () => {
                        return new bsts_1.b.btngroup({ label: "Button group with nested dropdown" }, [
                            new bsts_1.b.button("1"),
                            new bsts_1.b.button("2"),
                            new bsts_1.b.btngroup([
                                new bsts_1.b.dropdown.button({}, "Dropdown"),
                                new bsts_1.b.dropdown.menu([
                                    new bsts_1.b.dropdown.item({ href: "#" }, "Dropdown link 1"),
                                    new bsts_1.b.dropdown.item({ href: "#" }, "Dropdown link 2"),
                                ]),
                            ]),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Vertical variation"),
                new e.text("Make a set of buttons appear vertically stacked rather than horizontally. {{b::Split button dropdowns are not supported here.}}"),
                new e.code({
                    output: () => {
                        return new bsts_1.b.btngroup({ label: "Vertical button group", vertical: true }, [1, 2, 3, 4, 5, 6].map(() => new bsts_1.b.button({ color: "primary" }, "Button")));
                    },
                }),
                new e.code({
                    output: () => {
                        return new bsts_1.b.btngroup({ label: "Vertical button group", vertical: true }, [
                            new bsts_1.b.button("Button"),
                            new bsts_1.b.button("Button"),
                            new bsts_1.b.btngroup([
                                new bsts_1.b.dropdown.button({}, "Dropdown"),
                                new bsts_1.b.dropdown.menu([
                                    new bsts_1.b.dropdown.item({ href: "#" }, "Dropdown link 1"),
                                    new bsts_1.b.dropdown.item({ href: "#" }, "Dropdown link 2"),
                                ]),
                            ]),
                            new bsts_1.b.button("Button"),
                            new bsts_1.b.button("Button"),
                            new bsts_1.b.btngroup([
                                new bsts_1.b.dropdown.button({}, "Dropdown"),
                                new bsts_1.b.dropdown.menu([
                                    new bsts_1.b.dropdown.item({ href: "#" }, "Dropdown link 1"),
                                    new bsts_1.b.dropdown.item({ href: "#" }, "Dropdown link 2"),
                                ]),
                            ]),
                            new bsts_1.b.btngroup([
                                new bsts_1.b.dropdown.button({}, "Dropdown"),
                                new bsts_1.b.dropdown.menu([
                                    new bsts_1.b.dropdown.item({ href: "#" }, "Dropdown link 1"),
                                    new bsts_1.b.dropdown.item({ href: "#" }, "Dropdown link 2"),
                                ]),
                            ]),
                            new bsts_1.b.btngroup([
                                new bsts_1.b.dropdown.button({}, "Dropdown"),
                                new bsts_1.b.dropdown.menu([
                                    new bsts_1.b.dropdown.item({ href: "#" }, "Dropdown link 1"),
                                    new bsts_1.b.dropdown.item({ href: "#" }, "Dropdown link 2"),
                                ]),
                            ]),
                        ]);
                    },
                }),
                new e.code({
                    output: () => {
                        return new bsts_1.b.btngroup({ label: "Vertical radio toggle button group", vertical: true }, [
                            new bsts_1.b.input({
                                type: "radio",
                                toggle: true,
                                id: "vbtnradio1",
                                name: "vbtnradio",
                                checked: true,
                            }),
                            new bsts_1.b.label({ for: "vbtnradio1", color: "danger", outline: true }, "Radio 1"),
                            new bsts_1.b.input({ type: "radio", toggle: true, id: "vbtnradio2", name: "vbtnradio" }),
                            new bsts_1.b.label({ for: "vbtnradio2", color: "danger", outline: true }, "Radio 2"),
                            new bsts_1.b.input({ type: "radio", toggle: true, id: "vbtnradio3", name: "vbtnradio" }),
                            new bsts_1.b.label({ for: "vbtnradio3", color: "danger", outline: true }, "Radio 3"),
                        ]);
                    },
                }),
            ]),
        ];
    },
};
