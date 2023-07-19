import { DEFAULTDOCUMENT } from "./_db.js";
import { setupContentDocument } from "./content.js";
import { highlightMenu } from "./menu.js";

export interface IWindowState {
	docId?: string;
	anchorId?: string;
}

const getDocAndAnchorFromURL = (search: string, hash?: string) => {
	if (search) {
		return {
			docId: search.startsWith("?d=") ? search.slice(3) : undefined,
			anchorId: hash ? hash.slice(1) : undefined,
		};
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
	const { origin, pathname, search, hash } = window.location;
	const currentURL = getDocAndAnchorFromURL(search, hash);
	const currentPage = document.querySelector("h1.display-5.page-title-text")?.textContent;
	const currentPageTitle = arg.pagetitle
		? arg.pagetitle
		: currentPage
		? `${currentPage} · Bootstrap TS`
		: "Bootstrap TS";

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
	const { origin, pathname, search, hash } = window.location;
	const currentURL = getDocAndAnchorFromURL(search, hash);
	const currentPage = document.querySelector("h1.display-5.page-title-text")?.textContent;
	const currentPageTitle = arg.pagetitle
		? arg.pagetitle
		: currentPage
		? `${currentPage} · Bootstrap TS`
		: "Bootstrap TS";

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
