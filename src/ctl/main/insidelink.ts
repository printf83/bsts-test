import { b, h } from "@printf83/bsts";
import { setupContentDocument } from "./content.js";

export interface IInsideLink {
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

export const setupInsideLink = (itemInsideLink?: IInsideLink[], currentInsideLink?: string) => {
	if (itemInsideLink) {
		return [
			new h.hr({ display: "lg-none" }),
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
