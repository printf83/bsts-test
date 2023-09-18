import { b, h } from "@printf83/bsts";
import { IContent } from "../../ctl/main/content.js";

export const blog: IContent = {
	fullscreen: true,
	title: "Blog",
	item: () => {
		const header = new h.header(
			{ border: "bottom", lineHeight: 1, paddingY: 3 },
			new h.div(
				{ row: true, flex: "nowrap", justifyContent: "between", alignItem: "center" },
				[
					new h.div(
						{ col: 4, paddingTop: 1 },
						new h.a({ linkColor: "secondary", href: "#" }, "Subscribe")
					),
					new h.div(
						{ col: 4, textAlign: "center" },
						new h.a(
							{ textColor: "body-emphasis", textDecoration: "none", href: "#" },
							"Large"
						)
					),
					new h.div(
						{
							col: 4,
							display: "flex",
							justifyContent: "end",
							alignItem: "center",
						},
						[
							new h.a(
								{ linkColor: "secondary", href: "#", label: "Search" },
								new b.icon("search")
							),
							new b.button(
								{ weight: "sm", outline: true, color: "secondary", href: "#" },
								"Sign up"
							),
						]
					),
				]
			)
		);

		const navbar = new h.div(
			{ paddingY: 1, marginBottom: 3, border: "bottom" },
			new b.nav.header.container({
				flex: "nowrap",
				overflowX: "hidden",
				link: [
					{ active: true, href: "#", elem: "World" },
					{ href: "#", textColor: "body-emphasis", elem: "MY" },
					{ href: "#", textColor: "body-emphasis", elem: "Technology" },
					{ href: "#", textColor: "body-emphasis", elem: "Design" },
					{ href: "#", textColor: "body-emphasis", elem: "Culture" },
					{ href: "#", textColor: "body-emphasis", elem: "Business" },
					{ href: "#", textColor: "body-emphasis", elem: "Politics" },
					{ href: "#", textColor: "body-emphasis", elem: "Opinion" },
					{ href: "#", textColor: "body-emphasis", elem: "Science" },
					{ href: "#", textColor: "body-emphasis", elem: "Health" },
					{ href: "#", textColor: "body-emphasis", elem: "Style" },
					{ href: "#", textColor: "body-emphasis", elem: "Travel" },
				],
			})
		);

		const banner = new h.div(
			{
				padding: [4, "md-5"],
				marginBottom: 4,
				rounded: true,
				textColor: "body-emphasis",
				bgColor: "body-secondary",
			},
			new h.div({ col: "lg-6", paddingX: 0 }, [
				new h.h(
					1,
					{ fontDisplay: 4, fontItalic: true },
					"Title of a longer featured blog post"
				),
				new h.p(
					{ lead: true, marginY: 3 },
					"Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents."
				),
				new h.p(
					{ lead: true, marginBottom: 0 },
					new h.a(
						{ textColor: "body-emphasis", fontWeight: "bold", href: "#" },
						"Continue reading..."
					)
				),
			])
		);

		return new h.div({ container: true }, [header, navbar, banner]);
	},
};
