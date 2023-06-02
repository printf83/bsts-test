import { h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const vertical_align: IAttrContent = {
	title: "Vertical alignment",
	description: "Easily change the vertical alignment of inline, inline-block, inline-table, and table cell elements.",
	item: [
		new e.text(
			"Change the alignment of elements with the {{https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align::vertical-alignment}} utilities. Please note that vertical-align only affects inline, inline-block, inline-table, and table cell elements."
		),
		new e.text(
			"Choose from {{.align-baseline}}, {{.align-top}}, {{.align-middle}}, {{.align-bottom}}, {{.align-text-bottom}}, and {{.align-text-top}} as needed."
		),
		new e.text(
			"To vertically center non-inline content (like {{<div>}}s and more), use Bootstrap {{nav:docs/utilities/flex#align_items::flex box utilities}}."
		),
		new e.text("With inline elements:"),
		new e.code({
			output: () => {
				return [
					new h.span({ verticalAlign: "baseline" }, "baseline"),
					new h.span({ verticalAlign: "top" }, "top"),
					new h.span({ verticalAlign: "middle" }, "middle"),
					new h.span({ verticalAlign: "bottom" }, "bottom"),
					new h.span({ verticalAlign: "text-top" }, "text-top"),
					new h.span({ verticalAlign: "text-bottom" }, "text-bottom"),
				];
			},
		}),
		new e.text("With table cells:"),
		new e.code({
			output: () => {
				return new h.table(
					{ style: { height: "100px" } },
					new h.tbody(
						new h.tr([
							new h.td({ verticalAlign: "baseline" }, "baseline"),
							new h.td({ verticalAlign: "top" }, "top"),
							new h.td({ verticalAlign: "middle" }, "middle"),
							new h.td({ verticalAlign: "bottom" }, "bottom"),
							new h.td({ verticalAlign: "text-top" }, "text-top"),
							new h.td({ verticalAlign: "text-bottom" }, "text-bottom"),
						])
					)
				);
			},
		}),

		//-----------------------

		new e.title("Sass"),

		//-----------------------

		new e.subtitle("Utilities API"),
		new e.text(
			"Vertical align utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}."
		),
		new e.codepreview({
			type: "css",
			title: "scss/_utilities.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss",
			code: `
				"align": (
				property: vertical-align,
				class: align,
				values: baseline top middle bottom text-bottom text-top
				),
			`,
		}),
	],
};
