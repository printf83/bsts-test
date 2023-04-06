import { b, h } from "@printf83/bsts";
import * as e from "../ctl/example/_index.js";
import { IAttrContent } from "../ctl/main/container.js";

export const doc_form_floatinglabel: IAttrContent = {
	title: "Floating labels",
	description: "Create beautifully simple form labels that float over your input fields.",
	item: [
		new e.title("Example"),
		new e.text(
			"Wrap a pair of {{<input class='form-control'>}} and {{<label>}} elements in {{.form-floating}} to enable floating labels with Bootstrap’s textual form fields. A {{placeholder}} is required on each {{<input>}} as our method of CSS-only floating labels uses the {{:placeholder-shown}} pseudo-element. Also note that the {{<input>}} must come first so we can utilize a sibling selector (e.g., {{~}})."
		),
		new e.code({
			output: () => {
				return [
					new b.formfloating({ marginBottom: 3 }, [
						new b.input({ type: "email", id: "floatingInput", placeholder: "name@example.com" }),
						new b.label({ for: "floatingInput" }, "Email address"),
					]),
					new b.formfloating([
						new b.input({ type: "password", id: "floatingPassword", placeholder: "Password" }),
						new b.label({ for: "floatingPassword" }, "Password"),
					]),
				];
			},
		}),
		new e.text("Using {{b.form.item}} :"),
		new e.code({
			output: () => {
				return [
					b.form.input({
						container: { marginBottom: 3 },
						type: "email",
						floatingLabel: true,
						label: "Email address",
						placeholder: "name@example.com",
					}),
					b.form.input({
						type: "password",
						label: "Password",
						floatingLabel: true,
					}),
				];
			},
		}),
		new e.text(
			"When there’s a {{value}} already defined, {{<label>}}s will automatically adjust to their floated position."
		),
		new e.code({
			output: () => {
				return b.form.input({
					type: "email",
					floatingLabel: true,
					label: "Input with value",
					value: "test@example.com",
				});
			},
		}),
		new e.text("Form validation styles also work as expected."),
		new e.code({
			output: () => {
				return b.form.input({
					type: "email",
					floatingLabel: true,
					label: "Invalid input",
					value: "test@example.com",
					isvalid: false,
				});
			},
		}),

		//-----------------------

		new e.title("Textareas"),
		new e.text("By default, {{<textarea>}}s with {{.form-control}} will be the same height as {{<input>}}s."),
		new e.code({
			output: () => {
				return b.form.textarea({
					floatingLabel: true,
					label: "Comments",
				});
			},
		}),
		new e.text(
			"To set a custom height on your {{<textarea>}}, do not use the {{rows}} attribute. Instead, set an explicit {{height}} (either inline or via custom CSS)."
		),
		new e.code({
			output: () => {
				return b.form.textarea({
					floatingLabel: true,
					label: "Comments",
					style: { height: "100px" },
				});
			},
		}),

		//-----------------------

		new e.title("Selects"),
		new e.text(
			"Other than {{.form-control}}, floating labels are only available on {{.form-selects}}. They work in the same way, but unlike {{<input>}}s, they’ll always show the {{<label>}} in its floated state. {{b::Selects with }}{{bc::size}}{{b:: and }}{{bc::multiple}}{{b:: are not supported}}."
		),
		new e.code({
			output: () => {
				return b.form.select({
					floatingLabel: true,
					label: "Work with selects",
					item: [
						{ selected: true, elem: "Open this select menu" },
						{ value: "1", elem: "One" },
						{ value: "2", elem: "Two" },
						{ value: "3", elem: "Three" },
					],
				});
			},
		}),

		//-----------------------

		new e.title("Disabled"),
		new e.text(
			"Add the {{disabled}} boolean attribute on an input, a textarea or a select to give it a grayed out appearance, remove pointer events, and prevent focusing."
		),
		new e.code({
			output: () => {
				return [
					b.form.input({
						container: { marginBottom: 3 },
						floatingLabel: true,
						label: "Email address",
						type: "email",
						disabled: true,
					}),
					b.form.textarea({
						container: { marginBottom: 3 },
						floatingLabel: true,
						label: "Comments",
						disabled: true,
					}),
					b.form.textarea({
						container: { marginBottom: 3 },
						floatingLabel: true,
						label: "Comments",
						disabled: true,
						style: { height: "100px" },
					}),
					b.form.select({
						floatingLabel: true,
						label: "Work with selects",
						disabled: true,
						item: [
							{ selected: true, elem: "Open this select menu" },
							{ value: "1", elem: "One" },
							{ value: "2", elem: "Two" },
							{ value: "3", elem: "Three" },
						],
					}),
				];
			},
		}),

		//-----------------------

		new e.title("Readonly plaintext"),
		new e.text(
			"Floating labels also support {{.form-control-plaintext}}, which can be helpful for toggling from an editable {{<input>}} to a plaintext value without affecting the page layout."
		),
		new e.code({
			output: () => {
				return [
					b.form.input({
						container: { marginBottom: 3 },
						floatingLabel: true,
						label: "Empty input",
						type: "email",
						readonly: true,
						plaintext: true,
					}),
					b.form.input({
						floatingLabel: true,
						label: "Input with value",
						type: "email",
						value: "name@example.com",
						readonly: true,
						plaintext: true,
					}),
				];
			},
		}),

		//-----------------------

		new e.title("CSS"),
		new e.subtitle("Sass variables"),
		new e.codepreview({
			type: "css",
			code: `
				$form-range-track-width:          100%;
				$form-range-track-height:         .5rem;
				$form-range-track-cursor:         pointer;
				$form-range-track-bg:             var(--#{$prefix}tertiary-bg);
				$form-range-track-border-radius:  1rem;
				$form-range-track-box-shadow:     $box-shadow-inset;

				$form-range-thumb-width:                   1rem;
				$form-range-thumb-height:                  $form-range-thumb-width;
				$form-range-thumb-bg:                      $component-active-bg;
				$form-range-thumb-border:                  0;
				$form-range-thumb-border-radius:           1rem;
				$form-range-thumb-box-shadow:              0 .1rem .25rem rgba($black, .1);
				$form-range-thumb-focus-box-shadow:        0 0 0 1px $body-bg, $input-focus-box-shadow;
				$form-range-thumb-focus-box-shadow-width:  $input-focus-width; // For focus box shadow issue in Edge
				$form-range-thumb-active-bg:               tint-color($component-active-bg, 70%);
				$form-range-thumb-disabled-bg:             var(--#{$prefix}secondary-color);
				$form-range-thumb-transition:              background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
			`,
		}),
	],
};
