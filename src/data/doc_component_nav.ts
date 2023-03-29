import { core, h, b } from "@printf83/bsts";
import * as e from "../ctl/example/_index.js";
import { IAttrContent } from "../ctl/main/container.js";

export const doc_component_nav: IAttrContent = {
	title: "Navs and tabs",
	description: "Documentation and examples for how to use Bootstrap’s included navigation components.",
	item: [
		new e.title("Base nav"),
		new e.text(
			"Navigation available in Bootstrap share general markup and styles, from the base {{.nav}} class to the active and disabled states. Swap modifier classes to switch between each style."
		),
		new e.text(
			"The base {{.nav}} component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling."
		),
		new e.alert({ color: "info", callout: true }, [
			new h.p(
				"The base {{.nav}} component does not include any {{.active}} state. The following examples include the class, mainly to demonstrate that this particular class does not trigger any special styling."
			),
			new h.p(
				"To convey the active state to assistive technologies, use the {{aria-current}} attribute — using the page value for current page, or {{true}} for the current item in a set."
			),
		]),
		new e.code({
			output: () => {
				return new b.nav.header.container([
					new b.nav.header.item(new b.nav.header.link({ active: true, href: "#" }, "Active")),
					new b.nav.header.item(new b.nav.header.link({ href: "#" }, "Link")),
					new b.nav.header.item(new b.nav.header.link({ href: "#" }, "Link")),
					new b.nav.header.item(new b.nav.header.link({ disabled: true, href: "#" }, "Disabled")),
				]);
			},
		}),
		new e.text(
			"Classes are used throughout, so your markup can be super flexible. Use {{<ul>}}s like above, {{<ol>}} if the order of your items is important, or roll your own with a {{<nav>}} element. Because the {{.nav}} uses {{display: flex}}, the nav links behave the same as nav items would, but without the extra markup."
		),
		new e.code({
			output: () => {
				return new b.nav.header.containerNav([
					new b.nav.header.link({ active: true, href: "#" }, "Active"),
					new b.nav.header.link({ href: "#" }, "Link"),
					new b.nav.header.link({ href: "#" }, "Link"),
					new b.nav.header.link({ disabled: true, href: "#" }, "Disabled"),
				]);
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
