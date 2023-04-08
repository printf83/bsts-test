import { b, h } from "@printf83/bsts";
import * as e from "../ctl/example/_index.js";
import { IAttrContent } from "../ctl/main/container.js";

export const doc_form_layout: IAttrContent = {
	title: "Layout",
	description:
		"Give your forms some structure—from inline to horizontal to custom grid implementations—with our form layout options.",
	item: [
		new e.title("Forms"),
		new e.text(
			"Every group of form fields should reside in a {{<form>}} element. Bootstrap provides no default styling for the {{<form>}} element, but there are some powerful browser features that are provided by default."
		),
		new e.ul({
			item: [
				"New to browser forms? Consider reviewing {{https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form::the MDN form docs}} for an overview and complete list of available attributes.",
				"{{<button>}}s within a {{<form>}} default to {{type='submit'}}, so strive to be specific and always include a type.",
			],
		}),
		new e.text(
			"Since Bootstrap applies {{display: block}} and {{width: 100%}} to almost all our form controls, forms will by default stack vertically. Additional classes can be used to vary this layout on a per-form basis."
		),

		//-----------------------

		new e.title("Utilities"),
		new e.text(
			"{{https://getbootstrap.com/docs/5.3/utilities/spacing/::Margin utilities}} are the easiest way to add some structure to forms. They provide basic grouping of labels, controls, optional form text, and form validation messaging. We recommend sticking to {{margin-bottom}} utilities, and using a single direction throughout the form for consistency."
		),
		new e.text(
			"Feel free to build your forms however you like, with {{<fieldset>}}s, {{<div>}}s, or nearly any other element."
		),
		new e.code({
			output: () => {
				return [
					new h.div({ marginBottom: 3 }, [
						new b.label({ for: "formGroupExampleInput", class: "form-label" }, "Example label"),
						new b.input({ id: "formGroupExampleInput", placeholder: "Example input placeholder" }),
					]),
					new h.div([
						new b.label({ for: "formGroupExampleInput2", class: "form-label" }, "Another label"),
						new b.input({ id: "formGroupExampleInput2", placeholder: "Another input placeholder" }),
					]),
				];
			},
		}),

		new e.text("Using {{b.form.item}}"),
		new e.code({
			output: () => {
				return [
					b.form.input({
						container: { marginBottom: 3 },
						label: "Example label",
						placeholder: "Example input placeholder",
					}),
					b.form.input({ label: "Another label", placeholder: "Another input placeholder" }),
				];
			},
		}),

		//-----------------------

		new e.title("Form grid"),
		new e.text(
			"More complex forms can be built using our grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options. {{b::Requires the }}{{bc::$enable-grid-classes}}{{b:: Sass variable to be enabled}} (on by default)."
		),
		new e.code({
			output: () => {
				return new h.div({ row: true }, [
					b.form.input({
						container: { col: true },
						label: "First name",
						hideLabel: true,
						placeholder: "First name",
					}),
					b.form.input({
						container: { col: true },
						label: "Last name",
						hideLabel: true,
						placeholder: "Last name",
					}),
				]);
			},
		}),

		//-----------------------

		new e.title("Gutters"),
		new e.text(
			"By adding {{https://getbootstrap.com/docs/5.3/layout/gutters/::gutter modifier classes}}, you can have control over the gutter width in as well the inline as block direction. {{b::Also requires the }}{{bc::$enable-grid-classes}}{{b:: Sass variable to be enabled}} (on by default)."
		),
		new e.code({
			output: () => {
				return new h.div({ row: true, gutter: 3 }, [
					b.form.input({
						container: { col: true },
						label: "First name",
						hideLabel: true,
						placeholder: "First name",
					}),
					b.form.input({
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
				return new h.form({ row: true, gutter: 3 }, [
					b.form.input({
						container: { col: "md-6" },
						label: "Email",
						type: "email",
					}),
					b.form.input({
						container: { col: "md-6" },
						label: "Password",
						type: "password",
					}),
					b.form.input({
						container: { col: 12 },
						label: "Address",
						placeholder: "1234 Main st",
					}),
					b.form.input({
						container: { col: 12 },
						label: "Address 2",
						placeholder: "Apartment, studio, or floor",
					}),
					b.form.input({
						container: { col: 6 },
						label: "City",
					}),
					b.form.select({
						container: { col: 4 },
						label: "State",
						item: [{ selected: true, elem: "Choose..." }, { elem: "..." }],
					}),
					b.form.input({
						container: { col: 2 },
						label: "Zip",
					}),
					new h.div(
						{ col: 12 },
						b.form.check({
							label: "Check me out",
						})
					),
					new h.div({ col: 12 }, new b.button({ type: "submit" }, "Sign in")),
				]);
			},
		}),

		//-----------------------

		new e.title("Horizontal form"),
		new e.text(
			"Create horizontal forms with the grid by adding the {{.row}} class to form groups and using the {{.col-*-*}} classes to specify the width of your labels and controls. Be sure to add {{.col-form-label}} to your {{<label>}}s as well so they’re vertically centered with their associated form controls."
		),
		new e.text(
			"At times, you maybe need to use margin or padding utilities to create that perfect alignment you need. For example, we’ve removed the {{padding-top}} on our stacked radio inputs label to better align the text baseline."
		),
		new e.code({
			output: () => {
				return new h.form([
					b.form.input({
						container: { marginBottom: 3 },
						label: "Email",
						type: "email",
						col1: 2,
						col2: 10,
					}),
					b.form.input({
						container: { marginBottom: 3 },
						label: "Password",
						type: "password",
						col1: 2,
						col2: 10,
					}),
					new h.fieldset({ row: true, marginBottom: 3 }, [
						new h.legend({ class: "col-form-label", col: "sm-2", paddingTop: 0 }, "Radios"),
						new h.div({ col: "sm-10" }, [
							b.form.check({
								type: "radio",
								name: "gridRadios",
								label: "First radio",
							}),
							b.form.check({
								type: "radio",
								name: "gridRadios",
								label: "Second radio",
							}),
							b.form.check({
								type: "radio",
								name: "gridRadios",
								label: "Third radio",
							}),
						]),
					]),
					new h.div(
						{ col: "sm-10", offset: "sm-2" },
						b.form.check({
							label: "Example checkbox",
						})
					),

					new h.div({ col: 12 }, new b.button({ type: "submit" }, "Sign in")),
				]);
			},
		}),

		//-----------------------

		new e.title("Horizontal form label sizing"),
		new e.text(
			"Be sure to use {{.col-form-label-sm}} or {{.col-form-label-lg}} to your {{<label>}}s or {{<legend>}}s to correctly follow the size of {{.form-control-lg}} and {{.form-control-sm}}."
		),
		new e.code({
			output: () => {
				return [
					b.form.input({
						container: { row: true, marginBottom: 3 },
						label: "Email",
						weight: "sm",
						placeholder: "col-form-label-sm",
						col1: 2,
						col2: 10,
					}),
					b.form.input({
						container: { row: true, marginBottom: 3 },
						label: "Email",
						placeholder: "col-form-label",
						col1: 2,
						col2: 10,
					}),
					b.form.input({
						label: "Email",
						weight: "lg",
						placeholder: "col-form-label-lg",
						col1: 2,
						col2: 10,
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
