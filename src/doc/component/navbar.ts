import { core, h, b } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const navbar: IAttrContent = {
	title: "Navbar",
	description:
		"Documentation and examples for Bootstrap’s powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.",
	item: [
		new e.title("How it works"),
		new e.text("Here’s what you need to know before getting started with the navbar:"),
		new e.ul({
			item: [
				"Navbars require a wrapping {{.navbar}} with {{.navbar-expand{-sm|-md|-lg|-xl|-xxl}}} for responsive collapsing and {{nav:doc/component/navbar#color_schemes::color scheme}} classes.",
				"Navbars and their contents are fluid by default. Change the {{nav:doc/component/navbar#containers::container}} to limit their horizontal width in different ways.",
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
				"{{.navbar-toggler}} for use with our collapse plugin and other {{nav:doc/component/navbar#responsive_behaviors::navigation toggling}} behaviors.",
				"Flex and spacing utilities for any form controls and actions.",
				"{{.navbar-text}} for adding vertically centered strings of text.",
				"{{.collapse.navbar-collapse}} for grouping and hiding navbar contents by a parent breakpoint.",
				"Add an optional {{.navbar-scroll}} to set a {{max-height}} and {{nav:doc/component/navbar#scrolling::scroll expanded navbar content}}.",
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
									placeholder: "Search",
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

		new e.xsubtitle({ id: "brand_text" }, "Text"),
		new e.text("Add your text within an element with the {{.navbar-brand}} class."),
		new e.code({
			outputAttr: { gap: 2 },
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

		new e.xsubtitle("Image"),
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

		new e.xsubtitle("Image and text"),
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
			"Navbar navigation links build on our {{.nav}} options with their own modifier class and require the use of {{nav:doc/component/navbar#toggler::toggler classes}} for proper responsive styling. {{b::Navigation in navbars will also grow to occupy as much horizontal space as possible}} to keep your navbar contents securely aligned."
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
								placeholder: "Search",
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
								placeholder: "Search",
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
								placeholder: "Username",
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

		new e.subtitle("Text"),
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
			outputAttr: { gap: 2 },
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
									placeholder: "Search",
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

		new e.title("Containers"),
		new e.text(
			"Although it’s not required, you can wrap a navbar in a {{.container}} to center it on a page–though note that an inner container is still required. Or you can add a container inside the {{.navbar}} to only center the contents of a {{nav:doc/component/navbar#placement::fixed or static top navbar}}."
		),
		new e.code({
			output: () => {
				return new h.div(
					{ container: true },
					new b.navbar.container(
						{ bgColor: "body-tertiary", expand: "lg" },
						new b.navbar.innercontainer({ container: "fluid" }, new b.navbar.brand({ href: "#" }, "Navbar"))
					)
				);
			},
		}),

		new e.text("Use any of the responsive containers to change how wide the content in your navbar is presented."),
		new e.code({
			output: () => {
				return new b.navbar.container(
					{ bgColor: "body-tertiary", expand: "lg" },
					new b.navbar.innercontainer({ container: "md" }, new b.navbar.brand({ href: "#" }, "Navbar"))
				);
			},
		}),

		//-----------------------

		new e.title("Placement"),
		new e.text(
			"Use our {{https://getbootstrap.com/docs/5.3/utilities/position/::position utilities}} to place navbars in non-static positions. Choose from fixed to the top, fixed to the bottom, stickied to the top (scrolls with the page until it reaches the top, then stays there), or stickied to the bottom (scrolls with the page until it reaches the bottom, then stays there)."
		),
		new e.text(
			"Fixed navbars use {{position: fixed}}, meaning they’re pulled from the normal flow of the DOM and may require custom CSS (e.g., {{padding-top}} on the {{<body>}}) to prevent overlap with other elements."
		),
		new e.code({
			output: () => {
				return new b.navbar.container(
					{ bgColor: "body-tertiary" },
					new b.navbar.innercontainer({ container: "fluid" }, new b.navbar.brand({ href: "#" }, "Default"))
				);
			},
		}),
		new e.code({
			output: () => {
				return new b.navbar.container(
					{ bgColor: "body-tertiary", fixed: "top" },
					new b.navbar.innercontainer({ container: "fluid" }, new b.navbar.brand({ href: "#" }, "Fixed top"))
				);
			},
		}),
		new e.code({
			output: () => {
				return new b.navbar.container(
					{ bgColor: "body-tertiary", fixed: "bottom" },
					new b.navbar.innercontainer(
						{ container: "fluid" },
						new b.navbar.brand({ href: "#" }, "Fixed bottom")
					)
				);
			},
		}),
		new e.code({
			output: () => {
				return new b.navbar.container(
					{ bgColor: "body-tertiary", sticky: "top" },
					new b.navbar.innercontainer({ container: "fluid" }, new b.navbar.brand({ href: "#" }, "Sticky top"))
				);
			},
		}),
		new e.code({
			output: () => {
				return new b.navbar.container(
					{ bgColor: "body-tertiary", sticky: "bottom" },
					new b.navbar.innercontainer(
						{ container: "fluid" },
						new b.navbar.brand({ href: "#" }, "Sticky bottom")
					)
				);
			},
		}),

		//-----------------------

		new e.title("Scrolling"),
		new e.text(
			"Add {{.navbar-nav-scroll}} to a {{.navbar-nav}} (or other navbar sub-component) to enable vertical scrolling within the toggleable contents of a collapsed navbar. By default, scrolling kicks in at {{75vh}} (or 75% of the viewport height), but you can override that with the local CSS custom property {{--bs-navbar-height}} or custom styles. At larger viewports when the navbar is expanded, content will appear as it does in a default navbar."
		),
		new e.text(
			"Please note that this behavior comes with a potential drawback {{of overflow}}—when setting {{overflow-y: auto}} (required to scroll the content here), {{overflow-x}} is the equivalent of {{auto}}, which will crop some horizontal content."
		),
		new e.text(
			"Here’s an example navbar using {{.navbar-nav-scroll}} with {{style='--bs-scroll-height: 100px;'}}, with some extra margin utilities for optimum spacing."
		),

		new e.code({
			output: () => {
				return new b.navbar.container(
					{ bgColor: "body-tertiary", expand: "lg" },
					new b.navbar.innercontainer({ container: "fluid" }, [
						new b.navbar.brand({ href: "#" }, "Navbar scroll"),
						new b.navbar.toggle.collapse({
							target: "#navbarScroll",
							control: "navbarScroll",
							label: "Toggle navigation",
						}),
						new b.navbar.collapse({ id: "navbarScroll" }, [
							new b.navbar.itemcontainer(
								{ marginEnd: "auto", marginBottom: [2, "lg-0"], scroll: true, scrollHeight: "100px" },
								[
									new b.navbar.item(new b.navbar.link({ href: "#", active: true }, "Home")),
									new b.navbar.item(new b.navbar.link({ href: "#" }, "Link")),
									new b.navbar.item({ dropdown: true }, [
										new b.dropdown.toggle({ navItem: true }, "Link"),
										new b.dropdown.menu([
											new b.dropdown.item({ href: "#" }, "Action"),
											new b.dropdown.item({ href: "#" }, "Another action"),
											new b.dropdown.divider(),
											new b.dropdown.item({ href: "#" }, "Something else here"),
										]),
									]),
									new b.navbar.item(new b.navbar.link({ href: "#", disabled: true }, "Link")),
								]
							),
							new h.form({ display: "flex", role: "search" }, [
								new b.input({
									type: "search",
									marginEnd: 2,
									placeholder: "Search",
									label: "Search",
								}),
								new b.button({ type: "submit", color: "success", outline: true }, "Search"),
							]),
						]),
					])
				);
			},
		}),

		//-----------------------

		new e.title("Responsive behaviors"),
		new e.text(
			"Navbars can use {{.navbar-toggler}}, {{.navbar-collapse}}, and {{.navbar-expand{-sm|-md|-lg|-xl|-xxl}}} classes to determine when their content collapses behind a button. In combination with other utilities, you can easily choose when to show or hide particular elements."
		),
		new e.text(
			"For navbars that never collapse, add the {{.navbar-expand}} class on the navbar. For navbars that always collapse, don’t add any {{.navbar-expand}} class."
		),

		//-----------------------

		new e.subtitle("Toggler"),
		new e.text(
			"Navbar togglers are left-aligned by default, but should they follow a sibling element like a {{.navbar-brand}}, they’ll automatically be aligned to the far right. Reversing your markup will reverse the placement of the toggler. Below are examples of different toggle styles."
		),
		new e.text("With no {{.navbar-brand}} shown at the smallest breakpoint:"),
		new e.code({
			output: () => {
				return new b.navbar.container(
					{ bgColor: "body-tertiary", expand: "lg" },
					new b.navbar.innercontainer({ container: "fluid" }, [
						new b.navbar.toggle.collapse({
							target: "#navbarTogglerDemo01",
							control: "navbarTogglerDemo01",
							label: "Toggle navigation",
						}),
						new b.navbar.collapse({ id: "navbarTogglerDemo01" }, [
							new b.navbar.brand({ href: "#" }, "Hidden brand"),
							new b.navbar.itemcontainer({ marginEnd: "auto", marginBottom: [2, "lg-0"] }, [
								new b.navbar.item(new b.navbar.link({ href: "#", active: true }, "Home")),
								new b.navbar.item(new b.navbar.link({ href: "#" }, "Link")),
								new b.navbar.item(new b.navbar.link({ href: "#", disabled: true }, "Disabled")),
							]),
							new h.form({ display: "flex", role: "search" }, [
								new b.input({
									type: "search",
									marginEnd: 2,
									placeholder: "Search",
									label: "Search",
								}),
								new b.button({ type: "submit", color: "success", outline: true }, "Search"),
							]),
						]),
					])
				);
			},
		}),
		new e.text("With a brand name shown on the left and toggler on the right:"),
		new e.code({
			output: () => {
				return new b.navbar.container(
					{ bgColor: "body-tertiary", expand: "lg" },
					new b.navbar.innercontainer({ container: "fluid" }, [
						new b.navbar.brand({ href: "#" }, "Navbar"),
						new b.navbar.toggle.collapse({
							target: "#navbarTogglerDemo02",
							control: "navbarTogglerDemo02",
							label: "Toggle navigation",
						}),
						new b.navbar.collapse({ id: "navbarTogglerDemo02" }, [
							new b.navbar.itemcontainer({ marginEnd: "auto", marginBottom: [2, "lg-0"] }, [
								new b.navbar.item(new b.navbar.link({ href: "#", active: true }, "Home")),
								new b.navbar.item(new b.navbar.link({ href: "#" }, "Link")),
								new b.navbar.item(new b.navbar.link({ href: "#", disabled: true }, "Disabled")),
							]),
							new h.form({ display: "flex", role: "search" }, [
								new b.input({
									type: "search",
									marginEnd: 2,
									placeholder: "Search",
									label: "Search",
								}),
								new b.button({ type: "submit", color: "success", outline: true }, "Search"),
							]),
						]),
					])
				);
			},
		}),
		new e.text("With a toggler on the left and brand name on the right:"),
		new e.code({
			output: () => {
				return new b.navbar.container(
					{ bgColor: "body-tertiary", expand: "lg" },
					new b.navbar.innercontainer({ container: "fluid" }, [
						new b.navbar.toggle.collapse({
							target: "#navbarTogglerDemo03",
							control: "navbarTogglerDemo03",
							label: "Toggle navigation",
						}),
						new b.navbar.brand({ href: "#" }, "Navbar"),
						new b.navbar.collapse({ id: "navbarTogglerDemo03" }, [
							new b.navbar.itemcontainer({ marginEnd: "auto", marginBottom: [2, "lg-0"] }, [
								new b.navbar.item(new b.navbar.link({ href: "#", active: true }, "Home")),
								new b.navbar.item(new b.navbar.link({ href: "#" }, "Link")),
								new b.navbar.item(new b.navbar.link({ href: "#", disabled: true }, "Disabled")),
							]),
							new h.form({ display: "flex", role: "search" }, [
								new b.input({
									type: "search",
									marginEnd: 2,
									placeholder: "Search",
									label: "Search",
								}),
								new b.button({ type: "submit", color: "success", outline: true }, "Search"),
							]),
						]),
					])
				);
			},
		}),

		//-----------------------

		new e.subtitle("External content"),
		new e.text(
			"Sometimes you want to use the collapse plugin to trigger a container element for content that structurally sits outside of the {{.navbar}} . Because our plugin works on the {{id}} and {{data-bs-target}} matching, that’s easily done!"
		),
		new e.code({
			output: () => {
				return new h.div([
					new b.collapse.container(
						{ id: "navbarToggleExternalContent" },
						new h.div({ theme: "dark", padding: 4, bgColor: "body-tertiary" }, [
							new h.h(5, { textColor: "body-emphasis", class: "h4" }, "Collapsed content"),
							new h.span({ textColor: "body-secondary" }, "Toggleable via the navbar brand."),
						])
					),
					new b.navbar.container(
						{ theme: "dark", bgColor: "body-tertiary", expand: "lg" },
						new b.navbar.innercontainer({ container: "fluid" }, [
							new b.navbar.toggle.collapse({
								target: "#navbarToggleExternalContent",
								control: "navbarToggleExternalContent",
								label: "Toggle navigation",
							}),
						])
					),
				]);
			},
		}),
		new e.text(
			"When you do this, we recommend including additional JavaScript to move the focus programmatically to the container when it is opened. Otherwise, keyboard users and users of assistive technologies will likely have a hard time finding the newly revealed content - particularly if the container that was opened comes before the toggler in the document’s structure. We also recommend making sure that the toggler has the {{aria-controls}} attribute, pointing to the {{id}} of the content container. In theory, this allows assistive technology users to jump directly from the toggler to the container it controls–but support for this is currently quite patchy."
		),

		// new e.text("This is how you do it in {{bsts}}"),
		// new e.code({
		// 	output: () => {
		// 		return new h.div([
		// 			new b.collapse.container(
		// 				{
		// 					id: "navbarToggleExternalContent",
		// 					tabindex: "-1",
		// 					on: {
		// 						"shown.bs.collapse": (_e) => {
		// 							document.getElementById("navbarToggleExternalContent")?.focus();
		// 						},
		// 					},
		// 				},
		// 				new h.div({ theme: "dark", padding: 4, bgColor: "body-tertiary" }, [
		// 					new h.h(5, { textColor: "body-emphasis", class: "h4" }, "Collapsed content"),
		// 					new h.span({ textColor: "body-secondary" }, "Toggleable via the navbar brand."),
		// 				])
		// 			),
		// 			new b.navbar.container(
		// 				{ theme: "dark", bgColor: "body-tertiary", expand: "lg" },
		// 				new b.navbar.innercontainer({ container: "fluid" }, [
		// 					new b.navbar.toggle.collapse({
		// 						target: "#navbarToggleExternalContent",
		// 						control: "navbarToggleExternalContent",
		// 						label: "Toggle navigation",
		// 					}),
		// 				])
		// 			),
		// 		]);
		// 	},
		// }),

		//-----------------------

		new e.subtitle("Offcanvas"),
		new e.text(
			"Transform your expanding and collapsing navbar into an offcanvas drawer with the {{nav:doc/component/offcanvas::offcanvas component}}. We extend both the offcanvas default styles and use our {{.navbar-expand-*}} classes to create a dynamic and flexible navigation sidebar."
		),
		new e.text(
			"In the example below, to create an offcanvas navbar that is always collapsed across all breakpoints, omit the {{.navbar-expand-*}} class entirely."
		),
		new e.code({
			output: () => {
				return new b.navbar.container(
					{ bgColor: "body-tertiary", fixed: "top" },
					new b.navbar.innercontainer({ container: "fluid" }, [
						new b.navbar.brand({ href: "#" }, "Offcanvas navbar"),
						new b.navbar.toggle.offcanvas({
							target: "#offcanvasNavbar",
							control: "offcanvasNavbar",
							label: "Toggle navigation",
						}),
						new b.offcanvas.container(
							{
								id: "offcanvasNavbar",
								placement: "end",
								labelledby: "offcanvasNavbarLabel",
							},
							[
								new b.offcanvas.header([
									new b.offcanvas.title({ id: "offcanvasNavbarLabel" }, "Offcanvas"),
									new b.offcanvas.btnclose(),
								]),
								new b.offcanvas.body([
									new b.navbar.itemcontainer(
										{
											justifyContent: "end",
											flex: "grow-1",
											paddingEnd: 3,
										},
										[
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
										]
									),
									new h.form({ display: "flex", role: "search", marginTop: 3 }, [
										new b.input({
											type: "search",
											marginEnd: 2,
											placeholder: "Search",
											label: "Search",
										}),
										new b.button({ type: "submit", color: "success", outline: true }, "Search"),
									]),
								]),
							]
						),
					])
				);
			},
		}),

		new e.text(
			"To create an offcanvas navbar that expands into a normal navbar at a specific breakpoint like {{lg}}, use {{.navbar-expand-lg}}."
		),

		new e.codepreview({
			type: "html",
			code: `
				<nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
				<a class="navbar-brand" href="#">Offcanvas navbar</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="offcanvas offcanvas-end" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
					...
				</div>
				</nav>
			`,
		}),

		new e.code({
			output: () => {
				return new b.navbar.container(
					{ bgColor: "body-tertiary", expand: "lg", fixed: "top" },
					new b.navbar.innercontainer({ container: "fluid" }, [
						new b.navbar.brand({ href: "#" }, "Offcanvas lg navbar"),
						new b.navbar.toggle.offcanvas({
							target: "#offcanvasLgNavbar",
							control: "offcanvasLgNavbar",
							label: "Toggle navigation",
						}),
						new b.offcanvas.container(
							{
								id: "offcanvasLgNavbar",
								placement: "end",
								labelledby: "offcanvasLgNavbarLabel",
							},
							[
								new b.offcanvas.header([
									new b.offcanvas.title({ id: "offcanvasLgNavbarLabel" }, "Offcanvas"),
									new b.offcanvas.btnclose(),
								]),
								new b.offcanvas.body([
									new b.navbar.itemcontainer(
										{
											justifyContent: "end",
											flex: "grow-1",
											paddingEnd: 3,
										},
										[
											new b.navbar.item(
												{ paddingTop: "lg-1" },
												new b.navbar.link({ href: "#", active: true }, "Home")
											),
											new b.navbar.item(
												{ paddingTop: "lg-1" },
												new b.navbar.link({ href: "#" }, "Link")
											),
											new b.navbar.item({ dropdown: true, paddingTop: "lg-1" }, [
												new b.dropdown.toggle({ navItem: true }, "Dropdown"),
												new b.dropdown.menu([
													new b.dropdown.item({ href: "#" }, "Action"),
													new b.dropdown.item({ href: "#" }, "Another action"),
													new b.dropdown.divider(),
													new b.dropdown.item({ href: "#" }, "Something else here"),
												]),
											]),
										]
									),
									new h.form({ hstack: true, role: "search", marginTop: [3, "lg-0"] }, [
										new b.input({
											type: "search",
											marginEnd: 2,
											placeholder: "Search",
											label: "Search",
										}),
										new b.button({ type: "submit", color: "success", outline: true }, "Search"),
									]),
								]),
							]
						),
					])
				);
			},
		}),

		new e.text(
			"When using offcanvas in a dark navbar, be aware that you may need to have a dark background on the offcanvas content to avoid the text becoming illegible. In the example below, we add {{.navbar-dark}} and {{.bg-dark}} to the {{.navbar}}, {{.text-bg-dark}} to the {{.offcanvas}}, {{.dropdown-menu-dark}} to {{.dropdown-menu}}, and {{.btn-close-white}} to {{.btn-close}} for proper styling with a dark offcanvas."
		),

		new e.code({
			output: () => {
				return new b.navbar.container(
					{ theme: "dark", bgColor: "body-tertiary", fixed: "top" },
					new b.navbar.innercontainer({ container: "fluid" }, [
						new b.navbar.brand({ href: "#" }, "Offcanvas dark navbar"),
						new b.navbar.toggle.offcanvas({
							target: "#offcanvasDarkNavbar",
							control: "offcanvasDarkNavbar",
							label: "Toggle navigation",
						}),
						new b.offcanvas.container(
							{
								id: "offcanvasDarkNavbar",
								placement: "end",
								labelledby: "offcanvasDarkNavbarLabel",
							},
							[
								new b.offcanvas.header([
									new b.offcanvas.title({ id: "offcanvasDarkNavbarLabel" }, "Dark offcanvas"),
									new b.offcanvas.btnclose(),
								]),
								new b.offcanvas.body([
									new b.navbar.itemcontainer(
										{
											justifyContent: "end",
											flex: "grow-1",
											paddingEnd: 3,
										},
										[
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
										]
									),
									new h.form({ display: "flex", role: "search", marginTop: 3 }, [
										new b.input({
											type: "search",
											marginEnd: 2,
											placeholder: "Search",
											label: "Search",
										}),
										new b.button({ type: "submit", color: "success", outline: true }, "Search"),
									]),
								]),
							]
						),
					])
				);
			},
		}),

		//-----------------------

		new e.title("CSS"),
		new e.subtitle("Variables"),
		new e.text(
			"As part of Bootstrap’s evolving CSS variables approach, navbars now use local CSS variables on {{.navbar}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."
		),

		new e.codepreview({
			type: "css",
			title: "scss/_navbar.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_navbar.scss",
			code: `
				--#{$prefix}navbar-padding-x: #{if($navbar-padding-x == null, 0, $navbar-padding-x)};
				--#{$prefix}navbar-padding-y: #{$navbar-padding-y};
				--#{$prefix}navbar-color: #{$navbar-light-color};
				--#{$prefix}navbar-hover-color: #{$navbar-light-hover-color};
				--#{$prefix}navbar-disabled-color: #{$navbar-light-disabled-color};
				--#{$prefix}navbar-active-color: #{$navbar-light-active-color};
				--#{$prefix}navbar-brand-padding-y: #{$navbar-brand-padding-y};
				--#{$prefix}navbar-brand-margin-end: #{$navbar-brand-margin-end};
				--#{$prefix}navbar-brand-font-size: #{$navbar-brand-font-size};
				--#{$prefix}navbar-brand-color: #{$navbar-light-brand-color};
				--#{$prefix}navbar-brand-hover-color: #{$navbar-light-brand-hover-color};
				--#{$prefix}navbar-nav-link-padding-x: #{$navbar-nav-link-padding-x};
				--#{$prefix}navbar-toggler-padding-y: #{$navbar-toggler-padding-y};
				--#{$prefix}navbar-toggler-padding-x: #{$navbar-toggler-padding-x};
				--#{$prefix}navbar-toggler-font-size: #{$navbar-toggler-font-size};
				--#{$prefix}navbar-toggler-icon-bg: #{escape-svg($navbar-light-toggler-icon-bg)};
				--#{$prefix}navbar-toggler-border-color: #{$navbar-light-toggler-border-color};
				--#{$prefix}navbar-toggler-border-radius: #{$navbar-toggler-border-radius};
				--#{$prefix}navbar-toggler-focus-width: #{$navbar-toggler-focus-width};
				--#{$prefix}navbar-toggler-transition: #{$navbar-toggler-transition};
			`,
		}),

		new e.text("Some additional CSS variables are also present on {{.navbar-nav}}:"),

		new e.codepreview({
			type: "css",
			title: "scss/_navbar.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_navbar.scss",
			code: `
				--#{$prefix}nav-link-padding-x: 0;
				--#{$prefix}nav-link-padding-y: #{$nav-link-padding-y};
				@include rfs($nav-link-font-size, --#{$prefix}nav-link-font-size);
				--#{$prefix}nav-link-font-weight: #{$nav-link-font-weight};
				--#{$prefix}nav-link-color: var(--#{$prefix}navbar-color);
				--#{$prefix}nav-link-hover-color: var(--#{$prefix}navbar-hover-color);
				--#{$prefix}nav-link-disabled-color: var(--#{$prefix}navbar-disabled-color);
			`,
		}),

		new e.text(
			"Customization through CSS variables can be seen on the {{.navbar-dark}} class where we override specific values without adding duplicate CSS selectors."
		),

		new e.codepreview({
			type: "css",
			title: "scss/_navbar.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_navbar.scss",
			code: `
				--#{$prefix}navbar-color: #{$navbar-dark-color};
				--#{$prefix}navbar-hover-color: #{$navbar-dark-hover-color};
				--#{$prefix}navbar-disabled-color: #{$navbar-dark-disabled-color};
				--#{$prefix}navbar-active-color: #{$navbar-dark-active-color};
				--#{$prefix}navbar-brand-color: #{$navbar-dark-brand-color};
				--#{$prefix}navbar-brand-hover-color: #{$navbar-dark-brand-hover-color};
				--#{$prefix}navbar-toggler-border-color: #{$navbar-dark-toggler-border-color};
				--#{$prefix}navbar-toggler-icon-bg: #{escape-svg($navbar-dark-toggler-icon-bg)};
			`,
		}),

		new e.subtitle("Sass variables"),
		new e.text("Variables for all navbars:"),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss",
			code: `
				$navbar-padding-y:                  $spacer * .5;
				$navbar-padding-x:                  null;

				$navbar-nav-link-padding-x:         .5rem;

				$navbar-brand-font-size:            $font-size-lg;
				// Compute the navbar-brand padding-y so the navbar-brand will have the same height as navbar-text and nav-link
				$nav-link-height:                   $font-size-base * $line-height-base + $nav-link-padding-y * 2;
				$navbar-brand-height:               $navbar-brand-font-size * $line-height-base;
				$navbar-brand-padding-y:            ($nav-link-height - $navbar-brand-height) * .5;
				$navbar-brand-margin-end:           1rem;

				$navbar-toggler-padding-y:          .25rem;
				$navbar-toggler-padding-x:          .75rem;
				$navbar-toggler-font-size:          $font-size-lg;
				$navbar-toggler-border-radius:      $btn-border-radius;
				$navbar-toggler-focus-width:        $btn-focus-width;
				$navbar-toggler-transition:         box-shadow .15s ease-in-out;

				$navbar-light-color:                rgba(var(--#{$prefix}emphasis-color-rgb), .65);
				$navbar-light-hover-color:          rgba(var(--#{$prefix}emphasis-color-rgb), .8);
				$navbar-light-active-color:         rgba(var(--#{$prefix}emphasis-color-rgb), 1);
				$navbar-light-disabled-color:       rgba(var(--#{$prefix}emphasis-color-rgb), .3);
				$navbar-light-icon-color:           rgba($body-color, .75);
				$navbar-light-toggler-icon-bg:      url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='#{$navbar-light-icon-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>");
				$navbar-light-toggler-border-color: rgba(var(--#{$prefix}emphasis-color-rgb), .15);
				$navbar-light-brand-color:          $navbar-light-active-color;
				$navbar-light-brand-hover-color:    $navbar-light-active-color;

			`,
		}),

		new e.text("Variables for the {{nav:doc/component/navbar#color_schemes::dark navbar}}:"),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss",
			code: `
				$navbar-dark-color:                 rgba($white, .55);
				$navbar-dark-hover-color:           rgba($white, .75);
				$navbar-dark-active-color:          $white;
				$navbar-dark-disabled-color:        rgba($white, .25);
				$navbar-dark-toggler-icon-bg:       url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='#{$navbar-dark-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>");
				$navbar-dark-toggler-border-color:  rgba($white, .1);
				$navbar-dark-brand-color:           $navbar-dark-active-color;
				$navbar-dark-brand-hover-color:     $navbar-dark-active-color;
			`,
		}),
		new e.subtitle("Sass loop"),
		new e.text(
			"{{nav:doc/component/navbar#responsive_behaviors::Responsive navbar expand/collapse classes}} (e.g., {{.navbar-expand-lg}}) are combined with the {{$breakpoints}} map and generated through a loop in {{scss/_navbar.scss}}."
		),
		new e.codepreview({
			type: "css",
			title: "scss/_navbar.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_navbar.scss",
			code: `
			// Generate series of '.navbar-expand-*' responsive classes for configuring
			// where your navbar collapses.
			.navbar-expand {
			@each $breakpoint in map-keys($grid-breakpoints) {
				$next: breakpoint-next($breakpoint, $grid-breakpoints);
				$infix: breakpoint-infix($next, $grid-breakpoints);

				// stylelint-disable-next-line scss/selector-no-union-class-name
				&#{$infix} {
				@include media-breakpoint-up($next) {
					flex-wrap: nowrap;
					justify-content: flex-start;

					.navbar-nav {
					flex-direction: row;

					.dropdown-menu {
						position: absolute;
					}

					.nav-link {
						padding-right: var(--#{$prefix}navbar-nav-link-padding-x);
						padding-left: var(--#{$prefix}navbar-nav-link-padding-x);
					}
					}

					.navbar-nav-scroll {
					overflow: visible;
					}

					.navbar-collapse {
					display: flex !important; // stylelint-disable-line declaration-no-important
					flex-basis: auto;
					}

					.navbar-toggler {
					display: none;
					}

					.offcanvas {
					// stylelint-disable declaration-no-important
					position: static;
					z-index: auto;
					flex-grow: 1;
					width: auto !important;
					height: auto !important;
					visibility: visible !important;
					background-color: transparent !important;
					border: 0 !important;
					transform: none !important;
					@include box-shadow(none);
					@include transition(none);
					// stylelint-enable declaration-no-important

					.offcanvas-header {
						display: none;
					}

					.offcanvas-body {
						display: flex;
						flex-grow: 0;
						padding: 0;
						overflow-y: visible;
					}
					}
				}
				}
			}
			}
			`,
		}),
	],
};