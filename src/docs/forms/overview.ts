import { h, b } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const overview: IAttrContent = {
	title: "Forms",
	description:
		"Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.",
	item: [
		new e.item(
			new h.div(
				{ row: true },
				[
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
						content:
							"Use Bootstrap custom radio buttons and checkboxes in forms for selecting input options.",
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
					return new h.div(
						{ col: "md-6", marginBottom: 3 },
						new h.a(
							{
								display: "block",
								textDecoration: "none",
								on: {
									click: () => {
										document.dispatchEvent(new CustomEvent("bs-navigate", { detail: i.data }));
									},
								},
							},
							[
								new h.strong({ display: "block", marginBottom: 0, h: 5 }, i.title),
								new h.span({ textColor: "secondary" }, i.content),
							]
						)
					);
				})
			)
		),
		new e.title("Overview"),
		new e.text(
			"Bootstrap’s form controls expand on {{nav:docs/content/reboot#forms::Bootstrap Rebooted form styles}} with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices."
		),
		new e.text(
			"Be sure to use an appropriate {{type}} attribute on all inputs (e.g., {{email}} for email address or {{number}} for numerical information) to take advantage of newer input controls like email verification, number selection, and more."
		),
		new e.text(
			"Here’s a quick example to demonstrate Bootstrap’s form styles. Keep reading for documentation on required classes, form layout, and more."
		),
		new e.code({
			output: () => {
				return new h.form([
					new h.div({ marginBottom: 3 }, [
						new b.label({ for: "exampleInputEmail1", class: "form-label" }, "Email address"),
						new b.input({ type: "email", id: "exampleInputEmail1", describedby: "emailHelp" }),
						new h.div(
							{ id: "emailHelp", class: "form-text" },
							"Bootstrap'll never share your email with anyone else."
						),
					]),
					new h.div({ marginBottom: 3 }, [
						new b.label({ for: "exampleInputPassword1", class: "form-label" }, "Password"),
						new b.input({ type: "password", id: "exampleInputPassword1" }),
					]),
					new h.div({ marginBottom: 3, class: "form-check" }, [
						new b.input({ type: "checkbox", id: "exampleCheck1" }),
						new b.label({ for: "exampleCheck1", class: "form-check-label" }, "Check me out"),
					]),
					new b.button({ type: "submit" }, "Submit"),
				]);
			},
		}),
		new e.text("Using {{b.form.item}}"),
		new e.code({
			output: () => {
				return new h.form([
					b.Form.Input({
						container: { marginBottom: 3 },
						label: "Email address",
						description: "Bootstrap'll never share your email with anyone else.",
						type: "email",
					}),
					b.Form.Input({
						container: { marginBottom: 3 },
						label: "Password",
						type: "password",
					}),
					b.Form.Check({
						container: { marginBottom: 3 },
						label: "Check me out",
						type: "checkbox",
					}),
					new b.button({ type: "submit" }, "Submit"),
				]);
			},
		}),

		//-----------------------

		new e.title("Disabled forms"),
		new e.text(
			"Add the {{disabled}} boolean attribute on an input to prevent user interactions and make it appear lighter."
		),
		new e.codepreview({
			type: "html",
			code: `
			    <input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled>
			`,
		}),
		new e.text(
			"Add the {{disabled}} attribute to a {{<fieldset>}} to disable all the controls within. Browsers treat all native form controls ({{<input>}}, {{<select>}}, and {{<button>}} elements) inside a {{<fieldset disabled>}} as disabled, preventing both keyboard and mouse interactions on them."
		),
		new e.text(
			"However, if your form also includes custom button-like elements such as {{<a class='btn btn-*'>...</a>}}, these will only be given a style of {{pointer-events: none}}, meaning they are still focusable and operable using the keyboard. In this case, you must manually modify these controls by adding {{tabindex='-1'}} to prevent them from receiving focus and {{aria-disabled='disabled'}} to signal their state to assistive technologies."
		),

		new e.code({
			output: () => {
				return new h.form(
					new h.fieldset({ disabled: true }, [
						new h.legend("Disabled fieldset example"),
						b.Form.Input({
							container: { marginBottom: 3 },
							label: "Disabled input",
							placeholder: "Disabled input",
							type: "text",
						}),
						b.Form.Select({
							container: { marginBottom: 3 },
							label: "Disabled select menu",
							item: [{ elem: "Disabled select" }],
						}),
						b.Form.Check({
							container: { marginBottom: 3 },
							label: "Check me out",
							type: "checkbox",
						}),
						new b.button({ type: "submit" }, "Submit"),
					])
				);
			},
		}),

		//-----------------------

		new e.title("Accessibility"),
		new e.text(
			"Ensure that all form controls have an appropriate accessible name so that their purpose can be conveyed to users of assistive technologies. The simplest way to achieve this is to use a {{<label>}} element, or—in the case of buttons—to include sufficiently descriptive text as part of the {{<button>...</button>}} content."
		),
		new e.text(
			"For situations where it’s not possible to include a visible {{<label>}} or appropriate text content, there are alternative ways of still providing an accessible name, such as:"
		),
		new e.ul({
			item: [
				"{{<label>}} elements hidden using the {{.visually-hidden}} class",
				"Pointing to an existing element that can act as a label using {{aria-labelledby}}",
				"Providing a {{title}} attribute",
				"Explicitly setting the accessible name on an element using {{aria-label}}",
			],
		}),
		new e.text(
			"If none of these are present, assistive technologies may resort to using the {{placeholder}} attribute as a fallback for the accessible name on {{<input>}} and {{<textarea>}} elements. The examples in this section provide a few suggested, case-specific approaches."
		),
		new e.text(
			"While using visually hidden content ({{.visually-hidden}}, {{aria-label}}, and even {{placeholder}} content, which disappears once a form field has content) will benefit assistive technology users, a lack of visible label text may still be problematic for certain users. Some form of visible label is generally the best approach, both for accessibility and usability."
		),

		//-----------------------

		new e.title("CSS"),
		new e.text(
			"Many form variables are set at a general level to be re-used and extended by individual form components. You’ll see these most often as {{$input-btn-*}} and {{$input-*}} variables."
		),

		new e.subtitle("Sass variables"),
		new e.text(
			"{{$input-btn-*}} variables are shared global variables between Bootstrap {{nav:docs/components/button::buttons}} and Bootstrap form components. You’ll find these frequently reassigned as values to other component-specific variables."
		),

		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss",
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
	],
};
