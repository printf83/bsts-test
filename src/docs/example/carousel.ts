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
				rounded: false,
				itemControl: true,
				itemIndicator: true,
				item: [0, 1, 2, 3, 4, 5, 6].map((i) => {
					return {
						src: `https://picsum.photos/seed/bsts_${i}/710/150.webp`,
						caption: [
							new h.h(5, `Slide #${i + 1}`),
							new h.p(
								`Some representative placeholder content for the slide #${i + 1}.`
							),
						],
					};
				}),
			});
		};

		return [header(), slider(), new h.div("content")];
	},
};
