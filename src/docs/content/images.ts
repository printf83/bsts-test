import { b, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const images: IAttrContent = {
	title: "Images",
	description:
		"Documentation and examples for opting images into responsive behavior (so they never become wider than their parent) and add lightweight styles to them—all via classes.",
	item: [
		//-----------------------

		new e.title("Responsive images"),
		new e.text(
			"Images in Bootstrap are made responsive with {{.img-fluid}}. This applies {{max-width: 100%;}} and {{height: auto;}} to the image so that it scales with the parent width."
		),
		new e.code({
			output: () => {
				return new b.img({ fluid: true, src: "https://picsum.photos/seed/bsts_0/710/250", alt: "..." });
			},
		}),

		new e.title(""),
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
