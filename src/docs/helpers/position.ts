import * as e from "../../ctl/example/_index.js";
import { IContent } from "../../ctl/main/content.js";

export const position: IContent = {
	title: "Position",
	description: "Use these helpers for quickly configuring the position of an element.",
	item: () => {
		return [
			new e.section([
				new e.title("Fixed top"),
				new e.text("Position an element at the top of the viewport, from edge to edge. Be sure you understand the ramifications of fixed position in your project; you may need to add additional CSS."),
				new e.codepreview({
					type: "js",
					code: `new h.div({fixed: "top"}, "...");`,
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Fixed bottom"),
				new e.text("Position an element at the bottom of the viewport, from edge to edge. Be sure you understand the ramifications of fixed position in your project; you may need to add additional CSS."),
				new e.codepreview({
					type: "js",
					code: `new h.div({fixed: "bottom"}, "...");`,
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Sticky top"),
				new e.text("Position an element at the top of the viewport, from edge to edge, but only after you scroll past it."),
				new e.codepreview({
					type: "js",
					code: `new h.div({sticky: "top"}, "...");`,
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Responsive sticky top"),
				new e.text("Responsive variations also exist for .sticky-top utility."),
				new e.codepreview({
					type: "js",
					code: `
						new h.div({sticky: "sm-top"}, "Stick to the top on viewports sized SM (small) or wider");
						new h.div({sticky: "md-top"}, "Stick to the top on viewports sized MD (medium) or wider");
						new h.div({sticky: "lg-top"}, "Stick to the top on viewports sized LG (large) or wider");
						new h.div({sticky: "xl-top"}, "Stick to the top on viewports sized XL (extra-large) or wider");
						new h.div({sticky: "xxl-top"}, "Stick to the top on viewports sized XXL (extra-extra-large) or wider");
					`,
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Sticky bottom"),
				new e.text("Position an element at the bottom of the viewport, from edge to edge, but only after you scroll past it."),
				new e.codepreview({
					type: "js",
					code: `new h.div({sticky: "bottom"}, "...");`,
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Responsive sticky bottom"),
				new e.text("Responsive variations also exist for .sticky-bottom utility."),
				new e.codepreview({
					type: "js",
					code: `
						new h.div({sticky: "sm-bottom"}, "Stick to the bottom on viewports sized SM (small) or wider");
						new h.div({sticky: "md-bottom"}, "Stick to the bottom on viewports sized MD (medium) or wider");
						new h.div({sticky: "lg-bottom"}, "Stick to the bottom on viewports sized LG (large) or wider");
						new h.div({sticky: "xl-bottom"}, "Stick to the bottom on viewports sized XL (extra-large) or wider");
						new h.div({sticky: "xxl-bottom"}, "Stick to the bottom on viewports sized XXL (extra-extra-large) or wider");
					`,
				}),
			]),
		];
	},
};
