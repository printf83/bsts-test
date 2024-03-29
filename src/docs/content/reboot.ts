import { b, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";

export const reboot: IContent = {
	title: "Reboot",
	description:
		"Reboot, a collection of element-specific CSS changes in a single file, kickstart Bootstrap to provide an elegant, consistent, and simple baseline to build upon.",
	item: (db?: e.ISourceDB[]) => {
		resetContentIndex();

		return [
			new e.section([
				new e.title("Approach"),
				new e.text(
					"Reboot builds upon Normalize, providing many HTML elements with somewhat opinionated styles using only element selectors. Additional styling is done only with classes. For example, Bootstrap reboot some {{<table>}} styles for a simpler baseline and later provide {{.table}}, {{.table-bordered}}, and more."
				),
				new e.text(
					"Here are Bootstrap guidelines and reasons for choosing what to override in Reboot:"
				),
				new e.ul({
					item: [
						"Update some browser default values to use {{rem}}s instead of {{em}}s for scalable component spacing.",
						"Avoid {{margin-top}}. Vertical margins can collapse, yielding unexpected results. More importantly though, a single direction of {{margin}} is a simpler mental model.",
						"For easier scaling across device sizes, block elements should use {{rem}}s for {{margin}}s.",
						"Keep declarations of {{font}}-related properties to a minimum, using {{inherit}} whenever possible.",
					],
				}),
			]),

			//----------------------

			new e.section([
				new e.title("CSS variables"),
				new e.text(
					"With v5.1.1, Bootstrap standardized Bootstrap required {{@imports}} across all Bootstrap CSS bundles (including {{bootstrap.css}}, {{bootstrap-reboot.css}}, and {{bootstrap-grid.css}}) to include {{_root.scss}}. This adds {{:root}} level CSS variables to all bundles, regardless of how many of them are used in that bundle. Ultimately Bootstrap 5 will continue to see more {{https://getbootstrap.com/docs/5.3/customize/css-variables/::CSS variables}} added over time, in order to provide more real-time customization without the need to always recompile Sass. Bootstrap approach is to take Bootstrap source Sass variables and transform them into CSS variables. That way, even if you don’t use CSS variables, you still have all the power of Sass. {{b::This is still in-progress and will take time to fully implement}}."
				),
				new e.text(
					"For example, consider these {{:root}} CSS variables for common {{<body>}} styles:"
				),

				new e.text(""),
				new e.codepreview({
					type: "css",
					title: "scss/_root.scss",
					source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_root.scss",
					code: `
						@if $font-size-root != null {
						--#{$prefix}root-font-size: #{$font-size-root};
						}
						--#{$prefix}body-font-family: #{inspect($font-family-base)};
						@include rfs($font-size-base, --#{$prefix}body-font-size);
						--#{$prefix}body-font-weight: #{$font-weight-base};
						--#{$prefix}body-line-height: #{$line-height-base};
						@if $body-text-align != null {
						--#{$prefix}body-text-align: #{$body-text-align};
						}

						--#{$prefix}body-color: #{$body-color};
						--#{$prefix}body-color-rgb: #{to-rgb($body-color)};
						--#{$prefix}body-bg: #{$body-bg};
						--#{$prefix}body-bg-rgb: #{to-rgb($body-bg)};

						--#{$prefix}emphasis-color: #{$body-emphasis-color};
						--#{$prefix}emphasis-color-rgb: #{to-rgb($body-emphasis-color)};

						--#{$prefix}secondary-color: #{$body-secondary-color};
						--#{$prefix}secondary-color-rgb: #{to-rgb($body-secondary-color)};
						--#{$prefix}secondary-bg: #{$body-secondary-bg};
						--#{$prefix}secondary-bg-rgb: #{to-rgb($body-secondary-bg)};

						--#{$prefix}tertiary-color: #{$body-tertiary-color};
						--#{$prefix}tertiary-color-rgb: #{to-rgb($body-tertiary-color)};
						--#{$prefix}tertiary-bg: #{$body-tertiary-bg};
						--#{$prefix}tertiary-bg-rgb: #{to-rgb($body-tertiary-bg)};
					`,
				}),

				new e.text("In practice, those variables are then applied in Reboot like so:"),
				new e.codepreview({
					type: "css",
					title: "scss/_reboot.scss",
					source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_reboot.scss",
					code: `
						body {
						margin: 0; // 1
						font-family: var(--#{$prefix}body-font-family);
						@include font-size(var(--#{$prefix}body-font-size));
						font-weight: var(--#{$prefix}body-font-weight);
						line-height: var(--#{$prefix}body-line-height);
						color: var(--#{$prefix}body-color);
						text-align: var(--#{$prefix}body-text-align);
						background-color: var(--#{$prefix}body-bg); // 2
						-webkit-text-size-adjust: 100%; // 3
						-webkit-tap-highlight-color: rgba($black, 0); // 4
						}
					`,
				}),

				new e.text("Which allows you to make real-time customizations however you like:"),
				new e.codepreview({
					type: "html",
					code: `
						<body style="--bs-body-color: #333;">
						<!-- ... -->
						</body>
					`,
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Page defaults"),
				new e.text(
					"The {{<html>}} and {{<body>}} elements are updated to provide better page-wide defaults. More specifically:"
				),
				new e.ul({
					item: [
						new h.div([
							"The {{box-sizing}} is globally set on every element—including {{*/://:/before}} and {{*/://:/after}}, to {{border-box}}. This ensures that the declared width of element is never exceeded due to padding or border.",
							new h.ul({
								item: [
									"No base {{font-size}} is declared on the {{<html>}}, but {{16px}} is assumed (the browser default). {{font-size: 1rem}} is applied on the {{<body>}} for easy responsive type-scaling via media queries while respecting user preferences and ensuring a more accessible approach. This browser default can be overridden by modifying the {{$font-size-root}} variable.",
								],
							}),
						]),
						"The {{<body>}} also sets a global {{font-family}}, {{font-weight}}, {{line-height}}, and {{color}}. This is inherited later by some form elements to prevent font inconsistencies.",
						"For safety, the {{<body>}} has a declared {{background-color}}, defaulting to {{#fff}}.",
					],
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Native font stack"),
				new e.text(
					"Bootstrap utilizes a “native font stack” or “system font stack” for optimum text rendering on every device and OS. These system fonts have been designed specifically with today’s devices in mind, with improved rendering on screens, variable font support, and more. Read more about {{https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/::native font stacks in this Smashing Magazine article}}."
				),
				new e.codepreview({
					type: "css",
					code: `
						$font-family-sans-serif:
						// Cross-platform generic font family (default user interface font)
						system-ui,
						// Safari for macOS and iOS (San Francisco)
						-apple-system,
						// Windows
						"Segoe UI",
						// Android
						Roboto,
						// older macOS and iOS
						"Helvetica Neue"
						// Linux
						"Noto Sans",
						"Liberation Sans",
						// Basic web fallback
						Arial,
						// Sans serif fallback
						sans-serif,
						// Emoji fonts
						"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !default;

						`,
				}),
				new e.text(
					"Note that because the font stack includes emoji fonts, many common symbol/dingbat Unicode characters will be rendered as multicolored pictographs. Their appearance will vary, depending on the style used in the browser/platform’s native emoji font, and they won’t be affected by any CSS {{color}} styles."
				),
				new e.text(
					"This {{font-family}} is applied to the {{<body>}} and automatically inherited globally throughout Bootstrap. To switch the global {{font-family}}, update {{$font-family-base}} and recompile Bootstrap."
				),
			]),

			//----------------------

			new e.section([
				new e.title("Headings"),
				new e.text(
					"All heading elements—{{<h1>}}—{{<h6>}} have their {{margin-top}} removed, {{margin-bottom: .5rem}} set, and {{line-height}} tightened. While headings inherit their {{color}} by default, you can also override it via optional CSS variable, {{--bs-heading-color}}."
				),
				new e.table({
					item: [
						["Heading", "Example"],
						["{{<h1></h1>}}", new h.h1( "h1.Bootstrap heading")],
						["{{<h2></h2>}}", new h.h2( "h2.Bootstrap heading")],
						["{{<h3></h3>}}", new h.h3( "h3.Bootstrap heading")],
						["{{<h4></h4>}}", new h.h4( "h4.Bootstrap heading")],
						["{{<h5></h5>}}", new h.h5( "h5.Bootstrap heading")],
						["{{<h6></h6>}}", new h.h6( "h6.Bootstrap heading")],
					],
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Paragraphs"),
				new e.text(
					"All {{<p>}} elements have their {{margin-top}} removed and {{margin-bottom: 1rem}} set for easy spacing."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.p("This is an example paragraph.");
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Links"),
				new e.text(
					"Links have a default {{color}} and underline applied. While links change on {{:hover}}, they don’t change based on whether someone {{:visited}} the link. They also receive no special {{:focus}} styles."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.a({ href: "#" }, "This is an example link");
					},
				}),
				new e.text(
					"As of v5.3.x, link {{color}} is set using {{rgba()}} and new {{-rgb}} CSS variables, allowing for easy customization of link color opacity. Change the link color opacity with the {{--bs-link-opacity}} CSS variable:"
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.a(
							{ href: "#", style: { "--bs-link-opacity": ".5" } },
							"This is an example link"
						);
					},
				}),
				new e.text(
					"Placeholder links—those without an {{href}}—are targeted with a more specific selector and have their {{color}} and {{text-decoration}} reset to their default values."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.a("This is a placeholder link");
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Horizontal rules"),
				new e.text(
					"The {{<hr>}} element has been simplified. Similar to browser defaults, {{<hr>}}s are styled via {{border-top}}, have a default {{opacity: .25}}, and automatically inherit their {{border-color}} via {{color}}, including when {{color}} is set via the parent. They can be modified with text, border, and opacity utilities."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							new h.hr(),
							new h.div({ textColor: "success" }, new h.hr()),
							new h.hr({
								border: true,
								borderColor: "danger",
								borderWidth: 2,
								opacity: 50,
							}),
							new h.hr({
								border: true,
								borderColor: "primary",
								borderWidth: 3,
								opacity: 75,
							}),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Lists"),
				new e.text(
					"All lists—{{<ul>}}, {{<ol>}}, and {{<dl>}}—have their {{margin-top}} removed and a {{margin-bottom: 1rem}}. Nested lists have no {{margin-bottom}}. Bootstrap’ve also reset the {{padding-left}} on {{<ul>}} and {{<ol>}} elements."
				),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", flex: "wrap", gap: 4, class: "reset-list" },
					output: () => {
						return [
							new h.ul({
								item: [
									"All lists have their top margin removed",
									"And their bottom margin normalized",
									new h.div([
										"Nested lists have no bottom margin",
										new h.ul({
											item: [
												"This way they have a more even appearance",
												"Particularly when followed by more list items",
											],
										}),
									]),
									"The left padding has also been reset",
								],
							}),
							new h.ol({
								item: [
									"Here’s an ordered list",
									"With a few list items",
									"It has the same overall look",
									"As the previous unordered list",
								],
							}),
						];
					},
				}),
				new e.text(
					"For simpler styling, clear hierarchy, and better spacing, description lists have updated {{margins}}. {{<dd>}}s reset {{margin-left}} to {{0}} and add {{margin-bottom: .5rem}}. {{<dt>}}s are {{b::bolded}}."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.dl([
							new h.dt("Description lists"),
							new h.dd("A description list is perfect for defining terms."),
							new h.dt("Term"),
							new h.dd("Definition for the term."),
							new h.dd("A second definition for the same term."),
							new h.dt("Another term"),
							new h.dd("Definition for this other term."),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Inline code"),
				new e.text(
					"Wrap inline snippets of code with {{<code>}}. Be sure to escape HTML angle brackets."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							"For example ",
							new h.code("<section>"),
							" sould be wrapped as inline.",
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Code blocks"),
				new e.text(
					"Use {{<pre>}}s for multiple lines of code. Once again, be sure to escape any angle brackets in the code for proper rendering. The {{<pre>}} element is reset to remove its {{margin-top}} and use {{rem}} units for its {{margin-bottom}}."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.pre(
							new h.code(`<p>Sample text here...</p>
		<p>And another line of sample text here...</p>`)
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Variables"),
				new e.text("For indicating variables use the {{<var>}} tag."),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							new h.variable("y"),
							" = ",
							new h.variable("m"),
							new h.variable("x"),
							" + ",
							new h.variable("b"),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("User input"),
				new e.text(
					"Use the {{<kbd>}} to indicate input that is typically entered via keyboard."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							"To switch directories, type ",
							new h.kbd("cd"),
							" followed by the name of the directory.{{br}}To edit settings, press ",
							new h.kbd([new h.kbd("Ctrl"), " + ", new h.kbd(",")]),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Sample output"),
				new e.text("For indicating sample output from a program use the {{<samp>}} tag."),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.samp(
							" This text is meant to be treated as sample output from a computer program. "
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Tables"),
				new e.text(
					"Tables are slightly adjusted to style {{<caption>}}s, collapse borders, and ensure consistent {{text-align}} throughout. Additional changes for borders, padding, and more come with {{nav:docs/content/tables::the .table class}}."
				),
				new e.code({
					db: getContentCode(db),
					outputAttr: { overflow: "auto" },
					output: () => {
						return new h.table([
							new h.caption(
								"This is an example table, and this is its caption to describe the contents."
							),
							new h.thead(
								new h.tr([
									new h.th("Table heading"),
									new h.th("Table heading"),
									new h.th("Table heading"),
									new h.th("Table heading"),
									new h.th("Table heading"),
								])
							),
							new h.tbody([
								new h.tr([
									new h.td("Table cell"),
									new h.td("Table cell"),
									new h.td("Table cell"),
									new h.td("Table cell"),
									new h.td("Table cell"),
								]),
								new h.tr([
									new h.td("Table cell"),
									new h.td("Table cell"),
									new h.td("Table cell"),
									new h.td("Table cell"),
									new h.td("Table cell"),
								]),
								new h.tr([
									new h.td("Table cell"),
									new h.td("Table cell"),
									new h.td("Table cell"),
									new h.td("Table cell"),
									new h.td("Table cell"),
								]),
							]),
						]);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Forms"),
				new e.text(
					"Various form elements have been rebooted for simpler base styles. Here are some of the most notable changes:"
				),
				new e.ul({
					item: [
						"{{<fieldset>}}s have no borders, padding, or margin so they can be easily used as wrappers for individual inputs or groups of inputs.",
						"{{<legend>}}s, like fieldsets, have also been restyled to be displayed as a heading of sorts.",
						"{{<label>}}s are set to {{display: inline-block}} to allow {{margin}} to be applied.",
						"{{<input>}}s, {{<select>}}s, {{<textarea>}}s, and {{<button>}}s are mostly addressed by Normalize, but Reboot removes their margin and sets line-height: inherit, too.",
						"{{<textarea>}}s are modified to only be resizable vertically as horizontal resizing often “breaks” page layout.",
						"{{<button>}}s and {{<input>}} button elements have {{cursor: pointer}} when {{:not(:disabled)}}.",
					],
				}),
				new e.text("These changes, and more, are demonstrated below."),
				new e.alert(
					{ color: "warning", callout: true },
					" Some date inputs types are {{https://caniuse.com/input-datetime::not fully supported}} by the latest versions of Safari and Firefox. "
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.form(
							new h.fieldset([
								new h.legend("Example legend"),
								new h.p([
									new h.label({ for: "input" }, "Example input"),
									" ",
									new h.input({ id: "input", placeholder: "Example input" }),
								]),
								new h.p([
									new h.label({ for: "email" }, "Example email"),
									" ",
									new h.input({
										id: "email",
										type: "email",
										placeholder: "test@example.com",
									}),
								]),
								new h.p([
									new h.label({ for: "tel" }, "Example telephone"),
									" ",
									new h.input({ id: "tel", type: "tel" }),
								]),
								new h.p([
									new h.label({ for: "url" }, "Example url"),
									" ",
									new h.input({ id: "url", type: "url" }),
								]),
								new h.p([
									new h.label({ for: "number" }, "Example number"),
									" ",
									new h.input({ id: "number", type: "number" }),
								]),
								new h.p([
									new h.label({ for: "search" }, "Example search"),
									" ",
									new h.input({ id: "search", type: "search" }),
								]),
								new h.p([
									new h.label({ for: "range" }, "Example range"),
									" ",
									new h.input({ id: "range", type: "range", min: 0, max: 10 }),
								]),
								new h.p([
									new h.label({ for: "file" }, "Example file input"),
									" ",
									new h.input({ id: "file", type: "file" }),
								]),
								new h.p([
									new h.label({ for: "select" }, "Example select"),
									" ",
									new h.select({
										id: "select",
										item: [
											{ value: "", elem: "Choose..." },
											{
												label: "Option group 1",
												item: [
													{ value: "", elem: "Option 1" },
													{ value: "", elem: "Option 2" },
													{ value: "", elem: "Option 3" },
												],
											},
											{
												label: "Option group 2",
												item: [
													{ value: "", elem: "Option 4" },
													{ value: "", elem: "Option 5" },
													{ value: "", elem: "Option 6" },
												],
											},
										],
									}),
								]),
								new h.p(
									new h.label([
										new h.input({ type: "checkbox", value: "" }),
										"Check this checkbox",
									])
								),
								new h.p([
									new h.label([
										new h.input({
											type: "radio",
											name: "optionsRadios",
											id: "optionsRadios1",
											value: "option1",
											checked: true,
										}),
										"Option one is this and that",
									]),
									new h.label([
										new h.input({
											type: "radio",
											name: "optionsRadios",
											id: "optionsRadios2",
											value: "option2",
										}),
										"Option two is something else that's also super long to demonstrate the wrapping of these fancy form controls.",
									]),
									new h.label([
										new h.input({
											type: "radio",
											name: "optionsRadios",
											id: "optionsRadios3",
											value: "option3",
											disabled: true,
										}),
										"Option three is disabled",
									]),
									new h.p([
										new h.label({ for: "textarea" }, "Example textarea"),
										" ",
										new h.textarea({ id: "textarea", rows: 3 }),
									]),
									new h.p([
										new h.label({ for: "date" }, "Example date"),
										" ",
										new h.input({ id: "date", type: "date" }),
									]),
									new h.p([
										new h.label({ for: "time" }, "Example time"),
										" ",
										new h.input({ id: "time", type: "time" }),
									]),
									new h.p([
										new h.label(
											{ for: "datetime-local" },
											"Example datetime-local"
										),
										" ",
										new h.input({
											id: "datetime-local",
											type: "datetime-local",
										}),
									]),
									new h.p([
										new h.label({ for: "week" }, "Example week"),
										" ",
										new h.input({ id: "week", type: "week" }),
									]),
									new h.p([
										new h.label({ for: "month" }, "Example month"),
										" ",
										new h.input({ id: "month", type: "month" }),
									]),
									new h.p([
										new h.label({ for: "color" }, "Example color"),
										" ",
										new h.input({ id: "color", type: "color" }),
									]),
									new h.p([
										new h.label({ for: "output" }, "Example output"),
										" ",
										new h.output({ id: "output", name: "result" }, "100"),
									]),
									new h.p([
										new h.button({ type: "submit" }, "Button sumbit"),
										" ",
										new h.input({
											type: "submit",
											value: "Input submit button",
										}),
										" ",
										new h.input({ type: "reset", value: "Input reset button" }),
										" ",
										new h.input({ type: "button", value: "Input button" }),
									]),
									new h.p([
										new h.button(
											{ type: "submit", disabled: true },
											"Button sumbit"
										),
										" ",
										new h.input({
											type: "submit",
											value: "Input submit button",
											disabled: true,
										}),
										" ",
										new h.input({
											type: "reset",
											value: "Input reset button",
											disabled: true,
										}),
										" ",
										new h.input({
											type: "button",
											value: "Input button",
											disabled: true,
										}),
									]),
								]),
							])
						);
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Pointers on buttons"),
				new e.text(
					"Reboot includes an enhancement for {{role='button'}} to change the default cursor to {{pointer}}. Add this attribute to elements to help indicate elements are interactive. This role isn’t necessary for {{<button>}} elements, which get their own cursor change."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.span(
							{ pointer: true, tabindex: "0" },
							"Non-button element button"
						);
					},
				}),
			]),

			//----------------------

			new e.section([new e.title("Misc elements")]),

			//----------------------

			new e.section([
				new e.subtitle("Address"),
				new e.text(
					"The {{<address>}} element is updated to reset the browser default {{font-style}} from {{italic}} to {{normal}}. {{line-height}} is also now inherited, and {{margin-bottom: 1rem}} has been added. {{<address>}}s are for presenting contact information for the nearest ancestor (or an entire body of work). Preserve formatting by ending lines with {{<br>}}."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							new h.address([
								new h.strong("ACME Corporation"),
								new h.br(),
								"1123 Fictional St,",
								new h.br(),
								"San Francisco, CA 94103",
								new h.br(),
								new h.abbr({ title: "Phone" }, "P:"),
								"(123) 456-7890 ",
							]),
							new h.address([
								new h.strong("Full Name"),
								new h.br(),
								new h.a(
									{ href: "mailto:first.last@example.com" },
									"first.last@example.com"
								),
							]),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Blockquote"),
				new e.text(
					"The default {{margin}} on blockquotes is {{1em 40px}}, so Bootstrap reset that to {{0 0 1rem}} for something more consistent with other elements."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							new b.blockquote.container(
								new h.p("A well-known quote, contained in a blockquote element.")
							),
							new h.p([
								"Someone famous in",
								new h.cite({ title: "Source Title" }, "Source Title"),
							]),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Inline elements"),
				new e.text(
					"The {{<abbr>}} element receives basic styling to make it stand out amongst paragraph text."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							"The ",
							new h.abbr({ title: "HyperText Markup Language" }, "HTML"),
							"  abbreviation element.",
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Summary"),
				new e.text(
					"The default {{cursor}} on summary is {{text}}, so Bootstrap reset that to {{pointer}} to convey that the element can be interacted with by clicking on it."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							new h.details([
								new h.summary("Some details"),
								new h.p("More info about the details."),
							]),
							new h.details([
								new h.summary("Even more details"),
								new h.p("Here are even more details about the details."),
							]),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("HTML5 {{[hidden]}} attribute "),
				new e.text(
					"HTML5 adds {{https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden::a new global attribute named [hidden]}}, which is styled as {{display: none}} by default. Borrowing an idea from {{https://purecss.io/::PureCSS}}, Bootstrap improve upon this default by making {{[hidden] { display: none !important; } }}to help prevent its {{display}} from getting accidentally overridden."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.input({ hidden: true });
					},
				}),
				new e.alert(
					{ color: "info", callout: true },
					"Since {{[hidden]}} is not compatible with jQuery’s {{$(...).hide()}} and {{$(...).show()}} methods, Bootstrap don’t specifically endorse {{[hidden]}} over other techniques for managing the {{display}} of elements."
				),

				new e.text(
					"To merely toggle the visibility of an element, meaning its {{display}} is not modified and the element can still affect the flow of the document, use {{nav:docs/utilities/visibility::the .invisible class}} instead."
				),
			]),
		];
	},
};
