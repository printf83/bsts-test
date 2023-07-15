import { b, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";

export const vertical_rule: IContent = {
	title: "Vertical rule",
	description: "Use the custom vertical rule helper to create vertical dividers like the {{<hr>}} element.",
	item: (db?: e.IBsExampleData[]) => {
		resetContentIndex();

		return [
			new e.section([
				new e.title("How it works"),
				new e.text("Vertical rules are inspired by the {{<hr>}} element, allowing you to create vertical dividers in common layouts. They’re styled just like {{<hr>}} elements:"),
				new e.ul({
					item: ["They’re {{1px}} wide", "They have {{min-height}} of {{1em}}", "Their color is set via {{currentColor}} and {{opacity}}"],
				}),
				new e.text("Customize them with additional styles as needed."),
			]),

			//----------------------

			new e.section([
				new e.title("Example"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new b.verticalrule();
					},
				}),
				new e.text("Vertical rules scale their height in flex layouts:"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return new h.div({ display: "flex", style: { height: "200px" } }, new b.verticalrule());
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("With stack"),
				new e.text("They can also be used in {{nav:docs/helpers/stacks::stacks}}:"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { class: "flex-box" },
					output: () => {
						return new h.div({ hstack: true, gap: 3 }, [new h.div({ padding: 2 }, "First item"), new h.div({ padding: 2, marginStart: "auto" }, "Second item"), new b.verticalrule(), new h.div({ padding: 2 }, "Third item")]);
					},
				}),
			]),
		];
	},
	db: [
		{
			source: `() => {
return new b.verticalrule();
}`,
		},
		{
			source: `() => {
return new h.div({
display: "flex",
style: {
height: "200px"
}
}, new b.verticalrule());
}`,
		},
		{
			source: `() => {
return new h.div({
hstack: true,
gap: 3
}, [new h.div({
padding: 2
}, "First item"), new h.div({
padding: 2,
marginStart: "auto"
}, "Second item"), new b.verticalrule(), new h.div({
padding: 2
}, "Third item")]);
}`,
		},
	],
};
