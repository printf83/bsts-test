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

		new e.title("Available styles"),
		new e.text(
			"Change the style of {{.nav}}s component with modifiers and utilities. Mix and match as needed, or build your own."
		),

		//-----------------------

		new e.subtitle("Horizontal alignment"),
		new e.text(
			"Change the horizontal alignment of your nav with {{https://getbootstrap.com/docs/5.3/layout/grid/#horizontal-alignment::flexbox utilities}}. By default, navs are left-aligned, but you can easily change them to center or right aligned."
		),
		new e.text("Centered with {{.justify-content-center}}:"),
		new e.code({
			output: () => {
				return new b.nav.header.container({ justifyContent: "center" }, [
					new b.nav.header.item(new b.nav.header.link({ active: true, href: "#" }, "Active")),
					new b.nav.header.item(new b.nav.header.link({ href: "#" }, "Link")),
					new b.nav.header.item(new b.nav.header.link({ href: "#" }, "Link")),
					new b.nav.header.item(new b.nav.header.link({ disabled: true, href: "#" }, "Disabled")),
				]);
			},
		}),
		new e.text("Right-aligned with {{.justify-content-end}}:"),
		new e.code({
			output: () => {
				return new b.nav.header.container({ justifyContent: "end" }, [
					new b.nav.header.item(new b.nav.header.link({ active: true, href: "#" }, "Active")),
					new b.nav.header.item(new b.nav.header.link({ href: "#" }, "Link")),
					new b.nav.header.item(new b.nav.header.link({ href: "#" }, "Link")),
					new b.nav.header.item(new b.nav.header.link({ disabled: true, href: "#" }, "Disabled")),
				]);
			},
		}),

		//-----------------------

		new e.subtitle("Vertical"),
		new e.text(
			"Stack your navigation by changing the flex item direction with the {{.flex-column}} utility. Need to stack them on some viewports but not others? Use the responsive versions (e.g., {{.flex-sm-column}})."
		),
		new e.code({
			output: () => {
				return new b.nav.header.container({ flex: "column" }, [
					new b.nav.header.item(new b.nav.header.link({ active: true, href: "#" }, "Active")),
					new b.nav.header.item(new b.nav.header.link({ href: "#" }, "Link")),
					new b.nav.header.item(new b.nav.header.link({ href: "#" }, "Link")),
					new b.nav.header.item(new b.nav.header.link({ disabled: true, href: "#" }, "Disabled")),
				]);
			},
		}),
		new e.text("As always, vertical navigation is possible without {{<ul>}}s, too."),
		new e.code({
			output: () => {
				return new b.nav.header.containerNav({ flex: "column" }, [
					new b.nav.header.link({ active: true, href: "#" }, "Active"),
					new b.nav.header.link({ href: "#" }, "Link"),
					new b.nav.header.link({ href: "#" }, "Link"),
					new b.nav.header.link({ disabled: true, href: "#" }, "Disabled"),
				]);
			},
		}),

		//-----------------------

		new e.title("Tabs"),
		new e.text(
			"Takes the basic nav from above and adds the {{.nav-tabs}} class to generate a tabbed interface. Use them to create tabbable regions with our {{https://getbootstrap.com/docs/5.3/components/navs-tabs/#javascript-behavior::tab JavaScript plugin}}."
		),
		new e.code({
			output: () => {
				return new b.nav.header.container({ type: "tab" }, [
					new b.nav.header.item(new b.nav.header.link({ active: true, href: "#" }, "Active")),
					new b.nav.header.item(new b.nav.header.link({ href: "#" }, "Link")),
					new b.nav.header.item(new b.nav.header.link({ href: "#" }, "Link")),
					new b.nav.header.item(new b.nav.header.link({ disabled: true, href: "#" }, "Disabled")),
				]);
			},
		}),

		//-----------------------

		new e.title("Pills"),
		new e.text("Take that same HTML, but use {{.nav-pills}} instead:"),
		new e.code({
			output: () => {
				return new b.nav.header.container({ type: "pill" }, [
					new b.nav.header.item(new b.nav.header.link({ active: true, href: "#" }, "Active")),
					new b.nav.header.item(new b.nav.header.link({ href: "#" }, "Link")),
					new b.nav.header.item(new b.nav.header.link({ href: "#" }, "Link")),
					new b.nav.header.item(new b.nav.header.link({ disabled: true, href: "#" }, "Disabled")),
				]);
			},
		}),

		//-----------------------

		new e.title("Underline"),
		new e.text("Take that same HTML, but use {{.nav-underline}} instead:"),
		new e.code({
			output: () => {
				return new b.nav.header.container({ type: "underline" }, [
					new b.nav.header.item(new b.nav.header.link({ active: true, href: "#" }, "Active")),
					new b.nav.header.item(new b.nav.header.link({ href: "#" }, "Link")),
					new b.nav.header.item(new b.nav.header.link({ href: "#" }, "Link")),
					new b.nav.header.item(new b.nav.header.link({ disabled: true, href: "#" }, "Disabled")),
				]);
			},
		}),

		//-----------------------

		new e.title("Fill and justify"),
		new e.text(
			"Force your {{.nav}}’s contents to extend the full available width one of two modifier classes. To proportionately fill all available space with your {{.nav-items}}, use {{.nav-fill}}. Notice that all horizontal space is occupied, but not every nav item has the same width."
		),
		new e.code({
			output: () => {
				return new b.nav.header.container({ type: "pill", itemWidth: "fill" }, [
					new b.nav.header.item(new b.nav.header.link({ active: true, href: "#" }, "Active")),
					new b.nav.header.item(new b.nav.header.link({ href: "#" }, "Much longer nav link")),
					new b.nav.header.item(new b.nav.header.link({ href: "#" }, "Link")),
					new b.nav.header.item(new b.nav.header.link({ disabled: true, href: "#" }, "Disabled")),
				]);
			},
		}),
		new e.text(
			"When using a {{<nav>}}-based navigation, you can safely omit {{.nav-item}} as only {{.nav-link}} is required for styling {{<a>}} elements."
		),
		new e.code({
			output: () => {
				return new b.nav.header.containerNav({ type: "pill", itemWidth: "fill" }, [
					new b.nav.header.link({ active: true, href: "#" }, "Active"),
					new b.nav.header.link({ href: "#" }, "Much longer nav link"),
					new b.nav.header.link({ href: "#" }, "Link"),
					new b.nav.header.link({ disabled: true, href: "#" }, "Disabled"),
				]);
			},
		}),
		new e.text(
			"For equal-width elements, use {{.nav-justified}}. All horizontal space will be occupied by nav links, but unlike the {{.nav-fill}} above, every nav item will be the same width."
		),
		new e.code({
			output: () => {
				return new b.nav.header.container({ type: "pill", itemWidth: "justified" }, [
					new b.nav.header.item(new b.nav.header.link({ active: true, href: "#" }, "Active")),
					new b.nav.header.item(new b.nav.header.link({ href: "#" }, "Much longer nav link")),
					new b.nav.header.item(new b.nav.header.link({ href: "#" }, "Link")),
					new b.nav.header.item(new b.nav.header.link({ disabled: true, href: "#" }, "Disabled")),
				]);
			},
		}),
		new e.text("Similar to the {{.nav-fill}} example using a {{<nav>}}-based navigation."),
		new e.code({
			output: () => {
				return new b.nav.header.containerNav({ type: "pill", itemWidth: "justified" }, [
					new b.nav.header.link({ active: true, href: "#" }, "Active"),
					new b.nav.header.link({ href: "#" }, "Much longer nav link"),
					new b.nav.header.link({ href: "#" }, "Link"),
					new b.nav.header.link({ disabled: true, href: "#" }, "Disabled"),
				]);
			},
		}),

		//-----------------------

		new e.title("Working with flex utilities"),
		new e.text(
			"If you need responsive nav variations, consider using a series of {{https://getbootstrap.com/docs/5.3/utilities/flex/::flexbox utilities}}. While more verbose, these utilities offer greater customization across responsive breakpoints. In the example below, our nav will be stacked on the lowest breakpoint, then adapt to a horizontal layout that fills the available width starting from the small breakpoint."
		),
		new e.code({
			output: () => {
				return new b.nav.header.containerNav({ type: "pill", flex: ["column", "sm-row"] }, [
					new b.nav.header.link({ active: true, href: "#" }, "Active"),
					new b.nav.header.link({ href: "#" }, "Much longer nav link"),
					new b.nav.header.link({ href: "#" }, "Link"),
					new b.nav.header.link({ disabled: true, href: "#" }, "Disabled"),
				]);
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
