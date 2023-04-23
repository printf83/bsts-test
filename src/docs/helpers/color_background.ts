import { b, core, h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const color_background: IAttrContent = {
	title: "Color and background",
	description: "Set a background color with contrasting foreground color.",
	item: [
		new e.title("Overview"),
		new e.text(
			"Color and background helpers combine the power of Bootstrap {{nav:docs/utilities/colors::.text-* utilities}} and {{nav:docs/utilities/background::.bg-* utilities}} in one class. Using Bootstrap Sass {{color-contrast()}} function, Bootstrap automatically determine a contrasting {{color}} for a particular {{background-color}}."
		),
		new e.alert(
			{ color: "warning", callout: true },
			"{{b::Heads up! }}There’s currently no support for a CSS-native {{color-contrast}} function, so Bootstrap use Bootstrap own via Sass. This means that customizing Bootstrap theme colors via CSS variables may cause color contrast issues with these utilities."
		),
		new e.code({
			output: () => {
				return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map(
					(i) =>
						new h.div(
							{ textBgColor: i as core.IAttr["textBgColor"], padding: 3 },
							`${i.charAt(0).toUpperCase() + i.slice(1)} with contrasting color`
						)
				);
			},
		}),
		new e.alert(
			{ color: "info", callout: true },
			"{{b::Accessibility tip: }}Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies like screen readers. Please ensure the meaning is obvious from the content itself (e.g., the visible text) or is included through alternative means, such as additional text hidden with the {{.visually-hidden}} class."
		),

		//-----------------------

		new e.title("With components"),
		new e.text(
			"Use them in place of combined {{.text-*}} and {{.bg-*}} classes, like on {{nav:docs/components/badge#background-colors::badges}}:"
		),
		new e.code({
			outputAttr: { gap: 1 },
			output: () => {
				return [
					new b.badge({ textBgColor: "primary" }, "Primary"),
					new b.badge({ textBgColor: "info" }, "Info"),
				];
			},
		}),
		new e.text("Or on {{nav:docs/components/card#background_and_color::cards}}:"),
		new e.code({
			outputAttr: { gap: 3 },
			output: () => {
				const item = (textBgColor: core.IAttr["textBgColor"]) =>
					new b.card.container({ textBgColor: textBgColor, style: { width: "18rem" } }, [
						new b.card.header("Header"),
						new b.card.body(
							new b.card.text(
								"Some quick example text to build on the card title and make up the bulk of the card's content."
							)
						),
					]);
				return [item("primary"), item("info")];
			},
		}),
	],
};
