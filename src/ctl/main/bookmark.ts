import { b } from "@printf83/bsts";
import { cookie } from "./cookie.js";
import { IMenu, IMenuItem, setupMenuContainer } from "./menu.js";
import { menu } from "./_db.js";

const getSavedBookmark = () => {
	let bookmarkCookie = cookie.get("saved_bookmark");
	if (bookmarkCookie) {
		return JSON.parse(bookmarkCookie) as IMenuItem[];
	} else {
		return [];
	}
};

export let bookmarkDB: IMenuItem[] = getSavedBookmark();

export const isInBookmark = (value: string) => {
	if (bookmarkDB && bookmarkDB.length > 0) {
		return bookmarkDB.filter((i) => i.value === value).length > 0;
	} else {
		return false;
	}
};

const addToBookmark = (value: string) => {
	const bsLinks = document.getElementsByClassName("bs-links");
	if (bsLinks && bsLinks.length > 0) {
		let label = bsLinks[0]?.querySelector(`a[data-value="${value}"]`)?.textContent;
		if (label) {
			bookmarkDB.push({
				label: label,
				value: value,
			});
		}
	}
};

const removeFromBookmark = (value: string) => {
	bookmarkDB = bookmarkDB.filter((i) => i.value !== value);
};

export const onBookmarkChange = (value: string) => {
	if (isInBookmark(value)) {
		removeFromBookmark(value);
	} else {
		addToBookmark(value);
	}

	cookie.set("saved_bookmark", JSON.stringify(bookmarkDB));
	setupMenuContainer(
		menuWithBookmark(),
		cookie.get("current_page") || "docs/gettingstarted/introduction"
	);
};

export const menuWithBookmark = () => {
	let result: IMenu[] = [];

	if (bookmarkDB && bookmarkDB.length > 0) {
		result.push({
			icon: new b.icon({ id: "pin-fill", textColor: "secondary" }),
			label: "Pinned",
			item: bookmarkDB,
		});
	}

	for (const doc of Object.values(menu)) {
		let item = doc.item.filter((i) => !isInBookmark(i.value));
		if (item && item.length > 0) {
			result.push({
				icon: doc.icon,
				label: doc.label,
				item: item,
			});
		}
	}

	return result && result.length > 0 ? result : menu;
};
