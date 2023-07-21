import { focusToAnchor, setupContentDocument } from "./content.js";
import { cookie } from "./cookie.js";
import { highlightMenu } from "./menu.js";

export interface IWindowState {
	docId?: string;
	anchorId?: string;
}

export const addHistory = (arg: {
	action?: "push" | "replace";
	docId: string;
	anchorId?: string;
	pagetitle: string;
	origin?: string;
	pathname?: string;
}) => {
	const { origin, pathname } = window.location;

	arg.action ??= "push";
	arg.origin ??= origin;
	arg.pathname ??= pathname;
	const value = `${arg.docId}${arg.anchorId ? "#" : ""}${arg.anchorId ? arg.anchorId : ""}`;

	if (arg.action === "push") {
		window.history.pushState(
			{
				docId: arg.docId,
				anchorId: arg.anchorId,
			} satisfies IWindowState,
			arg.pagetitle,
			`${arg.origin}${arg.pathname}?d=${value}`
		);
	} else {
		window.history.replaceState(
			{
				docId: arg.docId,
				anchorId: arg.anchorId,
			} satisfies IWindowState,
			arg.pagetitle,
			`${arg.origin}${arg.pathname}?d=${value}`
		);
	}
};

export const setupOnHistoryChange = () => {
	window.onpopstate = function (e) {
		if (e.state) {
			const state: IWindowState = e.state as IWindowState;
			const currentDocId = cookie.get("current_page");

			if (currentDocId === state.docId) {
				if (state.anchorId) {
					focusToAnchor(state.anchorId);
				} else {
					setupContentDocument(state.docId, false);
					highlightMenu(state.docId);
				}
			} else {
				setupContentDocument(
					`${state.docId}${state.anchorId ? "#" : ""}${
						state.anchorId ? state.anchorId : ""
					}`,
					false
				);
				highlightMenu(state.docId);
			}
		}
	};
};
