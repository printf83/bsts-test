import { I, b, h, t } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

const ex = {
	c1: (arg: { copyright: string; icon: string; link: I.B.Nav.Header.Link[] }) => {
		return new h.footer(
			{
				display: "flex",
				flex: "wrap",
				justifyContent: "between",
				alignItem: "center",
				paddingY: 3,
				marginY: 4,
				border: "top",
			},
			[
				new h.p({ col: "md-4", marginBottom: 0, textColor: "body-secondary" }, arg.copyright),
				new h.a(
					{
						href: "#",
						col: "md-4",
						display: "flex",
						alignItem: "center",
						justifyContent: "center",
						marginBottom: [3, "md-0"],
						marginEnd: "md-auto",
						linkColor: "body-emphasis",
						textDecoration: "none",
					},
					new b.icon({ id: arg.icon, fontSize: 2 })
				),
				new b.nav.header.container({
					col: "md-4",
					justifyContent: "end",
					linkActive: "secondary",
					linkNormal: "body-emphasis",
					link: arg.link,
				}),
			]
		);
	},
	c2: (arg: { copyright: string; icon: string; link: { icon: string; href: string }[] }) => {
		return new h.footer(
			{
				display: "flex",
				flex: "wrap",
				justifyContent: "between",
				alignItem: "center",
				paddingY: 3,
				marginY: 4,
				border: "top",
			},
			[
				new h.div({ col: "md-4", display: "flex", alignItem: "center" }, [
					new h.a(
						{
							href: "#",
							marginBottom: [3, "md-0"],
							marginEnd: 2,
							textColor: "body-secondary",
							textDecoration: "none",
							lineHeight: 1,
						},
						new b.icon({ id: arg.icon, fontSize: 2 })
					),
					new h.span({ marginBottom: [3, "md-0"], textColor: "body-secondary" }, arg.copyright),
				]),

				new h.ul({
					col: "md-4",
					justifyContent: "end",
					display: "flex",
					linkNormal: "secondary",
					item: arg.link.map((i) => {
						return new h.li(
							{ marginStart: 3 },
							new h.a(
								{ href: i.href },
								new b.icon({ id: i.icon, fontSize: 2, textColor: "body-secondary" })
							)
						);
					}),
					unstyle: true,
				}),
			]
		);
	},
	c3: (arg: { copyright: string; link: I.B.Nav.Header.Link[] }) => {
		return new h.footer(
			{
				paddingY: 3,
				marginY: 4,
			},
			[
				new b.nav.header.container({
					border: "bottom",
					paddingBottom: 3,
					marginBottom: 3,
					justifyContent: "center",
					linkNormal: "secondary",
					link: arg.link,
				}),
				new h.p({ textAlign: "center", textColor: "body-secondary" }, arg.copyright),
			]
		);
	},
	c4Section: (arg: { title: string; link: I.B.Nav.Header.Link[] }) => {
		return [
			new h.h(5, arg.title),
			new b.nav.header.container({
				flex: "column",
				linkNormal: "secondary",
				elem: arg.link.map((i) => {
					return new b.nav.header.item(
						{ marginBottom: 2 },
						new b.nav.header.link({
							href: i.href,
							elem: i.elem,
							padding: 0,
						})
					);
				}),
			}),
		];
	},
	c4: (arg: { copyright: string; icon: string; link: (undefined | t[])[] }) => {
		return new h.footer(
			{
				row: true,
				rowCol: [1, "sm-2", "md-5"],
				paddingY: 5,
				marginY: 5,
				border: "top",
			},
			[
				new h.div({ col: true, marginBottom: 3 }, [
					new h.a(
						{
							href: "#",
							display: "flex",
							alignItem: "center",
							marginBottom: 3,
							textDecoration: "none",
						},
						new b.icon({ id: arg.icon, fontSize: 1, color: "body" })
					),
					new h.p({ textColor: "body-secondary" }, arg.copyright),
				]),
				...arg.link.map((i) => {
					return new h.div({ col: true, marginBottom: 3 }, i ? i : "");
				}),
			]
		);
	},
	c5: (arg: {
		copyright: string;
		link: (undefined | t[])[];
		linkicon: { icon: string; href: string }[];
		onsubscribe: EventListener;
	}) => {
		return new h.footer(
			{
				paddingY: 5,
			},
			[
				new h.div({ row: true }, [
					...arg.link.map((i) => {
						return new h.div({ col: [6, "md-2"], marginBottom: 3 }, i ? i : "");
					}),
					new h.div({ col: "md-5", offset: "md-1", marginBottom: 3 }, [
						new h.form({ on: { submit: arg.onsubscribe } }, [
							new h.h(5, "Subscribe to our newsletter"),
							new h.p("Monthly digest of what's new and exciting from us."),
							new h.div(
								{
									display: "flex",
									flex: ["column", "sm-row"],
									width: 100,
									gap: 2,
								},
								[
									b.form.input({
										label: "Email address",
										hideLabel: true,
										type: "email",
										placeholder: "Email address",
										name: "subcribe",
										required: true,
									}),
									new b.button({ type: "submit" }, "Subscribe"),
								]
							),
						]),
					]),
				]),
				new h.div(
					{
						display: "flex",
						alignItem: "center",
						flex: ["column", "sm-row"],
						justifyContent: "between",
						paddingY: 4,
						marginY: 4,
						border: "top",
					},
					[
						new h.p({ marginBottom: 0 }, arg.copyright),
						new h.ul({
							display: "flex",
							item: arg.linkicon.map((i) => {
								return new h.li(
									{ marginStart: 3 },
									new h.a(
										{ href: i.href },
										new b.icon({ id: i.icon, fontSize: 3, textColor: "body" })
									)
								);
							}),
							unstyle: true,
						}),
					]
				),
			]
		);
	},
};
export const footers: IAttrContent = {
	title: "Footers",
	description: "Finish every page strong with an awesome footer, big or small.",
	item: () => {
		return [
			new e.section([
				new e.title("Example footer 1"),
				new e.code({
					showViewport: true,
					outputAttr: { class: "nav-custom-4" },
					extention: [{ name: "COMPONENT", rename: "ex.c1", output: ex.c1 }],
					output: () => {
						return ex.c1({
							copyright: "© 2023 Company, Inc",
							icon: "hexagon-fill",
							link: [
								{ href: "#", elem: "Home" },
								{ href: "#", elem: "Features" },
								{ href: "#", elem: "Pricing" },
								{ href: "#", elem: "FAQs" },
								{ href: "#", elem: "About" },
							],
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Example footer 2"),
				new e.code({
					showViewport: true,
					outputAttr: { class: "nav-custom-4" },
					extention: [{ name: "COMPONENT", rename: "ex.c2", output: ex.c2 }],
					output: () => {
						return ex.c2({
							copyright: "© 2023 Company, Inc",
							icon: "hexagon-fill",
							link: [
								{ href: "#", icon: "twitter" },
								{ href: "#", icon: "instagram" },
								{ href: "#", icon: "facebook" },
							],
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Example footer 3"),
				new e.code({
					outputAttr: { class: "nav-custom-4" },
					extention: [{ name: "COMPONENT", rename: "ex.c3", output: ex.c3 }],
					output: () => {
						return ex.c3({
							copyright: "© 2023 Company, Inc",
							link: [
								{ href: "#", elem: "Home" },
								{ href: "#", elem: "Features" },
								{ href: "#", elem: "Pricing" },
								{ href: "#", elem: "FAQs" },
								{ href: "#", elem: "About" },
							],
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Example footer 4"),
				new e.code({
					showViewport: true,
					outputAttr: { class: "nav-custom-4" },
					extention: [
						{ name: "COMPONENTSECTION", rename: "ex.c4Section", output: ex.c4Section },
						{ name: "COMPONENT", rename: "ex.c4", output: ex.c4 },
					],
					output: () => {
						return ex.c4({
							copyright: "© 2023",
							icon: "hexagon-fill",
							link: [
								undefined,
								ex.c4Section({
									title: "Section",
									link: [
										{ href: "#", elem: "Home" },
										{ href: "#", elem: "Features" },
										{ href: "#", elem: "Pricing" },
										{ href: "#", elem: "FAQs" },
										{ href: "#", elem: "About" },
									],
								}),
								ex.c4Section({
									title: "Section",
									link: [
										{ href: "#", elem: "Home" },
										{ href: "#", elem: "Features" },
										{ href: "#", elem: "Pricing" },
										{ href: "#", elem: "FAQs" },
										{ href: "#", elem: "About" },
									],
								}),
								ex.c4Section({
									title: "Section",
									link: [
										{ href: "#", elem: "Home" },
										{ href: "#", elem: "Features" },
										{ href: "#", elem: "Pricing" },
										{ href: "#", elem: "FAQs" },
										{ href: "#", elem: "About" },
									],
								}),
							],
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Example footer 5"),
				new e.code({
					showConsole: true,
					showViewport: true,
					outputAttr: { class: "nav-custom-4" },
					extention: [
						{ name: "COMPONENTSECTION", rename: "ex.c4Section", output: ex.c4Section },
						{ name: "COMPONENT", rename: "ex.c5", output: ex.c5 },
					],
					output: () => {
						return ex.c5({
							copyright: "© 2023 Company, Inc. All rights reserved.",
							linkicon: [
								{ href: "#", icon: "twitter" },
								{ href: "#", icon: "instagram" },
								{ href: "#", icon: "facebook" },
							],
							link: [
								ex.c4Section({
									title: "Section",
									link: [
										{ href: "#", elem: "Home" },
										{ href: "#", elem: "Features" },
										{ href: "#", elem: "Pricing" },
										{ href: "#", elem: "FAQs" },
										{ href: "#", elem: "About" },
									],
								}),
								ex.c4Section({
									title: "Section",
									link: [
										{ href: "#", elem: "Home" },
										{ href: "#", elem: "Features" },
										{ href: "#", elem: "Pricing" },
										{ href: "#", elem: "FAQs" },
										{ href: "#", elem: "About" },
									],
								}),
								ex.c4Section({
									title: "Section",
									link: [
										{ href: "#", elem: "Home" },
										{ href: "#", elem: "Features" },
										{ href: "#", elem: "Pricing" },
										{ href: "#", elem: "FAQs" },
										{ href: "#", elem: "About" },
									],
								}),
							],
							onsubscribe: (event) => {
								event.preventDefault();
								const target = event.target as Element;
								if (target) {
									const input = target.querySelector("input[name='subcribe']") as HTMLInputElement;
									if (input) {
										const email = (input as HTMLInputElement).value;
										e.console(target, "onsubscribe", { email: email }, "info");
									}
								}
							},
						});
					},
				}),
			]),
		];
	},
};
