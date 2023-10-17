import { b, core, h } from "@printf83/bsts";
import { IContent } from "../../ctl/main/content.js";

export const carousel: IContent = {
	fullscreen: true,
	title: "Carousel",
	item: () => {
		const header = () => {
			const id = core.UUID();
			return new b.navbar.container(
				{ bgColor: "dark", theme: "dark", expand: "lg" },
				new b.navbar.innercontainer({ container: "fluid" }, [
					new b.navbar.brand({ href: "#" }, "Carousel"),
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

		const slider = () => {
			return new b.carousel.container({
				innerAttr: { theme: "light" },
				rounded: false,
				itemControl: true,
				itemIndicator: true,
				item: [
					{
						src: "https://picsum.photos/seed/bsts_0/710/150.webp",
						title: "Example headline.",
						description:
							"Some representative placeholder content for the first slide of the carousel.",
						button: "Sign up today",
						href: "#",
						textAlign: "start",
					},
					{
						src: "https://picsum.photos/seed/bsts_1/710/150.webp",
						title: "Another example headline.",
						description:
							"Some representative placeholder content for the second slide of the carousel.",
						button: "Learn more",
						href: "#",
						textAlign: "center",
					},
					{
						src: "https://picsum.photos/seed/bsts_2/710/150.webp",
						title: "One more for good measure.",
						description:
							"Some representative placeholder content for the third slide of this carousel.",
						button: "Browse gallery",
						href: "#",
						textAlign: "end",
					},
				].map((i) => {
					return {
						src: i.src,
						caption: new h.div(
							{
								textColor: "white",
								textAlign: i.textAlign as core.bootstrapType.textAlign,
							},
							[
								new h.h1(i.title),
								new h.p({ lead: true }, i.description),
								new b.button({ weight: "lg", href: i.href }, i.button),
							]
						),
					};
				}),
			});
		};

		const heading_item = (opt: {
			src: string;
			title: string;
			description: string;
			href: string;
		}) => {
			return new h.div({ col: "lg-4", textAlign: "center", marginY: 3, padding: 2 }, [
				new b.img({ rounded: "circle", src: opt.src }),
				new h.h2({ fontWeight: "normal", margin: 2 }, opt.title),
				new h.p(opt.description),
				new h.p(new b.button({ color: "secondary", href: opt.href }, "View detail")),
			]);
		};

		const heading = new h.div(
			{ container: true, marginY: 5 },
			new h.div(
				{ row: true },
				[
					{
						src: "https://picsum.photos/seed/bsts_3/140/140.webp",
						title: "Heading",
						description:
							"Some representative placeholder content for the three columns of text below the carousel. This is the first column.",
						href: "#",
					},
					{
						src: "https://picsum.photos/seed/bsts_4/140/140.webp",
						title: "Heading",
						description:
							"Another exciting bit of representative placeholder content. This time, we've moved on to the second column.",
						href: "#",
					},
					{
						src: "https://picsum.photos/seed/bsts_5/140/140.webp",
						title: "Heading",
						description:
							"And lastly this, the third column of representative placeholder content.",
						href: "#",
					},
				].map((i) => heading_item(i))
			)
		);

		interface heading2_item_option {
			img_location: "start" | "end";
			src: string;
			title: string;
			subtitle: string;
			description: string;
			href: string;
		}

		const heading2_item = (opt: heading2_item_option) => {
			const picture = new h.div({ col: "md-5" }, new b.img({ fluid: true, src: opt.src }));
			const detail = new h.div(
				{ col: "md-7" },
				new h.div(
					{ display: "flex", alignItem: "center", height: 100 },
					new h.div({ paddingY: 5 }, [
						new h.h1({ fontWeight: "normal", lineHeight: 1, fontDisplay: 5 }, [
							opt.title,
							" ",
							new h.span({ textColor: "body-secondary" }, opt.subtitle),
						]),
						new h.p({ lead: true }, opt.description),
					])
				)
			);
			const container =
				opt.img_location === "start"
					? new h.div({ row: true }, [picture, detail])
					: new h.div({ row: true }, [detail, picture]);

			return new h.div({ container: true }, [new h.hr({ marginY: 5 }), container]);
		};

		const heading2 = new h.div(
			{ container: true, marginY: 5, paddingY: 3 },
			new h.div(
				{ row: true },
				[
					{
						img_location: "end",
						src: "https://picsum.photos/seed/bsts_6/500/500.webp",
						title: "First featurette heading.",
						subtitle: "It’ll blow your mind.",
						description:
							"Some great placeholder content for the first featurette here. Imagine some exciting prose here.",
						href: "#",
					},
					{
						img_location: "start",
						src: "https://picsum.photos/seed/bsts_7/500/500.webp",
						title: "Oh yeah, it’s that good.",
						subtitle: "See for yourself.",
						description:
							"Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.",
						href: "#",
					},
					{
						img_location: "end",
						src: "https://picsum.photos/seed/bsts_8/500/500.webp",
						title: "And lastly, this one.",
						subtitle: "Checkmate.",
						description:
							"And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.",
						href: "#",
					},
				].map((i) => heading2_item(i as heading2_item_option))
			)
		);

		const footer = new h.footer(
			new h.div({ container: true }, [
				new h.hr({ marginY: 5 }),
				new h.div([
					new h.p({ float: "end" }, new h.a({ href: "#" }, "Back to top")),
					new h.p({ marginBottom: 5 }, [
						"© 2017–2023 Company, Inc. · ",
						new h.a({ href: "#" }, "Privacy"),
						" · ",
						new h.a({ href: "#" }, "Term"),
					]),
				]),
			])
		);

		return [header(), slider(), heading, heading2, footer];
	},
};
