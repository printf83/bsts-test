import { b, core, h } from "@printf83/bsts";
import { IContent } from "../../ctl/main/content.js";

export const carousel: IContent = {
	fullscreen: true,
	title: "Carousel",
	item: () => {
		const header = () => {
			const id = core.UUID();
			return new b.navbar.container(
				{ bgColor: "body-tertiary", expand: "lg" },
				new b.navbar.innercontainer({ container: "fluid" }, [
					new b.navbar.brand({ href: "#" }, "Navbar"),
					new b.navbar.toggle.collapse({
						target: `#${id}`,
						controlfor: id,
						label: "Toggle navigation",
					}),
					new b.navbar.collapse({ id: id }, [
						new b.navbar.itemcontainer(
							{ marginEnd: "auto", marginBottom: [2, "lg-0"] },
							[
								new b.navbar.item(
									new b.navbar.link({ href: "#", active: true }, "Home")
								),
								new b.navbar.item(new b.navbar.link({ href: "#" }, "Link")),
								new b.navbar.item(
									new b.navbar.link({ href: "#", disabled: true }, "Disabled")
								),
							]
						),
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
				theme: "light",
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
								new h.h(1, i.title),
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
			return new h.div({ col: "lg-4", textAlign: "center", marginBottom: 3, padding: 2 }, [
				new b.img({ rounded: "circle", src: opt.src }),
				new h.h(2, { fontWeight: "normal" }, opt.title),
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

		const heading2_item = (opt: {
			src: string;
			title: string;
			description: string;
			href: string;
		}) => {
			return new h.div({ container: true }, [
				new h.hr({ marginY: 5 }),
				new h.div({ row: true }, [new h.div({ col: "md-7" }), new h.div({ col: "md-5" })]),
				// new h.div({ col: "lg-4", textAlign: "center", marginBottom: 3, padding: 2 }, [
				// 	new b.img({ rounded: "circle", src: opt.src }),
				// 	new h.h(2, { fontWeight: "normal" }, opt.title),
				// 	new h.p(opt.description),
				// 	new h.p(new b.button({ color: "secondary", href: opt.href }, "View detail")),
				// ]),
			]);
		};

		const heading2 = new h.div(
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
				].map((i) => heading2_item(i))
			)
		);

		return [header(), slider(), heading, heading2, new h.div("content")];
	},
};
