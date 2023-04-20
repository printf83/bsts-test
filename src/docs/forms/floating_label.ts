import { b, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const floating_label: IAttrContent = {
	title: "Floating labels",
	description: "Create beautifully simple form labels that float over your input fields.",
	item: [
		new e.title("Example"),
		new e.text(
			"Wrap a pair of {{<input class='form-control'>}} and {{<label>}} elements in {{.form-floating}} to enable floating labels with Bootstrap’s textual form fields. A {{placeholder}} is required on each {{<input>}} as Bootstrap method of CSS-only floating labels uses the {{:placeholder-shown}} pseudo-element. Also note that the {{<input>}} must come first so we can utilize a sibling selector (e.g., {{~}})."
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
		new e.text("Using {{b.Form.FloatingLabel.Input}} :"),
		new e.code({
			output: () => {
				return [
					b.Form.FloatingLabel.Input({
						container: { marginBottom: 3 },
						type: "email",
						label: "Email address",
						placeholder: "name@example.com",
					}),
					b.Form.FloatingLabel.Input({
						type: "password",
						label: "Password",
					}),
				];
			},
		}),
		new e.text(
			"When there’s a {{value}} already defined, {{<label>}}s will automatically adjust to their floated position."
		),
		new e.code({
			output: () => {
				return b.Form.FloatingLabel.Input({
					type: "email",
					label: "Input with value",
					value: "test@example.com",
				});
			},
		}),
		new e.text("Form validation styles also work as expected."),
		new e.code({
			output: () => {
				return b.Form.FloatingLabel.Input({
					type: "email",
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
				return b.Form.FloatingLabel.Textarea({
					label: "Comments",
				});
			},
		}),
		new e.text(
			"To set a custom height on your {{<textarea>}}, do not use the {{rows}} attribute. Instead, set an explicit {{height}} (either inline or via custom CSS)."
		),
		new e.code({
			output: () => {
				return b.Form.FloatingLabel.Textarea({
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
				return b.Form.FloatingLabel.Select({
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
					b.Form.FloatingLabel.Input({
						container: { marginBottom: 3 },
						label: "Email address",
						type: "email",
						disabled: true,
					}),
					b.Form.FloatingLabel.Textarea({
						container: { marginBottom: 3 },
						label: "Comments",
						disabled: true,
					}),
					b.Form.FloatingLabel.Textarea({
						container: { marginBottom: 3 },
						label: "Comments",
						disabled: true,
						style: { height: "100px" },
					}),
					b.Form.FloatingLabel.Select({
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
					b.Form.FloatingLabel.Input({
						container: { marginBottom: 3 },
						label: "Empty input",
						type: "email",
						readonly: true,
						plaintext: true,
					}),
					b.Form.FloatingLabel.Input({
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

		new e.title("Input groups"),
		new e.text("Floating labels also support {{.input-group}}."),
		new e.code({
			output: () => {
				return b.Form.FloatingLabel.Input({
					label: "Username",
					type: "text",
					before: "@",
				});
			},
		}),

		new e.text(
			"When using {{.input-group}} and {{.form-floating}} along with form validation, the {{-feedback}} should be placed outside of the {{.form-floating}}, but inside of the {{.input-group}}. This means that the feedback will need to be shown using javascript."
		),
		new e.code({
			output: () => {
				return b.Form.FloatingLabel.Input({
					invalidFeedback: "Please choose a username.",
					label: "Username",
					type: "text",
					before: "@",
					isvalid: false,
					required: true,
				});
			},
		}),

		//-----------------------

		new e.title("Layout"),
		new e.text(
			"When working with the Bootstrap grid system, be sure to place form elements within column classes."
		),
		new e.code({
			output: () => {
				return new h.div({ row: true, gutter: 3 }, [
					b.Form.FloatingLabel.Input({
						container: { col: "md" },
						label: "Email address",
						type: "email",
						value: "mdo@example.com",
					}),
					b.Form.FloatingLabel.Select({
						container: { col: "md" },
						label: "Work with selects",
						item: [
							{ selected: true, elem: "Open this select menu" },
							{ value: "1", elem: "One" },
							{ value: "2", elem: "Two" },
							{ value: "3", elem: "Three" },
						],
					}),
				]);
			},
		}),

		//-----------------------

		new e.title("CSS"),
		new e.subtitle("Sass variables"),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss",
			code: `
				$form-floating-height:                  add(3.5rem, $input-height-border);
				$form-floating-line-height:             1.25;
				$form-floating-padding-x:               $input-padding-x;
				$form-floating-padding-y:               1rem;
				$form-floating-input-padding-t:         1.625rem;
				$form-floating-input-padding-b:         .625rem;
				$form-floating-label-height:            1.5em;
				$form-floating-label-opacity:           .65;
				$form-floating-label-transform:         scale(.85) translateY(-.5rem) translateX(.15rem);
				$form-floating-label-disabled-color:    $gray-600;
				$form-floating-transition:              opacity .1s ease-in-out, transform .1s ease-in-out;
			`,
		}),
	],
};
