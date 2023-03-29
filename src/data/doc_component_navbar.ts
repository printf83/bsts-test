import { core, h, b } from "@printf83/bsts";
import * as e from "../ctl/example/_index.js";
import { IAttrContent } from "../ctl/main/container.js";

export const doc_component_navbar: IAttrContent = {
	title: "Navbar",
	description:
		"Documentation and examples for Bootstrap’s powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.",
	item: [
		new e.title("How it works"),
		new e.text("Here’s what you need to know before getting started with the navbar:"),
		new e.ul({
			item: [
				"Navbars require a wrapping {{.navbar}} with {{.navbar-expand{-sm|-md|-lg|-xl|-xxl}}} for responsive collapsing and {{https://getbootstrap.com/docs/5.3/components/navbar/#color-schemes::color scheme}} classes.",
				"Navbars and their contents are fluid by default. Change the {{https://getbootstrap.com/docs/5.3/components/navbar/#containers::container}} to limit their horizontal width in different ways.",
				"Use our {{https://getbootstrap.com/docs/5.3/utilities/spacing/::spacing}} and {{https://getbootstrap.com/docs/5.3/utilities/flex/::flex}} utility classes for controlling spacing and alignment within navbars.",
				"Navbars are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our Collapse JavaScript plugin.",
				"Ensure accessibility by using a {{<nav>}} element or, if using a more generic element such as a {{<div>}}, add a {{role='navigation'}} to every navbar to explicitly identify it as a landmark region for users of assistive technologies.",
				"Indicate the current item by using {{aria-current='page'}} for the current page or {{aria-current='true'}} for the current item in a set.",
				"{{b::New in v5.2.0:}} Navbars can be themed with CSS variables that are scoped to the {{.navbar}} base class. {{.navbar-light}} has been deprecated and {{.navbar-dark}} has been rewritten to override CSS variables instead of adding additional styles.",
			],
		}),
		new e.alert(
			{ color: "info", callout: true },
			" The animation effect of this component is dependent on the {{prefers-reduced-motion}} media query. See the {{https://getbootstrap.com/docs/5.3/getting-started/accessibility/#reduced-motion::reduced motion section of our accessibility documentation}}."
		),

		//-----------------------
		new e.title("Supported content"),
		new e.text(
			"Navbars come with built-in support for a handful of sub-components. Choose from the following as needed:"
		),
		new e.ul({
			item: [
				"{{.navbar-brand}} for your company, product, or project name.",
				"{{.navbar-nav}} for a full-height and lightweight navigation (including support for dropdowns).",
				"{{.navbar-toggler}} for use with our collapse plugin and other {{https://getbootstrap.com/docs/5.3/components/navbar/#responsive-behaviors::navigation toggling}} behaviors.",
				"Flex and spacing utilities for any form controls and actions.",
				"{{.navbar-text}} for adding vertically centered strings of text.",
				"{{.collapse.navbar-collapse}} for grouping and hiding navbar contents by a parent breakpoint.",
				"Add an optional {{.navbar-scroll}} to set a {{max-height}} and {{https://getbootstrap.com/docs/5.3/components/navbar/#scrolling::scroll expanded navbar content}}.",
			],
		}),
		new e.text(
			"Here’s an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the {{lg}} (large) breakpoint."
		),
		new e.code({
			output: () => {
				return new b.navbar.container(
					{ bgColor: "body-tertiary", expand: "lg" },
					new b.navbar.innercontainer({ container: "fluid" }, [
						new b.navbar.brand({ href: "#" }, "Navbar"),
						new b.navbar.toggle.collapse({
							target: "#navbarSupportedContent",
							control: "navbarSupportedContent",
							label: "Toggle navigation",
						}),
						new b.navbar.collapse({ id: "navbarSupportedContent" }, [
							new b.navbar.itemcontainer({ marginEnd: "auto", marginBottom: [2, "lg-0"] }, [
								new b.navbar.item(new b.navbar.link({ href: "#", active: true }, "Home")),
								new b.navbar.item(new b.navbar.link({ href: "#" }, "Link")),
								new b.navbar.item({ dropdown: true }, [
									new b.dropdown.toggle({ navItem: true }, "Dropdown"),
									new b.dropdown.menu([
										new b.dropdown.item({ href: "#" }, "Action"),
										new b.dropdown.item({ href: "#" }, "Another action"),
										new b.dropdown.divider(),
										new b.dropdown.item({ href: "#" }, "Something else here"),
									]),
								]),
								new b.navbar.item(new b.navbar.link({ href: "#", disabled: true }, "Disabled")),
							]),
							new h.form({ display: "flex", role: "search" }, [
								new b.input({
									type: "search",
									marginEnd: 2,
									placeholderText: "Search",
									label: "Search",
								}),
								new b.button({ type: "submit", color: "success", outline: true }, "Search"),
							]),
						]),
					])
				);
			},
		}),
		new e.text(
			"This example uses {{https://getbootstrap.com/docs/5.3/utilities/background/::background}} ({{bg-body-tertiary}}) and {{https://getbootstrap.com/docs/5.3/utilities/spacing/::spacing}} ({{me-auto}}, {{mb-2}}, {{mb-lg-0}}, {{me-2}}) utility classes."
		),

		//-----------------------

		new e.subtitle("Brand"),
		new e.text(
			"The {{.navbar-brand}} can be applied to most elements, but an anchor works best, as some elements might require utility classes or custom styles."
		),

		//-----------------------

		new e.subtitle("Text"),
		new e.text("Add your text within an element with the {{.navbar-brand}} class."),
		new e.code({
			output: () => {
				return [
					new b.navbar.container(
						{ bgColor: "body-tertiary" },
						new b.navbar.innercontainer({ container: "fluid" }, new b.navbar.brand({ href: "#" }, "Navbar"))
					),
					new b.navbar.container(
						{ bgColor: "body-tertiary" },
						new b.navbar.innercontainer(
							{ container: "fluid" },
							new b.navbar.brand({ marginBottom: 0, class: "h1" }, "Navbar")
						)
					),
				];
			},
		}),

		//-----------------------

		new e.subtitle("Image"),
		new e.text("You can replace the text within the {{.navbar-brand}} with an {{<img>}}."),
		new e.code({
			output: () => {
				return new b.navbar.container(
					{ bgColor: "body-tertiary" },
					new b.navbar.innercontainer(
						{ container: "fluid" },
						new b.navbar.brand({ href: "#" }, b.icon.brand("bootstrap", { textColor: "primary" }))
					)
				);
			},
		}),

		//-----------------------

		new e.subtitle("Image and text"),
		new e.text(
			"You can also make use of some additional utilities to add an image and text at the same time. Note the addition of {{.d-inline-block}} and {{.align-text-top}} on the {{<img>}}."
		),
		new e.code({
			output: () => {
				return new b.navbar.container(
					{ bgColor: "body-tertiary" },
					new b.navbar.innercontainer(
						{ container: "fluid" },
						new b.navbar.brand(
							{ href: "#" },
							new b.label({ icon: b.icon.brand("bootstrap", { textColor: "primary" }) }, "Bootstrap")
						)
					)
				);
			},
		}),

		//-----------------------

		new e.subtitle("Nav"),
		new e.text(
			"Navbar navigation links build on our {{.nav}} options with their own modifier class and require the use of {{https://getbootstrap.com/docs/5.3/components/navbar/#toggler::toggler classes}} for proper responsive styling. {{b::Navigation in navbars will also grow to occupy as much horizontal space as possible}} to keep your navbar contents securely aligned."
		),
		new e.text("Add the {{.active}} class on {{.nav-link}} to indicate the current page."),
		new e.text("Please note that you should also add the {{aria-current}} attribute on the active {{.nav-link}}."),
		new e.code({
			output: () => {
				return new b.navbar.container(
					{ bgColor: "body-tertiary", expand: "lg" },
					new b.navbar.innercontainer({ container: "fluid" }, [
						new b.navbar.brand({ href: "#" }, "Navbar"),
						new b.navbar.toggle.collapse({
							target: "#navbarNavContent",
							control: "navbarNavContent",
							label: "Toggle navigation",
						}),
						new b.navbar.collapse({ id: "navbarNavContent" }, [
							new b.navbar.itemcontainer([
								new b.navbar.item(new b.navbar.link({ href: "#", active: true }, "Home")),
								new b.navbar.item(new b.navbar.link({ href: "#" }, "Features")),
								new b.navbar.item(new b.navbar.link({ href: "#" }, "Pricing")),
								new b.navbar.item(new b.navbar.link({ href: "#", disabled: true }, "Disabled")),
							]),
						]),
					])
				);
			},
		}),
		new e.text(
			"And because we use classes for our navs, you can avoid the list-based approach entirely if you like."
		),
		new e.code({
			output: () => {
				return new b.navbar.container(
					{ bgColor: "body-tertiary", expand: "lg" },
					new b.navbar.innercontainer({ container: "fluid" }, [
						new b.navbar.brand({ href: "#" }, "Navbar"),
						new b.navbar.toggle.collapse({
							target: "#navbarNavAltMarkup",
							control: "navbarNavAltMarkup",
							label: "Toggle navigation",
						}),
						new b.navbar.collapse({ id: "navbarNavAltMarkup" }, [
							new h.div({ class: "navbar-nav" }, [
								new b.navbar.link({ href: "#", active: true }, "Home"),
								new b.navbar.link({ href: "#" }, "Features"),
								new b.navbar.link({ href: "#" }, "Pricing"),
								new b.navbar.link({ href: "#", disabled: true }, "Disabled"),
							]),
						]),
					])
				);
			},
		}),
		new e.text(
			"You can also use dropdowns in your navbar. Dropdown menus require a wrapping element for positioning, so be sure to use separate and nested elements for {{.nav-item}} and {{.nav-link}} as shown below."
		),
		new e.code({
			output: () => {
				return new b.navbar.container(
					{ bgColor: "body-tertiary", expand: "lg" },
					new b.navbar.innercontainer({ container: "fluid" }, [
						new b.navbar.brand({ href: "#" }, "Navbar"),
						new b.navbar.toggle.collapse({
							target: "#navbarNavDropdown",
							control: "navbarNavDropdown",
							label: "Toggle navigation",
						}),
						new b.navbar.collapse({ id: "navbarNavDropdown" }, [
							new b.navbar.itemcontainer([
								new b.navbar.item(new b.navbar.link({ href: "#", active: true }, "Home")),
								new b.navbar.item(new b.navbar.link({ href: "#" }, "Features")),
								new b.navbar.item(new b.navbar.link({ href: "#" }, "Pricing")),
								new b.navbar.item({ dropdown: true }, [
									new b.dropdown.toggle({ navItem: true, href: "#" }, "Dropdown link"),
									new b.dropdown.menu([
										new b.dropdown.item({ href: "#" }, "Action"),
										new b.dropdown.item({ href: "#" }, "Another action"),
										new b.dropdown.item({ href: "#" }, "Something else here"),
									]),
								]),
							]),
						]),
					])
				);
			},
		}),
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
