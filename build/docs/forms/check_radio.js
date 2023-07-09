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
exports.check_radio = void 0;
const bsts_1 = require("@printf83/bsts");
const e = __importStar(require("../../ctl/example/_index.js"));
exports.check_radio = {
    title: "Checks and radios",
    description: "Create consistent cross-browser and cross-device checkboxes and radios with Bootstrap completely rewritten checks component.",
    item: () => {
        return [
            new e.section([
                new e.title("Approach"),
                new e.text("Browser default checkboxes and radios are replaced with the help of .form-check, a series of classes for both input types that improves the layout and behavior of their HTML elements, that provide greater customization and cross browser consistency. Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many."),
                new e.text("Structurally, Bootstrap {{<input>}}s and {{<label>}}s are sibling elements as opposed to an {{<input>}} within a {{<label>}}. This is slightly more verbose as you must specify {{id}} and {{for}} attributes to relate the {{<input>}} and {{<label>}}. Bootstrap use the sibling selector ({{~}}) for all Bootstrap {{<input>}} states, like {{:checked}} or {{:disabled}}. When combined with the {{.form-check-label}} class, Bootstrap can easily style the text for each item based on the {{<input>}}’s state."),
                new e.text("Bootstrap checks use custom Bootstrap icons to indicate checked or indeterminate states."),
            ]),
            //----------------------
            new e.section([
                new e.title("Checks"),
                new e.code({
                    output: () => {
                        return [
                            new bsts_1.h.div({ class: "form-check" }, [
                                new bsts_1.b.input({ type: "checkbox", id: "flexCheckDefault" }),
                                new bsts_1.b.label({ for: "flexCheckDefault", class: "form-check-label" }, "Default checkbox"),
                            ]),
                            new bsts_1.h.div({ class: "form-check" }, [
                                new bsts_1.b.input({ type: "checkbox", id: "flexCheckChecked", checked: true }),
                                new bsts_1.b.label({ for: "flexCheckChecked", class: "form-check-label" }, "Checked checkbox"),
                            ]),
                        ];
                    },
                }),
                new e.text("Using {{b.form.check}}"),
                new e.code({
                    output: () => {
                        return [
                            bsts_1.b.form.check({ type: "checkbox", label: "Default checkbox" }),
                            bsts_1.b.form.check({ type: "checkbox", label: "Checked checkbox", checked: true }),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Indeterminate"),
                new e.text("Checkboxes can utilize the {{:indeterminate}} pseudo class when manually set via JavaScript (there is no available HTML attribute for specifying it)."),
                new e.code({
                    output: () => {
                        return bsts_1.b.form.check({ type: "checkbox", label: "Indeterminate checkbox", indeterminate: true });
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Disabled"),
                new e.text("Add the {{disabled}} attribute and the associated {{<label>}}s are automatically styled to match with a lighter color to help indicate the input’s state."),
                new e.code({
                    output: () => {
                        return [
                            bsts_1.b.form.check({
                                type: "checkbox",
                                label: "Disabled indeterminate checkbox",
                                indeterminate: true,
                                disabled: true,
                            }),
                            bsts_1.b.form.check({
                                type: "checkbox",
                                label: "Disabled checkbox",
                                disabled: true,
                            }),
                            bsts_1.b.form.check({
                                type: "checkbox",
                                label: "Disabled checked checkbox",
                                checked: true,
                                disabled: true,
                            }),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Radios"),
                new e.code({
                    output: () => {
                        return [
                            new bsts_1.h.div({ class: "form-check" }, [
                                new bsts_1.b.input({ type: "radio", id: "flexRadioDefault", name: "exampeRadioGroup1" }),
                                new bsts_1.b.label({ for: "flexRadioDefault", class: "form-check-label" }, "Default radio"),
                            ]),
                            new bsts_1.h.div({ class: "form-check" }, [
                                new bsts_1.b.input({
                                    type: "radio",
                                    id: "flexRadioDefault2",
                                    name: "exampeRadioGroup1",
                                    checked: true,
                                }),
                                new bsts_1.b.label({ for: "flexRadioDefault2", class: "form-check-label" }, "Default checked radio"),
                            ]),
                        ];
                    },
                }),
                new e.text("Using {{b.form.check}}"),
                new e.code({
                    output: () => {
                        return [
                            bsts_1.b.form.check({ type: "radio", name: "exampeRadioGroup2", label: "Default radio" }),
                            bsts_1.b.form.check({
                                type: "radio",
                                name: "exampeRadioGroup2",
                                label: "Default checked radio",
                                checked: true,
                            }),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section({ id: "radio_disabled" }, [
                new e.subtitle({ id: "radio_disabled" }, "Disabled"),
                new e.text("Add the {{disabled}} attribute and the associated {{<label>}}s are automatically styled to match with a lighter color to help indicate the input’s state."),
                new e.code({
                    output: () => {
                        return [
                            bsts_1.b.form.check({
                                type: "radio",
                                name: "exampeRadioGroup3",
                                label: "Disabled radio",
                                disabled: true,
                            }),
                            bsts_1.b.form.check({
                                type: "radio",
                                name: "exampeRadioGroup3",
                                label: "Disabled checked radio",
                                checked: true,
                                disabled: true,
                            }),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Switches"),
                new e.text("A switch has the markup of a custom checkbox but uses the {{.form-switch}} class to render a toggle switch. Consider using {{role='switch'}} to more accurately convey the nature of the control to assistive technologies that support this role. In older assistive technologies, it will simply be announced as a regular checkbox as a fallback. Switches also support the {{disabled}} attribute."),
                new e.code({
                    output: () => {
                        return [
                            bsts_1.b.form.check({ type: "checkbox", switch: true, label: "Default switch checkbox input" }),
                            bsts_1.b.form.check({
                                type: "checkbox",
                                switch: true,
                                label: "Checked switch checkbox input",
                                checked: true,
                            }),
                            bsts_1.b.form.check({
                                type: "checkbox",
                                switch: true,
                                label: "Disabled switch checkbox input",
                                disabled: true,
                            }),
                            bsts_1.b.form.check({
                                type: "checkbox",
                                switch: true,
                                label: "Disabled switch checkbox input",
                                checked: true,
                                disabled: true,
                            }),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Default (stacked)"),
                new e.text("By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced with {{.form-check}}."),
                new e.code({
                    output: () => {
                        return [
                            bsts_1.b.form.check({ type: "checkbox", label: "Default checkbox" }),
                            bsts_1.b.form.check({ type: "checkbox", label: "Disabled checkbox", disabled: true }),
                        ];
                    },
                }),
                new e.code({
                    output: () => {
                        return [
                            bsts_1.b.form.check({
                                type: "radio",
                                name: "exampeRadioGroup4",
                                label: "Default radio",
                                checked: true,
                            }),
                            bsts_1.b.form.check({ type: "radio", name: "exampeRadioGroup4", label: "Second default radio" }),
                            bsts_1.b.form.check({
                                type: "radio",
                                name: "exampeRadioGroup4",
                                label: "Disabled radio",
                                disabled: true,
                            }),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Inline"),
                new e.text("Group checkboxes or radios on the same horizontal row by adding {{.form-check-inline}} to any {{.form-check}}."),
                new e.code({
                    outputAttr: { display: "flex", flex: "wrap", gap: 2 },
                    output: () => {
                        return [
                            bsts_1.b.form.check({ type: "checkbox", label: "1", inline: true }),
                            bsts_1.b.form.check({ type: "checkbox", label: "2", inline: true }),
                            bsts_1.b.form.check({ type: "checkbox", label: "3 (disabled)", disabled: true, inline: true }),
                        ];
                    },
                }),
                new e.code({
                    outputAttr: { display: "flex", flex: "wrap", gap: 2 },
                    output: () => {
                        return [
                            bsts_1.b.form.check({ type: "radio", name: "exampeRadioGroup5", label: "1", inline: true }),
                            bsts_1.b.form.check({ type: "radio", name: "exampeRadioGroup5", label: "2", inline: true }),
                            bsts_1.b.form.check({
                                type: "radio",
                                name: "exampeRadioGroup5",
                                label: "3 (disabled)",
                                disabled: true,
                                inline: true,
                            }),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Reverse"),
                new e.text("Put your checkboxes, radios, and switches on the opposite side with the .form-check-reverse modifier class."),
                new e.code({
                    output: () => {
                        return [
                            bsts_1.b.form.check({ type: "checkbox", label: "Reverse checkbox", reverse: true }),
                            bsts_1.b.form.check({
                                type: "checkbox",
                                label: "Disabled reverse checkbox",
                                disabled: true,
                                reverse: true,
                            }),
                            bsts_1.b.form.check({
                                type: "checkbox",
                                label: "Reverse switch checkbox input",
                                switch: true,
                                reverse: true,
                            }),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Without labels"),
                new e.text("Omit the wrapping {{.form-check}} for checkboxes and radios that have no label text. Remember to still provide some form of accessible name for assistive technologies (for instance, using {{aria-label}}). See the {{nav:docs/forms/overview#accessibility::forms overview accessibility}} section for details."),
                new e.code({
                    output: () => {
                        return [
                            bsts_1.b.form.check({ type: "checkbox", label: "Checkbox without label", hideLabel: true }),
                            bsts_1.b.form.check({
                                type: "radio",
                                label: "Radio without label",
                                name: "exampeRadioGroup6",
                                hideLabel: true,
                            }),
                            bsts_1.b.form.check({
                                type: "checkbox",
                                label: "Switch without label",
                                switch: true,
                                hideLabel: true,
                            }),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.title("Toggle buttons"),
                new e.text("Create button-like checkboxes and radio buttons by using {{.btn}} styles rather than {{.form-check-label}} on the {{<label>}} elements. These toggle buttons can further be grouped in a {{nav:docs/components/button_group::button group}} if needed."),
                new e.alert({ color: "danger", callout: true }, "{{b::Heads up!}} The {{b.form.toggle}} function return an array. You need to flat the array before add the result into your array. For this example, Bootstrap use the {{...}} to flatten the array."),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Checkbox toggle buttons"),
                new e.code({
                    output: () => {
                        return bsts_1.b.form.toggle({
                            type: "checkbox",
                            label: "Single toggle",
                            container: { color: "primary" },
                        });
                    },
                }),
                new e.code({
                    output: () => {
                        return bsts_1.b.form.toggle({
                            type: "checkbox",
                            label: "Checked",
                            container: { color: "primary" },
                            checked: true,
                        });
                    },
                }),
                new e.code({
                    output: () => {
                        return bsts_1.b.form.toggle({
                            type: "checkbox",
                            label: "Disabled",
                            container: { color: "primary" },
                            disabled: true,
                        });
                    },
                }),
                new e.alert({ color: "info", callout: true }, " Visually, these checkbox toggle buttons are identical to the {{nav:docs/components/button#button_plugin::button plugin toggle buttons}}. However, they are conveyed differently by assistive technologies: the checkbox toggles will be announced by screen readers as “checked”/“not checked” (since, despite their appearance, they are fundamentally still checkboxes), whereas the button plugin toggle buttons will be announced as “button”/“button pressed”. The choice between these two approaches will depend on the type of toggle you are creating, and whether or not the toggle will make sense to users when announced as a checkbox or as an actual button."),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Radio toggle buttons"),
                new e.code({
                    outputAttr: { display: "flex", flex: "wrap", gap: 2 },
                    output: () => {
                        return [
                            ...bsts_1.b.form.toggle({
                                type: "radio",
                                label: "Checked",
                                name: "exampeRadioGroup7",
                                checked: true,
                                container: { color: "secondary" },
                            }),
                            ...bsts_1.b.form.toggle({
                                type: "radio",
                                label: "Radio",
                                name: "exampeRadioGroup7",
                                container: { color: "secondary" },
                            }),
                            ...bsts_1.b.form.toggle({
                                type: "radio",
                                label: "Disabled",
                                name: "exampeRadioGroup7",
                                disabled: true,
                                container: { color: "secondary" },
                            }),
                            ...bsts_1.b.form.toggle({
                                type: "radio",
                                label: "Radio",
                                name: "exampeRadioGroup7",
                                container: { color: "secondary" },
                            }),
                        ];
                    },
                }),
            ]),
            //----------------------
            new e.section([
                new e.subtitle("Outlined styles"),
                new e.text("Different variants of {{.btn}}, such at the various outlined styles, are supported."),
                new e.code({
                    outputAttr: { display: "flex", flex: "wrap", gap: 2 },
                    output: () => {
                        return [
                            ...bsts_1.b.form.toggle({
                                type: "checkbox",
                                label: "Single toggle",
                                container: { color: "primary", outline: true },
                            }),
                            new bsts_1.h.br(),
                            ...bsts_1.b.form.toggle({
                                type: "checkbox",
                                label: "Checked",
                                checked: true,
                                container: { color: "secondary", outline: true },
                            }),
                            new bsts_1.h.br(),
                            ...bsts_1.b.form.toggle({
                                type: "radio",
                                label: "Checked success radio",
                                name: "exampeRadioGroup8",
                                checked: true,
                                container: { color: "success", outline: true },
                            }),
                            ...bsts_1.b.form.toggle({
                                type: "radio",
                                label: "Radio",
                                name: "exampeRadioGroup8",
                                container: { color: "danger", outline: true },
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
                new e.text("Variables for checks:"),
                new e.codepreview({
                    type: "css",
                    title: "scss/_variables.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
                    code: `
						$form-check-input-width:                  1em;
						$form-check-min-height:                   $font-size-base * $line-height-base;
						$form-check-padding-start:                $form-check-input-width + .5em;
						$form-check-margin-bottom:                .125rem;
						$form-check-label-color:                  null;
						$form-check-label-cursor:                 null;
						$form-check-transition:                   null;

						$form-check-input-active-filter:          brightness(90%);

						$form-check-input-bg:                     $input-bg;
						$form-check-input-border:                 var(--#{$prefix}border-width) solid var(--#{$prefix}border-color);
						$form-check-input-border-radius:          .25em;
						$form-check-radio-border-radius:          50%;
						$form-check-input-focus-border:           $input-focus-border-color;
						$form-check-input-focus-box-shadow:       $focus-ring-box-shadow;

						$form-check-input-checked-color:          $component-active-color;
						$form-check-input-checked-bg-color:       $component-active-bg;
						$form-check-input-checked-border-color:   $form-check-input-checked-bg-color;
						$form-check-input-checked-bg-image:       url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='#{$form-check-input-checked-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/></svg>");
						$form-check-radio-checked-bg-image:       url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='2' fill='#{$form-check-input-checked-color}'/></svg>");

						$form-check-input-indeterminate-color:          $component-active-color;
						$form-check-input-indeterminate-bg-color:       $component-active-bg;
						$form-check-input-indeterminate-border-color:   $form-check-input-indeterminate-bg-color;
						$form-check-input-indeterminate-bg-image:       url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='#{$form-check-input-indeterminate-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/></svg>");

						$form-check-input-disabled-opacity:        .5;
						$form-check-label-disabled-opacity:        $form-check-input-disabled-opacity;
						$form-check-btn-check-disabled-opacity:    $btn-disabled-opacity;

						$form-check-inline-margin-end:    1rem;
					`,
                }),
                new e.text("Variables for switches:"),
                new e.codepreview({
                    type: "css",
                    title: "scss/_variables.scss",
                    source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
                    code: `
						$form-switch-color:               rgba($black, .25);
						$form-switch-width:               2em;
						$form-switch-padding-start:       $form-switch-width + .5em;
						$form-switch-bg-image:            url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-color}'/></svg>");
						$form-switch-border-radius:       $form-switch-width;
						$form-switch-transition:          background-position .15s ease-in-out;

						$form-switch-focus-color:         $input-focus-border-color;
						$form-switch-focus-bg-image:      url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-focus-color}'/></svg>");

						$form-switch-checked-color:       $component-active-color;
						$form-switch-checked-bg-image:    url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-checked-color}'/></svg>");
						$form-switch-checked-bg-position: right center;
					`,
                }),
            ]),
        ];
    },
};
