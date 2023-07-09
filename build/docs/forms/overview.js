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
exports.overview = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
exports.overview = {
    title: "Forms",
    description: "Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.",
    item: () => {
        return [
            new e.section([
                new e.item(new bsts_1.h.div({ row: true }, [
                    {
                        data: "docs/forms/control",
                        title: "Form control",
                        content: "Style textual inputs and textareas with support for multiple states.",
                    },
                    {
                        data: "docs/forms/select",
                        title: "Select",
                        content: "Improve browser default select elements with a custom initial appearance.",
                    },
                    {
                        data: "docs/forms/check_radio",
                        title: "Checks & radios",
                        content: "Use Bootstrap custom radio buttons and checkboxes in forms for selecting input options.",
                    },
                    {
                        data: "docs/forms/range",
                        title: "Range",
                        content: "Replace browser default range inputs with Bootstrap custom version.",
                    },
                    {
                        data: "docs/forms/input_group",
                        title: "Input group",
                        content: "Attach labels and buttons to your inputs for increased semantic value.",
                    },
                    {
                        data: "docs/forms/floating_label",
                        title: "Floating labels",
                        content: "Create beautifully simple form labels that float over your input fields.",
                    },
                    {
                        data: "docs/forms/layout",
                        title: "Layout",
                        content: "Create inline, horizontal, or complex grid-based layouts with your forms.",
                    },
                    {
                        data: "docs/forms/validation",
                        title: "Validation",
                        content: "Validate your forms with custom or native validation behaviors and styles.",
                    },
                ].map((i) => {
                    return new bsts_1.h.div({ col: "md-6", marginBottom: 3 }, new bsts_1.h.a({
                        display: "block",
                        textDecoration: "none",
                        on: {
                            click: () => {
                                document.dispatchEvent(new CustomEvent("bs.navigate", { detail: i.data }));
                            },
                        },
                    }, [
                        new bsts_1.h.strong({ display: "block", marginBottom: 0, h: 5 }, i.title),
                        new bsts_1.h.span({ textColor: "secondary" }, i.content),
                    ]));
                }))),
            ]),
            //----------------------
            new e.section([
                new e.title("Overview"),
                new e.text("Bootstrap’s form controls expand on {{nav:docs/content/reboot#forms::Bootstrap Rebooted form styles}} with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices."),
                new e.text("Be sure to use an appropriate {{type}} attribute on all inputs (e.g., {{email}} for email address or {{number}} for numerical information) to take advantage of newer input controls like email verification, number selection, and more."),
                new e.text("Here’s a quick example to demonstrate Bootstrap’s form styles. Keep reading for documentation on required classes, form layout, and more."),
                new e.code({
                    output: () => {
                        return new bsts_1.h.form([
                            new bsts_1.h.div({ marginBottom: 3 }, [
                                new bsts_1.b.label({ for: "exampleInputEmail1", class: "form-label" }, "Email address"),
                                new bsts_1.b.input({ type: "email", id: "exampleInputEmail1", describedby: "emailHelp" }),
                                new bsts_1.h.div({ id: "emailHelp", class: "form-text" }, "Bootstrap'll never share your email with anyone else."),
                            ]),
                            new bsts_1.h.div({ marginBottom: 3 }, [
                                new bsts_1.b.label({ for: "exampleInputPassword1", class: "form-label" }, "Password"),
                                new bsts_1.b.input({ type: "password", id: "exampleInputPassword1" }),
                            ]),
                            new bsts_1.h.div({ marginBottom: 3, class: "form-check" }, [
                                new bsts_1.b.input({ type: "checkbox", id: "exampleCheck1" }),
                                new bsts_1.b.label({ for: "exampleCheck1", class: "form-check-label" }, "Check me out"),
                            ]),
                            new bsts_1.b.button({ type: "submit" }, "Submit"),
                        ]);
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Function {{B.Form}}"),
                new e.text("{{bsts}} create {{B.Form}} function to help you create same output as above. This function automaticly create {{id}} for related component. You still can give an {{id}} and {{B.Form}} will use it to related component."),
                new e.text("Using {{b.form.input}} with {{id}}"),
                new e.code({
                    output: () => {
                        return new bsts_1.h.form([
                            bsts_1.b.form.input({
                                id: "easy-email-form",
                                container: { marginBottom: 3 },
                                label: "Email address",
                                description: "Bootstrap'll never share your email with anyone else.",
                                type: "email",
                            }),
                            bsts_1.b.form.input({
                                id: "easy-password-form",
                                container: { marginBottom: 3 },
                                label: "Password",
                                type: "password",
                            }),
                            bsts_1.b.form.check({
                                id: "easy-check-form",
                                container: { marginBottom: 3 },
                                label: "Check me out",
                                type: "checkbox",
                            }),
                            new bsts_1.b.button({ type: "submit" }, "Submit"),
                        ]);
                    },
                }),
                new e.text("Using {{b.form.input}} without {{id}}"),
                new e.code({
                    output: () => {
                        return new bsts_1.h.form([
                            bsts_1.b.form.input({
                                container: { marginBottom: 3 },
                                label: "Email address",
                                description: "Bootstrap'll never share your email with anyone else.",
                                type: "email",
                            }),
                            bsts_1.b.form.input({
                                container: { marginBottom: 3 },
                                label: "Password",
                                type: "password",
                            }),
                            bsts_1.b.form.check({
                                container: { marginBottom: 3 },
                                label: "Check me out",
                                type: "checkbox",
                            }),
                            new bsts_1.b.button({ type: "submit" }, "Submit"),
                        ]);
                    },
                }),
                new e.item(new bsts_1.h.details([
                    new bsts_1.h.summary({ textColor: "primary" }, "List of function to help create component:"),
                    new bsts_1.h.p({ marginY: 3 }, new bsts_1.h.ul({
                        item: [
                            "{{b.form.input}} - Create input (text,number,date and others) component.",
                            "{{b.form.textarea}} - Create textarea component.",
                            "{{b.form.select}} - Create select component.",
                            "{{b.form.check}} - Create checkbox,radio and switch component.",
                            "{{b.form.toggle}} - Create checkbox or radio toggle component. {{b::Heads Up!}} This function return an array. Please flatten the array before you pass it into {{core.build}}",
                            "{{b.form.floatinglabel.input}} - Create input (text,number,date and others) component with floating label.",
                            "{{b.form.floatinglabel.textarea}} - Create textarea component with floating label.",
                            "{{b.form.floatinglabel.select}} - Create select component with floating label.",
                        ],
                    })),
                ])),
            ]),
            //----------------------
            new e.section([
                new e.title("Disabled forms"),
                new e.text("Add the {{disabled:true}} property on an {{b.input}} to prevent user interactions and make it appear lighter."),
                new e.code({
                    output: () => {
                        return new bsts_1.b.input({
                            type: "text",
                            id: "disabledInput",
                            placeholder: "Disabled input here...",
                            disabled: true,
                        });
                    },
                }),
                new e.text("Add the {{disabled:true}} to a {{h.fieldset}} to disable all the controls within. Browsers treat all native form controls ({{h.input}}, {{b.input}}, {{h.select}}, {{b.select}}, {{h.button}}, and {{b.button}} elements) inside a {{h.fieldset({disabled:true})}} as disabled, preventing both keyboard and mouse interactions on them."),
                new e.text("However, if your form also includes custom button-like elements such as {{b.button({href:''})}}, these will only be given a style of {{pointer-events: none}}, meaning they are still focusable and operable using the keyboard. In this case, you must manually modify these controls by omit the {{href}} property or set {{disabled:true}} to prevent them from receiving focus."),
                new e.code({
                    output: () => {
                        return new bsts_1.h.form(new bsts_1.h.fieldset({ disabled: true }, [
                            new bsts_1.h.legend("Disabled fieldset example"),
                            bsts_1.b.form.input({
                                container: { marginBottom: 3 },
                                label: "Disabled input",
                                placeholder: "Disabled input",
                                type: "text",
                            }),
                            bsts_1.b.form.select({
                                container: { marginBottom: 3 },
                                label: "Disabled select menu",
                                item: [{ elem: "Disabled select" }],
                            }),
                            bsts_1.b.form.check({
                                container: { marginBottom: 3 },
                                label: "Check me out",
                                type: "checkbox",
                            }),
                            new bsts_1.b.button({ type: "submit" }, "Submit"),
                        ]));
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Accessibility"),
                new e.text("Ensure that all form controls have an appropriate accessible name so that their purpose can be conveyed to users of assistive technologies. The simplest way to achieve this is to use a {{label}} property on {{B.Form}}, or—in the case of buttons—to include sufficiently descriptive text as part of the {{b.button}} content."),
                new e.text("For situations where it’s not possible to include a visible {{h.label}} or {{b.label}} or appropriate text content, there are alternative ways of still providing an accessible name, such as:"),
                new e.ul({
                    item: [
                        "{{h.label}} component hidden using the {{visually:'hidden'}} property",
                        "Pointing to an existing component that can act as a label using {{labelledby}}",
                        "Providing a {{title}} attribute",
                        "Explicitly setting the accessible name on an element using {{label}}",
                    ],
                }),
                new e.text("If none of these are present, assistive technologies may resort to using the {{placeholder}} attribute as a fallback for the accessible name on {{h.input}} or {{b.input}} and {{h.textarea}} or {{b.textarea}} component. The examples in this section provide a few suggested, case-specific approaches."),
                new e.text("While using visually hidden content ({{visually:'hidden'}}, {{label}}, and even {{placeholder}} content, which disappears once a form field has content) will benefit assistive technology users, a lack of visible label text may still be problematic for certain users. Some form of visible label is generally the best approach, both for accessibility and usability."),
            ]),
            //----------------------
            new e.section([
                new e.title("CSS"),
                new e.text("Many form variables are set at a general level to be re-used and extended by individual form components. You’ll see these most often as {{$input-btn-*}} and {{$input-*}} variables."),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Sass variables"),
                new e.text("{{$input-btn-*}} variables are shared global variables between Bootstrap {{nav:docs/components/button::buttons}} and Bootstrap form components. You’ll find these frequently reassigned as values to other component-specific variables."),
                new e.codepreview({
                    type: "css",
                    title: "scss/_variables.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
                    code: `
						$input-btn-padding-y:         .375rem;
						$input-btn-padding-x:         .75rem;
						$input-btn-font-family:       null;
						$input-btn-font-size:         $font-size-base;
						$input-btn-line-height:       $line-height-base;

						$input-btn-focus-width:         $focus-ring-width;
						$input-btn-focus-color-opacity: $focus-ring-opacity;
						$input-btn-focus-color:         $focus-ring-color;
						$input-btn-focus-blur:          $focus-ring-blur;
						$input-btn-focus-box-shadow:    $focus-ring-box-shadow;

						$input-btn-padding-y-sm:      .25rem;
						$input-btn-padding-x-sm:      .5rem;
						$input-btn-font-size-sm:      $font-size-sm;

						$input-btn-padding-y-lg:      .5rem;
						$input-btn-padding-x-lg:      1rem;
						$input-btn-font-size-lg:      $font-size-lg;

						$input-btn-border-width:      var(--#{$prefix}border-width);
					`,
                }),
            ]),
        ];
    },
};
