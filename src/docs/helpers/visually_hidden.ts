import { h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IContent } from "../../ctl/main/content.js";

export const visually_hidden: IContent = {
	title: "Visually hidden",
	description: "Use these helpers to visually hide elements but keep them accessible to assistive technologies.",
	item: () => {
		return [
			new e.section([
				new e.text(
					"Visually hide an element while still allowing it to be exposed to assistive technologies (such as screen readers) with {{.visually-hidden}}. Use {{.visually-hidden-focusable}} to visually hide an element by default, but to display it when it’s focused (e.g. by a keyboard-only user). {{.visually-hidden-focusable}} can also be applied to a container–thanks to {{:focus-within}}, the container will be displayed when any child element of the container receives focus."
				),
				new e.code({
					output: () => {
						return [
							new h.h(2, { visually: "hidden" }, "Title for screen readers"),
							new h.a({ visually: "hidden-focusable", href: "#content" }, "Skip to main content"),
							new h.div({ visually: "hidden-focusable" }, ["A container wiht a ", new h.a({ href: "#" }, "focusable element"), "."]),
						];
					},
				}),
				new e.text("Both {{visually-hidden}} and {{visually-hidden-focusable}} can also be used as mixins."),
				new e.codepreview({
					type: "css",
					code: `
						// Usage as a mixin

						.visually-hidden-title {
						@include visually-hidden;
						}

						.skip-navigation {
						@include visually-hidden-focusable;
						}
						`,
				}),
			]),
		];
	},
};
