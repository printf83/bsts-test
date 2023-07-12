import { setupContentDocument } from "./content.js";
import { highlightMenu } from "./menu.js";

export interface IWindowState {
	docId?: string;
	anchorId?: string;
	isfirsttime?: boolean;
}

export const pushState = (arg: { docId: string; anchorId?: string; isfirsttime?: boolean; pagetitle: string; origin?: string; pathname?: string; value: string }) => {
	const { origin, pathname } = window.location;
	arg.origin ??= origin;
	arg.pathname ??= pathname;
	arg.isfirsttime ??= true;

	window.history.pushState(
		{
			docId: arg.docId,
			anchorId: arg.anchorId,
			isfirsttime: arg.isfirsttime,
		} satisfies IWindowState,
		arg.pagetitle,
		`${arg.origin}${arg.pathname}?d=${arg.value}`
	);
};

export const replaceState = (arg: { docId: string; anchorId?: string; isfirsttime?: boolean; pagetitle: string; origin?: string; pathname?: string; value: string }) => {
	const { origin, pathname } = window.location;
	arg.origin ??= origin;
	arg.pathname ??= pathname;
	arg.isfirsttime ??= true;

	window.history.replaceState(
		{
			docId: arg.docId,
			anchorId: arg.anchorId,
			isfirsttime: arg.isfirsttime,
		} satisfies IWindowState,
		arg.pagetitle,
		`${arg.origin}${arg.pathname}?d=${arg.value}`
	);
};

export const setupState = () => {
	window.onpopstate = function (e) {
		if (e.state) {
			const state: IWindowState = e.state as IWindowState;
			setupContentDocument(`${state.docId}${state.anchorId ? "#" : ""}${state.anchorId ? state.anchorId : ""}`, true, "replace");
			highlightMenu(state.docId);
		}
	};
};
