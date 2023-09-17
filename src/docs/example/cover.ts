import { b, h } from "@printf83/bsts";
import { IContent } from "../../ctl/main/content.js";

export const cover: IContent = {
	fullscreen: true,
	title: "Cover",
	item: () => {
		const header = new h.header(
			{ marginBottom: "auto" },
			new h.div([
				new h.h(
					3,
					{ float: "md-start", marginBottom: 0, textColor: "body-emphasis" },
					"Cover"
				),
				new b.nav.header.container({
					fontWeight: "bold",
					float: "md-end",
					justifyContent: "center",
					type: "underline",
					link: [
						{ active: true, href: "#", textColor: "body-emphasis", elem: "Home" },
						{ href: "#", textColor: "secondary", elem: "Features" },
						{ href: "#", textColor: "secondary", elem: "Contact" },
					],
				}),
			])
		);

		const main = new h.main({ paddingX: 3 }, [
			new h.h(1, "Cover your page"),
			new h.p(
				{ lead: true },
				"Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own."
			),
			new h.p(
				{ lead: true },
				new b.button(
					{
						weight: "lg",
						color: "light",
						fontWeight: "bold",
						borderColor: "light",
						bgColor: "light",
						href: "#",
					},
					"Learn more"
				)
			),
		]);

		const footer = new h.footer(
			{ marginTop: "auto", textColor: "light-emphasis" },
			new h.p([
				"Cover template for ",
				new h.a(
					{
						href: "https://getbootstrap.com",
						textColor: "body-emphasis",
					},
					"Bootstrap"
				),
				", by ",
				new h.a({ href: "https://twitter.com/mdo", textColor: "body-emphasis" }, "@mdo"),
			])
		);

		const container = new h.div(
			{
				display: "flex",
				textAlign: "center",
				minViewHeight: 100,
				padding: 3,
				marginX: "auto",
				flex: "column",
				style: {
					maxWidth: "42em",
				},
			},
			[header, main, footer]
		);

		return new h.div(
			{
				display: "flex",
				minViewHeight: 100,
				minViewWidth: 100,
				style: {
					// textShadow: "0 .05rem .1rem rgba(0, 0, 0, .5)",
					boxShadow: "inset 0 0 5rem rgba(0, 0, 0, .5)",
				},
			},
			container
		);
	},
};
