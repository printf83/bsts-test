import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const zindex: IAttrContent = {
	title: "Z-index",
	description:
		"While not a part of Bootstrap’s grid system, z-indexes play an important part in how our components overlay and interact with one another.",
	item: [
		new e.text(
			"Several Bootstrap components utilize {{z-index}}, the CSS property that helps control layout by providing a third axis to arrange content. We utilize a default z-index scale in Bootstrap that’s been designed to properly layer navigation, tooltips and popovers, modals, and more."
		),
		new e.text(
			"These higher values start at an arbitrary number, high and specific enough to ideally avoid conflicts. We need a standard set of these across our layered components—tooltips, popovers, navbars, dropdowns, modals—so we can be reasonably consistent in the behaviors. There’s no reason we couldn’t have used {{100+}} or {{500+}}."
		),
		new e.text(
			"We don’t encourage customization of these individual values; should you change one, you likely need to change them all."
		),

		new e.codepreview({
			type: "css",
			title: "scss/_variables.scss",
			source: "https://github.com/twbs/bootstrap/blob/v5.3.0-alpha3/scss/_variables.scss",
			code: `
				$zindex-dropdown:                   1000;
				$zindex-sticky:                     1020;
				$zindex-fixed:                      1030;
				$zindex-offcanvas-backdrop:         1040;
				$zindex-offcanvas:                  1045;
				$zindex-modal-backdrop:             1050;
				$zindex-modal:                      1055;
				$zindex-popover:                    1070;
				$zindex-tooltip:                    1080;
				$zindex-toast:                      1090;
			`,
		}),
		new e.text(
			"To handle overlapping borders within components (e.g., buttons and inputs in input groups), we use low single digit {{z-index}} values of {{1}}, {{2}}, and {{3}} for default, hover, and active states. On hover/focus/active, we bring a particular element to the forefront with a higher {{z-index}} value to show their border over the sibling elements."
		),
	],
};
