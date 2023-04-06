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
					b.form.input({
						container: { marginBottom: 3 },
						value: "email@example.com",
						label: "Email",
						plaintext: true,
						col1: "sm-2",
						col2: "sm-10",
					}),
					b.form.input({
						container: { marginBottom: 3 },
						label: "Password",
						type: "password",
						col1: "sm-2",
						col2: "sm-10",
					}),
				];
			},
		}),
		new e.code({
			output: () => {
				return new h.div({ row: true, marginBottom: 3 }, [
					b.form.input({
						container: { col: "auto" },
						value: "email@example.com",
						label: "Email",
						hideLabel: true,
						plaintext: true,
					}),
					b.form.input({
						container: { col: "auto" },
						label: "Password",
						hideLabel: true,
						type: "password",
						placeholder: "Password",
					}),
					new h.div({ col: "auto" }, new b.button({ type: "submit" }, "Confirm identity")),
				]);
			},
		}),

		//-----------------------

		new e.title("File input"),

		new e.code({
			output: () => {
				return [
					b.form.input({
						container: { marginBottom: 3 },
						label: "Default file input example",
						type: "file",
					}),
					b.form.input({
						container: { marginBottom: 3 },
						label: "Multiple file input example",
						type: "file",
						multiple: true,
					}),
					b.form.input({
						container: { marginBottom: 3 },
						label: "Disabled file input example",
						type: "file",
						disabled: true,
					}),
					b.form.input({
						container: { marginBottom: 3 },
						label: "Small file input example",
						type: "file",
						weight: "sm",
					}),
					b.form.input({
						container: { marginBottom: 3 },
						label: "Large file input example",
						type: "file",
						weight: "lg",
					}),
				];
			},
		}),

		//-----------------------

		new e.title("Color"),
		new e.text(
			"Set the {{type='color'}} and add {{.form-control-color}} to the {{<input>}}. We use the modifier class to set fixed {{heights}} and override some inconsistencies between browsers."
		),

		new e.code({
			output: () => {
				return b.form.input({
					label: "Color picker",
					type: "color",
					value: "#563d7c",
				});
			},
		}),

		//-----------------------

		new e.title("Datalists"),
		new e.text(
			"Datalists allow you to create a group of {{<option>}}s that can be accessed (and autocompleted) from within an {{<input>}}. These are similar to {{<select>}} elements, but come with more menu styling limitations and differences. While most browsers and operating systems include some support for {{<datalist>}} elements, their styling is inconsistent at best."
		),
		new e.text("Learn more about {{https://caniuse.com/datalist::support for datalist elements}}."),

		new e.code({
			output: () => {
				return b.form.input({
					label: "Datalist example",
					type: "text",
					placeholder: "Type to search...",
					datalist: ["San Francisco", "New York", "Seattle", "Los Angeles", "Chicago"],
				});
			},
		}),

		//-----------------------

		new e.title("CSS"),
		new e.subtitle("Sass variables"),
		new e.text("{{$input-*}} are shared across most of our form controls (and not buttons)."),
		new e.codepreview({
			type: "css",
			code: `
				$input-padding-y:                       $input-btn-padding-y;
				$input-padding-x:                       $input-btn-padding-x;
				$input-font-family:                     $input-btn-font-family;
				$input-font-size:                       $input-btn-font-size;
				$input-font-weight:                     $font-weight-base;
				$input-line-height:                     $input-btn-line-height;

				$input-padding-y-sm:                    $input-btn-padding-y-sm;
				$input-padding-x-sm:                    $input-btn-padding-x-sm;
				$input-font-size-sm:                    $input-btn-font-size-sm;

				$input-padding-y-lg:                    $input-btn-padding-y-lg;
				$input-padding-x-lg:                    $input-btn-padding-x-lg;
				$input-font-size-lg:                    $input-btn-font-size-lg;

				$input-bg:                              var(--#{$prefix}body-bg);
				$input-disabled-color:                  null;
				$input-disabled-bg:                     var(--#{$prefix}secondary-bg);
				$input-disabled-border-color:           null;

				$input-color:                           var(--#{$prefix}body-color);
				$input-border-color:                    var(--#{$prefix}border-color);
				$input-border-width:                    $input-btn-border-width;
				$input-box-shadow:                      $box-shadow-inset;

				$input-border-radius:                   var(--#{$prefix}border-radius);
				$input-border-radius-sm:                var(--#{$prefix}border-radius-sm);
				$input-border-radius-lg:                var(--#{$prefix}border-radius-lg);

				$input-focus-bg:                        $input-bg;
				$input-focus-border-color:              tint-color($component-active-bg, 50%);
				$input-focus-color:                     $input-color;
				$input-focus-width:                     $input-btn-focus-width;
				$input-focus-box-shadow:                $input-btn-focus-box-shadow;

				$input-placeholder-color:               var(--#{$prefix}secondary-color);
				$input-plaintext-color:                 var(--#{$prefix}body-color);

				$input-height-border:                   calc(#{$input-border-width} * 2); // stylelint-disable-line function-disallowed-list

				$input-height-inner:                    add($input-line-height * 1em, $input-padding-y * 2);
				$input-height-inner-half:               add($input-line-height * .5em, $input-padding-y);
				$input-height-inner-quarter:            add($input-line-height * .25em, $input-padding-y * .5);

				$input-height:                          add($input-line-height * 1em, add($input-padding-y * 2, $input-height-border, false));
				$input-height-sm:                       add($input-line-height * 1em, add($input-padding-y-sm * 2, $input-height-border, false));
				$input-height-lg:                       add($input-line-height * 1em, add($input-padding-y-lg * 2, $input-height-border, false));

				$input-transition:                      border-color .15s ease-in-out, box-shadow .15s ease-in-out;

				$form-color-width:                      3rem;
			`,
		}),
		new e.text("{{$form-label-*}} and {{$form-text-*}} are for our {{<label>}}s and {{.form-text}} component."),
		new e.codepreview({
			type: "css",
			code: `
				$form-label-margin-bottom:              .5rem;
				$form-label-font-size:                  null;
				$form-label-font-style:                 null;
				$form-label-font-weight:                null;
				$form-label-color:                      null;
			`,
		}),
		new e.codepreview({
			type: "css",
			code: `
				$form-text-margin-top:                  .25rem;
				$form-text-font-size:                   $small-font-size;
				$form-text-font-style:                  null;
				$form-text-font-weight:                 null;
				$form-text-color:                       var(--#{$prefix}secondary-color);
			`,
		}),
		new e.text("{{$form-file-*}} are for file input."),
		new e.codepreview({
			type: "css",
			code: `
				$form-file-button-color:          $input-color;
				$form-file-button-bg:             var(--#{$prefix}tertiary-bg);
				$form-file-button-hover-bg:       var(--#{$prefix}secondary-bg);
			`,
		}),
	],
};
