import { b, h } from "@printf83/bsts";
import { setupContentDocument } from "./content.js";

export interface IInsideLink {
	value: string;
	label: string;
}

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
									click: (e: Event) => {
										const target = e.currentTarget as Element;
										const value = target.getAttribute("data-value");
										if (value) {
											setupContentDocument(value);
										}
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
