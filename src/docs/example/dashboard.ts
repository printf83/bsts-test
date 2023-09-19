import { b, h } from "@printf83/bsts";
import { IContent } from "../../ctl/main/content.js";

export const dashboard: IContent = {
	fullscreen: true,
	title: "Dashboard",
	item: () => {
		const header = new b.navbar.container(
			{ bgColor: "body-tertiary", fixed: "top" },
			new b.navbar.innercontainer({ container: "fluid" }, [
				new b.navbar.brand({ href: "#" }, "Offcanvas navbar"),
				new b.navbar.toggle.offcanvas({
					target: "#offcanvasNavbar",
					controlfor: "offcanvasNavbar",
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
									new b.navbar.item(
										new b.navbar.link({ href: "#", active: true }, "Home")
									),
									new b.navbar.item(new b.navbar.link({ href: "#" }, "Link")),
									new b.navbar.item({ dropdown: true }, [
										new b.dropdown.button({ navItem: true }, "Dropdown"),
										new b.dropdown.menu([
											new b.dropdown.item({ href: "#" }, "Action"),
											new b.dropdown.item({ href: "#" }, "Another action"),
											new b.dropdown.divider(),
											new b.dropdown.item(
												{ href: "#" },
												"Something else here"
											),
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
								new b.button(
									{
										type: "submit",
										color: "success",
										outline: true,
									},
									"Search"
								),
							]),
						]),
					]
				),
			])
		);

		return [header];
	},
};
