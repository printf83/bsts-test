import { I, b, core, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const bootswatch: IAttrContent = {
	title: "Bootswatch",
	description: "Free themes for Bootstrap from Bootswatch",
	item: [
		new e.title("Navbars"),
		new e.code({
			outputAttr: { gap: 2 },
			output: () => {
				const navbarItem = (btnColor: I.B.Button["color"]) => {
					let id = core.UUID();
					return new b.navbar.innercontainer({ container: "fluid" }, [
						new b.navbar.brand({ href: "#" }, "Navbar"),
						new b.navbar.toggle.collapse({
							target: `#${id}`,
							controlfor: id,
							label: "Toggle navigation",
						}),
						new b.navbar.collapse({ id: id }, [
							new b.navbar.itemcontainer({ marginEnd: "auto", marginBottom: [2, "lg-0"] }, [
								new b.navbar.item(new b.navbar.link({ href: "#", active: true }, "Home")),
								new b.navbar.item(new b.navbar.link({ href: "#" }, "Features")),
								new b.navbar.item(new b.navbar.link({ href: "#" }, "Pricing")),
								new b.navbar.item(new b.navbar.link({ href: "#" }, "About")),
								new b.navbar.item({ dropdown: true }, [
									new b.dropdown.toggle({ navItem: true }, "Dropdown"),
									new b.dropdown.menu([
										new b.dropdown.item({ href: "#" }, "Action"),
										new b.dropdown.item({ href: "#" }, "Another action"),
										new b.dropdown.divider(),
										new b.dropdown.item({ href: "#" }, "Something else here"),
									]),
								]),
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
					new b.navbar.container({ bgColor: "primary", theme: "dark" }, navbarItem("light")),
					new b.navbar.container({ bgColor: "dark", theme: "dark" }, navbarItem("light")),
					new b.navbar.container({ bgColor: "light", theme: "light" }, navbarItem("dark")),
				];
			},
		}),

		//-----------------------

		new e.title(""),
		new e.text(""),
		new e.code({
			output: () => {
				return [];
			},
		}),

		//-----------------------

		new e.subtitle(""),
		new e.text(""),
		new e.codepreview({
			type: "css",
			code: `
				`,
		}),

		//-----------------------

		new e.title("CSS"),
		new e.text(""),

		//-----------------------

		new e.subtitle("Sass variables"),
		new e.text(""),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
			code: `
			`,
		}),
	],
};
