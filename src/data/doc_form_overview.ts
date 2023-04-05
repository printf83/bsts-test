import { core, h, b } from "@printf83/bsts";
import * as e from "../ctl/example/_index.js";
import { IAttrContent } from "../ctl/main/container.js";

export const doc_form_overview: IAttrContent = {
	title: "Forms",
	description:
		"Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.",
	item: [
		new e.item(
			new h.div(
				{ row: true },
				[
					{
						href: "https://getbootstrap.com/docs/5.3/forms/form-control/",
						title: "Form control",
						content: "Style textual inputs and textareas with support for multiple states.",
					},
					{
						href: "https://getbootstrap.com/docs/5.3/forms/select/",
						title: "Select",
						content: "Improve browser default select elements with a custom initial appearance.",
					},
					{
						href: "https://getbootstrap.com/docs/5.3/forms/checks-radios/",
						title: "Checks & radios",
						content: "Use our custom radio buttons and checkboxes in forms for selecting input options.",
					},
					{
						href: "https://getbootstrap.com/docs/5.3/forms/range/",
						title: "Range",
						content: "Replace browser default range inputs with our custom version.",
					},
					{
						href: "https://getbootstrap.com/docs/5.3/forms/input-group/",
						title: "Input group",
						content: "Attach labels and buttons to your inputs for increased semantic value.",
					},
					{
						href: "https://getbootstrap.com/docs/5.3/forms/floating-labels/",
						title: "Floating labels",
						content: "Create beautifully simple form labels that float over your input fields.",
					},
					{
						href: "https://getbootstrap.com/docs/5.3/forms/layout/",
						title: "Layout",
						content: "Create inline, horizontal, or complex grid-based layouts with your forms.",
					},
					{
						href: "https://getbootstrap.com/docs/5.3/forms/validation/",
						title: "Validation",
						content: "Validate your forms with custom or native validation behaviors and styles.",
					},
				].map((i) => {
					return new h.div(
						{ col: "md-6", marginBottom: 3 },
						new h.a({ display: "block", textDecoration: "none", href: i.href }, [
							new h.strong({ display: "block", marginBottom: 0, class: "h5" }, i.title),
							new h.span({ textColor: "secondary" }, i.content),
						])
					);
				})
			)
		),
		new e.title("Overview"),
		new e.text(
			"Bootstrap’s form controls expand on {{https://getbootstrap.com/docs/5.3/content/reboot/#forms::our Rebooted form styles}} with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices."
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
						new b.label({ for: "exampleInputEmail1" }, "Email address"),
						new b.input({ type: "email", id: "exampleInputEmail1", describedby: "emailHelp" }),
						new h.div(
							{ id: "emailHelp", class: "form-text" },
							"We'll never share your email with anyone else."
						),
					]),
					new h.div({ marginBottom: 3 }, [
						new b.label({ for: "exampleInputPassword1" }, "Password"),
						new b.input({ type: "password", id: "exampleInputPassword1", describedby: "emailHelp" }),
					]),
					new h.div({ marginBottom: 3, class: "form-check" }, [
						new b.input({ type: "checkbox", id: "exampleCheck1", describedby: "emailHelp" }),
						new b.label({ for: "exampleCheck1", formCheck: true }, "Check me out"),
					]),
					new b.button({ type: "submit" }, "Submit"),
				]);
			},
		}),

		//-----------------------

		new e.subtitle("Headings"),
		new e.code({
			output: () => {
				return [1, 2, 3, 4, 5, 6].map((i) => {
					return new h.h(i as h.HLevel, ["Example heading ", new b.badge({ bgColor: "secondary" }, "New")]);
				});
			},
		}),

		//-----------------------

		new e.subtitle("Buttons"),
		new e.text("Badges can be used as part of links or buttons to provide a counter."),
		new e.code({
			output: () => {
				return new b.button(["Notification ", new b.badge({ bgColor: "secondary" }, "4")]);
			},
		}),
		new e.text(
			"Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link, or button."
		),
		new e.text(
			"Unless the context is clear (as with the “Notifications” example, where it is understood that the “4” is the number of notifications), consider including additional context with a visually hidden piece of additional text."
		),

		//-----------------------

		new e.subtitle("Positioned"),
		new e.text("Use utilities to modify a {{.badge}} and position it in the corner of a link or button."),
		new e.code({
			output: () => {
				return new b.button({ position: "relative" }, [
					"Inbox ",
					new b.badge(
						{
							bgColor: "danger",
							position: "absolute",
							top: 0,
							start: 100,
							tMiddle: true,
							rounded: "pill",
						},
						["99+", new b.visuallyhidden("unread messages")]
					),
				]);
			},
		}),
		new e.text(
			"You can also replace the {{.badge}} class with a few more utilities without a count for a more generic indicator."
		),
		new e.code({
			output: () => {
				return new b.button({ position: "relative" }, [
					"Profile ",
					new b.badge(
						{
							bgColor: "danger",
							position: "absolute",
							top: 0,
							start: 100,
							tMiddle: true,
							rounded: "circle",
							border: true,
							borderColor: "light",
							padding: 2,
						},
						new b.visuallyhidden("New alerts")
					),
				]);
			},
		}),

		//-----------------------

		new e.title("Background colors"),
		new e.text(
			"Set a {{background-color}} with contrasting foreground {{color}} with {{https://getbootstrap.com/docs/5.3/helpers/color-background/::our .text-bg-{color} helpers}}. Previously it was required to manually pair your choice of {{https://getbootstrap.com/docs/5.3/utilities/colors/::.text-{color}}} and {{https://getbootstrap.com/docs/5.3/utilities/background/::.bg-{color}}} utilities for styling, which you still may use if you prefer."
		),
		new e.code({
			output: () => {
				return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
					return new b.badge(
						{ textBgColor: i as core.bootstrapType.textBgColor[number] },
						i.charAt(0).toUpperCase() + i.slice(1)
					);
				});
			},
		}),
		new e.alert({ color: "info", callout: true }, [
			new h.h(5, "Conveying meaning to assistive technologies"),
			new h.p(
				"Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the {{.visually-hidden}} class."
			),
		]),

		//-----------------------

		new e.title("Pill badges"),
		new e.text(
			"Use the {{.rounded-pill}} utility class to make badges more rounded with a larger {{border-radius}}."
		),
		new e.code({
			output: () => {
				return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
					return new b.badge(
						{ textBgColor: i as core.bootstrapType.textBgColor[number], rounded: "pill" },
						i.charAt(0).toUpperCase() + i.slice(1)
					);
				});
			},
		}),

		//-----------------------

		new e.title("CSS"),
		new e.subtitle("Variables"),
		new e.text(
			"As part of Bootstrap’s evolving CSS variables approach, badges now use local CSS variables on {{.badge}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."
		),

		new e.codepreview({
			type: "css",
			code: `
			    --#{$prefix}badge-padding-x: #{$badge-padding-x};
				--#{$prefix}badge-padding-y: #{$badge-padding-y};
				@include rfs($badge-font-size, --#{$prefix}badge-font-size);
				--#{$prefix}badge-font-weight: #{$badge-font-weight};
				--#{$prefix}badge-color: #{$badge-color};
				--#{$prefix}badge-border-radius: #{$badge-border-radius};
			`,
		}),

		new e.subtitle("Sass variables"),

		new e.codepreview({
			type: "css",
			code: `
				$badge-font-size:                   .75em;
				$badge-font-weight:                 $font-weight-bold;
				$badge-color:                       $white;
				$badge-padding-y:                   .35em;
				$badge-padding-x:                   .65em;
				$badge-border-radius:               $border-radius;
			`,
		}),
	],
};
