import { h } from "@printf83/bsts";
import * as e from "../../ctl/example/_index.js";
import { IAttrContent } from "../../ctl/main/container.js";

export const colored_links: IAttrContent = {
	title: "Colored links",
	description: "Colored links with hover states",
	item: [
		new e.title("Link colors"),
		new e.text(
			"You can use the {{.link-*}} classes to colorize links. Unlike the {{https://getbootstrap.com/docs/5.3/utilities/colors/::.text-* classes}}, these classes have a {{:hover}} and {{:focus}} state. Some of the link styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast."
		),
		new e.alert(
			{ color: "info", callout: true },
			"{{b::Heads up! }}{{.link-body-emphasis}} is currently the only colored link that adapts to color modes. It’s treated as a special case until v6 arrives and we can more thoroughly rebuild our theme colors for color modes. Until then, it’s a unique, high-contrast link color with custom {{:hover}} and {{:focus}} styles. However, it still responds to the new link utilities."
		),
		new e.code({
			output: () => {
				return [
					"primary",
					"secondary",
					"success",
					"danger",
					"warning",
					"info",
					"light",
					"dark",
					"body-emphasis",
				].map(
					(i) =>
						new h.p(
							new h.a(
								{ href: "#", linkColor: i as h.IAttrTagA["linkColor"] },
								`${i.charAt(0).toUpperCase() + i.slice(1)} link`
							)
						)
				);
			},
		}),
		new e.alert(
			{ color: "info", callout: true },
			"{{b::Accessibility tip: }}Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies like screen readers. Please ensure the meaning is obvious from the content itself (e.g., the visible text) or is included through alternative means, such as additional text hidden with the {{.visually-hidden}} class."
		),

		//-----------------------

		new e.title("Link utilities"),
		new e.text(
			"Colored links can also be modified by our {{https://getbootstrap.com/docs/5.3/utilities/link/::link utilities}}."
		),
		new e.code({
			output: () => {
				return [
					"primary",
					"secondary",
					"success",
					"danger",
					"warning",
					"info",
					"light",
					"dark",
					"body-emphasis",
				].map(
					(i) =>
						new h.p(
							new h.a(
								{
									href: "#",
									linkColor: i as h.IAttrTagA["linkColor"],
									linkOffset: 2,
									linkUnderlineOpacity: 25,
									linkUnderlineOpacityHover: 100,
								},
								`${i.charAt(0).toUpperCase() + i.slice(1)} link`
							)
						)
				);
			},
		}),
	],
};