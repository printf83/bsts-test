import { b, core, h, I } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";

type HeaderLink = I.b.nav.header.link;

const ex = {
	c1: (arg: {
		icon: string;
		title: string;
		link?: HeaderLink[];
		onlinkchange?: EventListener;
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
						new b.caption(
							{
								icon: new b.icon({ id: arg.icon, marginBottom: 0 }),
								fontSize: 4,
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
	c2: (arg: { link?: HeaderLink[]; onlinkchange?: EventListener }) => {
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
		link?: HeaderLink[];
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
								textColor: "body-emphasis",
								textDecoration: "none",
								marginBottom: [3, "md-0"],
							},
							new b.icon({ id: arg.icon, fontSize: 4 })
						)
					),

					new b.nav.header.container({
						col: [12, "md-auto"],
						marginBottom: [2, "md-0"],
						justifyContent: "center",
						link: arg.link
							? arg.link.map((i) => {
									i.textColorActive = "body-tertiary";
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
						new b.button(
							{ outline: true, marginEnd: 2, on: { click: arg.onlogin } },
							"Login"
						),
						new b.button({ on: { click: arg.onsignup } }, "Sign-up"),
					]),
				]
			)
		);
	},
	c4: (arg: {
		icon: string;
		link?: HeaderLink[];
		onlinkchange?: EventListener;
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
								textColor: "body-emphasis",
								textDecoration: "none",
								marginEnd: 2,
							},
							new b.icon({ id: arg.icon, fontSize: 4 })
						),

						new b.nav.header.container({
							col: [12, "lg-auto"],
							marginBottom: [2, "md-0"],
							marginEnd: "lg-auto",
							justifyContent: "center",
							link: arg.link
								? arg.link.map((i) => {
										i.textColorActive = "body-tertiary";
										i.textColor = "body-emphasis";
										i.textColorHover = "primary-emphasis";
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
							new b.button(
								{ color: "warning", on: { click: arg.onsignup } },
								"Sign-up"
							),
						]),
					]
				)
			)
		);
	},
	c5: (arg: {
		img: string;
		icon: string;
		link?: HeaderLink[];
		onlinkchange?: EventListener;
		menu?: core.elem | core.elem[];
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
								textColor: "body-emphasis",
								textDecoration: "none",
								marginEnd: 2,
							},
							new b.icon({ id: arg.icon, fontSize: 4 })
						),

						new b.nav.header.container({
							col: [12, "lg-auto"],
							marginBottom: [2, "md-0"],
							marginEnd: "lg-auto",
							justifyContent: "center",
							link: arg.link
								? arg.link.map((i) => {
										i.textColorActive = "body-tertiary";
										i.textColor = "body-emphasis";
										i.textColorHover = "primary-emphasis";
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
		link?: core.elem | core.elem[];
		menu?: core.elem | core.elem[];
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
					gridTemplateColumns: "1fr 2fr",
					gap: 3,
					alignItem: "center",
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
							new b.icon({ id: arg.icon, fontSize: 2 })
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
	c6Body: (arg: { side?: core.elem | core.elem[]; main?: core.elem | core.elem[] }) => {
		return new h.div(
			{ container: "fluid", paddingBottom: 3 },
			new h.div({ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 3 }, [
				new h.div(
					{ bgColor: "body-tertiary", border: true, rounded: 3 },
					arg.side ? arg.side : ""
				),
				new h.div(
					{ bgColor: "body-tertiary", border: true, rounded: 3 },
					arg.main ? arg.main : ""
				),
			])
		);
	},
	c6: (arg: {
		img: string;
		icon: string;
		link?: core.elem | core.elem[];
		menu?: core.elem | core.elem[];
		onsearch?: EventListener;
		onlinkchange?: EventListener;
		side?: core.elem | core.elem[];
		main?: core.elem | core.elem[];
	}) => {
		return [ex.c6Header(arg), ex.c6Body(arg)];
	},
	c7Nav: (arg: {
		startMenu?: HeaderLink[];
		endMenu?: HeaderLink[];
		onstarmenuchange?: EventListener;
	}) => {
		return new h.nav(
			{ paddingY: 2, bgColor: "body-secondary", border: "bottom" },
			new h.div(
				{
					container: true,
					display: "flex",
					flex: "wrap",
				},
				[
					new b.nav.header.container({
						marginEnd: "auto",
						link: arg.startMenu?.map((i) => {
							i.textColor = "body-emphasis";
							i.textColorActive = "body-tertiary";
							i.textColorHover = "primary-emphasis";
							i.handleActive = true;
							return i;
						}),
						on: { "change.bs.nav": arg.onstarmenuchange },
					}),
					new b.nav.header.container({
						link: arg.endMenu?.map((i) => {
							i.textColor = "body-emphasis";
							i.textColorActive = "body-tertiary";
							i.textColorHover = "primary-emphasis";
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
			new h.div(
				{ container: true, display: "flex", flex: "wrap", justifyContent: "center" },
				[
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
								icon: new b.icon({ id: arg.icon }),
								fontSize: 4,
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
				]
			)
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
									textColor: "body-emphasis",
									textDecoration: "none",
								},
								new b.icon({ id: arg.icon, fontSize: 1 })
							),
							new b.nav.header.container({
								col: [12, "lg-auto"],
								marginY: [2, "md-0"],
								small: true,
								justifyContent: "center",

								link: arg.link.map((i) => {
									let result: HeaderLink = {
										textColor: "body-emphasis",
										textColorActive: "body-tertiary",
										textColorHover: "primary-emphasis",
										active: i.active,
										handleActive: true,
										href: i.href,
										elem: new b.caption(
											{
												icon: new b.icon({ id: i.icon, fontSize: 4 }),
												iconPosition: "top",
											},
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
				new h.div(
					{ container: true, display: "flex", flex: "wrap", justifyContent: "center" },
					[
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
							new b.input({
								type: "search",
								label: "Search",
								placeholder: "Search...",
							})
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
							new b.button(
								{ color: "primary", on: { click: arg.onsignup } },
								"Sign-up"
							),
						]),
					]
				)
			),
		]);
	},
};

export const headers: IContent = {
	title: "Headers",
	description: "Display your branding, navigation, search, and more with these header components",
	item: (db?: e.ISourceDB[]) => {
		resetContentIndex();

		return [
			new e.section([
				new e.title("Example header 1"),
				new e.code({
					db: getContentCode(db),
					showViewport: true,
					showConsole: true,
					previewAttr: { padding: 0 },
					extention: [{ name: "COMPONENT", rename: "ex.c1", output: ex.c1 }],
					output: () => {
						return ex.c1({
							icon: "hexagon-fill",
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
			]),

			//----------------------

			new e.section([
				new e.title("Example header 2"),
				new e.code({
					db: getContentCode(db),
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
			]),

			//----------------------

			new e.section([
				new e.title("Example header 3"),
				new e.code({
					db: getContentCode(db),
					showConsole: true,
					showViewport: true,
					previewAttr: { padding: 0 },
					extention: [{ name: "COMPONENT", rename: "ex.c3", output: ex.c3 }],
					output: () => {
						return ex.c3({
							icon: "hexagon-fill",
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
			]),

			//----------------------

			new e.section([
				new e.title("Example header 4"),
				new e.code({
					db: getContentCode(db),
					showConsole: true,
					showViewport: true,
					previewAttr: { bgColor: "dark", padding: 0 },
					extention: [{ name: "COMPONENT", rename: "ex.c4", output: ex.c4 }],
					output: () => {
						return ex.c4({
							icon: "hexagon-fill",
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
								if (input) {
									e.console(
										target,
										"onsearch",
										{
											input: core.elemInfo(input),
											value: input.value,
										},
										"success"
									);
								}
							},
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Example header 5"),
				new e.code({
					db: getContentCode(db),
					showConsole: true,
					showViewport: true,
					previewAttr: { padding: 0 },
					extention: [{ name: "COMPONENT", rename: "ex.c5", output: ex.c5 }],
					output: () => {
						return ex.c5({
							img: "https://picsum.photos/seed/bsts_0/32/32.webp",
							icon: "hexagon-fill",
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
								if (input) {
									e.console(
										target,
										"onsearch",
										{
											input: core.elemInfo(input),
											value: input.value,
										},
										"success"
									);
								}
							},
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Example header 6"),
				new e.code({
					db: getContentCode(db),
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
							icon: "hexagon-fill",
							link: [
								new b.dropdown.item(
									{ href: "#", active: true, handleActive: true },
									"Overview"
								),
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
								if (input) {
									e.console(
										target,
										"onsearch",
										{
											input: core.elemInfo(input),
											value: input.value,
										},
										"success"
									);
								}
							},
							side: new h.div({ padding: 2, style: { height: "200px" } }, "@side"),
							main: new h.div({ padding: 2, style: { height: "200px" } }, "@main"),
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Example header 7"),
				new e.code({
					db: getContentCode(db),
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
											click: (event: Event) => {
												//do login
												const target = event.target as Element;
												e.console(
													target,
													"login",
													core.elemInfo(target),
													"secondary"
												);
											},
										},
										elem: "Login",
									},
									{
										on: {
											click: (event: Event) => {
												//do signup
												const target = event.target as Element;
												e.console(
													target,
													"signup",
													core.elemInfo(target),
													"secondary"
												);
											},
										},
										elem: "Sign up",
									},
								],
							}),
							ex.c7Header({
								icon: "hexagon-fill",
								title: "Double header",
								onsearch: (event) => {
									//do search
									event.preventDefault();
									const target = event.target as Element;
									const input = target.getElementsByTagName("input")[0];

									if (input) {
										e.console(
											target,
											"onsearch",
											{
												input: core.elemInfo(input),
												value: input.value,
											},
											"success"
										);
									}
								},
							}),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Example header 8"),
				new e.code({
					db: getContentCode(db),
					showConsole: true,
					showViewport: true,
					previewAttr: { padding: 0, overflow: "hidden" },
					extention: [{ name: "COMPONENT", rename: "ex.c8", output: ex.c8 }],
					output: () => {
						return ex.c8({
							icon: "hexagon-fill",
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

								if (input) {
									e.console(
										target,
										"onsearch",
										{
											input: core.elemInfo(input),
											value: input.value,
										},
										"success"
									);
								}
							},
						});
					},
				}),
			]),
		];
	},
};
