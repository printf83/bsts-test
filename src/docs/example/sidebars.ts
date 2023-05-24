import { I, b, core, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

const ex = {
	c1: (arg: {
		icon: string;
		title: string;
		userImage: string;
		userName: string;
		link?: I.B.Nav.Header.Link[];
		menu?: core.IElem;
	}) => {
		return new h.div(
			{
				display: "flex",
				flex: ["column", "shrink-0"],
				padding: 3,
				style: { width: "280px", height: "500px" },
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
					new b.caption({ icon: arg.icon, fontSize: 4 }, arg.title)
				),
				new h.hr(),
				new b.nav.header.container({
					type: "pill",
					flex: "column",
					marginBottom: "auto",
					link: arg.link,
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
		link?: I.B.Nav.Header.Link[];
		menu?: core.IElem;
	}) => {
		return new h.div(
			{
				display: "flex",
				flex: ["column", "shrink-0"],
				padding: 3,
				style: { width: "280px", height: "500px" },
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
					new b.caption({ icon: arg.icon, fontSize: 4 }, arg.title)
				),
				new h.hr(),
				new b.nav.header.container({
					type: "pill",
					flex: "column",
					marginBottom: "auto",
					link: arg.link,
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
	c3: (arg: {}) => {},
	c4: (arg: {}) => {},
	c5: (arg: {}) => {},
	c6: (arg: {}) => {},
};
export const sidebars: IAttrContent = {
	title: "Sidebars",
	description: "Common navigation patterns ideal for offcanvas or multi-column layouts.",
	item: [
		new e.title("Example sidebar 1"),
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
						{ active: true, href: "#", elem: new b.caption({ icon: "house" }, "Home") },
						{ href: "#", textColor: "white", elem: new b.caption({ icon: "speedometer2" }, "Dashboard") },
						{ href: "#", textColor: "white", elem: new b.caption({ icon: "table" }, "Orders") },
						{ href: "#", textColor: "white", elem: new b.caption({ icon: "grid" }, "Products") },
						{ href: "#", textColor: "white", elem: new b.caption({ icon: "person-circle" }, "Customers") },
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

		new e.title("Example sidebar 2"),
		new e.code({
			previewAttr: { padding: 0, overflow: "hidden" },
			extention: [{ name: "COMPONENT", rename: "ex.c2", output: ex.c2 }],
			output: () => {
				return ex.c2({
					icon: "fab bootstrap",
					title: "Sidebar",
					userImage: "https://picsum.photos/seed/bsts_0/32/32",
					userName: "@printf83",
					link: [
						{ active: true, href: "#", elem: new b.caption({ icon: "house" }, "Home") },
						{
							href: "#",
							textColor: "body-emphasis",
							elem: new b.caption({ icon: "speedometer2" }, "Dashboard"),
						},
						{ href: "#", textColor: "body-emphasis", elem: new b.caption({ icon: "table" }, "Orders") },
						{ href: "#", textColor: "body-emphasis", elem: new b.caption({ icon: "grid" }, "Products") },
						{
							href: "#",
							textColor: "body-emphasis",
							elem: new b.caption({ icon: "person-circle" }, "Customers"),
						},
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

		new e.title("Example sidebar 3"),
		new e.code({
			previewAttr: { padding: 0, style: { height: "300px" } },
			extention: [{ name: "COMPONENT", rename: "ex.c3", output: ex.c3 }],
			output: () => {
				return ex.c3({});
			},
		}),

		//-----------------------

		new e.title("Example sidebar 4"),
		new e.code({
			previewAttr: { padding: 0, style: { height: "300px" } },
			extention: [{ name: "COMPONENT", rename: "ex.c4", output: ex.c4 }],
			output: () => {
				return ex.c4({});
			},
		}),

		//-----------------------

		new e.title("Example sidebar 5"),
		new e.code({
			previewAttr: { padding: 0, style: { height: "300px" } },
			extention: [{ name: "COMPONENT", rename: "ex.c5", output: ex.c5 }],
			output: () => {
				return ex.c5({});
			},
		}),

		//-----------------------

		new e.title("Example sidebar 6"),
		new e.code({
			previewAttr: { padding: 0, style: { height: "300px" } },
			extention: [{ name: "COMPONENT", rename: "ex.c6", output: ex.c6 }],
			output: () => {
				return ex.c6({});
			},
		}),
	],
};
