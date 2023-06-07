import { b, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const dropdowns: IAttrContent = {
	title: "Dropdowns",
	description: "Enhance your dropdowns with filters, icons, custom styles, and more.",
	item: [
		new e.title("Custom style"),
		new e.code({
			showCodepen: false,
			outputAttr: {
				gap: 3,
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
				gap: 1,
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
				gap: 3,
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
				gap: 1,
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
				gap: 3,
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
				gap: 1,
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
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_variables.scss",
			code: `
			`,
		}),
	],
};
