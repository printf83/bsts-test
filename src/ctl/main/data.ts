import { doc } from "../../docs/_index.js";
import { isInBookmark } from "./bookmark.js";
import { IContent } from "./content.js";
import * as e from "../example/_index.js";
import { menuItem } from "./_db.js";

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

const getNextPrevDoc = (docId: string) => {
	let menu = menuItem();
	let index = menu.findIndex((i) => {
		return i.value === docId;
	});

	if (index > -1) {
		let nextIndex = index + 1;
		let prevIndex = index - 1;

		if (nextIndex >= menu.length) {
			nextIndex = 0;
		}

		if (prevIndex < 0) {
			prevIndex = menu.length - 1;
		}

		return {
			prevDocId: menu[prevIndex]?.value,
			prevTitle: menu[prevIndex]?.label,
			nextDocId: menu[nextIndex]?.value,
			nextTitle: menu[nextIndex]?.label,
		};
	}

	return null;
};

export const getContent = (docId: string, callback: (arg: IContent) => void) => {
	let tValue = docId.split("/");
	if (tValue.length === 3 && tValue[0] === "docs") {
		doc(docId, (c) => {
			if (c) {
				const nextPrevData = getNextPrevDoc(docId);
				if (nextPrevData) {
					c.prevDocId = nextPrevData.prevDocId;
					c.prevTitle = nextPrevData.prevTitle;
					c.nextDocId = nextPrevData.nextDocId;
					c.nextTitle = nextPrevData.nextTitle;
				}

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
