import { b, h } from "@printf83/bsts";
import { IContent } from "../../ctl/main/content.js";

export const jumbotron: IContent = {
	fullscreen: true,
	title: "Jumbotron",
	item: () => {
		const header = new h.header(
			{ paddingBottom: 3, marginBottom: 4, border: "bottom", fontSize: 4 },
			new h.a(
				{
					href: "#",
					display: "flex",
					alignItem: "center",
					textColor: "body-emphasis",
					textDecoration: "none",
				},
				new b.caption(
					{ icon: new b.icon({ id: "hexagon-fill", fontSize: 1 }) },
					"Jumbotron example"
				)
			)
		);

		const footer = new h.footer(
			{ paddingTop: 3, marginTop: 4, textColor: "body-secondary", border: "top" },
			"© 2023"
		);

		const example_1 = new h.div(
			{ padding: 5, bgColor: "body-tertiary", rounded: 3, marginBottom: 4 },
			new h.div({ container: "fluid", paddingY: 5 }, [
				new h.h1({ fontDisplay: 5, fontWeight: "bold" }, "Custom jumbotron"),
				new h.p(
					{ col: "md-8", fontSize: 4 },
					"Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking."
				),
				new b.button({ weight: "lg" }, "Example button"),
			])
		);
		const example_2 = new h.div({ padding: 5, textBgColor: "dark", rounded: 3, height: 100 }, [
			new h.h2("Change the background"),
			new h.p(
				"Swap the background-color utility and add a {{.text-*}} color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more."
			),
			new b.button({ outline: true, color: "light" }, "Example button"),
		]);
		const example_3 = new h.div(
			{ padding: 5, bgColor: "body-tertiary", rounded: 3, border: true, height: 100 },
			[
				new h.h2("Add borders"),
				new h.p(
					"Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height."
				),
				new b.button({ outline: true, color: "secondary" }, "Example button"),
			]
		);

		return new h.main(
			new h.div({ container: true, paddingY: 4 }, [
				header,
				example_1,
				new h.div(
					{
						row: true,
						gutter: 4,
					},
					[new h.div({ col: "md-6" }, example_2), new h.div({ col: "md-6" }, example_3)]
				),
				footer,
			])
		);
	},
};
