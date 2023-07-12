import { setupContentDocument } from "./content.js";
import { highlightMenu } from "./menu.js";

export interface IWindowState {
	docId?: string;
	anchorId?: string;
}

export const pushState = (arg: { docId: string; anchorId?: string; pagetitle: string; origin?: string; pathname?: string; value: string }) => {
	const { origin, pathname } = window.location;
	arg.origin ??= origin;
	arg.pathname ??= pathname;

	window.history.pushState(
		{
			docId: arg.docId,
			anchorId: arg.anchorId,
		} satisfies IWindowState,
		arg.pagetitle,
		`${arg.origin}${arg.pathname}?d=${arg.value}`
	);
};

export const replaceState = (arg: { docId: string; anchorId?: string; pagetitle: string; origin?: string; pathname?: string; value: string }) => {
	const { origin, pathname } = window.location;
	arg.origin ??= origin;
	arg.pathname ??= pathname;

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
			setupContentDocument(`${state.docId}${state.anchorId ? "#" : ""}${state.anchorId ? state.anchorId : ""}`, "replace");
			highlightMenu(state.docId);
		}
	};
};
