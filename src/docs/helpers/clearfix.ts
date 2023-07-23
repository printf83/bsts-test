import { b, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";

export const clearfix: IContent = {
	title: "Clearfix",
	description:
		"Quickly and easily clear floated content within a container by adding a clearfix utility.",
	item: (db?: e.ISourceDB[]) => {
		resetContentIndex();

		return [
			new e.section([
				new e.text(
					"Easily clear {{floats}} by adding {{.clearfix}}{{b:: to the parent element}}. Can also be used as a mixin."
				),
				new e.text("Use in HTML:"),
				new e.codepreview({
					type: "html",
					code: `<div class="clearfix">...</div>`,
				}),
				new e.text("The mixin source code:"),
				new e.codepreview({
					type: "css",
					title: "scss/mixins/clearfix.scss",
					source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/mixins/clearfix.scss",
					code: `
						@mixin clearfix() {
						&::after {
							display: block;
							clear: both;
							content: "";
						}
						}
					`,
				}),
				new e.text("Use the mixin in SCSS:"),
				new e.codepreview({
					type: "css",
					code: `
						.element {
						@include clearfix;
						}

					`,
				}),
				new e.text(
					"The following example shows how the clearfix can be used. Without the clearfix the wrapping div would not span around the buttons which would cause a broken layout."
				),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.div({ bgColor: "info", clearfix: true }, [
							new b.button(
								{ float: "start", color: "secondary" },
								"Example button floated left"
							),
							new b.button(
								{ float: "end", color: "secondary" },
								"Example button floated right"
							),
						]);
					},
				}),
				new e.text("Without clearfix, it will look like this:"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.div({ bgColor: "info" }, [
							new b.button(
								{ float: "start", color: "secondary" },
								"Example button floated left"
							),
							new b.button(
								{ float: "end", color: "secondary" },
								"Example button floated right"
							),
						]);
					},
				}),
			]),
		];
	},
};
