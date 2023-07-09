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
exports.input_group = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
exports.input_group = {
    title: "Input group",
    description: "Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.",
    item: () => {
        return [
            new e.section([
                new e.title("Basic example"),
                new e.text("Place one add-on or button on either side of an input. You may also place one on both sides of an input. Remember to place {{<label>}}s outside the input group."),
                new e.code({
                    output: () => {
                        return [
                            bsts_1.b.form.input({
                                container: { marginBottom: 3 },
                                type: "text",
                                placeholder: "Username",
                                before: "@",
                            }),
                            bsts_1.b.form.input({
                                container: { marginBottom: 3 },
                                type: "text",
                                placeholder: "Recipient's username",
                                after: "@example.com",
                            }),
                            bsts_1.b.form.input({
                                container: { marginBottom: 3 },
                                label: "Your vanity URL",
                                type: "text",
                                before: "https://example.com/users/",
                                description: "Example help text goes outside the input group.",
                            }),
                            bsts_1.b.form.input({
                                container: { marginBottom: 3 },
                                type: "text",
                                before: "$",
                                after: ".00",
                            }),
                            bsts_1.b.form.input({
                                container: { marginBottom: 3 },
                                type: "text",
                                placeholder: "Username",
                                after: ["@", new bsts_1.b.input({ type: "text", placeholder: "Server" })],
                            }),
                            bsts_1.b.form.textarea({
                                before: "With textarea",
                            }),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Wrapping"),
                new e.text("Input groups wrap by default via {{flex-wrap: wrap}} in order to accommodate custom form field validation within an input group. You may disable this with {{.flex-nowrap}}."),
                new e.code({
                    output: () => {
                        return bsts_1.b.form.input({
                            type: "text",
                            placeholder: "Username",
                            before: "@",
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Sizing"),
                new e.text("Add the relative form sizing classes to the {{.input-group}} itself and contents within will automatically resize—no need for repeating the form control size classes on each element."),
                new e.text("{{b::Sizing on the individual input group elements isn’t supported.}}"),
                new e.code({
                    output: () => {
                        return [
                            bsts_1.b.form.input({
                                container: { marginBottom: 3 },
                                type: "text",
                                before: "Small",
                                weight: "sm",
                            }),
                            bsts_1.b.form.input({
                                container: { marginBottom: 3 },
                                type: "text",
                                before: "Default",
                            }),
                            bsts_1.b.form.input({
                                type: "text",
                                before: "Large",
                                weight: "lg",
                            }),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Checkboxes and radios"),
                new e.text("Place any checkbox or radio option within an input group’s addon instead of text. Bootstrap recommend adding {{.mt-0}} to the {{.form-check-input}} when there’s no visible text next to the input."),
                new e.code({
                    output: () => {
                        return [
                            bsts_1.b.form.input({
                                container: { marginBottom: 3 },
                                type: "text",
                                aria: { label: "Text input with checkbox" },
                                before: "[checkbox]",
                            }),
                            bsts_1.b.form.input({
                                container: { marginBottom: 3 },
                                type: "text",
                                aria: { label: "Text input with radio" },
                                before: "[radio]",
                            }),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Multiple inputs"),
                new e.text("While multiple {{<input>}}s are supported visually, validation styles are only available for input groups with a single {{<input>}}."),
                new e.code({
                    output: () => {
                        return [
                            bsts_1.b.form.input({
                                type: "text",
                                aria: { label: "First name" },
                                before: "First and last name",
                                after: new bsts_1.b.input({ type: "text", aria: { label: "Last name" } }),
                            }),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Multiple addons"),
                new e.text("Multiple add-ons are supported and can be mixed with checkbox and radio input versions."),
                new e.code({
                    output: () => {
                        return [
                            bsts_1.b.form.input({
                                container: { marginBottom: 3 },
                                type: "text",
                                aria: { label: "Dollar amount (with dot and two decimal places)" },
                                before: ["$", "0.00"],
                            }),
                            bsts_1.b.form.input({
                                type: "text",
                                aria: { label: "Dollar amount (with dot and two decimal places)" },
                                after: ["$", "0.00"],
                            }),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Button addons"),
                new e.code({
                    output: () => {
                        return [
                            bsts_1.b.form.input({
                                container: { marginBottom: 3 },
                                type: "text",
                                aria: { label: "Example text with button addon" },
                                before: new bsts_1.b.button({ color: "secondary", outline: true }, "Button"),
                            }),
                            bsts_1.b.form.input({
                                container: { marginBottom: 3 },
                                type: "text",
                                placeholder: "Recipient's username",
                                aria: { label: "Example text with button addon" },
                                after: new bsts_1.b.button({ color: "secondary", outline: true }, "Button"),
                            }),
                            bsts_1.b.form.input({
                                container: { marginBottom: 3 },
                                type: "text",
                                aria: { label: "Example text with button addons" },
                                before: [
                                    new bsts_1.b.button({ color: "secondary", outline: true }, "Button"),
                                    new bsts_1.b.button({ color: "secondary", outline: true }, "Button"),
                                ],
                            }),
                            bsts_1.b.form.input({
                                type: "text",
                                placeholder: "Recipient's username",
                                aria: { label: "Example text with button addons" },
                                after: [
                                    new bsts_1.b.button({ color: "secondary", outline: true }, "Button"),
                                    new bsts_1.b.button({ color: "secondary", outline: true }, "Button"),
                                ],
                            }),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Buttons with dropdowns"),
                new e.code({
                    output: () => {
                        const dropdownItem = [
                            new bsts_1.b.dropdown.item({ href: "#" }, "Action"),
                            new bsts_1.b.dropdown.item({ href: "#" }, "Another action"),
                            new bsts_1.b.dropdown.item({ href: "#" }, "Something else here"),
                            new bsts_1.b.dropdown.divider(),
                            new bsts_1.b.dropdown.item({ href: "#" }, "Separated link"),
                        ];
                        return [
                            bsts_1.b.form.input({
                                container: { marginBottom: 3 },
                                type: "text",
                                aria: { label: "Text input with dropdown button" },
                                before: [
                                    new bsts_1.b.dropdown.button({ color: "secondary", outline: true }, "Dropdown"),
                                    new bsts_1.b.dropdown.menu(dropdownItem),
                                ],
                            }),
                            bsts_1.b.form.input({
                                container: { marginBottom: 3 },
                                type: "text",
                                aria: { label: "Text input with dropdown button" },
                                after: [
                                    new bsts_1.b.dropdown.button({ color: "secondary", outline: true }, "Dropdown"),
                                    new bsts_1.b.dropdown.menu({ positionView: "end" }, dropdownItem),
                                ],
                            }),
                            bsts_1.b.form.input({
                                type: "text",
                                aria: { label: "Text input with dropdown button" },
                                before: [
                                    new bsts_1.b.dropdown.button({ color: "secondary", outline: true }, "Dropdown"),
                                    new bsts_1.b.dropdown.menu(dropdownItem),
                                ],
                                after: [
                                    new bsts_1.b.dropdown.button({ color: "secondary", outline: true }, "Dropdown"),
                                    new bsts_1.b.dropdown.menu({ positionView: "end" }, dropdownItem),
                                ],
                            }),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Segmented buttons"),
                new e.code({
                    output: () => {
                        const dropdownItem = [
                            new bsts_1.b.dropdown.item({ href: "#" }, "Action"),
                            new bsts_1.b.dropdown.item({ href: "#" }, "Another action"),
                            new bsts_1.b.dropdown.item({ href: "#" }, "Something else here"),
                            new bsts_1.b.dropdown.divider(),
                            new bsts_1.b.dropdown.item({ href: "#" }, "Separated link"),
                        ];
                        return [
                            bsts_1.b.form.input({
                                container: { marginBottom: 3 },
                                type: "text",
                                aria: { label: "Text input with segmented dropdown button" },
                                before: [
                                    new bsts_1.b.button({ color: "secondary", outline: true }, "Action"),
                                    new bsts_1.b.dropdown.button({ color: "secondary", outline: true, split: true }),
                                    new bsts_1.b.dropdown.menu(dropdownItem),
                                ],
                            }),
                            bsts_1.b.form.input({
                                type: "text",
                                aria: { label: "Text input with segmented dropdown button" },
                                after: [
                                    new bsts_1.b.button({ color: "secondary", outline: true }, "Action"),
                                    new bsts_1.b.dropdown.button({ color: "secondary", outline: true, split: true }),
                                    new bsts_1.b.dropdown.menu({ positionView: "end" }, dropdownItem),
                                ],
                            }),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Custom forms"),
                new e.text("Input groups include support for custom selects and custom file inputs. Browser default versions of these are not supported."),
                new e.subtitle("Custom select"),
                new e.code({
                    output: () => {
                        let selectItem = [
                            { selected: true, elem: "Choose..." },
                            { value: "1", elem: "One" },
                            { value: "2", elem: "Two" },
                            { value: "3", elem: "Three" },
                        ];
                        return [
                            bsts_1.b.form.select({
                                container: { marginBottom: 3 },
                                item: selectItem,
                                before: "Options",
                            }),
                            bsts_1.b.form.select({
                                container: { marginBottom: 3 },
                                item: selectItem,
                                after: "Options",
                            }),
                            bsts_1.b.form.select({
                                container: { marginBottom: 3 },
                                item: selectItem,
                                before: new bsts_1.b.button({ color: "secondary", outline: true }, "Button"),
                            }),
                            bsts_1.b.form.select({
                                container: { marginBottom: 3 },
                                item: selectItem,
                                after: new bsts_1.b.button({ color: "secondary", outline: true }, "Button"),
                            }),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Custom file input"),
                new e.text("Input groups include support for custom selects and custom file inputs. Browser default versions of these are not supported."),
                new e.code({
                    output: () => {
                        return [
                            bsts_1.b.form.input({
                                container: { marginBottom: 3 },
                                type: "file",
                                before: "Upload",
                            }),
                            bsts_1.b.form.input({
                                container: { marginBottom: 3 },
                                type: "file",
                                after: "Upload",
                            }),
                            bsts_1.b.form.input({
                                container: { marginBottom: 3 },
                                type: "file",
                                before: new bsts_1.b.button({ color: "secondary", outline: true }, "Button"),
                            }),
                            bsts_1.b.form.input({
                                type: "file",
                                after: new bsts_1.b.button({ color: "secondary", outline: true }, "Button"),
                            }),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([new e.title("CSS")]),
            //----------------------
            new e.section([
                new e.subtitle("Sass variables"),
                new e.codepreview({
                    type: "css",
                    title: "scss/_variables.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
                    code: `
				$input-group-addon-padding-y:           $input-padding-y;
				$input-group-addon-padding-x:           $input-padding-x;
				$input-group-addon-font-weight:         $input-font-weight;
				$input-group-addon-color:               $input-color;
				$input-group-addon-bg:                  var(--#{$prefix}tertiary-bg);
				$input-group-addon-border-color:        $input-border-color;
			`,
                }),
            ]),
        ];
    },
};
