import { core, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const overflow: IAttrContent = {
	title: "Overflow",
	description: "Use these shorthand utilities for quickly configuring how content overflows an element.",
	item: [
		new e.title("Overflow"),
		new e.text(
			"Adjust the {{overflow}} property on the fly with four default values and classes. These classes are not responsive by default."
		),
		new e.code({
			previewAttr: { overflow: "hidden" },
			outputAttr: { display: ["md-flex", "grid"], gap: 1 },
			output: () => {
				return ["auto", "hidden", "visible", "scroll"].map((i, ix) => {
					return new h.div(
						{
							overflow: i as core.IAttr["overflow"],
							padding: 3,
							bgColor: "body-tertiary",
							style: { maxHeight: "100px", maxWidth: "260px" },
						},
						[
							`This is an example of using {{.overflow-${i} }}on an element with set width and height dimensions. `,
							i === "auto" ? "By design, this content will vertically scroll." : "",
						]
					);
				});
			},
		}),

		//-----------------------

		new e.subtitle("{{overflow-x}}"),
		new e.text("Adjust the {{overflow-x}} property to affect the overflow of content horizontally."),
		new e.code({
			previewAttr: { overflow: "hidden" },
			outputAttr: { display: ["md-flex", "grid"], gap: 1 },
			output: () => {
				return ["auto", "hidden", "visible", "scroll"].map((i, ix) => {
					return new h.div(
						{
							overflowX: i as core.IAttr["overflowX"],
							padding: 3,
							bgColor: "body-tertiary",
							style: { maxHeight: "100px", maxWidth: "200px", whiteSpace: "nowrap" },
						},
						[
							`{{.overflow-x-${i} }}example`,
							new h.br(),
							"on an element with set width and height dimensions.",
						]
					);
				});
			},
		}),

		//-----------------------

		new e.subtitle("{{overflow-y}}"),
		new e.text("Adjust the {{overflow-y}} property to affect the overflow of content vertically."),
		new e.code({
			previewAttr: { overflow: "hidden" },
			outputAttr: { display: ["md-flex", "grid"], gap: 1 },
			output: () => {
				return ["auto", "hidden", "visible", "scroll"].map((i, ix) => {
					return new h.div(
						{
							overflowY: i as core.IAttr["overflowY"],
							padding: 3,
							bgColor: "body-tertiary",
							style: { maxHeight: "100px", maxWidth: "200px" },
						},
						`This is an example of using {{.overflow-${i} }}on an element with set width and height dimensions.`
					);
				});
			},
		}),
		new e.text(
			"Using Sass variables, you may customize the overflow utilities by changing the {{$overflows}} variable in {{_variables.scss}}."
		),

		//-----------------------

		new e.title("Sass"),

		new e.subtitle("Utilities API"),
		new e.text(
			"Overflow utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}."
		),
		new e.codepreview({
			type: "css",
			title: "scss/_utilities.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_utilities.scss",
			code: `
				"overflow": (
				property: overflow,
				values: auto hidden visible scroll,
				),
				"overflow-x": (
				property: overflow-x,
				values: auto hidden visible scroll,
				),
				"overflow-y": (
				property: overflow-y,
				values: auto hidden visible scroll,
				),
			`,
		}),
	],
};