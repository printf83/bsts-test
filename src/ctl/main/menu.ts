import { Icon } from "../../../node_modules/@printf83/bsts/build/types/bootstrap/icon.js";

import { b, core, h } from "@printf83/bsts";
import { setupContentDocument } from "./content.js";

export interface IMenu {
	label: string;
	icon: Icon;
	item: IMenuItem[];
}

export interface IMenuItem {
	label: string;
	value: string;
	fullscreen?: boolean;
}

export const highlightMenu = (docId?: string) => {
	let bsLinks = document.getElementsByClassName("bs-links");

	if (bsLinks && bsLinks.length > 0) {
		Array.from(bsLinks).forEach((elem) => {
			let lastActive = elem.querySelectorAll(".bs-links-link.active")[0];
			if (lastActive) {
				lastActive.classList.remove("active");
				lastActive.removeAttribute("aria-current");
			}

			if (docId) {
				let newActive = elem.querySelectorAll(`.bs-links-link[data-value='${docId}']`)[0];
				if (newActive) {
					newActive.classList.add("active");
					newActive.setAttribute("aria-current", "page");
				}
			}
		});
	}
};

export const setupMenu = (itemMenu?: IMenu[], currentMenu?: string) => {
	if (itemMenu) {
		return itemMenu.map((i) => {
			return new h.li({ class: "bs-links-group", paddingY: 2 }, [
				new h.strong(
					{
						class: "bs-links-heading",
						display: "flex",
						width: 100,
						alignItem: "center",
						fontWeight: "semibold",
					},
					new b.caption({ icon: i.icon }, i.label)
				),
				new h.ul(
					{
						unstyle: true,
						fontWeight: "normal",
						paddingBottom: 2,
						small: true,
					},
					i.item.map((j) => {
						let itemValue = j.value;
						let itemLabel = j.label;
						let itemFullscreen = j.fullscreen;

						let active = itemValue === currentMenu ? true : false;

						return new h.li(
							new h.a(
								{
									class: ["bs-links-link", active ? "active" : undefined],
									display: "inline-block",
									rounded: true,
									href: `?d=${itemValue}`,
									aria: { current: active ? "page" : undefined },
									data: {
										value: itemValue,
										fullscreen: itemFullscreen,
									},
									on: {
										click: (event) => {
											event.preventDefault();
											event.stopPropagation();
											const target = event.target as Element;
											const itemValue = target.getAttribute("data-value");
											if (itemValue) {
												setupContentDocument(itemValue);
												highlightMenu(itemValue);
											}
										},
									},
								},
								itemLabel
							)
						);
					})
				),
			]);
		});
	} else {
		return [];
	}
};

export const setupMenuContainer = (itemMenu: IMenu[], currentMenu: string) => {
	const bsLinks = document.getElementsByClassName("bs-links");

	if (bsLinks && bsLinks.length > 0) {
		Array.from(bsLinks).forEach((elem) => {
			const bsMenu = elem.id;
			const bsLinksNav = elem.getElementsByClassName("bs-links-nav");
			if (bsLinksNav) {
				const bsSidebar = bsLinksNav[0]?.getAttribute("data-bs-target");
				if (bsSidebar) {
					core.replaceWith(
						elem,
						new h.nav(
							{
								id: bsMenu,
								class: "bs-links",
								width: 100,
								label: "Docs navication",
							},
							[
								new h.ul(
									{
										class: "bs-links-nav",
										unstyle: true,
										marginBottom: 0,
										paddingBottom: [3, "md-2"],
										paddingEnd: "lg-2",
										data: {
											"bs-dismiss": "offcanvas",
											"bs-target": bsSidebar,
										},
									},

									setupMenu(itemMenu, currentMenu)
								),
							]
						)
					);
				}
			}
		});
	}
};
