import { b } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";

export const album: IContent = {
	title: "Album",
	description: "Fullscreen doc example",
	item: (db?: e.ISourceDB[]) => {
		resetContentIndex();

		return [
			new e.section([
				new e.title("Test title"),
				new e.text("test text"),
				new e.ul({
					item: [
						"aaaaaaaaaaaaaaaaaaaaaaaa",
						"aaaaaaaaaaaaaaaaaaaaaaaa",
						"aaaaaaaaaaaaaaaaaaaaaaaa",
						"aaaaaaaaaaaaaaaaaaaaaaaa",
					],
				}),
				new e.alert({ color: "info", callout: true }, "This is alert"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [new b.button("Hello world")];
					},
				}),
			]),

			//----------------------

			new e.section([
				new e.title("Test title 2"),
				new e.text("test text 2"),
				new e.code({
					db: getContentCode(db),
					output: () => {
						return [new b.button("Hello world2")];
					},
				}),
			]),

			//----------------------
		];
	},
};
