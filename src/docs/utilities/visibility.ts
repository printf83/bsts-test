import { h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";

export const visibility: IContent = {
	title: "Visibility",
	description:
		"Control the visibility of elements, without modifying their display, with visibility utilities.",
	item: (db?: e.ISourceDB[]) => {
		resetContentIndex();

		return [
			new e.section([
				new e.text(
					"Set the {{visibility}} of elements with Bootstrap visibility utilities. These utility classes do not modify the {{display}} value at all and do not affect layout – {{.invisible}} elements still take up space in the page."
				),
				new e.alert(
					{ color: "warning", callout: true },
					"Elements with the {{.invisible}} class will be hidden {{i::both}} visually and for assistive technology/screen reader users."
				),
				new e.text("Apply {{.visible}} or {{.invisible}} as needed."),

				new e.code({
					db: getContentCode(db),
					output: () => {
						return [
							new h.div({ visible: true }, "Visible"),
							new h.div({ visible: false }, "Invisible"),
						];
					},
				}),

				new e.codepreview({
					type: "css",
					code: `
						// Class
						.visible {
						visibility: visible !important;
						}
						.invisible {
						visibility: hidden !important;
						}
						`,
				}),
			]),

			//----------------------

			new e.section([new e.title("Sass")]),

			//----------------------

			new e.section([
				new e.subtitle("Utilities API"),
				new e.text(
					"Visibility utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}."
				),
				new e.codepreview({
					type: "css",
					title: "scss/_utilities.scss",
					source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss",
					code: `
						"visibility": (
						property: visibility,
						class: null,
						values: (
							visible: visible,
							invisible: hidden,
						)
						),
					`,
				}),
			]),
		];
	},
};
