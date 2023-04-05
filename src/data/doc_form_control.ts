import { core, h, b } from "@printf83/bsts";
import * as e from "../ctl/example/_index.js";
import { IAttrContent } from "../ctl/main/container.js";

export const doc_form_control: IAttrContent = {
	title: "Form controls",
	description:
		"Give textual form controls like {{<input>}}s and {{<textarea>}}s an upgrade with custom styles, sizing, focus states, and more.",
	item: [
		new e.title("Example"),
		new e.text(
			"Form controls are styled with a mix of Sass and CSS variables, allowing them to adapt to color modes and support any customization method."
		),
		new e.code({
			output: () => {
				return [
					new h.div({ marginBottom: 3 }, [
						new b.label({ for: "exampleFormControlInput1", class: "form-label" }, "Email address"),
						new b.input({ type: "email", id: "exampleFormControlInput1", placeholder: "name@example.com" }),
					]),
					new h.div({ marginBottom: 3 }, [
						new b.label({ for: "exampleFormControlTextarea1", class: "form-label" }, "Example textarea"),
						new b.textarea({ id: "exampleFormControlTextarea1" }),
					]),
				];
			},
		}),
		new e.text("Using {{b.form.item}} and {{b.form.textarea}}"),
		new e.code({
			output: () => {
				return [
					b.form.input({
						container: { marginBottom: 3 },
						label: "Email address",
						placeholder: "name@example.com",
						type: "email",
					}),
					b.form.textarea({
						container: { marginBottom: 3 },
						label: "Example textarea",
					}),
				];
			},
		}),

		//-----------------------

		new e.title("Sizing"),
		new e.text("Set heights using classes like {{.form-control-lg}} and {{.form-control-sm}}."),
		new e.code({
			output: () => {
				return [
					new b.input({ weight: "lg", placeholder: ".form-control-lg" }),
					new b.input({ placeholder: "Default input" }),
					new b.input({ weight: "sm", placeholder: ".form-control-sm" }),
				];
			},
		}),

		//-----------------------

		new e.title("Form text"),
		new e.text("Block-level or inline-level form text can be created using {{.form-text}}."),
		new e.alert(
			{ color: "warning", callout: true },
			"Form text should be explicitly associated with the form control it relates to using the {{aria-labelledby}} (for mandatory information such as data format) or {{aria-describedby}} (for complementary information) attribute. This will ensure that assistive technologies—such as screen readers—will announce this form text when the user focuses or enters the control."
		),

		new e.text(
			"Form text below inputs can be styled with .form-text. If a block-level element will be used, a top margin is added for easy spacing from the inputs above."
		),
		new e.code({
			output: () => {
				return new h.div([
					new b.label({ for: "inputPassword5", class: "form-label" }, "Password"),
					new b.input({ type: "password", id: "inputPassword5", describedby: "passwordHelpBlock" }),
					new h.div(
						{ id: "passwordHelpBlock", class: "form-text" },
						"Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji."
					),
				]);
			},
		}),
		new e.text("Using {{b.form.item}}"),
		new e.code({
			output: () => {
				return b.form.input({
					label: "Password",
					type: "password",
					description:
						"Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.",
				});
			},
		}),

		new e.text(
			"Inline text can use any typical inline HTML element (be it a {{<span>}}, {{<small>}}, or something else) with nothing more than the {{.form-text}} class."
		),
		new e.code({
			output: () => {
				return new h.div({ row: true, gap: 3, alignItem: "center" }, [
					new h.div({ col: "auto" }, new b.label({ for: "inputPassword6", class: "form-label" }, "Password")),
					new h.div(
						{ col: "auto" },
						new b.input({ type: "password", id: "inputPassword6", describedby: "passwordHelpBlock" })
					),
					new h.div(
						{ col: "auto" },
						new h.span({ id: "passwordHelpInline", class: "form-text" }, " Must be 8-20 characters long. ")
					),
				]);
			},
		}),
		new e.text("Using {{b.form.item}}"),
		new e.code({
			output: () => {
				return b.form.input({
					container: { gap: 3, alignItem: "center" },
					label: "Password",
					type: "password",
					description: " Must be 8-20 characters long. ",
					col1: "auto",
					col2: "auto",
					col3: "auto",
				});
			},
		}),

		//-----------------------

		new e.title("Disabled"),
		new e.text(
			"Add the {{disabled}} boolean attribute on an input to give it a grayed out appearance, remove pointer events, and prevent focusing."
		),
		new e.code({
			output: () => {
				return [
					new b.input({ placeholder: "Disabled input", label: "Disabled input example", disabled: true }),
					new b.input({
						value: "Disabled readonly input",
						label: "Disabled readonly input example",
						disabled: true,
						readonly: true,
					}),
				];
			},
		}),

		//-----------------------

		new e.title("Readonly"),
		new e.text(
			"Add the {{readonly}} boolean attribute on an input to prevent modification of the input’s value. {{readonly}} inputs can still be focused and selected, while {{disabled}} inputs cannot."
		),
		new e.code({
			output: () => {
				return [
					new b.input({
						value: "Readonly input here...",
						label: "Readonly input example",
						readonly: true,
					}),
				];
			},
		}),

		//-----------------------

		new e.title("Readonly plain text"),
		new e.text(
			"If you want to have {{<input readonly>}} elements in your form styled as plain text, replace {{.form-control}} with {{.form-control-plaintext}} to remove the default form field styling and preserve the correct {{margin}} and {{padding}}."
		),
		new e.code({
			output: () => {
				return [
					new b.input({
						value: "Readonly input here...",
						label: "Readonly input example",
						readonly: true,
					}),
				];
			},
		}),

		//-----------------------

		new e.title("CSS"),
		new e.text(
			"Many form variables are set at a general level to be re-used and extended by individual form components. You’ll see these most often as {{$input-btn-*}} and {{$input-*}} variables."
		),

		new e.subtitle("Sass variables"),
		new e.text(
			"{{$input-btn-*}} variables are shared global variables between our {{https://getbootstrap.com/docs/5.3/components/buttons/::buttons}} and our form components. You’ll find these frequently reassigned as values to other component-specific variables."
		),

		new e.codepreview({
			type: "css",
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
