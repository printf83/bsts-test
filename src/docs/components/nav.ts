import { h, b } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const nav: IAttrContent = {
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
			"Change the horizontal alignment of your nav with {{nav:docs/layout/grid#horizontal_alignment::flexbox utilities}}. By default, navs are left-aligned, but you can easily change them to center or right aligned."
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

		new e.subtitle("Tabs"),
		new e.text(
			"Takes the basic nav from above and adds the {{.nav-tabs}} class to generate a tabbed interface. Use them to create tabbable regions with Bootstrap {{nav:docs/components/nav#javascript_behavior::tab JavaScript plugin}}."
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

		new e.subtitle("Pills"),
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

		new e.subtitle("Underline"),
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

		new e.subtitle("Fill and justify"),
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
			"If you need responsive nav variations, consider using a series of {{nav:docs/utilities/flex::flexbox utilities}}. While more verbose, these utilities offer greater customization across responsive breakpoints. In the example below, Bootstrap nav will be stacked on the lowest breakpoint, then adapt to a horizontal layout that fills the available width starting from the small breakpoint."
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

		//-----------------------

		new e.title("Regarding accessibility"),
		new e.text(
			"If you’re using navs to provide a navigation bar, be sure to add a {{role='navigation'}} to the most logical parent container of the {{<ul>}}, or wrap a {{<nav>}} element around the whole navigation. Do not add the role to the {{<ul>}} itself, as this would prevent it from being announced as an actual list by assistive technologies."
		),
		new e.text(
			"Note that navigation bars, even if visually styled as tabs with the {{.nav-tabs}} class, should {{b::not}} be given {{role='tablist'}}, {{role='tab'}} or {{role='tabpanel'}} attributes. These are only appropriate for dynamic tabbed interfaces, as described in the {{https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/::ARIA Authoring Practices Guide tabs pattern}}. See {{nav:docs/components/nav#javascript_behavior::JavaScript behavior}} for dynamic tabbed interfaces in this section for an example. The {{aria-current}} attribute is not necessary on dynamic tabbed interfaces since Bootstrap JavaScript handles the selected state by adding {{aria-selected='true'}} on the active tab."
		),

		//-----------------------

		new e.title("Using dropdowns"),
		new e.text(
			"Add dropdown menus with a little extra HTML and the {{nav:docs/components/dropdown#usage::dropdowns JavaScript plugin}}."
		),

		//-----------------------

		new e.subtitle("Tabs with dropdowns"),
		new e.code({
			output: () => {
				return new b.nav.header.container({ type: "tab" }, [
					new b.nav.header.item(new b.nav.header.link({ active: true, href: "#" }, "Active")),
					new b.nav.header.item({ dropdown: true }, [
						new b.dropdown.toggle({ navItem: true }, "Dropdown"),
						new b.dropdown.menu([
							new b.dropdown.item({ href: "#" }, "Action"),
							new b.dropdown.item({ href: "#" }, "Another action"),
							new b.dropdown.item({ href: "#" }, "Something else here"),
							new b.dropdown.divider(),
							new b.dropdown.item({ href: "#" }, "Separated link"),
						]),
					]),
					new b.nav.header.item(new b.nav.header.link({ href: "#" }, "Link")),
					new b.nav.header.item(new b.nav.header.link({ disabled: true, href: "#" }, "Disabled")),
				]);
			},
		}),

		//-----------------------

		new e.subtitle("Pills with dropdowns"),
		new e.code({
			output: () => {
				return new b.nav.header.container({ type: "pill" }, [
					new b.nav.header.item(new b.nav.header.link({ active: true, href: "#" }, "Active")),
					new b.nav.header.item({ dropdown: true }, [
						new b.dropdown.toggle({ navItem: true }, "Dropdown"),
						new b.dropdown.menu([
							new b.dropdown.item({ href: "#" }, "Action"),
							new b.dropdown.item({ href: "#" }, "Another action"),
							new b.dropdown.item({ href: "#" }, "Something else here"),
							new b.dropdown.divider(),
							new b.dropdown.item({ href: "#" }, "Separated link"),
						]),
					]),
					new b.nav.header.item(new b.nav.header.link({ href: "#" }, "Link")),
					new b.nav.header.item(new b.nav.header.link({ disabled: true, href: "#" }, "Disabled")),
				]);
			},
		}),

		//-----------------------

		new e.title("CSS"),
		new e.subtitle("Variables"),
		new e.text(
			"As part of Bootstrap’s evolving CSS variables approach, navs now use local CSS variables on {{.nav}}, {{.nav-tabs}}, and {{.nav-pills}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."
		),
		new e.text("On the {{.nav}} base class:"),
		new e.codepreview({
			type: "css",
			title: "scss/_nav.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_nav.scss",
			code: `
				--#{$prefix}nav-link-padding-x: #{$nav-link-padding-x};
				--#{$prefix}nav-link-padding-y: #{$nav-link-padding-y};
				@include rfs($nav-link-font-size, --#{$prefix}nav-link-font-size);
				--#{$prefix}nav-link-font-weight: #{$nav-link-font-weight};
				--#{$prefix}nav-link-color: #{$nav-link-color};
				--#{$prefix}nav-link-hover-color: #{$nav-link-hover-color};
				--#{$prefix}nav-link-disabled-color: #{$nav-link-disabled-color};
			`,
		}),
		new e.text("On the {{.nav-tabs}} modifier class:"),
		new e.codepreview({
			type: "css",
			title: "scss/_nav.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_nav.scss",
			code: `
				--#{$prefix}nav-tabs-border-width: #{$nav-tabs-border-width};
				--#{$prefix}nav-tabs-border-color: #{$nav-tabs-border-color};
				--#{$prefix}nav-tabs-border-radius: #{$nav-tabs-border-radius};
				--#{$prefix}nav-tabs-link-hover-border-color: #{$nav-tabs-link-hover-border-color};
				--#{$prefix}nav-tabs-link-active-color: #{$nav-tabs-link-active-color};
				--#{$prefix}nav-tabs-link-active-bg: #{$nav-tabs-link-active-bg};
				--#{$prefix}nav-tabs-link-active-border-color: #{$nav-tabs-link-active-border-color};
			`,
		}),
		new e.text("On the {{.nav-pills}} modifier class:"),
		new e.codepreview({
			type: "css",
			title: "scss/_nav.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_nav.scss",
			code: `
				--#{$prefix}nav-pills-border-radius: #{$nav-pills-border-radius};
				--#{$prefix}nav-pills-link-active-color: #{$nav-pills-link-active-color};
				--#{$prefix}nav-pills-link-active-bg: #{$nav-pills-link-active-bg};
			`,
		}),
		new e.text("On the {{.nav-underline}} modifier class:"),
		new e.codepreview({
			type: "css",
			title: "scss/_nav.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_nav.scss",
			code: `
				--#{$prefix}nav-underline-gap: #{$nav-underline-gap};
				--#{$prefix}nav-underline-border-width: #{$nav-underline-border-width};
				--#{$prefix}nav-underline-link-active-color: #{$nav-underline-link-active-color};
			`,
		}),

		new e.subtitle("Sass variables"),

		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss",
			code: `
				$nav-link-padding-y:                .5rem;
				$nav-link-padding-x:                1rem;
				$nav-link-font-size:                null;
				$nav-link-font-weight:              null;
				$nav-link-color:                    var(--#{$prefix}link-color);
				$nav-link-hover-color:              var(--#{$prefix}link-hover-color);
				$nav-link-transition:               color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out;
				$nav-link-disabled-color:           var(--#{$prefix}secondary-color);
				$nav-link-focus-box-shadow:         $focus-ring-box-shadow;

				$nav-tabs-border-color:             var(--#{$prefix}border-color);
				$nav-tabs-border-width:             var(--#{$prefix}border-width);
				$nav-tabs-border-radius:            var(--#{$prefix}border-radius);
				$nav-tabs-link-hover-border-color:  var(--#{$prefix}secondary-bg) var(--#{$prefix}secondary-bg) $nav-tabs-border-color;
				$nav-tabs-link-active-color:        var(--#{$prefix}emphasis-color);
				$nav-tabs-link-active-bg:           var(--#{$prefix}body-bg);
				$nav-tabs-link-active-border-color: var(--#{$prefix}border-color) var(--#{$prefix}border-color) $nav-tabs-link-active-bg;

				$nav-pills-border-radius:           $border-radius;
				$nav-pills-link-active-color:       $component-active-color;
				$nav-pills-link-active-bg:          $component-active-bg;

				$nav-underline-gap:                 1rem;
				$nav-underline-border-width:        .125rem;
				$nav-underline-link-active-color:   var(--#{$prefix}emphasis-color);
			`,
		}),

		//-----------------------

		new e.title("JavaScript behavior"),
		new e.text(
			"Use the tab JavaScript plugin—include it individually or through the compiled {{bootstrap.js}} file—to extend Bootstrap navigational tabs and pills to create tabbable panes of local content."
		),
		new e.code({
			output: () => {
				const d = [
					{ label: "Home", id: "home", active: true },
					{ label: "Profile", id: "profile" },
					{ label: "Contact", id: "contact" },
					{ label: "Disabled", id: "disabled", disabled: true },
				];

				return [
					new b.nav.header.container(
						{ type: "tab", role: "tablist", id: "myTab" },
						d.map((i) => {
							return new b.nav.header.item(
								{ role: "presentation" },
								new b.nav.header.button(
									{
										active: i.active,
										disabled: i.disabled,
										id: `${i.id}-tab`,
										target: `#${i.id}-tab-pane`,
										controlfor: `${i.id}-tab-pane`,
										toggle: "tab",
									},
									i.label
								)
							);
						})
					),
					new b.nav.content.container(
						{ id: "myTabContent", marginTop: 3 },
						d.map((i) => {
							return new b.nav.content.item(
								{
									active: i.active,
									id: `${i.id}-tab-pane`,
									role: "tabpanel",
									labelledby: `${i.id}-tab`,
								},
								`This is some placeholder content the {{b::${i.label} tab's}} associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other {{.nav-}}powered navigation.`
							);
						})
					),
				];
			},
		}),
		new e.text(
			"To help fit your needs, this works with {{<ul>}}-based markup, as shown above, or with any arbitrary “roll your own” markup. Note that if you’re using {{<nav>}}, you shouldn’t add {{role='tablist'}} directly to it, as this would override the element’s native role as a navigation landmark. Instead, switch to an alternative element (in the example below, a simple {{<div>}}) and wrap the {{<nav>}} around it."
		),
		new e.code({
			output: () => {
				const d = [
					{ label: "Home", id: "home", active: true },
					{ label: "Profile", id: "profile" },
					{ label: "Contact", id: "contact" },
					{ label: "Disabled", id: "disabled", disabled: true },
				];

				return [
					new b.nav.header.containerNav(
						{ type: "tab", role: "tablist", id: "nav-tab" },
						d.map((i) => {
							return new b.nav.header.button(
								{
									active: i.active,
									disabled: i.disabled,
									id: `${i.id}-tab`,
									target: `#nav-${i.id}-tab-pane`,
									controlfor: `nav-${i.id}-tab-pane`,
									toggle: "tab",
								},
								i.label
							);
						})
					),
					new b.nav.content.container(
						{ id: "nav-tabContent", marginTop: 3 },
						d.map((i) => {
							return new b.nav.content.item(
								{
									active: i.active,
									id: `nav-${i.id}-tab-pane`,
									role: "tabpanel",
									labelledby: `nav-${i.id}-tab`,
								},
								`This is some placeholder content the {{b::${i.label} tab's}} associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other {{.nav-}}powered navigation.`
							);
						})
					),
				];
			},
		}),
		new e.text("The tabs plugin also works with pills."),
		new e.code({
			output: () => {
				const d = [
					{ label: "Home", id: "home", active: true },
					{ label: "Profile", id: "profile" },
					{ label: "Contact", id: "contact" },
					{ label: "Disabled", id: "disabled", disabled: true },
				];

				return [
					new b.nav.header.container(
						{ type: "pill", role: "tablist", id: "pills-tab" },
						d.map((i) => {
							return new b.nav.header.item(
								{ role: "presentation" },
								new b.nav.header.button(
									{
										active: i.active,
										disabled: i.disabled,
										id: `pills-${i.id}-tab`,
										target: `#pills-${i.id}-tab-pane`,
										controlfor: `pills-${i.id}-tab-pane`,
										toggle: "pill",
									},
									i.label
								)
							);
						})
					),
					new b.nav.content.container(
						{ id: "pills-tabContent", marginTop: 3 },
						d.map((i) => {
							return new b.nav.content.item(
								{
									active: i.active,
									id: `pills-${i.id}-tab-pane`,
									role: "tabpanel",
									labelledby: `pills-${i.id}-tab`,
								},
								`This is some placeholder content the {{b::${i.label} tab's}} associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other {{.nav-}}powered navigation.`
							);
						})
					),
				];
			},
		}),
		new e.text(
			"And with vertical pills. Ideally, for vertical tabs, you should also add {{aria-orientation='vertical'}} to the tab list container."
		),
		new e.code({
			output: () => {
				const d = [
					{ label: "Home", id: "home", active: true },
					{ label: "Profile", id: "profile" },
					{ label: "Disabled", id: "disabled", disabled: true },
					{ label: "Messages", id: "messages" },
					{ label: "Settings", id: "settings" },
				];

				return new h.div({ display: "flex", alignItem: "start" }, [
					new b.nav.header.containerNav(
						{
							type: "pill",
							role: "tablist",
							id: "v-pills-tab",
							flex: "column",
							marginEnd: 3,
							vertical: true,
						},
						d.map((i) => {
							return new b.nav.header.button(
								{
									active: i.active,
									disabled: i.disabled,
									id: `v-pills-${i.id}-tab`,
									target: `#v-pills-${i.id}-tab-pane`,
									controlfor: `v-pills-${i.id}-tab-pane`,
									toggle: "pill",
								},
								i.label
							);
						})
					),
					new b.nav.content.container(
						{ id: "v-pills-tabContent", marginTop: 3 },
						d.map((i) => {
							return new b.nav.content.item(
								{
									active: i.active,
									id: `v-pills-${i.id}-tab-pane`,
									role: "tabpanel",
									labelledby: `v-pills-${i.id}-tab`,
								},
								`This is some placeholder content the {{b::${i.label} tab's}} associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other {{.nav-}}powered navigation.`
							);
						})
					),
				]);
			},
		}),

		//-----------------------

		new e.subtitle("Accessibility"),
		new e.text(
			"Dynamic tabbed interfaces, as described in the {{https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/::ARIA Authoring Practices Guide tabs pattern}}, require {{role='tablist'}}, {{role='tab'}}, {{role='tabpanel'}}, and additional {{aria-}} attributes in order to convey their structure, functionality, and current state to users of assistive technologies (such as screen readers). As a best practice, we recommend using {{<button>}} elements for the tabs, as these are controls that trigger a dynamic change, rather than links that navigate to a new page or location."
		),
		new e.text(
			"In line with the ARIA Authoring Practices pattern, only the currently active tab receives keyboard focus. When the JavaScript plugin is initialized, it will set {{tabindex='-1'}} on all inactive tab controls. Once the currently active tab has focus, the cursor keys activate the previous/next tab, with the plugin changing the {{https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/::roving tabindex}} accordingly. However, note that the JavaScript plugin does not distinguish between horizontal and vertical tab lists when it comes to cursor key interactions: regardless of the tab list’s orientation, both the up and left cursor go to the previous tab, and down and right cursor go to the next tab."
		),
		new e.alert(
			{ color: "warning", callout: true },
			"In general, to facilitate keyboard navigation, it’s recommended to make the tab panels themselves focusable as well, unless the first element containing meaningful content inside the tab panel is already focusable. The JavaScript plugin does not try to handle this aspect—where appropriate, you’ll need to explicitly make your tab panels focusable by adding {{tabindex='0'}} in your markup."
		),
		new e.alert(
			{ color: "danger", callout: true },
			" The tab JavaScript plugin {{b::does not}} support tabbed interfaces that contain dropdown menus, as these cause both usability and accessibility issues. From a usability perspective, the fact that the currently displayed tab’s trigger element is not immediately visible (as it’s inside the closed dropdown menu) can cause confusion. From an accessibility point of view, there is currently no sensible way to map this sort of construct to a standard WAI ARIA pattern, meaning that it cannot be easily made understandable to users of assistive technologies."
		),

		//-----------------------

		new e.subtitle("Using data attributes"),
		new e.text(
			"You can activate a tab or pill navigation without writing any JavaScript by simply specifying {{data-bs-toggle='tab'}} or {{data-bs-toggle='pill'}} on an element. Use these data attributes on {{.nav-tabs}} or {{.nav-pills}}."
		),
		new e.codepreview({
			type: "html",
			code: `
				<!-- Nav tabs -->
				<ul class="nav nav-tabs" id="myTab" role="tablist">
				<li class="nav-item" role="presentation">
					<button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
				</li>
				<li class="nav-item" role="presentation">
					<button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
				</li>
				<li class="nav-item" role="presentation">
					<button class="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">Messages</button>
				</li>
				<li class="nav-item" role="presentation">
					<button class="nav-link" id="settings-tab" data-bs-toggle="tab" data-bs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
				</li>
				</ul>

				<!-- Tab panes -->
				<div class="tab-content">
				<div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab" tabindex="0">...</div>
				<div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
				<div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab" tabindex="0">...</div>
				<div class="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab" tabindex="0">...</div>
				</div>
			`,
		}),

		//-----------------------

		new e.subtitle("Via JavaScript"),
		new e.text("Enable tabbable tabs via JavaScript (each tab needs to be activated individually):"),
		new e.codepreview({
			type: "js",
			code: `
				const triggerTabList = document.querySelectorAll('#myTab button')
				triggerTabList.forEach(triggerEl => {
				const tabTrigger = new bootstrap.Tab(triggerEl)

				triggerEl.addEventListener('click', event => {
					event.preventDefault()
					tabTrigger.show()
				})
				})
			`,
		}),
		new e.text("You can activate individual tabs in several ways:"),
		new e.codepreview({
			type: "js",
			code: `
				const triggerEl = document.querySelector('#myTab button[data-bs-target="#profile"]')
				bootstrap.Tab.getInstance(triggerEl).show() // Select tab by name

				const triggerFirstTabEl = document.querySelector('#myTab li:first-child button')
				bootstrap.Tab.getInstance(triggerFirstTabEl).show() // Select first tab
			`,
		}),

		//-----------------------

		new e.subtitle("Fade effect"),
		new e.text(
			"To make tabs fade in, add {{.fade}} to each {{.tab-pane}}. The first tab pane must also have {{.show}} to make the initial content visible."
		),
		new e.codepreview({
			type: "html",
			code: `
				<div class="tab-content">
					<div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" tabindex="0">...</div>
					<div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
					<div class="tab-pane fade" id="messages" role="tabpanel" aria-labelledby="messages-tab" tabindex="0">...</div>
					<div class="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab" tabindex="0">...</div>
				</div>
			`,
		}),

		//-----------------------

		new e.subtitle("Methods"),
		new e.alert(
			{ color: "danger", callout: true },
			"{{b::All API methods are asynchronous and start a transition}}. They return to the caller as soon as the transition is started, but before it ends. In addition, a method call on a transitioning component will be ignored. {{https://getbootstrap.com/docs/5.3/getting-started/javascript/#asynchronous-functions-and-transitions::Learn more in Bootstrap JavaScript docs}}."
		),
		new e.text("Activates your content as a tab element."),
		new e.text("You can create a tab instance with the constructor, for example:"),
		new e.codepreview({
			type: "js",
			code: `
				const bsTab = new bootstrap.Tab('#myTab')
			`,
		}),
		new e.table({
			item: [
				["Method", "Description"],
				["{{dispose}}", "Destroys an element’s tab."],
				[
					"{{getInstance}}",
					"Static method which allows you to get the tab instance associated with a DOM element, you can use it like this: {{bootstrap.Tab.getInstance(element)}}.",
				],
				[
					"{{getOrCreateInstance}}",
					"Static method which returns a tab instance associated to a DOM element or create a new one in case it wasn’t initialized. You can use it like this: {{bootstrap.Tab.getOrCreateInstance(element)}}.",
				],
				[
					"{{show}}",
					"Selects the given tab and shows its associated pane. Any other tab that was previously selected becomes unselected and its associated pane is hidden. {{b::Returns to the caller before the tab pane has actually been shown}} (i.e. before the {{shown.bs.tab}} event occurs).",
				],
			],
		}),

		//-----------------------

		new e.subtitle("Events"),
		new e.text("When showing a new tab, the events fire in the following order:"),
		new e.ol({
			item: [
				"{{hide.bs.tab}} (on the current active tab)",
				"{{show.bs.tab}} (on the to-be-shown tab)",
				"{{hidden.bs.tab}} (on the previous active tab, the same one as for the {{hide.bs.tab}} event)",
				"{{shown.bs.tab}} (on the newly-active just-shown tab, the same one as for the {{show.bs.tab}} event)",
			],
		}),
		new e.text(
			"If no tab was already active, then the {{hide.bs.tab}} and {{hidden.bs.tab}} events will not be fired."
		),
		new e.table({
			item: [
				["Event type", "Description"],
				[
					"{{hide.bs.tab}}",
					"This event fires when a new tab is to be shown (and thus the previous active tab is to be hidden). Use {{event.target}} and {{event.relatedTarget}} to target the current active tab and the new soon-to-be-active tab, respectively.",
				],
				[
					"{{hidden.bs.tab}}",
					"This event fires after a new tab is shown (and thus the previous active tab is hidden). Use {{event.target}} and {{event.relatedTarget}} to target the previous active tab and the new active tab, respectively.",
				],
				[
					"{{show.bs.tab}}",
					"This event fires on tab show, but before the new tab has been shown. Use {{event.target}} and {{event.relatedTarget}} to target the active tab and the previous active tab (if available) respectively.",
				],
				[
					"{{shown.bs.tab}}",
					"This event fires on tab show after a tab has been shown. Use {{event.target}} and {{event.relatedTarget}} to target the active tab and the previous active tab (if available) respectively.",
				],
			],
		}),
		new e.codepreview({
			type: "js",
			code: `
				const tabEl = document.querySelector('button[data-bs-toggle="tab"]')
				tabEl.addEventListener('shown.bs.tab', event => {
				event.target // newly activated tab
				event.relatedTarget // previous active tab
				})
			`,
		}),
	],
};
