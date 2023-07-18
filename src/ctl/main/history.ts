import { DEFAULTDOCUMENT } from "./_db.js";
import { setupContentDocument } from "./content.js";
import { highlightMenu } from "./menu.js";

export interface IWindowState {
	docId?: string;
	anchorId?: string;
}

const getDocAndAnchorFromURL = (search: string) => {
	if (search) {
		if (search.startsWith("?d=")) {
			search = search.substring(3);

			if (search.indexOf("#") > -1) {
				let splitSearch = search.split("#");
				if (splitSearch && splitSearch.length === 2) {
					return { docId: splitSearch[0], anchorId: splitSearch[1] };
				} else {
					return { docId: search, anchorId: undefined };
				}
			} else {
				return { docId: search, anchorId: undefined };
			}
		}
	}

	return undefined;
};

export const pushState = (arg: {
	docId?: string;
	anchorId?: string;
	pagetitle?: string;
	origin?: string;
	pathname?: string;
	value?: string;
}) => {
	const { origin, pathname, search } = window.location;
	const currentURL = getDocAndAnchorFromURL(search);
	const currentPage = document.querySelector("h1.display-5.page-title-text")?.textContent;
	const currentPageTitle = currentPage ? `${currentPage} · Bootstrap TS` : "Bootstrap TS";

	arg.origin ??= origin;
	arg.pathname ??= pathname;
	arg.docId ??= currentURL ? currentURL.docId : DEFAULTDOCUMENT;
	arg.anchorId ??= currentURL ? currentURL.anchorId : undefined;
	arg.pagetitle ??= currentPageTitle;
	arg.value ??= `${arg.docId}${arg.anchorId ? "#" : ""}${arg.anchorId ? arg.anchorId : ""}`;

	document.title = arg.pagetitle;

	window.history.pushState(
		{
			docId: arg.docId,
			anchorId: arg.anchorId,
		} satisfies IWindowState,
		arg.pagetitle,
		`${arg.origin}${arg.pathname}?d=${arg.value}`
	);
};

export const replaceState = (arg: {
	docId?: string;
	anchorId?: string;
	pagetitle?: string;
	origin?: string;
	pathname?: string;
	value?: string;
}) => {
	const { origin, pathname, search } = window.location;
	const currentURL = getDocAndAnchorFromURL(search);
	const currentPage = document.querySelector("h1.display-5.page-title-text")?.textContent;
	const currentPageTitle = currentPage ? `${currentPage} · Bootstrap TS` : "Bootstrap TS";

	arg.origin ??= origin;
	arg.pathname ??= pathname;
	arg.docId ??= currentURL ? currentURL.docId : DEFAULTDOCUMENT;
	arg.anchorId ??= currentURL ? currentURL.anchorId : undefined;
	arg.pagetitle ??= currentPageTitle;
	arg.value ??= `${arg.docId}${arg.anchorId ? "#" : ""}${arg.anchorId ? arg.anchorId : ""}`;

	document.title = arg.pagetitle;

	window.history.replaceState(
		{
			docId: arg.docId,
			anchorId: arg.anchorId,
		} satisfies IWindowState,
		arg.pagetitle,
		`${arg.origin}${arg.pathname}?d=${arg.value}`
	);
};

export const setupState = () => {
	window.onpopstate = function (e) {
		if (e.state) {
			const state: IWindowState = e.state as IWindowState;
			setupContentDocument(
				`${state.docId}${state.anchorId ? "#" : ""}${state.anchorId ? state.anchorId : ""}`,
				"replace"
			);
			highlightMenu(state.docId);
		}
	};
};
