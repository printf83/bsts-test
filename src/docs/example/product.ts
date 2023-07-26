import { b, h } from "@printf83/bsts";
import { IContent } from "../../ctl/main/content.js";

export const product: IContent = {
	fullscreen: true,
	title: "Product",
	item: () => {
		const header = new b.navbar.containerHeader(
			{
				theme: "dark",
				expand: "md",
				sticky: "top",
				border: "bottom",
			},
			new b.navbar.innercontainerNav({ container: true }, [
				new b.navbar.brand(
					{ display: "md-none", href: "#" },
					new b.caption({ icon: "aperture" }, "Aperture")
				),
				new b.navbar.toggle.offcanvas({
					target: "#offcanvas",
					controlfor: "#offcanvas",
					label: "Toggle navigation",
				}),
				new b.offcanvas.container(
					{
						tabindex: -1,
						id: "offcanvas",
						labelledby: "#offcanvasLabel",
					},
					[
						new b.offcanvas.header([
							new b.offcanvas.title({ id: "offcanvasLabel" }, "Aperture"),
							new b.offcanvas.btnclose(),
						]),
						new b.offcanvas.body(
							new b.navbar.innercontainer(
								{ flex: "grow-1", justifyContent: "between" },
								[new b.navbar.itemcontainer({}, new b.navbar.item())]
							)
						),
					]
				),
			])
		);

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
							return thumbnail(`https://picsum.photos/seed/bsts_${ix}/210/210.webp`);
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
