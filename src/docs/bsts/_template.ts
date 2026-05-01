import * as e from "../../ctl/example/_index.js";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";
import { BOOTSTRAP_VERSION } from "../../ctl/main/env.js";

export const _template: IContent = {
	title: "",
	description: "",
	item: (db?: e.ISourceDB[]) => {
		resetContentIndex();

		return [
			new e.section([
				new e.title(""),
				new e.text(""),
				new e.ul({
					item: [
						"aaaaaaaaaaaaaaaaaaaaaaaa",
						"aaaaaaaaaaaaaaaaaaaaaaaa",
						"aaaaaaaaaaaaaaaaaaaaaaaa",
						"aaaaaaaaaaaaaaaaaaaaaaaa",
					],
				}),
				new e.alert({ color: "info", callout: true }, ""),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title(""),
				new e.text(""),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.subtitle(""),
				new e.text(""),
				new e.codepreview({
					type: "css",
					code: `
						`,
				}),
			]),

			//----------------------

			new e.section([new e.title("CSS"), new e.text("")]),

			//----------------------

			new e.section([
				new e.subtitle("Sass variables"),
				new e.text(""),
				new e.codepreview({
					type: "css",
					title: "scss/_variables.scss",
					source: `https://github.com/twbs/bootstrap/blob/v${BOOTSTRAP_VERSION}/scss/_variables.scss`,
					code: `
					`,
				}),
			]),
		];
	},
};
