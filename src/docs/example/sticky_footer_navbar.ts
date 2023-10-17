import { b, core, h } from "@printf83/bsts";
import { IContent } from "../../ctl/main/content.js";

export const sticky_footer_navbar: IContent = {
	fullscreen: true,
	title: "Sticky Footer Navbar",
	item: () => {
		const header = () => {
			const id = core.UUID();
			return new b.navbar.container(
				{ bgColor: "dark", theme: "dark", expand: "md", fixed: "top" },
				new b.navbar.innercontainer({ container: "fluid" }, [
					new b.navbar.brand({ href: "#" }, "Fixed navbar"),
					new b.navbar.toggle.collapse({
						target: `#${id}`,
						controlfor: id,
						label: "Toggle navigation",
					}),
					new b.navbar.collapse({ id: id }, [
						new b.navbar.itemcontainer({ marginEnd: "auto" }, [
							new b.navbar.item(
								new b.navbar.link({ href: "#", active: true }, "Home")
							),
							new b.navbar.item(new b.navbar.link({ href: "#" }, "Link")),
							new b.navbar.item(
								new b.navbar.link({ href: "#", disabled: true }, "Disabled")
							),
						]),
						new h.form({ display: "flex", role: "search" }, [
							new b.input({
								type: "search",
								marginEnd: 2,
								placeholder: "Search",
								label: "Search",
							}),
							new b.button(
								{ type: "submit", color: "success", outline: true },
								"Search"
							),
						]),
					]),
				])
			);
		};

		const main = new h.main(
			{ flex: "shrink-0" },
			new h.div({ container: true, style: { paddingTop: "60px" } }, [
				new h.h1({ marginTop: 5 }, "Sticky footer with fixed navbar"),
				new h.p(
					{ lead: true },
					"Pin a footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. A fixed navbar has been added with {{padding-top: 60px;}} on the {{main > .container}}."
				),
				new h.p(
					"Use {{nav:docs/example/sticky_footer::the sticky footer with a fixed navbar}} if need be, too."
				),
			])
		);

		const footer = new h.footer(
			{ sticky: "bottom", marginTop: "auto", paddingY: 3, bgColor: "body-tertiary" },
			new h.div(
				{ container: true },
				new h.span({ textColor: "body-secondary" }, "Place sticky footer content here.")
			)
		);

		return new h.div({ display: "flex", flex: "column", viewHeight: 100 }, [
			header(),
			main,
			footer,
		]);
	},
};
