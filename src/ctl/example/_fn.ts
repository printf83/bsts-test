import { core, b, I, B } from "@printf83/bsts";

export const toast = (color: I.B.Toast.Simple["color"], elem: core.IElem, icon?: string) => {
	b.toast.show(
		B.Toast.Simple({
			title: document.title,
			color: color,
			elem: elem,
		})
	);
};
