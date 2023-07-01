import { I, b, core, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

const ex = {
	c1: (arg: { icon: string; title: string; link?: I.B.Nav.Header.Link[]; onlinkchange?: EventListener }) => {
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
						link: arg.link
							? arg.link.map((i) => {
									i.handleActive = true;
									return i;
							  })
							: undefined,
						on: {
							"change.bs.nav": arg.onlinkchange,
						},
					}),
				]
			)
		);
	},
	c2: (arg: { link?: I.B.Nav.Header.Link[]; onlinkchange?: EventListener }) => {
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
					link: arg.link
						? arg.link.map((i) => {
								i.handleActive = true;
								return i;
						  })
						: undefined,
					on: {
						"change.bs.nav": arg.onlinkchange,
					},
				})
			)
		);
	},
	c3: (arg: {
		icon: string;
		link?: I.B.Nav.Header.Link[];
		onlinkchange?: EventListener;
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
						linkNormal: "body-emphasis",
						linkActive: "secondary",
						link: arg.link
							? arg.link.map((i) => {
									i.paddingX = 2;
									i.handleActive = true;
									return i;
							  })
							: undefined,
						on: {
							"change.bs.nav": arg.onlinkchange,
						},
					}),

					new h.div({ col: "md-3", textAlign: "end" }, [
						new b.button({ outline: true, marginEnd: 2, on: { click: arg.onlogin } }, "Login"),
						new b.button({ on: { click: arg.onsignup } }, "Sign-up"),
					]),
				]
			)
		);
	},
	c4: (arg: {
		icon: string;
		link?: I.B.Nav.Header.Link[];
		onlinkchange?: EventListener;
		onlogin?: EventListener;
		onsignup?: EventListener;
		onsearch?: EventListener;
	}) => {
		return new h.header(
			{
				padding: 3,
				theme: "dark",
				linkNormal: "body-emphasis",
				linkActive: "secondary",
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
										i.handleActive = true;
										i.paddingX = 2;
										return i;
								  })
								: undefined,
							on: {
								"change.bs.nav": arg.onlinkchange,
							},
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
	},
	c5: (arg: {
		img: string;
		icon: string;
		link?: I.B.Nav.Header.Link[];
		onlinkchange?: EventListener;
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
							linkNormal: "body-emphasis",
							linkActive: "secondary",
							link: arg.link
								? arg.link.map((i) => {
										i.handleActive = true;
										i.paddingX = 2;
										return i;
								  })
								: undefined,
							on: {
								"change.bs.nav": arg.onlinkchange,
							},
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
								new b.dropdown.buttonLink(
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
	},
	c6Header: (arg: {
		img: string;
		icon: string;
		link?: core.IElem;
		menu?: core.IElem;
		onsearch?: EventListener;
		onlinkchange?: EventListener;
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
						new b.dropdown.buttonLink(
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
						new b.dropdown.menu(
							{
								shadow: true,
								on: {
									"change.bs.menu": arg.onlinkchange,
								},
							},
							arg.link ? arg.link : ""
						),
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
							new b.dropdown.buttonLink(
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

							new b.dropdown.menu(
								{
									shadow: true,
								},
								arg.menu ? arg.menu : ""
							),
						]),
					]),
				]
			)
		);
	},
	c6Body: (arg: { side?: core.IElem; main?: core.IElem }) => {
		return new h.div(
			{ container: "fluid", paddingBottom: 3 },
			new h.div({ display: "grid", gap: 3, style: { "grid-template-columns": "1fr 2fr" } }, [
				new h.div({ bgColor: "body-tertiary", border: true, rounded: 3 }, arg.side ? arg.side : ""),
				new h.div({ bgColor: "body-tertiary", border: true, rounded: 3 }, arg.main ? arg.main : ""),
			])
		);
	},
	c6: (arg: {
		img: string;
		icon: string;
		link?: core.IElem;
		menu?: core.IElem;
		onsearch?: EventListener;
		onlinkchange?: EventListener;
		side?: core.IElem;
		main?: core.IElem;
	}) => {
		return [ex.c6Header(arg), ex.c6Body(arg)];
	},
	c7Nav: (arg: {
		startMenu?: I.B.Nav.Header.Link[];
		endMenu?: I.B.Nav.Header.Link[];
		onstarmenuchange?: EventListener;
	}) => {
		return new h.nav(
			{ paddingY: 2, bgColor: "body-secondary", border: "bottom" },
			new h.div(
				{
					container: true,
					display: "flex",
					flex: "wrap",
					linkNormal: "body-emphasis",
					linkActive: "secondary",
				},
				[
					new b.nav.header.container({
						marginEnd: "auto",
						link: arg.startMenu?.map((i) => {
							i.handleActive = true;
							return i;
						}),
						on: { "change.bs.nav": arg.onstarmenuchange },
					}),
					new b.nav.header.container({
						link: arg.endMenu?.map((i) => {
							return i;
						}),
					}),
				]
			)
		);
	},
	c7Header: (arg: { icon: string; title: string; onsearch?: EventListener }) => {
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
	},
	c8: (arg: {
		icon: string;
		link: { href: string; icon: string; label: string; active?: boolean }[];
		onlinkchange?: EventListener;
		onlogin?: EventListener;
		onsignup?: EventListener;
		onsearch?: EventListener;
	}) => {
		return new h.header([
			new h.div(
				{ paddingX: 3, paddingY: 2, textBgColor: "dark", theme: "dark" },
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
								linkNormal: "body-emphasis",
								linkActive: "secondary",
								link: arg.link.map((i) => {
									let result: I.B.Nav.Header.Link = {
										active: i.active,
										handleActive: true,
										href: i.href,
										elem: new b.caption(
											{ icon: new b.icon({ id: i.icon, h: 2 }), iconPosition: "top" },
											i.label
										),
									};

									return result;
								}),
								on: {
									"change.bs.nav": arg.onlinkchange,
								},
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
	},
};

export const headers: IAttrContent = {
	title: "Headers",
	description: "Display your branding, navigation, search, and more with these header components",
	item: () => {
		return [
			new e.title("Example header 1"),
			new e.code({
				showViewport: true,
				showConsole: true,
				previewAttr: { padding: 0 },
				extention: [{ name: "COMPONENT", rename: "ex.c1", output: ex.c1 }],
				output: () => {
					return ex.c1({
						icon: "fab bootstrap",
						title: "Simple header",
						link: [
							{ active: true, href: "#", elem: "Home" },
							{ href: "#", elem: "Features" },
							{ href: "#", elem: "Pricing" },
							{ href: "#", elem: "FAQs" },
							{ href: "#", elem: "About" },
						],
						onlinkchange: (event) => {
							const target = event.target as Element;
							const detail = (event as CustomEvent).detail;
							e.console(
								target,
								"onlinkchange",
								{
									target: core.elemInfo(detail.target),
									relatedTarget: core.elemInfo(detail.relatedTarget),
								},
								"info"
							);
						},
					});
				},
			}),

			//-----------------------

			new e.title("Example header 2"),
			new e.code({
				showConsole: true,
				previewAttr: { padding: 0 },
				extention: [{ name: "COMPONENT", rename: "ex.c2", output: ex.c2 }],
				output: () => {
					return ex.c2({
						link: [
							{ active: true, href: "#", elem: "Home" },
							{ href: "#", elem: "Features" },
							{ href: "#", elem: "Pricing" },
							{ href: "#", elem: "FAQs" },
							{ href: "#", elem: "About" },
						],
						onlinkchange: (event) => {
							const target = event.target as Element;
							const detail = (event as CustomEvent).detail;
							e.console(
								target,
								"onlinkchange",
								{
									target: core.elemInfo(detail.target),
									relatedTarget: core.elemInfo(detail.relatedTarget),
								},
								"info"
							);
						},
					});
				},
			}),

			//-----------------------

			new e.title("Example header 3"),
			new e.code({
				showConsole: true,
				showViewport: true,
				previewAttr: { padding: 0 },
				extention: [{ name: "COMPONENT", rename: "ex.c3", output: ex.c3 }],
				output: () => {
					return ex.c3({
						icon: "fab bootstrap",
						link: [
							{ active: true, href: "#", elem: "Home" },
							{ href: "#", elem: "Features" },
							{ href: "#", elem: "Pricing" },
							{ href: "#", elem: "FAQs" },
							{ href: "#", elem: "About" },
						],
						onlinkchange: (event) => {
							const target = event.target as Element;
							const detail = (event as CustomEvent).detail;
							e.console(
								target,
								"onlinkchange",
								{
									target: core.elemInfo(detail.target),
									relatedTarget: core.elemInfo(detail.relatedTarget),
								},
								"info"
							);
						},
						onlogin: (event) => {
							//do login
							const target = event.target as Element;
							e.console(target, "onlogin", core.elemInfo(target), "secondary");
						},
						onsignup: (event) => {
							//do sign up
							const target = event.target as Element;
							e.console(target, "onsignup", core.elemInfo(target), "warning");
						},
					});
				},
			}),

			//-----------------------

			new e.title("Example header 4"),
			new e.code({
				showConsole: true,
				showViewport: true,
				previewAttr: { bgColor: "dark", padding: 0 },
				extention: [{ name: "COMPONENT", rename: "ex.c4", output: ex.c4 }],
				output: () => {
					return ex.c4({
						icon: "fab bootstrap",
						link: [
							{ active: true, href: "#", elem: "Home" },
							{ href: "#", elem: "Features" },
							{ href: "#", elem: "FAQs" },
							{ href: "#", elem: "About" },
						],
						onlinkchange: (event) => {
							const target = event.target as Element;
							const detail = (event as CustomEvent).detail;
							e.console(
								target,
								"onlinkchange",
								{
									target: core.elemInfo(detail.target),
									relatedTarget: core.elemInfo(detail.relatedTarget),
								},
								"info"
							);
						},
						onlogin: (event) => {
							//do login
							const target = event.target as Element;
							e.console(target, "onlogin", core.elemInfo(target), "secondary");
						},
						onsignup: (event) => {
							//do sign up
							const target = event.target as Element;
							e.console(target, "onsignup", core.elemInfo(target), "warning");
						},
						onsearch: (event) => {
							//do search
							event.preventDefault();
							const target = event.target as Element;
							const input = target.getElementsByTagName("input")[0];
							e.console(
								target,
								"onsearch",
								{
									input: core.elemInfo(input),
									value: input.value,
								},
								"success"
							);
						},
					});
				},
			}),

			//-----------------------

			new e.title("Example header 5"),
			new e.code({
				showConsole: true,
				showViewport: true,
				previewAttr: { padding: 0 },
				extention: [{ name: "COMPONENT", rename: "ex.c5", output: ex.c5 }],
				output: () => {
					return ex.c5({
						img: "https://picsum.photos/seed/bsts_0/32/32.webp",
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
						onlinkchange: (event) => {
							const target = event.target as Element;
							const detail = (event as CustomEvent).detail;
							e.console(
								target,
								"onlinkchange",
								{
									target: core.elemInfo(detail.target),
									relatedTarget: core.elemInfo(detail.relatedTarget),
								},
								"info"
							);
						},
						onsearch: (event) => {
							//do search
							event.preventDefault();
							const target = event.target as Element;
							const input = target.getElementsByTagName("input")[0];
							e.console(
								target,
								"onsearch",
								{
									input: core.elemInfo(input),
									value: input.value,
								},
								"success"
							);
						},
					});
				},
			}),

			//-----------------------

			new e.title("Example header 6"),
			new e.code({
				showConsole: true,
				showViewport: true,
				previewAttr: { padding: 0 },
				extention: [
					{ name: "COMPONENT", rename: "ex.c6", output: ex.c6 },
					{ name: "COMPONENTHEADER", rename: "ex.c6Header", output: ex.c6Header },
					{ name: "COMPONENTBODY", rename: "ex.c6Body", output: ex.c6Body },
				],

				output: () => {
					return ex.c6({
						img: "https://picsum.photos/seed/bsts_0/32/32.webp",
						icon: "fab bootstrap",
						link: [
							new b.dropdown.item({ href: "#", active: true, handleActive: true }, "Overview"),
							new b.dropdown.item({ href: "#", handleActive: true }, "Inventory"),
							new b.dropdown.item({ href: "#", handleActive: true }, "Customers"),
							new b.dropdown.item({ href: "#", handleActive: true }, "Products"),
							new b.dropdown.divider(),
							new b.dropdown.item({ href: "#", handleActive: true }, "Reports"),
							new b.dropdown.item({ href: "#", handleActive: true }, "Analytics"),
						],
						menu: [
							new b.dropdown.item({ href: "#" }, "New project..."),
							new b.dropdown.item({ href: "#" }, "Setting"),
							new b.dropdown.item({ href: "#" }, "Profile"),
							new b.dropdown.divider(),
							new b.dropdown.item({ href: "#" }, "Sign out"),
						],
						onlinkchange: (event) => {
							const target = event.target as Element;
							const detail = (event as CustomEvent).detail;
							e.console(
								target,
								"onlinkchange",
								{
									target: core.elemInfo(detail.target),
									relatedTarget: core.elemInfo(detail.relatedTarget),
								},
								"info"
							);
						},
						onsearch: (event) => {
							//do search
							event.preventDefault();
							const target = event.target as Element;
							const input = target.getElementsByTagName("input")[0];
							e.console(
								target,
								"onsearch",
								{
									input: core.elemInfo(input),
									value: input.value,
								},
								"success"
							);
						},
						side: new h.div({ padding: 2, style: { height: "200px" } }, "@side"),
						main: new h.div({ padding: 2, style: { height: "200px" } }, "@main"),
					});
				},
			}),

			//-----------------------

			new e.title("Example header 7"),
			new e.code({
				showConsole: true,
				showViewport: true,
				previewAttr: { padding: 0 },
				extention: [
					{ name: "COMPONENTNAV", rename: "ex.c7Nav", output: ex.c7Nav },
					{ name: "COMPONENTHEADER", rename: "ex.c7Header", output: ex.c7Header },
				],
				output: () => {
					return [
						ex.c7Nav({
							startMenu: [
								{ active: true, href: "#", elem: "Home" },
								{ href: "#", elem: "Features" },
								{ href: "#", elem: "Pricing" },
								{ href: "#", elem: "FAQs" },
								{ href: "#", elem: "About" },
							],
							onstarmenuchange: (event) => {
								const target = event.target as Element;
								const detail = (event as CustomEvent).detail;
								e.console(
									target,
									"onstarmenuchange",
									{
										target: core.elemInfo(detail.target),
										relatedTarget: core.elemInfo(detail.relatedTarget),
									},
									"info"
								);
							},
							endMenu: [
								{
									on: {
										click: (event) => {
											//do login
											const target = event.target as Element;
											e.console(target, "login", core.elemInfo(target), "secondary");
										},
									},
									elem: "Login",
								},
								{
									on: {
										click: (event) => {
											//do signup
											const target = event.target as Element;
											e.console(target, "signup", core.elemInfo(target), "secondary");
										},
									},
									elem: "Sign up",
								},
							],
						}),
						ex.c7Header({
							icon: "fab bootstrap",
							title: "Double header",
							onsearch: (event) => {
								//do search
								event.preventDefault();
								const target = event.target as Element;
								const input = target.getElementsByTagName("input")[0];
								e.console(
									target,
									"onsearch",
									{
										input: core.elemInfo(input),
										value: input.value,
									},
									"success"
								);
							},
						}),
					];
				},
			}),

			//-----------------------

			new e.title("Example header 8"),
			new e.code({
				showConsole: true,
				showViewport: true,
				previewAttr: { padding: 0, overflow: "hidden" },
				extention: [{ name: "COMPONENT", rename: "ex.c8", output: ex.c8 }],
				output: () => {
					return ex.c8({
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
						onlinkchange: (event) => {
							const target = event.target as Element;
							const detail = (event as CustomEvent).detail;
							e.console(
								target,
								"onlinkchange",
								{
									target: core.elemInfo(detail.target),
									relatedTarget: core.elemInfo(detail.relatedTarget),
								},
								"info"
							);
						},
						onlogin: (event) => {
							//do login
							const target = event.target as Element;
							e.console(target, "onlogin", core.elemInfo(target), "secondary");
						},
						onsignup: (event) => {
							//do sign up
							const target = event.target as Element;
							e.console(target, "onsignup", core.elemInfo(target), "warning");
						},
						onsearch: (event) => {
							//do search
							event.preventDefault();
							const target = event.target as Element;
							const input = target.getElementsByTagName("input")[0];
							e.console(
								target,
								"onsearch",
								{
									input: core.elemInfo(input),
									value: input.value,
								},
								"success"
							);
						},
					});
				},
			}),
		];
	},
};
