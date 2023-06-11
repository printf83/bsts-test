import { b, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

const menuItem = () => {
	return new h.div(
		{
			display: "flex",
			flex: ["column", "lg-row"],
			alignItem: "stretch",
			justifyContent: "start",
			style: { minWidth: "450px" },
		},
		[
			new h.nav(
				{ col: "lg-8" },
				new h.ul(
					{
						unstyle: true,
						display: "flex",
						flex: "column",
						gap: 2,
						linkNormal: "body",
						linkHover: "link",
						linkHoverBg: "body-tertiary",
					},
					[
						{
							href: "#",
							icon: "image-fill",
							title: "Main product",
							description: "Take a tour trough the product",
						},
						{
							href: "#",
							icon: "music-note-beamed",
							title: "Another product",
							description: "Explore this other product we offer",
						},
						{
							href: "#",
							icon: "question-circle",
							title: "Support",
							description: "Get help from our support crew",
						},
					].map((i) => {
						return new h.li([
							new h.a(
								{
									rounded: 2,
									display: "flex",
									alignItem: "start",
									gap: 2,
									paddingY: 2,
									paddingX: 3,
									lineHeight: "sm",
									textAlign: "start",
									textDecoration: "none",
									href: i.href,
								},
								[
									new b.icon({ id: i.icon, style: { fontSize: "1.5em" } }),
									new h.div([new h.b({ display: "block" }, i.title), new h.small(i.description)]),
								]
							),
						]);
					})
				)
			),
			new b.verticalrule({
				display: ["none", "lg-block"],
				opacity: 25,
				marginX: 4,
			}),
			new h.hr({ display: "lg-none" }),
			new h.div(
				{ col: "lg-auto", paddingEnd: 3 },
				new h.ul(
					{
						display: "flex",
						flex: "column",
						gap: 2,
						unstyle: true,
						small: true,
						marginBottom: 2,
					},
					[
						{ href: "#", label: "Documentation" },
						{ href: "#", label: "Use cases" },
						{ href: "#", label: "API status" },
						{ href: "#", label: "Partners" },
						{ href: "#", label: "Resources" },
					].map((i) => {
						return new h.li(
							new h.a(
								{
									href: i.href,
									linkOffset: 2,
									linkUnderline: true,
									linkUnderlineOpacity: 25,
									linkUnderlineOpacityHover: 75,
								},
								i.label
							)
						);
					})
				)
			),
		]
	);
};

export const dropdowns: IAttrContent = {
	title: "Dropdowns",
	description: "Enhance your dropdowns with filters, icons, custom styles, and more.",
	item: [
		new e.title("Custom style"),
		new e.code({
			showCodepen: false,
			outputAttr: {
				display: "flex",
				flex: "wrap",
				gap: 4,
			},
			output: () => {
				return [
					new b.dropdown.menu(
						{ customStyle: 1, theme: "light", debug: true, shadow: true, style: { width: "220px" } },
						[
							new b.dropdown.item({ href: "#", active: true }, "Action"),
							new b.dropdown.item({ href: "#" }, "Another action"),
							new b.dropdown.item({ href: "#" }, "Something else here"),
							new b.dropdown.divider(),
							new b.dropdown.item({ href: "#" }, "Separated link"),
						]
					),
					new b.dropdown.menu(
						{ customStyle: 1, theme: "dark", debug: true, shadow: true, style: { width: "220px" } },
						[
							new b.dropdown.item({ href: "#", active: true }, "Action"),
							new b.dropdown.item({ href: "#" }, "Another action"),
							new b.dropdown.item({ href: "#" }, "Something else here"),
							new b.dropdown.divider(),
							new b.dropdown.item({ href: "#" }, "Separated link"),
						]
					),
				];
			},
		}),

		new e.text("Live preview"),

		new e.code({
			outputAttr: {
				display: "flex",
				flex: "wrap",
				gap: 2,
			},
			output: () => {
				return [
					new b.dropdown.container([
						new b.dropdown.toggle("Light dropdown"),
						new b.dropdown.menu({ customStyle: 1, theme: "light" }, [
							new b.dropdown.item({ href: "#", active: true }, "Action"),
							new b.dropdown.item({ href: "#" }, "Another action"),
							new b.dropdown.item({ href: "#" }, "Something else here"),
							new b.dropdown.divider(),
							new b.dropdown.item({ href: "#" }, "Separated link"),
						]),
					]),
					new b.dropdown.container([
						new b.dropdown.toggle("Dark dropdown"),
						new b.dropdown.menu({ customStyle: 1, theme: "dark" }, [
							new b.dropdown.item({ href: "#", active: true }, "Action"),
							new b.dropdown.item({ href: "#" }, "Another action"),
							new b.dropdown.item({ href: "#" }, "Something else here"),
							new b.dropdown.divider(),
							new b.dropdown.item({ href: "#" }, "Separated link"),
						]),
					]),
				];
			},
		}),

		//-----------------------

		new e.title("Filter"),
		new e.code({
			showCodepen: false,
			outputAttr: {
				display: "flex",
				flex: "wrap",
				gap: 4,
			},
			output: () => {
				return [
					new b.dropdown.menu(
						{ theme: "light", paddingTop: 0, debug: true, shadow: true, style: { width: "280px" } },
						[
							new h.form(
								{
									padding: 2,
									marginBottom: 2,
									bgColor: "body-tertiary",
									border: "bottom",
									rounded: "top",
								},
								new b.input({ type: "search", autocomplete: "off", placeholder: "Type to filter..." })
							),
							new b.dropdown.item(
								{ href: "#" },
								new b.caption({ icon: new b.icon({ id: "record-fill", color: "success" }) }, "Action")
							),
							new b.dropdown.item(
								{ href: "#" },
								new b.caption(
									{ icon: new b.icon({ id: "record-fill", color: "primary" }) },
									"Another action"
								)
							),
							new b.dropdown.item(
								{ href: "#" },
								new b.caption(
									{ icon: new b.icon({ id: "record-fill", color: "danger" }) },
									"Something else here"
								)
							),
							new b.dropdown.item(
								{ href: "#" },
								new b.caption(
									{ icon: new b.icon({ id: "record-fill", color: "info" }) },
									"Separated link"
								)
							),
						]
					),
					new b.dropdown.menu(
						{ theme: "dark", paddingTop: 0, debug: true, shadow: true, style: { width: "280px" } },
						[
							new h.form(
								{
									padding: 2,
									marginBottom: 2,
									bgColor: "body-tertiary",
									border: "bottom",
									rounded: "top",
								},
								new b.input({ type: "search", autocomplete: "off", placeholder: "Type to filter..." })
							),
							new b.dropdown.item(
								{ href: "#" },
								new b.caption({ icon: new b.icon({ id: "record-fill", color: "success" }) }, "Action")
							),
							new b.dropdown.item(
								{ href: "#" },
								new b.caption(
									{ icon: new b.icon({ id: "record-fill", color: "primary" }) },
									"Another action"
								)
							),
							new b.dropdown.item(
								{ href: "#" },
								new b.caption(
									{ icon: new b.icon({ id: "record-fill", color: "danger" }) },
									"Something else here"
								)
							),
							new b.dropdown.item(
								{ href: "#" },
								new b.caption(
									{ icon: new b.icon({ id: "record-fill", color: "info" }) },
									"Separated link"
								)
							),
						]
					),
				];
			},
		}),
		new e.text("Live preview"),
		new e.code({
			outputAttr: {
				display: "flex",
				flex: "wrap",
				gap: 2,
			},
			output: () => {
				return [
					new b.dropdown.container([
						new b.dropdown.toggle("Light dropdown"),
						new b.dropdown.menu({ theme: "light", paddingTop: 0 }, [
							new h.form(
								{
									padding: 2,
									marginBottom: 2,
									bgColor: "body-tertiary",
									border: "bottom",
									rounded: "top",
								},
								new b.input({
									type: "search",
									autocomplete: "off",
									placeholder: "Type to filter...",
								})
							),
							new b.dropdown.item(
								{ href: "#" },
								new b.caption({ icon: new b.icon({ id: "record-fill", color: "success" }) }, "Action")
							),
							new b.dropdown.item(
								{ href: "#" },
								new b.caption(
									{ icon: new b.icon({ id: "record-fill", color: "primary" }) },
									"Another action"
								)
							),
							new b.dropdown.item(
								{ href: "#" },
								new b.caption(
									{ icon: new b.icon({ id: "record-fill", color: "danger" }) },
									"Something else here"
								)
							),
							new b.dropdown.item(
								{ href: "#" },
								new b.caption(
									{ icon: new b.icon({ id: "record-fill", color: "info" }) },
									"Separated link"
								)
							),
						]),
					]),
					new b.dropdown.container([
						new b.dropdown.toggle("Dark dropdown"),
						new b.dropdown.menu({ theme: "dark", paddingTop: 0 }, [
							new h.form(
								{
									padding: 2,
									marginBottom: 2,
									bgColor: "body-tertiary",
									border: "bottom",
									rounded: "top",
								},
								new b.input({
									type: "search",
									autocomplete: "off",
									placeholder: "Type to filter...",
								})
							),
							new b.dropdown.item(
								{ href: "#" },
								new b.caption({ icon: new b.icon({ id: "record-fill", color: "success" }) }, "Action")
							),
							new b.dropdown.item(
								{ href: "#" },
								new b.caption(
									{ icon: new b.icon({ id: "record-fill", color: "primary" }) },
									"Another action"
								)
							),
							new b.dropdown.item(
								{ href: "#" },
								new b.caption(
									{ icon: new b.icon({ id: "record-fill", color: "danger" }) },
									"Something else here"
								)
							),
							new b.dropdown.item(
								{ href: "#" },
								new b.caption(
									{ icon: new b.icon({ id: "record-fill", color: "info" }) },
									"Separated link"
								)
							),
						]),
					]),
				];
			},
		}),

		//-----------------------

		new e.title("Menu"),
		new e.code({
			showCodepen: false,
			outputAttr: {
				display: "flex",
				flex: "wrap",
				gap: 4,
			},
			output: () => {
				return [
					new b.dropdown.menu({ theme: "light", debug: true, shadow: true, style: { width: "220px" } }, [
						new b.dropdown.item({ href: "#" }, new b.caption({ icon: "files" }, "Documents")),
						new b.dropdown.item({ href: "#" }, new b.caption({ icon: "image-fill" }, "Photos")),
						new b.dropdown.item({ href: "#" }, new b.caption({ icon: "film" }, "Movie")),
						new b.dropdown.item({ href: "#" }, new b.caption({ icon: "music-note-beamed" }, "Music")),
						new b.dropdown.item({ href: "#" }, new b.caption({ icon: "joystick" }, "Games")),
						new b.dropdown.divider(),
						new b.dropdown.item({ href: "#", color: "danger" }, new b.caption({ icon: "trash" }, "Trash")),
					]),
					new b.dropdown.menu({ theme: "dark", debug: true, shadow: true, style: { width: "220px" } }, [
						new b.dropdown.item({ href: "#" }, new b.caption({ icon: "files" }, "Documents")),
						new b.dropdown.item({ href: "#" }, new b.caption({ icon: "image-fill" }, "Photos")),
						new b.dropdown.item({ href: "#" }, new b.caption({ icon: "film" }, "Movie")),
						new b.dropdown.item({ href: "#" }, new b.caption({ icon: "music-note-beamed" }, "Music")),
						new b.dropdown.item({ href: "#" }, new b.caption({ icon: "joystick" }, "Games")),
						new b.dropdown.divider(),
						new b.dropdown.item({ href: "#" }, new b.caption({ icon: "trash" }, "Trash")),
					]),
				];
			},
		}),
		new e.text("Live preview"),
		new e.code({
			outputAttr: {
				display: "flex",
				flex: "wrap",
				gap: 2,
			},
			output: () => {
				return [
					new b.dropdown.container([
						new b.dropdown.toggle("Light dropdown"),
						new b.dropdown.menu({ theme: "light" }, [
							new b.dropdown.item({ href: "#" }, new b.caption({ icon: "files" }, "Documents")),
							new b.dropdown.item({ href: "#" }, new b.caption({ icon: "image-fill" }, "Photos")),
							new b.dropdown.item({ href: "#" }, new b.caption({ icon: "film" }, "Movie")),
							new b.dropdown.item({ href: "#" }, new b.caption({ icon: "music-note-beamed" }, "Music")),
							new b.dropdown.item({ href: "#" }, new b.caption({ icon: "joystick" }, "Games")),
							new b.dropdown.divider(),
							new b.dropdown.item(
								{ href: "#", color: "danger" },
								new b.caption({ icon: "trash" }, "Trash")
							),
						]),
					]),
					new b.dropdown.container([
						new b.dropdown.toggle("Dark dropdown"),
						new b.dropdown.menu({ theme: "dark" }, [
							new b.dropdown.item({ href: "#" }, new b.caption({ icon: "files" }, "Documents")),
							new b.dropdown.item({ href: "#" }, new b.caption({ icon: "image-fill" }, "Photos")),
							new b.dropdown.item({ href: "#" }, new b.caption({ icon: "film" }, "Movie")),
							new b.dropdown.item({ href: "#" }, new b.caption({ icon: "music-note-beamed" }, "Music")),
							new b.dropdown.item({ href: "#" }, new b.caption({ icon: "joystick" }, "Games")),
							new b.dropdown.divider(),
							new b.dropdown.item({ href: "#" }, new b.caption({ icon: "trash" }, "Trash")),
						]),
					]),
				];
			},
		}),

		//-----------------------

		new e.title("Calendar"),
		new e.code({
			showCodepen: false,
			outputAttr: {
				display: "flex",
				flex: "wrap",
				gap: 4,
			},
			output: () => {
				return [
					new b.dropdown.menu(
						{ theme: "light", debug: true, shadow: true, style: { width: "320px" } },
						new b.calendar({ paddingX: 2, view: new Date(), startDate: new Date() })
					),
					new b.dropdown.menu(
						{ theme: "dark", debug: true, shadow: true, style: { width: "320px" } },
						new b.calendar({ paddingX: 2, view: new Date(), startDate: new Date() })
					),
				];
			},
		}),

		//-----------------------

		new e.subtitle("Multiple"),
		new e.code({
			showCodepen: false,
			outputAttr: {
				display: "flex",
				flex: "wrap",
				gap: 4,
			},
			output: () => {
				return [
					new b.dropdown.menu(
						{ theme: "light", debug: true, shadow: true, style: { width: "320px" } },
						new b.calendar({
							paddingX: 2,
							multiple: true,
							view: new Date(),
							startDate: new Date(
								new Date().getFullYear(),
								new Date().getMonth(),
								new Date().getDate() - 7
							),
							endDate: new Date(
								new Date().getFullYear(),
								new Date().getMonth(),
								new Date().getDate() + 7
							),
						})
					),
					new b.dropdown.menu(
						{ theme: "dark", debug: true, shadow: true, style: { width: "320px" } },
						new b.calendar({
							paddingX: 2,
							multiple: true,
							view: new Date(),
							startDate: new Date(
								new Date().getFullYear(),
								new Date().getMonth(),
								new Date().getDate() - 7
							),
							endDate: new Date(
								new Date().getFullYear(),
								new Date().getMonth(),
								new Date().getDate() + 7
							),
						})
					),
				];
			},
		}),

		new e.xsubtitle("Live preview"),
		new e.code({
			outputAttr: {
				display: "flex",
				flex: "wrap",
				gap: 2,
			},
			output: () => {
				return [
					new b.dropdown.container([
						new b.dropdown.toggle({ autoClose: "outside" }, "Light dropdown"),
						new b.dropdown.menu(
							{
								theme: "light",
								style: { minWidth: "320px" },
							},
							new b.calendar({ paddingX: 2, view: new Date(), startDate: new Date() })
						),
					]),
					new b.dropdown.container([
						new b.dropdown.toggle({ autoClose: "outside" }, "Dark dropdown"),
						new b.dropdown.menu(
							{ theme: "dark", style: { minWidth: "320px" } },
							new b.calendar({ paddingX: 2, view: new Date(), startDate: new Date() })
						),
					]),
				];
			},
		}),

		new e.text("Multiple"),
		new e.code({
			outputAttr: {
				display: "flex",
				flex: "wrap",
				gap: 2,
			},
			output: () => {
				return [
					new b.dropdown.container([
						new b.dropdown.toggle({ autoClose: "outside" }, "Light dropdown"),
						new b.dropdown.menu(
							{
								theme: "light",
								style: { minWidth: "320px" },
							},
							new b.calendar({
								paddingX: 2,
								multiple: true,
								view: new Date(),
								startDate: new Date(
									new Date().getFullYear(),
									new Date().getMonth(),
									new Date().getDate() - 7
								),
								endDate: new Date(
									new Date().getFullYear(),
									new Date().getMonth(),
									new Date().getDate() + 7
								),
							})
						),
					]),
					new b.dropdown.container([
						new b.dropdown.toggle({ autoClose: "outside" }, "Dark dropdown"),
						new b.dropdown.menu(
							{
								theme: "dark",
								style: { minWidth: "320px" },
							},
							new b.calendar({
								paddingX: 2,
								multiple: true,
								view: new Date(),
								startDate: new Date(
									new Date().getFullYear(),
									new Date().getMonth(),
									new Date().getDate() - 7
								),
								endDate: new Date(
									new Date().getFullYear(),
									new Date().getMonth(),
									new Date().getDate() + 7
								),
							})
						),
					]),
				];
			},
		}),

		//-----------------------

		new e.subtitle("List"),
		new e.code({
			showCodepen: false,
			outputAttr: {
				display: "flex",
				flex: "wrap",
				gap: 4,
			},
			extention: [{ name: "MENUCOMPONENT", rename: "menuItem", output: menuItem }],
			output: () => {
				return [
					new b.dropdown.menu(
						{
							theme: "light",
							padding: 3,
							rounded: 3,
							debug: true,
							shadow: true,
						},
						menuItem()
					),
					new b.dropdown.menu(
						{
							theme: "dark",
							padding: 3,
							rounded: 3,
							debug: true,
							shadow: true,
						},
						menuItem()
					),
				];
			},
		}),

		new e.text("Live preview"),
		new e.code({
			outputAttr: {
				display: "flex",
				flex: "wrap",
				gap: 2,
			},
			extention: [{ name: "MENUCOMPONENT", rename: "menuItem", output: menuItem }],
			output: () => {
				return [
					new b.dropdown.container([
						new b.dropdown.toggle("Light dropdown"),
						new b.dropdown.menu(
							{
								theme: "light",
								padding: 3,
								rounded: 3,
							},
							menuItem()
						),
					]),
					new b.dropdown.container([
						new b.dropdown.toggle("Dark dropdown"),
						new b.dropdown.menu(
							{
								theme: "dark",
								padding: 3,
								rounded: 3,
							},
							menuItem()
						),
					]),
				];
			},
		}),
	],
};
