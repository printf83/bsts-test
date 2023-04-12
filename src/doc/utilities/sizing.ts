import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const sizing: IAttrContent = {
	title: "Sizing",
	description: "Easily make an element as wide or as tall with our width and height utilities.",
	item: [
		new e.title("Relative to the parent"),
		new e.text(
			"Width and height utilities are generated from the utility API in {{_utilities.scss}}. Includes support for {{25%}}, {{50%}}, {{75%}}, {{100%}}, and auto by default. Modify those values as you need to generate different utilities here."
		),
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
