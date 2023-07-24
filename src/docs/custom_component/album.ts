import { b, h } from "@printf83/bsts";
import { IContent } from "../../ctl/main/content.js";

export const album: IContent = {
	fullscreen: true,
	title: "Album",
	item: () => {
		const header = new h.header([
			new b.collapse.container(
				{ id: "navbarContent" },
				new h.div(
					{ theme: "dark", textBgColor: "dark" },
					new h.div(
						{ container: true },
						new h.div({ row: true }, [
							new h.div({ col: ["sm-8", "md-7"], paddingY: 4 }, [
								new h.h(4, "About"),
								new h.p(
									{ textColor: "body-secondary" },
									"Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information."
								),
							]),
							new h.div({ col: "sm-4", offset: "md-1", paddingY: 4 }, [
								new h.h(4, "Contact"),
								new h.ul({
									unstyle: true,
									item: [
										new h.a(
											{ href: "#", textColor: "body-emphasis" },
											"Follow on Twitter"
										),
										new h.a(
											{ href: "#", textColor: "body-emphasis" },
											"Like on Facebook"
										),
										new h.a(
											{ href: "#", textColor: "body-emphasis" },
											"Email me"
										),
									],
								}),
							]),
						])
					)
				)
			),
			new b.navbar.container(
				{ theme: "dark", textBgColor: "dark" },
				new b.navbar.innercontainer({ container: true }, [
					new b.navbar.brand({ href: "#" }, new b.caption({ icon: "camera" }, "Album")),
					new b.navbar.toggle.collapse({
						target: "#navbarContent",
						controlfor: "navbarContent",
						label: "Toggle navigation",
					}),
				])
			),
		]);

		const jumbotron = new h.section(
			{
				bgColor: "body",
			},
			new h.div({ container: true, textAlign: "center", paddingX: 5 }, [
				new h.h(
					1,
					{ textColor: "body-emphasis", marginTop: 4, fontDisplay: 3 },
					"Album example"
				),
				new h.p(
					{ lead: true },
					"Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely."
				),
				new h.div(
					{
						display: "inline-flex",
						flex: "wrap",
						justifyContent: "center",
						gap: 2,
						marginBottom: 5,
					},
					[
						new b.button("Main call to action"),
						new b.button(
							{
								color: "secondary",
							},
							"Secondary action"
						),
					]
				),
			])
		);

		const thumbnail = (img: string) => {
			return new h.div(
				{ col: true },
				new b.card.container({ shadow: "sm" }, [
					new b.card.img({ src: img, location: "top", alt: "Image" }),
					new b.card.body([
						new b.card.text(
							"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
						),
						new h.div(
							{ display: "flex", justifyContent: "between", alignItem: "center" },
							[
								new b.btngroup([
									new b.button(
										{ weight: "sm", outline: true, color: "secondary" },
										"View"
									),
									new b.button(
										{ weight: "sm", outline: true, color: "secondary" },
										"Edit"
									),
								]),
								new h.small({ textColor: "body-secondary" }, "9 mins"),
							]
						),
					]),
				])
			);
		};

		const album = new h.main(
			{
				bgColor: "body-tertiary",
				paddingY: 5,
			},
			new h.div(
				{ container: true },
				new h.div(
					{ row: true, rowCol: ["1", "sm-2", "md-3"], gutter: 3 },
					Array(12)
						.fill("")
						.map((_i, ix) => {
							return thumbnail(`https://picsum.photos/seed/bsts_${ix}/280/280.webp`);
						})
				)
			)
		);

		const footer = new h.footer(
			{
				bgColor: "body",
				textColor: "body-secondary",
				paddingY: 5,
			},
			new h.div({ container: true }, [
				new h.p(
					{ float: "end", marginBottom: 1 },
					new h.a(
						{
							href: "#",
							on: {
								click: () => {
									window.scrollTo(0, 0);
								},
							},
						},
						"Back to top"
					)
				),
				new h.p(
					{ marginBottom: 1 },
					"Album example is © Bootstrap, but please download and customize it for yourself!"
				),
				new h.p(
					{ marginBottom: 0 },
					"New to Bootstrap? {{nav:docs/gettingstarted/introduction::Visit the homepage}} or read our {{nav:docs/gettingstarted/introduction::getting started guide}}."
				),
			])
		);

		return [header, jumbotron, album, footer];
	},
};
