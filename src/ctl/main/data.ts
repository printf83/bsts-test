import * as main from "./_index.js";
import { doc } from "../../docs/_index.js";
import { bm } from "./bookmark.js";

const dataNotFound = (value: string) => {
	return {
		title: "Oooopppsss!",
		description: `Content {{${value} }}not found`,
		sourceUrl: `https://github.com/printf83/bsts-test/blob/main/src/doc/_index.ts`,
		sourceWeb: "Github",
	} as main.IAttrContent;
};

export const getData = (value: string, callback: (arg: main.IAttrContent) => void) => {
	let tValue = value.split("/");
	if (tValue.length === 3 && tValue[0] === "docs") {
		doc(value, (c) => {
			if (c) {
				c.docId = value;
				c.bookmark = bm.filter((i) => i.value === value).length > 0;
				c.sourceUrl = `https://github.com/printf83/bsts-test/blob/main/src/${value}.ts`;
				c.sourceWeb = "Github";
				callback(c);
			} else {
				callback(dataNotFound(value));
			}
		});
	} else {
		callback(dataNotFound(value));
	}
};
