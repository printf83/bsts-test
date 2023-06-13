import { b, core, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const modals: IAttrContent = {
	title: "Modals",
	description: "Transform modals to serve any purpose, from feature tours to dialogs.",
	item: [
		new e.title("IOS Style"),
		new e.code({
			previewAttr: { bgColor: "body-tertiary" },
			showCodepen: false,
			output: () => {
				return new b.modal.container({ debug: true, contentAttr: { rounded: 4 } }, [
					new b.modal.header({ close: true, borderNone: "bottom" }, new b.modal.title("Modal title")),
					new b.modal.body(
						{ paddingY: 0 },
						new h.p(
							"This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS."
						)
					),
					new b.modal.footer(
						{
							flex: "column",
							alignItem: "stretch",
							width: 100,
							gap: 2,
							paddingBottom: 3,
							borderNone: "top",
						},
						[
							new b.button({ color: "primary", weight: "lg" }, "Save changes"),
							new b.button(
								{
									dismiss: "modal",
									color: "secondary",
									weight: "lg",
								},
								"Close"
							),
						]
					),
				]);
			},
		}),

		new e.code({
			output: () => {
				return new h.div(
					{
						id: "abcTestNode",
						on: {
							build: (event) => {
								const target = event.target as Element;
								setTimeout(() => {
									core.replaceWith(target, new h.div({ id: "defTestNode" }, "Element changed"));
								}, 5000);
							},
						},
					},
					"This element will change after 5 second"
				);
			},
		}),

		//-----------------------

		new e.title("Android Style"),
		new e.code({
			previewAttr: { bgColor: "body-tertiary" },
			showCodepen: false,
			output: () => {
				return new b.modal.container({ debug: true }, [
					new b.modal.body({ padding: 4, textAlign: "center" }, [
						new b.modal.title({ marginBottom: 0 }, "Enable this setting?"),
						new h.p({ marginBottom: 0 }, "You can always change your mind in your account settings."),
					]),
					new b.modal.footer(
						{
							flex: ["nowrap", "grow-1"],
							padding: 0,
						},
						[
							new b.button(
								{
									fontWeight: "bold",
									border: "end",
									flex: "grow-1",
									textDecoration: "none",
									color: "link",
									rounded: 0,
									weight: "lg",
									fontSize: 6,
									paddingY: 3,
									margin: 0,
								},
								"Yes, enable"
							),
							new b.button(
								{
									dismiss: "modal",
									flex: "grow-1",
									textDecoration: "none",
									color: "link",
									rounded: 0,
									weight: "lg",
									fontSize: 6,
									paddingY: 3,
									margin: 0,
								},
								"No thanks"
							),
						]
					),
				]);
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
