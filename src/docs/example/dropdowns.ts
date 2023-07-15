import { b, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";

const menuItem = () => {
	return new h.div(
		{
			display: "flex",
			flex: ["column", "lg-row"],
			alignItem: "stretch",
			justifyContent: "start",
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
									textColor: "body",
									textColorHover: "primary",
									bgColorHover: "body-tertiary",
								},
								[new b.icon({ id: i.icon, style: { fontSize: "1.5em" } }), new h.div([new h.b({ display: "block" }, i.title), new h.small(i.description)])]
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

export const dropdowns: IContent = {
	title: "Dropdowns",
	description: "Enhance your dropdowns with filters, icons, custom styles, and more.",
	item: (db?: e.IBsExampleData[]) => {
		resetContentIndex();

		return [
			new e.section([
				new e.title("Style : 1"),
				new e.code({
					db: getContentCode(db),
					showCodepen: false,
					outputAttr: {
						display: "flex",
						flex: "wrap",
						gap: 4,
					},
					output: () => {
						return [
							new b.dropdown.menu(
								{
									customStyle: 1,
									theme: "light",
									debug: true,
									shadow: true,
									style: { width: "220px" },
								},
								[new b.dropdown.item({ href: "#", active: true }, "Action"), new b.dropdown.item({ href: "#" }, "Another action"), new b.dropdown.item({ href: "#" }, "Something else here"), new b.dropdown.divider(), new b.dropdown.item({ href: "#" }, "Separated link")]
							),
							new b.dropdown.menu({ customStyle: 1, theme: "dark", debug: true, shadow: true, style: { width: "220px" } }, [
								new b.dropdown.item({ href: "#", active: true }, "Action"),
								new b.dropdown.item({ href: "#" }, "Another action"),
								new b.dropdown.item({ href: "#" }, "Something else here"),
								new b.dropdown.divider(),
								new b.dropdown.item({ href: "#" }, "Separated link"),
							]),
						];
					},
				}),

				new e.text("Live preview"),

				new e.code({
					db: getContentCode(db),
					outputAttr: {
						display: "flex",
						flex: "wrap",
						gap: 2,
					},
					output: () => {
						return [
							new b.dropdown.container([
								new b.dropdown.button("Light dropdown"),
								new b.dropdown.menu({ customStyle: 1, theme: "light" }, [
									new b.dropdown.item({ href: "#", active: true }, "Action"),
									new b.dropdown.item({ href: "#" }, "Another action"),
									new b.dropdown.item({ href: "#" }, "Something else here"),
									new b.dropdown.divider(),
									new b.dropdown.item({ href: "#" }, "Separated link"),
								]),
							]),
							new b.dropdown.container([
								new b.dropdown.button("Dark dropdown"),
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
			]),

			//----------------------

			new e.section([
				new e.title("Filter"),
				new e.code({
					db: getContentCode(db),
					showCodepen: false,
					outputAttr: {
						display: "flex",
						flex: "wrap",
						gap: 4,
					},
					output: () => {
						return [
							new b.dropdown.menu({ theme: "light", paddingTop: 0, debug: true, shadow: true, style: { width: "280px" } }, [
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
								new b.dropdown.item({ href: "#" }, new b.caption({ icon: new b.icon({ id: "record-fill", textColor: "success" }) }, "Action")),
								new b.dropdown.item({ href: "#" }, new b.caption({ icon: new b.icon({ id: "record-fill", textColor: "primary" }) }, "Another action")),
								new b.dropdown.item({ href: "#" }, new b.caption({ icon: new b.icon({ id: "record-fill", textColor: "danger" }) }, "Something else here")),
								new b.dropdown.item({ href: "#" }, new b.caption({ icon: new b.icon({ id: "record-fill", textColor: "info" }) }, "Separated link")),
							]),
							new b.dropdown.menu({ theme: "dark", paddingTop: 0, debug: true, shadow: true, style: { width: "280px" } }, [
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
								new b.dropdown.item({ href: "#" }, new b.caption({ icon: new b.icon({ id: "record-fill", textColor: "success" }) }, "Action")),
								new b.dropdown.item({ href: "#" }, new b.caption({ icon: new b.icon({ id: "record-fill", textColor: "primary" }) }, "Another action")),
								new b.dropdown.item({ href: "#" }, new b.caption({ icon: new b.icon({ id: "record-fill", textColor: "danger" }) }, "Something else here")),
								new b.dropdown.item({ href: "#" }, new b.caption({ icon: new b.icon({ id: "record-fill", textColor: "info" }) }, "Separated link")),
							]),
						];
					},
				}),
				new e.text("Live preview"),
				new e.code({
					db: getContentCode(db),
					outputAttr: {
						display: "flex",
						flex: "wrap",
						gap: 2,
					},
					output: () => {
						return [
							new b.dropdown.container([
								new b.dropdown.button("Light dropdown"),
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
									new b.dropdown.item({ href: "#" }, new b.caption({ icon: new b.icon({ id: "record-fill", textColor: "success" }) }, "Action")),
									new b.dropdown.item({ href: "#" }, new b.caption({ icon: new b.icon({ id: "record-fill", textColor: "primary" }) }, "Another action")),
									new b.dropdown.item({ href: "#" }, new b.caption({ icon: new b.icon({ id: "record-fill", textColor: "danger" }) }, "Something else here")),
									new b.dropdown.item({ href: "#" }, new b.caption({ icon: new b.icon({ id: "record-fill", textColor: "info" }) }, "Separated link")),
								]),
							]),
							new b.dropdown.container([
								new b.dropdown.button("Dark dropdown"),
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
									new b.dropdown.item({ href: "#" }, new b.caption({ icon: new b.icon({ id: "record-fill", textColor: "success" }) }, "Action")),
									new b.dropdown.item({ href: "#" }, new b.caption({ icon: new b.icon({ id: "record-fill", textColor: "primary" }) }, "Another action")),
									new b.dropdown.item({ href: "#" }, new b.caption({ icon: new b.icon({ id: "record-fill", textColor: "danger" }) }, "Something else here")),
									new b.dropdown.item({ href: "#" }, new b.caption({ icon: new b.icon({ id: "record-fill", textColor: "info" }) }, "Separated link")),
								]),
							]),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Menu"),
				new e.code({
					db: getContentCode(db),
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
								new b.dropdown.item(
									{
										href: "#",
										color: "danger",
										bgColorActive: "danger",
										bgColorFocus: "danger",
										textColorActive: "light",
										textColorFocus: "light",
									},
									new b.caption({ icon: "trash" }, "Trash")
								),
							]),
							new b.dropdown.menu({ theme: "dark", debug: true, shadow: true, style: { width: "220px" } }, [
								new b.dropdown.item({ href: "#" }, new b.caption({ icon: "files" }, "Documents")),
								new b.dropdown.item({ href: "#" }, new b.caption({ icon: "image-fill" }, "Photos")),
								new b.dropdown.item({ href: "#" }, new b.caption({ icon: "film" }, "Movie")),
								new b.dropdown.item({ href: "#" }, new b.caption({ icon: "music-note-beamed" }, "Music")),
								new b.dropdown.item({ href: "#" }, new b.caption({ icon: "joystick" }, "Games")),
								new b.dropdown.divider(),
								new b.dropdown.item(
									{
										href: "#",
										color: "danger",
										bgColorActive: "danger",
										bgColorFocus: "danger",
										textColorActive: "light",
										textColorFocus: "light",
									},
									new b.caption({ icon: "trash" }, "Trash")
								),
							]),
						];
					},
				}),
				new e.text("Live preview"),
				new e.code({
					db: getContentCode(db),
					outputAttr: {
						display: "flex",
						flex: "wrap",
						gap: 2,
					},
					output: () => {
						return [
							new b.dropdown.container([
								new b.dropdown.button("Light dropdown"),
								new b.dropdown.menu({ theme: "light" }, [
									new b.dropdown.item({ href: "#" }, new b.caption({ icon: "files" }, "Documents")),
									new b.dropdown.item({ href: "#" }, new b.caption({ icon: "image-fill" }, "Photos")),
									new b.dropdown.item({ href: "#" }, new b.caption({ icon: "film" }, "Movie")),
									new b.dropdown.item({ href: "#" }, new b.caption({ icon: "music-note-beamed" }, "Music")),
									new b.dropdown.item({ href: "#" }, new b.caption({ icon: "joystick" }, "Games")),
									new b.dropdown.divider(),
									new b.dropdown.item({ href: "#", color: "danger" }, new b.caption({ icon: "trash" }, "Trash")),
								]),
							]),
							new b.dropdown.container([
								new b.dropdown.button("Dark dropdown"),
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
			]),

			//----------------------

			new e.section([
				new e.title("Calendar"),
				new e.code({
					db: getContentCode(db),
					showConsole: true,
					showCodepen: false,
					outputAttr: {
						display: "flex",
						flex: "wrap",
						gap: 4,
					},
					output: () => {
						return [
							new b.dropdown.menu(
								{ theme: "light", debug: true, shadow: true, style: { minWidth: "320px" } },
								new b.calendar({
									paddingX: 2,
									view: new Date(),
									startDate: new Date(),
									on: {
										"change.bs.calendar": (event) => {
											const target = event.target as Element;
											const detail = (event as CustomEvent).detail;
											e.console(target, "change.bs.calendar", detail, "success");
										},
									},
								})
							),
							new b.dropdown.menu(
								{ theme: "dark", debug: true, shadow: true, style: { minWidth: "320px" } },
								new b.calendar({
									paddingX: 2,
									view: new Date(),
									startDate: new Date(),
									on: {
										"change.bs.calendar": (event) => {
											const target = event.target as Element;
											const detail = (event as CustomEvent).detail;
											e.console(target, "change.bs.calendar", detail, "success");
										},
									},
								})
							),
						];
					},
				}),

				new e.text("Live preview"),
				new e.code({
					db: getContentCode(db),
					showConsole: true,
					outputAttr: {
						display: "flex",
						flex: "wrap",
						gap: 2,
					},
					output: () => {
						return [
							new b.dropdown.container([
								new b.dropdown.button({ autoClose: "outside" }, "Light dropdown"),
								new b.dropdown.menu(
									{
										theme: "light",
										style: { minWidth: "320px" },
									},
									new b.calendar({
										paddingX: 2,
										view: new Date(),
										startDate: new Date(),
										on: {
											"change.bs.calendar": (event) => {
												const target = event.target as Element;
												const detail = (event as CustomEvent).detail;
												e.console(target, "change.bs.calendar", detail, "success");
											},
										},
									})
								),
							]),
							new b.dropdown.container([
								new b.dropdown.button({ autoClose: "outside" }, "Dark dropdown"),
								new b.dropdown.menu(
									{ theme: "dark", style: { minWidth: "320px" } },
									new b.calendar({
										paddingX: 2,
										view: new Date(),
										startDate: new Date(),
										on: {
											"change.bs.calendar": (event) => {
												const target = event.target as Element;
												const detail = (event as CustomEvent).detail;
												e.console(target, "change.bs.calendar", detail, "success");
											},
										},
									})
								),
							]),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("Multiple"),
				new e.code({
					db: getContentCode(db),
					showConsole: true,
					showCodepen: false,
					outputAttr: {
						display: "flex",
						flex: "wrap",
						gap: 4,
					},
					output: () => {
						return [
							new b.dropdown.menu(
								{ theme: "light", debug: true, shadow: true, style: { minWidth: "320px" } },
								new b.calendar({
									paddingX: 2,
									multiple: true,
									view: new Date(),
									startDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 3),
									endDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 3),
									on: {
										"change.bs.calendar": (event) => {
											const target = event.target as Element;
											const detail = (event as CustomEvent).detail;
											e.console(target, "change.bs.calendar", detail, "success");
										},
									},
								})
							),
							new b.dropdown.menu(
								{ theme: "dark", debug: true, shadow: true, style: { minWidth: "320px" } },
								new b.calendar({
									paddingX: 2,
									multiple: true,
									view: new Date(),
									startDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 3),
									endDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 3),
									on: {
										"change.bs.calendar": (event) => {
											const target = event.target as Element;
											const detail = (event as CustomEvent).detail;
											e.console(target, "change.bs.calendar", detail, "success");
										},
									},
								})
							),
						];
					},
				}),

				new e.text("Live preview"),
				new e.code({
					db: getContentCode(db),
					showConsole: true,
					outputAttr: {
						display: "flex",
						flex: "wrap",
						gap: 2,
					},
					output: () => {
						return [
							new b.dropdown.container([
								new b.dropdown.button({ autoClose: "outside" }, "Light dropdown"),
								new b.dropdown.menu(
									{
										theme: "light",
										style: { minWidth: "320px" },
									},
									new b.calendar({
										paddingX: 2,
										multiple: true,
										view: new Date(),
										startDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 3),
										endDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 3),
										on: {
											"change.bs.calendar": (event) => {
												const target = event.target as Element;
												const detail = (event as CustomEvent).detail;
												e.console(target, "change.bs.calendar", detail, "success");
											},
										},
									})
								),
							]),
							new b.dropdown.container([
								new b.dropdown.button({ autoClose: "outside" }, "Dark dropdown"),
								new b.dropdown.menu(
									{
										theme: "dark",
										style: { minWidth: "320px" },
									},
									new b.calendar({
										paddingX: 2,
										multiple: true,
										view: new Date(),
										startDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 3),
										endDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 3),
										on: {
											"change.bs.calendar": (event) => {
												const target = event.target as Element;
												const detail = (event as CustomEvent).detail;
												e.console(target, "change.bs.calendar", detail, "success");
											},
										},
									})
								),
							]),
						];
					},
				}),

				new e.text("Change toggle"),
				new e.code({
					db: getContentCode(db),
					showConsole: true,
					outputAttr: {
						display: "flex",
						flex: "wrap",
						gap: 2,
					},
					output: () => {
						return [
							new b.dropdown.container([
								new b.dropdown.button({ autoClose: "outside" }, "Light dropdown"),
								new b.dropdown.menu(
									{
										theme: "light",
										style: { minWidth: "320px" },
									},
									new b.calendar({
										paddingX: 2,
										multiple: true,
										view: new Date(),
										startDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 3),
										endDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 3),
										on: {
											"change.bs.calendar": (event) => {
												const target = event.target as Element;
												const detail: {
													startDate: Date | undefined;
													endDate: Date | undefined;
												} = (event as CustomEvent).detail;
												e.console(target, "change.bs.calendar", detail, "success");

												//change toggle text
												const toggle = target.closest(".dropdown-menu")?.previousSibling as Element;
												toggle.innerHTML = `${detail.startDate ? detail.startDate.getDate() + "/" + detail.startDate.getMonth() + "/" + detail.startDate.getFullYear() : ""}${detail.endDate ? " - " : ""}${
													detail.endDate ? detail.endDate.getDate() + "/" + detail.endDate.getMonth() + "/" + detail.endDate.getFullYear() : ""
												}`;
											},
										},
									})
								),
							]),
						];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("List"),
				new e.code({
					db: getContentCode(db),
					showViewport: true,
					showCodepen: false,
					outputAttr: { class: "dropdown-menu-w-md-480px", display: "flex", flex: "wrap", gap: 4 },
					extention: [{ name: "MENUCOMPONENT", rename: "menuItem", output: menuItem }],
					output: () => {
						return [
							new b.dropdown.menu(
								{
									theme: "light",
									padding: 3,
									debug: true,
									shadow: true,
								},
								menuItem()
							),
							new b.dropdown.menu(
								{
									theme: "dark",
									padding: 3,
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
					db: getContentCode(db),
					showViewport: true,
					outputAttr: { class: "dropdown-menu-w-md-480px", display: "flex", flex: "wrap", gap: 2 },
					extention: [{ name: "MENUCOMPONENT", rename: "menuItem", output: menuItem }],
					output: () => {
						return [
							new b.dropdown.container([
								new b.dropdown.button("Light dropdown"),
								new b.dropdown.menu(
									{
										theme: "light",
										padding: 3,
									},
									menuItem()
								),
							]),
							new b.dropdown.container([
								new b.dropdown.button("Dark dropdown"),
								new b.dropdown.menu(
									{
										theme: "dark",
										padding: 3,
									},
									menuItem()
								),
							]),
						];
					},
				}),
			]),
		];
	},
	db: [
		{
			source: `() => {
return [
new b.dropdown.menu({
customStyle: 1,
theme: "light",
debug: true,
shadow: true,
style: {
width: "220px"
},
}, [new b.dropdown.item({
href: "#",
active: true
}, "Action"), new b.dropdown.item({
href: "#"
}, "Another action"), new b.dropdown.item({
href: "#"
}, "Something else here"), new b.dropdown.divider(), new b.dropdown.item({
href: "#"
}, "Separated link")]),
new b.dropdown.menu({
customStyle: 1,
theme: "dark",
debug: true,
shadow: true,
style: {
width: "220px"
}
}, [
new b.dropdown.item({
href: "#",
active: true
}, "Action"),
new b.dropdown.item({
href: "#"
}, "Another action"),
new b.dropdown.item({
href: "#"
}, "Something else here"),
new b.dropdown.divider(),
new b.dropdown.item({
href: "#"
}, "Separated link"),
]),
];
}`,
		},
		{
			source: `() => {
return [
new b.dropdown.container([
new b.dropdown.button("Light dropdown"),
new b.dropdown.menu({
customStyle: 1,
theme: "light"
}, [
new b.dropdown.item({
href: "#",
active: true
}, "Action"),
new b.dropdown.item({
href: "#"
}, "Another action"),
new b.dropdown.item({
href: "#"
}, "Something else here"),
new b.dropdown.divider(),
new b.dropdown.item({
href: "#"
}, "Separated link"),
]),
]),
new b.dropdown.container([
new b.dropdown.button("Dark dropdown"),
new b.dropdown.menu({
customStyle: 1,
theme: "dark"
}, [
new b.dropdown.item({
href: "#",
active: true
}, "Action"),
new b.dropdown.item({
href: "#"
}, "Another action"),
new b.dropdown.item({
href: "#"
}, "Something else here"),
new b.dropdown.divider(),
new b.dropdown.item({
href: "#"
}, "Separated link"),
]),
]),
];
}`,
		},
		{
			source: `() => {
return [
new b.dropdown.menu({
theme: "light",
paddingTop: 0,
debug: true,
shadow: true,
style: {
width: "280px"
}
}, [
new h.form({
padding: 2,
marginBottom: 2,
bgColor: "body-tertiary",
border: "bottom",
rounded: "top",
}, new b.input({
type: "search",
autocomplete: "off",
placeholder: "Type to filter...",
})),
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: new b.icon({
id: "record-fill",
textColor: "success"
})
}, "Action")),
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: new b.icon({
id: "record-fill",
textColor: "primary"
})
}, "Another action")),
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: new b.icon({
id: "record-fill",
textColor: "danger"
})
}, "Something else here")),
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: new b.icon({
id: "record-fill",
textColor: "info"
})
}, "Separated link")),
]),
new b.dropdown.menu({
theme: "dark",
paddingTop: 0,
debug: true,
shadow: true,
style: {
width: "280px"
}
}, [
new h.form({
padding: 2,
marginBottom: 2,
bgColor: "body-tertiary",
border: "bottom",
rounded: "top",
}, new b.input({
type: "search",
autocomplete: "off",
placeholder: "Type to filter...",
})),
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: new b.icon({
id: "record-fill",
textColor: "success"
})
}, "Action")),
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: new b.icon({
id: "record-fill",
textColor: "primary"
})
}, "Another action")),
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: new b.icon({
id: "record-fill",
textColor: "danger"
})
}, "Something else here")),
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: new b.icon({
id: "record-fill",
textColor: "info"
})
}, "Separated link")),
]),
];
}`,
		},
		{
			source: `() => {
return [
new b.dropdown.container([
new b.dropdown.button("Light dropdown"),
new b.dropdown.menu({
theme: "light",
paddingTop: 0
}, [
new h.form({
padding: 2,
marginBottom: 2,
bgColor: "body-tertiary",
border: "bottom",
rounded: "top",
}, new b.input({
type: "search",
autocomplete: "off",
placeholder: "Type to filter...",
})),
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: new b.icon({
id: "record-fill",
textColor: "success"
})
}, "Action")),
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: new b.icon({
id: "record-fill",
textColor: "primary"
})
}, "Another action")),
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: new b.icon({
id: "record-fill",
textColor: "danger"
})
}, "Something else here")),
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: new b.icon({
id: "record-fill",
textColor: "info"
})
}, "Separated link")),
]),
]),
new b.dropdown.container([
new b.dropdown.button("Dark dropdown"),
new b.dropdown.menu({
theme: "dark",
paddingTop: 0
}, [
new h.form({
padding: 2,
marginBottom: 2,
bgColor: "body-tertiary",
border: "bottom",
rounded: "top",
}, new b.input({
type: "search",
autocomplete: "off",
placeholder: "Type to filter...",
})),
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: new b.icon({
id: "record-fill",
textColor: "success"
})
}, "Action")),
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: new b.icon({
id: "record-fill",
textColor: "primary"
})
}, "Another action")),
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: new b.icon({
id: "record-fill",
textColor: "danger"
})
}, "Something else here")),
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: new b.icon({
id: "record-fill",
textColor: "info"
})
}, "Separated link")),
]),
]),
];
}`,
		},
		{
			source: `() => {
return [
new b.dropdown.menu({
theme: "light",
debug: true,
shadow: true,
style: {
width: "220px"
}
}, [
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: "files"
}, "Documents")),
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: "image-fill"
}, "Photos")),
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: "film"
}, "Movie")),
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: "music-note-beamed"
}, "Music")),
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: "joystick"
}, "Games")),
new b.dropdown.divider(),
new b.dropdown.item({
href: "#",
color: "danger",
bgColorActive: "danger",
bgColorFocus: "danger",
textColorActive: "light",
textColorFocus: "light",
}, new b.caption({
icon: "trash"
}, "Trash")),
]),
new b.dropdown.menu({
theme: "dark",
debug: true,
shadow: true,
style: {
width: "220px"
}
}, [
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: "files"
}, "Documents")),
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: "image-fill"
}, "Photos")),
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: "film"
}, "Movie")),
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: "music-note-beamed"
}, "Music")),
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: "joystick"
}, "Games")),
new b.dropdown.divider(),
new b.dropdown.item({
href: "#",
color: "danger",
bgColorActive: "danger",
bgColorFocus: "danger",
textColorActive: "light",
textColorFocus: "light",
}, new b.caption({
icon: "trash"
}, "Trash")),
]),
];
}`,
		},
		{
			source: `() => {
return [
new b.dropdown.container([
new b.dropdown.button("Light dropdown"),
new b.dropdown.menu({
theme: "light"
}, [
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: "files"
}, "Documents")),
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: "image-fill"
}, "Photos")),
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: "film"
}, "Movie")),
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: "music-note-beamed"
}, "Music")),
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: "joystick"
}, "Games")),
new b.dropdown.divider(),
new b.dropdown.item({
href: "#",
color: "danger"
}, new b.caption({
icon: "trash"
}, "Trash")),
]),
]),
new b.dropdown.container([
new b.dropdown.button("Dark dropdown"),
new b.dropdown.menu({
theme: "dark"
}, [
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: "files"
}, "Documents")),
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: "image-fill"
}, "Photos")),
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: "film"
}, "Movie")),
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: "music-note-beamed"
}, "Music")),
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: "joystick"
}, "Games")),
new b.dropdown.divider(),
new b.dropdown.item({
href: "#"
}, new b.caption({
icon: "trash"
}, "Trash")),
]),
]),
];
}`,
		},
		{
			source: `() => {
return [
new b.dropdown.menu({
theme: "light",
debug: true,
shadow: true,
style: {
minWidth: "320px"
}
}, new b.calendar({
paddingX: 2,
view: new Date(),
startDate: new Date(),
on: {
"change.bs.calendar": (event) => {
const target = event.target;
const detail = event.detail;
e.console(target, "change.bs.calendar", detail, "success");
},
},
})),
new b.dropdown.menu({
theme: "dark",
debug: true,
shadow: true,
style: {
minWidth: "320px"
}
}, new b.calendar({
paddingX: 2,
view: new Date(),
startDate: new Date(),
on: {
"change.bs.calendar": (event) => {
const target = event.target;
const detail = event.detail;
e.console(target, "change.bs.calendar", detail, "success");
},
},
})),
];
}`,
		},
		{
			source: `() => {
return [
new b.dropdown.container([
new b.dropdown.button({
autoClose: "outside"
}, "Light dropdown"),
new b.dropdown.menu({
theme: "light",
style: {
minWidth: "320px"
},
}, new b.calendar({
paddingX: 2,
view: new Date(),
startDate: new Date(),
on: {
"change.bs.calendar": (event) => {
const target = event.target;
const detail = event.detail;
e.console(target, "change.bs.calendar", detail, "success");
},
},
})),
]),
new b.dropdown.container([
new b.dropdown.button({
autoClose: "outside"
}, "Dark dropdown"),
new b.dropdown.menu({
theme: "dark",
style: {
minWidth: "320px"
}
}, new b.calendar({
paddingX: 2,
view: new Date(),
startDate: new Date(),
on: {
"change.bs.calendar": (event) => {
const target = event.target;
const detail = event.detail;
e.console(target, "change.bs.calendar", detail, "success");
},
},
})),
]),
];
}`,
		},
		{
			source: `() => {
return [
new b.dropdown.menu({
theme: "light",
debug: true,
shadow: true,
style: {
minWidth: "320px"
}
}, new b.calendar({
paddingX: 2,
multiple: true,
view: new Date(),
startDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 3),
endDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 3),
on: {
"change.bs.calendar": (event) => {
const target = event.target;
const detail = event.detail;
e.console(target, "change.bs.calendar", detail, "success");
},
},
})),
new b.dropdown.menu({
theme: "dark",
debug: true,
shadow: true,
style: {
minWidth: "320px"
}
}, new b.calendar({
paddingX: 2,
multiple: true,
view: new Date(),
startDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 3),
endDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 3),
on: {
"change.bs.calendar": (event) => {
const target = event.target;
const detail = event.detail;
e.console(target, "change.bs.calendar", detail, "success");
},
},
})),
];
}`,
		},
		{
			source: `() => {
return [
new b.dropdown.container([
new b.dropdown.button({
autoClose: "outside"
}, "Light dropdown"),
new b.dropdown.menu({
theme: "light",
style: {
minWidth: "320px"
},
}, new b.calendar({
paddingX: 2,
multiple: true,
view: new Date(),
startDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 3),
endDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 3),
on: {
"change.bs.calendar": (event) => {
const target = event.target;
const detail = event.detail;
e.console(target, "change.bs.calendar", detail, "success");
},
},
})),
]),
new b.dropdown.container([
new b.dropdown.button({
autoClose: "outside"
}, "Dark dropdown"),
new b.dropdown.menu({
theme: "dark",
style: {
minWidth: "320px"
},
}, new b.calendar({
paddingX: 2,
multiple: true,
view: new Date(),
startDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 3),
endDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 3),
on: {
"change.bs.calendar": (event) => {
const target = event.target;
const detail = event.detail;
e.console(target, "change.bs.calendar", detail, "success");
},
},
})),
]),
];
}`,
		},
		{
			source: `() => {
return [
new b.dropdown.container([
new b.dropdown.button({
autoClose: "outside"
}, "Light dropdown"),
new b.dropdown.menu({
theme: "light",
style: {
minWidth: "320px"
},
}, new b.calendar({
paddingX: 2,
multiple: true,
view: new Date(),
startDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 3),
endDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 3),
on: {
"change.bs.calendar": (event) => {
const target = event.target;
const detail = event.detail;
e.console(target, "change.bs.calendar", detail, "success");
//change toggle text
const toggle = target.closest(".dropdown-menu")?.previousSibling;
toggle.innerHTML = \`\${detail.startDate ? detail.startDate.getDate() + "/" + detail.startDate.getMonth() + "/" + detail.startDate.getFullYear() : ""}\${detail.endDate ? " - " : ""}\${detail.endDate ? detail.endDate.getDate() + "/" + detail.endDate.getMonth() + "/" + detail.endDate.getFullYear() : ""}\`;
},
},
})),
]),
];
}`,
		},
		{
			source: `() => {
return [
new b.dropdown.menu({
theme: "light",
padding: 3,
debug: true,
shadow: true,
}, MENUCOMPONENT()),
new b.dropdown.menu({
theme: "dark",
padding: 3,
debug: true,
shadow: true,
}, MENUCOMPONENT()),
];
}`,

			extention: [
				`() => {
return new h.div({
display: "flex",
flex: ["column", "lg-row"],
alignItem: "stretch",
justifyContent: "start",
}, [
new h.nav({
col: "lg-8"
}, new h.ul({
unstyle: true,
display: "flex",
flex: "column",
gap: 2,
}, [
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
}, ].map((i) => {
return new h.li([
new h.a({
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
textColor: "body",
textColorHover: "primary",
bgColorHover: "body-tertiary",
}, [new b.icon({
id: i.icon,
style: {
fontSize: "1.5em"
}
}), new h.div([new h.b({
display: "block"
}, i.title), new h.small(i.description)])]),
]);
}))),
new b.verticalrule({
display: ["none", "lg-block"],
opacity: 25,
marginX: 4,
}),
new h.hr({
display: "lg-none"
}),
new h.div({
col: "lg-auto",
paddingEnd: 3
}, new h.ul({
display: "flex",
flex: "column",
gap: 2,
unstyle: true,
small: true,
marginBottom: 2,
}, [
{
href: "#",
label: "Documentation"
},
{
href: "#",
label: "Use cases"
},
{
href: "#",
label: "API status"
},
{
href: "#",
label: "Partners"
},
{
href: "#",
label: "Resources"
}, ].map((i) => {
return new h.li(new h.a({
href: i.href,
linkOffset: 2,
linkUnderline: true,
linkUnderlineOpacity: 25,
linkUnderlineOpacityHover: 75,
}, i.label));
}))),
]);
}`,
			],
		},
		{
			source: `() => {
return [
new b.dropdown.container([
new b.dropdown.button("Light dropdown"),
new b.dropdown.menu({
theme: "light",
padding: 3,
}, MENUCOMPONENT()),
]),
new b.dropdown.container([
new b.dropdown.button("Dark dropdown"),
new b.dropdown.menu({
theme: "dark",
padding: 3,
}, MENUCOMPONENT()),
]),
];
}`,

			extention: [
				`() => {
return new h.div({
display: "flex",
flex: ["column", "lg-row"],
alignItem: "stretch",
justifyContent: "start",
}, [
new h.nav({
col: "lg-8"
}, new h.ul({
unstyle: true,
display: "flex",
flex: "column",
gap: 2,
}, [
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
}, ].map((i) => {
return new h.li([
new h.a({
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
textColor: "body",
textColorHover: "primary",
bgColorHover: "body-tertiary",
}, [new b.icon({
id: i.icon,
style: {
fontSize: "1.5em"
}
}), new h.div([new h.b({
display: "block"
}, i.title), new h.small(i.description)])]),
]);
}))),
new b.verticalrule({
display: ["none", "lg-block"],
opacity: 25,
marginX: 4,
}),
new h.hr({
display: "lg-none"
}),
new h.div({
col: "lg-auto",
paddingEnd: 3
}, new h.ul({
display: "flex",
flex: "column",
gap: 2,
unstyle: true,
small: true,
marginBottom: 2,
}, [
{
href: "#",
label: "Documentation"
},
{
href: "#",
label: "Use cases"
},
{
href: "#",
label: "API status"
},
{
href: "#",
label: "Partners"
},
{
href: "#",
label: "Resources"
}, ].map((i) => {
return new h.li(new h.a({
href: i.href,
linkOffset: 2,
linkUnderline: true,
linkUnderlineOpacity: 25,
linkUnderlineOpacityHover: 75,
}, i.label));
}))),
]);
}`,
			],
		},
	],
};
