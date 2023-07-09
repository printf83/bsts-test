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
exports.layout = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
exports.layout = {
    title: "Layout",
    description: "Give your forms some structure—from inline to horizontal to custom grid implementations—with Bootstrap form layout options.",
    item: () => {
        return [
            new e.section([
                new e.title("Forms"),
                new e.text("Every group of form fields should reside in a {{<form>}} element. Bootstrap provides no default styling for the {{<form>}} element, but there are some powerful browser features that are provided by default."),
                new e.ul({
                    item: [
                        "New to browser forms? Consider reviewing {{https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form::the MDN form docs}} for an overview and complete list of available attributes.",
                        "{{<button>}}s within a {{<form>}} default to {{type='submit'}}, so strive to be specific and always include a type.",
                    ],
                }),
                new e.text("Since Bootstrap applies {{display: block}} and {{width: 100%}} to almost all Bootstrap form controls, forms will by default stack vertically. Additional classes can be used to vary this layout on a per-form basis."),
            ]),
            //----------------------
            new e.section([
                new e.title("Utilities"),
                new e.text("{{nav:docs/utilities/spacing::Margin utilities}} are the easiest way to add some structure to forms. They provide basic grouping of labels, controls, optional form text, and form validation messaging. Bootstrap recommend sticking to {{margin-bottom}} utilities, and using a single direction throughout the form for consistency."),
                new e.text("Feel free to build your forms however you like, with {{<fieldset>}}s, {{<div>}}s, or nearly any other element."),
                new e.code({
                    output: () => {
                        return [
                            new bsts_1.h.div({ marginBottom: 3 }, [
                                new bsts_1.b.label({ for: "formGroupExampleInput", class: "form-label" }, "Example label"),
                                new bsts_1.b.input({ id: "formGroupExampleInput", placeholder: "Example input placeholder" }),
                            ]),
                            new bsts_1.h.div([
                                new bsts_1.b.label({ for: "formGroupExampleInput2", class: "form-label" }, "Another label"),
                                new bsts_1.b.input({ id: "formGroupExampleInput2", placeholder: "Another input placeholder" }),
                            ]),
                        ];
                    },
                }),
                new e.text("Using {{b.form.input}}"),
                new e.code({
                    output: () => {
                        return [
                            bsts_1.b.form.input({
                                container: { marginBottom: 3 },
                                label: "Example label",
                                placeholder: "Example input placeholder",
                            }),
                            bsts_1.b.form.input({ label: "Another label", placeholder: "Another input placeholder" }),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Form grid"),
                new e.text("More complex forms can be built using Bootstrap grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options. {{b::Requires the }}{{bc::$enable-grid-classes}}{{b:: Sass variable to be enabled}} (on by default)."),
                new e.code({
                    output: () => {
                        return new bsts_1.h.div({ row: true }, [
                            bsts_1.b.form.input({
                                container: { col: true },
                                label: "First name",
                                hideLabel: true,
                                placeholder: "First name",
                            }),
                            bsts_1.b.form.input({
                                container: { col: true },
                                label: "Last name",
                                hideLabel: true,
                                placeholder: "Last name",
                            }),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Gutters"),
                new e.text("By adding {{nav:docs/layout/gutters::gutter modifier classes}}, you can have control over the gutter width in as well the inline as block direction. {{b::Also requires the }}{{bc::$enable-grid-classes}}{{b:: Sass variable to be enabled}} (on by default)."),
                new e.code({
                    output: () => {
                        return new bsts_1.h.div({ row: true, gutter: 3 }, [
                            bsts_1.b.form.input({
                                container: { col: true },
                                label: "First name",
                                hideLabel: true,
                                placeholder: "First name",
                            }),
                            bsts_1.b.form.input({
                                container: { col: true },
                                label: "Last name",
                                hideLabel: true,
                                placeholder: "Last name",
                            }),
                        ]);
                    },
                }),
                new e.text("More complex layouts can also be created with the grid system."),
                new e.code({
                    output: () => {
                        return new bsts_1.h.form({ row: true, gutter: 3 }, [
                            bsts_1.b.form.input({
                                container: { col: "md-6" },
                                label: "Email",
                                type: "email",
                            }),
                            bsts_1.b.form.input({
                                container: { col: "md-6" },
                                label: "Password",
                                type: "password",
                            }),
                            bsts_1.b.form.input({
                                container: { col: 12 },
                                label: "Address",
                                placeholder: "1234 Main st",
                            }),
                            bsts_1.b.form.input({
                                container: { col: 12 },
                                label: "Address 2",
                                placeholder: "Apartment, studio, or floor",
                            }),
                            bsts_1.b.form.input({
                                container: { col: 5 },
                                label: "City",
                            }),
                            bsts_1.b.form.select({
                                container: { col: 4 },
                                label: "State",
                                item: [{ selected: true, elem: "Choose..." }, { elem: "..." }],
                            }),
                            bsts_1.b.form.input({
                                container: { col: 3 },
                                label: "Zip",
                            }),
                            bsts_1.b.form.check({ container: { col: 12 }, label: "Check me out" }),
                            new bsts_1.h.div({ col: 12 }, new bsts_1.b.button({ type: "submit" }, "Sign in")),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Horizontal form"),
                new e.text("Create horizontal forms with the grid by adding the {{.row}} class to form groups and using the {{.col-*-*}} classes to specify the width of your labels and controls. Be sure to add {{.col-form-label}} to your {{<label>}}s as well so they’re vertically centered with their associated form controls."),
                new e.text("At times, you maybe need to use margin or padding utilities to create that perfect alignment you need. For example, Bootstrap removed the {{padding-top}} on Bootstrap stacked radio inputs label to better align the text baseline."),
                new e.code({
                    output: () => {
                        return new bsts_1.h.form([
                            bsts_1.b.form.input({
                                container: { marginBottom: 3 },
                                label: "Email",
                                type: "email",
                                col1: 3,
                                col2: 9,
                            }),
                            bsts_1.b.form.input({
                                container: { marginBottom: 3 },
                                label: "Password",
                                type: "password",
                                col1: 3,
                                col2: 9,
                            }),
                            new bsts_1.h.fieldset({ row: true, marginBottom: 3 }, [
                                new bsts_1.h.legend({ class: "col-form-label", col: "sm-3", paddingTop: 0 }, "Radios"),
                                new bsts_1.h.div({ col: "sm-9" }, [
                                    bsts_1.b.form.check({
                                        type: "radio",
                                        name: "gridRadios",
                                        label: "First radio",
                                    }),
                                    bsts_1.b.form.check({
                                        type: "radio",
                                        name: "gridRadios",
                                        label: "Second radio",
                                    }),
                                    bsts_1.b.form.check({
                                        type: "radio",
                                        name: "gridRadios",
                                        label: "Third radio",
                                    }),
                                ]),
                            ]),
                            new bsts_1.h.div({ row: true }, bsts_1.b.form.check({ container: { col: "sm-9", offset: "sm-3" }, label: "Example checkbox" })),
                            new bsts_1.h.div({ col: 12 }, new bsts_1.b.button({ type: "submit" }, "Sign in")),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Horizontal form label sizing"),
                new e.text("Be sure to use {{.col-form-label-sm}} or {{.col-form-label-lg}} to your {{<label>}}s or {{<legend>}}s to correctly follow the size of {{.form-control-lg}} and {{.form-control-sm}}."),
                new e.code({
                    output: () => {
                        return [
                            bsts_1.b.form.input({
                                container: { row: true, marginBottom: 3 },
                                label: "Email",
                                weight: "sm",
                                placeholder: "col-form-label-sm",
                                col1: 3,
                                col2: 9,
                            }),
                            bsts_1.b.form.input({
                                container: { row: true, marginBottom: 3 },
                                label: "Email",
                                placeholder: "col-form-label",
                                col1: 3,
                                col2: 9,
                            }),
                            bsts_1.b.form.input({
                                label: "Email",
                                weight: "lg",
                                placeholder: "col-form-label-lg",
                                col1: 3,
                                col2: 9,
                            }),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Column sizing"),
                new e.text("As shown in the previous examples, Bootstrap grid system allows you to place any number of {{.col}}s within a {{.row}}. They’ll split the available width equally between them. You may also pick a subset of your columns to take up more or less space, while the remaining {{.col}}s equally split the rest, with specific column classes like {{.col-sm-6}}."),
                new e.code({
                    showViewport: true,
                    output: () => {
                        return new bsts_1.h.div({ row: true, gutter: 3 }, [
                            bsts_1.b.form.input({
                                container: { col: "sm-6" },
                                label: "City",
                                hideLabel: true,
                                placeholder: "City",
                            }),
                            bsts_1.b.form.input({
                                container: { col: "sm" },
                                label: "State",
                                hideLabel: true,
                                placeholder: "State",
                            }),
                            bsts_1.b.form.input({
                                container: { col: "sm" },
                                label: "Zip",
                                hideLabel: true,
                                placeholder: "Zip",
                            }),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Auto-sizing"),
                new e.text("The example below uses a flexbox utility to vertically center the contents and changes {{.col}} to {{.col-auto}} so that your columns only take up as much space as needed. Put another way, the column sizes itself based on the contents."),
                new e.code({
                    output: () => {
                        return new bsts_1.h.div({ row: true, gutterY: 2, gutterX: 3, alignItem: "center" }, [
                            bsts_1.b.form.input({
                                container: { col: "auto" },
                                label: "Name",
                                hideLabel: true,
                                placeholder: "Jane Doe",
                            }),
                            bsts_1.b.form.input({
                                container: { col: "auto" },
                                label: "Username",
                                hideLabel: true,
                                placeholder: "Username",
                                before: "@",
                            }),
                            bsts_1.b.form.select({
                                container: { col: "auto" },
                                label: "Preference",
                                hideLabel: true,
                                item: [
                                    { selected: true, elem: "Choose..." },
                                    { value: "1", elem: "One" },
                                    { value: "2", elem: "Two" },
                                    { value: "3", elem: "Three" },
                                ],
                            }),
                            bsts_1.b.form.check({ container: { col: "auto" }, label: "Remember me" }),
                            new bsts_1.h.div({ col: "auto" }, new bsts_1.b.button({ type: "submit" }, "Submit")),
                        ]);
                    },
                }),
                new e.text("You can then remix that once again with size-specific column classes."),
                new e.code({
                    output: () => {
                        return new bsts_1.h.div({ row: true, gutterY: 2, gutterX: 3, alignItem: "center" }, [
                            bsts_1.b.form.input({
                                container: { col: "sm-3" },
                                label: "Name",
                                hideLabel: true,
                                placeholder: "Jane Doe",
                            }),
                            bsts_1.b.form.input({
                                container: { col: "sm-3" },
                                label: "Username",
                                hideLabel: true,
                                placeholder: "Username",
                                before: "@",
                            }),
                            bsts_1.b.form.select({
                                container: { col: "sm-3" },
                                label: "Preference",
                                hideLabel: true,
                                item: [
                                    { selected: true, elem: "Choose..." },
                                    { value: "1", elem: "One" },
                                    { value: "2", elem: "Two" },
                                    { value: "3", elem: "Three" },
                                ],
                            }),
                            bsts_1.b.form.check({ container: { col: "auto" }, label: "Remember me" }),
                            new bsts_1.h.div({ col: "auto" }, new bsts_1.b.button({ type: "submit" }, "Submit")),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Inline forms"),
                new e.text("Use the {{.row-cols-*}} classes to create responsive horizontal layouts. By adding {{nav:docs/layout/gutters::gutter modifier classes}}, Bootstrap’ll have gutters in horizontal and vertical directions. On narrow mobile viewports, the {{.col-12}} helps stack the form controls and more. The {{.align-items-center}} aligns the form elements to the middle, making the {{.form-check}} align properly."),
                new e.code({
                    output: () => {
                        return new bsts_1.h.div({ row: true, rowCol: "lg-auto", gutter: 3, alignItem: "center" }, [
                            bsts_1.b.form.input({
                                container: { col: 12 },
                                label: "Username",
                                hideLabel: true,
                                placeholder: "Username",
                                before: "@",
                            }),
                            bsts_1.b.form.select({
                                container: { col: 12 },
                                label: "Preference",
                                hideLabel: true,
                                item: [
                                    { selected: true, elem: "Choose..." },
                                    { value: "1", elem: "One" },
                                    { value: "2", elem: "Two" },
                                    { value: "3", elem: "Three" },
                                ],
                            }),
                            bsts_1.b.form.check({ container: { col: 12 }, label: "Remember me" }),
                            new bsts_1.h.div({ col: 12 }, new bsts_1.b.button({ type: "submit" }, "Submit")),
                        ]);
                    },
                }),
            ]),
        ];
    },
};
