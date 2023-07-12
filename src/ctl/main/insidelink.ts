import { b, core, h } from "@printf83/bsts";
import { setupContentDocument } from "./content.js";

export interface IAttrItemInsideLink {
	value: string;
	label: string;
}

const onInsideLinkClick = (value: string) => {
	let bsInsideLink = document.getElementById("bs-inside-link") as Element;

	let lastActive = bsInsideLink.querySelectorAll(".nav-link.active")[0];
	if (lastActive) {
		lastActive.classList.remove("active");
	}

	let newActive = bsInsideLink.querySelectorAll(`.nav-link[data-value='${value}']`)[0];
	if (newActive) {
		newActive.classList.add("active");
	}

	setupContentDocument(value);
};

export const setupInsideLink = (textColor: core.bootstrapType.textColor, itemInsideLink?: IAttrItemInsideLink[], currentInsideLink?: string) => {
	if (itemInsideLink) {
		return [
			new h.hr({ display: "lg-none", textColor: "light" }),
			new b.navbar.itemcontainer(
				{ flex: ["wrap", "row"], class: "bs-navbar-nav", id: "bs-inside-link" },
				itemInsideLink.map((i) => {
					return new b.navbar.item({ col: [6, "lg-auto"] }, [
						new b.navbar.link(
							{
								paddingY: 2,
								paddingX: [0, "lg-2"],
								href: "#",
								active: i.value === currentInsideLink,
								textColor: textColor,
								data: { value: i.value },
								on: {
									click: (_e) => {
										onInsideLinkClick(i.value);
									},
								},
							},
							i.label
						),
					]);
				})
			),
		];
	} else {
		return [];
	}
};
