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

		new e.subtitle("Forms"),
		new e.text("Place various form controls and components within a navbar:"),
		new e.code({
			output: () => {
				return new b.navbar.container(
					{ bgColor: "body-tertiary" },
					new b.navbar.innercontainer(
						{ container: "fluid" },
						new h.form({ display: "flex", role: "search" }, [
							new b.input({
								type: "search",
								marginEnd: 2,
								placeholderText: "Search",
								label: "Search",
							}),
							new b.button({ type: "submit", color: "success", outline: true }, "Search"),
						])
					)
				);
			},
		}),
		new e.text(
			"Immediate child elements of {{.navbar}} use flex layout and will default to {{justify-content: space-between}}. Use additional {{https://getbootstrap.com/docs/5.3/utilities/flex/::flex utilities}} as needed to adjust this behavior."
		),
		new e.code({
			output: () => {
				return new b.navbar.container(
					{ bgColor: "body-tertiary" },
					new b.navbar.innercontainer({ container: "fluid" }, [
						new b.navbar.brand("Navbar"),
						new h.form({ display: "flex", role: "search" }, [
							new b.input({
								type: "search",
								marginEnd: 2,
								placeholderText: "Search",
								label: "Search",
							}),
							new b.button({ type: "submit", color: "success", outline: true }, "Search"),
						]),
					])
				);
			},
		}),

		new e.text(
			"Input groups work, too. If your navbar is an entire form, or mostly a form, you can use the {{<form>}} element as the container and save some HTML."
		),
		new e.code({
			output: () => {
				return new b.navbar.container(
					{ bgColor: "body-tertiary" },
					new b.navbar.innercontainer(
						{ container: "fluid" },
						new b.inputgroup.container([
							new b.inputgroup.text({ id: "basic-addon1" }, "@"),
							new b.input({
								type: "text",
								describedby: "basic-addon1",
								label: "Username",
								placeholderText: "Username",
							}),
						])
					)
				);
			},
		}),

		new e.text(
			"Various buttons are supported as part of these navbar forms, too. This is also a great reminder that vertical alignment utilities can be used to align different sized elements."
		),
		new e.code({
			output: () => {
				return new b.navbar.container(
					{ bgColor: "body-tertiary" },
					new h.form({ container: "fluid", justifyContent: "start" }, [
						new b.button({ color: "success", outline: true, marginEnd: 2 }, "Main button"),
						new b.button({ color: "secondary", outline: true, weight: "sm" }, "Smaller button"),
					])
				);
			},
		}),

		//-----------------------

		new e.title("Text"),
		new e.text(
			"Navbars may contain bits of text with the help of {{.navbar-text}}. This class adjusts vertical alignment and horizontal spacing for strings of text."
		),
		new e.code({
			output: () => {
				return new b.navbar.container(
					{ bgColor: "body-tertiary" },
					new b.navbar.innercontainer(
						{ container: "fluid" },
						new b.navbar.text("Navbar text with an inline element")
					)
				);
			},
		}),
		new e.text("Mix and match with other components and utilities as needed."),
		new e.code({
			output: () => {
				return new b.navbar.container(
					{ bgColor: "body-tertiary", expand: "lg" },
					new b.navbar.innercontainer({ container: "fluid" }, [
						new b.navbar.brand({ href: "#" }, "Navbar w/ text"),
						new b.navbar.toggle.collapse({
							target: "#navbarText",
							control: "navbarText",
							label: "Toggle navigation",
						}),
						new b.navbar.collapse({ id: "navbarText" }, [
							new b.navbar.itemcontainer({ marginEnd: "auto", marginBottom: [2, "lg-0"] }, [
								new b.navbar.item(new b.navbar.link({ href: "#", active: true }, "Home")),
								new b.navbar.item(new b.navbar.link({ href: "#" }, "Features")),
								new b.navbar.item(new b.navbar.link({ href: "#" }, "Pricing")),
							]),
							new b.navbar.text("Navbar text with an inline element"),
						]),
					])
				);
			},
		}),

		//-----------------------

		new e.title("Color schemes"),
		new e.alert({ color: "warning", callout: true }, [
			"{{b::New dark navbars in v5.3.0 —}} We’ve deprecated {{.navbar-dark}} in favor of the new {{data-bs-theme='dark'}}. Add {{data-bs-theme='dark'}} to the {{.navbar}} to enable a component-specific color mode. {{https://getbootstrap.com/docs/5.3/customize/color-modes/::Learn more about our color modes}}.",
			new h.hr(),
			"{{b::New in v5.2.0 —}} Navbar theming is now powered by CSS variables and {{.navbar-light}} has been deprecated. CSS variables are applied to {{.navbar}}, defaulting to the “light” appearance, and can be overridden with {{.navbar-dark}}.",
		]),
		new e.text(
			"Navbar themes are easier than ever thanks to Bootstrap’s combination of Sass and CSS variables. The default is our “light navbar” for use with light background colors, but you can also apply {{data-bs-theme='dark'}} to the {{.navbar}} parent for dark background colors. Then, customize with {{.bg-*}} utilities."
		),
		new e.code({
			output: () => {
				const navbarItem = (btnColor: b.IAttrBSButton["color"]) => {
					let id = core.UUID();
					return new b.navbar.innercontainer({ container: "fluid" }, [
						new b.navbar.brand({ href: "#" }, "Navbar"),
						new b.navbar.toggle.collapse({
							target: `#${id}`,
							control: id,
							label: "Toggle navigation",
						}),
						new b.navbar.collapse({ id: id }, [
							new b.navbar.itemcontainer({ marginEnd: "auto", marginBottom: [2, "lg-0"] }, [
								new b.navbar.item(new b.navbar.link({ href: "#", active: true }, "Home")),
								new b.navbar.item(new b.navbar.link({ href: "#" }, "Features")),
								new b.navbar.item(new b.navbar.link({ href: "#" }, "Pricing")),
								new b.navbar.item(new b.navbar.link({ href: "#" }, "About")),
							]),
							new h.form({ display: "flex", role: "search" }, [
								new b.input({
									type: "search",
									marginEnd: 2,
									placeholderText: "Search",
									label: "Search",
								}),
								new b.button({ type: "submit", color: btnColor, outline: true }, "Search"),
							]),
						]),
					]);
				};

				return [
					new b.navbar.container({ bgColor: "dark", theme: "dark" }, navbarItem("light")),
					new b.navbar.container({ bgColor: "primary", theme: "dark" }, navbarItem("light")),
					new b.navbar.container({ style: { backgroundColor: "#e3f2fd" } }, navbarItem("primary")),
				];
			},
		}),

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
