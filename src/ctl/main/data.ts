import { doc } from "../../docs/_index.js";
import { isInBookmark } from "./bookmark.js";
import { IContent } from "./content.js";

const contentNotFound = (key: string) => {
	return {
		title: "Oooopppsss!",
		description: `Content {{${key} }}not found`,
		sourceUrl: `https://github.com/printf83/bsts-test/blob/beta/src/doc/_index.ts`,
		sourceWeb: "Github",
	} as IContent;
};

export const getContent = (docId: string, callback: (arg: IContent) => void) => {
	let tValue = docId.split("/");
	if (tValue.length === 3 && tValue[0] === "docs") {
		doc(docId, (c) => {
			if (c) {
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
