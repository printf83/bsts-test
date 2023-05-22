import { I, b, core, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const headers: IAttrContent = {
	title: "Headers",
	description: "Display your branding, navigation, search, and more with these header components",
	item: [
		new e.title("Example header 1"),
		new e.code({
			previewAttr: { padding: 0 },
			zoom: 75,
			output: () => {
				const component = (arg: { icon: string; title: string; link?: I.B.Nav.Header.Container["link"] }) => {
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
									new b.caption(
										{
											icon: new b.icon({ id: arg.icon, h: 2, marginBottom: 0 }),
											h: 4,
										},
										arg.title
									)
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

		new e.title("Example header 2"),
		new e.code({
			previewAttr: { padding: 0 },
			zoom: 75,
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

		new e.title("Example header 3"),
		new e.code({
			previewAttr: { padding: 0 },
			zoom: 75,
			output: () => {
				const component = (arg: {
					icon: string;
					link?: I.B.Nav.Header.Link[];
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
								new h.div(
									{ col: "md-3", marginBottom: [2, "md-0"] },
									new h.a(
										{
											href: "#",
											display: "inline-flex",
											linkColor: "body-emphasis",
											textDecoration: "none",
											h: 2,
										},
										new b.icon(arg.icon)
									)
								),

								new b.nav.header.container({
									col: [12, "md-auto"],
									marginBottom: [2, "md-0"],
									justifyContent: "center",
									link: arg.link
										? arg.link.map((i) => {
												i.paddingX = 2;
												i.color = i.active ? "secondary" : undefined;
												return i;
										  })
										: undefined,
								}),

								new h.div({ col: "md-3", textAlign: "end" }, [
									new b.button({ outline: true, marginEnd: 2, on: { click: arg.onlogin } }, "Login"),
									new b.button({ on: { click: arg.onsignup } }, "Sign-up"),
								]),
							]
						)
					);
				};

				return component({
					icon: "fab bootstrap",
					link: [
						{ active: true, href: "#", elem: "Home" },
						{ href: "#", elem: "Features" },
						{ href: "#", elem: "Pricing" },
						{ href: "#", elem: "FAQs" },
						{ href: "#", elem: "About" },
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

		new e.title("Example header 4"),
		new e.code({
			previewAttr: { bgColor: "dark", padding: 0 },
			zoom: 75,
			output: () => {
				const component = (arg: {
					icon: string;
					link?: I.B.Nav.Header.Link[];
					onlogin?: EventListener;
					onsignup?: EventListener;
					onsearch?: EventListener;
				}) => {
					return new h.header(
						{
							padding: 3,
							theme: "dark",
						},
						new h.div(
							{ container: true },
							new h.div(
								{
									display: "flex",
									flex: "wrap",
									alignItem: "center",
									justifyContent: ["center", "lg-start"],
								},
								[
									new h.a(
										{
											href: "#",
											display: "flex",
											alignItem: "center",
											marginBottom: [2, "lg-0"],
											textColor: "white",
											textDecoration: "none",
											h: 2,
											marginEnd: 2,
										},
										new b.icon(arg.icon)
									),

									new b.nav.header.container({
										col: [12, "lg-auto"],
										marginBottom: [2, "md-0"],
										marginEnd: "lg-auto",
										justifyContent: "center",
										link: arg.link
											? arg.link.map((i) => {
													i.paddingX = 2;
													i.color = i.active ? "secondary" : "light";
													return i;
											  })
											: undefined,
									}),

									new h.form(
										{
											col: [12, "lg-auto"],
											marginBottom: [3, "lg-0"],
											marginEnd: "lg-3",
											role: "search",
											on: {
												submit: arg.onsearch,
											},
										},
										new b.input({ type: "search" })
									),

									new h.div({ textAlign: "end" }, [
										new b.button(
											{
												outline: true,
												color: "light",
												marginEnd: 2,
												on: { click: arg.onlogin },
											},
											"Login"
										),
										new b.button({ color: "warning", on: { click: arg.onsignup } }, "Sign-up"),
									]),
								]
							)
						)
					);
				};

				return component({
					icon: "fab bootstrap",
					link: [
						{ active: true, href: "#", elem: "Home" },
						{ href: "#", elem: "Features" },
						{ href: "#", elem: "FAQs" },
						{ href: "#", elem: "About" },
					],
					onlogin: (event) => {
						//do login
					},
					onsignup: (event) => {
						//do sign up
					},
					onsearch: (event) => {
						//do search
					},
				});
			},
		}),

		//-----------------------

		new e.title("Example header 5"),
		new e.code({
			previewAttr: { padding: 0 },
			zoom: 75,
			output: () => {
				const component = (arg: {
					img: string;
					icon: string;
					link?: I.B.Nav.Header.Link[];
					menu?: core.IElem;
					onsearch?: EventListener;
				}) => {
					return new h.header(
						{
							padding: 3,
							marginBottom: 3,
							border: "bottom",
						},
						new h.div(
							{ container: true },
							new h.div(
								{
									display: "flex",
									flex: "wrap",
									alignItem: "center",
									justifyContent: ["center", "lg-start"],
								},
								[
									new h.a(
										{
											href: "#",
											display: "flex",
											alignItem: "center",
											marginBottom: [2, "lg-0"],
											linkColor: "body-emphasis",
											textDecoration: "none",
											h: 2,
											marginEnd: 2,
										},
										new b.icon(arg.icon)
									),

									new b.nav.header.container({
										col: [12, "lg-auto"],
										marginBottom: [2, "md-0"],
										marginEnd: "lg-auto",
										justifyContent: "center",
										link: arg.link
											? arg.link.map((i) => {
													i.paddingX = 2;
													i.color = i.active ? "secondary" : undefined;
													return i;
											  })
											: undefined,
									}),

									new h.form(
										{
											col: [12, "lg-auto"],
											marginBottom: [3, "lg-0"],
											marginEnd: "lg-3",
											role: "search",
											on: {
												submit: arg.onsearch,
											},
										},
										new b.input({ type: "search", placeholder: "Search..." })
									),

									new h.div(
										{
											textAlign: "end",
											class: "dropdown",
										},
										[
											new b.dropdown.toggleLink(
												{
													href: "#",
													color: "body-emphasis",
												},
												new h.img({
													src: arg.img,
													rounded: "circle",
													attrWidth: 32,
													attrHeight: 32,
												})
											),

											new b.dropdown.menu(arg.menu ? arg.menu : ""),
										]
									),
								]
							)
						)
					);
				};

				return component({
					img: "https://picsum.photos/seed/bsts_0/32/32",
					icon: "fab bootstrap",
					link: [
						{ active: true, href: "#", elem: "Overview" },
						{ href: "#", elem: "Inventory" },
						{ href: "#", elem: "Customers" },
						{ href: "#", elem: "Products" },
					],
					menu: [
						new b.dropdown.item({ href: "#" }, "New project..."),
						new b.dropdown.item({ href: "#" }, "Setting"),
						new b.dropdown.item({ href: "#" }, "Profile"),
						new b.dropdown.divider(),
						new b.dropdown.item({ href: "#" }, "Sign out"),
					],
					onsearch: (event) => {
						//do search
					},
				});
			},
		}),

		//-----------------------

		new e.title("Example header 6"),
		new e.code({
			previewAttr: { padding: 0 },
			zoom: 75,
			output: () => {
				const componentHeader = (arg: {
					img: string;
					icon: string;
					link?: core.IElem;
					menu?: core.IElem;
					onsearch?: EventListener;
				}) => {
					return new h.header(
						{
							paddingY: 3,
							marginBottom: 3,
							border: "bottom",
						},
						new h.div(
							{
								container: "fluid",
								display: "grid",
								gap: 3,
								alignItem: "center",
								style: { "grid-template-columns": "1fr 2fr" },
							},

							[
								new h.div({ class: "dropdown" }, [
									new b.dropdown.toggleLink(
										{
											href: "#",
											color: "body-emphasis",
											display: "flex",
											alignItem: "center",
											col: "lg-4",
											marginBottom: [2, "lg-0"],
										},
										new b.icon({ id: arg.icon, h: 2, marginBottom: 0 })
									),
									new b.dropdown.menu({ shadow: true }, arg.link ? arg.link : ""),
								]),
								new h.div({ display: "flex", alignItem: "center" }, [
									new h.form(
										{
											width: 100,
											marginEnd: 3,
											role: "search",
											on: {
												submit: arg.onsearch,
											},
										},
										new b.input({ type: "search", placeholder: "Search..." })
									),
									new h.div({ flex: "shrink-0", class: "dropdown" }, [
										new b.dropdown.toggleLink(
											{
												href: "#",
												color: "body-emphasis",
											},
											new h.img({
												src: arg.img,
												rounded: "circle",
												attrWidth: 32,
												attrHeight: 32,
											})
										),

										new b.dropdown.menu({ shadow: true }, arg.menu ? arg.menu : ""),
									]),
								]),
							]
						)
					);
				};

				const componentBody = (arg: { side?: core.IElem; main?: core.IElem }) => {
					return new h.div(
						{ container: "fluid", paddingBottom: 3 },
						new h.div({ display: "grid", gap: 3, style: { "grid-template-columns": "1fr 2fr" } }, [
							new h.div({ bgColor: "body-tertiary", border: true, rounded: 3 }, arg.side ? arg.side : ""),
							new h.div({ bgColor: "body-tertiary", border: true, rounded: 3 }, arg.main ? arg.main : ""),
						])
					);
				};

				const component = (arg: {
					img: string;
					icon: string;
					link?: core.IElem;
					menu?: core.IElem;
					onsearch?: EventListener;
					side?: core.IElem;
					main?: core.IElem;
				}) => {
					return [componentHeader(arg), componentBody(arg)];
				};

				return component({
					img: "https://picsum.photos/seed/bsts_0/32/32",
					icon: "fab bootstrap",
					link: [
						new b.dropdown.item({ href: "#", active: true }, "Overview"),
						new b.dropdown.item({ href: "#" }, "Inventory"),
						new b.dropdown.item({ href: "#" }, "Customers"),
						new b.dropdown.item({ href: "#" }, "Products"),
						new b.dropdown.divider(),
						new b.dropdown.item({ href: "#" }, "Reports"),
						new b.dropdown.item({ href: "#" }, "Analytics"),
					],
					menu: [
						new b.dropdown.item({ href: "#" }, "New project..."),
						new b.dropdown.item({ href: "#" }, "Setting"),
						new b.dropdown.item({ href: "#" }, "Profile"),
						new b.dropdown.divider(),
						new b.dropdown.item({ href: "#" }, "Sign out"),
					],
					onsearch: (event) => {
						//do search
					},
					side: new h.div({ padding: 2, style: { height: "200px" } }, "@side"),
					main: new h.div({ padding: 2, style: { height: "200px" } }, "@main"),
				});
			},
		}),

		//-----------------------

		new e.title("Example header 7"),
		new e.code({
			previewAttr: { padding: 0 },
			zoom: 75,
			output: () => {
				const componentNav = (arg: { startMenu?: I.B.Nav.Header.Link[]; endMenu?: I.B.Nav.Header.Link[] }) => {
					return new h.nav(
						{ paddingY: 2, bgColor: "body-secondary", border: "bottom" },
						new h.div({ container: true, display: "flex", flex: "wrap" }, [
							new b.nav.header.container({
								marginEnd: "auto",
								link: arg.startMenu?.map((i) => {
									i.linkColor = "body-emphasis";
									return i;
								}),
							}),
							new b.nav.header.container({
								link: arg.endMenu?.map((i) => {
									i.linkColor = "body-emphasis";
									return i;
								}),
							}),
						])
					);
				};

				const componentHeader = (arg: { icon: string; title: string; onsearch?: EventListener }) => {
					return new h.header(
						{ paddingY: 3, marginBottom: 4, border: "bottom" },
						new h.div({ container: true, display: "flex", flex: "wrap", justifyContent: "center" }, [
							new h.a(
								{
									href: "#",
									display: "flex",
									alignItem: "center",
									marginBottom: [3, "lg-0"],
									marginEnd: "lg-auto",
									linkColor: "body-emphasis",
									textDecoration: "none",
								},
								new b.caption(
									{
										icon: new b.icon({ id: arg.icon, h: 2, marginBottom: 0 }),
										h: 4,
									},
									arg.title
								)
							),
							new h.form(
								{
									col: [12, "lg-auto"],
									marginBottom: [3, "lg-0"],
									role: "search",
									on: {
										submit: arg.onsearch ? arg.onsearch : undefined,
									},
								},
								new b.input({ type: "search", placeholder: "Search..." })
							),
						])
					);
				};

				return [
					componentNav({
						startMenu: [
							{ href: "#", elem: "Home" },
							{ href: "#", elem: "Features" },
							{ href: "#", elem: "Pricing" },
							{ href: "#", elem: "FAQs" },
							{ href: "#", elem: "About" },
						],
						endMenu: [
							{ href: "#", elem: "Login" },
							{ href: "#", elem: "Sign up" },
						],
					}),
					componentHeader({ icon: "fab bootstrap", title: "Double header", onsearch: (event) => {} }),
				];
			},
		}),

		//-----------------------

		new e.title("Example header 8"),
		new e.code({
			previewAttr: { padding: 0, overflow: "hidden" },
			zoom: 75,
			output: () => {
				const component = (arg: {
					icon: string;
					link: { href: string; icon: string; label: string; active?: boolean }[];
					onlogin?: EventListener;
					onsignup?: EventListener;
					onsearch?: EventListener;
				}) => {
					return new h.header([
						new h.div(
							{ paddingX: 3, paddingY: 2, textBgColor: "dark" },
							new h.div(
								{ container: true },
								new h.div(
									{
										display: "flex",
										flex: "wrap",
										alignItem: "center",
										justifyContent: ["center", "lg-start"],
									},
									[
										new h.a(
											{
												href: "#",
												display: "flex",
												alignItem: "center",
												marginY: [2, "lg-0"],
												marginEnd: "lg-auto",
												linkColor: "light",
												textDecoration: "none",
											},
											new b.icon({ id: arg.icon, h: 2, marginBottom: 0 })
										),
										new b.nav.header.container({
											col: [12, "lg-auto"],
											marginY: [2, "md-0"],
											small: true,
											justifyContent: "center",
											link: arg.link.map((i) => {
												let result: I.B.Nav.Header.Link = {
													linkColor: i.active === true ? "secondary" : "light",
													href: i.href,
													elem: new b.caption(
														{ icon: new b.icon({ id: i.icon, h: 2 }), iconPosition: "top" },
														i.label
													),
												};

												return result;
											}),
										}),
									]
								)
							)
						),
						new h.div(
							{ paddingX: 3, paddingY: 2, border: "bottom", marginBottom: 3 },
							new h.div({ container: true, display: "flex", flex: "wrap", justifyContent: "center" }, [
								new h.form(
									{
										col: [12, "lg-auto"],
										marginBottom: [2, "lg-0"],
										marginEnd: "lg-auto",
										role: "search",
										on: {
											submit: arg.onsearch ? arg.onsearch : undefined,
										},
									},
									new b.input({ type: "search", label: "Search", placeholder: "Search..." })
								),
								new h.div({ textAlign: "end" }, [
									new b.button(
										{
											color: "light",
											marginEnd: 2,
											on: { click: arg.onlogin },
										},
										"Login"
									),
									new b.button({ color: "primary", on: { click: arg.onsignup } }, "Sign-up"),
								]),
							])
						),
					]);
				};

				return component({
					icon: "fab bootstrap",
					link: [
						{
							active: true,
							href: "#",
							icon: "house",
							label: "Home",
						},
						{
							href: "#",
							icon: "speedometer2",
							label: "Dashboard",
						},
						{
							href: "#",
							icon: "table",
							label: "Order",
						},
						{
							href: "#",
							icon: "grid",
							label: "Products",
						},
						{
							href: "#",
							icon: "person-circle",
							label: "Customers",
						},
					],
					onlogin: (event) => {
						//do login
					},
					onsignup: (event) => {
						//do sign up
					},
					onsearch: (event) => {
						//do search
					},
				});
			},
		}),
	],
};
