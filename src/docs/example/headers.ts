import { I, b, core, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const headers: IAttrContent = {
	title: "Headers",
	description: "Display your branding, navigation, search, and more with these header components",
	item: [
		new e.title("Sample 1"),
		new e.code({
			output: () => {
				const component = (arg: {
					icon: I.B.Caption["icon"];
					title: string;
					link?: I.B.Nav.Header.Container["link"];
				}) => {
					return new h.div(
						{ container: true },
						new h.header(
							{
								display: "flex",
								flex: "wrap",
								justifyContent: "center",
								paddingY: 3,
								marginBottom: 4,
								border: "bottom",
							},
							[
								new h.a(
									{
										href: "#",
										display: "flex",
										alignItem: "center",
										marginBottom: [3, "md-0"],
										marginEnd: "md-auto",
										linkColor: "body-emphasis",
										textDecoration: "none",
									},
									new b.caption({ icon: arg.icon, h: 4 }, arg.title)
								),

								new b.nav.header.container({
									type: "pill",
									link: arg.link,
								}),
							]
						)
					);
				};

				return component({
					icon: "fab bootstrap",
					title: "Simple header",
					link: [
						{ active: true, href: "#", elem: "Home" },
						{ href: "#", elem: "Features" },
						{ href: "#", elem: "Pricing" },
						{ href: "#", elem: "FAQs" },
						{ href: "#", elem: "About" },
					],
				});
			},
		}),

		//-----------------------

		new e.title("Sample 2"),
		new e.code({
			output: () => {
				const component = (arg: I.B.Nav.Header.Container["link"]) => {
					return new h.div(
						{ container: true },
						new h.header(
							{
								display: "flex",
								justifyContent: "center",
								paddingY: 3,
							},
							new b.nav.header.container({
								type: "pill",
								link: arg,
							})
						)
					);
				};

				return component([
					{ active: true, href: "#", elem: "Home" },
					{ href: "#", elem: "Features" },
					{ href: "#", elem: "Pricing" },
					{ href: "#", elem: "FAQs" },
					{ href: "#", elem: "About" },
				]);
			},
		}),

		//-----------------------

		new e.title("Sample 3"),
		new e.code({
			output: () => {
				const component = (arg: {
					icon: core.IElem;
					link?: I.B.Nav.Header.Container["link"];
					onlogin?: EventListener;
					onsignup?: EventListener;
				}) => {
					return new h.div(
						{ container: true },
						new h.header(
							{
								display: "flex",
								flex: "wrap",
								alignItem: "center",
								justifyContent: ["center", "md-between"],
								paddingY: 3,
								marginBottom: 4,
								border: "bottom",
							},
							[
								new h.a(
									{
										href: "#",
										display: "flex",
										alignItem: "center",
										marginBottom: [3, "md-0"],
										marginEnd: "md-auto",
										linkColor: "body-emphasis",
										textDecoration: "none",
										h: 4,
									},
									arg.icon
								),

								new b.nav.header.container({
									col: [12, "md-auto"],
									marginBottom: [2, "md-0"],
									justifyContent: "center",
									link: arg.link,
								}),

								new h.div({ col: "md-3", textAlign: "end" }, [
									new b.button({ outline: true, marginEnd: 2, on: { click: arg.onlogin } }, "Login"),
									new b.button({ outline: false, on: { click: arg.onsignup } }, "Sign-up"),
								]),
							]
						)
					);
				};

				return component({
					icon: new b.icon("fab bootstrap"),
					link: [
						{ paddingX: 2, color: "secondary", href: "#", elem: "Home" },
						{ paddingX: 2, href: "#", elem: "Features" },
						{ paddingX: 2, href: "#", elem: "Pricing" },
						{ paddingX: 2, href: "#", elem: "FAQs" },
						{ paddingX: 2, href: "#", elem: "About" },
					],
					onlogin: (event) => {
						//do login
					},
					onsignup: (event) => {
						//do sign up
					},
				});
			},
		}),

		//-----------------------

		new e.title(""),
		new e.text(""),
		new e.code({
			output: () => {
				return [];
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
