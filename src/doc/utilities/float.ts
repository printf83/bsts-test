import { h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const float: IAttrContent = {
	title: "Float",
	description: "Toggle floats on any element, across any breakpoint, using our responsive float utilities.",
	item: [
		new e.title("Overview"),
		new e.text(
			"These utility classes float an element to the left or right, or disable floating, based on the current viewport size using the {{https://developer.mozilla.org/en-US/docs/Web/CSS/float::CSS float property}}. {{!important}} is included to avoid specificity issues. These use the same viewport breakpoints as our grid system. Please be aware float utilities have no effect on flex items."
		),
		new e.code({
			output: () => {
				return [
					new h.div({ float: "start" }, "Float start on all viewport sizes"),
					new h.br(),
					new h.div({ float: "end" }, "Float end on all viewport sizes"),
					new h.br(),
					new h.div({ float: "none" }, "Don't float on all viewport sizes"),
				];
			},
		}),

		//-----------------------

		new e.title("Responsive"),
		new e.text("Responsive variations also exist for each {{float}} value."),
		new e.code({
			output: () => {
				return [
					new h.div({ float: "sm-start" }, "Float start on viewports sized SM (small) or wider"),
					new h.br(),
					new h.div({ float: "md-start" }, "Float start on viewports sized MD (medium) or wider"),
					new h.br(),
					new h.div({ float: "lg-start" }, "Float start on viewports sized LG (large) or wider"),
					new h.br(),
					new h.div({ float: "xl-start" }, "Float start on viewports sized XL (extra-large) or wider"),
				];
			},
		}),
		new e.text("Here are all the support classes:"),
		new e.ul({
			item: [
				...["", "-sm", "-md", "-lg", "-xl", "-xxl"]
					.map((i) => {
						return ["start", "end", "none"].map((j) => `{{.float${i}-${j}}}`);
					})
					.flat(),
			],
		}),

		//-----------------------

		new e.title("Sass"),

		//-----------------------

		new e.subtitle("Utilities API"),
		new e.text(
			"Flexbox utilities are declared in our utilities API in {{scss/_utilities.scss}}. {{https://getbootstrap.com/docs/5.3/utilities/api/#using-the-api::Learn how to use the utilities API}}."
		),
		new e.codepreview({
			type: "css",
			title: "scss/_utilities.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_utilities.scss",
			code: `
				"float": (
				responsive: true,
				property: float,
				values: (
					start: left,
					end: right,
					none: none,
				)
				),
			`,
		}),
	],
};
