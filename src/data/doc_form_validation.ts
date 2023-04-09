import { b, h } from "@printf83/bsts";
import * as e from "../ctl/example/_index.js";
import { IAttrContent } from "../ctl/main/container.js";

export const doc_form_validation: IAttrContent = {
	title: "Validation",
	description:
		"Provide valuable, actionable feedback to your users with HTML5 form validation, via browser default behaviors or custom styles and JavaScript.",
	item: [
		new e.alert(
			{ color: "warning", callout: true },
			"We are aware that currently the client-side custom validation styles and tooltips are not accessible, since they are not exposed to assistive technologies. While we work on a solution, we’d recommend either using the server-side option or the default browser validation method."
		),

		new e.title("How it works"),
		new e.text("Here’s how form validation works with Bootstrap:"),
		new e.ul({
			item: [
				"HTML form validation is applied via CSS’s two pseudo-classes, {{:invalid}} and {{:valid}}. It applies to {{<input>}}, {{<select>}}, and {{<textarea>}} elements.",
				"Bootstrap scopes the {{:invalid}} and {{:valid}} styles to parent {{.was-validated}} class, usually applied to the {{<form>}}. Otherwise, any required field without a value shows up as invalid on page load. This way, you may choose when to activate them (typically after form submission is attempted).",
				"To reset the appearance of the form (for instance, in the case of dynamic form submissions using Ajax), remove the {{.was-validated}} class from the {{<form>}} again after submission.",
				"As a fallback, {{.is-invalid}} and {{.is-valid}} classes may be used instead of the pseudo-classes for {{https://getbootstrap.com/docs/5.3/forms/validation/#server-side::server-side validation}}. They do not require a {{.was-validated}} parent class.",
				"Due to constraints in how CSS works, we cannot (at present) apply styles to a {{<label>}} that comes before a form control in the DOM without the help of custom JavaScript.",
				"All modern browsers support the {{https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#the-constraint-validation-api::constraint validation API}}, a series of JavaScript methods for validating form controls.",
				"Feedback messages may utilize the {{https://getbootstrap.com/docs/5.3/forms/validation/#browser-defaults::browser defaults}} (different for each browser, and unstylable via CSS) or our custom feedback styles with additional HTML and CSS.",
				"You may provide custom validity messages with {{setCustomValidity}} in JavaScript.",
			],
		}),
		new e.text(
			"With that in mind, consider the following demos for our custom form validation styles, optional server-side classes, and browser defaults."
		),

		//-----------------------

		new e.title("Custom styles"),
		new e.text(
			"For custom Bootstrap form validation messages, you’ll need to add the {{novalidate}} boolean attribute to your {{<form>}}. This disables the browser default feedback tooltips, but still provides access to the form validation APIs in JavaScript. Try to submit the form below; our JavaScript will intercept the submit button and relay feedback to you. When attempting to submit, you’ll see the {{:invalid}} and {{:valid}} styles applied to your form controls."
		),
		new e.text(
			"Custom feedback styles apply custom colors, borders, focus styles, and background icons to better communicate feedback. Background icons for {{<select>}}s are only available with {{.form-select}}, and not {{.form-control}}."
		),
		new e.code({
			output: () => {
				return new h.form(
					{
						row: true,
						gutter: 3,
						novalidate: true,
						class: "needs-validation",
						on: {
							submit: (e) => {
								const form = e.target as HTMLFormElement;
								if (form.classList.contains("needs-validation")) {
									if (!form.checkValidity()) {
										e.preventDefault();
										e.stopPropagation();
									}

									form.classList.add("was-validated");
								}
							},
						},
					},
					[
						b.form.input({
							container: { col: "md-4" },
							label: "First name",
							value: "Mark",
							required: true,
							validFeedback: "Looks good!",
						}),
						b.form.input({
							container: { col: "md-4" },
							label: "Last name",
							value: "Otto",
							required: true,
							validFeedback: "Looks good!",
						}),
						b.form.input({
							container: { col: "md-4" },
							label: "Username",
							before: "@",
							required: true,
							invalidFeedback: "Please choose a username.",
						}),
						b.form.input({
							container: { col: "md-6" },
							label: "City",
							required: true,
							invalidFeedback: "Please choose a valid city.",
						}),
						b.form.select({
							container: { col: "md-3" },
							label: "State",
							required: true,
							item: [
								{
									selected: true,
									disabled: true,
									value: "",
									elem: "Choose...",
								},
								{ value: "...", elem: "..." },
							],
							invalidFeedback: "Please select a valid state",
						}),
						b.form.input({
							container: { col: "md-3" },
							label: "Zip",
							required: true,
							invalidFeedback: "Please provide a valid zip",
						}),
						b.form.check({
							container: { col: 12 },
							required: true,
							label: "Agree to terms and conditions",
							invalidFeedback: "You must agree before sumbitting",
						}),
						new h.div({ col: 12 }, new b.button({ type: "submit" }, "Submit form")),
					]
				);
			},
		}),

		new e.text("Example starter JavaScript for disabling form submissions if there are invalid fields"),
		new e.codepreview({
			type: "js",
			code: `
				(() => {
				'use strict'

				// Fetch all the forms we want to apply custom Bootstrap validation styles to
				const forms = document.querySelectorAll('.needs-validation')

				// Loop over them and prevent submission
				Array.from(forms).forEach(form => {
					form.addEventListener('submit', event => {
					if (!form.checkValidity()) {
						event.preventDefault()
						event.stopPropagation()
					}

					form.classList.add('was-validated')
					}, false)
				})
				})()
			`,
		}),

		//-----------------------

		new e.subtitle("Custom styles with floating label"),
		new e.code({
			output: () => {
				return new h.form(
					{
						row: true,
						gutter: 3,
						novalidate: true,
						class: "needs-validation",
						on: {
							submit: (e) => {
								const form = e.target as HTMLFormElement;
								if (form.classList.contains("needs-validation")) {
									if (!form.checkValidity()) {
										e.preventDefault();
										e.stopPropagation();
									}

									form.classList.add("was-validated");
								}
							},
						},
					},
					[
						b.form.floatinglabel.input({
							container: { col: "md-4" },
							label: "First name",
							value: "Mark",
							required: true,
							validFeedback: "Looks good!",
						}),
						b.form.floatinglabel.input({
							container: { col: "md-4" },
							label: "Last name",
							value: "Otto",
							required: true,
							validFeedback: "Looks good!",
						}),
						b.form.floatinglabel.input({
							container: { col: "md-4" },
							label: "Username",
							before: "@",
							required: true,
							invalidFeedback: "Please choose a username.",
						}),
						b.form.floatinglabel.input({
							container: { col: "md-6" },
							label: "City",
							required: true,
							invalidFeedback: "Please choose a valid city.",
						}),
						b.form.floatinglabel.select({
							container: { col: "md-3" },
							label: "State",
							required: true,
							item: [
								{
									selected: true,
									disabled: true,
									value: "",
									elem: "Choose...",
								},
								{ value: "...", elem: "..." },
							],
							invalidFeedback: "Please select a valid state",
						}),
						b.form.floatinglabel.input({
							container: { col: "md-3" },
							label: "Zip",
							required: true,
							invalidFeedback: "Please provide a valid zip",
						}),
						b.form.check({
							container: { col: 12 },
							required: true,
							label: "Agree to terms and conditions",
							invalidFeedback: "You must agree before sumbitting",
						}),
						new h.div({ col: 12 }, new b.button({ type: "submit" }, "Submit form")),
					]
				);
			},
		}),

		//-----------------------

		new e.title("Browser defaults"),
		new e.text(
			"Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you’ll see a slightly different style of feedback."
		),
		new e.text(
			"While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript."
		),
		new e.code({
			output: () => {
				return new h.form(
					{
						row: true,
						gutter: 3,
					},
					[
						b.form.input({
							container: { col: "md-4" },
							label: "First name",
							value: "Mark",
							required: true,
						}),
						b.form.input({
							container: { col: "md-4" },
							label: "Last name",
							value: "Otto",
							required: true,
						}),
						b.form.input({
							container: { col: "md-4" },
							label: "Username",
							before: "@",
							required: true,
						}),
						b.form.input({
							container: { col: "md-6" },
							label: "City",
							required: true,
						}),
						b.form.select({
							container: { col: "md-3" },
							label: "State",
							required: true,
							item: [
								{
									selected: true,
									disabled: true,
									value: "",
									elem: "Choose...",
								},
								{ value: "...", elem: "..." },
							],
						}),
						b.form.input({
							container: { col: "md-3" },
							label: "Zip",
							required: true,
						}),
						b.form.check({
							container: { col: 12 },
							required: true,
							label: "Agree to terms and conditions",
						}),
						new h.div({ col: 12 }, new b.button({ type: "submit" }, "Submit form")),
					]
				);
			},
		}),

		//-----------------------

		new e.title("Server-side"),
		new e.text(
			"We recommend using client-side validation, but in case you require server-side validation, you can indicate invalid and valid form fields with {{.is-invalid}} and {{.is-valid}}. Note that {{.invalid-feedback}} is also supported with these classes."
		),
		new e.text(
			"For invalid fields, ensure that the invalid feedback/error message is associated with the relevant form field using {{aria-describedby}} (noting that this attribute allows more than one {{id}} to be referenced, in case the field already points to additional form text)."
		),
		new e.text(
			"To fix {{https://github.com/twbs/bootstrap/issues/25110::issues with border radius}}, input groups require an additional {{.has-validation}} class."
		),
		new e.code({
			output: () => {
				return new h.form(
					{
						row: true,
						gutter: 3,
					},
					[
						b.form.input({
							container: { col: "md-4" },
							label: "First name",
							value: "Mark",
							required: true,
							validFeedback: "Looks good!",
							isvalid: true,
						}),
						b.form.input({
							container: { col: "md-4" },
							label: "Last name",
							value: "Otto",
							required: true,
							validFeedback: "Looks good!",
							isvalid: true,
						}),
						b.form.input({
							container: { col: "md-4" },
							label: "Username",
							before: "@",
							required: true,
							invalidFeedback: "Please choose a username.",
							isvalid: false,
						}),
						b.form.input({
							container: { col: "md-6" },
							label: "City",
							required: true,
							invalidFeedback: "Please choose a valid city.",
							isvalid: false,
						}),
						b.form.select({
							container: { col: "md-3" },
							label: "State",
							required: true,
							item: [
								{
									selected: true,
									disabled: true,
									value: "",
									elem: "Choose...",
								},
								{ value: "...", elem: "..." },
							],
							invalidFeedback: "Please select a valid state",
							isvalid: false,
						}),
						b.form.input({
							container: { col: "md-3" },
							label: "Zip",
							required: true,
							invalidFeedback: "Please provide a valid zip",
							isvalid: false,
						}),
						b.form.check({
							container: { col: 12 },
							required: true,
							label: "Agree to terms and conditions",
							invalidFeedback: "You must agree before sumbitting",
							isvalid: false,
						}),
						new h.div({ col: 12 }, new b.button({ type: "submit" }, "Submit form")),
					]
				);
			},
		}),

		//-----------------------

		new e.title("Supported elements"),
		new e.text("Validation styles are available for the following form controls and components:"),
		new e.ul({
			item: [
				"{{<input>}}s and {{<textarea>}}s with {{.form-control}} (including up to one {{.form-control}} in input groups)",
				"{{<select>}}s with {{.form-select}}",
				"{{.form-check}}s",
			],
		}),
		new e.code({
			output: () => {
				return new h.form({ class: "was-validated" }, [
					b.form.textarea({
						container: { marginBottom: 3 },
						label: "Textarea",
						placeholder: "Required example textarea",
						required: true,
						invalidFeedback: "Please enter a message in the textarea.",
					}),
					b.form.check({
						container: { marginBottom: 3 },
						label: "Check this checkbox",
						required: true,
						invalidFeedback: "Example invalid feedback text",
					}),
					b.form.check({
						type: "radio",
						name: "radio-stacked",
						label: "Or toggle this other radio",
						required: true,
					}),
					b.form.check({
						container: { marginBottom: 3 },
						type: "radio",
						name: "radio-stacked",
						label: "Toggle this radio",
						required: true,
						invalidFeedback: "More example invalid feedback text",
					}),
					b.form.select({
						container: { marginBottom: 3 },
						label: "select example",
						hideLabel: true,
						required: true,
						item: [
							{ value: "", elem: "Open this select menu" },
							{ value: "1", elem: "One" },
							{ value: "2", elem: "Two" },
							{ value: "3", elem: "Three" },
						],
						invalidFeedback: "Example invalid select feedback",
					}),
					b.form.input({
						container: { marginBottom: 3 },
						label: "file example",
						hideLabel: true,
						required: true,
						type: "file",
						invalidFeedback: "Example invalid form file feedback",
					}),
					new h.div({ marginBottom: 3 }, new b.button({ type: "submit", disabled: true }, "Submit form")),
				]);
			},
		}),

		//-----------------------

		new e.title("Tooltips"),
		new e.text(
			"If your form layout allows it, you can swap the {{.{valid|invalid}-feedback}} classes for {{.{valid|invalid}-tooltip}} classes to display validation feedback in a styled tooltip. Be sure to have a parent with {{position: relative}} on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup."
		),
		new e.code({
			output: () => {
				return new h.form(
					{
						row: true,
						gutter: 3,
						class: "needs-validation",
						novalidate: true,
						on: {
							submit: (e) => {
								const form = e.target as HTMLFormElement;
								if (form.classList.contains("needs-validation")) {
									if (!form.checkValidity()) {
										e.preventDefault();
										e.stopPropagation();
									}

									form.classList.add("was-validated");
								}
							},
						},
					},
					[
						b.form.input({
							container: { col: "md-4" },
							label: "First name",
							value: "Mark",
							required: true,
							validTooltip: "Looks good!",
						}),
						b.form.input({
							container: { col: "md-4" },
							label: "Last name",
							value: "Otto",
							required: true,
							validTooltip: "Looks good!",
						}),
						b.form.input({
							container: { col: "md-4" },
							label: "Username",
							before: "@",
							required: true,
							invalidTooltip: "Please choose a unique and valid username.",
						}),
						b.form.input({
							container: { col: "md-6" },
							label: "City",
							required: true,
							invalidTooltip: "Please provide a valid city.",
						}),
						b.form.select({
							container: { col: "md-3" },
							label: "State",
							required: true,
							item: [
								{
									selected: true,
									disabled: true,
									value: "",
									elem: "Choose...",
								},
								{ value: "...", elem: "..." },
							],
							invalidTooltip: "Please select a valid state",
						}),
						b.form.input({
							container: { col: "md-3" },
							label: "Zip",
							required: true,
							invalidTooltip: "Please provide a valid zip",
						}),
						b.form.check({
							container: { col: 12 },
							required: true,
							label: "Agree to terms and conditions",
							invalidTooltip: "You must agree before sumbitting",
						}),
						new h.div({ col: 12 }, new b.button({ type: "submit" }, "Submit form")),
					]
				);
			},
		}),

		//-----------------------

		new e.subtitle("Tooltips with floating label"),
		new e.code({
			output: () => {
				return new h.form(
					{
						row: true,
						gutter: 3,
						class: "needs-validation",
						novalidate: true,
						on: {
							submit: (e) => {
								const form = e.target as HTMLFormElement;
								if (form.classList.contains("needs-validation")) {
									if (!form.checkValidity()) {
										e.preventDefault();
										e.stopPropagation();
									}

									form.classList.add("was-validated");
								}
							},
						},
					},
					[
						b.form.floatinglabel.input({
							container: { col: "md-4" },
							label: "First name",
							value: "Mark",
							required: true,
							validTooltip: "Looks good!",
						}),
						b.form.floatinglabel.input({
							container: { col: "md-4" },
							label: "Last name",
							value: "Otto",
							required: true,
							validTooltip: "Looks good!",
						}),
						b.form.floatinglabel.input({
							container: { col: "md-4" },
							label: "Username",
							before: "@",
							required: true,
							invalidTooltip: "Please choose a unique and valid username.",
						}),
						b.form.floatinglabel.input({
							container: { col: "md-6" },
							label: "City",
							required: true,
							invalidTooltip: "Please provide a valid city.",
						}),
						b.form.floatinglabel.select({
							container: { col: "md-3" },
							label: "State",
							required: true,
							item: [
								{
									selected: true,
									disabled: true,
									value: "",
									elem: "Choose...",
								},
								{ value: "...", elem: "..." },
							],
							invalidTooltip: "Please select a valid state",
						}),
						b.form.floatinglabel.input({
							container: { col: "md-3" },
							label: "Zip",
							required: true,
							invalidTooltip: "Please provide a valid zip",
						}),
						b.form.check({
							container: { col: 12 },
							required: true,
							label: "Agree to terms and conditions",
							invalidTooltip: "You must agree before sumbitting",
						}),
						new h.div({ col: 12 }, new b.button({ type: "submit" }, "Submit form")),
					]
				);
			},
		}),

		//-----------------------

		new e.title("CSS"),
		new e.subtitle("Variables"),
		new e.text(
			"As part of Bootstrap’s evolving CSS variables approach, forms now use local CSS variables for validation for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."
		),
		new e.codepreview({
			type: "css",
			title: "scss/_root.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_root.scss",
			code: `
				--#{$prefix}form-valid-color: #{$form-valid-color};
				--#{$prefix}form-valid-border-color: #{$form-valid-border-color};
				--#{$prefix}form-invalid-color: #{$form-invalid-color};
				--#{$prefix}form-invalid-border-color: #{$form-invalid-border-color};
			`,
		}),
		new e.text("These variables are also color mode adaptive, meaning they change color while in dark mode."),

		//-----------------------

		new e.subtitle("Sass variables"),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss",
			code: `
				$form-feedback-margin-top:          $form-text-margin-top;
				$form-feedback-font-size:           $form-text-font-size;
				$form-feedback-font-style:          $form-text-font-style;
				$form-feedback-valid-color:         $success;
				$form-feedback-invalid-color:       $danger;

				$form-feedback-icon-valid-color:    $form-feedback-valid-color;
				$form-feedback-icon-valid:          url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'><path fill='#{$form-feedback-icon-valid-color}' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/></svg>");
				$form-feedback-icon-invalid-color:  $form-feedback-invalid-color;
				$form-feedback-icon-invalid:        url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='#{$form-feedback-icon-invalid-color}'><circle cx='6' cy='6' r='4.5'/><path stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/><circle cx='6' cy='8.2' r='.6' fill='#{$form-feedback-icon-invalid-color}' stroke='none'/></svg>");
			`,
		}),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss",
			code: `
				$form-valid-color:                  $form-feedback-valid-color;
				$form-valid-border-color:           $form-feedback-valid-color;
				$form-invalid-color:                $form-feedback-invalid-color;
				$form-invalid-border-color:         $form-feedback-invalid-color;
			`,
		}),
		new e.codepreview({
			type: "css",
			title: "scss/_variables-dark.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables-dark.scss",
			code: `
				$form-valid-color-dark:             $green-300;
				$form-valid-border-color-dark:      $green-300;
				$form-invalid-color-dark:           $red-300;
				$form-invalid-border-color-dark:    $red-300;
			`,
		}),

		//-----------------------

		new e.subtitle("Sass mixins"),
		new e.text(
			"Two mixins are combined, through our {{https://getbootstrap.com/docs/5.3/forms/validation/#loop::loop}}, to generate our form validation feedback styles."
		),
		new e.codepreview({
			type: "css",
			title: "scss/mixins/_forms.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/mixins/_forms.scss",
			code: `
				@mixin form-validation-state-selector($state) {
				@if ($state == "valid" or $state == "invalid") {
					.was-validated #{if(&, "&", "")}:#{$state},
					#{if(&, "&", "")}.is-#{$state} {
					@content;
					}
				} @else {
					#{if(&, "&", "")}.is-#{$state} {
					@content;
					}
				}
				}

				@mixin form-validation-state(
				$state,
				$color,
				$icon,
				$tooltip-color: color-contrast($color),
				$tooltip-bg-color: rgba($color, $form-feedback-tooltip-opacity),
				$focus-box-shadow: 0 0 $input-btn-focus-blur $input-focus-width rgba($color, $input-btn-focus-color-opacity),
				$border-color: $color
				) {
				.#{$state}-feedback {
					display: none;
					width: 100%;
					margin-top: $form-feedback-margin-top;
					@include font-size($form-feedback-font-size);
					font-style: $form-feedback-font-style;
					color: $color;
				}

				.#{$state}-tooltip {
					position: absolute;
					top: 100%;
					z-index: 5;
					display: none;
					max-width: 100%; // Contain to parent when possible
					padding: $form-feedback-tooltip-padding-y $form-feedback-tooltip-padding-x;
					margin-top: .1rem;
					@include font-size($form-feedback-tooltip-font-size);
					line-height: $form-feedback-tooltip-line-height;
					color: $tooltip-color;
					background-color: $tooltip-bg-color;
					@include border-radius($form-feedback-tooltip-border-radius);
				}

				@include form-validation-state-selector($state) {
					~ .#{$state}-feedback,
					~ .#{$state}-tooltip {
					display: block;
					}
				}

				.form-control {
					@include form-validation-state-selector($state) {
					border-color: $border-color;

					@if $enable-validation-icons {
						padding-right: $input-height-inner;
						background-image: escape-svg($icon);
						background-repeat: no-repeat;
						background-position: right $input-height-inner-quarter center;
						background-size: $input-height-inner-half $input-height-inner-half;
					}

					&:focus {
						border-color: $border-color;
						box-shadow: $focus-box-shadow;
					}
					}
				}

				// stylelint-disable-next-line selector-no-qualifying-type
				textarea.form-control {
					@include form-validation-state-selector($state) {
					@if $enable-validation-icons {
						padding-right: $input-height-inner;
						background-position: top $input-height-inner-quarter right $input-height-inner-quarter;
					}
					}
				}

				.form-select {
					@include form-validation-state-selector($state) {
					border-color: $border-color;

					@if $enable-validation-icons {
						&:not([multiple]):not([size]),
						&:not([multiple])[size="1"] {
						--#{$prefix}form-select-bg-icon: #{escape-svg($icon)};
						padding-right: $form-select-feedback-icon-padding-end;
						background-position: $form-select-bg-position, $form-select-feedback-icon-position;
						background-size: $form-select-bg-size, $form-select-feedback-icon-size;
						}
					}

					&:focus {
						border-color: $border-color;
						box-shadow: $focus-box-shadow;
					}
					}
				}

				.form-control-color {
					@include form-validation-state-selector($state) {
					@if $enable-validation-icons {
						width: add($form-color-width, $input-height-inner);
					}
					}
				}

				.form-check-input {
					@include form-validation-state-selector($state) {
					border-color: $border-color;

					&:checked {
						background-color: $color;
					}

					&:focus {
						box-shadow: $focus-box-shadow;
					}

					~ .form-check-label {
						color: $color;
					}
					}
				}
				.form-check-inline .form-check-input {
					~ .#{$state}-feedback {
					margin-left: .5em;
					}
				}

				.input-group {
					> .form-control:not(:focus),
					> .form-select:not(:focus),
					> .form-floating:not(:focus-within) {
					@include form-validation-state-selector($state) {
						@if $state == "valid" {
						z-index: 3;
						} @else if $state == "invalid" {
						z-index: 4;
						}
					}
					}
				}
				}
			`,
		}),

		//-----------------------

		new e.subtitle("Sass map"),
		new e.text(
			"This is the validation Sass map from {{_variables.scss}}. Override or extend this to generate different or additional states."
		),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss",
			code: `
				$form-validation-states: (
				"valid": (
					"color": var(--#{$prefix}form-valid-color),
					"icon": $form-feedback-icon-valid,
					"tooltip-color": #fff,
					"tooltip-bg-color": var(--#{$prefix}success),
					"focus-box-shadow": 0 0 $input-btn-focus-blur $input-focus-width rgba(var(--#{$prefix}success-rgb), $input-btn-focus-color-opacity),
					"border-color": var(--#{$prefix}form-valid-border-color),
				),
				"invalid": (
					"color": var(--#{$prefix}form-invalid-color),
					"icon": $form-feedback-icon-invalid,
					"tooltip-color": #fff,
					"tooltip-bg-color": var(--#{$prefix}danger),
					"focus-box-shadow": 0 0 $input-btn-focus-blur $input-focus-width rgba(var(--#{$prefix}danger-rgb), $input-btn-focus-color-opacity),
					"border-color": var(--#{$prefix}form-invalid-border-color),
				)
				);
			`,
		}),
		new e.text(
			"Maps of {{$form-validation-states}} can contain three optional parameters to override tooltips and focus styles."
		),

		//-----------------------

		new e.subtitle("Sass loop"),
		new e.text(
			"Used to iterate over {{$form-validation-states}} map values to generate our validation styles. Any modifications to the above Sass map will be reflected in your compiled CSS via this loop."
		),
		new e.codepreview({
			type: "css",
			title: "scss/forms/_validation.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/forms/_validation.scss",
			code: `
				@each $state, $data in $form-validation-states {
					@include form-validation-state($state, $data...);
				}
			`,
		}),

		//-----------------------

		new e.subtitle("Customizing"),
		new e.text(
			"Validation states can be customized via Sass with the {{$form-validation-states}} map. Located in our {{_variables.scss}} file, this Sass map is how we generate the default {{valid}}/{{invalid}} validation states. Included is a nested map for customizing each state’s color, icon, tooltip color, and focus shadow. While no other states are supported by browsers, those using custom styles can easily add more complex form feedback."
		),
	],
};
