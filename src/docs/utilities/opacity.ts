import { core, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const opacity: IAttrContent = {
	title: "Opacity",
	description: "Control the opacity of elements.",
	item: () => {
		return [
			new e.text(
				"The {{opacity}} property sets the opacity level for an element. The opacity level describes the transparency level, where {{1}} is not transparent at all, {{.5}} is 50% visible, and {{0}} is completely transparent."
			),
			new e.text("Set the {{opacity}} of an element using {{.opacity-{value} }}utilities."),

			new e.code({
				outputAttr: { display: "flex", flex: "wrap", gap: 2 },
				output: () => {
					return [100, 75, 50, 25].map(
						(i) =>
							new h.div(
								{
									opacity: i as core.IAttr["opacity"],
									padding: 3,
									textBgColor: "primary",
									rounded: true,
									fontWeight: "bold",
									display: "inline-block",
								},
								`${i}%`
							)
					);
				},
			}),

			//-----------------------

			new e.title("Utilities API"),
			new e.text(
				"Opacity utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}."
			),
			new e.codepreview({
				type: "css",
				title: "scss/_utilities.scss",
				source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss",
				code: `
				"opacity": (
				property: opacity,
				values: (
					0: 0,
					25: .25,
					50: .5,
					75: .75,
					100: 1,
				)
				),
			`,
			}),
		];
	},
};
