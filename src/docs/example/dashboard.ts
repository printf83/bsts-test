import { b, h } from "@printf83/bsts";
import { IContent } from "../../ctl/main/content.js";

export const dashboard: IContent = {
	fullscreen: true,
	title: "Dashboard",
	item: () => {
		const header = new b.navbar.container(
			{
				theme: "dark",
				bgColor: "dark",
				fixed: "top",
				expand: "md",
				sticky: "top",
				padding: 0,
				flex: "md-nowrap",
				shadow: true,
			},
			new b.navbar.innercontainer({ container: "fluid" }, [
				new b.navbar.brand({ href: "#" }, "Company name"),
				new b.navbar.toggle.offcanvas({
					target: "#offcanvasNavbar",
					controlfor: "offcanvasNavbar",
					label: "Toggle navigation",
				}),
			])
		);

		const sidebar = new h.div(
			{ border: "end", col: ["md-3", "lg-2"], padding: 0, bgColor: "body-tertiary" },
			new b.offcanvas.container(
				{
					id: "offcanvasNavbar",
					placement: "end",
					show: "md",
					bgColor: "body-tertiary",
					labelledby: "offcanvasNavbarLabel",
				},
				[
					new b.offcanvas.header([
						new b.offcanvas.title({ id: "offcanvasNavbarLabel" }, "Company name"),
						new b.offcanvas.btnclose({ target: "#offcanvasNavbar" }),
					]),
					new b.offcanvas.body(
						{
							display: "md-flex",
							flex: "column",
							paddingTop: "lg-3",
							overflowY: "auto",
						},
						[
							new b.navbar.itemcontainer(
								{
									flex: "column",
									marginBottom: "auto",
								},
								[
									{ icon: "house", label: "Dashboard", href: "#" },
									{ icon: "file-earmark", label: "Orders", href: "#" },
									{ icon: "cart", label: "Products", href: "#" },
									{ icon: "people", label: "Customers", href: "#" },
									{ icon: "graph-up", label: "Report", href: "#" },
									{ icon: "puzzle", label: "Integrations", href: "#" },
								].map((i) => {
									return new b.navbar.item(
										new b.navbar.link(
											{ href: i.href, paddingX: 3 },
											new b.caption({ icon: new b.icon(i.icon) }, i.label)
										)
									);
								})
							),
						]
					),
				]
			)
		);

		const main = new h.main(
			{ col: ["md-9", "lg-10"], marginStart: "sm-auto", paddingX: "md-4" },
			"main"
		);

		const middle = new h.div({ container: "fluid" }, new h.div({ row: true }, [sidebar, main]));

		return [header, middle];
	},
};
