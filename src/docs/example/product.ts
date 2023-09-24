import { Link as HeaderLink } from "../../../node_modules/@printf83/bsts/build/types/bootstrap/nav/header/link.js";

import { b, core, h } from "@printf83/bsts";
import { IContent } from "../../ctl/main/content.js";

export const product: IContent = {
	fullscreen: true,
	title: "Product",
	item: () => {
		const header = new b.navbar.containerHeader(
			{
				theme: "dark",
				bgColor: "dark",
				expand: "md",
				sticky: "top",
				border: "bottom",
			},
			new b.navbar.innercontainerNav({ container: true }, [
				new b.navbar.brand(
					{ display: "md-none", href: "#" },
					new b.caption(
						{ icon: new b.icon({ id: "camera2", fontSize: 4, lineHeight: 1 }) },
						"Aperture"
					)
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
						placement: "end",
					},
					[
						new b.offcanvas.header([
							new b.offcanvas.title(
								{ id: "offcanvasLabel" },
								new b.caption(
									{
										icon: new b.icon({
											id: "camera2",
											fontSize: 4,
											lineHeight: 1,
										}),
									},
									"Aperture"
								)
							),
							new b.offcanvas.btnclose(),
						]),
						new b.offcanvas.body(
							new b.navbar.itemcontainer(
								{ display: "flex", flex: "grow-1", justifyContent: "between" },
								[
									new b.navbar.item(
										new b.navbar.link({ href: "#" }, [
											new b.icon({
												id: "camera2",
												fontSize: 4,
												lineHeight: 1,
												display: ["none", "sm-inline-block"],
											}),
											new h.span({ display: "sm-none" }, "Home"),
										])
									),
									new b.navbar.item(new b.navbar.link({ href: "#" }, "Tour")),
									new b.navbar.item(new b.navbar.link({ href: "#" }, "Product")),
									new b.navbar.item(new b.navbar.link({ href: "#" }, "Features")),
									new b.navbar.item(new b.navbar.link({ href: "#" }, "Support")),
									new b.navbar.item(new b.navbar.link({ href: "#" }, "Pricing")),
									new b.navbar.item(
										new b.navbar.link({ href: "#" }, [
											new b.icon({
												id: "cart",
												fontSize: 4,
												lineHeight: 1,
												display: ["none", "sm-inline-block"],
											}),
											new h.span({ display: "sm-none" }, "Buy"),
										])
									),
								]
							)
						),
					]
				),
			])
		);

		const jumbotron = new h.section(
			{ padding: 3, marginBottom: 0, textColor: "light" },
			new h.div(
				{
					textAlign: "center",
					paddingY: 5,
					style: {
						backgroundImage: `url('https://picsum.photos/seed/bsts_0/472/63.webp')`,
						backgroundSize: "cover",
					},
				},
				[
					new h.h(1, { marginTop: 4, fontDisplay: 3 }, "Designed for engineers"),
					new h.p({ lead: true }, "Build anything you want with Aperture"),
					new h.div(
						{
							display: "inline-flex",
							flex: "wrap",
							justifyContent: "center",
							gap: 2,
							marginBottom: 5,
						},
						[
							new b.button(
								{ color: "link", weight: "lg" },
								new b.caption(
									{ icon: "chevron-right", iconPosition: "end" },
									"Learn more"
								)
							),
							new b.button(
								{ color: "link", weight: "lg" },
								new b.caption({ icon: "chevron-right", iconPosition: "end" }, "Buy")
							),
						]
					),
				]
			)
		);

		const item = (arg: {
			title: string;
			description: string;
			elem?: core.IElem;
			bgColor?: core.bootstrapType.bgColor;
			textColor?: core.bootstrapType.textColor;
			img: string;
		}) => {
			return new h.div(
				{
					paddingX: 4,
					paddingTop: 5,
					textAlign: "center",
					bgColor: arg.bgColor,
					textColor: arg.textColor,
				},
				[
					new h.h(3, { fontDisplay: 5 }, arg.title),
					new h.div({ col: "lg-6", marginX: "auto" }, [
						new h.p({ lead: true, marginBottom: 2 }, arg.description),
						new h.div(
							{
								display: ["grid", "sm-flex"],
								gap: 2,
								justifyContent: "sm-center",
								marginBottom: 3,
							},
							arg.elem ? arg.elem : ""
						),
					]),
					new h.div(
						{ overflow: "hidden", style: { maxHeight: "30vh" } },
						new h.div(
							{ container: true, paddingX: 5 },
							new b.img({
								src: arg.img,
								fluid: true,
								rounded: 3,
								shadow: "lg",
								marginBottom: 4,
								alt: "Example image",
								attrWidth: 700,
								attrHeight: 500,
							})
						)
					),
				]
			);
		};

		const container = new h.main(
			new h.div(
				{ padding: 4, paddingTop: 0 },
				new h.div(
					{ row: true, rowCol: ["1", "md-2"], gutter: 3 },
					Array(12)
						.fill("")
						.map((_i, ix) => {
							const bgColor = ix === 0 ? "dark" : ix === 3 ? "primary" : undefined;
							const textColor = ix === 0 || ix === 3 ? "light" : undefined;

							return item({
								title: "Another headline",
								description: "And an even wittier subheading.",
								img: `https://picsum.photos/seed/bsts_${ix + 1}/510/364.webp`,
								bgColor,
								textColor,
							});
						})
				)
			)
		);

		const section = (arg: { title: string; link: HeaderLink[] }) => {
			return [
				new h.h(5, arg.title),
				new b.nav.header.container({
					flex: "column",
					elem: arg.link.map((i) => {
						return new b.nav.header.item(
							{ marginBottom: 2 },
							new b.nav.header.link({
								textColor: "secondary",
								textColorHover: "primary-emphasis",
								href: i.href,
								elem: i.elem,
								padding: 0,
							})
						);
					}),
				}),
			];
		};

		const footer = new h.footer(
			{
				container: true,
			},
			new h.div({ row: true, rowCol: [1, "sm-2", "md-5"], paddingY: 5, marginY: 5 }, [
				new h.div({ col: true, marginBottom: 3 }, [
					new h.a(
						{
							href: "#",
							display: "flex",
							alignItem: "center",
							marginBottom: 3,
							textDecoration: "none",
						},
						new b.icon({ id: "hexagon-fill", fontSize: 3, textColor: "body" })
					),
					new h.p({ textColor: "body-tertiary" }, "© 2017–2023"),
				]),
				...[
					section({
						title: "Features",
						link: [
							{ href: "#", elem: "Cool stuff" },
							{ href: "#", elem: "Random feature" },
							{ href: "#", elem: "Team feature" },
							{ href: "#", elem: "Stuff for developers" },
							{ href: "#", elem: "Another one" },
							{ href: "#", elem: "Last time" },
						],
					}),
					section({
						title: "Resources",
						link: [
							{ href: "#", elem: "Resource" },
							{ href: "#", elem: "Resource name" },
							{ href: "#", elem: "Another resource" },
							{ href: "#", elem: "Final resource" },
						],
					}),
					section({
						title: "Resources",
						link: [
							{ href: "#", elem: "Resource" },
							{ href: "#", elem: "Resource name" },
							{ href: "#", elem: "Another resource" },
							{ href: "#", elem: "Final resource" },
						],
					}),
					section({
						title: "About",
						link: [
							{ href: "#", elem: "Team" },
							{ href: "#", elem: "Locations" },
							{ href: "#", elem: "Privacy" },
							{ href: "#", elem: "Terms" },
						],
					}),
				].map((i) => {
					return new h.div({ col: true, marginBottom: 3 }, i ? i : "");
				}),
			])
		);

		return new h.div({ bgColor: "body" }, [header, jumbotron, container, footer]);
	},
};
