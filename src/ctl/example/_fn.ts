import { core, b } from "@printf83/bsts";

export const toast = (color: b.toast.IBsToastTemplate["color"], elem: core.IElem, icon?: string) => {
	b.toast.show(
		b.Toast.Simple({
			title: document.title,
			color: color,
			elem: elem,
		})
	);
};
