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
exports.bootswatch = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
exports.bootswatch = {
    title: "Bootswatch",
    description: "Free themes for Bootstrap from Bootswatch",
    item: () => {
        return [
            // new e.section(
            // 	new h.div(
            // 		{ gap: 3, display: "flex", flex: "wrap", justifyContent: "evenly" },
            // 		[
            // 			{ value: "cerulean", label: "Cerulean" },
            // 			{ value: "cosmo", label: "Cosmo" },
            // 			{ value: "cyborg", label: "Cyborg" },
            // 			{ value: "darkly", label: "Darkly" },
            // 			{ value: "flatly", label: "Flatly" },
            // 			{ value: "journal", label: "Journal" },
            // 			{ value: "litera", label: "Litera" },
            // 			{ value: "lumen", label: "Lumen" },
            // 			{ value: "lux", label: "Lux" },
            // 			{ value: "materia", label: "Materia" },
            // 			{ value: "minty", label: "Minty" },
            // 			{ value: "morph", label: "Morph" },
            // 			{ value: "pulse", label: "Pulse" },
            // 			{ value: "quartz", label: "Quartz" },
            // 			{ value: "sandstone", label: "Sandstone" },
            // 			{ value: "simplex", label: "Simplex" },
            // 			{ value: "sketchy", label: "Sketchy" },
            // 			{ value: "slate", label: "Slate" },
            // 			{ value: "solar", label: "Solar" },
            // 			{ value: "spacelab", label: "Spacelab" },
            // 			{ value: "superhero", label: "Superhero" },
            // 			{ value: "united", label: "United" },
            // 			{ value: "vapor", label: "Vapor" },
            // 			{ value: "yeti", label: "Yeti" },
            // 			{ value: "zephyr", label: "Zephyr" },
            // 		].map((i) => {
            // 			return new b.img({
            // 				src: `https://bootswatch.com/${i.value}/thumbnail.png`,
            // 				thumbnail: true,
            // 				col: ["lg-2", "md-3", "sm-4"],
            // 				data: {
            // 					value: i.value,
            // 				},
            // 				on: {
            // 					click: (event) => {
            // 						const target = event.target as Element;
            // 						let value = target.getAttribute("data-value");
            // 						let root = target.closest(".bs-main-root") as Element;
            // 						root.dispatchEvent(new CustomEvent("bs-bootswatch-change", { detail: value }));
            // 					},
            // 				},
            // 			});
            // 		})
            // 	)
            // ),
            //----------------------
            new e.section([
                new e.title("Navbars"),
                new e.code({
                    outputAttr: { display: "grid", gap: 3 },
                    output: () => {
                        const navbarItem = (btnColor) => {
                            let id = bsts_1.core.UUID();
                            return new bsts_1.b.navbar.innercontainer({ container: "fluid" }, [
                                new bsts_1.b.navbar.brand({ href: "#" }, "Navbar"),
                                new bsts_1.b.navbar.toggle.collapse({
                                    target: `#${id}`,
                                    controlfor: id,
                                    label: "Toggle navigation",
                                }),
                                new bsts_1.b.navbar.collapse({ id: id }, [
                                    new bsts_1.b.navbar.itemcontainer({ marginEnd: "auto", marginBottom: [2, "lg-0"] }, [
                                        new bsts_1.b.navbar.item(new bsts_1.b.navbar.link({ href: "#", active: true }, "Home")),
                                        new bsts_1.b.navbar.item(new bsts_1.b.navbar.link({ href: "#" }, "Features")),
                                        new bsts_1.b.navbar.item(new bsts_1.b.navbar.link({ href: "#" }, "Pricing")),
                                        new bsts_1.b.navbar.item(new bsts_1.b.navbar.link({ href: "#" }, "About")),
                                        new bsts_1.b.navbar.item({ dropdown: true }, [
                                            new bsts_1.b.dropdown.button({ navItem: true }, "Dropdown"),
                                            new bsts_1.b.dropdown.menu([
                                                new bsts_1.b.dropdown.item({ href: "#" }, "Action"),
                                                new bsts_1.b.dropdown.item({ href: "#" }, "Another action"),
                                                new bsts_1.b.dropdown.divider(),
                                                new bsts_1.b.dropdown.item({ href: "#" }, "Something else here"),
                                            ]),
                                        ]),
                                    ]),
                                    new bsts_1.h.form({ display: "flex", role: "search" }, [
                                        new bsts_1.b.input({
                                            type: "search",
                                            marginEnd: 2,
                                            placeholder: "Search",
                                            label: "Search",
                                        }),
                                        new bsts_1.b.button({ type: "submit", color: btnColor, outline: true }, "Search"),
                                    ]),
                                ]),
                            ]);
                        };
                        return [
                            new bsts_1.b.navbar.container({ bgColor: "primary", theme: "dark" }, navbarItem("light")),
                            new bsts_1.b.navbar.container({ bgColor: "dark", theme: "dark" }, navbarItem("light")),
                            new bsts_1.b.navbar.container({ bgColor: "light", theme: "light" }, navbarItem("dark")),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Buttons"),
                new e.code({
                    outputAttr: { display: "flex", flex: "wrap", gap: 2 },
                    output: () => {
                        return [
                            "primary",
                            "secondary",
                            "success",
                            "danger",
                            "warning",
                            "info",
                            "light",
                            "dark",
                            "link",
                        ].map((i) => {
                            return new bsts_1.b.button({ color: i }, bsts_1.core.uppercaseFirst(i));
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Disabled"),
                new e.code({
                    outputAttr: { display: "flex", flex: "wrap", gap: 2 },
                    output: () => {
                        return [
                            "primary",
                            "secondary",
                            "success",
                            "danger",
                            "warning",
                            "info",
                            "light",
                            "dark",
                            "link",
                        ].map((i) => {
                            return new bsts_1.b.button({ color: i, disabled: true }, bsts_1.core.uppercaseFirst(i));
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Outline"),
                new e.code({
                    outputAttr: { display: "flex", flex: "wrap", gap: 2 },
                    output: () => {
                        return [
                            "primary",
                            "secondary",
                            "success",
                            "danger",
                            "warning",
                            "info",
                            "light",
                            "dark",
                            "link",
                        ].map((i) => {
                            return new bsts_1.b.button({ color: i, outline: true }, bsts_1.core.uppercaseFirst(i));
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Sizing"),
                new e.code({
                    outputAttr: {
                        display: "flex",
                        flex: "wrap",
                        alignItem: "center",
                        gap: 2,
                    },
                    output: () => {
                        return [
                            new bsts_1.b.button({ weight: "lg" }, "Large button"),
                            new bsts_1.b.button("Default button"),
                            new bsts_1.b.button({ weight: "sm" }, "Small button"),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Block"),
                new e.code({
                    output: () => {
                        return new bsts_1.h.div({ display: "grid", gap: 2 }, [new bsts_1.b.button("Button"), new bsts_1.b.button("Button")]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Button group"),
                new e.code({
                    output: () => {
                        return new bsts_1.b.btngroup({ label: "Basic example", role: "group" }, [
                            new bsts_1.b.button("Left"),
                            new bsts_1.b.button("Middle"),
                            new bsts_1.b.button("Right"),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Checkbox"),
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
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Radio"),
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
                new e.subtitle("Toolbar"),
                new e.code({
                    output: () => {
                        return new bsts_1.b.btngroup({ label: "Toolbar with button groups", role: "toolbar" }, [
                            new bsts_1.b.btngroup({ label: "First group", marginEnd: 2 }, ["1", "2", "3", "4"].map((i) => new bsts_1.b.button(i))),
                            new bsts_1.b.btngroup({ label: "Second group", marginEnd: 2 }, ["5", "6", "7"].map((i) => new bsts_1.b.button({ color: "secondary" }, i))),
                            new bsts_1.b.btngroup({ label: "Third group" }, ["8"].map((i) => new bsts_1.b.button({ color: "info" }, i))),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.xsubtitle("Vertical"),
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
            ]),
            //----------------------
            new e.section([
                new e.title("Dropdown"),
                new e.code({
                    outputAttr: { display: "flex", flex: "wrap", gap: 2 },
                    output: () => {
                        return ["primary", "secondary", "success", "info", "warning", "danger"].map((i) => {
                            return new bsts_1.b.dropdown.container([
                                new bsts_1.b.dropdown.button({ color: i }, bsts_1.core.uppercaseFirst(i)),
                                new bsts_1.b.dropdown.menu([
                                    new bsts_1.b.dropdown.item({ href: "#" }, "Action"),
                                    new bsts_1.b.dropdown.item({ href: "#" }, "Another action"),
                                    new bsts_1.b.dropdown.item({ href: "#" }, "Something else here"),
                                    new bsts_1.b.dropdown.divider(),
                                    new bsts_1.b.dropdown.item({ href: "#" }, "Separated link"),
                                ]),
                            ]);
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Split button"),
                new e.code({
                    outputAttr: { display: "flex", flex: "wrap", gap: 2 },
                    output: () => {
                        return ["primary", "secondary", "success", "info", "warning", "danger"].map((i) => {
                            return new bsts_1.b.dropdown.container([
                                new bsts_1.b.button({ color: i }, bsts_1.core.uppercaseFirst(i)),
                                new bsts_1.b.dropdown.button({ color: i, split: true }),
                                new bsts_1.b.dropdown.menu([
                                    new bsts_1.b.dropdown.item({ href: "#" }, "Action"),
                                    new bsts_1.b.dropdown.item({ href: "#" }, "Another action"),
                                    new bsts_1.b.dropdown.item({ href: "#" }, "Something else here"),
                                    new bsts_1.b.dropdown.divider(),
                                    new bsts_1.b.dropdown.item({ href: "#" }, "Separated link"),
                                ]),
                            ]);
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Typography"),
                new e.code({
                    output: () => {
                        return [1, 2, 3, 4, 5, 6].map((i) => new bsts_1.h.h(i, `h${i}. Bootstrap heading`));
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("With secondary text"),
                new e.code({
                    output: () => {
                        return [1, 2, 3, 4, 5, 6].map((i) => new bsts_1.h.h(i, [
                            `h${i}. Heading`,
                            new bsts_1.h.small({ textColor: "body-secondary" }, " with faded secondary text"),
                        ]));
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Lead paragraph"),
                new e.code({
                    output: () => {
                        return new bsts_1.h.p({ lead: true }, "This is a lead paragraph. It stands out from regular paragraphs.");
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Body text"),
                new e.code({
                    output: () => {
                        return [
                            new bsts_1.h.p(["You can use the mark tag to ", new bsts_1.h.mark("highlight"), " text."]),
                            new bsts_1.h.p(new bsts_1.h.del("This line of text is meant to be treated as deleted text.")),
                            new bsts_1.h.p(new bsts_1.h.s("This line of text is meant to be treated as no longer accurate.")),
                            new bsts_1.h.p(new bsts_1.h.ins("This line of text is meant to be treated as an addition to the document.")),
                            new bsts_1.h.p(new bsts_1.h.u("This line of text will render as underlined.")),
                            new bsts_1.h.p(new bsts_1.h.small("This line of text is meant to be treated as fine print.")),
                            new bsts_1.h.p(new bsts_1.h.strong("This line rendered as bold text.")),
                            new bsts_1.h.p(new bsts_1.h.em("This line rendered as italicized text.")),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Text color"),
                new e.code({
                    output: () => {
                        const data = [
                            { textColor: "primary" },
                            { textColor: "primary-emphasis" },
                            { textColor: "secondary" },
                            { textColor: "secondary-emphasis" },
                            { textColor: "success" },
                            { textColor: "success-emphasis" },
                            { textColor: "danger" },
                            { textColor: "danger-emphasis" },
                            { textColor: "warning", bgColor: "dark" },
                            { textColor: "warning-emphasis" },
                            { textColor: "info", bgColor: "dark" },
                            { textColor: "info-emphasis" },
                            { textColor: "light", bgColor: "dark" },
                            { textColor: "light-emphasis" },
                            { textColor: "dark" },
                            { textColor: "dark-emphasis" },
                            { textColor: "body" },
                            { textColor: "body-emphasis" },
                            { textColor: "body-secondary" },
                            { textColor: "body-tertiary" },
                            { textColor: "black" },
                            { textColor: "white", bgColor: "dark" },
                            { textColor: "black", textOpacity: 50 },
                            { textColor: "white", textOpacity: 50, bgColor: "dark" },
                        ];
                        return data.map((i) => {
                            return new bsts_1.h.p({ bgColor: i.bgColor, textColor: i.textColor, textOpacity: i.textOpacity }, [
                                `.text-${i.textColor}`,
                                i.textOpacity ? `.text-opacity-${i.textOpacity}` : "",
                            ]);
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Blockquote"),
                new e.code({
                    output: () => {
                        return new bsts_1.h.figure([
                            new bsts_1.b.blockquote.container(new bsts_1.h.p("A well-known quote, contained in a blockquote element.")),
                            new bsts_1.b.blockquote.caption([
                                "Someone famous in ",
                                new bsts_1.h.cite({ title: "Source Title" }, "Source Title"),
                            ]),
                        ]);
                    },
                }),
                new e.code({
                    output: () => {
                        return new bsts_1.h.figure({ textAlign: "center" }, [
                            new bsts_1.b.blockquote.container(new bsts_1.h.p("A well-known quote, contained in a blockquote element.")),
                            new bsts_1.b.blockquote.caption([
                                "Someone famous in ",
                                new bsts_1.h.cite({ title: "Source Title" }, "Source Title"),
                            ]),
                        ]);
                    },
                }),
                new e.code({
                    output: () => {
                        return new bsts_1.h.figure({ textAlign: "end" }, [
                            new bsts_1.b.blockquote.container(new bsts_1.h.p("A well-known quote, contained in a blockquote element.")),
                            new bsts_1.b.blockquote.caption([
                                "Someone famous in ",
                                new bsts_1.h.cite({ title: "Source Title" }, "Source Title"),
                            ]),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Table"),
                new e.code({
                    outputAttr: { overflow: "auto" },
                    output: () => {
                        return new bsts_1.b.table.container([
                            new bsts_1.b.table.thead(new bsts_1.b.table.tr([
                                new bsts_1.b.table.th({ scope: "col" }, "Class"),
                                new bsts_1.b.table.th({ scope: "col" }, "Heading"),
                                new bsts_1.b.table.th({ scope: "col" }, "Heading"),
                            ])),
                            new bsts_1.b.table.tbody([
                                undefined,
                                "primary",
                                "secondary",
                                "success",
                                "danger",
                                "warning",
                                "info",
                                "light",
                                "dark",
                            ].map((i) => new bsts_1.b.table.tr({ color: i }, [
                                new bsts_1.b.table.th({ scope: "row" }, i ? bsts_1.core.uppercaseFirst(i) : "Default"),
                                new bsts_1.b.table.td("Cell"),
                                new bsts_1.b.table.td("Cell"),
                            ]))),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Forms"),
                new e.code({
                    output: () => {
                        return new bsts_1.h.form(new bsts_1.h.fieldset([
                            new bsts_1.h.legend("Legend"),
                            bsts_1.b.form.input({
                                container: { marginBottom: 3 },
                                value: "email@example.com",
                                label: "Email",
                                plaintext: true,
                                col1: "sm-2",
                                col2: "sm-10",
                            }),
                            bsts_1.b.form.input({
                                container: { marginBottom: 3 },
                                label: "Email address",
                                type: "email",
                                placeholder: "Enter email",
                                description: "We'll never share your email with anyone else.",
                            }),
                            bsts_1.b.form.input({
                                label: "Password",
                                type: "password",
                                placeholder: "Password",
                            }),
                        ]));
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Select"),
                new e.code({
                    output: () => {
                        return [
                            bsts_1.b.form.select({
                                container: { marginBottom: 3 },
                                label: "Example select",
                                item: [
                                    { selected: true, value: "1", elem: "One" },
                                    { value: "2", elem: "Two" },
                                    { value: "3", elem: "Three" },
                                    { value: "4", elem: "Four" },
                                    { value: "5", elem: "Five" },
                                ],
                            }),
                            bsts_1.b.form.select({
                                disabled: true,
                                container: { marginBottom: 3 },
                                label: "Example disable select",
                                item: [
                                    { selected: true, value: "1", elem: "One" },
                                    { value: "2", elem: "Two" },
                                    { value: "3", elem: "Three" },
                                    { value: "4", elem: "Four" },
                                    { value: "5", elem: "Five" },
                                ],
                            }),
                            bsts_1.b.form.select({
                                multiple: true,
                                label: "Example multiple select",
                                item: [
                                    { value: "1", elem: "One" },
                                    { value: "2", elem: "Two" },
                                    { value: "3", elem: "Three" },
                                    { value: "4", elem: "Four" },
                                    { value: "5", elem: "Five" },
                                ],
                            }),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Textarea"),
                new e.code({
                    output: () => {
                        return bsts_1.b.form.textarea({
                            label: "Example textarea",
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("File input"),
                new e.code({
                    output: () => {
                        return bsts_1.b.form.input({
                            label: "Default file input exampe",
                            type: "file",
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Radio buttons"),
                new e.code({
                    output: () => {
                        return [
                            bsts_1.b.form.check({
                                label: "Option one is this and that—be sure to include why it's great",
                                type: "radio",
                                name: "btnradio2",
                                checked: true,
                            }),
                            bsts_1.b.form.check({
                                label: "Option two can be something else and selecting it will deselect option one",
                                type: "radio",
                                name: "btnradio2",
                            }),
                            bsts_1.b.form.check({
                                label: "Option three is disabled",
                                type: "radio",
                                name: "btnradio2",
                                disabled: true,
                            }),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section({ id: "checkbox2" }, [
                new e.subtitle({ id: "checkbox2" }, "Checkbox"),
                new e.code({
                    output: () => {
                        return [
                            bsts_1.b.form.check({
                                label: "Default checkbox",
                            }),
                            bsts_1.b.form.check({
                                label: "Checked checkbox",
                                checked: true,
                            }),
                            bsts_1.b.form.check({
                                label: "Indeterminate checkbox",
                                indeterminate: true,
                            }),
                            bsts_1.b.form.check({
                                label: "Disabled checkbox",
                                disabled: true,
                            }),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Switch"),
                new e.code({
                    output: () => {
                        return [
                            bsts_1.b.form.check({
                                label: "Default switch checkbox",
                                switch: true,
                            }),
                            bsts_1.b.form.check({
                                label: "Checked switch checkbox",
                                switch: true,
                                checked: true,
                            }),
                            bsts_1.b.form.check({
                                label: "Disabled switch checkbox",
                                switch: true,
                                disabled: true,
                            }),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Range"),
                new e.code({
                    output: () => {
                        return [
                            bsts_1.b.form.input({
                                container: { marginBottom: 3 },
                                label: "Example range",
                                type: "range",
                            }),
                            bsts_1.b.form.input({
                                container: { marginBottom: 3 },
                                label: "Example range",
                                type: "range",
                                disabled: true,
                            }),
                            bsts_1.b.form.input({
                                label: "Example range",
                                type: "range",
                                min: 0,
                                max: 5,
                                step: 0.5,
                                value: 2.5,
                            }),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Button"),
                new e.code({
                    outputAttr: { display: "flex", flex: "wrap", gap: 2 },
                    output: () => {
                        return [
                            new bsts_1.b.button({ type: "submit" }, "Submit"),
                            new bsts_1.b.button({ type: "reset" }, "Reset"),
                            new bsts_1.b.button({ type: "button" }, "Button"),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Disable & readonly"),
                new e.code({
                    output: () => {
                        return [
                            bsts_1.b.form.input({
                                container: { marginBottom: 3 },
                                label: "Disabled input",
                                placeholder: "Disabled input here...",
                                disabled: true,
                            }),
                            bsts_1.b.form.input({
                                label: "Readonly input",
                                placeholder: "Readonly input here...",
                                readonly: true,
                            }),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Validation"),
                new e.code({
                    output: () => {
                        return [
                            bsts_1.b.form.input({
                                container: { marginBottom: 3 },
                                label: "Valid input",
                                value: "corrent value",
                                validFeedback: "Success! You've done it.",
                                isvalid: true,
                            }),
                            bsts_1.b.form.input({
                                label: "Invalid input",
                                value: "wrong value",
                                invalidFeedback: "Sorry, that username's taken. Try another?",
                                isvalid: false,
                            }),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Weight"),
                new e.code({
                    output: () => {
                        return [
                            bsts_1.b.form.input({
                                container: { marginBottom: 3 },
                                label: "Large input",
                                placeholder: "weight: 'lg'",
                                weight: "lg",
                            }),
                            bsts_1.b.form.input({
                                container: { marginBottom: 3 },
                                label: "Default input",
                            }),
                            bsts_1.b.form.input({
                                label: "Small input",
                                placeholder: "weight: 'sm'",
                                weight: "sm",
                            }),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Input addon"),
                new e.code({
                    output: () => {
                        return [
                            bsts_1.b.form.input({
                                container: { marginBottom: 3 },
                                before: "$",
                                after: "0.00",
                            }),
                            bsts_1.b.form.input({
                                placeholder: "Recipient's username",
                                after: new bsts_1.b.button("Button"),
                            }),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Floating label"),
                new e.code({
                    output: () => {
                        return [
                            bsts_1.b.form.floatinglabel.input({
                                container: { marginBottom: 3 },
                                label: "Email address",
                                type: "email",
                            }),
                            bsts_1.b.form.floatinglabel.input({
                                label: "Password",
                                type: "password",
                            }),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([new e.title("Navs")]),
            //----------------------
            new e.section([
                new e.subtitle("Tabs"),
                new e.code({
                    output: () => {
                        const content = (title) => `This is some placeholder content the {{b::${title} tab's}} associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other {{type:'tab|pill|underline'}}powered navigation.`;
                        return bsts_1.b.nav.tab({
                            item: [
                                { label: "Home", active: true, elem: content("Home") },
                                { label: "Profile", elem: content("Profile") },
                                { label: "Contact", elem: content("Contact") },
                                { label: "Disabled", disabled: true, elem: content("Disabled") },
                            ],
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Pills"),
                new e.code({
                    output: () => {
                        const content = (title) => `This is some placeholder content the {{b::${title} tab's}} associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other {{type:'tab|pill|underline'}}powered navigation.`;
                        return bsts_1.b.nav.tab({
                            type: "pill",
                            item: [
                                { label: "Home", active: true, elem: content("Home") },
                                { label: "Profile", elem: content("Profile") },
                                { label: "Contact", elem: content("Contact") },
                                { label: "Disabled", disabled: true, elem: content("Disabled") },
                            ],
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Breadcrumbs"),
                new e.code({
                    outputAttr: { display: "flex", flex: "column", gap: 3 },
                    output: () => {
                        return [["Home"], ["Home", "Library"], ["Home", "Library", "Data"]].map((i) => {
                            return new bsts_1.b.breadcrumb.container({ label: "breadcrumb" }, i.map((j, jx) => {
                                return new bsts_1.b.breadcrumb.item({ active: jx === i.length - 1, href: "#" }, j);
                            }));
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Pagination"),
                new e.code({
                    outputAttr: { display: "flex", flex: "column", gap: 3, overflowX: "auto" },
                    output: () => {
                        return [
                            new bsts_1.b.pagination.container({
                                total: 1284,
                                limit: 10,
                                maxBtnCount: 3,
                                nextPrev: false,
                            }),
                            new bsts_1.b.pagination.container({
                                weight: "lg",
                                total: 1284,
                                limit: 10,
                                maxBtnCount: 3,
                                firstLast: false,
                            }),
                            new bsts_1.b.pagination.container({
                                weight: "sm",
                                total: 1284,
                                limit: 10,
                                maxBtnCount: 5,
                            }),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([new e.title("Indicators")]),
            //----------------------
            new e.section([
                new e.subtitle("Alerts"),
                new e.code({
                    output: () => {
                        return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
                            return new bsts_1.b.alert.container({ dismissible: true, color: i }, `A simple ${i} alert—check it out!`);
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Callout"),
                new e.code({
                    output: () => {
                        return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
                            return new bsts_1.b.alert.container({ callout: true, color: i }, `A simple ${i} alert—check it out!`);
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Badges"),
                new e.code({
                    outputAttr: { display: "flex", flex: "wrap", gap: 2 },
                    output: () => {
                        return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
                            return new bsts_1.b.badge({ textBgColor: i }, bsts_1.core.uppercaseFirst(i));
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.xsubtitle("Rounded pill"),
                new e.code({
                    outputAttr: { display: "flex", flex: "wrap", gap: 2 },
                    output: () => {
                        return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
                            return new bsts_1.b.badge({
                                textBgColor: i,
                                rounded: "pill",
                            }, bsts_1.core.uppercaseFirst(i));
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([new e.title("Progress")]),
            //----------------------
            new e.section([
                new e.subtitle("Basic"),
                new e.code({
                    output: () => {
                        return new bsts_1.b.progress.container({
                            value: 25,
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Contextual alternatives"),
                new e.code({
                    outputAttr: { display: "flex", flex: "column", gap: 3 },
                    output: () => {
                        return ["success", "info", "warning", "danger"].map((i, ix) => {
                            let val = [25, 50, 75, 100][ix];
                            return new bsts_1.b.progress.container({ label: `${bsts_1.core.uppercaseFirst(i)} example`, value: val, min: 0, max: 100 }, new bsts_1.b.progress.bar({
                                color: i,
                                style: { width: `${val}%` },
                            }));
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Multiple bars"),
                new e.code({
                    output: () => {
                        return new bsts_1.b.progress.stacked([
                            new bsts_1.b.progress.container({
                                label: "Segment one",
                                value: 15,
                                min: 0,
                                max: 100,
                                stacked: true,
                            }),
                            new bsts_1.b.progress.container({
                                label: "Segment two",
                                value: 30,
                                min: 0,
                                max: 100,
                                stacked: true,
                                color: "success",
                            }),
                            new bsts_1.b.progress.container({
                                label: "Segment three",
                                value: 20,
                                min: 0,
                                max: 100,
                                stacked: true,
                                color: "info",
                            }),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Striped"),
                new e.code({
                    outputAttr: { display: "flex", flex: "column", gap: 3 },
                    output: () => {
                        return [undefined, "success", "info", "warning", "danger"].map((i, ix) => {
                            let val = [10, 25, 50, 75, 100][ix];
                            return new bsts_1.b.progress.container({
                                label: `${i ? bsts_1.core.uppercaseFirst(i) : "Default"} striped example`,
                                value: val,
                                min: 0,
                                max: 100,
                            }, new bsts_1.b.progress.bar({
                                striped: true,
                                textBgColor: i,
                                style: { width: `${val}%` },
                            }));
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Animated"),
                new e.code({
                    output: () => {
                        return new bsts_1.b.progress.container({
                            value: 75,
                            striped: true,
                            animated: true,
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("List groups"),
                new e.code({
                    outputAttr: { class: "list-group-w-400px" },
                    output: () => {
                        return new bsts_1.b.list.container([
                            new bsts_1.b.list.item("An item"),
                            new bsts_1.b.list.item("A second item"),
                            new bsts_1.b.list.item("A third item"),
                            new bsts_1.b.list.item("A fourth item"),
                            new bsts_1.b.list.item("And a fifth one"),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("With badge"),
                new e.code({
                    outputAttr: { class: "list-group-w-400px" },
                    output: () => {
                        return new bsts_1.b.list.container([
                            { label: "A list item", counter: 14 },
                            { label: "A second list item", counter: 2 },
                            { label: "A third list item", counter: 1 },
                        ].map((i) => {
                            return new bsts_1.b.list.item({ display: "flex", justifyContent: "between", alignItem: "center" }, [
                                i.label,
                                new bsts_1.b.badge({ bgColor: "primary", rounded: "pill" }, i.counter.toString()),
                            ]);
                        }));
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Color"),
                new e.code({
                    outputAttr: { class: "list-group-w-400px" },
                    output: () => {
                        return new bsts_1.b.list.container(["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
                            return new bsts_1.b.list.item({
                                color: i,
                                display: "flex",
                                justifyContent: "between",
                                alignItem: "center",
                            }, [
                                bsts_1.core.uppercaseFirst(i),
                                new bsts_1.b.badge({ textBgColor: i, rounded: "pill" }, bsts_1.core.rndBetween(1, 20).toString()),
                            ]);
                        }));
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Active action"),
                new e.code({
                    outputAttr: { class: "list-group-w-400px" },
                    output: () => {
                        return new bsts_1.b.list.container(["An item", "A second item", "A third item", "A fourth item", "And a fifth one"].map((i, ix) => {
                            return new bsts_1.b.list.item({ action: true, handleActive: true, active: ix === 0 }, i);
                        }));
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Custom content"),
                new e.code({
                    outputAttr: { class: "list-group-w-400px" },
                    output: () => {
                        return new bsts_1.b.tabList.container({ style: { maxWidth: "400px" } }, [
                            { label: "And some small print", active: true },
                            { label: "And some muted small print" },
                            { label: "And some muted small print" },
                        ].map((i) => {
                            return new bsts_1.b.tabList.item({ href: "#", action: true, active: i.active }, [
                                new bsts_1.h.div({ display: "flex", width: 100, justifyContent: "between" }, [
                                    new bsts_1.h.h(5, { marginBottom: 1 }, "List group item heading"),
                                    new bsts_1.h.small({ textColor: !i.active ? "body-secondary" : undefined }, "3 days ago"),
                                ]),
                                new bsts_1.h.p({ marginBottom: 1 }, "Some placeholder content in a paragraph."),
                                new bsts_1.h.small({ textColor: !i.active ? "body-secondary" : undefined }, i.label),
                            ]);
                        }));
                    },
                }),
            ]),
            //----------------------
            new e.section([new e.title("Containers")]),
            //----------------------
            new e.section([
                new e.subtitle("Card"),
                new e.code({
                    output: () => {
                        return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i, ix) => {
                            return new bsts_1.b.card.container({
                                textBgColor: i,
                                marginTop: ix !== 0 ? 3 : undefined,
                                style: { width: "18rem" },
                            }, [
                                new bsts_1.b.card.header("Header"),
                                new bsts_1.b.card.body([
                                    new bsts_1.b.card.title(`${bsts_1.core.uppercaseFirst(i)} card title`),
                                    new bsts_1.b.card.text("Some quick example text to build on the card title and make up the bulk of the card's content."),
                                ]),
                            ]);
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.xsubtitle("Card outline"),
                new e.code({
                    output: () => {
                        return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i, ix) => {
                            return new bsts_1.b.card.container({
                                borderColor: i,
                                marginTop: ix !== 0 ? 3 : undefined,
                                style: { width: "18rem" },
                            }, [
                                new bsts_1.b.card.header("Header"),
                                new bsts_1.b.card.body({ textColor: i }, [
                                    new bsts_1.b.card.title(`${bsts_1.core.uppercaseFirst(i)} card title`),
                                    new bsts_1.b.card.text("Some quick example text to build on the card title and make up the bulk of the card's content."),
                                ]),
                            ]);
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.xsubtitle("Kitchen sink"),
                new e.code({
                    output: () => {
                        return new bsts_1.b.card.container({ style: { width: "18rem" } }, [
                            new bsts_1.b.card.header("Header"),
                            new bsts_1.b.card.body([new bsts_1.b.card.title("Card title"), new bsts_1.b.card.subtitle("Card subtitle.")]),
                            new bsts_1.b.card.img({
                                src: "https://picsum.photos/seed/bsts_0/286/180.webp",
                                alt: "Image cap",
                            }),
                            new bsts_1.b.card.body([
                                new bsts_1.b.card.text("Some quick example text to build on the card title and make up the bulk of the card's content."),
                            ]),
                            new bsts_1.b.list.container({ flush: true }, [
                                new bsts_1.b.list.item("An item"),
                                new bsts_1.b.list.item("A second item"),
                                new bsts_1.b.list.item("A third item"),
                            ]),
                            new bsts_1.b.card.body([
                                new bsts_1.b.card.link({ href: "#" }, "Card link"),
                                new bsts_1.b.card.link({ href: "#" }, "Another link"),
                            ]),
                            new bsts_1.b.card.footer("2 days ago"),
                        ]);
                    },
                }),
                new e.code({
                    output: () => {
                        return new bsts_1.b.card.container({ style: { width: "18rem" } }, new bsts_1.b.card.body([
                            new bsts_1.b.card.title("Card title"),
                            new bsts_1.b.card.subtitle("Card subtitle"),
                            new bsts_1.b.card.text("Some quick example text to build on the card title and make up the bulk of the card's content."),
                            new bsts_1.b.card.link({ href: "#" }, "Card link"),
                            new bsts_1.b.card.link({ href: "#" }, "Another link"),
                        ]));
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Accordion"),
                new e.code({
                    output: () => {
                        return new bsts_1.b.accordion.container({
                            item: [
                                {
                                    title: "Accordion Item #1",
                                    elem: "{{b::This is the first item's accordion body}}. It is shown by default, until the collapse plugin adds the appropriate classes that Bootstrap use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding Bootstrap default variables. It's also worth noting that just about any HTML can go within the {{b.accordion.body}}, though the transition does limit overflow.",
                                    show: true,
                                },
                                {
                                    title: "Accordion Item #2",
                                    elem: "{{b::This is the second item's accordion body}}. It is hidden by default, until the collapse plugin adds the appropriate classes that Bootstrap use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding Bootstrap default variables. It's also worth noting that just about any HTML can go within the {{b.accordion.body}}, though the transition does limit overflow.",
                                },
                                {
                                    title: "Accordion Item #3",
                                    elem: "{{b::This is the third item's accordion body}}. It is hidden by default, until the collapse plugin adds the appropriate classes that Bootstrap use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding Bootstrap default variables. It's also worth noting that just about any HTML can go within the {{b.accordion.body}}, though the transition does limit overflow.",
                                },
                            ],
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([new e.title("Dialogs")]),
            //----------------------
            new e.section([
                new e.subtitle("Modal"),
                new e.code({
                    previewAttr: { bgColor: "body-tertiary" },
                    showCodepen: false,
                    output: () => {
                        return new bsts_1.b.modal.container({ debug: true }, [
                            new bsts_1.b.modal.header({ close: true }, new bsts_1.b.modal.title("Modal title")),
                            new bsts_1.b.modal.body(new bsts_1.h.p("Modal body text gose here")),
                            new bsts_1.b.modal.footer([
                                new bsts_1.b.button({ dismiss: "modal", color: "secondary" }, "Close"),
                                new bsts_1.b.button({ color: "primary" }, "Save changes"),
                            ]),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Offcanvas"),
                new e.code({
                    output: () => {
                        return [
                            new bsts_1.b.offcanvas.button({ href: "#offcanvasExample", controlfor: "offcanvasExample", marginEnd: 2 }, "Link with href"),
                            new bsts_1.b.offcanvas.button({ target: "#offcanvasExample", controlfor: "offcanvasExample" }, "Button with data-bs-target"),
                            new bsts_1.b.offcanvas.container({ id: "offcanvasExample", labelledby: "offcanvasExampleLabel" }, [
                                new bsts_1.b.offcanvas.header([
                                    new bsts_1.b.offcanvas.title({ id: "offcanvasExampleLabel" }, "Offcanvas"),
                                    new bsts_1.b.offcanvas.btnclose(),
                                ]),
                                new bsts_1.b.offcanvas.body([
                                    new bsts_1.h.div("Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc."),
                                    new bsts_1.b.dropdown.container({ marginTop: 3 }, [
                                        new bsts_1.b.dropdown.button({ color: "secondary" }, "Dropdown button"),
                                        new bsts_1.b.dropdown.menu([
                                            new bsts_1.b.dropdown.item({ href: "#" }, "Action"),
                                            new bsts_1.b.dropdown.item({ href: "#" }, "Another action"),
                                            new bsts_1.b.dropdown.item({ href: "#" }, "Something else here"),
                                        ]),
                                    ]),
                                ]),
                            ]),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Popovers"),
                new e.code({
                    outputAttr: { display: "flex", flex: "wrap", gap: 2 },
                    output: () => {
                        return ["top", "right", "bottom", "left"].map((i) => {
                            return new bsts_1.b.popover({
                                placement: i,
                                content: `${bsts_1.core.uppercaseFirst(i)} popover`,
                            }, new bsts_1.b.button({ color: "secondary" }, `Popover on ${i}`));
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Tooltips"),
                new e.code({
                    outputAttr: { display: "flex", flex: "wrap", gap: 2 },
                    output: () => {
                        return ["top", "right", "bottom", "left"].map((i) => {
                            return new bsts_1.b.tooltip({
                                placement: i,
                                content: `Tooltip on ${i}`,
                            }, new bsts_1.b.button({ color: "secondary" }, `Tooltip on ${i}`));
                        });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Toasts"),
                new e.code({
                    showCodepen: false,
                    output: () => {
                        return new bsts_1.b.toast.item({ debug: true, live: "assertive", atomic: true }, [
                            new bsts_1.b.toast.header([
                                new bsts_1.h.div({
                                    bgColor: "primary",
                                    rounded: true,
                                    marginEnd: 2,
                                    style: { width: "20px", height: "20px" },
                                }),
                                new bsts_1.h.strong({ marginEnd: "auto" }, "Bootstrap"),
                                new bsts_1.h.small("11 mins ago"),
                                new bsts_1.b.toast.btnclose(),
                            ]),
                            new bsts_1.b.toast.body("Hello, world! This is a toast message."),
                        ]);
                    },
                }),
            ]),
            //----------------------
        ];
    },
};
