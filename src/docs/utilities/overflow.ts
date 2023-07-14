import { core, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";

export const overflow: IContent = {
	title: "Overflow",
	description: "Use these shorthand utilities for quickly configuring how content overflows an element.",
	item: (db?: e.IBsExampleData[]) => {
		resetContentIndex();

		return [
			new e.section([
				new e.title("Overflow"),
				new e.text("Adjust the {{overflow}} property on the fly with four default values and classes. These classes are not responsive by default."),
				new e.code({
					db: getContentCode(db),
					previewAttr: { overflow: "hidden" },
					outputAttr: { display: ["md-flex", "grid"], gap: 2 },
					output: () => {
						return ["auto", "hidden", "visible", "scroll"].map((i) => {
							return new h.div(
								{
									overflow: i as core.IAttr["overflow"],
									padding: 3,
									bgColor: "body-tertiary",
									style: { maxHeight: "100px", maxWidth: "260px" },
								},
								[`This is an example of using {{.overflow-${i} }}on an element with set width and height dimensions. `, i === "auto" ? "By design, this content will vertically scroll." : ""]
							);
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("{{overflow-x}}"),
				new e.text("Adjust the {{overflow-x}} property to affect the overflow of content horizontally."),
				new e.code({
					db: getContentCode(db),
					previewAttr: { overflow: "hidden" },
					outputAttr: { display: ["md-flex", "grid"], gap: 2 },
					output: () => {
						return ["auto", "hidden", "visible", "scroll"].map((i) => {
							return new h.div(
								{
									overflowX: i as core.IAttr["overflowX"],
									padding: 3,
									bgColor: "body-tertiary",
									style: { maxHeight: "100px", maxWidth: "200px", whiteSpace: "nowrap" },
								},
								[`{{.overflow-x-${i} }}example{{br}}on an element with set width and height dimensions.`]
							);
						});
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle("{{overflow-y}}"),
				new e.text("Adjust the {{overflow-y}} property to affect the overflow of content vertically."),
				new e.code({
					db: getContentCode(db),
					previewAttr: { overflow: "hidden" },
					outputAttr: { display: ["md-flex", "grid"], gap: 2 },
					output: () => {
						return ["auto", "hidden", "visible", "scroll"].map((i) => {
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
				new e.text("Using Sass variables, you may customize the overflow utilities by changing the {{$overflows}} variable in {{_variables.scss}}."),
			]),

			//----------------------

			new e.section([new e.title("Sass")]),

			//----------------------

			new e.section([
				new e.subtitle("Utilities API"),
				new e.text("Overflow utilities are declared in Bootstrap utilities API in {{scss/_utilities.scss}}. {{nav:docs/utilities/api#using_the_api::Learn how to use the utilities API}}."),
				new e.codepreview({
					type: "css",
					title: "scss/_utilities.scss",
					source: "https://github.com/twbs/bootstrap/blob/v5.3.0/scss/_utilities.scss",
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
			]),
		];
	},
	db: [
		{
			source: `() => {
                        return ["auto", "hidden", "visible", "scroll"].map((i) => {
                            return new h.div({
                                overflow: i,
                                padding: 3,
                                bgColor: "body-tertiary",
                                style: { maxHeight: "100px", maxWidth: "260px" },
                            }, [\`This is an example of using {{.overflow-\${i} }}on an element with set width and height dimensions. \`, i === "auto" ? "By design, this content will vertically scroll." : ""]);
                        });
                    }`,
		},
		{
			source: `() => {
                        return ["auto", "hidden", "visible", "scroll"].map((i) => {
                            return new h.div({
                                overflowX: i,
                                padding: 3,
                                bgColor: "body-tertiary",
                                style: { maxHeight: "100px", maxWidth: "200px", whiteSpace: "nowrap" },
                            }, [\`{{.overflow-x-\${i} }}example{{br}}on an element with set width and height dimensions.\`]);
                        });
                    }`,
		},
		{
			source: `() => {
                        return ["auto", "hidden", "visible", "scroll"].map((i) => {
                            return new h.div({
                                overflowY: i,
                                padding: 3,
                                bgColor: "body-tertiary",
                                style: { maxHeight: "100px", maxWidth: "200px" },
                            }, \`This is an example of using {{.overflow-\${i} }}on an element with set width and height dimensions.\`);
                        });
                    }`,
		},
	],
};
