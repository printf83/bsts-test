import { core, b } from "@printf83/bsts";

export const toast = (color: b.toast.IBsToastTemplate["color"], elem: core.IElem, icon?: string) => {
	//let tElem: core.IElem;
	// switch (color) {
	// 	case "danger":
	// 		tElem = new b.label({ icon: b.icon.bi(icon || "x-circle-fill", { fontSize: 5 }), elem: elem });
	// 		break;
	// 	case "dark":
	// 		tElem = new b.label({ icon: b.icon.bi(icon || "info-circle-fill", { fontSize: 5 }), elem: elem });
	// 		break;
	// 	case "info":
	// 		tElem = new b.label({ icon: b.icon.bi(icon || "info-circle-fill", { fontSize: 5 }), elem: elem });
	// 		break;
	// 	case "light":
	// 		tElem = new b.label({ icon: b.icon.bi(icon || "info-circle-fill", { fontSize: 5 }), elem: elem });
	// 		break;
	// 	case "primary":
	// 		tElem = new b.label({ icon: b.icon.bi(icon || "info-circle-fill", { fontSize: 5 }), elem: elem });
	// 		break;
	// 	case "secondary":
	// 		tElem = new b.label({ icon: b.icon.bi(icon || "info-circle-fill", { fontSize: 5 }), elem: elem });
	// 		break;
	// 	case "success":
	// 		tElem = new b.label({ icon: b.icon.bi(icon || "check-circle-fill", { fontSize: 5 }), elem: elem });
	// 		break;
	// 	case "warning":
	// 		tElem = new b.label({ icon: b.icon.bi(icon || "exclamation-triangle-fill", { fontSize: 5 }), elem: elem });
	// 		break;
	// 	default:
	// 		tElem = new b.label({ icon: b.icon.bi(icon || "info-circle-fill", { fontSize: 5 }), elem: elem });
	// }

	b.toast.show(
		"top-end",
		b.Toast.Simple({
			title: document.title,
			color: color,
			elem: elem,
		})
	);
};
