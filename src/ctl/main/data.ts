import { doc } from "../../docs/_index.js";
import { isInBookmark } from "./bookmark.js";
import { IContent } from "./content.js";
import * as e from "../example/_index.js";
import { b, h } from "@printf83/bsts";

const contentNotFound = (key: string) => {
	return {
		title: "404 Not Found",
		description: `Oops! It seems like you've stumbled upon uncharted territory.`,
		sourceUrl: `https://github.com/printf83/bsts-test/blob/beta/src/doc/_index.ts`,
		sourceWeb: "Github",
		item: () => {
			return [
				new e.section([
					new e.text(
						`Content for {{${key}\}} couldn't be located. Perhaps it has been moved, deleted, or never even existed in the first place. We apologize for any inconvenience this may have caused. Head back to our {{nav:docs/gettingstarted/home::homepage}} to explore the site from the beginning.`
					),
				]),
			];
		},
	} as IContent;
};

export const getContent = (docId: string, callback: (arg: IContent) => void) => {
	let tValue = docId.split("/");
	if (tValue.length === 3 && tValue[0] === "docs") {
		doc(docId, (c) => {
			if (c) {
				c.usedb = true;
				c.docId = docId;
				c.bookmark = isInBookmark(docId);
				c.sourceUrl = `https://github.com/printf83/bsts-test/blob/beta/src/${docId}.ts`;
				c.sourceWeb = "Github";
				callback(c);
			} else {
				callback(contentNotFound(docId));
			}
		});
	} else {
		callback(contentNotFound(docId));
	}
};
