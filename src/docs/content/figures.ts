import { b, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const figures: IAttrContent = {
	title: "Figures",
	description:
		"Documentation and examples for displaying related images and text with the figure component in Bootstrap.",
	item: [
		new e.text(
			"Anytime you need to display a piece of content—like an image with an optional caption, consider using a {{<figure>}}."
		),
		new e.text(
			"Use the included {{.figure}}, {{.figure-img}} and {{.figure-caption}} classes to provide some baseline styles for the HTML5 {{<figure>}} and {{<figcaption>}} elements. Images in figures have no explicit size, so be sure to add the {{.img-fluid}} class to your {{<img>}} to make it responsive."
		),
		new e.code({
			output: () => {
				return new b.figure.container([
					new b.figure.img({
						fluid: true,
						rounded: true,
						src: "https://picsum.photos/seed/bsts_0/400/300",
						alt: "...",
					}),
					new b.figure.caption("A caption for the above image"),
				]);
			},
		}),

		new e.text(""),
		new e.ul({
			item: [
				"aaaaaaaaaaaaaaaaaaaaaaaa",
				"aaaaaaaaaaaaaaaaaaaaaaaa",
				"aaaaaaaaaaaaaaaaaaaaaaaa",
				"aaaaaaaaaaaaaaaaaaaaaaaa",
			],
		}),
		new e.alert({ color: "info", callout: true }, ""),
		new e.code({
			output: () => {
				return [];
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
