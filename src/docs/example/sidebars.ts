import { b, core, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

const ex = {
	c1: (arg: {
		icon: string;
		title: string;
		userImage: string;
		userName: string;
		link?: {
			active?: boolean;
			href: string;
			icon: string;
			label: string;
		}[];
		menu?: core.IElem;
	}) => {
		return new h.div(
			{
				display: "flex",
				flex: ["column", "shrink-0"],
				padding: 3,
				shadow: true,
				style: { width: "280px", minHeight: "500px" },
				theme: "dark",
				textBgColor: "dark",
			},
			[
				new h.a(
					{
						href: "#",
						display: "flex",
						alignItem: "center",
						marginBottom: [3, "md-0"],
						marginEnd: "md-auto",
						textDecoration: "none",
						textColor: "white",
					},
					new b.caption({ icon: new b.icon({ id: arg.icon, weight: "lg" }), fontSize: 4 }, arg.title)
				),
				new h.hr(),
				new b.nav.header.container({
					type: "pill",
					flex: "column",
					marginBottom: "auto",
					link: arg.link?.map((i) => {
						return {
							handleActive: true,
							active: i.active,
							textColor: "white",
							href: i.href,
							elem: new b.caption({ icon: i.icon }, i.label),
						};
					}),
				}),
				new h.hr(),
				new b.dropdown.container(
					{
						drop: "up",
					},
					[
						new b.dropdown.toggleLink(
							{
								href: "#",
								textColor: "white",
							},
							[
								new h.img({
									src: arg.userImage,
									rounded: "circle",
									attrWidth: 32,
									attrHeight: 32,
								}),
								new h.b({ marginStart: 2 }, arg.userName),
							]
						),
						new b.dropdown.menu(arg.menu ? arg.menu : ""),
					]
				),
			]
		);
	},
	c2: (arg: {
		icon: string;
		title: string;
		userImage: string;
		userName: string;
		link?: {
			active?: boolean;
			href: string;
			icon: string;
			label: string;
		}[];
		menu?: core.IElem;
	}) => {
		return new h.div(
			{
				display: "flex",
				flex: ["column", "shrink-0"],
				padding: 3,
				shadow: true,
				bgColor: "body-tertiary",
				style: { width: "280px", minHeight: "500px" },
			},
			[
				new h.a(
					{
						href: "#",
						display: "flex",
						alignItem: "center",
						marginBottom: [3, "md-0"],
						marginEnd: "md-auto",
						textDecoration: "none",
						textColor: "body-emphasis",
					},
					new b.caption({ icon: new b.icon({ id: arg.icon, weight: "lg" }), fontSize: 4 }, arg.title)
				),
				new h.hr(),
				new b.nav.header.container({
					type: "pill",
					flex: "column",
					marginBottom: "auto",
					link: arg.link?.map((i) => {
						return {
							handleActive: true,
							active: i.active,
							// textColor: "body-emphasis",
							href: i.href,
							elem: new b.caption({ icon: i.icon }, i.label),
						};
					}),
				}),
				new h.hr(),
				new b.dropdown.container(
					{
						drop: "up",
					},
					[
						new b.dropdown.toggleLink(
							{
								href: "#",
								textColor: "body-emphasis",
							},
							[
								new h.img({
									src: arg.userImage,
									rounded: "circle",
									attrWidth: 32,
									attrHeight: 32,
								}),
								new h.b({ marginStart: 2 }, arg.userName),
							]
						),
						new b.dropdown.menu(arg.menu ? arg.menu : ""),
					]
				),
			]
		);
	},
	c3: (arg: {
		icon: string;
		userImage: string;
		link?: {
			active?: boolean;
			href: string;
			icon: string;
			label: string;
		}[];
		menu?: core.IElem;
	}) => {
		return new h.div(
			{
				display: "flex",
				flex: ["column", "shrink-0"],
				shadow: true,
				bgColor: "body-tertiary",
				style: { width: "4.5rem", minHeight: "500px" },
			},
			[
				new h.a(
					{
						href: "#",
						display: "flex",
						alignItem: "center",
						justifyContent: "center",
						marginBottom: [3, "md-0"],
						marginEnd: "md-auto",
						textDecoration: "none",
						textColor: "body-emphasis",
						padding: 3,
					},
					new b.icon({ id: arg.icon, weight: "2xl" })
				),
				new h.div(
					{ marginBottom: "auto" },
					new b.nav.header.containerNav({
						type: "pill",
						flex: "column",
						border: "top",
						link: arg.link?.map((i) => {
							return {
								handleActive: true,
								rounded: 0,
								active: i.active,
								href: i.href,
								elem: new b.tooltip(
									{
										padding: 3,
										content: i.label,
										placement: "right",
									},
									new b.icon({
										id: i.icon,
										fontSize: 4,
									})
								),
								padding: 0,
								border: "bottom",
								display: "flex",
								justifyContent: "center",
								alignItem: "center",
							};
						}),
					})
				),
				new b.dropdown.container(
					{
						drop: "up",
						padding: 3,
						border: "top",
						rounded: false,
					},
					[
						new b.dropdown.toggleLink(
							{
								href: "#",
								textColor: "body-emphasis",
							},
							[
								new h.img({
									src: arg.userImage,
									rounded: "circle",
									attrWidth: 32,
									attrHeight: 32,
								}),
							]
						),
						new b.dropdown.menu(arg.menu ? arg.menu : ""),
					]
				),
			]
		);
	},
	c4: (arg: {
		icon: string;
		title: string;
		link: {
			label: string;
			item: { href: string; label: string }[];
		}[];
		menu: { href: string; label: string }[];
	}) => {
		return new h.div(
			{
				display: "flex",
				flex: ["column", "shrink-0"],
				padding: 3,
				shadow: true,
				style: { width: "280px", minHeight: "500px" },
			},
			[
				new h.a(
					{
						href: "#",
						display: "flex",
						alignItem: "center",
						marginBottom: [3, "md-0"],
						marginEnd: "md-auto",
						textDecoration: "none",
						textColor: "body-emphasis",
					},
					new b.caption({ icon: new b.icon({ id: arg.icon, weight: "lg" }), fontSize: 4 }, arg.title)
				),
				new h.hr(),
				new h.ul(
					{ unstyle: true, paddingStart: 0 },
					arg.link?.map((i) => {
						let id = core.UUID();
						return new h.li({ marginBottom: 1 }, [
							new b.collapse.toggle(
								{ href: `#${id}`, class: "btn btn-toggle", defColor: false },
								i.label
							),
							new b.collapse.container(
								{ id: id },
								new h.ul(
									{
										unstyle: true,
										fontWeight: "normal",
										class: "btn-toggle-nav",
										paddingBottom: 1,
										small: true,
									},
									i.item.map((j) => {
										return new h.li(
											new h.a(
												{
													href: j.href,
													linkColor: "body-emphasis",
													display: "inline-flex",
													textDecoration: "none",
													rounded: true,
												},
												j.label
											)
										);
									})
								)
							),
						]);
					})
				),
				new h.hr(),
				new h.ul(
					{ unstyle: true, paddingStart: 0 },
					new h.li({ marginBottom: 1 }, [
						new b.collapse.toggle(
							{ href: `#usermenu`, class: "btn btn-toggle", defColor: false },
							"Account"
						),
						new b.collapse.container(
							{ id: "usermenu" },
							new h.ul(
								{
									unstyle: true,
									class: "btn-toggle-nav",
									fontWeight: "normal",
									paddingBottom: 1,
									small: true,
								},
								arg.menu.map((j) => {
									return new h.li(
										new h.a(
											{
												href: j.href,
												linkColor: "body-emphasis",
												display: "inline-flex",
												textDecoration: "none",
												rounded: true,
											},
											j.label
										)
									);
								})
							)
						),
					])
				),
			]
		);
	},
	c5: (arg: {
		icon: string;
		title: string;
		item: {
			title: string;
			description: string;
			date: string;
		}[];
	}) => {
		return new h.div(
			{
				display: "flex",
				flex: ["column", "shrink-0"],
				shadow: true,
				style: { maxWidth: "380px", height: "500px" },
			},
			[
				new h.a(
					{
						href: "#",
						display: "flex",
						alignItem: "center",
						marginBottom: [3, "md-0"],
						marginEnd: "md-auto",
						textDecoration: "none",
						textColor: "body-emphasis",
						bgColor: "body-tertiary",
						width: 100,
						padding: 3,
						border: "bottom",
					},
					new b.caption({ icon: new b.icon({ id: arg.icon, weight: "lg" }), fontSize: 4 }, arg.title)
				),
				new b.tabList.container(
					{ flush: true, overflowY: "auto" },
					arg.item?.map((i, ix) => {
						return new b.tabList.item(
							{
								action: true,
								active: ix === 0 ? true : undefined,
								paddingY: 3,
								lineHeight: "sm",
							},
							[
								new h.div(
									{ display: "flex", width: 100, alignItem: "center", justifyContent: "between" },
									[new h.b(i.title), new h.small(i.date)]
								),
								new h.div({ col: 10, marginBottom: 1, small: true }, i.description),
							]
						);
					})
				),
			]
		);
	},
};
export const sidebars: IAttrContent = {
	title: "Sidebars",
	description: "Common navigation patterns ideal for offcanvas or multi-column layouts.",
	item: [
		new e.title("Dark"),
		new e.code({
			previewAttr: { padding: 0, overflow: "hidden" },
			extention: [{ name: "COMPONENT", rename: "ex.c1", output: ex.c1 }],
			output: () => {
				return ex.c1({
					icon: "fab bootstrap",
					title: "Sidebar",
					userImage: "https://picsum.photos/seed/bsts_0/32/32",
					userName: "@printf83",
					link: [
						{ active: true, href: "#", icon: "house", label: "Home" },
						{ href: "#", icon: "speedometer2", label: "Dashboard" },
						{ href: "#", icon: "table", label: "Orders" },
						{ href: "#", icon: "grid", label: "Products" },
						{ href: "#", icon: "person-circle", label: "Customers" },
					],
					menu: [
						new b.dropdown.item({ href: "#" }, "New project..."),
						new b.dropdown.item({ href: "#" }, "Setting"),
						new b.dropdown.item({ href: "#" }, "Profile"),
						new b.dropdown.divider(),
						new b.dropdown.item({ href: "#" }, "Sign out"),
					],
				});
			},
		}),

		//-----------------------

		new e.title("Light"),
		new e.code({
			outputAttr: { class: "sidebar-custom-1" },
			previewAttr: { padding: 0, overflow: "hidden" },
			extention: [{ name: "COMPONENT", rename: "ex.c2", output: ex.c2 }],
			output: () => {
				return ex.c2({
					icon: "fab bootstrap",
					title: "Sidebar",
					userImage: "https://picsum.photos/seed/bsts_0/32/32",
					userName: "@printf83",
					link: [
						{ active: true, href: "#", icon: "house", label: "Home" },
						{ href: "#", icon: "speedometer2", label: "Dashboard" },
						{ href: "#", icon: "table", label: "Orders" },
						{ href: "#", icon: "grid", label: "Products" },
						{ href: "#", icon: "person-circle", label: "Customers" },
					],
					menu: [
						new b.dropdown.item({ href: "#" }, "New project..."),
						new b.dropdown.item({ href: "#" }, "Setting"),
						new b.dropdown.item({ href: "#" }, "Profile"),
						new b.dropdown.divider(),
						new b.dropdown.item({ href: "#" }, "Sign out"),
					],
				});
			},
		}),

		//-----------------------

		new e.title("Compact"),
		new e.code({
			previewAttr: { padding: 0, overflow: "hidden" },
			extention: [{ name: "COMPONENT", rename: "ex.c3", output: ex.c3 }],
			output: () => {
				return ex.c3({
					icon: "fab bootstrap",
					userImage: "https://picsum.photos/seed/bsts_0/32/32",
					link: [
						{ active: true, href: "#", icon: "house", label: "Home" },
						{ href: "#", icon: "speedometer2", label: "Dashboard" },
						{ href: "#", icon: "table", label: "Orders" },
						{ href: "#", icon: "grid", label: "Products" },
						{ href: "#", icon: "person-circle", label: "Customers" },
					],
					menu: [
						new b.dropdown.item({ href: "#" }, "New project..."),
						new b.dropdown.item({ href: "#" }, "Setting"),
						new b.dropdown.item({ href: "#" }, "Profile"),
						new b.dropdown.divider(),
						new b.dropdown.item({ href: "#" }, "Sign out"),
					],
				});
			},
		}),

		//-----------------------

		new e.title("Collapsible"),
		new e.code({
			previewAttr: { padding: 0, overflow: "hidden" },
			outputAttr: { class: "toggle" },
			extention: [{ name: "COMPONENT", rename: "ex.c4", output: ex.c4 }],
			output: () => {
				return ex.c4({
					icon: "fab bootstrap",
					title: "Collapsible",
					link: [
						{
							label: "Home",
							item: [
								{ href: "#", label: "Overview" },
								{ href: "#", label: "Updates" },
								{ href: "#", label: "Reports" },
							],
						},
						{
							label: "Dashboard",
							item: [
								{ href: "#", label: "Overview" },
								{ href: "#", label: "Weekly" },
								{ href: "#", label: "Monthly" },
								{ href: "#", label: "Annually" },
							],
						},
						{
							label: "Orders",
							item: [
								{ href: "#", label: "New" },
								{ href: "#", label: "Processed" },
								{ href: "#", label: "Shipped" },
								{ href: "#", label: "Returned" },
							],
						},
					],
					menu: [
						{ href: "", label: "New..." },
						{ href: "", label: "Profile" },
						{ href: "", label: "Setting" },
						{ href: "", label: "Sign out" },
					],
				});
			},
		}),

		//-----------------------

		new e.title("List group"),
		new e.code({
			previewAttr: { padding: 0, overflow: "hidden" },
			extention: [{ name: "COMPONENT", rename: "ex.c5", output: ex.c5 }],
			output: () => {
				return ex.c5({
					icon: "fab bootstrap",
					title: "List group",
					item: [
						{
							title: "List group item heading",
							description: "Some placeholder content in a paragraph below the heading and date.",
							date: "Wed",
						},
						{
							title: "List group item heading",
							description: "Some placeholder content in a paragraph below the heading and date.",
							date: "Tues",
						},
						{
							title: "List group item heading",
							description: "Some placeholder content in a paragraph below the heading and date.",
							date: "Mon",
						},
						{
							title: "List group item heading",
							description: "Some placeholder content in a paragraph below the heading and date.",
							date: "Wed",
						},
						{
							title: "List group item heading",
							description: "Some placeholder content in a paragraph below the heading and date.",
							date: "Tues",
						},
						{
							title: "List group item heading",
							description: "Some placeholder content in a paragraph below the heading and date.",
							date: "Mon",
						},
						{
							title: "List group item heading",
							description: "Some placeholder content in a paragraph below the heading and date.",
							date: "Wed",
						},
						{
							title: "List group item heading",
							description: "Some placeholder content in a paragraph below the heading and date.",
							date: "Tues",
						},
						{
							title: "List group item heading",
							description: "Some placeholder content in a paragraph below the heading and date.",
							date: "Mon",
						},
						{
							title: "List group item heading",
							description: "Some placeholder content in a paragraph below the heading and date.",
							date: "Wed",
						},
						{
							title: "List group item heading",
							description: "Some placeholder content in a paragraph below the heading and date.",
							date: "Tues",
						},
						{
							title: "List group item heading",
							description: "Some placeholder content in a paragraph below the heading and date.",
							date: "Mon",
						},
						{
							title: "List group item heading",
							description: "Some placeholder content in a paragraph below the heading and date.",
							date: "Wed",
						},
						{
							title: "List group item heading",
							description: "Some placeholder content in a paragraph below the heading and date.",
							date: "Tues",
						},
						{
							title: "List group item heading",
							description: "Some placeholder content in a paragraph below the heading and date.",
							date: "Mon",
						},
					],
				});
			},
		}),
	],
};
