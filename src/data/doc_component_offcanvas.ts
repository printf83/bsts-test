import { core, h, b } from "@printf83/bsts";
import * as e from "../ctl/example/_index.js";
import { IAttrContent } from "../ctl/main/container.js";

export const doc_component_offcanvas: IAttrContent = {
	title: "Offcanvas",
	description:
		"Build hidden sidebars into your project for navigation, shopping carts, and more with a few classes and our JavaScript plugin.",
	item: [
		new e.title("How it works"),
		new e.text(
			"Offcanvas is a sidebar component that can be toggled via JavaScript to appear from the left, right, top, or bottom edge of the viewport. Buttons or anchors are used as triggers that are attached to specific elements you toggle, and {{data}} attributes are used to invoke our JavaScript."
		),
		new e.ul({
			item: [
				"Offcanvas shares some of the same JavaScript code as modals. Conceptually, they are quite similar, but they are separate plugins.",
				"Similarly, some source {{https://getbootstrap.com/docs/5.3/components/offcanvas/#sass-variables::Sass variables}} for offcanvas’s styles and dimensions are inherited from the modal’s variables.",
				"When shown, offcanvas includes a default backdrop that can be clicked to hide the offcanvas.",
				"Similar to modals, only one offcanvas can be shown at a time.",
			],
		}),
		new e.text(
			"{{b::Heads up!}} Given how CSS handles animations, you cannot use {{margin}} or {{translate}} on an {{.offcanvas}} element. Instead, use the class as an independent wrapping element."
		),
		new e.alert(
			{ color: "info", callout: true },
			" The animation effect of this component is dependent on the {{prefers-reduced-motion}} media query. See the {{https://getbootstrap.com/docs/5.3/getting-started/accessibility/#reduced-motion::reduced motion section of our accessibility documentation}}."
		),

		//-----------------------

		new e.title("Examples"),
		new e.subtitle("Offcanvas components"),
		new e.text(
			"Below is an offcanvas example that is shown by default (via {{.show}} on {{.offcanvas}}). Offcanvas includes support for a header with a close button and an optional body class for some initial {{padding}}. We suggest that you include offcanvas headers with dismiss actions whenever possible, or provide an explicit dismiss action."
		),
		new e.code({
			output: () => {
				return new b.offcanvas.container(
					{
						debug: true,
						placement: "start",
						labelledby: "offcanvasLabel",
					},
					[
						new b.offcanvas.header([
							new b.offcanvas.title({ id: "offcanvasLabel" }, "Offcanvas"),
							new b.offcanvas.btnclose(),
						]),
						new b.offcanvas.body(
							" Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here."
						),
					]
				);
			},
		}),

		//-----------------------

		new e.subtitle("Live demo"),
		new e.text(
			"Use the buttons below to show and hide an offcanvas element via JavaScript that toggles the {{.show}} class on an element with the {{.offcanvas}} class."
		),
		new e.ul({
			item: ["{{.offcanvas}} hides content (default)", "{{.offcanvas.show}} shows content"],
		}),
		new e.code({
			output: () => {
				return [
					new b.offcanvas.toggle(
						{ href: "#offcanvasExample", control: "offcanvasExample" },
						"Link with href"
					),
					new b.offcanvas.toggle(
						{ target: "#offcanvasExample", control: "offcanvasExample" },
						"Button with data-bs-target"
					),
					new b.offcanvas.container(
						{ id: "offcanvasExample", placement: "start", labelledby: "offcanvasExampleLabel" },
						[
							new b.offcanvas.header([
								new b.offcanvas.title({ id: "offcanvasExampleLabel" }, "Offcanvas"),
								new b.offcanvas.btnclose(),
							]),
							new b.offcanvas.body(
								" Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here."
							),
						]
					),
				];
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
