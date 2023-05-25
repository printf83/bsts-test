import { I, b, h } from "@printf83/bsts";
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
					new b.icon({ id: arg.icon, weight: "2xl" })
				),
				new b.nav.header.container({
					col: "md-4",
					justifyContent: "end",
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
						new b.icon({ id: arg.icon, weight: "xl" })
					),
					new h.span({ marginBottom: [3, "md-0"], textColor: "body-secondary" }, arg.copyright),
				]),

				new h.ul({
					col: "md-4",
					justifyContent: "end",
					display: "flex",
					item: arg.link.map((i) => {
						return new h.li(
							{ marginStart: 3 },
							new h.a(
								{ href: i.href },
								new b.icon({ id: i.icon, weight: "xl", textColor: "body-secondary" })
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
					link: arg.link,
				}),
				new h.p({ textAlign: "center", textColor: "body-secondary" }, arg.copyright),
			]
		);
	},
};
export const footers: IAttrContent = {
	title: "Footers",
	description: "Finish every page strong with an awesome footer, big or small.",
	item: [
		new e.title("Example footer 1"),
		new e.code({
			outputAttr: { class: "nav-custom-4" },
			extention: [{ name: "COMPONENT", rename: "ex.c1", output: ex.c1 }],
			output: () => {
				return ex.c1({
					copyright: "© 2023 Company, Inc",
					icon: "fab bootstrap",
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

		//-----------------------

		new e.title("Example footer 2"),
		new e.code({
			outputAttr: { class: "nav-custom-4" },
			extention: [{ name: "COMPONENT", rename: "ex.c2", output: ex.c2 }],
			output: () => {
				return ex.c2({
					copyright: "© 2023 Company, Inc",
					icon: "fab bootstrap",
					link: [
						{ href: "#", icon: "fab twitter" },
						{ href: "#", icon: "fab instagram" },
						{ href: "#", icon: "fab facebook" },
					],
				});
			},
		}),

		//-----------------------

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

		//-----------------------

		new e.subtitle(""),
		new e.text(""),
		new e.codepreview({
			type: "css",
			code: `
				`,
		}),

		//-----------------------

		new e.title("CSS"),
		new e.text(""),

		//-----------------------

		new e.subtitle("Sass variables"),
		new e.text(""),
		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss",
			code: `
			`,
		}),
	],
};
