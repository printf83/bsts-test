import { B, b, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const layout: IAttrContent = {
	title: "Layout",
	description:
		"Give your forms some structure—from inline to horizontal to custom grid implementations—with Bootstrap form layout options.",
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
			"Since Bootstrap applies {{display: block}} and {{width: 100%}} to almost all Bootstrap form controls, forms will by default stack vertically. Additional classes can be used to vary this layout on a per-form basis."
		),

		//-----------------------

		new e.title("Utilities"),
		new e.text(
			"{{nav:docs/utilities/spacing::Margin utilities}} are the easiest way to add some structure to forms. They provide basic grouping of labels, controls, optional form text, and form validation messaging. Bootstrap recommend sticking to {{margin-bottom}} utilities, and using a single direction throughout the form for consistency."
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

		new e.text("Using {{B.Form.Input}}"),
		new e.code({
			output: () => {
				return [
					B.Form.Input({
						container: { marginBottom: 3 },
						label: "Example label",
						placeholder: "Example input placeholder",
					}),
					B.Form.Input({ label: "Another label", placeholder: "Another input placeholder" }),
				];
			},
		}),

		//-----------------------

		new e.title("Form grid"),
		new e.text(
			"More complex forms can be built using Bootstrap grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options. {{b::Requires the }}{{bc::$enable-grid-classes}}{{b:: Sass variable to be enabled}} (on by default)."
		),
		new e.code({
			output: () => {
				return new h.div({ row: true }, [
					B.Form.Input({
						container: { col: true },
						label: "First name",
						hideLabel: true,
						placeholder: "First name",
					}),
					B.Form.Input({
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
			"By adding {{nav:docs/layout/gutters::gutter modifier classes}}, you can have control over the gutter width in as well the inline as block direction. {{b::Also requires the }}{{bc::$enable-grid-classes}}{{b:: Sass variable to be enabled}} (on by default)."
		),
		new e.code({
			output: () => {
				return new h.div({ row: true, gutter: 3 }, [
					B.Form.Input({
						container: { col: true },
						label: "First name",
						hideLabel: true,
						placeholder: "First name",
					}),
					B.Form.Input({
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
					B.Form.Input({
						container: { col: "md-6" },
						label: "Email",
						type: "email",
					}),
					B.Form.Input({
						container: { col: "md-6" },
						label: "Password",
						type: "password",
					}),
					B.Form.Input({
						container: { col: 12 },
						label: "Address",
						placeholder: "1234 Main st",
					}),
					B.Form.Input({
						container: { col: 12 },
						label: "Address 2",
						placeholder: "Apartment, studio, or floor",
					}),
					B.Form.Input({
						container: { col: 5 },
						label: "City",
					}),
					B.Form.Select({
						container: { col: 4 },
						label: "State",
						item: [{ selected: true, elem: "Choose..." }, { elem: "..." }],
					}),
					B.Form.Input({
						container: { col: 3 },
						label: "Zip",
					}),
					B.Form.Check({ container: { col: 12 }, label: "Check me out" }),
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
			"At times, you maybe need to use margin or padding utilities to create that perfect alignment you need. For example, Bootstrap removed the {{padding-top}} on Bootstrap stacked radio inputs label to better align the text baseline."
		),
		new e.code({
			output: () => {
				return new h.form([
					B.Form.Input({
						container: { marginBottom: 3 },
						label: "Email",
						type: "email",
						col1: 3,
						col2: 9,
					}),
					B.Form.Input({
						container: { marginBottom: 3 },
						label: "Password",
						type: "password",
						col1: 3,
						col2: 9,
					}),
					new h.fieldset({ row: true, marginBottom: 3 }, [
						new h.legend({ class: "col-form-label", col: "sm-3", paddingTop: 0 }, "Radios"),
						new h.div({ col: "sm-9" }, [
							B.Form.Check({
								type: "radio",
								name: "gridRadios",
								label: "First radio",
							}),
							B.Form.Check({
								type: "radio",
								name: "gridRadios",
								label: "Second radio",
							}),
							B.Form.Check({
								type: "radio",
								name: "gridRadios",
								label: "Third radio",
							}),
						]),
					]),
					new h.div(
						{ row: true },
						B.Form.Check({ container: { col: "sm-9", offset: "sm-3" }, label: "Example checkbox" })
					),

					new h.div({ col: 12 }, new b.button({ type: "submit" }, "Sign in")),
				]);
			},
		}),

		//-----------------------

		new e.subtitle("Horizontal form label sizing"),
		new e.text(
			"Be sure to use {{.col-form-label-sm}} or {{.col-form-label-lg}} to your {{<label>}}s or {{<legend>}}s to correctly follow the size of {{.form-control-lg}} and {{.form-control-sm}}."
		),
		new e.code({
			output: () => {
				return [
					B.Form.Input({
						container: { row: true, marginBottom: 3 },
						label: "Email",
						weight: "sm",
						placeholder: "col-form-label-sm",
						col1: 3,
						col2: 9,
					}),
					B.Form.Input({
						container: { row: true, marginBottom: 3 },
						label: "Email",
						placeholder: "col-form-label",
						col1: 3,
						col2: 9,
					}),
					B.Form.Input({
						label: "Email",
						weight: "lg",
						placeholder: "col-form-label-lg",
						col1: 3,
						col2: 9,
					}),
				];
			},
		}),

		//-----------------------

		new e.title("Column sizing"),
		new e.text(
			"As shown in the previous examples, Bootstrap grid system allows you to place any number of {{.col}}s within a {{.row}}. They’ll split the available width equally between them. You may also pick a subset of your columns to take up more or less space, while the remaining {{.col}}s equally split the rest, with specific column classes like {{.col-sm-6}}."
		),
		new e.code({
			showViewport: true,
			output: () => {
				return new h.div({ row: true, gutter: 3 }, [
					B.Form.Input({
						container: { col: "sm-6" },
						label: "City",
						hideLabel: true,
						placeholder: "City",
					}),
					B.Form.Input({
						container: { col: "sm" },
						label: "State",
						hideLabel: true,
						placeholder: "State",
					}),
					B.Form.Input({
						container: { col: "sm" },
						label: "Zip",
						hideLabel: true,
						placeholder: "Zip",
					}),
				]);
			},
		}),

		//-----------------------

		new e.title("Auto-sizing"),
		new e.text(
			"The example below uses a flexbox utility to vertically center the contents and changes {{.col}} to {{.col-auto}} so that your columns only take up as much space as needed. Put another way, the column sizes itself based on the contents."
		),
		new e.code({
			output: () => {
				return new h.div({ row: true, gutterY: 2, gutterX: 3, alignItem: "center" }, [
					B.Form.Input({
						container: { col: "auto" },
						label: "Name",
						hideLabel: true,
						placeholder: "Jane Doe",
					}),
					B.Form.Input({
						container: { col: "auto" },
						label: "Username",
						hideLabel: true,
						placeholder: "Username",
						before: "@",
					}),
					B.Form.Select({
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
					B.Form.Check({ container: { col: "auto" }, label: "Remember me" }),
					new h.div({ col: "auto" }, new b.button({ type: "submit" }, "Submit")),
				]);
			},
		}),
		new e.text("You can then remix that once again with size-specific column classes."),
		new e.code({
			output: () => {
				return new h.div({ row: true, gutterY: 2, gutterX: 3, alignItem: "center" }, [
					B.Form.Input({
						container: { col: "sm-3" },
						label: "Name",
						hideLabel: true,
						placeholder: "Jane Doe",
					}),
					B.Form.Input({
						container: { col: "sm-3" },
						label: "Username",
						hideLabel: true,
						placeholder: "Username",
						before: "@",
					}),
					B.Form.Select({
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
					B.Form.Check({ container: { col: "auto" }, label: "Remember me" }),
					new h.div({ col: "auto" }, new b.button({ type: "submit" }, "Submit")),
				]);
			},
		}),

		//-----------------------

		new e.title("Inline forms"),
		new e.text(
			"Use the {{.row-cols-*}} classes to create responsive horizontal layouts. By adding {{nav:docs/layout/gutters::gutter modifier classes}}, Bootstrap’ll have gutters in horizontal and vertical directions. On narrow mobile viewports, the {{.col-12}} helps stack the form controls and more. The {{.align-items-center}} aligns the form elements to the middle, making the {{.form-check}} align properly."
		),
		new e.code({
			output: () => {
				return new h.div({ row: true, rowCol: "lg-auto", gutter: 3, alignItem: "center" }, [
					B.Form.Input({
						container: { col: 12 },
						label: "Username",
						hideLabel: true,
						placeholder: "Username",
						before: "@",
					}),
					B.Form.Select({
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
					B.Form.Check({ container: { col: 12 }, label: "Remember me" }),
					new h.div({ col: 12 }, new b.button({ type: "submit" }, "Submit")),
				]);
			},
		}),
	],
};
