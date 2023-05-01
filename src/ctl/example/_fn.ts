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

export const console = (elem: Element, title?: string, msg?: string | object, color?: core.bootstrapType.textColor) => {
	const exampleCodeContainer = elem.closest(".example-code");
	if (exampleCodeContainer) {
		if (typeof msg !== "string") {
			let iserror = false;
			let result = "null";
			try {
				if (msg) {
					result = JSON.stringify(msg);
				}
			} catch (ex) {
				iserror = true;

				if (ex instanceof Error) {
					result = `{{u::Error!}} {{b::${ex.message}}}`;
				} else {
					result = "{{u::Error!}} {{b::Unknow error}}";
				}
			}

			msg = result;
			if (iserror) {
				color = "danger";
			}
		}

		exampleCodeContainer.dispatchEvent(
			new CustomEvent("bs.console.log", {
				detail: {
					title: title,
					msg: msg ? msg : "Message",
					color: color,
				},
			})
		);
	}
};
