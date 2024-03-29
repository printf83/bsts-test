import { b, core, h, I } from "@printf83/bsts";
import { cookie } from "./cookie.js";

type Icon = I.b.icon;

export const getSavedTheme = () => {
	let themeCookie = cookie.get("current_theme");
	if (themeCookie) {
		return themeCookie;
	} else {
		return "auto";
	}
};

export const onThemeChange = (value: string) => {
	const ICONFORMAT = "png";
	cookie.set("current_theme", value);
	const faviconEl = document.querySelector('link[rel="icon"]') as HTMLLinkElement;

	if (value === "auto") {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			document.getElementsByTagName("HTML")[0]?.setAttribute("data-bs-theme", "dark");
			faviconEl.setAttribute("href", `favicon-light.${ICONFORMAT}`);
		} else {
			document.getElementsByTagName("HTML")[0]?.setAttribute("data-bs-theme", "light");
			faviconEl.setAttribute("href", `favicon.${ICONFORMAT}`);
		}
	} else {
		document.getElementsByTagName("HTML")[0]?.setAttribute("data-bs-theme", value);
		if (value === "dark") {
			faviconEl.setAttribute("href", `favicon-light.${ICONFORMAT}`);
		} else {
			faviconEl.setAttribute("href", `favicon.${ICONFORMAT}`);
		}
	}
};

export type availabelTheme = "dark" | "light" | "auto";

export interface ITheme {
	value: string;
	icon: Icon;
	label: string;
}

export const highlghtTheme = (value: string, icon: Icon) => {
	let bsTheme = document.getElementsByClassName("bs-theme");
	if (bsTheme && bsTheme.length > 0) {
		Array.from(bsTheme).forEach((elem) => {
			let bsThemeMenu = elem.nextSibling as Element;

			let lastActive = bsThemeMenu.querySelectorAll(".dropdown-item.active")[0];
			if (lastActive) {
				lastActive.classList.remove("active");
				lastActive.removeAttribute("aria-current");
			}

			let newActive = bsThemeMenu.querySelectorAll(
				`.dropdown-item[data-value='${value}']`
			)[0];
			if (newActive) {
				newActive.classList.add("active");
				newActive.setAttribute("aria-current", "true");
			}

			const elemIcon = elem.getElementsByTagName("i")[0] as Element;
			core.replaceWith(elemIcon, new b.icon(icon));
		});
	}

	//raise event
	onThemeChange(value);
};

export const setupTheme = (navbarItemTheme?: ITheme[], currentTheme?: string) => {
	const bsTheme = core.UUID();

	if (navbarItemTheme) {
		let currentThemeIcon: Icon | undefined;
		navbarItemTheme.forEach((i, ix) => {
			if (i.value === currentTheme) {
				currentThemeIcon = navbarItemTheme[ix]?.icon;
			}
		});

		return [
			new b.navbar.item(
				{
					paddingY: [2, "lg-1"],
					col: [12, "lg-auto"],
				},
				[
					new b.verticalrule({
						display: ["none", "lg-flex"],
						height: 100,
						marginX: "lg-2",
					}),
					new h.hr({ display: "lg-none", marginY: 2 }),
				]
			),
			new b.navbar.item({ dropdown: true }, [
				new b.dropdown.button(
					{
						navItem: true,
						id: bsTheme,
						class: "bs-theme",
						paddingY: 2,
						paddingX: [0, "lg-2"],
						display: "flex",
						alignItem: "center",
						label: "Toggle theme",
					},
					new b.caption(
						{
							icon: currentThemeIcon,
							labelDisplay: "lg-none",
						},
						"Toggle theme"
					)
				),
				new b.dropdown.menu(
					{
						positionView: "end",
						customStyle: 1,
					},
					navbarItemTheme.map((i) => {
						return new b.dropdown.item(
							{
								on: {
									click: (_e) => {
										highlghtTheme(i.value, i.icon);
									},
								},
								active: i.value === currentTheme,
								data: { value: i.value },
							},
							new b.caption({ icon: i.icon }, i.label)
						);
					})
				),
			]),
		];
	} else {
		return [];
	}
};

export const setupThemeChanges = () => {
	window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
		if (getSavedTheme() === "auto") {
			onThemeChange("auto");
		}
	});
};
