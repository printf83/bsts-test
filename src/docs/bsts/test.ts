import { IContent, getContentCode, resetContentIndex } from "../../ctl/main/content.js";
import * as e from "../../ctl/example/_index.js";
import { b } from "@printf83/bsts";

export const test: IContent = {
	title: "Testing",
	description: "This is testing page to test our library one by one",
	item: (db?: e.IBsExampleData[]) => {
		resetContentIndex();

		return [
			//----------------------

			new e.section([
				new e.title("Duplicate ID"),
				new e.code({
					db: getContentCode(db),
					outputAttr: { display: "flex", gap: 2 },
					output: () => {
						return [
							new b.button("chart"),
							// new b.button({ id: "chart" }, "chart"),
							// new b.button({ id: "duplicate_id" }, "duplicate_id"),
							// new b.button({ id: "tooltip" }, "tooltip"),
						];
					},
				}),
			]),
		];
	},
};
