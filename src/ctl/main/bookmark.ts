import { b } from "@printf83/bsts";
import { cookie } from "./cookie.js";
import * as main from "./_index.js";
import { menu } from "./menu.js";
import { updateMenu } from "./container.js";

const getSavedBookmark = () => {
	let bookmarkCookie = cookie.get("saved_bookmark");
	if (bookmarkCookie) {
		return JSON.parse(bookmarkCookie) as main.IAttrItemSubMenu[];
	} else {
		return [];
	}
};

export let bm: main.IAttrItemSubMenu[] = getSavedBookmark();

const isInBookmark = (value: string) => {
	if (bm && bm.length > 0) {
		return bm.filter((i) => i.value === value).length > 0;
	} else {
		return false;
	}
};

const addToBookmark = (value: string) => {
	let label = document.getElementById("bs-menu")?.querySelector(`a[data-value="${value}"]`)?.textContent;
	if (label) {
		bm.push({
			label: label,
			value: value,
		});
	}
};

const removeFromBookmark = (value: string) => {
	bm = bm.filter((i) => i.value !== value);
};

export const onBookmarkChange = (value: string) => {
	if (isInBookmark(value)) {
		removeFromBookmark(value);
	} else {
		addToBookmark(value);
	}

	cookie.set("saved_bookmark", JSON.stringify(bm));
	updateMenu(genMenuWithBookmark(), cookie.get("current_page") || "docs/gettingstarted/introduction");
};

export const genMenuWithBookmark = () => {
	let result: main.IAttrItemMenu[] = [];

	if (bm && bm.length > 0) {
		result.push({
			icon: new b.icon({ id: "pin-fill", textColor: "secondary" }),
			label: "Pinned",
			item: bm,
		});
	}

	for (const doc of Object.values(menu.doc)) {
		let item = doc.item.filter((i) => !isInBookmark(i.value));
		if (item && item.length > 0) {
			result.push({
				icon: doc.icon,
				label: doc.label,
				item: item,
			});
		}
	}

	return result && result.length > 0 ? result : menu.doc;
};
